const buttons=document.querySelectorAll('.btn');
const boxes=document.querySelectorAll('.box');
const searchBox=document.querySelectorAll("#search");
searchBox.Addeventlistener('keyup',(e)=>{
    searchtext=e.target.value.tolowercase().trim();
    boxes.forEach((box)=>{
        const data=box.dataset.item;
        if(data.includes(searchtext)){
            box.style.display='none';
        }else{
            box.style.display='none';
        }
});  
      buttons[0].classList.add('btn-clicked')
});
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        setactivebtn(e);
    });
});
function setactivebtn(e){
    buttons.forEach((button)=>{
        button.classList.remove('btn-clicked');
    });
    e.target.classList.add('btn-clicked');
}
