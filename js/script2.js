document.addEventListener('DOMContentLoaded',()=>{
    const content=document.querySelector('.content')
    const div1=document.createElement('div')
    const div2=document.createElement('div')
    const div3=document.createElement('div')
    const div4=document.createElement('div')
    const div5=document.createElement('div')
    content.append(div1,div2,div3,div4,div5)
    let ct=1
div1.innerHTML=ct++
div2.innerHTML=JSON.parse(localStorage.getItem('input'))
})