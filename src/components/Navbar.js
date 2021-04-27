import React ,{ useState } from "react"
import MobilRightMenuSlider from "@material-ui/core/Drawer"

import {
      AppBar,
      Toolbar,
      ListItem,
      IconButton,
      ListItemText,
      Avatar,
      Divider,
      List,
      Typography,
      Box,
      ListItemIcon
} from "@material-ui/core";

import {
     ArrowBack,
     AssignmentInd,
     Home,
     Apps,
     ContactMail
}  from "@material-ui/icons"
import { makeStyles } from '@material-ui/core/styles';
import avatar from "../avatar.png"

// CSS STYLES 

const useStyles = makeStyles (theme =>({
    menuSliderContainer : {
        width:250,
        background:"#511",
        height : "100%"
},
    avatar : {
        display : "block",
        margin : "0.5rem auto",
        width: theme.spacing(13),
        height:theme.spacing(13) 
    },
    ListItem : {
        color: "tan",

    }
}))


const menuItems = [
    {
        listIcon : <Home />,
        listText : "Home"
    },
    {
        listIcon : <AssignmentInd />,
        listText : "Resume"
    },
    {
        listIcon : <Apps />,
        listText : "Portfolio"
    },
    {
        listIcon : <ContactMail />,
        listText : "Contacts"
    }
]

const Navbar = () => {

    const [state,setState] = useState({
        right:false
    }) 

    const togglerSlider = ((slider,open) => () => {
        setState({...state,[slider]:open})
    });

    const classes = useStyles()
    const sideList = slider => (
        <Box
        
        className = {classes.menuSliderContainer} component="div"
        onClick={togglerSlider(slider,false)}
        >
        <Avatar className = {classes.avatar} src={avatar} alt="portfolio pic" />
        <Divider />
        <List>
            {menuItems.map((lsItem,key)=> (
               <ListItem button key= {key}>
               <ListItemIcon className={classes.ListItem}> 
                   {lsItem.listIcon}
               </ListItemIcon>
                   <ListItemText className={classes.ListItem} primary={lsItem.listText} />
                   
            </ListItem>
                  
            ))}
            
                     
             
        </List>
      </Box>
    )
    return (
        <div>
          
        <Box component="nav">
          <AppBar position="static" style={{background:"#222"}}>
              <Toolbar>
                  <IconButton onClick={togglerSlider("right",true)}>
                  <ArrowBack style = {{color:"tomato"}} />
                  </IconButton>
                  <Typography variant="h5" style= {{color:"tan"}}>
                    Portfolio
                  </Typography>
                  <MobilRightMenuSlider 
                  anchor="right"
                  open = {state.right} 
                  onClose ={togglerSlider("right",false)}
                  >
                  {sideList("right")}
                  </MobilRightMenuSlider>
                      
              </Toolbar>
          </AppBar>
        </Box>
        </div>
    )
}

export default Navbar;