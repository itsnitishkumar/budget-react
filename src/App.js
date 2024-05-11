import { Container, Form, Grid, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import ButtonSaveOrCancel from './components/ButtonSaveOrCancel';

function App() {
  return (
    <Container>
      <MainHeader title='Budget' type='h1'/>
      
      <Statistic size='small'>
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>2,500.53</Statistic.Value>
      </Statistic>
      
      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size='tiny' color='green'>
                <Statistic.Label style={{textAlign: 'left'}}>
                  Income:
                </Statistic.Label>
                <Statistic.Value>1,045.50</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
            <Statistic size='tiny' color='red'>
                <Statistic.Label style={{textAlign: 'left'}}>
                  Expenses:
                </Statistic.Label>
                <Statistic.Value>1,045.50</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <MainHeader title='History' type='h3'/>

      <Segment color='red'>
        <Grid columns={3} textAlign='right' divided>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$18,00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color='green'>
        <Grid columns={3} textAlign='right' divided>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$10,00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color='red'>
        <Grid columns={3} textAlign='right' divided>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$15,00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
     
     <MainHeader type='h3' title='Add new transaction'/>
     <Form unstackable>
      <Form.Group>
        <Form.Input icon='tags' width={12} label='Description' placeholder='New shinny thing' />
        <Form.Input icon='dollar' width={4} label='Value' placeholder='100.00' iconPosition='left'/>
      </Form.Group>
      <ButtonSaveOrCancel/>
     </Form>
    </Container>
  );
}

export default App;
