const loadOn = () => {
  fetch('https://openapi.programming-hero.com/api/levels/all')
  .then(res => res.json())
  .then(datas => displayOn(datas.data)
  )
}

// load word 
const loadWord = (id)=>{
  fetch(`https://openapi.programming-hero.com/api/level/${id}`)
  .then(res => res.json())
  .then(datas=>displayLoadWord(datas.data)
  )
  
}

const displayLoadWord = (datas)=>{
  const cardConatainer = document.getElementById('card-cointainer');
  cardConatainer.innerHTML = "";
  for(let data of datas){
    console.log(data);
    const newCard =document.createElement('div')


    newCard.innerHTML=`
    <div class="bg-white text-center py-10 px-5 rounded-[12px] space-y-4 shadow-sm">
  <h1 class="font-bold text-[32px]">${data.word}</h1>
  <p class="text-[20px]">Meaning /Pronounciation</p>
  <div class="font-semibold text-[32px] font-bangla text-[#18181B]">"${data.meaning} /${data.pronunciation}"</div>

  <div class="flex justify-between items-center">
  <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
  <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>

</div>
</div>
    `;
    cardConatainer.append(newCard)
  }

  

}





// lesson display 
const displayOn = (lessons) =>{
  const levelContainer = document.getElementById('level-container');
  levelContainer.innerHTML = "";

  for(let lesson of lessons){
    console.log(lesson);
    
    const newDiv = document.createElement('div');
    newDiv.innerHTML= `
    
        <button onclick='loadWord(${ lesson.level_no})' class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open-reader"></i>Lesson ${ lesson.level_no} </button>
      
    
    `;
    levelContainer.append(newDiv)
  }
}
loadOn();