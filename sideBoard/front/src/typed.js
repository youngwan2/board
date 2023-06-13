
let currentDate = new Date().toLocaleString()


function typed(currentDate) {
  var typed = new Typed("#intro", {
    strings: [
      "안녕하세요!",
      "저희 사이트를 방문해주셔서 </br> 감사합니다.",
      "특별한 기능은 없지만 </br> 간단한 글쓰기 및 게시글 목록을</br>확인할 수 있습니다.",
      `그럼 즐거운 시간 되세요! </br> 참고로 현재 시간은 ${currentDate} 입니다!`,
    ],
    typeSpeed: 50, // 한 글자씩 타이핑되는 속도 (단위: 밀리초)
    backSpeed: 30, // 글자가 삭제되는 속도 (단위: 밀리초)
    loop: false, // 텍스트 반복 여부
    showCursor: false, // 커서 숨김
  });
}

typed(currentDate);

