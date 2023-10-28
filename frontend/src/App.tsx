import './App.css'
import { Container, Button, Card, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <Card variant="outlined" id="card">
      <div id="card-content">
        <TextField id="outlined-basic" label="City/Region" variant="outlined" />
        <DatePicker label="Start"/>
        <ArrowForwardIcon />
        <DatePicker label="End"/>
        <Button variant="contained">Search</Button>
      </div>
      
      <Container>
        Ja
      </Container>
    </Card>
  )
}

export default App
