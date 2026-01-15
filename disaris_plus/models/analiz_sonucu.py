"""
Analiz Sonucu Modeli
SQLAlchemy ORM modeli - analiz_sonuclari tablosu
"""

from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from disaris_plus.config.database import Base

class AnalizSonucu(Base):
    """Analiz sonucu modeli"""
    __tablename__ = "analiz_sonuclari"
    
    id = Column(Integer, primary_key=True, index=True)
    geri_bildirim_id = Column(Integer, ForeignKey("geri_bildirimler.id"), nullable=False)
    kategori = Column(String(100))
    duygu_durumu = Column(String(50))  # pozitif, negatif, nötr
    risk_seviyesi = Column(String(50))  # yüksek, orta, düşük
    sistem_onerisi = Column(String(500))
    analiz_tarihi = Column(DateTime, server_default=func.now())
    
    geri_bildirim = relationship("GeriBildirim", back_populates="analiz_sonuclari")
