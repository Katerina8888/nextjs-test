//TODO UPRAV
/* stylelint-disable value-keyword-case, selector-no-qualifying-type */
import { createGlobalStyle } from "styled-components"

import NeoSansPro_medium from "../font/NeoSansPro-Medium.woff2"
import NeoSansPro_font_regular from "../font/NeoSansPro-Regular.woff2"

import Sora_regular from "../font/Sora-Regular.woff2"
import Sora_light from "../font/Sora-Light.woff2"

import Poppins_bold from "../font/Poppins-Bold.woff2"

import type { IgloonetTheme } from "../themes/igloonet"

// boostrap styly potřebujeme i pro reactstrap
import "../sass/style.scss"

const GlobalStyle = createGlobalStyle<{ theme: IgloonetTheme }>`
  @font-face {
    font-display: fallback;
    font-family: "Neo Sans Pro";
    font-style: normal;
    font-weight: 400;
    src: url("${NeoSansPro_font_regular}") format("woff2");
  }

  @font-face {
    font-display: fallback;
    font-family: "Neo Sans Pro";
    font-style: normal;
    font-weight: 500;
    src: url("${NeoSansPro_medium}") format("woff2");
  }

  @font-face {
    font-display: fallback;
    font-family: Sora;
    font-style: normal;
    font-weight: 400;
    src: url("${Sora_regular}") format("woff2");
  }

  @font-face {
    font-display: fallback;
    font-family: Poppins;
    font-style: normal;
    font-weight: 700;
    src: url("${Poppins_bold}") format("woff2");
  }

  @font-face {
    font-display: fallback;
    font-family: Sora;
    font-style: normal;
    font-weight: 300;
    src: url("${Sora_light}") format("woff2");
  }

  html,
  body {
    position: relative;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.color.beige100};
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    color: ${(props) => props.theme.color.gray900};
    font-family: ${(props) => props.theme.font_family.primary};
    font-size: 18px;

    @media (min-width: ${(props) => props.theme.sizes_min.lg}) {
      font-size:20px;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    position: relative;
    color: ${(props) => props.theme.color.gray900};
    font-family: ${(props) => props.theme.font_family.secondary};
    font-weight: ${(props) => props.theme.font_weight.bold};

    span {
      position: relative;
    }
  }

  /* todo zjisti marginy */
  h1,
  .h1 {
    display: inline-block;
    margin-bottom: 37px;
    font-size: 30px;
    text-align: center;

    @media (min-width: ${(props) => props.theme.sizes_min.md}) {
      font-size: 44px;
    }

    @media (min-width: ${(props) => props.theme.sizes_min.lg}) {
      font-size: 64px;
    }
  }

  h2,
  .h2 {
    font-size: 24px;
    margin-bottom: 40px;

    @media (min-width: ${(props) => props.theme.sizes_min.lg}) {
      font-size: 44px;
    }
  }

  h3,
  .h3 {
    font-size: 20px;

    @media (min-width: ${(props) => props.theme.sizes_min.lg}) {
      font-size: 30px;
    }
  }

  /* TODO */
  a {
    transition: all 0.2s ease-in-out;
    /* font-size: 16px; */
    font-weight: ${(props) => props.theme.font_weight.medium};
    color: ${(props) => props.theme.color.primary};

    @media (min-width: ${(props) => props.theme.sizes_min.lg}) {
      font-weight: ${(props) => props.theme.font_weight.bold};
      text-decoration: none;
    }


    &:hover,
    &:focus {
      color: ${(props) => props.theme.color.primary};
    }
  }

  /* todo potřebujeme to? */
  .img-fluid {
    max-width: 100%;
    height: auto;
  }

  /* todo */
  blockquote,
  .blockquote {
    padding-bottom: 10px;
    margin-bottom: 20px;
    // FIXME: chybi gray300 tak jsem docasne nahradil gray100
    border-bottom: 1px solid ${(props) => props.theme.color.gray100};
    color: #383b3f;
    font-size: 16px;
    font-style: italic;
    line-height: 27px;

    &:before {
      content: "„";
    }

    &:after {
      content: "“";
    }
  }

  /* pre {
    padding: 30px 50px;
    margin-bottom: 20px;
    // FIXME: chybi gray300 tak jsem docasne nahradil gray100
    border: 1px solid ${(props) => props.theme.color.gray100};
    // FIXME: chybi gray200 tak jsem docasne nahradil gray100
    background-color: ${(props) => props.theme.color.gray100};
    font-size: 16px;

    &.tip {
      text-align: center;

      span:before,
      span:after {
        position: relative;
        top: 11px;
        display: inline-block;
        width: 17px;
        height: 3px;
        background-color: ${(props) => props.theme.color.green};
        content: " ";
      }

      span:before {
        left: -5px;
      }

      span:after {
        right: -5px;
      }
    }
  } */

  table {
    width: 100%;
    margin-bottom: 20px;
    background-color: transparent;

    thead {
      th {
        padding: 15px 30px;
        background: ${(props) => props.theme.color.blue};
        color: ${(props) => props.theme.color.white};
      }
    }

    tbody {
      tr:nth-of-type(even) {
        // FIXME: chybi gray200 tak jsem docasne nahradil gray100
        background: ${(props) => props.theme.color.gray100};
      }

      td {
        padding: 15px 12px;
        // FIXME: chybi gray300 tak jsem docasne nahradil gray100
        border: 1px solid ${(props) => props.theme.color.gray100};
        font-size: 12px;
        font-weight: 500;
        text-align: center;
      }
    }
  }

  svg:hover,
  svg:focus,
  svg:active {
    transition: fill 0.3s ease-in-out;

    .icon-gray__light,
    .icon-gray__lighter,
    .icon-gray__dark,
    .icon-gray__darker {
      transition: fill 0.3s ease-in-out;
    }

    .icon-gray__light {
      fill: ${(props) => props.theme.color.white};
    }

    .icon-gray__lighter {
      fill: ${(props) => props.theme.color.primary100};
    }

    .icon-gray__darker  {
      fill: ${(props) => props.theme.color.primary};
    }

    .icon-gray__dark  {
      fill: ${(props) => props.theme.color.primary200};
    }

    .icon-orange__light {
      fill: ${(props) => props.theme.color.gray900};
    }
  }

`

export default GlobalStyle
