const homeBanCon = document.querySelector(".home_banner_con");
const [prevBtn, nextBtn] = document.querySelectorAll(".home_banner_btn");

// 홈 페이지의 라스트 배너에서 보여줄 메시지 요소의 틀 생성
const article = document.createElement("article");
article.setAttribute("class", "last_message_con");
document.body.appendChild(article);

/* 서버에서 이미지 데이터를 읽어왔다고 가정 */
let currentImage = 0;
const getImage = [
  {
    id: 1,
    image:
      "https://i.namu.wiki/i/avnj345On_el7Om4PGTGaq0OIWL9MBD9LYNEShe1i4tvlCrLx1jEQvZqSIakTHm0EoJVbTzdS3jw1OAptDfBIQ.webp",
    alt: "city",
    message: `저희 사이트를 <mark>방문</mark>해주셔서 감사합니다!`,
    fontColor: "#fff",
  },
  {
    id: 2,
    image:
      "https://dthezntil550i.cloudfront.net/2m/latest/2m2004261456471710001268200/1280_960/058fcd7f-ece5-4c06-9777-188039a7431a.png",
    alt: "city",
    message: `사람들이 범하는 일반적인 문제는 <mark>성공과 실패의 이분법적 사고</mark>입니다. </br> 성공은 최종적인 것이 아니며, 실패는 치명적인 것이 아닙니다.</br> <mark>중요한 것은 계속하는 용기</mark>임을 명심하세요.`,
    fontColor: "#fff",
  },
  {
    id: 3,
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20210903/pngtree-beautiful-summer-landscape-background-with-green-hills-image_776742.jpg",
    alt: "forest",
    message: `실패가 가득하다고 스스로를 나무라지 마세요.</br> <mark>현재의 어려움</mark>과 <mark>시련</mark>이 언젠가는 당신을 성공으로 이끌 것입니다.`,
    fontColor: "#000",
  },
  {
  id: 4,
  image:
    "https://cdn.womaneconomy.co.kr/news/photo/202211/214153_419786_1151.jpg",
  alt: "forest",
  message: ` 콜린 퍼스는 <b>"희망은 항상 어둠 속에 있다."</b> 라고 하였습니다.</br> 어둠이 있기에 희망이 있고, 희망이 있기에 밝은 미래가 있다는 사실을 명심하세요.`,
  fontColor: "#fff",
},
];

// 홈의 배너를 렌더링 하는 함수
const bannerRendering = (images) => {
  let createHTML = images.map((_, i) => {
    return `
        <article class="home_banner_boundary">
        <p class="home_message" style="color:${images[i].fontColor}">${images[i].message}</p>
              <img
                class="home_banner"
                src="${images[i].image}"
                alt="${images[i].alt}"
              />
            
        </article>  
              `;
  });
  homeBanCon.innerHTML = createHTML.join("");
};
bannerRendering(getImage);

const switchNextBanner = (currentImage) => {
  console.log(currentImage);
  homeBanCon.style.transform = `translate(${-100 * currentImage}%)`;
};

const switchPrevBanner = (currentImage) => {
  console.log(currentImage);
  homeBanCon.style.transform = `translate(${-100 * currentImage}%)`;
};

// 다음/이전 페이지 이동 버튼 이벤트 리스너
nextBtn.addEventListener("click", () => {
  currentImage++;
  bannerRendering(getImage, currentImage);
  toggleButtonVisibility(currentImage, getImage.length);
  showFinalPageMessage(currentImage, getImage.length);
  switchNextBanner(currentImage);
});

prevBtn.addEventListener("click", () => {
  currentImage--;
  bannerRendering(getImage, currentImage);
  toggleButtonVisibility(currentImage, getImage.length);
  showFinalPageMessage(currentImage, getImage.length);
  switchPrevBanner(currentImage);
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
const showFinalPageMessage = (currentImage) => {
  let messageHTML = "";
  /* 마지막 페이지가 아니라면 함수 실행하지 말고 바로 나가도록 */
  if (currentImage >= getImage.length - 1) {
    article.classList.add("on");
    messageHTML = `
            <p> 아래 메뉴를 선택해주세요. 현재 위치는 Home 입니다.</p>
            <div class="last_message_arrow" >▼</div>`;
  } else {
    article.classList.remove("on");
  }
  article.innerHTML = messageHTML;
};

toggleButtonVisibility(currentImage, getImage.length);
