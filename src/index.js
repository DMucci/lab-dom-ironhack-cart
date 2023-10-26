// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  console.log(product);

  //... your code goes here
// Step 1
// Almacenar en dos variables el precio y la cantidad de producto.
const price = +product.querySelector(".price span").textContent;

// Step 2. Recupera la cantidad de producto y almacenala en una variable. Le podemos llamar quantity.
const quantity = +product.querySelector(".quantity input").value;

//Step 3. Calcula el precio total y guardalo en otra variable.
const subtotal = price * quantity;

// Step 4. Actualiza el nodo del DOMO adecuado, con el precio que acabas de calcular. Tiene una class "subtotal".
product.querySelector(".subtotal span").textContent = subtotal;

//Step 5. Asegurate que esta funcion retorna el precio total calculado.
return subtotal

}

function calculateAll() {
  // ITERATION 2

  // Tenemos que calcular el subtotal para todos los productos
  // 1. Usa adecuadamente document.querySelectorAll para recuperar todos los productos. selector .product
  const products = document.querySelectorAll(".product");
  // 2. Para cada producto, tenemos que invocar la función updateSubtotal. 
  //Acumular el subtotal de cada producto
  let total = 0;

  products.forEach(function (p) {
  // Tenemos que invocar la funcion updateSubtotal y pasarle como parametro el producto p 
    
  // ITERATION 3: Tenemos que sumar a la variable total con el subtotal caculado por la función updateSubtotal
  total = total + updateSubtotal(p)
});

document.querySelector("#total-value span").textContent = total;
}
// ITERATION 4: Actualizar el nodo del DOM adecuado con el valor de la variable total

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
