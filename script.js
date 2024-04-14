const menu = document.getElementById('menu');
const dropdown = document.querySelector('.nav2');
const body = document.getElementsByTagName('body')

menu.addEventListener('click', () => {
    console.log('sdfgsdfg');
    if (dropdown.classList.contains('open')) {
        dropdown.classList.remove('open');
        console.log('1');
    } else {
        dropdown.classList.add('open');
        console.log('2');
    }
});


// popup

const closeBtn = document.querySelector('.close');
const books = document.querySelectorAll('.book');
const openedBook = document.querySelector('.opened-book');

books.forEach((book) => {
    book.addEventListener('click', () => {
    openedBook.classList.add('popup');
    document.getElementById('shadow').style.display = 'block';
})
});

closeBtn.addEventListener('click', () => {
    openedBook.classList.remove('popup');
    document.getElementById('shadow').style.display = 'none';
});

document.getElementById('shadow').addEventListener('click', () => {
    openedBook.classList.remove('popup');
    document.getElementById('shadow').style.display = 'none';
});