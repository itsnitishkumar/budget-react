import { Container, Grid, Icon, Segment } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <Container>
      
      <MainHeader title='Budget' type='h1'/>
      <DisplayBalance size='small' label='Your Balance:' value='2,500.53'/>
      
      <DisplayBalances/>
      
      <MainHeader title='History' type='h3'/>
        <EntryLine description='Income' value='$10'/>
        <EntryLine description='Expense' value='$10' expense/>
      <MainHeader type='h3' title='Add new transaction'/>
      
      <NewEntryForm/>

    </Container>
  );
}

export default App;
