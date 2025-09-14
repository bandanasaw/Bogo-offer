
const radios = document.querySelectorAll('input[name="plan"]');
const total = document.getElementById('total');
const optionLabels = document.querySelectorAll('.option-label');

radios.forEach(radio => {
  radio.addEventListener('change', () => {
    total.textContent = `Total: $${radio.value}.00 USD`;

    optionLabels.forEach(label => {
      label.classList.remove('expanded');

    });

    if (radio.checked) {
      radio.closest('.option-label').classList.add('expanded');

    }
  });
});

// document.addEventListener('DOMContentLoaded', () => {
//   const checkedRadio = document.querySelector('input[name="plan"]:checked');
//   // checkedRadio.closest('.option-label').classList.add('expanded');

// });

