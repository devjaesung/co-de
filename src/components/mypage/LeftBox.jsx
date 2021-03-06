import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import { Avatar, Typography } from '@mui/material';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import {Link} from 'react-router-dom'

const LeftBox = (props) => {
  return (
   <Box
    sx={{
      width: 370,
      height: 740,
      border: 1,
      borderColor: '#e6e6e6',
      backgroundColor : '#fff',
      marginLeft: 5
    }}
  >
        <Box
        sx={{
            width: 320,
            height: 60,
            borderBottom:1,
            borderColor: '#b5b5b5',
            // backgroundColor: 'gray',
            marginTop:5,
            marginLeft:3,
            display: 'flex',
            alignItems:'center'
        }}                                                                        
        >
            <Typography sx={{fontSize: '25px', fontWeight: 'bold', flex: 8}}>
            {props.Nickname}</Typography>
            <Link to="/MyEditpage">
            <Button
            sx={{
               marginLeft: 'auto',
               backgroundColor: '#dddddd',
               color: '#8b8b8d',
               fontWeight: 'bold',
               ':hover': {
                bgcolor: '#6667AB', 
                color: 'white',
               }
            }}
            >
            수정
            </Button>
            </Link>
        </Box>
      <Box
        sx={{
          width: 320,
          height: 40,
          marginLeft:3,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end'
      }}>
          
          <Box
            sx={{
              display:'flex',
              fontSize:'12px',
              fontWeight: 'bold',
              color:'#999999'
            }}>
            팔로워
          </Box>
          <Box
          sx={{
            fontSize: '12px',
            fontWeight: 'bold',
            paddingLeft: '5px'
          }}>
            2995
          </Box>
          <Box
            sx={{
              display:'flex',
              fontSize:'12px',
              fontWeight: 'bold',
              color:'#999999',
              paddingLeft: '15px'
            }}>
            팔로우
          </Box>
          <Box
          sx={{
            fontSize: '12px',
            fontWeight: 'bold',
            paddingLeft: '5px'
          }}>
            456
          </Box>
      </Box>

      <Box
      sx={{
        width: 320,
        height: 165,
        marginLeft:3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
       <Avatar 
        src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} 
        style={{margin:'20px', width: '120px', height:'120px'}} 
        />
      </Box>

      <Box
      sx={{
        width: 320,
        height: 60,
        marginLeft:3,
        display: 'flex',
        justifyContent: 'space-evenly'
      }}>
          <Box
          sx={{
            width: 70,
            height: 20,
            backgroundColor: '#ebebeb',
            borderRadius: '7px',
            textAlign: 'center',
            fontSize: '12px',
            fontWeight : 'bold',
            color: '#a0a0a0'
          }}>
            인디
          </Box>
          <Box
          sx={{
            width: 70,
            height: 20,
            backgroundColor: '#ebebeb',
            borderRadius: '7px',
            textAlign: 'center',
            fontSize: '12px',
            fontWeight : 'bold',
            color: '#a0a0a0'
          }}>
            팝송
          </Box>
          <Box
          sx={{
            width: 70,
            height: 20,
            backgroundColor: '#ebebeb',
            borderRadius: '7px',
            textAlign: 'center',
            fontSize: '12px',
            fontWeight : 'bold',
            color: '#a0a0a0'
          }}>
            OST
          </Box>
      </Box>

      <Box
      sx={{
        width: 320,
        height: 110,
        marginLeft: 3,
        borderBottom:1,
        borderColor: '#cacaca',
      }}>
          <Box
          sx={{
            paddingLeft: 1,
            fontWeight: 'bold',
            fontSize: '16px',
            color: '#7a7a7a'
          }}>
            소개글
          </Box>
          <Box
          sx={{
            height: 60,
            marginTop:2,
            paddingLeft: 1,
            color: '#acacac',
            fontSize: '13px'
          }}>
            {props.comment}
          </Box>
      </Box>
      
      <Box
      sx={{
        width: 320,
        height: 110,
        marginLeft: 3,
        marginTop: 2,
        borderBottom: 1,
        borderColor: '#cacaca'
      }}>
        <Box
          sx={{
            fontWeight: 'bold',
            fontSize: '16px',
            color: '#7a7a7a',
            display: 'flex'
          }}>
            <LoyaltyIcon
            sx={{
              marginRight: 1
            }}>
            </LoyaltyIcon>
            좋아하는 아티스트
          </Box>
          <Box
          sx={{
            height: 60,
            marginTop:2,
            paddingLeft: 1,
            color: '#acacac',
            fontSize: '13px'
          }}>
             {props.Art}
          </Box>
      </Box>

      <Box
      sx={{
        width: 320,
        height: 110,
        marginLeft: 3,
        marginTop: 2
      }}>
        <Box
          sx={{
            fontWeight: 'bold',
            fontSize: '16px',
            color: '#7a7a7a',
            display: 'flex'
          }}>
            <AudioFileIcon
            sx={{
              marginRight: 1
            }}>
            </ AudioFileIcon>
            좋아하는 노래
          </Box>
          <Box
          sx={{
            height: 60,
            marginTop:2,
            paddingLeft: 1,
            color: '#acacac',
            fontSize: '13px'
          }}>
             {props.Song}
          </Box>
      </Box>
  </Box> 
  )
} 

export default LeftBox