let count = 0;
const btn = document.getElementById('first');
btn.addEventListener('click', function(){
    const element = document.getElementById('count');
    count +=1;
    element.innerText = count;
});

const btn2 = document.getElementById('second');
btn2.addEventListener('click', function(){
    const element = document.getElementById('count');
    count = 0;
    element.innerText = count;
});

let countTwo = 0;
const btn3 = document.getElementById('second-main-btn-one');
btn3.addEventListener('click', function(){
    const element = document.getElementById('countTwo');
    countTwo +=1;
    element.innerText = countTwo;
});

const btn4 = document.getElementById('second-main-btn-two');
btn4.addEventListener('click', function(){
    const element = document.getElementById('countTwo');
    countTwo = 0;
    element.innerText = countTwo;
});