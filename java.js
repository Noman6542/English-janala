const loadOn = () => {
  fetch('https://openapi.programming-hero.com/api/levels/all')
  .then(res => res.json())
  .then(datas => displayOn(datas.data)
  )
}

const displayOn = (lessons) =>{
  const levelContainer = document.getElementById('level-container');
  levelContainer.innerHTML = "";
  for(let lesson of lessons){
    console.log(lesson);
    
    const newDiv = document.createElement('div');
    newDiv.innerHTML= `
    <ul class='list-none'>
    <li>
        <button class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open-reader"></i>Lesson ${ lesson.level_no} </button>
      </li></ul>
    
    `;
    levelContainer.append(newDiv)
  }
}
loadOn();