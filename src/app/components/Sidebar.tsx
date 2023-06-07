import { Box, Typography } from "@mui/material"
import { HomeOutlined } from '@mui/icons-material';

const Sidebar = () => {
    return (
        <Box sx={{
            height: '100svh',
            backgroundColor: '#287bff',
            color: "#fff",
            paddingTop: '2rem',
            paddingBottom: '2rem',
            paddingLeft: '2rem',
            paddingRight: {
                xs: '2rem',
                md: 0
            }
        }}>
          <Typography component="h1" sx={{
            fontSize: '2.5rem',
            fontWeight: '900',
            marginBottom: "6rem",
            lineHeight: '1'
          }}>Logo</Typography>

          <Box sx={{
            backgroundColor: "#fff",
            padding: '1rem 2rem',
            borderTopRightRadius: {
                xs: '9999px',
                md: 0
            },
            borderBottomRightRadius: {
                xs: '9999px',
                md: 0
            },
            borderTopLeftRadius: '9999px',
            borderBottomLeftRadius: '9999px',
            color: '#287bff',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <HomeOutlined sx={{
                fontSize: '2rem',
                padding: 0,
            }} />
            <Typography component="h2" sx={{
                marginTop: '0.25rem'
            }}>Dashboard</Typography>
          </Box>
        </Box>
    )
}
export default Sidebar