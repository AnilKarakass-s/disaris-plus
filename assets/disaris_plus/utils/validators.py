"""
Veri Doğrulama Yardımcı Fonksiyonları
Form validasyonu ve veri kontrolü
"""

from typing import Optional
from pydantic import BaseModel, validator

class GeriBildirimValidator(BaseModel):
    """Geri bildirim veri doğrulama modeli"""
    tip: str
    baslik: str
    icerik: str
    gonderen_adi: Optional[str] = None
    
    @validator('baslik')
    def baslik_uzunluk(cls, v):
        if len(v) < 5:
            raise ValueError('Başlık en az 5 karakter olmalıdır')
        return v
    
    @validator('icerik')
    def icerik_uzunluk(cls, v):
        if len(v) < 20:
            raise ValueError('İçerik en az 20 karakter olmalıdır')
        return v

def validate_tc_kimlik(tc_no: str) -> bool:
    """TC Kimlik numarası doğrulama"""
    pass

def validate_email(email: str) -> bool:
    """E-posta doğrulama"""
    pass
