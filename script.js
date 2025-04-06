document.addEventListener("DOMContentLoaded", () => {
    console.log("หน้าเว็บโหลดเสร็จแล้ว!");

    //ทำให้โชว์เมื่อเลื่อนเจอ
    const texts = document.querySelectorAll(".hidden-text");
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".slide-up").forEach(element => {
    observer.observe(element);
    });
    cards.forEach(card => observer.observe(card));
    texts.forEach(text => observer.observe(text));
    //การ์ด
});



document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.pageY, // 🔥 เปลี่ยนจาก clientY เป็น pageY
            duration: 0.2,
            ease: "power2.out"
        });
    });

    const images = document.querySelectorAll(".image-container img");
    const cards = document.querySelectorAll(".card");
    const cardsmall = document.querySelectorAll(".cardsmall");

    images.forEach(img => {
        img.addEventListener("mouseenter", () => {
            //cursor.innerHTML = ">"; // เปลี่ยนอิโมจิตามต้องการ
            //cursor.style.fontSize = "30px";
            gsap.to(cursor, { 
                width: 60, 
                height: 60, 
                background: "rgb(249, 249, 249)", 
                borderRadius: "100px",
                duration: 0.3
            });
        });

        img.addEventListener("mouseleave", () => {
            cursor.innerHTML = ""
            gsap.to(cursor, { 
                width: 40, 
                height: 40, 
                background: "transparent", 
                borderRadius: "50%",
                duration: 0.3
            });
        });
    });
    cards.forEach(cards => {
        cards.addEventListener("mouseenter", () => {
            //cursor.innerHTML = ">"; // เปลี่ยนอิโมจิตามต้องการ
            //cursor.style.fontSize = "30px";
            gsap.to(cursor, { 
                width: 60, 
                height: 60, 
                background: "rgba(34, 34, 34, 0.33)", 
                borderRadius: "50px",
                duration: 0.3
            });
        });

        cards.addEventListener("mouseleave", () => {
            cursor.innerHTML = ""
            gsap.to(cursor, { 
                width: 40, 
                height: 40, 
                background: "transparent", 
                borderRadius: "50%",
                duration: 0.3
            });
        });
    });
    cardsmall.forEach(cardsmall => {
        cardsmall.addEventListener("mouseenter", () => {
            //cursor.innerHTML = ">"; // เปลี่ยนอิโมจิตามต้องการ
            //cursor.style.fontSize = "30px";
            gsap.to(cursor, { 
                width: 60, 
                height: 60, 
                background: "rgba(34, 34, 34, 0.33)", 
                borderRadius: "50px",
                duration: 0.3
            });
        });

        cardsmall.addEventListener("mouseleave", () => {
            cursor.innerHTML = ""
            gsap.to(cursor, { 
                width: 40, 
                height: 40, 
                background: "transparent", 
                borderRadius: "50%",
                duration: 0.3
            });
        });
    });
});

const shadow = document.getElementById('shadow');
        let mouseX = 0, mouseY = 0;
        let shadowX = 0, shadowY = 0;
        let shadowScale = 1;

        // กำหนดการเคลื่อนไหวที่สมูท
        const speed = 0.1; // ความเร็วในการเคลื่อนไหวของเงา
        const maxDistance = 200; // ระยะทางสูงสุดที่เงาจะเคลื่อนที่

        // ฟังก์ชั่นที่ใช้คำนวณตำแหน่งของเงา
        function updateShadowPosition() {
            const dx = mouseX - shadowX;
            const dy = mouseY - shadowY;

            // คำนวณความห่างของเมาส์จากเงา
            const distance = Math.sqrt(dx * dx + dy * dy);

            // ปรับขนาดของเงาตามระยะทาง
            if (distance < maxDistance) {
                shadowScale = 1 + (1 - distance / maxDistance) * 0.2; // ขยายขนาดเงาตามระยะทาง
            } else {
                shadowScale = 1;
            }

            // เพิ่มการเคลื่อนไหวที่สมูท
            shadowX += dx * speed;
            shadowY += dy * speed;

            shadow.style.left = shadowX + 'px';
            shadow.style.top = shadowY + 'px';
            shadow.style.transform = `translate(-50%, -50%) scale(${shadowScale})`; // ปรับตำแหน่งและขนาดเงา
        }

        // การจับตำแหน่งเมาส์
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // อัปเดตตำแหน่งของเงาทุก 10ms
        setInterval(updateShadowPosition, 10);