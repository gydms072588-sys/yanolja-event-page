const galleryItems = [
  {
    image: "gallery-card_1 image.png",
    name: "씨브리즈 하우스",
    location: "강릉시 사천면",
    tags: "#오션뷰 #커플여행 #강릉",
    description: "바다 앞 감성 오션뷰",
  },
  {
    image: "gallery-card_2 image.png",
    name: "담온재",
    location: "경주시 교동",
    tags: "#한옥스테이 #전통감성 #경주",
    description: "고즈넉한 한옥 스테이",
  },
  {
    image: "gallery-card_3_image.png",
    name: "라온가든 펜션",
    location: "양평군 서종면",
    tags: "#정원뷰 #가족모임 #양평",
    description: "가족과 쉬기 좋은 정원",
  },
  {
    image: "gallery-card_4_image.png",
    name: "포레스트 테라스",
    location: "홍천군 서면",
    tags: "#숲캉스 #바비큐 #홍천",
    description: "숲과 바비큐를 함께",
  },
];

const topsItems = [
  {
    image: "Section2_image1.png",
    alt: "수영장이 있는 야간 펜션 전경",
  },
  {
    image: "Section2_image2.png",
    alt: "창가 욕조가 있는 숙소 내부",
  },
  {
    image: "Section2_image3.png",
    alt: "숲속 삼각 지붕 펜션",
  },
];

const stepItems = [
  {
    image: "Section3_card1.png",
    title: "TOPS 펜션에 방문하여<br>인증샷 촬영하기",
    text: "",
  },
  {
    image: "Section3_card2.png",
    title: "야놀자 스팟에서<br>인증샷 촬영하기",
    text: "",
  },
  {
    image: "Section3_card3.png",
    title: "이벤트 페이지에<br>리뷰와 함께 인증샷 업로드하기",
    text: "",
  },
];

const imagePath = "./assets/images/";
const toast = document.querySelector(".toast");
let toastTimer;

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

function renderGallery() {
  const galleryGrid = document.querySelector("#galleryGrid");
  galleryGrid.innerHTML = galleryItems
    .map((item) => `
      <article class="gallery-card">
        <div class="gallery-image-wrap">
          <img src="${imagePath}${item.image}" alt="${item.name} ${item.location} 숙소 이미지">
          <button class="card-hover gallery-hover" type="button" aria-label="${item.name} 더보기" data-place="${item.name}">
            <strong>더보기</strong>
            <span>${item.tags}</span>
            <em>${item.description}</em>
          </button>
        </div>
        <div class="gallery-card-info">
          <strong>${item.name}</strong>
          <span>${item.location}</span>
        </div>
      </article>
    `)
    .join("");
}

function initRecommendMotion() {
  const recommendSection = document.querySelector("#section-recommend");
  if (!recommendSection) return;

  let hasUserScrolled = false;
  let isIntersecting = false;
  let hasPlayed = false;
  let motionTimer;
  let observer;

  function playMotion() {
    if (!hasUserScrolled || !isIntersecting || hasPlayed) return;
    hasPlayed = true;
    motionTimer = setTimeout(() => {
      recommendSection.classList.add("is-visible");
    }, 650);
    observer?.unobserve(recommendSection);
    window.removeEventListener("scroll", onScroll);
  }

  function onScroll() {
    if (window.scrollY <= 10) return;
    hasUserScrolled = true;

    if (!("IntersectionObserver" in window)) {
      const rect = recommendSection.getBoundingClientRect();
      isIntersecting = rect.top < window.innerHeight * 0.82 && rect.bottom > 0;
    }

    playMotion();
  }

  window.addEventListener("scroll", onScroll, { passive: true });

  if (!("IntersectionObserver" in window)) return;

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      isIntersecting = entry.isIntersecting;
      playMotion();
    });
  }, { threshold: 0.35 });

  observer.observe(recommendSection);
}

function renderTopsCards() {
  const topsList = document.querySelector("#topsList");
  topsList.innerHTML = topsItems
    .map((item) => `
      <article class="tops-card">
        <img src="${imagePath}${item.image}" alt="${item.alt}">
      </article>
    `)
    .join("") + `<p class="tops-note">TOPS 인증마크를 확인하세요!</p>`;
}

function initAboutMotion() {
  const aboutSection = document.querySelector("#section-about");
  if (!aboutSection) return;

  if (!("IntersectionObserver" in window)) {
    aboutSection.classList.add("is-visible");
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      aboutSection.classList.add("is-visible");
      observer.unobserve(aboutSection);
    });
  }, { threshold: 0.35 });

  observer.observe(aboutSection);
}

function renderSteps() {
  const stepList = document.querySelector("#stepList");
  stepList.innerHTML = stepItems
    .map((item) => `
      <li class="step-item">
        <img src="${imagePath}${item.image}" alt="">
        <strong>${item.title}</strong>
        ${item.text ? `<p>${item.text}</p>` : ""}
      </li>
    `)
    .join("");
}

function initEventSingleSwiper() {
  const eventSwiper = document.querySelector(".event-swiper");
  if (!eventSwiper || typeof Swiper === "undefined") return;

  new Swiper(".event-swiper", {
    loop: true,
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 0,
    grabCursor: true,
    navigation: {
      nextEl: ".event-next",
      prevEl: ".event-prev",
    },
  });
}

function initSwiper() {
  const heroProgress = document.querySelector(".hero-progress");
  const progressTrack = document.querySelector(".progress-track");
  const realReviewLabel = document.querySelector(".progress-label:last-child");
  let isProgressComplete = false;

  function setHeroProgress(value) {
    progressTrack?.style.setProperty("--hero-progress", Math.max(0, Math.min(1, value)));
  }

  function completeHeroProgress() {
    isProgressComplete = true;
    setHeroProgress(1);
    heroProgress?.classList.add("is-complete");
    progressTrack?.classList.add("is-complete");
    realReviewLabel?.classList.add("is-active");
  }

  function updateHeroProgress() {
    const video = document.querySelector(".hero-video");
    const duration = video?.duration;

    if (isProgressComplete) {
      setHeroProgress(1);
      requestAnimationFrame(updateHeroProgress);
      return;
    }

    if (video && Number.isFinite(duration) && duration > 0) {
      const progress = video.currentTime / duration;
      setHeroProgress(progress);

      if (progress >= 0.995) {
        completeHeroProgress();
      }
    }

    requestAnimationFrame(updateHeroProgress);
  }

  setHeroProgress(0);
  document.querySelector(".swiper-slide")?.classList.add("swiper-slide-active");
  updateHeroProgress();
}

function bindInteractions() {
  document.querySelectorAll("[data-target]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector(button.dataset.target)?.scrollIntoView({ behavior: "smooth" });
    });
  });

  document.querySelector("#section-recommend").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-place]");
    if (!button) return;
    showToast(`${button.dataset.place} 예약 화면으로 이동할 예정입니다.`);
  });

  document.querySelector("#joinEvent").addEventListener("click", () => {
    showToast("이벤트 참여 신청이 시작됩니다.");
  });

  document.querySelector("#checkWinner").addEventListener("click", () => {
    showToast("당첨자 발표일은 2026.05.30입니다.");
  });

  document.querySelector("#subscribe").addEventListener("click", () => {
    const email = document.querySelector("#email");
    if (!email.value.trim()) {
      showToast("이메일을 입력해주세요.");
      email.focus();
      return;
    }
    showToast("이벤트 소식 신청이 완료되었습니다.");
    email.value = "";
  });
}

renderGallery();
initRecommendMotion();
renderTopsCards();
initAboutMotion();
renderSteps();
initEventSingleSwiper();
bindInteractions();
initSwiper();
