import React from 'react';
import './Headline.css';

const Headline = () => {
  const colors = ['red', '#f4f4f4', '#0077B5'];
  let i = 0;

  setInterval(() => {
    let color = colors[(i = (i + 1) % colors.length)];
    document.getElementById('headlineHighlight').style.color = color;
  }, 2000);

  return (
    <div>
      <div className='topOfPage' id='topOfPage'></div>
      <div id='Headline'>
        <div className='headlineSection' id='Home'>
          <div className='headlineContainer'>
            <div>
              <span className='headlineHighlight' id='headlineHighlight'>
                American
              </span>{' '}
              <span className='remaining'> Web Developer At Large</span>
            </div>
            <div className='iconContainer container'>
              <a
                target='_blank'
                href='https://www.linkedin.com/in/NikArboleda'
                rel='noopener noreferrer'
              >
                <i className='fab fa-linkedin fa-2x linkedInIcon'></i>
              </a>
              <a
                target='_blank'
                href='https://github.com/AmericanNik'
                rel='noopener noreferrer'
              >
                <i className='fab fa-github-square fa-2x githubIcon'></i>
              </a>
              <a
                target='_blank'
                href='https://www.fiverr.com/nikolausa'
                rel='noopener noreferrer'
              >
                <span className='fiverrIcon'></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headline;
