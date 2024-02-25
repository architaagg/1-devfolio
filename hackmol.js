const left=document.querySelector(".left");
const slider=document.querySelector(".slider");
const right=document.querySelector(".right");
const images=document.querySelectorAll(".image")
let slidernumber=1;
const length=images.length;
const nextSlide =()=>{
    slider.style.transform=`translateX(-${slidernumber*100}%)`;
    slidernumber++;
};
const firstSLide=()=>{
    slider.style.transform=`translateX(0px)`;
    slidernumber=1;
}
right.addEventListener('click',()=>{
    if(slidernumber < length){
        nextSlide ();
}
    else{
        firstSLide();
};
});
left.addEventListener('click',()=>{
    if(slidernumber >1){
        slider.style.transform=`translateX(-${(slidernumber-2)*100}%)`;
        slidernumber--;
}
    else{
        firstSLide();
};
});



