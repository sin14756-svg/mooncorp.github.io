/* =========================================================
 * IMAGE CONTROL CONFIG — แก้ค่าตรงนี้เพื่อเลื่อน/ซูมรูป
 * ---------------------------------------------------------
 * x           = เลื่อนซ้าย-ขวา (px)  บวก=ขวา  ลบ=ซ้าย
 * y           = เลื่อนขึ้น-ลง (px)   บวก=ลง   ลบ=ขึ้น
 * zoom        = ซูมเข้า-ออก          1=ปกติ   1.5=ซูม150%  0.8=ย่อ80%
 * aspectRatio = (Optional) ปรับสัดส่วนรูป เช่น "1 / 1" (จัตุรัส), "16 / 9" (แนวนอน), "4 / 3"
 * ========================================================= */

var IMAGE_CONFIG = {

    // ==========================================
    // HOME PAGE (index.html)
    // ==========================================

    // --- Hero Section (รูปบริษัทใหญ่ด้านซ้าย) ---
    "hero-company": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },

    // --- Quick Nav Cards (3 การ์ดด้านล่าง Hero) ---
    "qnav-product": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },   // การ์ด Product
    "qnav-service": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },   // การ์ด Service
    "qnav-company": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },   // การ์ด Company

    // --- Our Products — วงกลม แถวที่ 1 (5 ตัว) ---
    "baby-octopus-home": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "giant-octopus-home": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "cut-poulp-squid-home": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "cuttlefish-home": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "squid-home": { x: 10, y: 0, zoom: 1, aspectRatio: "original" },

    // --- Our Products — วงกลม แถวที่ 2 (4 ตัว) ---
    "vannamei-home": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "hard-clam-home": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "clam-meat-home": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "pama-croaker-home": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },

    // --- Our Vision (รูป background เต็มจอ) ---
    "vision-bg": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },

    // --- Company Activities (รถไฟ 4 ตู้) ---
    "activity-1": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },   // งานแสดงสินค้า
    "activity-2": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },   // CSR Marine Release
    "activity-3": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },   // New Year Celebration
    "activity-4": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },   // Outstanding Factory Award


    // ==========================================
    // PRODUCTS PAGE (products.html)
    // ==========================================

    // --- วงกลมด้านบน แถว 1 (5 ตัว) ---
    "baby-octopus-prod": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "giant-octopus-prod": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "cut-poulp-squid-prod": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "cuttlefish-prod": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "squid-prod": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },

    // --- วงกลมด้านบน แถว 2 (4 ตัว) ---
    "vannamei-prod": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "hard-clam-prod": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "clam-meat-prod": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "pama-croaker-prod": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },

    // --- Detail Card: Baby Octopus ---
    "baby-octopus-detail": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },   // วงกลมใหญ่
    "baby-octopus-view1": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },   // รูปเล็กซ้าย
    "baby-octopus-view2": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },   // รูปเล็กขวา

    // --- Detail Card: Giant Octopus ---
    "giant-octopus-detail": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "giant-octopus-view1": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "giant-octopus-view2": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },

    // --- Detail Card: Cut Poulp Squid ---
    "cut-poulp-squid-detail": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "cut-poulp-squid-view1": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "cut-poulp-squid-view2": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },

    // --- Detail Card: Cuttlefish ---
    "cuttlefish-detail": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "cuttlefish-view1": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "cuttlefish-view2": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },

    // --- Detail Card: Squid ---
    "squid-detail": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "squid-view1": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "squid-view2": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },

    // --- Detail Card: Vannamei Shrimp ---
    "vannamei-detail": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "vannamei-view1": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "vannamei-view2": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },

    // --- Detail Card: Hard Clam ---
    "hard-clam-detail": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "hard-clam-view1": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "hard-clam-view2": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },

    // --- Detail Card: Baby Clam Meat ---
    "clam-meat-detail": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "clam-meat-view1": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "clam-meat-view2": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },

    // --- Detail Card: Yellow Croaker ---
    "pama-croaker-detail": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "pama-croaker-view1": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "pama-croaker-view2": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },


    // ==========================================
    // ABOUT PAGE (about.html)
    // ==========================================

    // --- Company Section (รูปโรงงาน) ---
    "about-factory": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "about-gallery-13": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "about-gallery-14": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "about-gallery-15": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },
    "about-gallery-16": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },


    // ==========================================
    // SERVICES PAGE (services.html)
    // ==========================================

    // --- Service Row Images (รูปที่ 2–5 ในโฟลเดอร์ pic/service/) ---
    //     x/y = เลื่อนซ้าย-ขวา / ขึ้น-ลง (px)   zoom = ซูม   aspectRatio = "16 / 9" ฯลฯ
    "service-img-2": { x: 0, y: 1, zoom: 1, aspectRatio: "original" },  // Raw Material Processing
    "service-img-3": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },  // Storage & Inventory Management
    "service-img-4": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },  // Packaging Service
    "service-img-5": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },  // Transportation
    "service-img-6": { x: 0, y: 0, zoom: 1, aspectRatio: "original" },  // (สำรอง)
};

