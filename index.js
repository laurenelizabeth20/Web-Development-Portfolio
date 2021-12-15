const getImageButton = document.querySelector('.getImageButton');
const imageToDisplay = document.querySelector('.imageToDisplay');
const imageDescription = document.querySelector('.imageDescription');
const previous = document.querySelector('.previous');
const photographer = document.querySelector('.photographer');
const description = document.querySelector('.description');
const likes = document.querySelector('.likes');
const download = document.querySelector('.download');
const imageDisplayWrapper = document.querySelector('.imageDisplayWrapper');

dayNightTheme = () => {
  let date = new Date();
  let hour = date.getHours();

  if(hour >= 7 && hour < 18){
    document.body.style.backgroundColor = 'ivory';
    document.body.style.color = '#283121';
    download.style.color = '#283121';
  }
  else{
    document.body.style.backgroundColor = '#283121';
    document.body.style.color = 'ivory';
    download.style.color = 'ivory';
  }
}

window.addEventListener('load', dayNightTheme);

function getSearchValue(){
    var searchInput = document.getElementById("searchInput").value;
    const requestUrl =
    'https://api.unsplash.com/search/photos?query=' + searchInput + '&per_page=175&client_id=328DdYIExBr7CmdLuDB9bWk1Xzl-0Ugo5aMecjuPYdI';
    return requestUrl;
}

getImageButton.addEventListener('click', async () => {
    let randomImage = await getNewImage();
    localStorage.setItem(localStorage.length, getSearchValue());
    imageToDisplay.src = randomImage;
});

async function getNewImage() {
let randomNumber = Math.floor(Math.random() * 10);
return fetch(getSearchValue())
  .then((response) => response.json())
  .then((data) => {
    let allImages = data.results[randomNumber];
    console.log(localStorage);
    photographer.innerHTML = allImages.user.first_name + " " + allImages.user.last_name;
    description.innerHTML = allImages.alt_description;
    likes.innerHTML = allImages.likes;
    download.href = allImages.links.download;
    return allImages.urls.regular;
  });
}

//get previous image
previous.addEventListener('click', async () => {
  let randomImage = await getPreviousImage();
  imageToDisplay.src = randomImage;
});

async function getPreviousImage() {
let randomNumber = Math.floor(Math.random() * 10);
return fetch(localStorage.getItem(localStorage.length - 2))
.then((response) => response.json())
.then((data) => {
  let allImages = data.results[randomNumber];
  photographer.innerHTML = allImages.user.first_name + " " + allImages.user.last_name;
  description.innerHTML = allImages.alt_description;
  likes.innerHTML = allImages.likes;
  download.href = allImages.links.download;
  return allImages.urls.regular;
});
}

function hideImage() {
  if (imageToDisplay.style.display === "none") {
    imageToDisplay.style.display = "block";
    imageDescription.style.display = "none";
  } else {
    imageToDisplay.style.display = "none";
    imageDescription.style.display = "block";
  }
}