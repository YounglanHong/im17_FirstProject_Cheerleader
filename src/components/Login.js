import React from 'react';
import { withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

/******************** material-ui/style ************************/
// style
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage:
      'url(https://source.unsplash.com/user/hy0212/likes/800x700)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: green[700],
  },
  form: {
    width: '90%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#388e3c',
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

/***************************************************************/

// Login
function Login({
  history,
  email,
  password,
  handleInputEmail,
  handleInputPassword,
  signInEmailPassword,
  signInAnonymous,
}) {
  /*********************************************************************/

  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid item xs={false} sm={5} md={7} className={classes.image} />
        <Grid item xs={12} sm={7} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <ValidatorForm
              className={classes.form}
              onSubmit={signInEmailPassword}
            >
              <TextValidator
                variant="outlined"
                margin="normal"
                fullWidth
                label="Email"
                autoFocus
                name="email"
                value={email}
                onChange={handleInputEmail}
                validators={['required', 'isEmail']}
                errorMessages={[
                  'Enter your email',
                  'Enter a valid email address',
                ]}
              />
              <TextValidator
                variant="outlined"
                margin="normal"
                fullWidth
                label="Password"
                autoFocus
                name="password"
                type="password"
                value={password}
                onChange={handleInputPassword}
                validators={['required']}
                errorMessages={['Enter your password']}
              />
              <Grid item xs>
                <Button fullWidth onClick={() => history.push('/signup')}>
                  아직 가입하지 않으셨나요?
                </Button>
              </Grid>

              <Grid item xs>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  value="Sign In"
                >
                  Test Sign In
                </Button>
              </Grid>
              <Grid item xs>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  value="Anonymouse User"
                  onClick={signInAnonymous}
                >
                  Sign In Anonymously
                </Button>
              </Grid>
            </ValidatorForm>
          </div>
        </Grid>
      </ThemeProvider>
    </Grid>
  );
}

export default withRouter(Login);
