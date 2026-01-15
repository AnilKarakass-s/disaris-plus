"""
Rapor Arşivi Modeli
SQLAlchemy ORM modeli - rapor_arsivi tablosu
"""

from sqlalchemy import Column, Integer, String, ForeignKey, Text, DateTime
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from disaris_plus.config.database import Base

class RaporArsivi(Base):
    """Rapor arşivi modeli"""
    __tablename__ = "rapor_arsivi"
    
    id = Column(Integer, primary_key=True, index=True)
    geri_bildirim_id = Column(Integer, ForeignKey("geri_bildirimler.id"), nullable=False)
    rapor_no = Column(String(50), unique=True, nullable=False)
    rapor_icerik = Column(Text)
    olusturulma_tarihi = Column(DateTime, server_default=func.now())
    
    geri_bildirim = relationship("GeriBildirim", back_populates="raporlar")
