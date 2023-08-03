const moveToMySkills = () =>{
   let skills = document.querySelector('#skills')
   //skills.offsetTop에 위치가 들어있다.
   scrollTo({left : 0, top : skills.offsetTop, behavior:'smooth'})
}