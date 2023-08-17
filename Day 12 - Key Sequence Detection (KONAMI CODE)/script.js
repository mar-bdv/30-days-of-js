const pressed = [];
const secretCode = 'rainbow'

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)
    if (pressed.join('').includes(secretCode)){
        cornify_add();
    }
    let newPressed = pressed.toString().replace(/[\s.,%]/g, '')
    // console.log(pressed) pressed.replace(/\s,/g, '')
    const textDiv = document.querySelector('.text_div');
    textDiv.innerHTML = `<p class="text_p">${newPressed}</p>`
})