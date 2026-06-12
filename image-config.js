/* =========================================================
 * IMAGE CONTROL CONFIG — แก้ค่าตรงนี้เพื่อเลื่อน/ซูมรูป
 * ---------------------------------------------------------
 * x           = เลื่อนซ้าย-ขวา (px)  บวก=ขวา  ลบ=ซ้าย
 * y           = เลื่อนขึ้น-ลง (px)   บวก=ลง   ลบ=ขึ้น
 * zoom        = ซูมเข้า-ออก          1=ปกติ   1.5=ซูม150%  0.8=ย่อ80%
 * aspectRatio = (Optional) ปรับสัดส่วนรูป เช่น "1 / 1" (จัตุรัส), "16 / 9" (แนวนอน), "4 / 3"
 * ========================================================= */

var IMAGE_CONFIG = {
    "logo-header": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/uploads/CV. GOLDEN SEAFRESH.png"
    },
    "logo-footer": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/uploads/CV. GOLDEN SEAFRESH.png"
    },
    "cert-haccp": {
        "x": 0,
        "y": 0,
        "zoom": 1.1,
        "aspectRatio": "original",
        "src": "pic/uploads/img_cert-haccp_1781252327920.png"
    },
    "cert-gmp": {
        "x": 3,
        "y": 0,
        "zoom": 1.1,
        "aspectRatio": "original",
        "src": "pic/uploads/img_cert-gmp_1781253350271.png"
    },
    "hero-company": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/MyCompany/1.png"
    },
    "qnav-product": {
        "x": 0,
        "y": 0,
        "zoom": 2.65,
        "aspectRatio": "original",
        "src": "pic/baby octopus/1.jpeg"
    },
    "qnav-service": {
        "x": 14,
        "y": -29,
        "zoom": 1.2,
        "aspectRatio": "original",
        "src": "pic/MyCompany/IMG_5269.jpg"
    },
    "qnav-company": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/MyCompany/company_exterior_clean.png"
    },
    "baby-octopus-home": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/baby octopus/1.jpeg"
    },
    "giant-octopus-home": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/Giant octopus/1.png"
    },
    "cut-poulp-squid-home": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/Cut Poulp Squid/1.png"
    },
    "cuttlefish-home": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/Cuttlefish/1.png"
    },
    "squid-home": {
        "x": -7,
        "y": 5,
        "zoom": 1.1,
        "aspectRatio": "original",
        "src": "pic/Squid/1.png"
    },
    "vannamei-home": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/Vannamei/1.jpeg"
    },
    "hard-clam-home": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/Hard Clam/1.png"
    },
    "clam-meat-home": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/Clam meat/1.png"
    },
    "pama-croaker-home": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/Pama croaker/1.png"
    },
    "vision-bg": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/MyCompany/IMG_5269.jpg"
    },
    "baby-octopus-detail": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/baby octopus/1.jpeg"
    },
    "baby-octopus-view1": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/baby octopus/2.jpeg"
    },
    "baby-octopus-view2": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/baby octopus/3.jpeg"
    },
    "giant-octopus-detail": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/Giant octopus/1.png"
    },
    "giant-octopus-view1": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/Giant octopus/2.png"
    },
    "giant-octopus-view2": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/Giant octopus/3.jpg"
    },
    "cut-poulp-squid-detail": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/Cut Poulp Squid/1.png"
    },
    "cut-poulp-squid-view1": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/Cut Poulp Squid/2.jpg"
    },
    "cut-poulp-squid-view2": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/Cut Poulp Squid/3.jpg"
    },
    "cuttlefish-detail": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/Cuttlefish/1.png"
    },
    "cuttlefish-view1": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/Cuttlefish/2.png"
    },
    "cuttlefish-view2": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/Cuttlefish/3.jpg"
    },
    "squid-detail": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/Squid/1.png"
    },
    "squid-view1": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/Squid/2.png"
    },
    "squid-view2": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/Squid/3.png"
    },
    "vannamei-detail": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/Vannamei/1.jpeg"
    },
    "vannamei-view1": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/Vannamei/2.jpeg"
    },
    "vannamei-view2": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/Vannamei/3.png"
    },
    "hard-clam-detail": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/Hard Clam/1.png"
    },
    "hard-clam-view1": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/Hard Clam/2.png"
    },
    "hard-clam-view2": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/Hard Clam/3.webp"
    },
    "clam-meat-detail": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/Clam meat/1.png"
    },
    "clam-meat-view1": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/Clam meat/2.png"
    },
    "clam-meat-view2": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/Clam meat/3.png"
    },
    "pama-croaker-detail": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/Pama croaker/1.png"
    },
    "pama-croaker-view1": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/Pama croaker/2.png"
    },
    "pama-croaker-view2": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/Pama croaker/3.png"
    },
    "about-factory": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/MyCompany/1.png"
    },
    "about-gallery-13": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/MyCompany/IMG_5448.jpg"
    },
    "about-gallery-14": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/MyCompany/IMG_5131.jpg"
    },
    "about-gallery-15": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/MyCompany/IMG_5269.jpg"
    },
    "about-gallery-16": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/MyCompany/company_exterior_clean.png"
    },
    "service-img-2": {
        "x": 0,
        "y": 1,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/service/2.png"
    },
    "service-img-3": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/service/3.png"
    },
    "service-img-4": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/service/4.png"
    },
    "service-img-5": {
        "x": 0,
        "y": 0,
        "zoom": 1,
        "aspectRatio": "original",
        "src": "pic/service/5.png"
    },
    "_version": 1781253352841
};
