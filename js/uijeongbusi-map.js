// uijeongbusi-map.html파일을 index.html로 불러오기
fetch('uijeongbusi-map.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('map-container').innerHTML = data;
    });
