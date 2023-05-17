const spans = document.getElementsByTagName('span');
const button = document.getElementById('myButton');
const thankYouSection = document.getElementById('thankYouSection');
let selectionNotice = document.getElementById('selection')

let selectedScale = null;

for (let i = 0; i < spans.length; i++) {
  spans[i].addEventListener('click', function() {
    // Reset background color of all spans
    //Remove the selected span from the spans
    for (let j = 0; j < spans.length; j++) {
      spans[j].style.backgroundColor = '';
      spans[j].classList.remove('selected');
    }
    selectedScale = this; // Store the selected span directly
    this.classList.add('selected');
    this.style.backgroundColor = 'hsl(25, 97%, 53%)';
  });
}

button.addEventListener('click', function() {
  if (selectedScale) {
    selectionNotice.innerText = `You selected ${selectedScale.innerText} out of 5`
    document.querySelector('.container').style.display = 'none';
    thankYouSection.style.display = 'block';
  } else {
    console.log('No span selected.');
  }
});



