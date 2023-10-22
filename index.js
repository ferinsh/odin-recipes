//
//const mainBox = document.querySelector('div.main-box')
//const body = document.querySelector('body');
//console.log(mainBox);
//
//
//
//
//div = document.createElement('div');
//
//
//
//div.textContent = 'Hello World';
//
//
//
//
//
//console.log(div)
//console.log(body)
//mainBox.appendChild(div)
//


function changeHeadingClr(){
    //alert("Hello World!");
    const mainBox_h1 = document.querySelector('#main-box-heading');

    mainBox_h1.setAttribute('style', 'color: red; font-size: 70px;');

}


function changeBorderClr(){
    const mainBox = document.querySelector('.main-box');
    mainBox.setAttribute('style', 'border: 2px solid tomato;');
}


function reset(){
    const mainBox = document.querySelector('.main-box');
    const mainBox_h1 = document.querySelector('#main-box-heading');

    mainBox_h1.setAttribute('style', 'color: rgb(201, 186, 102); font-size: 50px;');
    mainBox.setAttribute('style', 'border: 2px solid white;');

}


const btnChangeHeadingClr = document.querySelector('#btn-heading-color');
const btnChangeBorderClr = document.querySelector('#btn-border-color');
const btnReset = document.querySelector('#btn-reset');







function process(){


    
    

    btnChangeHeadingClr.addEventListener('click', function(e){
        changeHeadingClr();
        console.log(e.target);
        e.target.style.background = 'beige';  
        e.target.setAttribute('style', 'background: beige; border-radius: 40px; border: 2px solid gold; padding: 10px;');
    })


    btnChangeBorderClr.addEventListener('click', function(e){
        changeBorderClr();
        console.log(e.target);  
        e.target.setAttribute('style', 'background: beige; border-radius: 40px; border: 2px solid gold; padding: 10px;');
    })

    

    btnReset.addEventListener('click', function(e){
        reset();
        console.log(e.target);
        e.target.style.background = 'beige';
        e.target.setAttribute('style', 'background: beige; border-radius: 40px; border: 2px solid gold; padding: 10px;');

    })

}






process();


