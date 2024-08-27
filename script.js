// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Manejo del clic en las categorías
    document.querySelectorAll('.category-filter').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const category = this.getAttribute('data-category');
            filterPostsByCategory(category);
        });
    });

    // Función para filtrar las entradas
    function filterPostsByCategory(category) {
        document.querySelectorAll('#postsContainer .card').forEach(function(post) {
            if (category === 'all' || post.classList.contains('category-' + category)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    }

    // Manejo del formulario para agregar nueva entrada
    document.getElementById('addPostForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('postTitle').value;
        const category = document.getElementById('postCategory').value;
        const content = document.getElementById('postContent').value;

        const newPostHtml = `
            <div class="card mb-4 category-${category}">
                <img class="card-img-top" src="ruta-a-tu-imagen.jpg" alt="Imagen de nueva entrada">
                <div class="card-body">
                    <h2 class="card-title">${title}</h2>
                    <p class="card-text">${content}</p>
                </div>
                <div class="card-footer text-muted">
                    Publicado el ${new Date().toLocaleDateString()} por <a href="#">Nolberto Gomez</a>
                </div>
            </div>
        `;

        document.querySelector('#postsContainer').insertAdjacentHTML('afterbegin', newPostHtml);

        // Limpiar el formulario y cerrar el modal
        document.getElementById('addPostForm').reset();
        var addPostModal = bootstrap.Modal.getInstance(document.getElementById('addPostModal'));
        addPostModal.hide();
    });

    // Manejo del botón de búsqueda
    document.getElementById('searchButton').addEventListener('click', function() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        document.querySelectorAll('#postsContainer .card').forEach(function(post) {
            const title = post.querySelector('.card-title').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });
});
