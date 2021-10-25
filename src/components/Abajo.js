import styled from "styled-components"


function Abajo(props) {
    return (
      <SVGEstilado
        aria-hidden="true"
        data-prefix="fas"
        data-icon="angles-down"
        className="prefix__svg-inline--fa prefix__fa-angles-down"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        {...props}
      >
        <path
          fill="currentColor"
          d="M169.4 278.6c6.2 6.3 14.4 9.4 22.6 9.4s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L192 210.8 54.63 73.38c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L169.4 278.6zm160-13.2L192 402.8 54.63 265.4c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l160 160C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25s-32.72-12.475-45.22.025z"
        />
      </SVGEstilado>
    )
  }
  


const SVGEstilado = styled.svg`
    color: blue;
    height: 20px;
    width: 20px;

`
export default Abajo