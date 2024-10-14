let boxes=document.querySelectorAll('.itemsboxes');
let arr_num=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];
let fliping_card=true;
let counter=0;
let matchedCard=[];
let firstCard=null;
let secondCard=null;
arr_num = arr_num.sort(() => Math.random() - 0.5);
console.log(boxes);
function flipcardfunction(event){
    console.log("clicked loop");
    let card=event.target;
    console.log(card.dataset.number);
    if(!firstCard){
        firstCard = card;
        firstCard.innerHTML = card.dataset.number;
        firstCard.classList.remove('bg-gray-300'); // Remove background for flipped state
        firstCard.classList.add('bg-white', 'text-black', 'text-3xl','transition-transform','duration-300','ease-in-out'); // Add classes for flipped card appearance
    }
    else if (!secondCard && card !== firstCard) {
        secondCard = card;
        secondCard.innerHTML = card.dataset.number;
        secondCard.classList.remove('bg-gray-300');
        secondCard.classList.add('bg-white', 'text-black', 'text-3xl','transition-transform','duration-300','ease-in-out');
    }
    if(firstCard.dataset.number===secondCard.dataset.number){
        
        console.log(firstCard,secondCard);
        console.log(matchedCard);
        matchedCard.push(firstCard,secondCard);
        firstCard=null;
        secondCard=null;
        

    }
    else if(firstCard.dataset.number!==secondCard.dataset.number){
       setTimeout(()=>{
        firstCard.innerHTML="";
        secondCard.innerHTML="";
        firstCard.classList.add('bg-gray-300');
        secondCard.classList.add('bg-gray-300');
        firstCard.classList.remove('bg-white', 'text-black', 'text-3xl','transition-transform','duration-300','ease-in-out');
        secondCard.classList.remove('bg-white', 'text-black', 'text-3xl','transition-transform','duration-300','ease-in-out');
        firstCard=null;
        secondCard=null;
    },1000);
        
    }
}

boxes.forEach((box, index) => {
    // Assign each number in arr_num to the corresponding box's data-number attribute
   box.dataset.number = arr_num[index];
    console.log("inside loop");
    box.addEventListener('click',flipcardfunction);
})
