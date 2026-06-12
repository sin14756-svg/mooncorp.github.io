/* ============================================= */
/* VERSION 2 — script.js                          */
/* ============================================= */

document.addEventListener('DOMContentLoaded', function () {

    // ============================================= 
    // 0. LOAD & APPLY CMS TEXTS AND EMAIL CONFIG
    // ============================================= 
    var textConfig = {};
    if (typeof CMS_TEXT_CONFIG !== 'undefined') {
        for (var k in CMS_TEXT_CONFIG) {
            textConfig[k] = CMS_TEXT_CONFIG[k];
        }
    }
    
    var isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.hostname === '';
    var localTextConfig = isLocal ? localStorage.getItem('cms_text_config') : null;
    if (localTextConfig) {
        try {
            var parsed = JSON.parse(localTextConfig);
            if (typeof CMS_TEXT_CONFIG !== 'undefined' && CMS_TEXT_CONFIG._version && (!parsed._version || CMS_TEXT_CONFIG._version > parsed._version)) {
                // Stale cache detected, clear it!
                localStorage.removeItem('cms_text_config');
            } else {
                var updated = false;
                for (var key in parsed) {
                    // If it is the old short placeholder text, delete it so it falls back to the new default
                    if (key === "about-company-desc" && parsed[key].indexOf("We are a trusted partner") === 0) {
                        delete parsed[key];
                        updated = true;
                        continue;
                    }
                    textConfig[key] = parsed[key];
                }
                if (updated) {
                    localStorage.setItem('cms_text_config', JSON.stringify(parsed));
                }
            }
        } catch (e) {
            console.error("Error parsing cms_text_config", e);
        }
    }

    // Apply text content to elements with data-cms-key
    var cmsElements = document.querySelectorAll('[data-cms-key]');
    for (var i = 0; i < cmsElements.length; i++) {
        var el = cmsElements[i];
        var key = el.getAttribute('data-cms-key');
        if (textConfig[key]) {
            el.innerHTML = textConfig[key];
        }
    }

    // Show/hide activities section based on configuration
    var activitiesSec = document.querySelector('.activities');
    if (activitiesSec) {
        if (textConfig['show-activities'] === 'false') {
            activitiesSec.style.display = 'none';
        } else {
            activitiesSec.style.display = '';
        }
    }

    // Show/hide about gallery based on configuration
    var aboutGallery = document.querySelector('.about-gallery');
    var aboutActivitiesText = document.querySelector('.about-activities-text');
    if (aboutGallery) {
        if (textConfig['show-about-gallery'] === 'false') {
            aboutGallery.style.display = 'none';
            if (aboutActivitiesText) {
                aboutActivitiesText.classList.add('gallery-hidden');
            }
        } else {
            aboutGallery.style.display = '';
            if (aboutActivitiesText) {
                aboutActivitiesText.classList.remove('gallery-hidden');
            }
        }
    }

    // Apply dynamic logo sizes
    var logoHeaderHeight = textConfig['logo-header-height'] || "32";
    var logoFooterHeight = textConfig['logo-footer-height'] || "32";
    var logoStyleTag = document.createElement('style');
    logoStyleTag.innerHTML = '\
        .logo-icon img { height: ' + logoHeaderHeight + 'px !important; transition: none !important; }\
        .footer-logo .logo-icon img { height: ' + logoFooterHeight + 'px !important; transition: none !important; }\
    ';
    document.head.appendChild(logoStyleTag);

    // Apply custom email in footers and other elements
    var targetEmail = textConfig["contact-email"] || "goldenseafresh.marketing@gmail.com";
    localStorage.setItem('cms_contact_email', targetEmail); // sync for forms

    // Scan footer or other elements to replace default email display
    var emailElements = document.querySelectorAll('.footer-contact li, .site-footer li, .contact-info li, a[href^="mailto:"]');
    for (var j = 0; j < emailElements.length; j++) {
        var el = emailElements[j];
        if (el.tagName.toLowerCase() === 'a' && (el.getAttribute('href').indexOf('sin14756@gmail.com') !== -1 || el.getAttribute('href').indexOf('goldenseafresh.marketing@gmail.com') !== -1)) {
            el.setAttribute('href', 'mailto:' + targetEmail);
            el.textContent = targetEmail;
        } else if (el.textContent.indexOf('sin14756@gmail.com') !== -1 || el.textContent.indexOf('goldenseafresh.marketing@gmail.com') !== -1) {
            el.innerHTML = '✉️ ' + targetEmail;
        }
    }


    // ============================================= 
    // 1. STICKY HEADER
    // ============================================= 
    const header = document.getElementById('header');

    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // ============================================= 
    // 2. MOBILE MENU
    // ============================================= 
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    document.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ============================================= 
    // 3. ACTIVE NAV HIGHLIGHT
    // ============================================= 
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNavLink() {
        const scrollPos = window.scrollY + 100;
        sections.forEach(function (section) {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(function (link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) link.classList.add('active');
                });
            }
        });
    }
    window.addEventListener('scroll', highlightNavLink);

    // ============================================= 
    // 4. SCROLL ANIMATIONS (Intersection Observer)
    // ============================================= 
    const animEls = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry, i) {
            if (entry.isIntersecting) {
                setTimeout(function () {
                    entry.target.classList.add('visible');
                }, i * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px', threshold: 0 });

    animEls.forEach(function (el) { observer.observe(el); });

    // ============================================= 
    // 5. SMOOTH SCROLL
    // ============================================= 
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - header.offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================= 
    // 6. SWEEP BANNERS — re-animate on scroll
    //    เมื่อ section ปรากฏ banner จะโฉบออกมา
    // ============================================= 
    var bannerSections = document.querySelectorAll('.services, .products, .knowledge, .contact, .about');

    var bannerObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var banners = entry.target.querySelectorAll('.section-banner');
                banners.forEach(function (b) {
                    // Reset animation
                    b.style.animation = 'none';
                    b.offsetHeight; // trigger reflow
                    b.style.animation = '';
                });
            }
        });
    }, { threshold: 0.15 });

    bannerSections.forEach(function (sec) { bannerObserver.observe(sec); });

    // ============================================= 
    // 7. PARALLAX
    // ============================================= 
    function parallax() {
        var scrolled = window.scrollY;
        var heroBg = document.querySelector('.hero-bg');
        if (heroBg) heroBg.style.transform = 'translateY(' + (scrolled * 0.2) + 'px)';
    }
    window.addEventListener('scroll', parallax);

    // ============================================= 
    // 8. CONTACT FORM (Real Email Sending via FormSubmit AJAX)
    // ============================================= 
    var form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var btn = form.querySelector('button[type="submit"]');
            var txt = btn.textContent;
            
            // เปลี่ยนสถานะปุ่มเป็นกำลังส่ง
            btn.textContent = '⌛ กำลังส่งข้อความ...';
            btn.disabled = true;

            // ดึงค่าจากฟอร์ม
            var nameVal = form.querySelector('[name="name"]').value;
            var emailVal = form.querySelector('[name="email"]').value;
            var subjectVal = form.querySelector('[name="subject"]').value;
            var otherVal = form.querySelector('[name="other"]').value;
            var messageVal = form.querySelector('[name="message"]').value;

            var mailTarget = localStorage.getItem('cms_contact_email') || "goldenseafresh.marketing@gmail.com";
            // ส่งข้อมูลไปยัง FormSubmit.co ด้วย AJAX
            fetch("https://formsubmit.co/ajax/" + mailTarget, {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: nameVal,
                    email: emailVal,
                    subject: subjectVal,
                    other: otherVal,
                    message: messageVal
                })
            })
            .then(function(response) {
                if (response.ok) {
                    // ส่งสำเร็จ
                    btn.textContent = '✓ ส่งข้อความเรียบร้อยแล้ว!';
                    btn.style.background = 'linear-gradient(135deg, #0a6b2a 0%, #2ed660 100%)';
                    form.reset();
                } else {
                    throw new Error("Failed to send");
                }
            })
            .catch(function(error) {
                // ส่งไม่สำเร็จ
                btn.textContent = '❌ เกิดข้อผิดพลาด กรุณาลองใหม่';
                btn.style.background = 'linear-gradient(135deg, #b31010 0%, #e63e3e 100%)';
            })
            .finally(function() {
                // คืนสถานะปุ่มหลังจากผ่านไป 4 วินาที
                setTimeout(function () {
                    btn.textContent = txt;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 4000);
            });
        });
    }

    // ============================================= 
    // 8.5 DYNAMIC ACTIVITIES RENDERING (from LocalStorage)
    // ============================================= 
    function initVideoLightbox() {
        var modal = document.getElementById('videoLightboxModal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'videoLightboxModal';
            modal.className = 'video-lightbox-modal';
            modal.innerHTML = 
                '<div class="lightbox-content">' +
                '    <button class="lightbox-close" id="lightboxCloseBtn">✕</button>' +
                '    <video class="lightbox-video" id="lightboxVideo" controls autoplay></video>' +
                '</div>';
            document.body.appendChild(modal);

            // Close events
            modal.querySelector('#lightboxCloseBtn').addEventListener('click', closeLightbox);
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeLightbox();
                }
            });
        }
        return modal;
    }

    function openLightbox(videoSrc) {
        var modal = initVideoLightbox();
        var video = modal.querySelector('#lightboxVideo');
        video.src = videoSrc;
        video.load();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        var modal = document.getElementById('videoLightboxModal');
        if (modal) {
            var video = modal.querySelector('#lightboxVideo');
            video.pause();
            video.src = '';
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    function renderActivities() {
        var container = document.querySelector('.train-body');
        if (!container) return;

        var defaultActivities = [
            {
                date: "15 ก.พ. 2569",
                title: "งานแสดงสินค้า",
                img: "pic/MyCompany/IMG_5448.jpg",
                type: "image"
            },
            {
                date: "Jan 10, 2026",
                title: "CSR Marine Release (คลิกเล่นวิดีโอ)",
                img: "pic/MyCompany/IMG_5131.jpg",
                type: "video",
                videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            },
            {
                date: "Dec 25, 2025",
                title: "New Year Celebration",
                img: "pic/MyCompany/IMG_5269.jpg",
                type: "image"
            },
            {
                date: "Nov 20, 2025",
                title: "Outstanding Factory Award",
                img: "pic/MyCompany/company_exterior_clean.png",
                type: "image"
            }
        ];

        var isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.hostname === '';
        var stored = isLocal ? localStorage.getItem('activities_list') : null;
        var activities = stored ? JSON.parse(stored) : ((typeof CMS_ACTIVITIES_CONFIG !== 'undefined') ? CMS_ACTIVITIES_CONFIG : defaultActivities);

        // Filter out hidden activities (where show is false)
        var visibleActivities = [];
        for (var k = 0; k < activities.length; k++) {
            if (activities[k].show !== false) {
                visibleActivities.push(activities[k]);
            }
        }

        // Home page only shows the latest 4 visible activities
        var displayList = visibleActivities.slice(0, 4);

        var html = '';
        for (var i = 0; i < displayList.length; i++) {
            var act = displayList[i];
            var isVideo = act.type === 'video' || (act.img && (act.img.startsWith('data:video/') || act.img.endsWith('.mp4')));
            var videoSrc = (act.type === 'video' && act.videoUrl) ? act.videoUrl : act.img;
            
            var mediaHtml = '';
            if (isVideo) {
                var isImgThumb = act.img && !act.img.startsWith('data:video/') && !act.img.endsWith('.mp4');
                if (isImgThumb) {
                    mediaHtml = '<img src="' + act.img + '" alt="' + act.title + '" style="width:100%;height:100%;object-fit:cover;">' +
                                '<div class="play-btn-overlay" data-video="' + videoSrc + '">' +
                                '    <span class="play-icon">▶</span>' +
                                '</div>';
                } else {
                    mediaHtml = '<video src="' + videoSrc + '" muted playsinline style="width:100%;height:100%;object-fit:cover;"></video>' +
                                '<div class="play-btn-overlay" data-video="' + videoSrc + '">' +
                                '    <span class="play-icon">▶</span>' +
                                '</div>';
                }
            } else {
                mediaHtml = '<img src="' + act.img + '" alt="' + act.title + '" style="width:100%;height:100%;object-fit:cover;">';
            }

            html += '<div class="train-car">' +
                    '    <div class="train-car-img">' +
                    mediaHtml +
                    '    </div>' +
                    '    <div class="train-car-info">' +
                    '        <span class="activity-date">' + act.date + '</span>' +
                    '        <h4>' + act.title + '</h4>' +
                    '    </div>' +
                    '</div>';
        }
        container.innerHTML = html;

        // Bind click events to play buttons
        var playBtns = container.querySelectorAll('.play-btn-overlay');
        for (var k = 0; k < playBtns.length; k++) {
            playBtns[k].addEventListener('click', function(e) {
                e.stopPropagation();
                var vSrc = this.getAttribute('data-video');
                openLightbox(vSrc);
            });
        }
    }
    renderActivities();

});

// ============================================= 
// 9. DYNAMIC IMAGE EXTENSION FALLBACK
// ============================================= 
function handleImageError(target) {
    if (target.tagName && target.tagName.toLowerCase() !== 'img') return;

    if (!target.dataset.triedExts) {
        target.dataset.triedExts = "";
    }

    var currentSrc = target.src;
    var exts = ['.jpg', '.png', '.jpeg', '.webp'];

    var match = currentSrc.match(/\.[0-9a-z]+$/i);
    if (!match) return;

    var currentExt = match[0].toLowerCase();
    target.dataset.triedExts += currentExt + ",";

    for (var i = 0; i < exts.length; i++) {
        var ext = exts[i];
        if (target.dataset.triedExts.indexOf(ext + ",") === -1) {
            target.dataset.triedExts += ext + ",";
            target.src = currentSrc.replace(/\.[0-9a-z]+$/i, ext);
            return;
        }
    }
}

document.addEventListener('error', function (e) {
    handleImageError(e.target);
}, true); // Use capture phase because error events don't bubble

// Retroactively check existing images that might have already failed
setTimeout(function () {
    var imgs = document.querySelectorAll('img');
    for (var i = 0; i < imgs.length; i++) {
        var img = imgs[i];
        // If the image is complete but naturalWidth is 0, it failed to load
        if (img.complete && img.naturalWidth === 0) {
            handleImageError(img);
        }
    }
}, 100);

// ============================================= 
// 10. IMAGE CONTROL SYSTEM
//     อ่านค่าจาก IMAGE_CONFIG แล้วจัดการ x, y, zoom
// ============================================= 
function applyImageZoom(img, cfg) {
    if (!img.complete || img.naturalWidth === 0) return;

    var x = cfg.x || 0;
    var y = cfg.y || 0;
    var zoom = cfg.zoom || 1;

    // Reset styles that might conflict
    img.style.maxWidth = 'none';
    img.style.maxHeight = 'none';
    img.style.objectFit = 'fill';
    img.style.borderRadius = '0'; // Let the parent circle do the clipping
    img.style.boxShadow = 'none';

    var parent = img.parentElement;
    if (!parent) return;

    // Parent must clip the mathematically sized img
    parent.style.overflow = 'hidden';
    if (window.getComputedStyle(parent).position === 'static') {
        parent.style.position = 'relative';
    }

    var pw = parent.clientWidth;
    var ph = parent.clientHeight;
    if (pw === 0 || ph === 0) return; // Hidden or not layouted yet

    var imgRatio = img.naturalWidth / img.naturalHeight;

    // === NEW: Support for dynamic Aspect Ratio stretching image only ===
    if (cfg.aspectRatio && cfg.aspectRatio !== "original" && cfg.aspectRatio !== "auto" && cfg.aspectRatio !== "") {
        var parts = cfg.aspectRatio.split('/');
        if (parts.length === 2) {
            imgRatio = parseFloat(parts[0]) / parseFloat(parts[1]);
        } else {
            imgRatio = parseFloat(cfg.aspectRatio) || imgRatio;
        }
    }

    var containerRatio = pw / ph;

    var baseW, baseH;
    // Calculate size to exactly "cover" the parent natively
    if (imgRatio > containerRatio) {
        // Image is wider than container
        baseH = ph;
        baseW = ph * imgRatio;
    } else {
        // Image is taller than container
        baseW = pw;
        baseH = pw / imgRatio;
    }

    // Set precise base dimensions
    img.style.position = 'absolute';
    img.style.left = '50%';
    img.style.top = '50%';
    img.style.width = baseW + 'px';
    img.style.height = baseH + 'px';
    img.style.transformOrigin = 'center center';

    // Apply the user's manual zoom and translations on top of the perfectly covering <img>
    img.style.transform = 'translate(calc(-50% + ' + x + 'px), calc(-50% + ' + y + 'px)) scale(' + zoom + ')';
}

function processImages() {
    if (typeof IMAGE_CONFIG === 'undefined') return;
    
    // Merge custom image overrides from localStorage
    var isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.hostname === '';
    var localImgConfig = isLocal ? localStorage.getItem('cms_image_config') : null;
    if (localImgConfig) {
        try {
            var parsed = JSON.parse(localImgConfig);
            if (typeof IMAGE_CONFIG !== 'undefined' && IMAGE_CONFIG._version && (!parsed._version || IMAGE_CONFIG._version > parsed._version)) {
                // Stale cache detected, clear it!
                localStorage.removeItem('cms_image_config');
            } else {
                var updated = false;
                for (var key in parsed) {
                    var val = parsed[key];
                    if (val && typeof val.src === 'string') {
                        // Auto-migrate old incorrect extensions in browser cache
                        if (val.src === "pic/Cut Poulp Squid/1.jpg") { val.src = "pic/Cut Poulp Squid/1.png"; updated = true; }
                        if (val.src === "pic/Vannamei/1.png") { val.src = "pic/Vannamei/1.jpeg"; updated = true; }
                        if (val.src === "pic/Vannamei/2.jpg") { val.src = "pic/Vannamei/2.jpeg"; updated = true; }
                        if (val.src === "pic/service/2.jpg") { val.src = "pic/service/2.png"; updated = true; }
                        if (val.src === "pic/service/3.jpg") { val.src = "pic/service/3.png"; updated = true; }
                        if (val.src === "pic/service/4.jpg") { val.src = "pic/service/4.png"; updated = true; }
                        if (val.src === "pic/service/5.jpg") { val.src = "pic/service/5.png"; updated = true; }
                    }
                    IMAGE_CONFIG[key] = val;
                }
                if (updated) {
                    localStorage.setItem('cms_image_config', JSON.stringify(parsed));
                }
            }
        } catch (e) {
            console.error("Error parsing cms_image_config", e);
        }
    }

    var imgs = document.querySelectorAll('img[data-img-id]');
    for (var i = 0; i < imgs.length; i++) {
        var img = imgs[i];
        var id = img.getAttribute('data-img-id');
        var cfg = IMAGE_CONFIG[id];
        if (!cfg) continue;

        if (cfg.src) {
            var resolver = document.createElement('a');
            resolver.href = cfg.src;
            
            // Compare URLs without extensions to prevent resetting fallback extensions
            var cleanImgSrc = img.src.replace(/\.[0-9a-z]+$/i, '');
            var cleanResolverHref = resolver.href.replace(/\.[0-9a-z]+$/i, '');
            
            if (cleanImgSrc !== cleanResolverHref) {
                img.src = cfg.src;
                img.removeAttribute('data-tried-exts');
            }
        }

        // Logo images (header/footer) — skip position/zoom, CSS controls sizing
        if (id === 'logo-header' || id === 'logo-footer') continue;

        if (img.complete) {
            applyImageZoom(img, cfg);
        } else {
            // Wait for image load so naturalWidth is available
            img.addEventListener('load', (function (img, cfg) {
                return function () { applyImageZoom(img, cfg); };
            })(img, cfg));
        }
    }
}

document.addEventListener('DOMContentLoaded', processImages);
// Also run heavily delayed to catch slow layout repaints
setTimeout(processImages, 200);
setTimeout(processImages, 1000);
// Handle window resize as responsive circle changes size
window.addEventListener('resize', processImages);
