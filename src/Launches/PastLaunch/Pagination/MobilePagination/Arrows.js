import React from 'react';
import StyledArrow from 'styles/Pagination/MobilePagination/StyledArrow';

const Arrow = ({ icon }) => <StyledArrow>{icon}</StyledArrow>;

const BackIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="rgba(0, 0, 0, 0.75)"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
  </svg>
);

const ForwardIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="rgba(0, 0, 0, 0.75)"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
  </svg>
);

const ArrowLeft = Arrow({ icon: BackIcon });
const ArrowRight = Arrow({ icon: ForwardIcon });

export { ArrowLeft, ArrowRight };
