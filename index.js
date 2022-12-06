let headers = document.querySelectorAll('.header');

for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener('click', toggleDisplay);
}

for (let a = 0; a < headers.length; a++) {
  headers[a].addEventListener('click', toggleArrow);
}

function toggleArrow() {
  let icon = this.querySelector('.arrow');
  icon.classList.toggle('rotate');
}

function toggleDisplay() {
  if (this.parentNode.classList.contains('current-item')) {
    let currentlyDisplayed = document.querySelectorAll('.current-item');
    for (let e = 0; e < currentlyDisplayed.length; e++) {
      currentlyDisplayed[e].classList.remove('current-item');
    }
  } else {
    this.closest('.item').classList.add('current-item');
  }
}