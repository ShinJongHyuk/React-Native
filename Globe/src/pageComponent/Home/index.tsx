import React from 'react'
import {Button} from 'react-native'
import { Container, StyledText} from './Home.styled'

const Home = (props:any) => {
    return (
        <Container>
            <StyledText>Home</StyledText>
            <Button 
            title="go to the list screens"
            onPress={() => props.navigation.navigate('List')}
            />
        </Container>
    )
}
export default Home