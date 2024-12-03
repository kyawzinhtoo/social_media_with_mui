import * as React from 'react';
import { Box, Card,CardHeader,CardMedia,CardContent,IconButton,Typography,Avatar,CardActions,Checkbox } from "@mui/material";
import MoreVert from "@mui/icons-material/MoreVert";
import Favorite from "@mui/icons-material/Favorite";
import Share from "@mui/icons-material/Share";
import { red } from '@mui/material/colors';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

export default function Post(props){
    return (
        <Card sx={{mb:5}}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {props.avatar}
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                    }
                    title={props.name}
                    subheader={props.date}
                />
                <CardMedia
                    component="img"
                    height="10%"
                    image={props.url}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {props.letter}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} color="error" />
                    </IconButton>
                    <IconButton aria-label="share">
                        <Share />
                    </IconButton>
                </CardActions>
        </Card>
    )
}