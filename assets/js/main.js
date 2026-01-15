// DiŞARİS+ Sistem Ana JavaScript Dosyası

// Sayfa yüklendiğinde çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', function() {
    // Form validasyonu
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

    // Risk seviyesi badge renklendirme
    const riskBadges = document.querySelectorAll('.badge-risk');
    riskBadges.forEach(badge => {
        const riskLevel = badge.textContent.toLowerCase();
        if (riskLevel.includes('yüksek')) {
            badge.classList.add('badge-risk-high');
        } else if (riskLevel.includes('orta')) {
            badge.classList.add('badge-risk-medium');
        } else {
            badge.classList.add('badge-risk-low');
        }
    });
});

// Grafik oluşturma fonksiyonları (Chart.js için placeholder)
function initDashboardCharts() {
    // Bu fonksiyon Chart.js ile grafikleri oluşturacak
    console.log('Dashboard grafikleri başlatılıyor...');
}

// Hasta Geri Bildirim Formu Gönderme
function submitHastaGeriBildirim(event) {
    event.preventDefault();
    event.stopPropagation();
    
    const form = event.target;
    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return false;
    }

    // Form verilerini topla
    const formData = {
        tip: 'hasta',
        hastaAd: document.getElementById('hastaAd').value,
        hastaTC: document.getElementById('hastaTC').value,
        hastaYas: document.getElementById('hastaYas').value,
        hastaCinsiyet: document.getElementById('hastaCinsiyet').value,
        baslik: document.getElementById('hastaBaslik').value,
        kategori: document.getElementById('hastaKategori').value,
        icerik: document.getElementById('hastaIcerik').value,
        birim: document.getElementById('hastaBirim').value,
        tarih: document.getElementById('hastaTarih').value,
        iletisim: document.getElementById('hastaIletisim').value
    };

    // Form verilerini işleme mantığı buraya eklenecek (API çağrısı vb.)
    console.log('Hasta Geri Bildirim:', formData);
    alert('Hasta şikayeti başarıyla kaydedildi! Analiz ediliyor... (Demo)');
    
    // Formu temizle
    form.reset();
    form.classList.remove('was-validated');
    
    return false;
}

// Çalışan Geri Bildirim Formu Gönderme
function submitCalisanGeriBildirim(event) {
    event.preventDefault();
    event.stopPropagation();
    
    const form = event.target;
    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return false;
    }

    // Form verilerini topla
    const formData = {
        tip: 'calisan',
        calisanAd: document.getElementById('calisanAd').value,
        calisanSicil: document.getElementById('calisanSicil').value,
        calisanBirim: document.getElementById('calisanBirim').value,
        calisanUnvan: document.getElementById('calisanUnvan').value,
        baslik: document.getElementById('calisanBaslik').value,
        kategori: document.getElementById('calisanKategori').value,
        icerik: document.getElementById('calisanIcerik').value,
        oncelik: document.getElementById('calisanOncelik').value,
        tarih: document.getElementById('calisanTarih').value,
        gizlilik: document.getElementById('calisanGizlilik').checked
    };

    // Form verilerini işleme mantığı buraya eklenecek (API çağrısı vb.)
    console.log('Çalışan Geri Bildirim:', formData);
    alert('Çalışan geri bildirimi başarıyla kaydedildi! Analiz ediliyor... (Demo)');
    
    // Formu temizle
    form.reset();
    form.classList.remove('was-validated');
    
    return false;
}
