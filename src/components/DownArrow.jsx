import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";



const ArrowContainer = styled.div`
    width: 46px;
    height: 46px;
    margin-top: 275px;
    border-radius:50%;
    background-color: rgba(113,113,113,0.48);
    display:flex;
    justify-content:center;
    align-items: center;
    boder: 2px solid transparent;
    transition: all 250ms ease-in-out;

    &:hover {
        border: 2px solid #00B997
    }
`;

const ArrowIcon = styled.div`
    margin-top:3px;
    color: #fff;
    font-size: 30px;
`;

export default function DownArrow() {
    return <ArrowContainer>
        <ArrowIcon>
            <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
        </ArrowIcon>
    </ArrowContainer>
}