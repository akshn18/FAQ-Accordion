"use strict";

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {

  const answer = item.querySelector('.faq-answer');
  const iconPlus = item.querySelector('.icon-plus');
  const iconMinus = item.querySelector('.icon-minus');

  iconPlus.addEventListener('click', function () {
    const isVisible = answer.style.display === 'block';
    if (!isVisible) {
        answer.style.display = 'block';
        iconPlus.hidden = true;
        iconMinus.hidden = false;
    }

    iconMinus.addEventListener('click', function () {
        answer.style.display = 'none';
        iconPlus.hidden = false;
        iconMinus.hidden = true;
    });


  });
});
