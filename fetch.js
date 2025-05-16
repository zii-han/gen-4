document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('murid-container');

    // Ambil data dari file JSON eksternal
    fetch('data.json')
        .then(response => response.json())
        .then(muridData => {
            muridData.forEach(murid => {
                const card = document.createElement('div');
                card.classList.add('murid-card');

                const imageDiv = document.createElement('div');
                imageDiv.classList.add('murid-image');
                const img = document.createElement('img');
                img.src = murid.image;
                img.alt = murid.name;
                imageDiv.appendChild(img);

                const contentDiv = document.createElement('div');
                contentDiv.classList.add('murid-content');
                const h3 = document.createElement('h3');
                h3.textContent = murid.name;
                contentDiv.appendChild(h3);

                card.appendChild(imageDiv);
                card.appendChild(contentDiv);
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading data:', error));
});