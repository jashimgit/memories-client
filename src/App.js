import "./App.css";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from './images/memories.png';

function App() {
  return (
    <Container maxwidth="lg">
      <AppBar position="static" color="inherit">
        <Typography align="center" variant="h2">
          Memories
        </Typography>
        <img src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow>
        <Container>
          <Grid container justify='space-between' alignItems="stretch"   >
            <Grid item={12} sm={7}>
              <Typography varient="h2">Post</Typography>
            </Grid>
            <Grid  item={12} sm={7}>
              <Typography varient="h2">Form</Typography>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
