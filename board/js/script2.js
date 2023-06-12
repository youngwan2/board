document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content')
    let a = 1
    let arr1 = JSON.parse(localStorage.getItem('input'))


    for (let i = 0; i < arr1.length; i++) {
        const boardList = document.createElement('div')
        const count = document.createElement('div')
        const title = document.createElement('div')
        const name = document.createElement('div')
        const ct = document.createElement('div')
        const date = document.createElement('div')
        boardList.setAttribute('class', 'boardList')
        let board =document.getElementsByClassName('boardList')
        title.setAttribute('class', 'title')
        ct.setAttribute('id','ct')
        count.innerHTML = a + i
        title.innerHTML = arr1[i].제목
        name.innerHTML = arr1[i].작성자
        date.innerHTML = arr1[i].작성일자
        ct.innerHTML=arr1[i].조회수
        content.appendChild(boardList)
        boardList.append(count, title, name, ct, date)
        board[i].addEventListener('click',()=>{
          ct.innerHTML=a++   
        })
        }
})