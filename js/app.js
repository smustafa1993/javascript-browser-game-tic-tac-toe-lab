/*-------------------------------- Constants --------------------------------*/
const winCondition=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const message=document.querySelector("#message");
const resetButton=document.querySelector(".resetButton");
/*---------------------------- Variables (state) ----------------------------*/

let board=0;
let starter="X";
let turn=`It's ${starter}'s turn now`;
message.textContent=turn;
let winner;

let x=[];
let o=[];



/*------------------------ Cached Element References ------------------------*/
const squareEls=document.querySelectorAll(".sqr");
// const messageEl;



/*-------------------------------- Functions --------------------------------*/

function addIndex(index,value){

    if(value=="X"){
        x.push(index);
    }
    else o.push(index);

    console.log(`X has: ${x}, and O has: ${o}`)

}
function checkWin(){
    
    // x.sort((a,b)=>a-b);
    // o.sort((a,b)=>a-b);

    let xWon=0;
    let oWon=0;
    for (let i=0;i<winCondition.length;i++){
        
        for (let j=0;j<x.length;j++){
            if (x[j]===winCondition[i][j]){xWon++;}
            if(xWon==3){winner="X";break; }
        }        xWon=0;


        for (let j=0;j<o.length;j++){
            if (o[j]===winCondition[i][j]){oWon++;}
            if(oWon==3){winner="O";break; }
        }        oWon=0;
        if(xWon>2){break;}
        if(oWon>2){break;}
        if(winner)break;
        if(board>8){console.log("DRAW!");message.textContent="It's a draw!"}



    }
    


    if(winner){console.log(winner+" won");
        message.textContent="The winner is "+winner;

    }
    //else if(oWon==3){console.log(winner+" won");message.textContent="The winner is O!";}


}

function reset(){
    squareEls.forEach((square,index)=>{
        square.textContent="";
        });
         board=0;
 starter="X";
 turn=`It's ${starter}'s turn now`;
message.textContent=turn;
 winner="";

 x=[];
 o=[];
 console.log("reset")




}



/*----------------------------- Event Listeners -----------------------------*/


squareEls.forEach((square,index)=>{

    square.addEventListener('click',()=>{
        

        if(starter==="X"){
            if(square.textContent==""&&!winner){
        square.textContent=starter;
        addIndex(index,starter);
        starter="O";
        board++;
        turn=`It's ${starter}'s turn now`;
        message.textContent=turn;
        //square.setAttribute("class","sqr2");
            }
        
    }
        else{
            if(square.textContent==""&&!winner){
            square.textContent=starter;
            addIndex(index,starter);
            starter="X";
            board++;
            turn=`It's ${starter}'s turn now`;
            message.textContent=turn;
   }
        }
        console.log("Clicked!");
               checkWin();

               

    });    

});
resetButton.addEventListener('click',reset);






/*----------------------------- testing -----------------------------*/

//document.querySelector(".sqr").textContent="X";




/*----------------------------- testing -----------------------------*/