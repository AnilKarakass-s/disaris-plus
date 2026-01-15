// Dashboard Grafikleri için JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Duygu Dağılımı Pasta Grafik
    const duyguCtx = document.getElementById('duyguChart');
    if (duyguCtx) {
        new Chart(duyguCtx, {
            type: 'pie',
            data: {
                labels: ['Pozitif', 'Negatif', 'Nötr'],
                datasets: [{
                    data: [45, 78, 33],
                    backgroundColor: [
                        '#28a745',
                        '#dc3545',
                        '#17a2b8'
                    ],
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    // Kategori Dağılımı Çubuk Grafik
    const kategoriCtx = document.getElementById('kategoriChart');
    if (kategoriCtx) {
        new Chart(kategoriCtx, {
            type: 'bar',
            data: {
                labels: ['Hasta Şikayeti', 'Personel Geri Bildirimi', 'Kalite Değerlendirme', 'Süreç İyileştirme', 'Diğer'],
                datasets: [{
                    label: 'Kayıt Sayısı',
                    data: [52, 38, 28, 24, 14],
                    backgroundColor: '#0066cc',
                    borderColor: '#004499',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    // Risk Seviyesi Dağılımı
    const riskCtx = document.getElementById('riskChart');
    if (riskCtx) {
        new Chart(riskCtx, {
            type: 'doughnut',
            data: {
                labels: ['Yüksek Risk', 'Orta Risk', 'Düşük Risk'],
                datasets: [{
                    data: [23, 45, 88],
                    backgroundColor: [
                        '#dc3545',
                        '#ffc107',
                        '#28a745'
                    ],
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    // Aylık Trend Grafik
    const trendCtx = document.getElementById('trendChart');
    if (trendCtx) {
        new Chart(trendCtx, {
            type: 'line',
            data: {
                labels: ['Eylül', 'Ekim', 'Kasım', 'Aralık', 'Ocak'],
                datasets: [{
                    label: 'Geri Bildirim Sayısı',
                    data: [28, 32, 35, 41, 20],
                    borderColor: '#0066cc',
                    backgroundColor: 'rgba(0, 102, 204, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                }
            }
        });
    }

    // Hasta Şikayetleri Türlerine Göre Dağılım - Donut Grafik
    const hastaSikayetCtx = document.getElementById('hastaSikayetChart');
    if (hastaSikayetCtx) {
        const hastaLabels = [
            'Bekleme Süresi',
            'Hizmet Kalitesi',
            'Temizlik ve Hijyen',
            'Personel Davranışı',
            'Tedavi Süreci',
            'Fiyat ve Ödeme',
            'Diğer'
        ];
        const hastaData = [24, 18, 15, 12, 8, 6, 4];
        const hastaColors = [
            '#dc3545', '#fd7e14', '#ffc107', '#17a2b8', '#0066cc', '#28a745', '#6c757d'
        ];
        const totalHasta = hastaData.reduce((a, b) => a + b, 0);

        const hastaChart = new Chart(hastaSikayetCtx, {
            type: 'doughnut',
            data: {
                labels: hastaLabels,
                datasets: [{
                    data: hastaData,
                    backgroundColor: hastaColors,
                    borderColor: '#fff',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed || 0;
                                const percentage = ((value / totalHasta) * 100).toFixed(1);
                                return `${label}: ${value} (%${percentage})`;
                            }
                        }
                    }
                }
            }
        });

        // Özel legend oluştur
        const hastaLegend = document.getElementById('hastaSikayetLegend');
        hastaLabels.forEach((label, index) => {
            const percentage = ((hastaData[index] / totalHasta) * 100).toFixed(1);
            const item = document.createElement('span');
            item.className = 'badge me-2 mb-1';
            item.style.backgroundColor = hastaColors[index];
            item.style.color = '#fff';
            item.innerHTML = `<i class="fas fa-circle me-1" style="font-size: 8px;"></i>${label} (${hastaData[index]} - %${percentage})`;
            hastaLegend.appendChild(item);
        });
    }

    // Çalışan Geri Bildirimleri Türlerine Göre Dağılım - Donut Grafik
    const calisanGeriBildirimCtx = document.getElementById('calisanGeriBildirimChart');
    if (calisanGeriBildirimCtx) {
        const calisanLabels = [
            'Süreç İyileştirme',
            'Güvenlik Endişesi',
            'Ekipman Sorunu',
            'Kalite Önerisi',
            'Eğitim İhtiyacı',
            'Çalışma Koşulları',
            'Yönetim Geri Bildirimi',
            'Diğer'
        ];
        const calisanData = [16, 14, 12, 11, 10, 9, 8, 3];
        const calisanColors = [
            '#dc3545', '#fd7e14', '#ffc107', '#17a2b8', '#0066cc', '#28a745', '#6c757d', '#adb5bd'
        ];
        const totalCalisan = calisanData.reduce((a, b) => a + b, 0);

        const calisanChart = new Chart(calisanGeriBildirimCtx, {
            type: 'doughnut',
            data: {
                labels: calisanLabels,
                datasets: [{
                    data: calisanData,
                    backgroundColor: calisanColors,
                    borderColor: '#fff',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed || 0;
                                const percentage = ((value / totalCalisan) * 100).toFixed(1);
                                return `${label}: ${value} (%${percentage})`;
                            }
                        }
                    }
                }
            }
        });

        // Özel legend oluştur
        const calisanLegend = document.getElementById('calisanGeriBildirimLegend');
        calisanLabels.forEach((label, index) => {
            const percentage = ((calisanData[index] / totalCalisan) * 100).toFixed(1);
            const item = document.createElement('span');
            item.className = 'badge me-2 mb-1';
            item.style.backgroundColor = calisanColors[index];
            item.style.color = '#fff';
            item.innerHTML = `<i class="fas fa-circle me-1" style="font-size: 8px;"></i>${label} (${calisanData[index]} - %${percentage})`;
            calisanLegend.appendChild(item);
        });
    }

    // ========== RAPOR GRAFİKLERİ ==========
    
    // Şekil 4.1: Şikayet Türlerine Göre Genel Dağılım - Hasta
    const raporSikayetTurleriHastaCtx = document.getElementById('raporSikayetTurleriHasta');
    if (raporSikayetTurleriHastaCtx) {
        const hastaRaporLabels = ['Bekleme Süresi', 'Hizmet Kalitesi', 'Temizlik ve Hijyen', 'Personel Davranışı', 'Tedavi Süreci', 'Fiyat ve Ödeme', 'Diğer'];
        const hastaRaporData = [24, 18, 15, 12, 8, 6, 4];
        const hastaRaporColors = ['#dc3545', '#fd7e14', '#ffc107', '#17a2b8', '#0066cc', '#28a745', '#6c757d'];
        
        new Chart(raporSikayetTurleriHastaCtx, {
            type: 'doughnut',
            data: {
                labels: hastaRaporLabels,
                datasets: [{
                    data: hastaRaporData,
                    backgroundColor: hastaRaporColors,
                    borderColor: '#fff',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            boxWidth: 12,
                            padding: 8,
                            font: { size: 10 }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const total = hastaRaporData.reduce((a, b) => a + b, 0);
                                const percentage = ((context.parsed / total) * 100).toFixed(1);
                                return `${context.label}: ${context.parsed} (%${percentage})`;
                            }
                        }
                    }
                }
            }
        });
    }

    // Şekil 4.1: Şikayet Türlerine Göre Genel Dağılım - Çalışan
    const raporSikayetTurleriCalisanCtx = document.getElementById('raporSikayetTurleriCalisan');
    if (raporSikayetTurleriCalisanCtx) {
        const calisanRaporLabels = ['Süreç İyileştirme', 'Güvenlik Endişesi', 'Ekipman Sorunu', 'Kalite Önerisi', 'Eğitim İhtiyacı', 'Çalışma Koşulları', 'Yönetim Geri Bildirimi', 'Diğer'];
        const calisanRaporData = [16, 14, 12, 11, 10, 9, 8, 3];
        const calisanRaporColors = ['#dc3545', '#fd7e14', '#ffc107', '#17a2b8', '#0066cc', '#28a745', '#6c757d', '#adb5bd'];
        
        new Chart(raporSikayetTurleriCalisanCtx, {
            type: 'doughnut',
            data: {
                labels: calisanRaporLabels,
                datasets: [{
                    data: calisanRaporData,
                    backgroundColor: calisanRaporColors,
                    borderColor: '#fff',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            boxWidth: 12,
                            padding: 8,
                            font: { size: 10 }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const total = calisanRaporData.reduce((a, b) => a + b, 0);
                                const percentage = ((context.parsed / total) * 100).toFixed(1);
                                return `${context.label}: ${context.parsed} (%${percentage})`;
                            }
                        }
                    }
                }
            }
        });
    }

    // Şekil 4.2: Klinik Bazlı Şikayet Yoğunluğu
    const raporKlinikBazliCtx = document.getElementById('raporKlinikBazli');
    if (raporKlinikBazliCtx) {
        const klinikler = ['Avcılar', 'Buca', 'Bornova', 'Karşıyaka', 'Konak'];
        const beklemeSuresi = [18, 12, 8, 5, 6];
        const hizmetKalitesi = [14, 16, 10, 8, 9];
        const personelDavranisi = [10, 8, 6, 4, 5];
        const temizlikHijyen = [12, 10, 7, 6, 5];
        
        new Chart(raporKlinikBazliCtx, {
            type: 'bar',
            data: {
                labels: klinikler,
                datasets: [
                    {
                        label: 'Bekleme Süresi',
                        data: beklemeSuresi,
                        backgroundColor: 'rgba(220, 53, 69, 0.8)',
                        borderColor: '#dc3545',
                        borderWidth: 1
                    },
                    {
                        label: 'Hizmet Kalitesi',
                        data: hizmetKalitesi,
                        backgroundColor: 'rgba(253, 126, 20, 0.8)',
                        borderColor: '#fd7e14',
                        borderWidth: 1
                    },
                    {
                        label: 'Personel Davranışı',
                        data: personelDavranisi,
                        backgroundColor: 'rgba(255, 193, 7, 0.8)',
                        borderColor: '#ffc107',
                        borderWidth: 1
                    },
                    {
                        label: 'Temizlik ve Hijyen',
                        data: temizlikHijyen,
                        backgroundColor: 'rgba(23, 162, 184, 0.8)',
                        borderColor: '#17a2b8',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 5
                        },
                        title: {
                            display: true,
                            text: 'Şikayet Sayısı'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Klinikler'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                }
            }
        });
    }

    // Şekil 4.3: Zaman Bazlı Şikayet Dağılımı
    const raporZamanBazliCtx = document.getElementById('raporZamanBazli');
    if (raporZamanBazliCtx) {
        const aylar = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
        const hastaSikayetleri = [12, 15, 18, 14, 16, 20, 24, 22, 19, 17, 15, 13];
        const calisanGeriBildirimleri = [8, 10, 12, 9, 11, 14, 16, 15, 13, 12, 10, 9];
        
        new Chart(raporZamanBazliCtx, {
            type: 'line',
            data: {
                labels: aylar,
                datasets: [
                    {
                        label: 'Hasta Şikayetleri',
                        data: hastaSikayetleri,
                        borderColor: '#0066cc',
                        backgroundColor: 'rgba(0, 102, 204, 0.1)',
                        tension: 0.4,
                        fill: true,
                        borderWidth: 2
                    },
                    {
                        label: 'Çalışan Geri Bildirimleri',
                        data: calisanGeriBildirimleri,
                        borderColor: '#28a745',
                        backgroundColor: 'rgba(40, 167, 69, 0.1)',
                        tension: 0.4,
                        fill: true,
                        borderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 5
                        },
                        title: {
                            display: true,
                            text: 'Geri Bildirim Sayısı'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Aylar'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                },
                elements: {
                    point: {
                        radius: 4,
                        hoverRadius: 6
                    }
                }
            }
        });
    }

    // ========== DDI ANALİZ SONUÇLARI GRAFİKLERİ ==========
    
    // Şekil 4.4: DDI Analiz Sonuçlarına Göre Kategori Dağılımı
    const ddiKategoriDagilimiCtx = document.getElementById('ddiKategoriDagilimi');
    if (ddiKategoriDagilimiCtx) {
        const ddiKategoriler = [
            'Hasta Şikayeti',
            'Personel Geri Bildirimi',
            'Kalite Değerlendirme',
            'Süreç İyileştirme',
            'Güvenlik Endişesi',
            'Ekipman Sorunu',
            'Eğitim İhtiyacı',
            'Diğer'
        ];
        const ddiKategoriData = [52, 38, 28, 24, 14, 12, 10, 8];
        const ddiKategoriColors = [
            '#dc3545', '#fd7e14', '#ffc107', '#17a2b8', 
            '#0066cc', '#28a745', '#6c757d', '#adb5bd'
        ];

        new Chart(ddiKategoriDagilimiCtx, {
            type: 'bar',
            data: {
                labels: ddiKategoriler,
                datasets: [{
                    label: 'DDI Analiz Sonucu',
                    data: ddiKategoriData,
                    backgroundColor: ddiKategoriColors,
                    borderColor: ddiKategoriColors.map(c => c),
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                indexAxis: 'y',
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 10
                        },
                        title: {
                            display: true,
                            text: 'Analiz Edilen Kayıt Sayısı'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Kategoriler'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            afterLabel: function(context) {
                                const total = ddiKategoriData.reduce((a, b) => a + b, 0);
                                const percentage = ((context.parsed.x / total) * 100).toFixed(1);
                                return `Toplam: ${total} | Oran: %${percentage}`;
                            }
                        }
                    }
                }
            }
        });
    }

    // Şekil 4.5: Duygu Analizi Sonuçlarının Genel Dağılımı
    const ddiDuyguDagilimiCtx = document.getElementById('ddiDuyguDagilimi');
    if (ddiDuyguDagilimiCtx) {
        const duyguLabels = ['Negatif', 'Nötr', 'Pozitif'];
        const duyguData = [78, 45, 33];
        const duyguColors = ['#dc3545', '#17a2b8', '#28a745'];

        new Chart(ddiDuyguDagilimiCtx, {
            type: 'doughnut',
            data: {
                labels: duyguLabels,
                datasets: [{
                    data: duyguData,
                    backgroundColor: duyguColors,
                    borderColor: '#fff',
                    borderWidth: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            font: { size: 12, weight: 'bold' }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const total = duyguData.reduce((a, b) => a + b, 0);
                                const percentage = ((context.parsed / total) * 100).toFixed(1);
                                return `${context.label}: ${context.parsed} (%${percentage})`;
                            }
                        }
                    }
                }
            }
        });
    }

    // Şekil 4.6: Kategori Bazlı Analiz Sonuçlarının Karşılaştırmalı Görünümü
    const ddiKategoriKarsilastirmaCtx = document.getElementById('ddiKategoriKarsilastirma');
    if (ddiKategoriKarsilastirmaCtx) {
        const karsilastirmaKategoriler = [
            'Bekleme Süresi',
            'Hizmet Kalitesi',
            'Personel Davranışı',
            'Temizlik/Hijyen',
            'Süreç İyileştirme',
            'Güvenlik',
            'Ekipman',
            'Eğitim'
        ];
        
        // Her kategori için DDI analiz sonuçları: [Doğru Sınıflandırma, Yanlış Sınıflandırma, Belirsiz]
        const dogruSiniflandirma = [42, 38, 35, 32, 28, 25, 22, 20];
        const yanlisSiniflandirma = [8, 6, 5, 4, 3, 2, 2, 1];
        const belirsiz = [2, 1, 0, 0, 1, 1, 0, 0];

        new Chart(ddiKategoriKarsilastirmaCtx, {
            type: 'bar',
            data: {
                labels: karsilastirmaKategoriler,
                datasets: [
                    {
                        label: 'Doğru Sınıflandırma',
                        data: dogruSiniflandirma,
                        backgroundColor: 'rgba(40, 167, 69, 0.8)',
                        borderColor: '#28a745',
                        borderWidth: 1
                    },
                    {
                        label: 'Yanlış Sınıflandırma',
                        data: yanlisSiniflandirma,
                        backgroundColor: 'rgba(220, 53, 69, 0.8)',
                        borderColor: '#dc3545',
                        borderWidth: 1
                    },
                    {
                        label: 'Belirsiz',
                        data: belirsiz,
                        backgroundColor: 'rgba(255, 193, 7, 0.8)',
                        borderColor: '#ffc107',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        stacked: true,
                        ticks: {
                            stepSize: 10
                        },
                        title: {
                            display: true,
                            text: 'Kayıt Sayısı'
                        }
                    },
                    x: {
                        stacked: true,
                        title: {
                            display: true,
                            text: 'Kategoriler'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        callbacks: {
                            footer: function(tooltipItems) {
                                let total = 0;
                                tooltipItems.forEach(item => {
                                    total += item.parsed.y;
                                });
                                const dogruOran = ((tooltipItems[0].parsed.y / total) * 100).toFixed(1);
                                return `Doğruluk Oranı: %${dogruOran}`;
                            }
                        }
                    }
                }
            }
        });
    }

    // ========== RİSK VE TREND ANALİZİ GRAFİKLERİ ==========
    
    // Şekil 4.7: Zaman Bazlı Şikayet Yoğunluğu ve Risk Göstergeleri
    const zamanBazliRiskGostergeleriCtx = document.getElementById('zamanBazliRiskGostergeleri');
    if (zamanBazliRiskGostergeleriCtx) {
        const aylarRisk = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
        
        // Toplam şikayet sayıları
        const toplamSikayet = [12, 15, 18, 14, 16, 20, 24, 22, 19, 17, 15, 13];
        
        // Risk seviyelerine göre dağılım
        const yuksekRisk = [2, 3, 4, 2, 3, 4, 6, 5, 4, 3, 2, 2];
        const ortaRisk = [5, 6, 7, 6, 7, 8, 10, 9, 8, 7, 6, 5];
        const dusukRisk = [5, 6, 7, 6, 6, 8, 8, 8, 7, 7, 7, 6];
        
        // Risk skorları (0-100 arası)
        const riskSkorlari = [35, 40, 45, 38, 42, 50, 65, 60, 55, 48, 40, 38];

        new Chart(zamanBazliRiskGostergeleriCtx, {
            type: 'line',
            data: {
                labels: aylarRisk,
                datasets: [
                    {
                        label: 'Toplam Şikayet',
                        data: toplamSikayet,
                        borderColor: '#0066cc',
                        backgroundColor: 'rgba(0, 102, 204, 0.1)',
                        tension: 0.4,
                        fill: true,
                        borderWidth: 3,
                        yAxisID: 'y',
                        pointRadius: 5,
                        pointHoverRadius: 7
                    },
                    {
                        label: 'Yüksek Risk',
                        data: yuksekRisk,
                        borderColor: '#dc3545',
                        backgroundColor: 'rgba(220, 53, 69, 0.2)',
                        tension: 0.4,
                        fill: false,
                        borderWidth: 2,
                        borderDash: [5, 5],
                        yAxisID: 'y',
                        pointRadius: 4,
                        pointHoverRadius: 6
                    },
                    {
                        label: 'Orta Risk',
                        data: ortaRisk,
                        borderColor: '#ffc107',
                        backgroundColor: 'rgba(255, 193, 7, 0.2)',
                        tension: 0.4,
                        fill: false,
                        borderWidth: 2,
                        borderDash: [5, 5],
                        yAxisID: 'y',
                        pointRadius: 4,
                        pointHoverRadius: 6
                    },
                    {
                        label: 'Düşük Risk',
                        data: dusukRisk,
                        borderColor: '#28a745',
                        backgroundColor: 'rgba(40, 167, 69, 0.2)',
                        tension: 0.4,
                        fill: false,
                        borderWidth: 2,
                        borderDash: [5, 5],
                        yAxisID: 'y',
                        pointRadius: 4,
                        pointHoverRadius: 6
                    },
                    {
                        label: 'Risk Skoru',
                        data: riskSkorlari,
                        borderColor: '#6f42c1',
                        backgroundColor: 'rgba(111, 66, 193, 0.1)',
                        tension: 0.4,
                        fill: false,
                        borderWidth: 2,
                        yAxisID: 'y1',
                        pointRadius: 4,
                        pointHoverRadius: 6,
                        pointStyle: 'triangle'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                interaction: {
                    mode: 'index',
                    intersect: false
                },
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Şikayet Sayısı',
                            color: '#666'
                        },
                        ticks: {
                            stepSize: 5
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        beginAtZero: true,
                        max: 100,
                        title: {
                            display: true,
                            text: 'Risk Skoru (0-100)',
                            color: '#6f42c1'
                        },
                        ticks: {
                            stepSize: 20
                        },
                        grid: {
                            drawOnChartArea: false
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Aylar',
                            color: '#666'
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            padding: 15,
                            font: { size: 11 }
                        }
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        callbacks: {
                            afterLabel: function(context) {
                                if (context.datasetIndex === 0) {
                                    const monthIndex = context.dataIndex;
                                    const riskScore = riskSkorlari[monthIndex];
                                    let riskLevel = '';
                                    if (riskScore >= 60) riskLevel = 'Yüksek Risk';
                                    else if (riskScore >= 40) riskLevel = 'Orta Risk';
                                    else riskLevel = 'Düşük Risk';
                                    return `Risk Durumu: ${riskLevel} (${riskScore}/100)`;
                                }
                                return '';
                            }
                        }
                    },
                    annotation: {
                        annotations: {
                            riskThreshold: {
                                type: 'line',
                                yMin: 50,
                                yMax: 50,
                                borderColor: '#dc3545',
                                borderWidth: 2,
                                borderDash: [10, 5],
                                label: {
                                    content: 'Yüksek Risk Eşiği',
                                    enabled: true,
                                    position: 'end'
                                }
                            }
                        }
                    }
                }
            }
        });
    }
});
