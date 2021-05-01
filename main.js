var imageURLs = [
  'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  'https://etcanada.com/wp-content/uploads/2016/06/58c0500b2ac4c342c6fc4ab096ada150.jpg?quality=80&strip=all&crop=0px%2C21px%2C500px%2C333px&resize=720%2C480',
  'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg'
];
var gallery = document.querySelector('main');
var imageURLInput = document.querySelector('input');
var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', function (addImage) {
  if (imageURLInput.value !== '') {
    imageURLs.push(imageURLInput.value);
  }
  imageURLInput.value = ''
  updateGallery();
});

function updateGallery() {
  gallery.innerHTML = ''
  for(i = 0; i < imageURLs.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.classList.add('gallery-image');
    imageElement.src = (imageURLs[i]);
    gallery.appendChild(imageElement);
  }
}

updateGallery();
