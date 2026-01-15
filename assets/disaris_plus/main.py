"""
DiŞARİS+ - FastAPI Ana Uygulama
Geri Bildirim Yönetim Sistemi - Ana başlatma dosyası
"""

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from disaris_plus.app import create_app

app = create_app()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
