import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
    padding: 7px 15px;
    border-radius: 5px;
    background-color: #00B997;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    margin: 20px;
    outline: none;
    border: 2px solid transparent;
    cursor: pointer;
    display:flex;
    justify-content: center;
    align-items: center;
    transition: all 220ms ease-in-out;

    &:hover {
        background-color: transparent;
        border: 2px solid #00B997;
    }
`

export default function Button(props){
    return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>
}