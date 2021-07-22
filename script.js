const loadingText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0;
let interval = setInterval(blurring, 50)
function blurring() {
    load++
    if(load > 99) clearInterval(interval)
    let blurVal = (100 - load)/10;
    let opacVal = (100 - load)/100;
    bg.style.filter = `blur(${blurVal}px)`
    loadingText.innerHTML = `${load}%`
    loadingText.style.opacity = `${opacVal}`;
    // console.log(load);
}