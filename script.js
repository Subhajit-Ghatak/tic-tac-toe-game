let turn = "X";
let reset = document.getElementById('reset');

//changing the turn
function changeTurn(){
    return turn === "X"?"O":"X";
}

//checking the win
function win(){
    let divsAgain = document.getElementsByClassName("box");
    let logic = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6],
    ];
    logic.forEach(e=>{
        if((divsAgain[e[0]].innerText === divsAgain[e[1]].innerText)&&(divsAgain[e[1]].innerText === divsAgain[e[2]].innerText)&&(divsAgain[e[0]].innerText !== "")){
            //document.getElementById('win-print').innerHTML = turn + " Wins the round";
            let winPrint  = document.getElementById('win-print');
            winPrint.style = "padding: 3px";
            winPrint.innerHTML = turn + " wins the round";
            flag=false;
        }
    });    
}

//gameplay logic
let divs = document.getElementsByClassName("box");
Array.from(divs).forEach(elements => {
    elements.addEventListener('click',()=>{
        let spanText = elements.querySelector('.info');
        if(spanText.innerHTML === ""){
            if(turn === "X")
            {
                spanText.style = "color: #ff0000";
                spanText.innerHTML = turn;
            }
            else{
                spanText.style = "color: #0d6efd";
                spanText.innerHTML = turn;
            }
            
            win();           
            turn = changeTurn();
        }        
    });
});

//resetting the board
reset.addEventListener('click',()=>{
    document.getElementById('win-print').innerHTML = "";
    document.getElementById('win-print').style = "padding = 0";
    let spans = document.querySelectorAll('.info');
    Array.from(spans).forEach(elements=>{
        elements.innerHTML = "";
    });    
})
