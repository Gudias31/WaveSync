#!/usr/bin/env python3
"""
CloudFrame Technology - Cross-platform Start Script
Usage: python start.py [frontend|backend|all]
"""

import os
import sys
import subprocess
import time
import signal
import socket
from pathlib import Path

# Colors for terminal output
BLUE = '\033[94m'
GREEN = '\033[92m'
YELLOW = '\033[93m'
RED = '\033[91m'
NC = '\033[0m'

PROCESSES = []


def print_banner():
    print(f"{BLUE}")
    print("╔════════════════════════════════════════════════════════╗")
    print("║        CloudFrame Technology - Dev Server              ║")
    print("╚════════════════════════════════════════════════════════╝")
    print(f"{NC}")


def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except:
        return "127.0.0.1"


def run_command(cmd, cwd=None, shell=False):
    """Run a command and return the process"""
    if shell and isinstance(cmd, list):
        cmd = " ".join(cmd)
    
    process = subprocess.Popen(
        cmd if shell else cmd,
        cwd=cwd,
        shell=shell,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        preexec_fn=os.setsid if os.name != 'nt' else None
    )
    PROCESSES.append(process)
    return process


def start_frontend():
    print(f"{YELLOW}Starting React Frontend...{NC}")
    frontend_dir = Path(__file__).parent / "frontend"
    
    if not (frontend_dir / "node_modules").exists():
        print(f"{BLUE}Installing frontend dependencies...{NC}")
        subprocess.run(["npm", "install"], cwd=frontend_dir, check=True)
    
    local_ip = get_local_ip()
    print(f"{GREEN}Frontend will be available at:{NC}")
    print(f"  Local:   http://localhost:5173")
    print(f"  Network: http://{local_ip}:5173")
    print("")
    
    process = run_command(["npm", "run", "dev"], cwd=frontend_dir)
    return process


def start_backend():
    print(f"{YELLOW}Starting Python Backend...{NC}")
    backend_dir = Path(__file__).parent / "backend"
    venv_dir = backend_dir / "venv"
    
    # Create virtual environment if it doesn't exist
    if not venv_dir.exists():
        print(f"{BLUE}Creating Python virtual environment...{NC}")
        subprocess.run([sys.executable, "-m", "venv", str(venv_dir)], check=True)
    
    # Determine activate script path
    if os.name == 'nt':
        python_path = venv_dir / "Scripts" / "python.exe"
        pip_path = venv_dir / "Scripts" / "pip.exe"
    else:
        python_path = venv_dir / "bin" / "python"
        pip_path = venv_dir / "bin" / "pip"
    
    # Install dependencies if needed
    try:
        subprocess.run([str(python_path), "-c", "import fastapi"], 
                      capture_output=True, check=True)
    except subprocess.CalledProcessError:
        print(f"{BLUE}Installing backend dependencies...{NC}")
        subprocess.run([str(pip_path), "install", "-r", "requirements.txt"], 
                      cwd=backend_dir, check=True)
    
    local_ip = get_local_ip()
    print(f"{GREEN}Backend will be available at:{NC}")
    print(f"  Local:   http://localhost:8000")
    print(f"  Network: http://{local_ip}:8000")
    print(f"  Docs:    http://{local_ip}:8000/docs")
    print("")
    
    process = run_command(
        [str(python_path), "-m", "uvicorn", "main:app", "--host", "0.0.0.0", 
         "--port", "8000", "--reload"],
        cwd=backend_dir
    )
    return process


def stop_servers(signum=None, frame=None):
    print(f"\n{YELLOW}Stopping servers...{NC}")
    for process in PROCESSES:
        try:
            if os.name != 'nt':
                os.killpg(os.getpgid(process.pid), signal.SIGTERM)
            else:
                process.terminate()
        except:
            pass
    print(f"{GREEN}Servers stopped.{NC}")
    sys.exit(0)


def setup_signal_handlers():
    signal.signal(signal.SIGINT, stop_servers)
    signal.signal(signal.SIGTERM, stop_servers)


def main():
    print_banner()
    setup_signal_handlers()
    
    command = sys.argv[1] if len(sys.argv) > 1 else "all"
    
    if command == "frontend":
        start_frontend()
    elif command == "backend":
        start_backend()
    else:  # all
        start_backend()
        time.sleep(2)
        start_frontend()
    
    local_ip = get_local_ip()
    print(f"{GREEN}═══════════════════════════════════════════════════════{NC}")
    print(f"{GREEN}Services are running! Press Ctrl+C to stop.{NC}")
    print("")
    print(f"Frontend: http://{local_ip}:5173")
    print(f"Backend:  http://{local_ip}:8000")
    print(f"API Docs: http://{local_ip}:8000/docs")
    print(f"{GREEN}═══════════════════════════════════════════════════════{NC}")
    
    # Keep script running
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        stop_servers()


if __name__ == "__main__":
    main()
