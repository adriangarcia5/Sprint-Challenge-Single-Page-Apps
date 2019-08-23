import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function CharacterCard (props) {
  return (
    <Card>
    <Image src={props.img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.species} {props.status}</span>
      </Card.Meta>
      <Card.Description>
          Location: {props.location}
      </Card.Description>
      <Card.Description>
          Origin: {props.origin}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {/* {props.episode} */}
        Episode
      </a>
    </Card.Content>
  </Card>
  )
}