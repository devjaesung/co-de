import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from "styled-components";
import { Link } from 'react-router-dom';




const WhiteBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: white;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`;
const Naver = styled(Button)`
  &:hover {
    background: '#03e664';
  }
`
const KaKao = styled(Button)`
  &:hover {
    background: #fee000
  }
`
const Google = styled(Button)`
  &:hover {
    background: #ffffff;
  }
`

const {Kakao} = window;
const loginWithKakao = () =>{
  Kakao.Auth.authorize({
    redirectUri: 'http://localhost:3000/oauth/kakao/callback'
  })
}

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p:3,
            border :1,
            backgroundColor: "#6667AB"
          }}
        >
          <Typography sx={{
            marginBottom:'20px',
            marginTop:'50px',
          }}>
          <Link to="/"> <a href="Loginpage"><img src="images/test.svg" alt="logo" /></a></Link> 
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <WhiteBorderTextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="???????????? ?????? ???????????? ??????????????????"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{
                color:'White',
                '& fieldset':{
                  borderRadius:'25px',
                },
              }}
            />
            <WhiteBorderTextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="??????????????? ????????? ?????????"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{
                '& fieldset':{
                  borderRadius:'25px',
                },
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="????????? ??????"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,color: "black", backgroundColor: "white", fontWeight:"bold",
                borderRadius:'25px',
                background:'White',
                fontSize:'16px',
              ':hover': {
                bgcolor: '#7777AB',
                color: 'white'},
              }}
              
            >
              ?????????
            </Button>
            <Grid container>
              <Grid item xs>
                <Button href="#" variant="body2"
                sx={{
                  display:'flex',
                  justifyContent: 'center',
                  color:'#333333',
                  ':hover': {
                    color: 'white',
                    textDecoration:'none'
                  }
                }}>
                  ??????????????? ????????????????
                </Button>
              </Grid>
            </Grid>
            <Box
              sx={{
                width:'346px',
                height:'36px',
                display:'flex',
                alignItems:'center',
                justifyContent:'center'
              }}>
                <Box
                  sx={{
                    width:'150px',
                    height:'2px',
                    backgroundColor:'#000'
                  }}/>
                  <Box
                    sx={{
                      padding:'5px',
                      fontWeight:'bold'
                    }}>
                    ??????
                  </Box>
                  <Box
                  sx={{
                    width:'150px',
                    height:'2px',
                    backgroundColor:'#000'
                  }}/>
              </Box>
              <a target="_black" href='https://nid.naver.com/nidlogin.login?mode=form&url=https%3A%2F%2Fwww.naver.com'>
              <Naver
              margin="normal"
              fullWidth
              sx={{
                  borderRadius:'15px',
                  height:'45px',
                  backgroundColor:'#03e664',
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center',
                  color:'White',
                  opacity:'0.8',
                  ':hover':{
                    backgroundColor:'#03e664',
                    opacity:'1',
                  }
              }}
            ><img src="images/Naver.png" alt="logo"  className='Naver'/>???????????? ?????? ?????????</Naver></a>
              <KaKao  onClick={loginWithKakao}
              fullWidth
              sx={{
                  borderRadius:'15px',
                  height:'45px',
                  backgroundColor:'#fee000',
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center',
                  color:'Black',
                  marginTop:'15px',
                  opacity:'0.8',
                  ':hover':{
                    backgroundColor:'#fee000',
                    opacity:'1'
                  }
              }}
            ><img src="images/KaKao.png" alt="logo"  className='KaKao'/>???????????? ?????? ?????????</KaKao>
            <a target="_blank" href="https://accounts.google.com/signin/v2/identifier?passive=1209600&continue=https%3A%2F%2Fcontacts.google.com%2F%3Fhl%3Dko&followup=https%3A%2F%2Fcontacts.google.com%2F%3Fhl%3Dko&hl=ko&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
            <Google
              fullWidth
              sx={{
                  borderRadius:'15px',
                  height:'45px',
                  backgroundColor:'#ffffff',
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center',
                  color:'Black',
                  marginTop:'15px',
                  opacity:'0.8',
                  ':hover':{
                    backgroundColor:'#ffffff',
                    opacity:'1'
                  }
              }}
            ><img src="images/Google.png" alt="logo"  className='Google'/>????????? ?????? ?????????</Google></a>
          </Box>
        </Box>
        <Container
                  sx={{
                    border:1,
                    marginTop:'20px'
                  }}>
        <Box
          sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            padding:'30px'
          }}>
          ???????????? ????????????????
          <Link to="/Registerpage">
            <Button 
            sx={{
              color:'#6667AB',
              cursor:'pointer',
              textDecoration:'none',
              paddingLeft:'10px',
              paddingTop:'-10px',
              fontSize:'16px',
              ':hover': {
                textDecoration:'none',
                fontWeight:'bolder'
              },
              }}>??????????????????</Button>
              </Link>
              <Link to ="/Testcomments">
                <Button>??????????????????</Button>
              </Link>
       

        </Box>
        </Container>
      </Container>
    </ThemeProvider>
  );
}