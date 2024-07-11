document.addEventListener('DOMContentLoaded', () => {
    const imageGrid = document.getElementById('image-grid');
    const searchInput = document.getElementById('search');
    const images = [
        'images/profile1.jpg',
        'images/profile2.jpg',
        'images/profile3.jpg',
        'images/profile4.jpg',
        'images/profile5.jpg',
        // Add more images as needed
    ];

    const loadImages = (filter = '') => {
        imageGrid.innerHTML = '';
        images
            .filter(image => image.toLowerCase().includes(filter.toLowerCase()))
            .forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = image;
                imageGrid.appendChild(imgElement);
            });
    };

    searchInput.addEventListener('input', () => {
        loadImages(searchInput.value);
    });

    loadImages();
});
