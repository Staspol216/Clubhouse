import { css, Global, keyframes } from "@emotion/react";

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;

        background-color: #f3efe4;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      * {
        font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
          sans-serif;
        outline: none;
        box-sizing: border-box;
      }

      @keyframes wave-animation {
        0% {
          transform: rotate(0deg);
        }
        5% {
          transform: rotate(-5deg);
        }
        10% {
          transform: rotate(10deg);
        }
        20% {
          transform: rotate(-10deg);
        }
        30% {
          transform: rotate(12deg);
        }
        40% {
          transform: rotate(-10deg);
        }
        50% {
          transform: rotate(12deg);
        }
        60% {
          transform: rotate(-10deg);
        }
        70% {
          transform: rotate(12deg);
        }
        80% {
          transform: rotate(-10deg);
        }
        90% {
          transform: rotate(9deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }
    `}
  />
);
