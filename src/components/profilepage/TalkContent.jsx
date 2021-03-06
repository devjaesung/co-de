import {React,useState} from 'react'
import { Box, Avatar, Typography, Divider, IconButton, Menu, MenuItem } from '@mui/material'
import {  Chat, MoreHoriz,FavoriteBorder,Favorite} from '@mui/icons-material';
import { Link } from 'react-router-dom';


const TalkContent = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    const [btn,setBtn] = useState(props.boolean);
    const [numOfBtn,setNumOfBtn] = useState(props.like);

    const Invert = () =>{
          setBtn((current)=>!btn)
      }


  return (
   
    <Box sx={{backgroundColor: "#fff",boxShadow: '0 7px 9px -7px gray', marginBottom:'10px', paddingLeft:'5px'}}>
      {/*탭 리스트 */}
      <Box sx={{marginRight: 2, float:"right"}}>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
            <MoreHoriz sx={{ color:"#999"}}/>
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>저장하기</MenuItem>
        <MenuItem onClick={handleClose}>공유하기</MenuItem>
        <MenuItem onClick={handleClose}>신고하기</MenuItem>
      </Menu>
    </Box>
    <Link to="/TalkDetail">
      <Typography variant='subtitle1' component="h2" fontSize={16} fontWeight={"bold"} >
        {props.title}
        <span style={{color:"#999",fontSize:"10px", fontWeight:"regular", marginLeft:"5px"}}>{props.day}일전</span>
      </Typography>
      <Divider sx={{width: "246px"}}/>
      <Typography variant="body2" component="p" fontSize={14} color={"#666"} marginRight={20} sx={{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis", width:'400px'}}>
          {props.content}
      </Typography>
      <Typography variant='body2' component='p' fontSize={12} sx={{color:"#666", marginTop: 3}}>
          {props.hashtag}
        </Typography>
        </Link>
        <Link to="/Profile">
        <Box sx={{float:"right",display:"flex",alignItems:"flex-end"}} marginRight={2}>
         <Avatar alt="profile image" src="images/profile.jpg" sx={{width:"24px",height:"24px", marginRight:"5px"}}/>
         <Typography variant='body2' component="p" >Nickname</Typography>
        </Box>
        </Link>
        
        <Typography variant='body2' component="p" marginTop={1}>

          <span onClick={Invert}>
          {btn? <FavoriteBorder sx={{color: "#e64a3d"}}/>:<Favorite sx={{color: "#e64a3d"}}/>}
            <span style={{color:"#e64a3d"}}>{btn? numOfBtn : numOfBtn + 1 }</span>
                </span>
            <Chat fontSize='small' sx={{marginLeft: "10px"}}/>
              {props.chat}   
        </Typography>

    </Box>

  )
}

export default TalkContent