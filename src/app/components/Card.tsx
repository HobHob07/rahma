import { Box } from "@mui/material"


const Card = ({children}: any) => {
    return (
        <Box sx={{
            backgroundColor: '#fff',
            boxShadow: '0 0 16px #0000001f',
            borderRadius: '0.375rem',
            overflow: 'hidden'
        }}>
            {children}
        </Box>
    )
}
export default Card