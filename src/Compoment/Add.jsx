import * as React from 'react';
import { Tooltip,Fab,Box,Typography,Modal,Avatar,TextField,Stack,Button,ButtonGroup,IconButton } from '@mui/material';
import Add from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import EmojiEmotions from '@mui/icons-material/EmojiEmotions';
import Image from '@mui/icons-material/Image';
import VideoCameraBack from '@mui/icons-material/VideoCameraBack';
import PersonAdd from '@mui/icons-material/PersonAdd';
import DateRange from '@mui/icons-material/DateRange';
import { blue } from '@mui/material/colors';
import { light } from '@mui/material/styles/createPalette';
import { useTheme } from '@emotion/react';

const StyledModal = styled(Modal)({
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    
});

const StyledBox = styled(Box)({
    width:"400px",
    height:'300px',
    borderRadius:"15px",
    padding:"5px"
});

const StyledAvatarBox = styled(Box)({
    display:'flex',
    alignItems:'center',
    marginBottom:'10px',
    gap:"15px"
});

export default function AddFab(){

    const [open,setOpen] = React.useState(false);

    const theme = useTheme();

    const handleOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    };

    return (
        <Box sx={{position:'fixed',bottom:7,left:{xs:"calc(50% - 25px)",sm:50}}} bgcolor={"Background.default"}>
            <Tooltip title="Add" onClick={handleOpen}>
                <Fab  color='primary'><Add /></Fab>
            </Tooltip>
            <StyledModal open={open} onClose={handleClose} sx={{background:'white',display:'flex',alignItems:'center',borderRadius:"5px"}}>
                <StyledBox sx={(theme) => ({backgroundColor:theme.palette.mode === "light" ? "white" : "black"})}>
                    <Typography variant='h6' fontWeight="500" textAlign="center" color='gray' sx={{marginBottom:"5"}}>Create Post</Typography>
                    <StyledAvatarBox>
                        <Avatar src='https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600' sx={{width:"40px",height:"40px"}}/>
                        <Typography variant='span' fontWeight="500">Lisa Mia</Typography>
                    </StyledAvatarBox>
                    <TextField
                            id="standard-multiline-static"
                            label="What's on your mind?"
                            multiline
                            rows={2}
                            variant="standard"
                            sx={{width:"100%"}}
                            />
                            <Stack direction="row" sx={{mt:1,mb:1}}>
                                <IconButton><EmojiEmotions color='primary'/></IconButton>
                                <IconButton><Image color='secondary' /></IconButton>
                                <IconButton><VideoCameraBack color='success' /></IconButton>
                                <IconButton><PersonAdd color='error' /></IconButton>
                            </Stack>
                            <ButtonGroup variant="contained" aria-label="Basic button group" fullWidth>
                                <Button>Post</Button>
                                <Button sx={{width:"200px",opacity:'0.85'}}><DateRange /></Button>
                            </ButtonGroup>
                </StyledBox>
            </StyledModal>
        </Box>
    )
}