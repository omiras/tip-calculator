// Recuperamos todos los nodos que vamos a utilizar
const bill = document.querySelector('#bill');
const tip = document.querySelector('#tip');

// Típicamente cuando es un botón lo que recuperamos, le ponemos com prefijo btn
const btnCalulcate = document.querySelector('#calculate');
const total = document.querySelector('#total');

// Asociar el evento 'click' al botón
btnCalulcate.addEventListener("click", function(){
    // Debemos recuperar el valor de la "bill" y el % de propina que queremos dejar
    // console.log("Valor actual del input #bill: ", bill.value);
    // console.log("Valor actual del input #tip: ", tip.value);

    const tipAmount = bill.value * (tip.value / 100); // el valor de la cuenta multiplicado por el % de propina
    console.log("🚀 ~ btnCalulcate.addEventListener ~ tipAmount:", tipAmount);

    // Debemos convertir a Number el valor de la propiedad .value para poderla sumar. Podemos hacerlo con la función Number
    const totalAmount =  Number(bill.value) + tipAmount;
    console.log("🚀 ~ btnCalulcate.addEventListener ~ totalAmount:", totalAmount);

    // Actualizo la propiedad .textContent del span con el valor total de la cuentra tras sumarle la propina
    total.textContent = totalAmount;
    
});
