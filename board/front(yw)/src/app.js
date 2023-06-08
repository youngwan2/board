// (() => {
/* 헤더 쿼리 */
const categories = document.querySelector(".category_ul");
const categoriesLi = document.querySelectorAll(".category_ul>li");

/* 메인 쿼리 */
const main = document.getElementById("main");

/* 페이지 쿼리 */
const homePage = document.querySelector(".home_page");
const listPage = document.querySelector(".list_page");
const writingPage = document.querySelector(".writing_page");
const detailPage = document.querySelector(".detail_page");
const updatePage = document.querySelector(".update_page");

/* 글쓰기 쿼리 */
const wUserInput = document.getElementById("text_title");
const wContent = document.getElementById("writing_content");
const wWriter = document.getElementById("writing_writer");
const wImage = document.getElementById("writing_image");
const wRegistBtn = document.getElementById("regist_btn");

/* 레이아웃 쿼리 */
const layout =document.querySelector('.layout')

/* 변수 */
// [현재 카테고리의 인덱스, 현재 게시글의 각 인덱스] =[각각 카운트]
let [categoryIndex, currentItem] = [0, 0]

// 로컬에 데이터 존재 안 하면 undefined 이므로 || 뒤의 0 을 할당
let listId = JSON.parse(localStorage.getItem("data"))?.length ?? 0;

/* 데이터베이스 */
// 로컬에 이미 존재하는 데이터를 가져와서 database 변수에 할당
// 만일 로컬에 데이터가 없다면 undefined 이므로 || 연산에 의해 [] 빈배열 할당
// || 연산자는 좌측값이 falsy 로 인식되면 뒤에 값을 평가한다.
const localData = JSON.parse(localStorage.getItem("data")) || [];
const database = localData;

/* 데이터베이스에 데이터를 전송하는 함수 */
function storePushFunc() {
  const data = {
    id: listId++,
    title: wUserInput.value,
    content: wContent.value,
    writer: wWriter.value,
    date: new Date().toLocaleString(),
    image: '',
    count: 0
  };

  database.push(data);
  reload();
}

/* 메뉴(카테고리) 클릭 시 포커스 유지하는 함수 */
function menuFocus(categoryIndex) {
  categoriesLi.forEach((_, i) => {
    categoriesLi[i].classList.remove("menu_on");
    if (i === categoryIndex) {
      categoriesLi[i].classList.add("menu_on");
    }
  });
};

menuFocus(categoryIndex);

categories.addEventListener("click", (e) => {
  pageChange(e.target);
});

const pageChange = (category) => {
  const menu = category.dataset.id;
  switch (menu) {
    case "home":
      console.log("home");
      categoryIndex = 0;
      home();
      menuFocus(categoryIndex);
      break;
    case "board":
      console.log("board");
      categoryIndex = 1;
      board();
      menuFocus(categoryIndex);
      break;
    case "writing":
      console.log("writing");
      categoryIndex = 2;
      writing();
      menuFocus(categoryIndex);
      break;
    default:
      console.log("해당없음");
  }
};

/* 홈 페이지 */
const home = () => {
  homePage.style.cssText = `visibility:visible; opacity:1`;
  listPage.style.cssText = `visibility:hidden; opacity:0`;
  writingPage.style.cssText = `visibility:hidden; opacity:0`;
  detailPage.style.cssText = `visibility:hidden; opacity:0`;
  updatePage.style.cssText = `visibility:hidden; opacity:0`;
};

home();

/* 게시판 페이지 */
const board = () => {
  listPage.style.cssText = `visibility:visible; opacity:1`;
  homePage.style.cssText = `visibility:hidden; opacity:0`;
  writingPage.style.cssText = `visibility:hidden; opacity:0`;
  detailPage.style.cssText = `visibility:hidden; opacity:0`;
  updatePage.style.cssText = `visibility:hidden; opacity:0`;
};

/* 글쓰기 페이지 */
const writing = () => {
  writingPage.style.cssText = `visibility:visible; opacity:1`;
  homePage.style.cssText = `visibility:hidden; opacity:0`;
  listPage.style.cssText = `visibility:hidden; opacity:0`;
  detailPage.style.cssText = `visibility:hidden; opacity:0`;
  updatePage.style.cssText = `visibility:hidden; opacity:0`;
};

/* 글수정 페이지 */

const update = () => {
  updatePage.style.cssText = `visibility:visible; opacity:1`;
  writingPage.style.cssText = `visibility:hidden; opacity:0`;
  homePage.style.cssText = `visibility:hidden; opacity:0`;
  listPage.style.cssText = `visibility:hidden; opacity:0`;
  detailPage.style.cssText = `visibility:hidden; opacity:0`;
}

/*  게시판으로 이동 */
document.querySelectorAll(".move_btn").forEach((moveBtn) => {
  moveBtn.addEventListener("click", () => {
    board();
    menuFocus(1);
  });
});

/* ---------------기능추가------------ */

/* 글 등록 */
// 글작성 페이지에서 등록 버튼을 클릭하면 입력한 데이터를 데이터베이스에 추가한다.
wRegistBtn.addEventListener("click", () => {
  storePushFunc();
  board();
  menuFocus(1);

  [wUserInput.value, wContent.value, wWriter.value] = ['', '', '']
});

/* 게시판 렌더 함수 */
const render = () => {
  let listHTML = "";

  listHTML += `<tr><th>글번호</th><th>제목</th><th>작성자</th><th>조회수</th><th>작성일자</th></tr>
  `;

  console.log(database.length);
  for (let i = database.length - 1; i >= 0; i--) {
    listHTML += `
      <tr onclick="detail(${i})">
          <td>${1 * database[i].id + 1}</td>
          <td>${database[i].title}</td>
          <td>${database[i].writer}</td>
          <td><span>${database[i].count}<span></td>
          <td>${database[i].date}</td>
      </tr>
    `;
  }
  document.getElementById("list_table").innerHTML = listHTML;
};

/* 상세내용 페이지 렌더링 함수 */
const detail = (i) => {
  currentItem = i;
  database[i].count++
  detailPage.style.cssText = `visibility:visible; opacity:1`;
  writingPage.style.cssText = `visibility:hidden; opacity:0`;
  homePage.style.cssText = `visibility:hidden; opacity:0`;
  listPage.style.cssText = `visibility:hidden; opacity:0`;

  reload();

  const detailHTML = `
<p><span>글번호</span>${1 * database[i].id + 1}</p>
<p><span>제목</span>${database[i].title}</p>
<p><span>조회수</span>${database[i].count}</p>
<p><span>작성자</span>${database[i].writer} </p>
<p><span>작성일시</span>${database[i].date}</p>
<p><span>내용</span>${database[i].content}</p>
<figure>    
  <p>첨부이미지</p>
    <div class="submit_image">
      <img src="${database[i].image} alt="image"></img>
    </div>
<figure>
`;

  document.querySelector(".detail_content_area").innerHTML = detailHTML;
};


/* 글 수정 함수 */
function updateFunc() {
  const title = document.getElementById('update_input');
  const content = document.getElementById('update_content');
  database[currentItem].title = title.value;
  database[currentItem].content = content.value;
  reload();
  board();

  [title.value, content.value] = ['', '']
}

/* 글 삭제 함수 */
function deleteFunc() {
  database.splice(currentItem, 1)
  reload();
  board();
}


/* 이전 게시글 이동 */
function prevBtn() {
  if (currentItem <= 0) {
    return (currentItem = 0);
  }
  currentItem--;
  console.log(currentItem);
  detail(currentItem);
}

/* 다음 게시글 이동 */
function nextBtn() {
  if (database.length - 1 > currentItem) currentItem++;
  console.log(currentItem);
  detail(currentItem);
}


/* 이벤트 리스너 등록 */
document.querySelector(".prev_btn").addEventListener("click", prevBtn);
document.querySelector(".next_btn").addEventListener("click", nextBtn);
document.querySelector(".update_btn").addEventListener("click", update); // 수정 페이지 이동
document.querySelector('.update').addEventListener("click", updateFunc)
document.querySelector(".del_btn").addEventListener("click", deleteFunc)
document.querySelector(".cancle_btn").addEventListener("click", board)
document.querySelector(".writing_btn").addEventListener("click", writing)
document.querySelector(".home_logo").addEventListener("click", () => {
  home()
  menuFocus(0)
})
document.querySelector(".login_icon").addEventListener('click',(e)=>{
  document.querySelector('.login_form').classList.toggle('login_on')
  layout.classList.toggle('layout_on')
})

document.querySelector('.layout').addEventListener('click',()=>{
  document.querySelector('.login_form').classList.toggle('login_on')
  layout.classList.toggle('layout_on')
})

render();

function reload() {
  const json = JSON.stringify(database);
  console.log(listId);
  localStorage.setItem("data", json);
  render(database)
}
// })()





const reader = new FileReader();
// console.log(reader.readAsText(wImage.file[0]))