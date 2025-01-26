// Task 1
const text = document.querySelector('#text');
const textInput = document.querySelector('#textInput');

text.onclick = function() {
    text.textContent = textInput.value;
};
// Task 2
const replaceImg = document.querySelector('.fpvImg')
replaceImg.src = 'https://ntema.com.ua/uploads/products/66/1d/b-fi4p76u8d_22b5a3d0.jpg'
// Task 3
const replaceLink = document.querySelector('.link')
replaceLink.href = 'https://goprokat.ua/en/kvadrokopter-fpv-10-djujmov-dronesky10-25w-elrs-915mhz/'