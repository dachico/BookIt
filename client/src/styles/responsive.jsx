import { css } from "styled-components";

const sizes = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1440px",
};

export const responsive = {
  mobile: (styles) => css`
    @media (max-width: ${sizes.mobile}) {
      ${styles}
    }
  `,
  tablet: (styles) => css`
    @media (min-width: ${sizes.mobile}) and (max-width: ${sizes.tablet}) {
      ${styles}
    }
  `,
  laptop: (styles) => css`
    @media (min-width: ${sizes.tablet}) and (max-width: ${sizes.laptop}) {
      ${styles}
    }
  `,
  desktop: (styles) => css`
    @media (min-width: ${sizes.laptop}) {
      ${styles}
    }
  `,
};
