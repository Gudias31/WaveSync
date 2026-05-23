# WaveSync Technology

Full-stack web application with React frontend and Python FastAPI backend, configured for localhost and LAN access.

## Project Structure

```
cloudframe-tech/
├── frontend/                 # React + Vite frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── App.jsx         # Main app component
│   │   ├── main.jsx        # Entry point
│   │   └── styles.css      # Global styles
│   ├── index.html          # HTML template
│   ├── package.json        # NPM dependencies
│   └── vite.config.js      # Vite configuration
├── backend/                  # Python FastAPI backend
│   ├── main.py             # API endpoints
│   ├── requirements.txt    # Python dependencies
│   └── .env.example        # Environment template
├── assets/                   # Static assets
│   ├── fonts/
│   └── images/
├── start.sh                  # Bash start script (macOS/Linux)
├── start.py                  # Python start script (cross-platform)
└── README.md
```

## Quick Start

### Option 1: Using the Bash Script (macOS/Linux)

```bash
./start.sh              # Start both frontend and backend
./start.sh frontend     # Start only frontend
./start.sh backend      # Start only backend
```

### Option 2: Using the Python Script (Cross-platform)

```bash
python3 start.py        # Start both frontend and backend
python3 start.py frontend  # Start only frontend
python3 start.py backend   # Start only backend
```

## Manual Setup

### Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at:
- Local: http://localhost:5173
- Network: http://YOUR_IP:5173 (accessible from LAN)

### Backend (Python FastAPI)

```bash
cd backend

# Create virtual environment
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate  # macOS/Linux
# OR
venv\Scripts\activate     # Windows

# Install dependencies
pip install -r requirements.txt

# Start server
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

The backend will be available at:
- Local: http://localhost:8000
- Network: http://YOUR_IP:8000 (accessible from LAN)
- API Docs: http://localhost:8000/docs

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Root - API info |
| `/api/health` | GET | Health check |
| `/api/info` | GET | Server information (IP, hostname) |
| `/api/contact` | POST | Submit contact form |

## LAN Access

Both servers are configured to accept connections from any network interface (`0.0.0.0`), allowing access from other devices on your local network.

To find your local IP address:

**macOS:**
```bash
ipconfig getifaddr en0
```

**Linux:**
```bash
hostname -I
```

Then access from other devices using:
- Frontend: `http://YOUR_IP:5173`
- Backend: `http://YOUR_IP:8000`

## Technology Stack

### Frontend
- React 18
- Vite (build tool and dev server)
- CSS Modules
- Intersection Observer for scroll animations

### Backend
- Python 3.8+
- FastAPI (modern, fast web framework)
- Uvicorn (ASGI server)
- Pydantic (data validation)

## Development Commands

### Frontend
```bash
cd frontend
npm install        # Install dependencies
npm run dev        # Start dev server
npm run build      # Build for production
npm run preview    # Preview production build
```

### Backend
```bash
cd backend
source venv/bin/activate
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

## Requirements

- Node.js 18+ (for frontend)
- Python 3.8+ (for backend)
- npm or yarn

## License

© 2026 WaveSync Technology. All rights reserved.
