import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description = "Order online for "
                span = "Touchless delivery"
                backgroundImg = "model-s.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing Inventory"
            />
            <Section
                title="Model Y"
                description = "Order online for "
                span = "Touchless delivery"
                backgroundImg = "model-y.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing Inventory"
            />
            <Section
                title="Model 3"
                description = "Order online for "
                span = "Touchless delivery"
                backgroundImg = "model-3.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing Inventory"
            />
            <Section
                title="Model X"
                description = "Order online for "
                span = "Touchless delivery"
                backgroundImg = "model-x.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing Inventory"
            />
            <Section
                title="Solar Panels"
                description = "Lowest Cost Solar Panels In America"
                backgroundImg = "solar-panel.jpg"
                leftBtnText = "Order Now"
                rightBtnText = "Learn More"
            />
            <Section
                title="Solar Roof"
                description = "Produce Clean Energy From Your Roof"
                backgroundImg = "solar-roof.jpg"
                leftBtnText = "Order Now"
                rightBtnText = "Learn More"
            />
            <Section
                title="Accessories"
                description = ""
                backgroundImg = "accessories.jpg"
                leftBtnText = "Shop Now"
                rightBtnText = ""
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
height:100vh;
`;