import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { useContext } from 'react';
import { store } from '../../store/store';
import { auth } from '../../utils/firebase.config';
import { MenuItem } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { toast } from 'react-toastify';
import { DirectionsBike } from '@material-ui/icons';
import ButtonAppBarCollapse from '../../components/ButtonAppBarCollpase';
import { setVehicleAction, SignoutAction } from '../../store/action/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  avatar: {
    backgroundColor: red[500],
    marginRight: '1rem',
  },

  buttonBar: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },

    background: 'transparent',
  },

  bar: {
    background: 'rgba(117, 19, 93, 0.77)',
  },
}));

const Header = (props) => {
  const history = useHistory();
  const classes = useStyles();

  const {
    dispatch,
    state: { user },
  } = useContext(store);

  const destinationHandler = () => {
    dispatch(setVehicleAction('bike'));
    history.push('/search');
  };

  const signoutHandler = () => {
    auth.signOut();
    dispatch(SignoutAction());
    toast.dark(` ${user.displayName} is signed out from our system`);
  };

  return (
    <AppBar className={classes.bar} elevation={0}>
      <Toolbar>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='menu'
        >
          <DirectionsBike />
        </IconButton>

        <Typography variant='h6' className={classes.title}>
          <Button
            onClick={() => history.push('/')}
            style={{ color: 'white' }}
            variant='text'
          >
            Let it Ride
          </Button>
        </Typography>

        <ButtonAppBarCollapse>
          {user?.displayName ? (
            <div>
              <MenuItem onClick={destinationHandler}>Destination</MenuItem>
              <MenuItem>{user.displayName}</MenuItem>
              <MenuItem onClick={signoutHandler}> Sign Out</MenuItem>
            </div>
          ) : (
            <MenuItem onClick={() => history.push('/login')}>Login</MenuItem>
          )}
        </ButtonAppBarCollapse>

        <div className={classes.buttonBar}>
          <Button
            onClick={destinationHandler}
            style={{ color: 'white' }}
            variant='text'
          >
            Destination
          </Button>

          {user?.displayName ? (
            <>
              <Button style={{ color: 'white' }} variant='text'>
                {user.displayName}
              </Button>

              <Button onClick={signoutHandler} style={{ color: 'white' }}>
                Sign Out
              </Button>
            </>
          ) : (
            <Button
              onClick={() => history.push('/login')}
              style={{ color: 'white' }}
              variant='text'
            >
              Login
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
