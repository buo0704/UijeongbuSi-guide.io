fetch('Uijeongbu-City-Map.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('map-container').innerHTML = data;
    });
