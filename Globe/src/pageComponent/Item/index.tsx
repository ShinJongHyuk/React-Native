import React, {useEffect} from 'react'
import { Container, StyledText } from './Item.styled'
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
