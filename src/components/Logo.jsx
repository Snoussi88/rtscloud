import React from 'react';
import styled from 'styled-components';
import { BiCloudLightRain } from "react-icons/bi";


const Logocontainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
`

const Cloud = styled(BiCloudLightRain)`
    width: 8em;
    height: 8em;
`

const LogoText = styled.div`
    margin-top: 6px;
    font-size: 30px;
    color: #00B997;
    font-weight: 700;
    
`


export default function Logo(){
    return <Logocontainer>
        <Cloud color="#00B997"></Cloud>
        <LogoText>RTS cloud</LogoText>
        
    </Logocontainer>
}