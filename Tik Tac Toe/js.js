const btn1Element = document.querySelector('.btn1');
const btn2Element = document.querySelector('.btn2');
const btn3Element = document.querySelector('.btn3');
const btn4Element = document.querySelector('.btn4');
const btn5Element = document.querySelector('.btn5');
const btn6Element = document.querySelector('.btn6');
const btn7Element = document.querySelector('.btn7');
const btn8Element = document.querySelector('.btn8');
const btn9Element = document.querySelector('.btn9');
const altT = document.getElementById('alertboxtiebtn');
const altO = document.getElementById('alertboxOvbtn');
const altX = document.getElementById('alertboxXbtn');

var count = 1;
btn1Element.addEventListener('click', addXorO1);


function addXorO1() {
    count++;
    count % 2 === 0 ? btn1Element.innerHTML = 'X' : btn1Element.innerHTML = 'O';

    btn1Element.disabled = true;
    winCheck();

}

btn2Element.addEventListener('click', addXorO2);


function addXorO2() {
    count++;
    count % 2 === 0 ? btn2Element.innerHTML = 'X' : btn2Element.innerHTML = 'O';

    btn2Element.disabled = true;
    winCheck();
}

btn3Element.addEventListener('click', addXorO3);


function addXorO3() {
    count++;
    count % 2 === 0 ? btn3Element.innerHTML = 'X' : btn3Element.innerHTML = 'O';

    btn3Element.disabled = true;
    winCheck();
}


btn4Element.addEventListener('click', addXorO4);


function addXorO4() {
    count++;
    count % 2 === 0 ? btn4Element.innerHTML = 'X' : btn4Element.innerHTML = 'O';

    btn4Element.disabled = true;
    winCheck();
}

btn5Element.addEventListener('click', addXorO5);


function addXorO5() {
    count++;
    count % 2 === 0 ? btn5Element.innerHTML = 'X' : btn5Element.innerHTML = 'O';
    btn5Element.disabled = true;
    winCheck();

}


btn6Element.addEventListener('click', addXorO6);


function addXorO6() {
    count++;
    count % 2 === 0 ? btn6Element.innerHTML = 'X' : btn6Element.innerHTML = 'O';

    btn6Element.disabled = true;
    winCheck();
}



btn7Element.addEventListener('click', addXorO7);


function addXorO7() {
    count++;
    count % 2 === 0 ? btn7Element.innerHTML = 'X' : btn7Element.innerHTML = 'O';

    btn7Element.disabled = true;
    winCheck();
}

btn8Element.addEventListener('click', addXorO8);


function addXorO8() {
    count++;
    count % 2 === 0 ? btn8Element.innerHTML = 'X' : btn8Element.innerHTML = 'O';

    btn8Element.disabled = true;
    winCheck();
}

btn9Element.addEventListener('click', addXorO9);


function addXorO9() {
    count++;
    count % 2 === 0 ? btn9Element.innerHTML = 'X' : btn9Element.innerHTML = 'O';
    btn9Element.disabled = true;
    winCheck();

}

function winCheck() {
    if (btn1Element.innerHTML === 'X' && btn2Element.innerHTML === 'X' && btn3Element.innerHTML === 'X' ||
        btn1Element.innerHTML === 'X' && btn4Element.innerHTML === 'X' && btn7Element.innerHTML === 'X' ||
        btn1Element.innerHTML === 'X' && btn5Element.innerHTML === 'X' && btn9Element.innerHTML === 'X' ||
        btn4Element.innerHTML === 'X' && btn5Element.innerHTML === 'X' && btn6Element.innerHTML === 'X' ||
        btn7Element.innerHTML === 'X' && btn8Element.innerHTML === 'X' && btn9Element.innerHTML === 'X' ||
        btn2Element.innerHTML === 'X' && btn5Element.innerHTML === 'X' && btn8Element.innerHTML === 'X' ||
        btn3Element.innerHTML === 'X' && btn6Element.innerHTML === 'X' && btn9Element.innerHTML === 'X' ||
        btn3Element.innerHTML === 'X' && btn5Element.innerHTML === 'X' && btn7Element.innerHTML === 'X') {
        console.log('X won!');
        // document.querySelector('.alertboxX').classList.remove('.alertboxX');
        return document.getElementById("alertboxX").className = 'alertboxX';
        // document.querySelector('.alertbox').appendChild = "";
        location.reload()
    } else if (btn1Element.innerHTML === 'O' && btn2Element.innerHTML === 'O' && btn3Element.innerHTML === 'O' ||
        btn1Element.innerHTML === 'O' && btn4Element.innerHTML === 'O' && btn7Element.innerHTML === 'O' ||
        btn1Element.innerHTML === 'O' && btn5Element.innerHTML === 'O' && btn9Element.innerHTML === 'O' ||
        btn4Element.innerHTML === 'O' && btn5Element.innerHTML === 'O' && btn6Element.innerHTML === 'O' ||
        btn7Element.innerHTML === 'O' && btn8Element.innerHTML === 'O' && btn9Element.innerHTML === 'O' ||
        btn2Element.innerHTML === 'O' && btn5Element.innerHTML === 'O' && btn8Element.innerHTML === 'O' ||
        btn3Element.innerHTML === 'O' && btn6Element.innerHTML === 'O' && btn9Element.innerHTML === 'O' ||
        btn3Element.innerHTML === 'O' && btn5Element.innerHTML === 'O' && btn7Element.innerHTML === 'O') {
        console.log('O Won!');
        document.getElementById("alertboxO").className = 'alertboxO';
        return document.getElementById('alertboxOvbtn').addEventListener('click', restart)

    } else if (
        btn1Element.disabled == true &&
        btn2Element.disabled == true &&
        btn3Element.disabled == true &&
        btn4Element.disabled == true &&
        btn5Element.disabled == true &&
        btn6Element.disabled == true &&
        btn7Element.disabled == true &&
        btn8Element.disabled == true &&
        btn9Element.disabled == true




    ) {
        console.log('Tie.');
        return document.getElementById("alertboxtie").className = 'alertboxtie';
        location.reload()
    }
}

function wincardX() {

    return document.getElementById("alertboxX").className('alertboxX');
}


function restart() { location.reload() };