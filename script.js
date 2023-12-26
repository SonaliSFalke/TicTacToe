const music = new Audio('music.wav');
let audioTurn = new Audio('drop-tone.mp3');
// const gameOver = new Audio('gameover.mp3');
let isGameOver = false;
let turn = 'X';

const changeTurn = () =>{
    return turn === "X" ? "0": "X";

}

//function to check win


const checkWin = () =>{
    let boxText = document.getElementsByClassName('text');
    let wins = [
        [0, 1, 2, 0, 3, 0],
        [3, 4, 5, 0, 9 , 0],
        [6, 7, 8, 0, 15, 0],
        [0, 3, 6, -6, 9, 90],
        [1, 4, 7, 0, 9, 90],
        [2, 5, 8, 6, 9, 90],
        [0, 4, 8, 0, 9, 45],
        [2, 4, 6, 0, 9, 135]
    ]

    wins.forEach(e =>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) &&(boxText[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " WON";
            isGameOver = true;
            document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = '70px';
            document.querySelector('.line').style.width = '18vw'
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}

//game logic
music.play();
let boxes = document.getElementsByClassName('box-class');
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.text');
    element.addEventListener('click', ()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isGameOver){
                document.getElementsByClassName('info')[0].innerText = 'Turn for ' +  turn;                
                console.log(turn);
            }
        }
    })
})

reset.addEventListener('click',() =>{
    let boxText = document.querySelectorAll('.text');
    Array.from(boxText).forEach(element => {
        element.innerText =""
    });
    turn = 'X';
    isGameOver = false;
    document.getElementsByClassName('info')[0].innerText = 'Turn For ' + turn;
    document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = '0px';
    document.querySelector('.line').style.width = '0vw'
})
