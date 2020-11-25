import React ,{useEffect}from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import memories from './images/memories.jpeg';
import {getPost} from './actions/posts';
import Post from './components/Posts/Post';
import Form from './components/Form/Form';
import useStyles from './styles';

const App = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    useEffect(() => {
        dispatch(getPost());
    },[dispatch]);


    return(
       <Container maxwidth="lg">
       <AppBar className={classes.appBar}position="static" color="inherit">
       <Typography className={classes.heading} varient="h2" align="center"> Memories</Typography>
       <img className={classes.image} src={memories} alt="memories" height="60"/>
       </AppBar>
       <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="streach" spacing={3} >
                    <Grid item xs={12} sm={7} >
                        <Post/>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <Form/>
                    </Grid>
                </Grid>
            </Container>
       </Grow>
       </Container>

    );
}

export default App;