const homeBanCon = document.querySelector(".home_banner_con");
const [prevBtn, nextBtn] = document.querySelectorAll(".home_banner_btn");

/* 서버에서 이미지 데이터를 읽어왔다고 가정 */
let currentImage = 0;
const getImage = [
  {
    id: 1,
    image:
      "https://i.namu.wiki/i/avnj345On_el7Om4PGTGaq0OIWL9MBD9LYNEShe1i4tvlCrLx1jEQvZqSIakTHm0EoJVbTzdS3jw1OAptDfBIQ.webp",
    alt: "city",
    message: `Thank you for visiting our site.`,
  },
  {
    id: 2,
    image:
      "https://dthezntil550i.cloudfront.net/2m/latest/2m2004261456471710001268200/1280_960/058fcd7f-ece5-4c06-9777-188039a7431a.png",
    alt: "city",
    message: `How was your day today?`,
  },
  {
    id: 3,
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20210903/pngtree-beautiful-summer-landscape-background-with-green-hills-image_776742.jpg",
    alt: "forest",
    message: `I hope every day becomes a clear and sunny one for you. Have a great time!`,
  },
];

// 홈의 배너를 렌더링 하는 함수
const bannerRendering = (images, currentImage) => {
  const createHTML = `
              <img
                class="home_banner"
                src="${images[currentImage].image}"
                alt="${images[currentImage].alt}"
              />
              <p class="home_message">${images[currentImage].message}</p>
                `;
  homeBanCon.innerHTML = createHTML;
};

bannerRendering(getImage, currentImage);

// 다음/이전 페이지 이동 버튼 이벤트 리스너
nextBtn.addEventListener("click", () => {
  currentImage++;
  bannerRendering(getImage, currentImage);
  toggleButtonVisibility(currentImage, getImage.length);
});

prevBtn.addEventListener("click", () => {
  currentImage--;
  bannerRendering(getImage, currentImage);
  toggleButtonVisibility(currentImage, getImage.length);
});

// 특정 조건을 만족하면 버튼이 사라졌다 나타났다하게 하는 함수
const toggleButtonVisibility = (currentImage, length) => {
  currentImage === 0
    ? (prevBtn.style.cssText = `visibility:hidden; opacity:0`)
    : (prevBtn.style.cssText = `visibility: visible;opacity:1`);

  currentImage === length - 1
    ? (nextBtn.style.cssText = `visibility:hidden; opacity:0`)
    : (nextBtn.style.cssText = `visibility: visible;opacity:1`);
};

// 사용자가 마지막 배너로 이동하면 안내 메시지를 생성하는 함수
const showFinalPageMessage=()=>{
    const article = document.createElement('article')
    const div = document.createElement('div')
    div.classList.add('message_arrow')
    const p = document.createElement('p')
    p.innerHTML=`아래 메뉴를 선택해주세요. 현재 위치는 Home 입니다.`
    article.appendChild(p)
}

toggleButtonVisibility(currentImage, getImage.length);
