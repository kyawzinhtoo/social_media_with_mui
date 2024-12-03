import { Box,List,ListItem,ListItemButton,ListItemIcon,ListItemText,Switch } from "@mui/material";
import Home from "@mui/icons-material/Home";
import Article from "@mui/icons-material/Article";
import Group from "@mui/icons-material/Group";
import Storefront from "@mui/icons-material/Storefront";
import Person from "@mui/icons-material/Person";
import Settings from "@mui/icons-material/Settings";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ModeNight from "@mui/icons-material/ModeNight";

export default function SideBar({ mode,setMode}){
    return (
        <Box 
            sx={{
                flex:1,
                display:{xs:"none",sm:"block"},
                p:2
            }}>
                <Box>
                    <List sx={{position:"fixed"}}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon><Home /></ListItemIcon>
                                <ListItemText primary="Home"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon><Article /></ListItemIcon>
                                <ListItemText primary="Pages"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon><Group /></ListItemIcon>
                                <ListItemText primary="Groups"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon><Storefront /></ListItemIcon>
                                <ListItemText primary="Market"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon><Person /></ListItemIcon>
                                <ListItemText primary="Friend"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon><Settings /></ListItemIcon>
                                <ListItemText primary="Settings"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon><AccountCircle /></ListItemIcon>
                                <ListItemText primary="Profile"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                    <ModeNight />
                                </ListItemIcon>
                                <Switch onChange={(e)=> {setMode(mode === 'light' ? 'dark' : 'light')}}/>
                            </ListItemButton>
                        </ListItem>
                        </List>
                </Box>
        </Box>
    )
}