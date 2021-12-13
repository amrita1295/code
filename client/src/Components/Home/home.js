import React from 'react';
import Container from '@mui/material/Container';
import { makeStyles } from '@material-ui/core/styles';
import drive from '../images/mask-group@2x.svg';
// import drive from 'src\\images\\mask-group@2x.svg';
import { Card, CardContent, CardMedia, Grid, Paper } from '@mui/material';
import { Typography } from '@mui/material';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
// import Carousel from 'react-material-ui-carousel';
import { Avatar } from '@mui/material';
import Carousell from './Carousell';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';



const useStyles = makeStyles({
    margin: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    cover: {
        backgroundImage: `url(https://user-images.githubusercontent.com/52281814/143464039-fcedcbb5-e565-42e0-8d43-bd384a51a72e.png)`,
        backgroundPosition: "center",
        minHeight:'100vh',
        width:'100%'
    },
    driveicon :{
        marginTop: '60px',
        marginLeft : '28px',
        height: 'auto',
        width: 'auto',
    },
    organgeicon :{
        height: 'auto',
        width: 'auto',
         marginTop: '100px',
        marginLeft: '0px',
    },
    youtubeicon :{
        marginTop: '40px',
        height: 'auto',
        width: 'auto',
        marginLeft: '0px',
    },
    biggogleicon: {
        marginTop: '60px',
        height: 'auto',
        width: 'auto',
        marginLeft: '100px',
        marginRight: '28px',
    },
    yellowcircle: {
        height: 'auto',
        width: 'auto',
        marginLeft: '38px',
        marginTop: '60px',
    },
    skybluecircle: {
        height: 'auto',
        width: 'auto',
        marginLeft: '220px',
        marginTop: '60px',
    },
    learntext: {
       paddingLeft: '50px',
       marginTop: '-60px',
       width: 'auto',
       height: 'auto',
    },
    vector :{
        height: 'auto',
        width: 'auto',
        marginLeft: '-50px',
        marginTop:'-50px',
    },
    vector1: {
        height: 'auto',
        width: 'auto',
        marginLeft: '30px',
        marginTop: '-65px',
    },
    greencircle: {
        height: 'auto',
        width: 'auto',
        marginLeft: '55px',
    },
    bluestar: {
        height: 'auto',
        width: 'auto',
        marginLeft: '-40px',
        marginTop: '-40px', 
    },
    zoom: {
        height: 'auto',
        width: 'auto',
        marginTop: '-33px',
    },
    bluebox: {
        height: 'auto',
        Width: 'auto',
       
    },
    bluebox1: {
        height: '250px',
        Width: '250px',
        marginLeft: '70px',
    },
    textsupport: {
         justifyContent: 'center',
         marginLeft: '50px',
         marginRight: 'auto',
         marginTop:'50px',
    },
    frame: {
    height: 'auto',
    width: 'auto    ',
    }, 
    frame2: {
        backgroundColor: 'var(--cerulean)',
        borderRadius: '9.03px',
        background: 'linear - gradient(97.47deg, #2C296C 3.64 %, #040142 100 %)',
        width: '100%',
        

    },
    frame3: {
        // backgroundImage: `url(https://user-images.githubusercontent.com/52281814/143670402-7a6f3a7c-d7b0-49e8-8128-bdd5e33dcbdc.png)`,
        backgroundColor: '#F7F7F7',
        height: '570px',
        width: '1440px',
        marginTop: '70px',
    },

    frame4:{
        backgroundColor:'#F7F7F7',
        borderRadius: '20px',
        height: '570px',
        width: '1200px',
        marginLeft:'120px',
        marginRight:'230px',
        marginTop:'120px',
    },

    property:{
     backgroundColor:'#F7F7F7',
     marginTop:'90px',
    },

    property1:{
    backgroundColor:'#F7F7F7',
    marginTop:'-160px',
    marginLeft:'1200px',
    
    },
    cardd :{
        background: 'color: var(--white',
        borderRadius: '20px',
        boxShadow: '0px 4px 60px #0000001c',
        height: '383px',
        width: '281px',
    },
    cardd1: {
        background:'color: var(--mist - gray)',
        borderRadius: '10px',
        height: '363px',
        width: '260px',
        justifyItems:'center',
    },
    textside: {
        position: 'absolute',
        width: '547px',
        height: '258px',
        left: '813px',
        top: '1648px',
        fontFamily:"Montserrat",
        fontWeight:'600',
        fontFamily: 'Montserrat', 
         display: 'flex',
         alignItems: 'center',
        letterSpacing: '0',
    },
    leftend : {
        alignItems: 'flex-end',
        height: '300px',
        Width: '300px',
    },
    projects : {
        height: '117px',
        letterSpacing: '0',
        width: '940px' 
    },
    tick1:{
        height: 'auto',
        width: 'auto',
        marginLeft: '-50px',
        marginTop:'-20px',
       
    },
        
});

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.2),
    },
    marginRight: theme.spacing(1),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
   
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(3, 3, 3, 3),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(5em + ${theme.spacing(6)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '30ch',
        },
    },
}));
    

const Home = () => { 
     const classes = useStyles();

    return ( 
        <div className={classes.cover}>
          <Container>
            <Grid paddingLeft={3} container spacing={4} columns={12}>
                <Grid item xs={3}>
                    <Paper elevation={0} className={classes.driveicon}><img src="https://user-images.githubusercontent.com/52281814/143473213-651e5378-8948-4f80-82bd-fef0b93ef50a.png"/></Paper>
                    <Paper elevation={0} className={classes.yellowcircle}><img src="https://user-images.githubusercontent.com/52281814/143477414-ba8f9952-c5a8-4069-94da-fe06e433a295.png" /></Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={0} className={classes.organgeicon}><img src="https://user-images.githubusercontent.com/52281814/143472136-e812bb34-f546-4a3b-aa54-8a29bd72059f.png" /></Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={0} className={classes.youtubeicon}><img src={drive} /></Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={0} className={classes.biggogleicon}><img src="https://user-images.githubusercontent.com/52281814/143471959-769cd9f3-8374-4ca8-a1c6-c3c245c2d6d9.png"/></Paper>
                    <Paper elevation={0} className={classes.skybluecircle}><img src="https://user-images.githubusercontent.com/52281814/143477449-a965344c-0c74-483c-9946-d83310938ae6.png" /></Paper>
                </Grid>
            </Grid>
            <Grid container spacing={4} columns={12}>
                <Grid item xs={3}>
                    
                </Grid>
                <Grid item xs={8}>
                    <Paper elevation={0} className={classes.learntext}>
                        {/* <Typography fontWeight={600} paddingLeft={5} variant="h2" component="h3">
                    Learning Today
                    </Typography> */}
                        <Typography fontWeight={600}  marginTop={6}    marginLeft={2} variant="h2" component="h3">
                          Services we provide
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                   
                </Grid>
            </Grid>
               <Grid container spacing={4} columns={12}>
                    <Grid item  xs={1}>
                        <Paper elevation={0} className={classes.vector}><img src="https://user-images.githubusercontent.com/52281814/143528246-dee026ce-182c-4df7-b86e-1029c328eba4.png" /></Paper>
                     </Grid>
                    <Grid item xs={2}>
                        <Paper elevation={0} className={classes.vector1}><img src="https://user-images.githubusercontent.com/52281814/143528351-dda28f98-520f-4657-89ef-4f523c34fc54.png" /></Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper elevation={0} className={classes.greencircle}><img src="https://user-images.githubusercontent.com/52281814/143528748-943297e0-26fa-4190-8eb8-bce564f9c305.png" /></Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper elevation={0} className={classes.bluestar}><img src="https://user-images.githubusercontent.com/52281814/143528403-cbca69e0-9731-42ab-8318-0438c5d3a558.png" /></Paper>
                    </Grid>
                    <Grid item xs={1}>
                        <Paper elevation={0} className={classes.zoom}><img src="https://user-images.githubusercontent.com/52281814/143539808-22b651a5-3cf6-416b-b720-6198061f0925.png" /></Paper>
                     </Grid>
                </Grid >

                <Grid container spacing={1} columns={12}>
                    <Grid xs={2.5}>
                    </Grid>
                <Grid item xs={1}>
                    <Paper elevation={0} className={classes.tick1}>
                    <img  src="https://user-images.githubusercontent.com/56605853/145779219-3e7416db-5053-4aa7-8835-6f4e72452df0.png" />
                    </Paper>
                </Grid>
                <Grid item xs={2}>
                    <Typography  fontWeight={500} marginTop={5} fontSize={25} variant="h2" component="h3">
                        Lorem Ipsum
                    </Typography>
                </Grid>
                
                <Grid xs={3}>
                <Paper elevation={0} marginTop="5px">
                    <img src="https://user-images.githubusercontent.com/56605853/145779219-3e7416db-5053-4aa7-8835-6f4e72452df0.png"   backgroundColor="#CAB8FF"/>
                        <Typography paddingLeft={2} fontWeight={500}  fontSize={25} variant="h2" component="h3">
                          Lorem Ipsum
                         </Typography>
                </Paper>
                </Grid>
                
                <Grid xs={3}>
                    <Typography paddingLeft={2} fontWeight={500}  marginTop={5}  fontSize={25} variant="h2" component="h3">
                        Lorem Ipsum
                      </Typography>
                </Grid>
                
                <Grid xs={2.5}>
                
                 </Grid>
            </Grid>
        </Container>
            
            <div  className={classes.frame3}>
                <Grid  item xs={1}>
                    <Paper elevation={0}><img className={classes.property} src="https://user-images.githubusercontent.com/52281814/143560984-849b814a-bcce-4c79-b56a-bfd0ea596993.png" />
                    
                    </Paper>
                </Grid >
                <Grid  item xs={1}>
                    <Paper elevation={0}><img className={classes.property1} src="https://user-images.githubusercontent.com/52281814/143560984-849b814a-bcce-4c79-b56a-bfd0ea596993.png" />
                    
                    </Paper>
                </Grid >
            </div>
             
                
            <div>
                {/* ------------------------------------------------------------------------------------ */}
                <Grid container spacing={2} columns={12}>
                    <Grid xs={1.9}>

                    </Grid>
                <Grid xs={2.5}>
                    <Typography fontWeight={500} marginTop={17} fontSize={25} variant="h2" component="h3">
                          Lorem Ipsum
                    </Typography>
                </Grid>

                <Grid xs={2.5}>
                    <Typography fontWeight={500}  marginTop={17}  fontSize={25} variant="h2" component="h3">
                        Lorem Ipsum
                    </Typography>
                </Grid>

                <Grid xs={2.5}>
                    <Typography fontWeight={500}  marginTop={17}  fontSize={25} variant="h2" component="h3">
                         Lorem Ipsum
                   </Typography>
                 </Grid>
                 
                 <Grid xs={2.5}>
                    <Typography fontWeight={500}  marginTop={17}  fontSize={25} variant="h2" component="h3">
                        Lorem Ipsum
                    </Typography>
                </Grid>
                <Grid xs={1.9}>
                
                </Grid>
            </Grid>
         </div>
          {/*------------------frame--------------*/}
        
          <div  className={classes.frame4}>
             
          </div>
           



            <Grid container columns={12}>
                <Grid item xs={3} ></Grid>
                <Grid item xs={6}>
                  <Typography
                  marginTop='190px'
                  width='804px'
                  height='117px'
                  fontFamily='Montserrat'
                  fontWeight='700'
                  align='center'
                  fontSize='50px'>
                  Learn For Cause's Life Cycle
                  </Typography>
                </Grid>
                <Grid item xs={3} ></Grid>
            </Grid>


            <Grid container spacing={2} columns={12}>
                <Grid xs={1.9}>
                </Grid>
                <Grid xs={2.5}>
                   <Typography fontWeight={500} marginTop={13} fontSize={25} variant="h2" component="h3">
                     Ideate
                    </Typography>
                </Grid>
                
                <Grid xs={2.5}>
                   <Typography fontWeight={500}  marginTop={13}  fontSize={25} variant="h2" component="h3">
                     Design
                    </Typography>
                </Grid>

                <Grid xs={2.5}>
                    <Typography fontWeight={500}  marginTop={13}  fontSize={25} variant="h2" component="h3">
                     Develop
                    </Typography>
                </Grid>

                <Grid xs={2.5}>
                    <Typography fontWeight={500}  marginTop={13}  fontSize={25} variant="h2" component="h3">
                     Deploy
                    </Typography>
                </Grid>
                
                <Grid xs={1.9}>
                  </Grid>
                </Grid>

                <Grid container spacing={2} columns={12}>
                <Grid xs={1.9}>
                </Grid>
                <Grid xs={2.3}>
                   <Typography paddingRight={5}  fontWeight={380} marginTop={3.5} fontSize={20} variant="h2" component="h3">
                     Turn your idea from concept to MVP.
                    </Typography>
                </Grid>
                
                <Grid xs={2.3}>
                   <Typography fontWeight={380} marginLeft={3}   paddingRight={5}  marginTop={3.5}  fontSize={20} variant="h2" component="h3">
                     Sketch out the idea to align the user needs.
                    </Typography>
                </Grid>

                <Grid xs={2.5}>
                    <Typography fontWeight={380} marginLeft={5}  paddingRight={5} marginTop={3.5}  fontSize={20} variant="h2" component="h3">
                     Convert the designs into a live application.
                    </Typography>
                </Grid>

                <Grid xs={2.8}>
                    <Typography fontWeight={380} marginLeft={5} paddingRight={5} marginTop={3.5}  fontSize={20} variant="h2" component="h3">
                     Launching the application to the market.
                    </Typography>
                </Grid>
                
                <Grid xs={1.9}>
                  </Grid>
                </Grid>

            
            
            <div>
                <Grid container bgcolor="#FFF" columns={12}>
                    <Grid item xs={2} ></Grid>
                    <Grid item xs={8}>
                        <Typography className={classes.projects}
                            marginTop='190px'
                            variant="h6" component="h5"
                            fontFamily='Montserrat'
                            fontWeight='bold'
                            marginLeft={42}
                            fontSize='50px'
                          >
                            Our Projects
                        </Typography>
                    </Grid>
                    <Grid item xs={2} ></Grid>
                </Grid>
            </div>
            <br></br>
            <br></br>
            
            <Grid container spacing={2} columns={12}>
                <Grid xs={1.6}>
                </Grid>
                <Grid  marginLeft={1.5} xs={4}>
                     <img src="https://user-images.githubusercontent.com/56605853/145760634-88acb458-38f9-4373-85a9-8436121a83a4.png" width={500}/>
                   <Typography paddingLeft={1.1}  fontWeight={500} marginTop={1.5} fontSize={23} variant="h2" component="h3">
                    Project Title
                    </Typography>
                    <Typography paddingLeft={1.1}  fontWeight={300} marginTop={0.5} fontSize={20} variant="h2" component="h3">
                    iOS,IoT
                    </Typography>
                </Grid>
                
                <Grid marginLeft={13} xs={4}>
                     <img src="https://user-images.githubusercontent.com/56605853/145760634-88acb458-38f9-4373-85a9-8436121a83a4.png" width={500}/>   
                     <Typography marginLeft={1}  fontWeight={500} marginTop={1.5} fontSize={23} variant="h2" component="h3">
                      Project Title
                    </Typography>
                    <Typography marginLeft={1}  fontWeight={300} marginTop={0.5} fontSize={20} variant="h2" component="h3">
                      Android,IoT
                    </Typography>
                </Grid>
            
              
                <Grid marginTop={5} marginLeft={24} xs={4}>
                        <img src="https://user-images.githubusercontent.com/56605853/145760634-88acb458-38f9-4373-85a9-8436121a83a4.png" width={500}/>
                        <Typography paddingLeft={1.1}  fontWeight={500} marginTop={1.5} fontSize={23} variant="h2" component="h3">
                           Project Title
                        </Typography>
                        <Typography marginLeft={1}  fontWeight={300} marginTop={0.5} fontSize={20} variant="h2" component="h3">
                         Web app
                         </Typography>
                </Grid>

                <Grid  marginTop={5} marginLeft={13} xs={4}>
                        <img src="https://user-images.githubusercontent.com/56605853/145760634-88acb458-38f9-4373-85a9-8436121a83a4.png" width={500}/>
                        <Typography marginLeft={1}  fontWeight={500} marginTop={1.5} fontSize={23} variant="h2" component="h3">
                          Project Title
                         </Typography>
                         <Typography marginLeft={1}  fontWeight={300} marginTop={0.5} fontSize={20} variant="h2" component="h3">
                          Web app
                          </Typography>
                </Grid>
                
                <Grid xs={1.9}>
                  </Grid>
                </Grid>

            
            {/*------------------------cards-----------------*/}
            {/* <Grid item  xs={3}> */}
                 {/* <Grid container   column={3}> */}
                     {/* <Grid marginLeft='100px' >
                        <Container >
                            <Paper  elevation={0} >
                                
                                     <img src="https://user-images.githubusercontent.com/56605853/145760634-88acb458-38f9-4373-85a9-8436121a83a4.png" width={550}/>
                                 
                             </Paper>
                        <br></br>
                           

                            <Paper  elevation={0} >
                             
                                    <img src="https://user-images.githubusercontent.com/56605853/145760634-88acb458-38f9-4373-85a9-8436121a83a4.png" width={550} />
                                
                            </Paper>
                        </Container>
                      </Grid>
                    </Grid> */}
                    {/* </Grid> */}
                    { /*-------------------------------------*/}
                    {/* <Grid container  column={3}> */}
                    {/* <Grid item  xs={12}> */}
                 {/* <Grid container   column={3}> */}
                     {/* <Grid container spacing ={2}  marginRight='10px' >
                        <Container >
                            <Paper  elevation={0} >
                                
                                     <img src="https://user-images.githubusercontent.com/56605853/145760634-88acb458-38f9-4373-85a9-8436121a83a4.png" width={550}/>
                                 
                             </Paper>
                        <br></br>
                           

                            <Paper  elevation={0} >
                             
                                    <img src="https://user-images.githubusercontent.com/56605853/145760634-88acb458-38f9-4373-85a9-8436121a83a4.png" width={550} />
                                
                            </Paper>
                        </Container>
                      </Grid>
                    </Grid>  */}
                    {/* </Grid> */}
                    {/* <Grid item xs={6} 
                      justifyContent='center' marginTop='-60px' columns={12}>
                        <Typography
                            className={classes.textside}
                            color='#FFFFFF'
                            width='520px'
                            marginLeft='750px'
                            marginTop='-800px'
                            variant="h3"
                            component="h3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum libero sollicitudin, tristique ipsum ac,
                        </Typography>
                    </Grid>  */}
                    {/* <Grid item className={classes.leftend} xs={2}>
                         <Paper >
                              <img src='https://user-images.githubusercontent.com/52281814/143675052-8ba80dd6-1ee0-4a4a-9fb9-354c2416f0b8.png'>
                             </img>
                        </Paper>
                    </Grid> */}
              
           
        </div>
     );
}
 
export default Home;