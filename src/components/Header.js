import React from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  MenuItem,
  Select,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import {useNavigate} from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
import AuthModal from './Authentication/AuthModal';
import UserSidebar from "./Authentication/UserSidebar";


const useStyles = makeStyles(()=>({
    title:{
        flex:1,
        color:"gold",
        fontFamily:"Montserrat",
        fontWeight:"bold",
        cursor:"pointer",

    }

}))

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});
const Header = () => {

    const classes = useStyles();
    const navigate = useNavigate();
    const { currency , setCurrency , user }= CryptoState();
    console.log(currency);


  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography onClick={() => navigate("/")} className={classes.title} variant='h5'>
              Crypto Hunter
            </Typography>

            <Select
              variant="outlined"
              style={{
                color: "white",
                width: 100,
                height: 40,
                marginright: 15,
              }}
              value={currency}
              onChange={(e)=>{ setCurrency(e.target.value)}
            }
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
            { user? <UserSidebar />: <AuthModal/>}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header