const screen = document.querySelector('#screen')
const button = document.querySelectorAll('.button')

for (item of button) {
    item.addEventListener('click', (e) => {
        buttontext = e.target.innerText;
        if (buttontext == 'x') {
            buttontext = '*';
        }
        if (buttontext == '÷') {
            buttontext = '/';
        }
        screen.value += buttontext
    })
}

function sin() {
    screen.value = Math.sin(screen.value)
}

function tan() {
    screen.value = Math.tan(screen.value)
}

function cos() {
    screen.value = Math.cos(screen.value)
}

function log() {
    screen.value = Math.log(screen.value)
}

function pow() {
    screen.value = Math.pow(screen.value, 2)
}

function sqrt() {
    screen.value = Math.sqrt(screen.value, 2)
}

function pi() {
    screen.value = 3.142857142857143
}

function e() {
    screen.value = 2.718
}

function fact() {
    let i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;
    screen.value = f;
}

function backspace() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}

function ac() {
    screen.value = ''
}