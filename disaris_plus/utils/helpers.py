"""
Yardımcı Fonksiyonlar
Genel kullanım fonksiyonları
"""

from datetime import datetime
from typing import Dict, Any

def format_tarih(tarih: datetime) -> str:
    """Tarihi formatlar"""
    return tarih.strftime("%d.%m.%Y - %H:%M")

def risk_renk_kodla(risk_seviyesi: str) -> str:
    """Risk seviyesine göre renk kodu döndürür"""
    renkler = {
        "yüksek": "danger",
        "orta": "warning",
        "düşük": "success"
    }
    return renkler.get(risk_seviyesi.lower(), "secondary")

def duygu_ikon_kodla(duygu: str) -> str:
    """Duygu durumuna göre ikon kodu döndürür"""
    ikonlar = {
        "pozitif": "fa-smile",
        "negatif": "fa-frown",
        "nötr": "fa-meh"
    }
    return ikonlar.get(duygu.lower(), "fa-question")

def pagination_hesapla(sayfa: int, sayfa_boyutu: int, toplam: int) -> Dict[str, Any]:
    """Sayfalama bilgilerini hesaplar"""
    pass
