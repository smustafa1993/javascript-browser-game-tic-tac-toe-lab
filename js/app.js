/*-------------------------------- Constants --------------------------------*/
const winCondition=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const a=0;
/*---------------------------- Variables (state) ----------------------------*/

let board;
let turn;
let winner;
let tie;
let starter="X";


/*------------------------ Cached Element References ------------------------*/
const squareEls=document.querySelectorAll(".sqr");
// const messageEl;



/*-------------------------------- Functions --------------------------------*/
function init(){}
function ClickPlace(){}
function handleClick(){}



/*----------------------------- Event Listeners -----------------------------*/


//document.querySelector(".sqr").addEventListener("click",()=>{console.log("Clk");})
squareEls.forEach((square,index)=>{

    square.addEventListener('click',()=>{
        if(starter==="X"){
        square.textContent="X";
        starter="O";
    }
        else{
            square.textContent=starter;
            starter="X";
        }
        console.log("Clicked!");

    });    

});





/*----------------------------- testing -----------------------------*/

//document.querySelector(".sqr").textContent="X";




/*----------------------------- testing -----------------------------*/