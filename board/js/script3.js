document.addEventListener('DOMContentLoaded', () => {
let number=0
  const submit = document.getElementById('commit')
  let arr = JSON.parse(localStorage.getItem('input')) ?? []
  submit.addEventListener('click', () => {
    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    const title = document.getElementById('title')
    const content = document.getElementById('content')
    const name = document.getElementById('name')
    if (title.value == "") {
      alert('제목을 입력해주세요.');
      title.focus();
    } else if (content.value == "") {
      alert('내용을 입력해주세요.');
      content.focus()
    } else if (name.value == "") {
      alert('작성자를 입력해주세요.');
      name.focus();
    } else {
      arr.push({ 제목: title.value, 내용: content.value, 작성자: name.value, 작성일자: year + '/' + month + '/' + date , 조회수: number})
      localStorage.setItem('input', JSON.stringify(arr))
      title.value = '';
      content.value = '';
      name.value = '';
    }
  })
})