//-------------------Variables-------------//
let result=document.getElementById("res");
let numChar;// le nombre de caractéres
let carCourant, carPrecedent;

//-------------------Functions------------//

function calculate(val) {
    result.value=result.value + val;
    numChar=result.value.length;
    carCourant=val;
    getCarPrc();
    
    
}

function Result()
{
    result.value=eval(result.value);
    
}




function C()
{
    result.value=" ";
}

function Del()
{
   result.value=result.value.slice(0,-1);
}

function getCarPrc()
{
    carPrecedent=result.value.substring(numChar-2,numChar-1);
    verficationSyn();
    Div();
}

function verficationSyn()
{
    if ((carPrecedent=='+' || carPrecedent=='-' || carPrecedent=='*' || carPrecedent=='/') && (carCourant=='+' || carCourant=='-' || carCourant=='*' || carCourant=='/') )
    {
        alert("entrez une seule opération")
         supprChar();
        
    }

    if ((carCourant=='+' || carCourant=='*' || carCourant=='/') && numChar == 1)
    {
        supprChar();
    }
}

function supprChar()
{
    result.value=result.value.substring(0,numChar-1);
}
 function Div()
 {
    if(( carPrecedent=='/') && (carCourant==0)  )
    {
        alert("il faut pas diviser sur 0");
        supprChar();

    }
 }