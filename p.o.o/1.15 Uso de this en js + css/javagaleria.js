
 // Handle like button clicks
 function changeImage(element) {
    Element.src = 'https://via.placeholder/200/0000FF/808080' ;
    Element.alt = 'Nueva Imagen';
}

function showDescription(button) {
    let Description = button.nextElementSibling;
    Description.style.display = Description.style.display === 'block' ? 'none' : 'block';
}

function completeTask(button) {
    let taskItem = button.parentElement;
    let taskText = taskItem.querySelector('span');
    taskText.classList.toggle('complete')
}

function applyDiscount(button) {
    let productCard = button.parentElement;
    let priceElement = productCard.querySelector('.price');
    let currentPrice = parseFloat(priceElement.textContent.replace ('$',''));
}