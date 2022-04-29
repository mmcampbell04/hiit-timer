import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }


  h1, h2, h3, p {
    margin: 0;
    padding: 0;
  }
  
  body {
    width: 100%;
    font-family: 'Akshar', sans-serif;
    color: white;
    font-size: 100%;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    
  }

  /* Remove styles from a elements */

a {
  text-decoration: none;
  color: inherit;
}

ul, li {
  list-style: none;
}

/* Make images easier to work with */

img,
picture {
  max-width: 100%;
  display: block;
}


/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove default button & fieldset styles */
button,
fieldset {
  border: none;
  background: none;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}



`;

export default GlobalStyle;
