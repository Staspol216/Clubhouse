import { css } from "@emotion/react";

export const avatar = css`
    position: relative;

    b {
        position: absolute;
        font-size: 28px;
        left: 50%;
        top: 47%;
        transform: translate(-50%, -50%);
    }  
`

export const wrapper = css`
    margin: 100px auto;
    text-align: center;

  p {
    font-size: 20px;
    line-height: 36px;
    margin-bottom: 40px;
  }
`

export const modal = css`
    width: 460px;
    margin: 0 auto;
    margin-top: 40px;
`

export const button = css`
    display: inline-flex;
    align-items: center;
`

export const image = css`
    display: inline-block;
    margin-left: 10;
`