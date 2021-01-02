const days = {
    flip: document.querySelector('#DAYS-TOP'),
    numTop : document.querySelector('#DAYS-TOP-NUMBER-NEXT'), 
    numFlipFront : document.querySelector('#DAYS-TOP-NUMBER-FLIP'), 
    numFlipBack : document.querySelector('#DAYS-TOP-NUMBER-FLIP-BACK'), 
    numBtm : document.querySelector('#DAYS-BTM-NUMBER-STATIC')
}
const hours = {
    flip: document.querySelector('#HOURS-TOP'),
    numTop : document.querySelector('#HOURS-TOP-NUMBER-NEXT'), 
    numFlipFront : document.querySelector('#HOURS-TOP-NUMBER-FLIP'), 
    numFlipBack : document.querySelector('#HOURS-TOP-NUMBER-FLIP-BACK'), 
    numBtm : document.querySelector('#HOURS-BTM-NUMBER-STATIC')
}
const minutes = {
    flip: document.querySelector('#MINUTES-TOP'),
    numTop : document.querySelector('#MINUTES-TOP-NUMBER-NEXT'), 
    numFlipFront : document.querySelector('#MINUTES-TOP-NUMBER-FLIP'), 
    numFlipBack : document.querySelector('#MINUTES-TOP-NUMBER-FLIP-BACK'), 
    numBtm : document.querySelector('#MINUTES-BTM-NUMBER-STATIC')
}
const seconds = {
    flip: document.querySelector('#SECONDS-TOP'),
    numTop : document.querySelector('#SECONDS-TOP-NUMBER-NEXT'), 
    numFlipFront : document.querySelector('#SECONDS-TOP-NUMBER-FLIP'), 
    numFlipBack : document.querySelector('#SECONDS-TOP-NUMBER-FLIP-BACK'), 
    numBtm : document.querySelector('#SECONDS-BTM-NUMBER-STATIC')
}
const names = [days, hours, minutes, seconds];

const launchDate = Date.parse('February 1, 2021 09:00:00');

setInterval(() => {
    display(current(launchDate), current(launchDate - 1000))
}, 1000);

function initialValues(init) {
    const initVal = Object.values(init);
    initVal.forEach((el,i)=> {
        change(names[i], el)
    });
}
initialValues(current(launchDate))


function display(next, nextNext) {
    const nextVal = Object.values(next); 
    const nextNextVal = Object.values(nextNext);

    nextVal.forEach((el,i)=> {
        if (el !== nextNextVal[i]) {
            change(names[i], el, nextNextVal[i]); 
        }
    });
}


function change(node, next, nextNext) {

    node.numTop.textContent = next;
    node.numFlipBack.textContent = next; 
    node.flip.classList.add('FLIP'); 
    setTimeout(() => {
        node.numFlipFront.textContent = next; 
        node.numBtm.textContent = next; 
    }, 450);
    setTimeout(() => {
        node.flip.classList.remove('FLIP'); 
        node.numFlipBack.textContent = nextNext; 
        
    }, 500);
}


function current(launch) {
    const now =  Date.now();
    let  difference = launch - now;

    const days = Math.floor(difference / 86400000);
    difference = difference - (days * 86400000);
    const hours = Math.floor(difference / 3600000); 
    difference = difference - (hours * 3600000); 
    const minutes = Math.floor(difference / 60000); 
    difference = difference - (minutes * 60000); 
    const seconds = Math.floor(difference / 1000);

    return {
        days, 
        hours, 
        minutes, 
        seconds
    }
}
