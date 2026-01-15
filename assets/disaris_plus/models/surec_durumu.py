"""
Süreç Durumu Modeli
SQLAlchemy ORM modeli - surec_durumlari tablosu
"""

from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Enum
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from disaris_plus.config.database import Base
import enum

class SurecDurumu(enum.Enum):
    """Süreç durumu enum"""
    YENI = "yeni"
    INCELEMEDE = "incelemede"
    ATANDI = "atandi"
    TAMAMLANDI = "tamamlandi"

class SurecDurum(Base):
    """Süreç durumu modeli"""
    __tablename__ = "surec_durumlari"
    
    id = Column(Integer, primary_key=True, index=True)
    geri_bildirim_id = Column(Integer, ForeignKey("geri_bildirimler.id"), nullable=False)
    durum = Column(Enum(SurecDurumu), default=SurecDurumu.YENI)
    atanan_birim = Column(String(100))
    aciklama = Column(String(500))
    guncelleme_tarihi = Column(DateTime, server_default=func.now(), onupdate=func.now())
    
    geri_bildirim = relationship("GeriBildirim", back_populates="surec_durumlari")
