import { Box,AppBar,Toolbar,Typography,InputBase,Badge,Avatar,IconButton,Menu,MenuItem } from "@mui/material";
import { styled,alpha } from '@mui/material/styles';
import Pets from "@mui/icons-material/Pets";
import Search from "@mui/icons-material/Search";
import Mail from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";
import { useState } from "react";


const MyToolBar = styled(Toolbar)({
                            display:'flex',
                            alignItems:"center",
                            justifyContent:"space-between"
});

const StyledSearch = styled('div')(({ theme }) => ({
    display:'none',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '40%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
      display:'block'
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
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '15ch',
        '&:focus': {
          width: '22ch',
        },
      },
    },
  }));

const Smwrapper = styled(Box)(({ theme}) => ({
    
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    [theme.breakpoints.up('sm')]: {
        display:'none'
    }

}));

export default function NavBar(){

    const [open,setOpen] = useState(null);
    
    const handleOpen = (event) => {
        setOpen(event.currentTarget)
    };

    const handleClose = () => {
        setOpen(null)
    };

    return (
        <Box>
            <AppBar sx={{position:'fixed'}}>
                <MyToolBar>
                    <Typography variant="h4" color="white" sx={{display:{xs:"none",sm:"block"}}}>Kyaw</Typography>
                    <Pets sx={{display:{xs:"block",sm:"none"}}}/>
                    <StyledSearch>
                        <SearchIconWrapper><Search /></SearchIconWrapper>
                        <StyledInputBase placeholder="Seach..."/>
                    </StyledSearch>
                    <Box sx={{display:{xs:'none',sm:'flex'},alignItems:'center',gap:5}}>
                        <Badge badgeContent={4} color="error">
                            <Mail color="white" />
                        </Badge>
                        <Badge badgeContent={2} color="error">
                            <Notifications color="white" />
                        </Badge>
                        <IconButton onClick={handleOpen}>
                            <Avatar src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600" alt="woman"/>
                        </IconButton>
                    </Box>
                    <Smwrapper>
                        <IconButton onClick={handleOpen}>
                                <Avatar src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600" alt="woman"/>
                        </IconButton>
                        <Typography variant="h6">Lisa Mia</Typography>
                    </Smwrapper>
                </MyToolBar>
                <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={Boolean(open)}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
            </AppBar>
        </Box>
    )
}