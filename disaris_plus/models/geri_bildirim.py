"""
Geri Bildirim Modeli
SQLAlchemy ORM modeli - geri_bildirimler tablosu
"""

from sqlalchemy import Column, Integer, String, Text, DateTime, Enum
from sqlalchemy.sql import func
from disaris_plus.config.database import Base
import enum

class GeriBildirimTipi(enum.Enum):
    """Geri bildirim tipi enum"""
    HASTA = "hasta"
    CALISAN = "calisan"

class GeriBildirim(Base):
    """Geri bildirim modeli"""
    __tablename__ = "geri_bildirimler"
    
    id = Column(Integer, primary_key=True, index=True)
    tip = Column(Enum(GeriBildirimTipi), nullable=False)
    baslik = Column(String(255), nullable=False)
    icerik = Column(Text, nullable=False)
    gonderen_adi = Column(String(100))
    birim = Column(String(100))
    kategori = Column(String(100))
    olusturulma_tarihi = Column(DateTime, server_default=func.now())
    guncelleme_tarihi = Column(DateTime, onupdate=func.now())
