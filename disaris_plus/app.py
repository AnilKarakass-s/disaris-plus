"""
DiŞARİS+ - FastAPI Uygulama Yapılandırması
Uygulama instance'ı, middleware'ler ve route kayıtları
"""

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from disaris_plus.config.database import init_db
from disaris_plus.api import geri_bildirim, analiz, dashboard

def create_app() -> FastAPI:
    """FastAPI uygulama instance'ı oluşturur"""
    app = FastAPI(
        title="DiŞARİS+",
        description="Geri Bildirim Yönetim Sistemi",
        version="1.0.0"
    )
    
    # Veritabanı başlatma
    init_db()
    
    # Static dosyalar (CSS, JS, görseller)
    app.mount("/assets", StaticFiles(directory="assets"), name="assets")
    
    # HTML dosyalarını serve etme
    @app.get("/")
    async def read_root():
        return FileResponse("index.html")
    
    @app.get("/hasta-geri-bildirim")
    async def hasta_form():
        return FileResponse("hasta-geri-bildirim.html")
    
    @app.get("/calisan-geri-bildirim")
    async def calisan_form():
        return FileResponse("calisan-geri-bildirim.html")
    
    @app.get("/liste")
    async def liste():
        return FileResponse("liste.html")
    
    @app.get("/detay")
    async def detay():
        return FileResponse("detay.html")
    
    @app.get("/dashboard")
    async def dashboard_page():
        return FileResponse("dashboard.html")
    
    @app.get("/rapor")
    async def rapor():
        return FileResponse("rapor.html")
    
    # API route'ları
    app.include_router(geri_bildirim.router, prefix="/api/geri-bildirim", tags=["Geri Bildirim"])
    app.include_router(analiz.router, prefix="/api/analiz", tags=["Analiz"])
    app.include_router(dashboard.router, prefix="/api/dashboard", tags=["Dashboard"])
    
    return app
