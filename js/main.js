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

const reviewItems = [
  {
    image: "assets/images/reviews/review-01.jpg",
    name: "서린",
    title: "@서린 의 리얼리뷰",
    content: "아이와 함께 객실에서 셀카를 남겼는데 창밖 풍경까지 예쁘게 담겼어요. 침대도 넓고 조용해서 가족 모두 편하게 쉬었습니다.",
    alt: "객실 침대 앞에서 가족이 셀카를 찍는 모습",
  },
  {
    image: "assets/images/reviews/review-02.jpg",
    name: "수아",
    title: "@수아 의 리얼리뷰",
    content: "객실 안에서 찍은 거울 사진이 자연스럽게 잘 나왔어요. 따뜻한 우드 톤이라 머무는 내내 아늑하고 편안했습니다.",
    alt: "숙소 객실에서 거울 셀카를 찍는 여행자",
  },
  {
    image: "assets/images/reviews/review-03.jpg",
    name: "나린",
    title: "@나린 의 리얼리뷰",
    content: "아침에 창가에 앉아 커피를 마시는데 햇살이 정말 좋았어요. 혼자 쉬러 온 여행이었는데 충분히 충전하고 돌아왔습니다.",
    alt: "창가에 앉아 머그컵을 들고 쉬는 여행자",
  },
  {
    image: "assets/images/reviews/review-04.jpg",
    name: "보리",
    title: "@보리 의 리얼리뷰",
    content: "반려견과 함께 머물렀는데 침대와 객실 컨디션이 깨끗해서 안심됐어요. 아이도 낯설어하지 않고 편하게 쉬었습니다.",
    alt: "객실 침대 위에서 반려견과 함께 쉬는 여행자",
  },
  {
    image: "assets/images/reviews/review-05.jpg",
    name: "유진",
    title: "@유진 의 리얼리뷰",
    content: "커플 여행으로 다녀왔는데 객실에서 같이 사진 고르는 시간도 좋았어요. 침구가 깔끔하고 창밖 풍경도 차분했습니다.",
    alt: "침대 위에서 커플이 휴대폰을 보며 쉬는 모습",
  },
  {
    image: "assets/images/reviews/review-06.jpg",
    name: "다온",
    title: "@다온 의 리얼리뷰",
    content: "친구들과 거실에 모여 이야기하기 좋았습니다. 창이 커서 답답하지 않고, 숙소 분위기가 자연스러워 사진도 잘 나왔어요.",
    alt: "숙소 거실에서 친구들이 함께 이야기하는 모습",
  },
  {
    image: "assets/images/reviews/review-07.jpg",
    name: "하늘",
    title: "@하늘 의 리얼리뷰",
    content: "창가 자리에서 바깥 풍경을 보며 쉬는 시간이 제일 좋았어요. 객실 안에서도 여행 온 기분이 충분히 느껴졌습니다.",
    alt: "창밖 풍경을 바라보며 테이블에 앉은 여행자",
  },
  {
    image: "assets/images/reviews/review-08.jpg",
    name: "민호",
    title: "@민호 의 리얼리뷰",
    content: "혼자 조용히 쉬러 갔는데 창가 소파가 정말 편했습니다. 커피 마시며 밖을 바라보는 것만으로도 충분히 여유로웠어요.",
    alt: "창가 소파에서 커피를 들고 쉬는 여행자",
  },
  {
    image: "assets/images/reviews/review-09.jpg",
    name: "지우",
    title: "@지우 의 리얼리뷰",
    content: "둘이 창밖을 보며 쉬는 시간이 오래 기억에 남을 것 같아요. 객실이 조용하고 침구도 깨끗해서 만족했습니다.",
    alt: "침대에 앉아 창밖을 바라보는 커플",
  },
  {
    image: "assets/images/reviews/review-10.jpg",
    name: "은우",
    title: "@은우 의 리얼리뷰",
    content: "아이와 함께 침대에서 책을 보며 쉬었는데 공간이 넉넉해서 편했습니다. 가족 여행 숙소로 다시 오고 싶어요.",
    alt: "객실 침대 위에서 가족이 함께 책을 보는 모습",
  },
  {
    image: "assets/images/reviews/review-11.jpg",
    name: "아린",
    title: "@아린 의 리얼리뷰",
    content: "커튼 사이로 들어오는 햇살이 좋아서 아침 사진을 많이 남겼어요. 방 안 분위기가 따뜻해서 하루 더 머물고 싶었습니다.",
    alt: "침대 위에서 커튼을 열며 쉬는 여행자",
  },
  {
    image: "assets/images/reviews/review-12.jpg",
    name: "태오",
    title: "@태오 의 리얼리뷰",
    content: "펜션 외관 앞에서 가족사진을 남기기 좋았습니다. 나무 느낌의 숙소라 따뜻했고, 도착하자마자 여행 온 기분이 났어요.",
    alt: "펜션 외관 앞에서 가족이 기념사진을 찍는 모습",
  },
];

const imagePath = "./assets/images/";
const toast = document.querySelector(".toast");
let toastTimer;

function showToast(message) {
  if (!toast) return;
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

function getDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDateLabel(dateString) {
  return dateString.replace(/-/g, ".");
}

function renderGallery() {
  const galleryGrid = document.querySelector("#galleryGrid");
  if (!galleryGrid) return;

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

function initHeroRecommendTransition() {
  const hero = document.querySelector("#hero");
  const transitionPanel = document.querySelector(".hero-recommend-panel");
  if (!hero || !transitionPanel) return;

  let frameId = 0;
  let currentStrength = 0;
  let targetStrength = 0;

  function applyTransitionStrength(strength) {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const blur = strength * (isMobile ? 10 : 16);
    const panelOpacity = 1 - strength * (isMobile ? 0.52 : 0.45);
    const panelRadius = strength * (isMobile ? 24 : 34);
    const shadowOpacity = strength * (isMobile ? 0.08 : 0.12);

    transitionPanel.style.setProperty("--hero-transition-progress", strength.toFixed(4));
    transitionPanel.style.setProperty("--hero-transition-blur", `${blur.toFixed(2)}px`);
    transitionPanel.style.setProperty("--hero-panel-opacity", panelOpacity.toFixed(4));
    transitionPanel.style.setProperty("--hero-panel-radius", `${panelRadius.toFixed(2)}px`);
    transitionPanel.style.setProperty("--hero-panel-shadow", shadowOpacity.toFixed(4));
  }

  function getTransitionStrength() {
    const rect = transitionPanel.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const transitionStart = viewportHeight * 0.96;
    const transitionEnd = viewportHeight * (isMobile ? 0.28 : 0.12);
    const strength = (rect.top - transitionEnd) / (transitionStart - transitionEnd);

    return Math.min(1, Math.max(0, strength));
  }

  function updateTransition() {
    targetStrength = getTransitionStrength();
    currentStrength += (targetStrength - currentStrength) * 0.2;

    if (Math.abs(targetStrength - currentStrength) < 0.001) {
      currentStrength = targetStrength;
    }

    applyTransitionStrength(currentStrength);

    if (currentStrength !== targetStrength) {
      frameId = window.requestAnimationFrame(updateTransition);
      return;
    }

    frameId = 0;
  }

  function requestTransitionUpdate() {
    targetStrength = getTransitionStrength();
    if (!frameId) {
      frameId = window.requestAnimationFrame(updateTransition);
    }
  }

  currentStrength = getTransitionStrength();
  targetStrength = currentStrength;
  applyTransitionStrength(currentStrength);

  window.addEventListener("scroll", requestTransitionUpdate, { passive: true });
  window.addEventListener("resize", requestTransitionUpdate, { passive: true });
}

function renderTopsCards() {
  const topsList = document.querySelector("#topsList");
  if (!topsList) return;

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

function initBenefitMotion() {
  const benefitSection = document.querySelector("#section-benefit");
  if (!benefitSection) return;

  if (!("IntersectionObserver" in window)) {
    benefitSection.classList.add("is-visible");
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      benefitSection.classList.add("is-visible");
      observer.unobserve(benefitSection);
    });
  }, { threshold: 0.35 });

  observer.observe(benefitSection);
}

function renderSteps() {
  const stepList = document.querySelector("#stepList");
  if (!stepList) return;

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

function getReviewImageSrc(image) {
  if (/^(https?:)?\/\//.test(image) || image.startsWith("./") || image.startsWith("/")) {
    return image;
  }

  return `./${image}`;
}

function renderReviewCards() {
  const reviewCardList = document.querySelector(".review-card-list");
  if (!reviewCardList) return;

  reviewCardList.innerHTML = reviewItems
    .map((item, index) => {
      const fallbackImage = `./assets/images/review/review-card-${String((index % 4) + 1).padStart(2, "0")}.png`;

      return `
      <article class="review-card" data-review-name="${item.name}">
        <img src="${getReviewImageSrc(item.image)}" alt="${item.alt}" loading="lazy" onerror="this.onerror=null;this.src='${fallbackImage}';">
        <div class="review-card-copy">
          <strong>${item.title}</strong>
          <p>${item.content}</p>
        </div>
        <button class="review-booking-button" type="button" data-review-detail>더보기</button>
      </article>
    `;
    })
    .join("");
}

function initEventSingleSwiper() {
  const eventSwiper = document.querySelector(".event-swiper");
  if (!eventSwiper || typeof Swiper === "undefined") return;

  new Swiper(".event-swiper", {
    loop: true,
    speed: 900,
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 0,
    grabCursor: false,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    pagination: {
      el: ".event-pagination",
      clickable: true,
    },
  });
}

function initSwiper() {
  const heroProgress = document.querySelector(".hero-progress");
  const progressTrack = document.querySelector(".progress-track");
  const realReviewLabel = document.querySelector(".progress-label:last-child");
  if (!heroProgress || !progressTrack) return;

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

function initFloatingActions() {
  const chatButton = document.querySelector("#floatingChat");
  const consultPanel = document.querySelector("#floatingConsultPanel");
  const reviewButton = document.querySelector("#floatingReview");
  const chatBody = consultPanel?.querySelector("[data-chat-body]");
  const chatForm = consultPanel?.querySelector("[data-chat-form]");
  const chatInput = chatForm?.querySelector("input");
  const quickReplies = {
    "이벤트 참여방법": "TOPS 펜션에 방문해 인증샷을 촬영한 뒤, 이벤트 페이지에서 리뷰와 함께 업로드하면 참여가 완료됩니다.",
    "리뷰 작성하기": "리뷰 참여하기 버튼을 눌러 리뷰 작성 화면으로 이동할 예정입니다.",
    "당첨자 발표": "당첨자 발표 일정은 이벤트 페이지 공지 영역에서 확인할 수 있도록 준비 중입니다.",
    "고객센터 연결": "고객행복센터 전화 상담은 1670-6250, 채팅 상담은 추후 정식 연결될 예정입니다.",
  };

  function scrollChatToBottom() {
    if (!chatBody) return;
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function appendChatMessage(message, type = "bot") {
    if (!chatBody) return;

    const bubble = document.createElement("div");
    bubble.className = `chat-message chat-message--${type}`;
    bubble.textContent = message;
    chatBody.appendChild(bubble);
    scrollChatToBottom();
  }

  function appendBotResponse(message) {
    window.setTimeout(() => {
      appendChatMessage(message);
    }, 500);
  }

  function setConsultPanelOpen(isOpen) {
    consultPanel?.classList.toggle("is-open", isOpen);
    consultPanel?.setAttribute("aria-hidden", String(!isOpen));
    chatButton?.setAttribute("aria-expanded", String(isOpen));
    chatButton?.setAttribute("aria-label", isOpen ? "고객상담 닫기" : "고객상담 열기");

    if (isOpen) {
      window.setTimeout(scrollChatToBottom, 120);
    }
  }

  chatButton?.addEventListener("click", () => {
    const isOpen = consultPanel?.classList.contains("is-open");
    setConsultPanelOpen(!isOpen);
  });

  consultPanel?.addEventListener("click", (event) => {
    const closeButton = event.target.closest("[data-chat-close]");
    if (closeButton) {
      setConsultPanelOpen(false);
      return;
    }

    const eventCard = event.target.closest("[data-chat-event-card]");
    if (eventCard) {
      const eventSection = document.querySelector("#section-how");
      if (eventSection) {
        eventSection.scrollIntoView({ behavior: "smooth" });
        setConsultPanelOpen(false);
      } else {
        showToast("이벤트 참여방법으로 이동할 예정입니다.");
      }
      return;
    }

    const quickButton = event.target.closest("[data-chat-quick]");
    if (!quickButton) return;

    const selectedMessage = quickButton.dataset.chatQuick;
    appendChatMessage(selectedMessage, "user");
    appendBotResponse(quickReplies[selectedMessage] || quickReplies["고객센터 연결"]);
  });

  chatForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = chatInput?.value.trim();
    if (!message) {
      chatInput?.focus();
      return;
    }

    appendChatMessage(message, "user");
    chatInput.value = "";
    appendBotResponse("문의 감사합니다. 현재는 이벤트 안내용 상담창이며, 실제 상담 연결은 추후 제공될 예정입니다.");
  });

  reviewButton?.addEventListener("click", () => {
    showToast("리뷰 작성 페이지로 이동할 예정입니다.");
  });

  document.addEventListener("click", (event) => {
    if (!consultPanel?.classList.contains("is-open")) return;
    if (event.target.closest(".floating-action-wrap")) return;
    setConsultPanelOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    setConsultPanelOpen(false);
  });
}

function initReviewCardMotion() {
  const reviewCardList = document.querySelector(".review-card-list");
  if (!reviewCardList) return;

  const reviewCards = [...reviewCardList.querySelectorAll(".review-card")];
  if (!reviewCards.length) return;

  if (!("IntersectionObserver" in window)) {
    reviewCards.forEach((card) => {
      card.classList.add("is-visible");
    });
    return;
  }

  const observer = new IntersectionObserver((entries, cardObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("is-visible");
      cardObserver.unobserve(entry.target);
    });
  }, {
    rootMargin: "0px 0px -8% 0px",
    threshold: 0.2
  });

  reviewCards.forEach((card, index) => {
    const delay = index < 5 ? index * 110 : 0;
    card.style.setProperty("--review-card-delay", `${delay}ms`);
    observer.observe(card);
  });
}

function bindReviewInteractions() {
  const reviewMoreModal = document.querySelector("[data-review-more-modal]");
  const reviewMoreCloseButtons = document.querySelectorAll("[data-review-more-close]");

  function setReviewMoreModalOpen(isOpen) {
    if (!reviewMoreModal) return;
    reviewMoreModal.classList.toggle("is-open", isOpen);
    reviewMoreModal.setAttribute("aria-hidden", String(!isOpen));
  }

  document.querySelectorAll("[data-review-detail]").forEach((button) => {
    button.addEventListener("click", () => {
      showToast("리뷰 상세 페이지로 이동할 예정입니다.");
    });
  });

  document.querySelector("[data-review-write]")?.addEventListener("click", () => {
    showToast("리뷰 작성 페이지로 이동할 예정입니다.");
  });

  document.querySelector("[data-review-more]")?.addEventListener("click", () => {
    if (!reviewMoreModal) {
      showToast("리뷰 모음 페이지로 이동할 예정입니다.");
      return;
    }

    setReviewMoreModalOpen(true);
  });

  reviewMoreCloseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setReviewMoreModalOpen(false);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    setReviewMoreModalOpen(false);
  });
}

function bindInteractions() {
  function getWinnerCheckMessage(checkDate) {
    const today = getDateString(new Date());

    if (today < checkDate) {
      return `당첨 확인 기간이 아닙니다. ${formatDateLabel(checkDate)} 이후 확인해주세요.`;
    }

    if (today === checkDate) {
      return "확인 페이지로 이동할 예정입니다.";
    }

    return "종료된 이벤트입니다.";
  }

  document.querySelectorAll("[data-target]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector(button.dataset.target)?.scrollIntoView({ behavior: "smooth" });
    });
  });

  document.querySelectorAll("[data-check-trigger]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector("#section-schedule")?.scrollIntoView({ behavior: "smooth" });

      const checkDate = document.querySelector(".schedule-check-card[data-check-date]")?.dataset.checkDate;
      if (checkDate) {
        showToast(getWinnerCheckMessage(checkDate));
      }
    });
  });

  document.querySelector("#section-recommend")?.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-place]");
    if (!button) return;
    showToast(`${button.dataset.place} 예약 화면으로 이동할 예정입니다.`);
  });

  document.querySelector("#joinEvent")?.addEventListener("click", () => {
    showToast("이벤트 참여 신청이 시작됩니다.");
  });

  document.querySelector(".schedule-check-card[data-check-date]")?.addEventListener("click", (event) => {
    const checkDate = event.currentTarget.dataset.checkDate;
    showToast(getWinnerCheckMessage(checkDate));
  });

  document.querySelector("#subscribe")?.addEventListener("click", () => {
    const email = document.querySelector("#email");
    if (!email?.value.trim()) {
      showToast("이메일을 입력해주세요.");
      email?.focus();
      return;
    }
    showToast("이벤트 소식 신청이 완료되었습니다.");
    email.value = "";
  });
}

renderGallery();
initRecommendMotion();
initHeroRecommendTransition();
renderTopsCards();
initAboutMotion();
initBenefitMotion();
renderSteps();
renderReviewCards();
initEventSingleSwiper();
initFloatingActions();
initReviewCardMotion();
bindInteractions();
bindReviewInteractions();
initSwiper();
