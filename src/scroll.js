
const scrollArea = document.querySelector('.container');
let  current = 0.0;
let  target = 0.0;
const ease = .035;

const lerp = (p1, p2, t) => {
    return (1-t) * p1 + t * p2;
}

export function smoothScroll(){
    target = window.scrollY;
    current = lerp(current, target, ease);
    scrollArea.style.transform = `translateY(${-current}px)`;
}