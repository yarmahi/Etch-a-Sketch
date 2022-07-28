let color="black";
let click=true;


function populateboard(size){
    let board=document.querySelector(".board");
    let squares=board.querySelectorAll('div');
    squares.forEach((div)=> div.remove());
    board.style.gridTemplateColumns=`repeat(${size}, 1fr)`;
    board.style.girdTemplateRows=`repeat(${size}, 1fr)`;
    console.log(size);
    let amount=size*size;
    for(let i=0;i<amount;i++){
        let square=document.createElement('div');
        square.addEventListener('mouseover',colorSquare);
        square.style.backgroundColor='white';
        board.insertAdjacentElement('beforeend',square);
    }
}
function changSize(input){
    for(let j=0;j<=input;j++){
        if(input >=2 && input<=100 ){
            populateboard(input);
            
        }else{
            document.querySelector('.error').style.display='flex';
            
        }
    }
    
}
function selectColor(colorNum, colors){
    if (colors < 1) colors = 1; 
    return "hsl(" + (colorNum * (360 / colors) % 360) + ",100%,50%)";
}
function colorSquare(){
    if(click){
        if((color=='random')){
            this.style.backgroundColor= selectColor(Math.floor(Math.random() * 999), 10);
        }else{
            this.style.backgroundColor=color;
        }
    }
}
function changecolor(choice){
    color=choice;
}
function resetboard(){
    let board=document.querySelector(".board");
    let squares=board.querySelectorAll('div');
    squares.forEach((div)=> div.remove());
}
document.querySelector('body').addEventListener('click',()=>{
    click=! click;
})