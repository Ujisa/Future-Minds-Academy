const calc0peration = document.querySelector('.calc-operation');
const calcTyped = document.querySelector('.calc-typed');



function youClicked(n) {

    if(n === '='){
        if(calc0peration.textContent != ''){
            calcTyped.textContent = eval(calc0peration.textContent);
        }

    }

    else{
        calc0peration.textContent += n;
        if(n === 'openC'){calc0peration.textContent += '(';} else { calc0peration.textContent += n;}
        if(n === 'closeC'){calc0peration.textContent += ')';} else { calc0peration.textContent += n;}


    }

    if(n === 'C'){
        calc0peration.textContent = "";
        calcTyped.textContent = "0";
    }


}
