const button = document.querySelector('[data-id=button]');
const result = document.querySelector('[data-id=result]');
const breedsList = document.querySelector('[data-id=breeds]');
const input = document.querySelector('[data-id=name]');

let breeds = [];

const renderBreedImage = async breed => {
  const response = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random`
  );
  const data = await response.json();
  result.innerHTML = `<img src="${data.message}">`;
};

const renderBreeds = filter => {
  breedsList.innerHTML = '';
  breeds
    .filter(breed => !filter || breed.indexOf(filter) === 0)
    .forEach(breed => {
      const breedButton = document.createElement('div');
      breedButton.addEventListener('click', () => renderBreedImage(breed));
      breedButton.innerHTML = breed;
      breedsList.appendChild(breedButton);
    });
};

const fetchBreeds = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/list/all');
  const data = await response.json();
  breeds = Object.keys(data.message);
  renderBreeds();
};

const onInput = event => {
  renderBreeds(event.target.value);
};

const renderRandomDog = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await response.json();
  result.innerHTML = `<img src="${data.message}">`;
};

button.addEventListener('click', renderRandomDog);
input.addEventListener('input', onInput);
fetchBreeds();
