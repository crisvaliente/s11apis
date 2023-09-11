const url = 'https://fakestoreapi.com/products';

fetch(url)
  .then(response => response.json())
  .then(data => {
    const productContainer = document.getElementById('product-list');

    // Verifica si se recibieron datos válidos
    if (data && Array.isArray(data)) {
      // Itera a través de los datos y crea elementos de lista <li> para cada producto
      data.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.title} - $${product.price}`;
        productContainer.appendChild(listItem);
      });
    } else {
      // Si no se obtuvieron datos válidos, muestra un mensaje de error
      productContainer.textContent = 'No se pudieron cargar los productos.';
    }
  })
  .catch(error => {
    // En caso de un error en la solicitud, muestra un mensaje de error
    console.error('Error:', error);
    const productContainer = document.getElementById('product-list');
    productContainer.textContent = 'Hubo un error en la solicitud.';
  });


