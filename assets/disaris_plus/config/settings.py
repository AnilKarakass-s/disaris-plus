"""
Uygulama Ayarları
Environment variables ve genel yapılandırmalar
"""

import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    """Uygulama ayarları"""
    DATABASE_URL: str = os.getenv("DATABASE_URL", "mysql+pymysql://user:password@localhost/disaris")
    SECRET_KEY: str = os.getenv("SECRET_KEY", "your-secret-key-here")
    DEBUG: bool = os.getenv("DEBUG", "False").lower() == "true"
    
    class Config:
        env_file = ".env"

settings = Settings()
DATABASE_URL = settings.DATABASE_URL
