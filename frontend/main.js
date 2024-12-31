// Добавляем обработчик клика на изображение
document.body.addEventListener('click', function(event) {
    // Проверяем, был ли клик по изображению с классом 'downloadImage'
    if (event.target && event.target.classList.contains('downloadImage')) {
        const imageUrl = event.target.src; // Получаем путь к изображению
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = imageUrl.split('/').pop(); 
        console.log(link);
        // Имя файла будет взято из URL (последний сегмент пути)
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
});


// const imageBox = document.querySelectorAll('.imagebox');

// imageBox.forEach(element => {
    
//     const getimg = element.querySelector('.imagebox img');
//     if (getimg) {
//         const src = getimg.getAttribute('title'); 
//         if (src.includes('svg')) {
//             element.classList.add('red'); // Добавляем класс для красного цвета
//         } else if (src.includes('png')) {
//             element.classList.add('blue'); // Добавляем класс для синего цвета
//         }
//     }
// });


const search = document.getElementById('searchinput');
    const imageBoxes = document.querySelectorAll('.imagebox');

    search.addEventListener('input', () => {
        const query = search.value.toLowerCase(); // Получаем введённый текст в нижнем регистре
        imageBoxes.forEach(box => {
            const img = box.querySelector('img');
            const title = img.getAttribute('title').toLowerCase(); // Получаем title в нижнем регистре
            if (title.includes(query)) {
                box.classList.add('visible'); // Показываем подходящие элементы
            } else {
                box.classList.remove('visible'); // Скрываем остальные
            }
        });
    });