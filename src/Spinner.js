import React from "react"
import styled from "styled-components";
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const Spinner = (props: SvgIconProps) => {
    return (
        <Outter>
            <SvgIcon {...props} style={{color: "#673ab7", fontSize: "150px"}}>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
        </Outter>
    )
}

export default Spinner;

const Outter = styled.div`
background-color: #ebc2eb;
width: 100vw;
height: 100vh;
position: fixed;
top:0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
`
