import './App.css';
import { useState } from 'react';
import { Container, Button, Card, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useMutation, QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';

// Define types for the API request and response
type TravelPlanRequest = {
  start_date: string;
  end_date: string;
  location: string;
};

type TravelPlanResponse = {
  travel_plan: string; // Define a more specific type if you know the structure of the travel plan
};

const queryClient = new QueryClient();

function App() {
  const [location, setLocation] = useState<string>('Paris');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const mutation = useMutation<TravelPlanResponse, unknown, TravelPlanRequest>(
    // Access-Control-Allow-Origin': '*
    (data) => axios.post('http://localhost:5200/get_travel_plan', { header: { 'Access-Control-Allow-Origin': '*' }, data: data }).then((res) => res.data),
    {
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );

  const handleSearchClick = () => {
    if (startDate && endDate && location) {
      mutation.mutate({
        // store YYYY-MM-DD
        start_date: startDate.toISOString().split('T')[0],
        end_date: endDate.toISOString().split('T')[0],
        location: location,
      });
    }
  };

  return (
    <Card variant="outlined" id="card">
      <div id="card-content">
        <TextField
          id="outlined-basic"
          label="Region"
          variant="outlined"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <DatePicker label="Start" value={startDate} onChange={setStartDate} />
        <ArrowForwardIcon />
        <DatePicker label="End" value={endDate} onChange={setEndDate} />
        <Button variant="contained" onClick={handleSearchClick}>
          Search
        </Button>
      </div>

      <Container>
        {mutation.isSuccess && (
          <div>
            <h2>Travel Plan</h2>
            <p>{JSON.stringify(mutation.data)}</p>
          </div>
        )}
      </Container>
    </Card>
  );
}

function AppWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}

export default AppWrapper;