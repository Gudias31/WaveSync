#!/bin/bash

# CloudFrame Technology - Start Script
# Usage: ./start.sh [frontend|backend|all]

set -e

BLUE='\033[0;34m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

print_banner() {
    echo -e "${BLUE}"
    echo "╔════════════════════════════════════════════════════════╗"
    echo "║        CloudFrame Technology - Dev Server              ║"
    echo "╚════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
}

get_local_ip() {
    if command -v ipconfig &> /dev/null; then
        ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null || echo "127.0.0.1"
    elif command -v hostname &> /dev/null; then
        hostname -I 2>/dev/null | awk '{print $1}' || echo "127.0.0.1"
    else
        echo "127.0.0.1"
    fi
}

start_frontend() {
    echo -e "${YELLOW}Starting React Frontend...${NC}"
    cd frontend
    
    if [ ! -d "node_modules" ]; then
        echo -e "${BLUE}Installing frontend dependencies...${NC}"
        npm install
    fi
    
    LOCAL_IP=$(get_local_ip)
    echo -e "${GREEN}Frontend will be available at:${NC}"
    echo -e "  Local:   http://localhost:5173"
    echo -e "  Network: http://${LOCAL_IP}:5173"
    echo ""
    
    npm run dev &
    FRONTEND_PID=$!
    cd ..
}

start_backend() {
    echo -e "${YELLOW}Starting Python Backend...${NC}"
    cd backend
    
    if [ ! -d "venv" ]; then
        echo -e "${BLUE}Creating Python virtual environment...${NC}"
        python3 -m venv venv
    fi
    
    source venv/bin/activate
    
    if ! pip show fastapi &> /dev/null; then
        echo -e "${BLUE}Installing backend dependencies...${NC}"
        pip install -r requirements.txt
    fi
    
    LOCAL_IP=$(get_local_ip)
    echo -e "${GREEN}Backend will be available at:${NC}"
    echo -e "  Local:   http://localhost:8000"
    echo -e "  Network: http://${LOCAL_IP}:8000"
    echo -e "  Docs:    http://${LOCAL_IP}:8000/docs"
    echo ""
    
    uvicorn main:app --host 0.0.0.0 --port 8000 --reload &
    BACKEND_PID=$!
    cd ..
}

stop_servers() {
    echo -e "\n${YELLOW}Stopping servers...${NC}"
    if [ -n "$FRONTEND_PID" ]; then
        kill $FRONTEND_PID 2>/dev/null || true
    fi
    if [ -n "$BACKEND_PID" ]; then
        kill $BACKEND_PID 2>/dev/null || true
    fi
    echo -e "${GREEN}Servers stopped.${NC}"
    exit 0
}

trap stop_servers SIGINT SIGTERM

main() {
    print_banner
    
    COMMAND=${1:-all}
    
    case $COMMAND in
        frontend)
            start_frontend
            ;;
        backend)
            start_backend
            ;;
        all|*)
            start_backend
            sleep 2
            start_frontend
            ;;
    esac
    
    LOCAL_IP=$(get_local_ip)
    echo -e "${GREEN}═══════════════════════════════════════════════════════${NC}"
    echo -e "${GREEN}Services are running! Press Ctrl+C to stop.${NC}"
    echo ""
    echo -e "Frontend: http://${LOCAL_IP}:5173"
    echo -e "Backend:  http://${LOCAL_IP}:8000"
    echo -e "API Docs: http://${LOCAL_IP}:8000/docs"
    echo -e "${GREEN}═══════════════════════════════════════════════════════${NC}"
    
    wait
}

main "$@"
