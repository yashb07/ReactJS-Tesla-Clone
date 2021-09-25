import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';

function Section({ title, description, span, backgroundImg, leftBtnText, rightBtnText }) {
    return (
        <Wrap bgImage = { backgroundImg }>
            <Fade bottom>
            <ItemText>
                <h1>{ title }</h1>
                <p>{ description }{span && <span>{ span }</span>}</p>
            </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftBtn>
                            { leftBtnText }
                        </LeftBtn>
                        { rightBtnText &&
                            <RightBtn>
                                { rightBtnText }
                            </RightBtn> 
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src="./images/down-arrow.svg"/>
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    background-size: cover;
    background-position: center;
    bacgkround-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

    span {
        text-decoration: underline;
        cursor: pointer;
    }
`

const Buttons = styled.div`

`

const ButtonGroup = styled.div`
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    // margin-bottom: 30px;
`

const LeftBtn = styled.div`
    background-color: rgba(26, 28, 32, 0.8);
    height: 40px;
    width 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin-bottom: 1rem;
    margin-right: 5px;
`

const RightBtn = styled(LeftBtn)`
    background-color: white;
    opacity: 0.65;
    color: black;
    margin-left: 5px;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`