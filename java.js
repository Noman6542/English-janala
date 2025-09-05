const createElement =(arr)=>{
  const createHtml = arr.map((el)=>` <span class="btn"> ${el} </span>`)
  
  return createHtml.join(" ");
}


// manage spinner 
const manageSpinner = (status)=>{

  if(status === true){
    document.getElementById('spinner').classList.remove('hidden');
  document.getElementById('card-cointainer').classList.add('hidden');
  }else{
    document.getElementById('card-cointainer').classList.remove('hidden');
  document.getElementById('spinner').classList.add('hidden');
  }
  
}


const loadOn = () => {
  fetch('https://openapi.programming-hero.com/api/levels/all')
  .then(res => res.json())
  .then(datas => displayOn(datas.data)
  )
}


const removeActive = ()=>{
  const lessonsButtons = document.querySelectorAll('.lesson-btn');
  
  lessonsButtons.forEach((btn)=>btn.classList.remove('active'))

}

// info button 
const loadWordDetail = (id)=>{
  fetch(`https://openapi.programming-hero.com/api/word/${id}`)
  .then(res=>res.json())
  .then(details=>displayWordDetail(details.data)
  )
}


const displayWordDetail = (word)=>{
  console.log(word);
  
const detailsBox=document.getElementById('detailsCointainer')
detailsBox.innerHTML =`<div>
        <h1 class="font-bold text-xl">${word.word} (<i class="fa-solid fa-microphone"></i> :${word.pronunciation})</h1>
      </div>
      <div>
        <h1 class="font-bold">Meaning</h1>
        <p class="mt-1">${word.meaning}</p>
      </div>
      <div>
        <h1 class="font-bold">Example</h1>
        <p class="mt-1">${word.sentence}</p>
      </div>
      <div>
        <h1 class="font-bangla font-bold mb-1">Synonyms</h1>
         <div>${createElement(word.synonyms)}</div>
      </div>`;
document.getElementById('my_modal_5').showModal();
}
// load word 
const loadWord = (id)=>{
   manageSpinner(true);
  fetch(`https://openapi.programming-hero.com/api/level/${id}`)
  .then(res => res.json())
  .then(datas=>{
    removeActive();
    const clickBtn = document.getElementById(`Lesson-btn-${id}`);
    clickBtn.classList.add("active");
    displayLoadWord(datas.data);
  
  })
  
}

const displayLoadWord = (datas)=>{
  const cardConatainer = document.getElementById('card-cointainer');
  cardConatainer.innerHTML = "";


if(datas.length===0){
  cardConatainer.innerHTML = `
  <div class="col-span-full text-center space-y-4 bg-gray-300 py-5 rounded-3xl font-bangla">
   <img class="mx-auto" src="./assets/alert-error.png" alt="" srcset="">
  <p class="font-medium text-[#79716B]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
  <h1 class="font-bold text-[35px]">নেক্সট Lesson এ যান</h1>
</div>
  `;
   manageSpinner(false);
  return;
}



  for(let data of datas){
    console.log(data);
    const newCard =document.createElement('div')


    newCard.innerHTML=`
    <div class="bg-white text-center py-10 px-5 rounded-[12px] space-y-4 shadow-sm h-full">
  <h1 class="font-bold text-[32px]">${data.word?data.word:'আমরা কোন word খুঁজে পাচ্ছি না।'}</h1>
  <p class="text-[20px]">Meaning /Pronounciation</p>
  <div class="font-semibold text-[32px] font-bangla text-[#18181B]">"${data.meaning?data.meaning:'আমরা কোন meaning খুঁজে পাচ্ছি না।'} /${data.pronunciation?data.pronunciation:'আমরা কোন pronunciation খুঁজে পাচ্ছি না।'}"</div>

  <div class="flex justify-between items-center mt-auto">
  <button onclick="loadWordDetail(${data.id})" class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80] "><i class="fa-solid fa-circle-info"></i></button>
  <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80] "><i class="fa-solid fa-volume-high"></i></button>

</div>
</div>
    `;
    cardConatainer.append(newCard)
  }

   manageSpinner(false);

};






// lesson display 
const displayOn = (lessons) =>{
  const levelContainer = document.getElementById('level-container');
  levelContainer.innerHTML = "";
  for(let lesson of lessons){
    console.log(lesson);
    
    const newDiv = document.createElement('div');
    newDiv.innerHTML= `
    
        <button id="Lesson-btn-${ lesson.level_no}" onclick='loadWord(${ lesson.level_no})' class="btn btn-outline btn-primary lesson-btn"><i class="fa-solid fa-book-open-reader"></i>Lesson ${ lesson.level_no} </button>
      
    
    `;
    levelContainer.append(newDiv)
  }
}
loadOn();