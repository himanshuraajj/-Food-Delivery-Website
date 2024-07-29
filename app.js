//about us review slidder
var reviews=document.querySelectorAll('.review-wrapper');
var currentReviews=[0,2];

var updateReviewSlidder=(cards) => {
    cards.forEach((card_index)=>{
        reviews[card_index].classList.add('active');

    })
}
setInterval(() =>{
    currentReviews.forEach((card_index,i)=>{
        reviews[card_index].classList.remove('active');
        currentReviews[i] = card_index >= reviews.length -1 ? 0 : card_index +1;
    })
    setTimeout(() => {
         updateReviewSlidder(currentReviews);
    },250)
},5000)
updateReviewSlidder(currentReviews)


//faq
var faqs=[...document.querySelectorAll('.faq')];
faqs.map(faq => {
    var ques =faq.querySelector('.question-box');
    ques.addEventListener('click',() => {
        faq.classList.toggle('active');
    })
})

// dish slidder
var dishSlider = document.querySelector('.dish-slide');
var rotationVal=0;
setInterval(() => {
   rotationVal += 120;
   dishSlider.style.transform = `translateY(-50%) rotate(${rotationVal}deg)`;
},3000)

