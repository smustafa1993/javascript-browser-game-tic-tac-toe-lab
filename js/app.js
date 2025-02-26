/*-------------------------------- Constants --------------------------------*/
const winCondition=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const a=0;
/*---------------------------- Variables (state) ----------------------------*/

let board;
let turn;
let winner;
let tie;
let starter="X";
let x=[];
let o=[];


/*------------------------ Cached Element References ------------------------*/
const squareEls=document.querySelectorAll(".sqr");
// const messageEl;



/*-------------------------------- Functions --------------------------------*/
function init(){}
function ClickPlace(){}
function handleClick(){}

function addIndex(index,value){

    if(value=="X"){
        x.push(index);
    }
    else o.push(index);

    console.log(`X has: ${x}, and O has: ${o}`)

}
function checkWin(){

    x.sort((a,b)=>a-b);
    o.sort((a,b)=>a-b);

    const areArraysEqual = x.length === winCondition[0].length && x.every((value, index) => value ===winCondition[0][index]);
    if (areArraysEqual) {
        console.log('X WON!!! WOOOHOOOO');
      }


}



/*----------------------------- Event Listeners -----------------------------*/


//document.querySelector(".sqr").addEventListener("click",()=>{console.log("Clk");})
squareEls.forEach((square,index)=>{

    square.addEventListener('click',()=>{
        if(starter==="X"){
           
        square.textContent=starter;
        addIndex(index,starter);
        starter="O";
        
    }
        else{
     
            square.textContent=starter;
            addIndex(index,starter);
            starter="X";
        }
        console.log("Clicked!");
        checkWin();

    });    

});





/*----------------------------- testing -----------------------------*/

//document.querySelector(".sqr").textContent="X";




/*----------------------------- testing -----------------------------*/