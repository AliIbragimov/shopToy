// const fs = require('fs'); // Подключаем модуль fs

// const obj = { 
//     name: "Masha", 
//     age: 25, 
//     city: "Moscow" 
// }; // Ваш объект

// // Преобразуем объект в строку JSON
// const jsonString = JSON.stringify(obj, null, 2);

// // Записываем строку JSON в файл
// fs.writeFile('../data/product.json', jsonString, (err) => {
//     if (err) {
//         console.error('Ошибка при записи файла:', err);
//     } else {
//         console.log('Файл успешно записан в data.json');
//     }
// });



// const data = {
//     name: 'John Doe',
//     age: 30,
//     city: 'New York'
//   };

//   const saveBtn = document.getElementById('saveBtn');
//   saveBtn.addEventListener('click', function() {
//     const jsonData = JSON.stringify(data);
//     const blob = new Blob([jsonData], { type: 'application/json' });
//     const url = URL.createObjectURL(blob);

//     const a = document.createElement('a');
//     a.href = url;
//     a.download = '../data/product.json';
//     a.click();

//     URL.revokeObjectURL(url);
//   });