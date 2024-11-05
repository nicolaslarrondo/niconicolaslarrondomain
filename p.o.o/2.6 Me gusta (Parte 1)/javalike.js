
 // Handle like button clicks
 const likeButtons = document.querySelectorAll('.like');
 likeButtons.forEach(button => {
     button.addEventListener('click', () => {
         let likes = parseInt(button.textContent);
         likes += 1; // Increment likes
         button.textContent = `${likes} likes`;
     });
 });