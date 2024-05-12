import React from 'react'
import { Segment, Grid, Icon } from 'semantic-ui-react'

function EntryLine(props) {
  return (
    
    <Segment color={props.expense ? "red": 'green'}>
        <Grid columns={3} textAlign='right' divided>
            <Grid.Row>
                <Grid.Column width={10} textAlign='left'>{props.description}</Grid.Column>
                <Grid.Column width={3} textAlign='right'>{props.value}</Grid.Column>
                <Grid.Column width={3}>
                    <Icon name='edit' bordered />
                    <Icon name='trash' bordered />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
  )
}

export default EntryLine