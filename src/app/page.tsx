"use client";
import { ThemeProvider } from '@emotion/react'
import { Box, CssBaseline, Grid, Typography, createTheme } from '@mui/material'
import Sidebar from './components/Sidebar';
import Main from './components/Main';

export default function Home({children}: any) {
  let theme = createTheme()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
      <Box sx={{
        height: '100svh'
      }}>
        <Grid container spacing={0} sx={{
          height: '100%'
        }}>
          <Grid item xs={12} md={4} lg={3} xl={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={8} lg={9} xl={10}>
            <Main />
          </Grid>
        </Grid>
      </Box>
      
    </ThemeProvider>
  )
}
