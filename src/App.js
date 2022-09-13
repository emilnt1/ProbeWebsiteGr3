import './App.css';
import {Button, Container, Grid, TextField} from "@mui/material";

function App() {
  return (
    <div>


        <Container>
          <Grid container spacing={3} alignItems="center" justifyContent="center">
            <Grid item>
              <TextField></TextField>
            </Grid>
            <Grid item>
              <Button variant="contained">Login</Button>
            </Grid>
          </Grid>
        </Container>

    </div>
  );
}

export default App;
