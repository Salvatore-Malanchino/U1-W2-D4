/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
const area=function(l1,l2) {
    return l1*l2
}
console.log(area(4,6))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum=function(num1=13,num2=17){
    return num1+num2

}
let a =crazySum(8,3)
  if(a===11){
a=a*3
}  else{

}

console.log('crazySum',a)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
const crazyDiff=function (num1=34) {
    return num1
}
let b= crazyDiff()
let c=Math.abs(19-b)
if (c>19) {
    c*3
}else{

}
console.log('crazyDiff',c)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
const boundary=function(num1=37){
    return num1
}
let d=boundary()
if (d>=20||d<=100||d===100) {
    d=true 
}else{
    console.log('d  è falso')
}
console.log('boundary',d)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify=function(stringa){
    const e= stringa
    stringa.indexOf("EPICODE");
    if (e===stringa) {
        e=e
    }else{
        stringa=e
    }
    return stringa

}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
const  check3and7=function(num1=3){
const x=num1
if (x%3||x%7) {
    
}
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
const reverseString=function(str='EPICODE'){
    let x=str
    x.split("");
    x.reverse("");
    x.join("");
        return x
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
const upperFirst=function (upper='cosa-casa-chiesa'){
    let x= upper
    ucFirst(upper)
    returnx
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
const cutString=function(cut='taglio'){
cut.slice(0,5)
return cut
}
let m =cutString()
console.log(m)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
const giveMeRandom=function(){}
/* SCRIVI QUI LA TUA RISPOSTA */
