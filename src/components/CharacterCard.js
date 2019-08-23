import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function CharacterCard (props) {
  return (
    <Card>
    <Image src={props.img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2019</span>
      </Card.Meta>
      <Card.Description>
        Adrian is new to Austin, Texas!
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
  )
}
