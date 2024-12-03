import * as React from 'react';
import { Box,Grid2,Stack, ThemeProvider, createTheme,CssBaseline,GlobalStyles } from "@mui/material";
import NavBar from "./Compoment/Nav";
import SideBar from "./Compoment/Sidebar";
import Feed from "./Compoment/Feed";
import RightBar from "./Compoment/Rightbar";
import AddFab from "./Compoment/Add";


function App() {

  const [mode,SetMode] = React.useState('light');

  const darkTheme = createTheme({
    palette:{
      mode:mode,
      background: {
        default: mode === 'dark' ? '#121212' : '#ffffff', // Dark gray or white
        paper: mode === 'dark' ? '#1e1e1e' : '#f5f5f5',   
      },
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
      
        <GlobalStyles
          styles={(theme) => ({
            body: {
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
              margin: 0,
              padding: 0,
              minHeight: '100vh', 
            },
          })}
        />
        <Grid2 container spacing={6} bgcolor={"Background.default"} color={'text.primary'}>
          <Grid2 size={12}>
            <Box sx={{width:'100%'}}>
              <NavBar />
            </Box>
          </Grid2>
          <Grid2 size={12}>
              <Box sx={{width:'100%'}}>
                <Stack direction="row" justifyContent="space-between" spacing={3}>
                  <SideBar mode={mode} setMode={SetMode}/>
                  <Feed />
                  <RightBar />
                </Stack>
              </Box>
          </Grid2>
          <Grid2>
            <AddFab />
          </Grid2>
        </Grid2>
    </ThemeProvider>
    
  );
}

export default App;
