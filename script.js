const ball = document.getElementById("movetheball");

ball.style.top = ball.offsetTop + "px";
ball.style.left = ball.offsetLeft + "px";


const ballHeight = ball.offsetHeight;
const ballWidth = ball.offsetWidth;

function setValue(value) {
    return value + "px";
}


// When using event.keyCode;
function keyCode(keyPress) {

    let top = parseInt(ball.style.top);
     console.log(top);
    let left = parseInt(ball.style.left);
     console.log(left);

    // W is pressed
    if (keyPress === 119 || keyPress === 87) {
        if (top > 5) {
            ball.style.top = setValue(top - 5);
        }
    }

    // A is pressed
    else if (keyPress === 97 || keyPress === 65) {
        if (left > 5) {
            ball.style.left = setValue(left - 5);
        }
    }

    // S is pressed
    else if (keyPress === 115 || keyPress === 83) {
        if (top < (window.innerHeight - ballHeight) - 5) {
            ball.style.top = setValue(top + 5);
        }
    }

    // D is pressed
    else if (keyPress === 100 || keyPress === 68) {
        if (left < (window.innerWidth - ballWidth) - 5) {
            ball.style.left = setValue(left + 5);
        }
    }

};




window.addEventListener("keypress", function (event) {
    keyCode(event.keyCode);
});
