let btnShow = document.getElementById('btn__show');
let result = document.getElementById('show');

btnShow.onclick = function () {
    let a = document.getElementById('inp__number-a').value;
    let b = document.getElementById('inp__number-b').value;

    let x = [];

    for (let i = a; i <= b; i++){
        if(checkNum(i)) {
            x.push(i);
        }
    }
    total = x.reduce(function(a, b){
        return a + b;
    }, 0); 
    result.innerHTML = total;
}

    function checkNum(n) {
        let flag = true;

        if (n < 2) {
            flag = false;
        } else if (n == 2) {
            flag = true;
        } else if (n % 2 == 0) {
            flag = false;
        } else {
            for (let i = 3; i < n - 1; i += 2) {
                if (n % i == 0) {
                    flag = false;
                    break;
                }
            }

        }
        return flag;
    } 



//////////////////////////////////////

document.writeln('<hr /><h2>Câu 2</h2>');



function numberOneTriangle(num) {
    for(i = 0; i < num; i++){
        for(o = 0; o <= i; o++){
            document.writeln(' * ');
        }
        document.writeln('<br/>')
    }
    return num;
}
numberOneTriangle(7);


document.writeln('<hr /><h2>Câu 3  <a href="./assets/c3.html">Link</a></h2>');