const ot = document.querySelector('.output')
const c1 = document.querySelector('.one');
const c2 = document.querySelector('.two')
const c3 = document.querySelector('.three')
const cm = document.querySelector('.times')

var input = [1, 2, 3]

function solve(){
    ot.innerHTML = eval(input[0], input[1], input[2]);
}

c1.addEventListener('click', function(){
    input[0] = 1;
})

var o = {
    add: '+',
    sub: '-',
    mul: '*',
    div: '/'
}
