import "fontsource-roboto";
import Container from "@material-ui/core/Container";
import useStyles from "./App.styles";
import RewardPage from "./pages/RewardPage";

function App(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <header className="App-header" />
      <Container maxWidth={"lg"}>
        <RewardPage />
      </Container>
    </div>
  );
}

export default App;
