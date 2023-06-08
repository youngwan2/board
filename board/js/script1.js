document.addEventListener('DOMContentLoaded',()=>{
    const home=document.getElementById('home')
    const board=document.getElementById('board')
    const write=document.getElementById('write')
    const h1=document.querySelector('h1')
    const container=document.querySelector('.container') 
    const input =document.createElement('input')
    const table=document.createElement('table')
    const tr=document.createElement('tr')
        const td1=document.createElement('td')
        const td2=document.createElement('td')
        const td3=document.createElement('td')
        const td4=document.createElement('td')
        const td5=document.createElement('td')
    home.addEventListener('click',()=>{
        h1.innerHTML='홈화면'
        if(table&&input){
            container.removeChild(table)
            container.removeChild(input)
        }else{
        }
        home.style.borderBottom= '3px solid yellowgreen';
        board.style.borderBottom='0'
        write.style.borderBottom='0'
    })
    board.addEventListener('click',(e)=>{
        h1.innerHTML='게시판'
        input.setAttribute('placeholder','검색어를 입력하세요.')
        table.style.borderCollapse='collapse'
        td1.innerHTML='글번호'
        td2.innerHTML='제목'
        td3.innerHTML='작성자'
        td4.innerHTML='조회수'
        td5.innerHTML='작성일자'
        container.append(input,table)
        table.appendChild(tr)
        tr.append(td1,td2,td3,td4,td5)
        board.style.borderBottom= '3px solid yellowgreen';
        home.style.borderBottom='0'
        write.style.borderBottom='0'
    })
    write.addEventListener('click',()=>{
h1.innerHTML='글 작성'
if(table&&input){
    container.removeChild(table)
    container.removeChild(input)
}
    const input1=document.createElement('input')
    const input2=document.createElement('input')
    const span1=document.createElement('span')
    const span2=document.createElement('span')
    const br=document.createElement('br')
    span1.innerHTML='제목'
    span2.innerHTML='내용'
    input1.setAttribute('placeholder','제목을 입력하세요.')
    input2.setAttribute('placeholder','내용을 입력하세요.')
    container.append(span1,input1,br,span2,input2)
write.style.borderBottom= '3px solid yellowgreen';
home.style.borderBottom='0'
board.style.borderBottom='0'
})
})