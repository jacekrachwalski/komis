import "./login.scss";
//import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const Login = () => {
  return (
    <div className="login">
      <div className="left">
        <div className="leftblock"></div>
      </div>
      <div className="right">
        <Grid>
          <div className="signinform">
            {/* <Paper elevation={10} className="paperstyle"> */}
            <Grid align="center">
              <Avatar className="avatarstyle">
                <LockOpenIcon />
              </Avatar>
              <h2>Logowanie</h2>
            </Grid>
            <TextField
              className="username"
              label="Nazwa użytkownika"
              placeholder="Wpisz nazwę użytkownika"
              fullWidth
              required
            />
            <TextField
              label="Hasło"
              placeholder="Wpisz hasło"
              type="password"
              fullWidth
              required
            />
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Zapamiętaj mnie"
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              className="buttonstyle"
              fullWidth
            >
              Zaloguj
            </Button>
            <Typography>
              <Link href="#">Zapomniałeś hasła?</Link>
            </Typography>
            <Typography>
              {" "}
              Nie masz konta? <Link href="#">Złóż wniosek o dostęp</Link>
            </Typography>
            {/* </Paper> */}
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default Login;
