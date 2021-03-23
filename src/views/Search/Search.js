import { Box, Grid, makeStyles, Paper } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import Form from '../../components/Form';
import MainContainer from '../../components/MainContainer';
import Input from '../../components/Input';
import { getResultsAction } from '../../store/action/actions';
import { store } from '../../store/store';
import PrimaryButton from '../../components/PrimaryButton';
import data from '../../utils/db';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import GoogleMap from '../GoogleMap/GoogleMap';
import SearchResult from '../SearchResult/SearchResult';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  banner: {
    backgroundImage: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    height: '100vh',
  },

  timeline: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    color: '#fff',
  },

  padding: {
    background: '#7158e2',
    paddingTop: '1rem',
    paddingBottom: '3rem',
    borderRadius: '20px',
  },
}));

const schema = yup.object().shape({
  from: yup.string().required('PickFrom is a required field'),

  to: yup.string().required('PickTo is a required field'),
});

const Search = () => {
  const classes = useStyles();

  const [isSearched, setisSearched] = useState(false);
  const [searchReult, setSearchResult] = useState([]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const {
    dispatch,
    state: { vehicle, results },
  } = useContext(store);

  const onSubmit = (data) => {
    setFrom(data.from);
    setTo(data.to);
    setisSearched((prev) => !prev);
    console.log({ mona: results });
    const filteredResults = results.filter((result) => result.type === vehicle);
    setSearchResult(filteredResults);
  };

  useEffect(() => {
    dispatch(getResultsAction(data.results));
  }, [dispatch]);

  return (
    <div className={classes.banner}>
      <MainContainer maxWidth='lg'>
        <Box m={8} />
        <Grid container spacing={5}>
          <Grid item xs={12} lg={4}>
            {!isSearched ? (
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  ref={register}
                  type='text'
                  error={!!errors.from}
                  helperText={errors?.from?.message}
                  name='from'
                  label='Pick From'
                />
                <Input
                  ref={register}
                  type='text'
                  error={!!errors.to}
                  helperText={errors?.to?.message}
                  name='to'
                  label='Pick To'
                />
                <PrimaryButton color='secondary' type='submit'>
                  Search
                </PrimaryButton>
              </Form>
            ) : (
              <Paper className={classes.padding}>
                <div>
                  <Timeline>
                    <div className={classes.timeline}>
                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot />
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>{from}</TimelineContent>
                      </TimelineItem>

                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent>{to}</TimelineContent>
                      </TimelineItem>
                    </div>
                  </Timeline>
                </div>

                <Grid container spacing={3}>
                  {searchReult.map((item) => (
                    <SearchResult key={item.id} item={item} />
                  ))}
                </Grid>
              </Paper>
            )}
          </Grid>

          <Grid item xs={12} lg={8}>
            <GoogleMap from={from} to={to} />
          </Grid>
        </Grid>
      </MainContainer>
    </div>
  );
};

export default Search;
