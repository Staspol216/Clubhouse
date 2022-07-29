import { css } from "@emotion/react"

export const avatar = css`
    position: relative;
    border-radius: 50%;
    background-size: cover; 
`

export const avatarBorder = css`
    border: 5px solid #fff;
    box-shadow: 0 0 0 4px #e5e0d0;
`

export const mask = css`
    position: absolute;
`

export const border = css`
    position: relative;
    z-index: 1;
`

export const emptyAvatar = css`
    justify-content: center;
    align-items: center;
    display: inline-flex;
    background-color: #e0e0e0;
    font-size: 30px;
    font-weight: 700;
`