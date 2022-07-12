
import React from 'react';
import { StyledAvatarContainer, StyledAvatar } from './styles/index'
import { useAvatarCreatorDataContext } from '../../hooks/index'
import Body from "../Items/Body";
import styled from 'styled-components';
import { Top } from '../Items/Tops';
import Brands from '../Brands';
import { Bottom } from '../Items/Bottom';

const BodyContainer = styled.div`
background: #fff;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 500px;
position: relative;`

const AvatarContainer = React.forwardRef((pops, ref) => {
    // const { isDisplayedItem } = useAvatarCreatorDataContext()
    return (
        <StyledAvatarContainer ref={ref} className="avatar-container" color='#7A7885'>
            <Brands />
            <BodyContainer>
                <Body />
            </BodyContainer>
        </StyledAvatarContainer>
    );
});

export default AvatarContainer;