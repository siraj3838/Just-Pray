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