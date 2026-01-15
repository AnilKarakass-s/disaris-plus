"""
Geri Bildirim API Endpoints
FastAPI route'ları - geri bildirim CRUD işlemleri
"""

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from disaris_plus.config.database import get_db
from disaris_plus.models.geri_bildirim import GeriBildirim
from disaris_plus.services.ddi_analiz import DDIAnalizServisi

router = APIRouter()

@router.post("/", response_model=dict)
async def geri_bildirim_olustur(
    geri_bildirim_data: dict,
    db: Session = Depends(get_db)
):
    """Yeni geri bildirim oluşturur ve analiz eder"""
    # Geri bildirim kaydı oluşturma
    # DDI analiz servisi ile analiz yapma
    # Analiz sonuçlarını kaydetme
    pass

@router.get("/", response_model=List[dict])
async def geri_bildirim_listele(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db)
):
    """Geri bildirimleri listeler"""
    pass

@router.get("/{geri_bildirim_id}", response_model=dict)
async def geri_bildirim_detay(
    geri_bildirim_id: int,
    db: Session = Depends(get_db)
):
    """Geri bildirim detayını getirir"""
    pass
