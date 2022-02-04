const ot = document.querySelector('.output')
const c1 = document.querySelector('.one');
const c2 = document.querySelector('.two')
const c3 = document.querySelector('.three')
const cm = document.querySelector('.times')

var input = " "
var input2 = " "
var opAdded = 0;

c1.addEventListener('click', function(){
    if(opAdded == 0){
        input += 1;
    }else {
        input2 += 1
    }
    ot.value = Math.floor(input)
})
c2.addEventListener('click', function(){
    input += 2;
    ot.value = Math.floor(input)
})

c3.addEventListener('click', function(){
    input += 3;
    ot.value = Math.floor(input)
})

cm.addEventListener('click', function(){
    opAdded = 3;
})