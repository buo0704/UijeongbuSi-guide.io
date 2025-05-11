// Ajax로 Uijeongbu-City-guide.html에서 Uijeongbu-City-Map.html파일을 가져옴
fetch('Uijeongbu-City-Map.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('map-container').innerHTML = data;
    });
