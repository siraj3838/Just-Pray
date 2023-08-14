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



// input first work
const btnMain = document.querySelector('#input-btn').addEventListener('click', function(){
    const textArea = document.querySelector('#textarea');
    const valueTextArea = textArea.value;

    const p = document.createElement('p');
    p.innerText = valueTextArea;

    const sendDiv = document.querySelector('#review');
    sendDiv.appendChild(p);
    document.querySelector('#textarea').value = '';
});

// my second work

document.querySelector('#textarea').addEventListener('keyup', function(event){
    if(event.key === 'Enter'){
        const textArea = document.querySelector('#textarea')
        const valueTextArea = textArea.value;
        const p = document.createElement('p');
        p.innerText = valueTextArea;
        const reviewCon = document.querySelector('#review');
        reviewCon.appendChild(p);
        document.querySelector('#textarea').value = '';
    }
})

