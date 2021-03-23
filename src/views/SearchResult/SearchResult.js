import {
  Card,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';

import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { AttachMoney } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  resize: {
    width: '40px',
    marginRight: '1rem',
  },

  icon: {
    minWidth: '30px',
    color: '#fff'
  },

  card: {
    display: 'flex',
    padding: '1.5rem',
    color: '#fff',
    background: ' rgba( 255, 255, 255, 0.3 )',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur( 5px )',
    borderRadius: '20px',
    border: '1px solid rgba( 255, 255, 255, 0.18 )',
  },
}));

const SearchResult = ({ item }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.container}>
      <List component='nav'>
        <Card className={classes.card}>
          <ListItem>
            <ListItemIcon className={classes.icon}>
              <img className={classes.resize} src={item.image} alt='Car' />
            </ListItemIcon>
            <ListItemText primary={item.type} />
          </ListItem>
          <ListItem>
            <ListItemIcon className={classes.icon}>
              <PeopleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary={item.capacity} />
          </ListItem>

          <ListItem>
            <ListItemIcon className={classes.icon}>
              <AttachMoney />
            </ListItemIcon>
            <ListItemText primary={item.fare} />
          </ListItem>
        </Card>
      </List>
    </Grid>
  );
};

export default SearchResult;
