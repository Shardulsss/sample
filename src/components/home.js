import React from 'react'
import Navbar from './navbar';
import {makeStyles, Typography, Card ,CardMedia, Button, Grid, Container } from '@material-ui/core';
import pie from '../media/pie2.png';
import bgpink from '../media/bgpink.png';
import bgpie from '../media/bggradient.png';
import bgcupcake from '../media/bgcupcake.png';
import styled from 'styled-components';
import ButtonMain from './button';

const HomeContainer = styled.div`
    background: #FAD7DA;
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;
    z-index: 1;


`

const HomeBg = styled.div`
    position: absolute;
    top: 0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height: 100%;
    overflow: hidden;
`

const Imagebg = styled.img`
    
    -o-object-fit:cover;
    object-fit: cover;
    background: #232a34;
    width: 100%;
    height:100%

    
`

const useStyles = makeStyles((theme)=>({
    item:{
        margin: 35,
        justifyContent:'left',
    },
    item2:{
        display:'flex',
        width:700,
        justifyContent:'flex-end',
        alignItems:'right'

    },
    container:{
        justifyContent:'left',
    },
    outerdiv:{
        width:"100%",
        dispay:'flex',
        flexDirection:"row",
        zIndex:3,
        paddingTop:50,
        
        
    },
    division1:{
        paddingTop:98,
        marginLeft:20
    },
   
    header:{
        fontFamily: 'Sail, cursive',
        color: '#782127',
        marginTop:35
    },
    subtitle:{
        fontFamily: 'Poor Story',
        fontSize:30,
        color: '#9E663D',
        marginLeft:15
    },
    img:{
        height:600,
        width:500,
        justifySelf:'right'

    }
}))

const Home = () => {
    const classes = useStyles()
    return (
        <HomeContainer>
            <Navbar />
            

            <div className={classes.outerdiv}>
            <Container className={classes.container}>
                <Grid container spacing={2} justify="center" className={classes.container}>
                    <Grid item className={classes.item}>
                        <div className={classes.division1}>
                            <Typography variant="h2" className={classes.header} align="left">
                                Peony and Pie
                            </Typography>
                            <Typography variant="h6" className={classes.subtitle} align="left">
                                A Desert for every ocassion....
                            </Typography>
                            <br></br>
                            <br></br>
                            <ButtonMain>Buy</ButtonMain>
                    
                        </div>
                    </Grid>

                    <Grid item>
                    <div style={{height:1, width:200}}></div>
                    </Grid>

                    <Grid item>
                    <img src={pie} className={classes.img}></img>
                    </Grid>
                </Grid>
            </Container>
            </div>

            
        </HomeContainer>
    )
}

export default Home;
