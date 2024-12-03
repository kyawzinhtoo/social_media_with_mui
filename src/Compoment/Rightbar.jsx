import * as React from 'react';
import { Box, Typography,AvatarGroup,Avatar,List,ListItem,ListItemAvatar,ListItemText,Divider } from "@mui/material"


export default function RightBar(){

    return (
        <Box
            sx={{
                flex:2,
                display:{xs:"none",sm:"block"},
                p:3
            }}
        >
            <Box sx={{position:'fixed'}}>
                <Typography variant="body1" sx={{fontWeight:500,color:"text.secondary",mb:1}}>Online Friends</Typography>
                <AvatarGroup max={5} sx={{mr:5}}>
                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=600" />
                </AvatarGroup>
                <Typography variant="body1" sx={{fontWeight:500,color:"text.secondary",mt:2}}>Latest Conversations</Typography>
                <List sx={{ width: '100%', bgcolor: 'background.paper',position: 'relative',overflow: 'auto',maxHeight: 350, }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                            <React.Fragment>
                            {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/1073097/pexels-photo-1073097.jpeg?auto=compress&cs=tinysrgb&w=600" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Jshon Son"
                        secondary={
                            <React.Fragment>
                            {" — Wish I could come, but I'm out of town this…"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Jame Lan" src="https://images.pexels.com/photos/832998/pexels-photo-832998.jpeg?auto=compress&cs=tinysrgb&w=600" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Jame Lan"
                        secondary={
                            <React.Fragment>
                            {' — Do you have Paris recommendations? Have you ever…'}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}