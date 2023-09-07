import React from 'react'
import { Button } from 'react-native'
import { Container, StyledText } from './List.styled'

const items = [
    {id : 1, name: 'React native'},
    {id : 2, name: 'React Navigation'},
    {id : 3, name: 'React Hanbit'}
]

export default function List(props:any) {
    const onPress = (item:any) => {
        props.navigation.navigate('Item', {id:item.id, name:item.name})
    }
  return (
    <Container>
        <StyledText>List</StyledText>
        {items.map((item:any) => (
            <Button 
            key={item.id}
            title={item.name}
            onPress={() => onPress(item)}/>
        ))}
    </Container>
  )
}
