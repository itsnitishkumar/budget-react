import React from 'react'
import { Segment,Grid } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

function DisplayBalances() {
  return (
    <Segment textAlign='center'>
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column>
          <DisplayBalance size='tiny' label='Income:' value='1,045.50'  color='green' align='left'/>
        </Grid.Column>
        <Grid.Column>
          <DisplayBalance size='tiny' label='Expenses:' value='845.50'  color='red' align='left'/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  )
}

export default DisplayBalances