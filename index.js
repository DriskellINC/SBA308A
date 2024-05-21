// curl --location 'https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=live_dl5xdMlc2KCjXSq2qFVzHPnob4Qv89NuUf2mCvixGtDYBACe6JiaJefx0HsUAuvM%0A%0A'

async function fetchCatImages() {
    const apiKey = 'live_dl5xdMlc2KCjXSq2qFVzHPnob4Qv89NuUf2mCvixGtDYBACe6JiaJefx0HsUAuvM'; 
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=${apiKey}`);
    const catsData = await response.json();
    const catGallery = document.getElementById('cat-gallery');

    catsData.forEach(cat => {
        const img = document.createElement('img');
        img.src = cat.url;
        img.alt = 'Cat';
        // catGallery.body.appendChild(img);
        catGallery.appendChild(img);
    });
}


fetchCatImages();
