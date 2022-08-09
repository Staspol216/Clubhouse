import { css, Global } from "@emotion/react";
import React from "react";

export const globalStyles = (
  <>
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
      `}
    />
    <Global
      styles={css`
        .loader {
          display: inline-block;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          border: 0.3rem solid rgba(#b1aa97, 0.3);
          border-top-color: #b1aa97;
          animation: 0.5s spin infinite linear;
        }
        .link {
          font-weight: 600;
          font-size: 15px;
          color: #4f6fa5;
          cursor: pointer;
        }
        .field {
          min-width: 100px;
          height: 65;
          background: #fff;
          border: 1px sloid #e3e3e3;
          box-sizing: border-box;
          border-radius: 20px;
          padding: 0 25px;
          font-size: 20px;
        }
        .modal-step-wrapper {
          margin: 100px auto;
          text-align: center;
        }
      `}
    />
    <Global
      styles={css`
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
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}
    />
  </>
);
