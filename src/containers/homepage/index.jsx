import React, {useState} from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { TopSection } from './topSection';


const PageContainer = styled.div`
    
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

`;


export function Homepage(props){

    const [isOpen,setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <PageContainer>
        <TopSection></TopSection>
        </PageContainer>        
        </>
} 
