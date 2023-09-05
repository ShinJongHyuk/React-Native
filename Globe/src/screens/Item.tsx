import React, {useEffect} from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const StyledText = styled.Text`
    font-size: 30px;
    margin-bottom: 10px;
`
export default function Item(props:any) {
    useEffect(() => {
        console.log(props)
    })
  return (
    <Container>
        <StyledText>Item</StyledText>
        <StyledText>ID : {props.route.params.id}</StyledText>
        <StyledText>Name : {props.route.params.name}</StyledText>
    </Container>
  )
}
