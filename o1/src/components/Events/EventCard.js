import React from 'react';

export default function EventCard(props) {
  return(
    <div class="container">
  <div class="card__container">
    <div class="card">
      <div class="card__content">
        <h3 class="card__header">Card 1</h3>
        <p class="card__info">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button class="card__button">Read now</button>
      </div>
    </div>
    <div class="card">
      <div class="card__content">
        <h3 class="card__header">Card 2</h3>
        <p class="card__info">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button class="card__button">Read now</button>
      </div>
    </div>
    <div class="card">
      <div class="card__content">
        <h3 class="card__header">Card 3</h3>
        <p class="card__info">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button class="card__button">Read now</button>
      </div>
    </div>
  </div>
</div>
  );
}
