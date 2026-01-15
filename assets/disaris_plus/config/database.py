"""
Veritabanı Bağlantı Yapılandırması
SQLAlchemy database connection ve session yönetimi
"""

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from disaris_plus.config.settings import DATABASE_URL

engine = create_engine(DATABASE_URL, echo=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    """Veritabanı session'ı döndürür"""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def init_db():
    """Veritabanı tablolarını oluşturur"""
    Base.metadata.create_all(bind=engine)
