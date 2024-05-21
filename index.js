curl --location 'https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=live_dl5xdMlc2KCjXSq2qFVzHPnob4Qv89NuUf2mCvixGtDYBACe6JiaJefx0HsUAuvM%0A%0A'

async function apiCat() {
    const response = await fetch("curl --location 'https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=live_dl5xdMlc2KCjXSq2qFVzHPnob4Qv89NuUf2mCvixGtDYBACe6JiaJefx0HsUAuvM%0A%0A'
);
    const movies = await response.json();
    console.log(apiCat);
  }

  sync function fetchCatImages() {
    const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your actual API key
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=${apiKey}`);
    const catsData = await response.json();
    const catGallery = document.getElementById('cat-gallery');

    catsData.forEach(cat => {
        const img = document.createElement('img');
        img.src = cat.url;
        img.alt = 'Cat';
        catGallery.appendChild(img);
    });
}

fetchCatImages();

