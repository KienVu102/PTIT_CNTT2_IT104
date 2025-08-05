import formatDate from './formatData.js';

const today = new Date();
const formattedDate = formatDate(today);

// Tìm phần tử có id là 'demo'
const demoElement = document.getElementById('demo');

// Gán nội dung cho phần tử đó
demoElement.textContent = `Hôm nay là ngày: ${formattedDate}`;