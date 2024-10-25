




const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split('').map(
    (char, i) => `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
).join('');


var type = new Typed(".auto-type", {
    strings: ["Angular", "NodeJS", "Flutter", "HTML, CSS", "JavaScript", "Dart"],
    typeSpeed: 150,
    backSpeed: 150,
    looped: true,
})


window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 100) {
        navbar.classList.add("bg-white", "shadow-lg",);
    } else {
        navbar.classList.remove("bg-white", "shadow-lg",)
    }
});


AOS.init({
    duration: 2000, // Thời gian hiệu ứng (1 giây)
    offset: 120,    // Khoảng cách khi bắt đầu hiệu ứng
});


const innerCircle = document.querySelector('.inner-circle');
const outerCircle = document.querySelector('.outer-circle');

let mouseX = 0, mouseY = 0;
let outerX = 0, outerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
    // Di chuyển chấm nhỏ theo vị trí con trỏ ngay lập tức
    innerCircle.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px)`;
});

// Hàm để di chuyển vòng tròn lớn chậm rãi hơn
function animateCircles() {
    outerX += (mouseX - outerX) * 0.1;
    outerY += (mouseY - outerY) * 0.1;
    outerCircle.style.transform = `translate(${outerX - 20}px, ${outerY - 20}px)`;
    requestAnimationFrame(animateCircles);
}

// Bắt đầu quá trình animation
animateCircles();







document.getElementById("backToTop").addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Chọn tất cả các section và các link tương ứng trong menu
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", function() {
    let current = "";

    // Kiểm tra vị trí của từng section so với viewport
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id"); // Lấy id của section hiện tại
        }
    });

    // Loại bỏ class 'active' từ tất cả các link
    navLinks.forEach((link) => {
        link.classList.remove("active");

        // Thêm class 'active' cho link của section hiện tại
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});
