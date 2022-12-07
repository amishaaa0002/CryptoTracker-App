import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import { makeStyles } from "@material-ui/core";
import Alert from './components/Alert';

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {


const classes = useStyles();
  
  return (
    <div className={classes.App}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </Router>
      <Alert />
    </div>
  );
}

export default App;
