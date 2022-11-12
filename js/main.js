const badgeEL = document.querySelector("header .badges");   // 우측 배너
const toTopEl = document.querySelector("#to-top");          // 위로가기 버튼

window.addEventListener("scroll", _.throttle(function () {
    if (window.scrollY > 500) {
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEL, .6, {
            opacity: 0,
            display: 'none'
        });
        gsap.to(toTopEl, .2, {
            x: 0,
        });
    } else {
        gsap.to(badgeEL, .6, {
            opacity: 1,
            display: 'block'
        });
        gsap.to(toTopEl, .2, {
            x: 100,
        });
    }
}, 300));
// _.throttle(함수, 시간) 
// opacity 속성처럼 값을 숫자로 입력하는 속성들은
// 전환 효과(transition 속성이나 GSAP 라이브러리 등)를 통해 
// 요소의 전/후 상태를 중간 숫자의 값으로 자연스럽게 만들어 줄 수 있지만
// display 속성처럼 값이 숫자가 아닌 속성은 전/후 상태의 중간값이 존재하지 않기 때문에
// 자연스러운 전환 효과를 적용할 수 없습니다.


// 최상단으로
toTopEl.addEventListener("click", function () {
    gsap.to(window, .7, {
        scrollTo: 0
    })
});


const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity: 1,
    });
});


// SWIPER
new Swiper(".notice-line .swiper", {
    direction: "vertical",
    autoplay: true,
    loop: true,
});

new Swiper(".promotion .swiper", {
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이게 
    autoplay: { delay: 5000 },
    loop: true,
    pagination: {
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable: true,// 사용자의 페이지 번호 요소 제어
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

new Swiper(".awards .swiper", {
    autoplay: true,
    loop: true,
    spaceBetween: 30, // 슬라이드 사이 여백
    slidesPerView: 5, // 한번에 보여줄 슬라이드 개수
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
    isHidePromotion = !isHidePromotion; // 반대
    if (isHidePromotion) {
        promotionEl.classList.add("hide");
    } else {
        promotionEl.classList.remove("hide");
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
    // gsap.to(요소, 시간(초), 옵션);
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat: -1,  // 반복 : -1 무한대
        yoyo: true, // 뒤로감기
        ease: Power1.easeInOut, // 애니메이션 효과 변경
        delay: random(0, delay) // 몇 초 뒤 진행
    });
}

floatingObject(".floating1", 1, 15);
floatingObject(".floating2", .5, 15);
floatingObject(".floating3", 1.5, 20);


const spyEls = document.querySelectorAll("section.scroll-spy");

spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
            triggerHook: .8, // 뷰포트 기준으로 0~1 감시 지점 선택 
        })
        .setClassToggle(spyEl, "show")
        .addTo(new ScrollMagic.Controller());
});