import Button from "@mui/material/Button";
import { Grid, Paper } from "@mui/material";

function App() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Paper>nav</Paper>
        </Grid>
        <Grid size={2}>
          <Paper>side</Paper>
        </Grid>
        <Grid size={10} height={"100vh"}>
          <Paper>main</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
