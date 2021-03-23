import { makeStyles, Typography } from '@material-ui/core';
import banner from '../../images/bg5.jpg';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useContext, useEffect } from 'react';
import { store } from '../../store/store';
import {
  getCategoriesAction,
  setVehicleAction,
} from '../../store/action/actions';
import data from '../../utils/db';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  background: {
    position: 'relative',
    color: '#fff',
    minHeight: '100vh',
    padding: '0',
    margin: '0',
    backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.6), rgba(117, 19, 93, 0.8)),
      url(${banner})`,

    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    overflowX: 'hidden',
  },

  paper: {
    transition: 'all 0.3s ease-out',

    background: 'rgba(255, 255, 255, 0.25)',
    height: 200,
    width: 180,
    padding: '3rem',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur( 3px )',
    borderRadius: '10px',
    border: '1px solid rgba( 255, 255, 255, 0.18 )',
    cursor: 'pointer',
    textTransform: 'uppercase',
    color: '#fff',

    '&:hover': {
      transform: 'translateY(-5px) scale(1.005) translateZ(0)',
      backdropFilter: 'blur( 15px )',
    },
  },
  control: {
    padding: theme.spacing(2),
  },

  center: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
  },

  image: {
    width: '100%',
    height: '185px',
  },

  margin: {
    [theme.breakpoints.down('xs')]: {
      marginTop: '6rem',
    },
  },

  middle: {
    textAlign: 'center',
    paddingTop: '1rem',
  },
}));

const Home = () => {
  const classes = useStyles();

  const {
    dispatch,
    state: { categories },
  } = useContext(store);

  const history = useHistory();

  useEffect(() => {
    dispatch(getCategoriesAction(data.categories));
  }, [dispatch]);

  return (
    <div className={classes.background}>
      <Grid
        container
        className={` ${classes.root} ${classes.center}`}
        spacing={2}
      >
        <Grid item xs={12}>
          <Grid
            container
            justify='center'
            alignItems='center'
            spacing={8}
            className={classes.margin}
          >
            {categories[0]?.map((category) => (
              <Grid key={category.type} item>
                <Paper
                  className={classes.paper}
                  onClick={() => {
                    dispatch(setVehicleAction(category.type));
                    history.push('/search');
                  }}
                >
                  <img className={classes.image} src={category.image} alt='' />
                  <Typography className={classes.middle} variant={'h5'}>
                    {category.type}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
