"""
Dashboard API Endpoints
FastAPI route'ları - gösterge paneli verileri ve istatistikler
"""

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from disaris_plus.config.database import get_db

router = APIRouter()

@router.get("/istatistikler")
async def dashboard_istatistikleri(db: Session = Depends(get_db)):
    """Dashboard için genel istatistikleri getirir"""
    # Toplam geri bildirim sayısı
    # Risk seviyesi dağılımları
    # Kategori ve duygu dağılımları
    pass

@router.get("/grafikler/duygu-dagilimi")
async def duygu_dagilimi_grafik(db: Session = Depends(get_db)):
    """Duygu durumu dağılım grafiği verilerini getirir"""
    pass

@router.get("/grafikler/kategori-dagilimi")
async def kategori_dagilimi_grafik(db: Session = Depends(get_db)):
    """Kategori dağılım grafiği verilerini getirir"""
    pass

@router.get("/grafikler/risk-dagilimi")
async def risk_dagilimi_grafik(db: Session = Depends(get_db)):
    """Risk seviyesi dağılım grafiği verilerini getirir"""
    pass

@router.get("/oncelikli-kayitlar")
async def oncelikli_kayitlar(db: Session = Depends(get_db)):
    """Yüksek riskli öncelikli kayıtları getirir"""
    pass
