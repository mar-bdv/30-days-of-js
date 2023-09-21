const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 200; // px


function shadow(e) {
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / width * walk) - (walk / 2));
    
    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 purple,
    ${xWalk * - 1}px ${yWalk}px 0 lightblue,
    ${xWalk}px ${yWalk * - 1}px 0 orange
    `
}

hero.addEventListener('mousemove', shadow)