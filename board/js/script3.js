document.addEventListener('DOMContentLoaded',()=>{
    const submit=document.getElementById('commit')
    let arr=[]
        submit.addEventListener('click',()=>{
        const title=document.getElementById('title')
        const content=document.getElementById('content')
        const name=document.getElementById('name')
        if (title.value == "") {
            alert('제목을 입력해주세요.');
            title.focus();
          } else if (content.value == "") {
            alert('내용을 입력해주세요.');
            content.focus()
          } else if (name.value == "") {
            alert('작성자를 입력해주세요.');
            name.focus();
          }else{
             arr.push({제목:title.value,내용:content.value,작성자:name.value})
            localStorage.setItem('input',JSON.stringify(arr))
            title.value='';
            content.value='';
            name.value='' ;
        } 
    })
})