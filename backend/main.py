from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel, EmailStr
import socket
import os

app = FastAPI(
    title="CloudFrame API",
    description="Backend API for CloudFrame Technology",
    version="1.0.0"
)

# CORS configuration for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str


class APIResponse(BaseModel):
    success: bool
    message: str
    data: dict = None


@app.get("/")
async def root():
    return {
        "message": "CloudFrame Technology API",
        "version": "1.0.0",
        "status": "running"
    }


@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "service": "cloudframe-api"}


@app.post("/api/contact", response_model=APIResponse)
async def submit_contact_form(form: ContactForm):
    try:
        return APIResponse(
            success=True,
            message="Mensagem recebida com sucesso! Entraremos em contato em breve.",
            data={
                "name": form.name,
                "email": form.email
            }
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/info")
async def get_server_info():
    hostname = socket.gethostname()
    try:
        ip_address = socket.gethostbyname(hostname)
    except:
        ip_address = "127.0.0.1"
    
    return {
        "hostname": hostname,
        "ip": ip_address,
        "port": 8000,
        "environment": os.getenv("ENVIRONMENT", "development")
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info"
    )
