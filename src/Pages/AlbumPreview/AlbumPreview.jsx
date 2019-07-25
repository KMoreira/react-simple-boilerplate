import React from 'react';

const AlbumPreview = () => {
  return (
    <section>
      <h1>30 seconds to Mars</h1>
      <figure>
        <img
          src="https://data.whicdn.com/images/5872230/large.jpg"
          alt="30stm album"
          title="30stm album"
        />
        <figcaption>This is War</figcaption>
      </figure>

      <ul>
        <li>
          <span aria-label="play track">Play</span>
          <p>Call to Armas</p>
          <time>3:00</time>
        </li>
        <li>
          <span aria-label="play track">Play</span>
          <p>Call to Armas</p>
          <time>3:00</time>
        </li>
        <li>
          <span aria-label="play track">Play</span>
          <p>Call to Armas</p>
          <time>3:00</time>
        </li>
        <li>
          <span aria-label="play track">Play</span>
          <p>Call to Armas</p>
          <time>3:00</time>
        </li>
        <li>
          <span aria-label="play track">Play</span>
          <p>Call to Armas</p>
          <time>3:00</time>
        </li>
      </ul>
    </section>
  );
};

export default AlbumPreview;
