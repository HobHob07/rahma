import { Box, Grid, List, ListItem, Typography } from "@mui/material"
import Card from "./Card"
import { useState } from "react";
import LineChart from "./LineChart";
import Image from 'next/image';

const Main = () => {

    const UserData = [
        {
            id: 1,
            latitudeIndex: 0,
            coordinatesError: 0,
        },
        {
            id: 2,
            latitudeIndex: 100,
            coordinatesError: 10,
        },
        {
            id: 3,
            latitudeIndex: 200,
            coordinatesError: 15,
        },
        {
            id: 4,
            latitudeIndex: 300,
            coordinatesError: 20,
        },
        {
            id: 5,
            latitudeIndex: 400,
            coordinatesError: 22,
        },
        {
            id: 6,
            latitudeIndex: 500,
            coordinatesError: 30,
        },
        {
            id: 7,
            latitudeIndex: 600,
            coordinatesError: 40,
        },
    ];

    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.latitudeIndex),
        datasets: [
            {
                label: 'Errors',
                data: UserData.map((data) => data.coordinatesError),
                backgroundColor: [
                    "red",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
        options: {
            legend: {
                display: false
            }
        }
    });


    return (
        <Box sx={{
            padding: '3rem',
            height: '100svh',
            overflowY: 'auto'
        }}>
            <Box>
                <Grid container spacing={4}>
{/* 
                    <Grid item xs={12}>
                        <Card>
                            <Box sx={{
                                display: 'flex',
                            }}>
                                <Box sx={{
                                    width: '400px',
                                    flexShrink: 0,
                                    flexGrow: 0,
                                    backgroundColor: '#2aa0e6',
                                    padding: '2rem 1rem'
                                }}>
                                    <Typography component="h3" sx={{
                                        fontSize: "2rem",
                                        color: '#fff',
                                        marginBottom: '3rem',
                                        "& span": {
                                            fontSize: 'inherit',
                                            color: '#2cdeff'
                                        }
                                    }}>
                                        <Typography component="span">Assessing</Typography>{' '}
                                        the{' '}
                                        <Typography component="span">Outcomes</Typography>{' '}
                                        of Our Work{' '}
                                    </Typography>
                                    <List component="ul" sx={{
                                        listStyleType: 'disc',
                                        color: '#fff',
                                        paddingLeft: '2rem'
                                    }}>
                                        <ListItem component="li" sx={{
                                            listStyleType: 'disc',
                                            display: 'list-item',
                                            paddingLeft: '0'
                                        }} >Closely align with GPS coordinates</ListItem >
                                        <ListItem component="li" sx={{
                                            listStyleType: 'disc',
                                            display: 'list-item',
                                            paddingLeft: '0'
                                        }} >Few expectations in high latitude</ListItem >
                                    </List>
                                </Box>
                                <Box sx={{
                                    width: 'calc(100% - 400px)',
                                    flexShrink: 0,
                                    flexGrow: 0,
                                    padding: '2rem 1rem'
                                }}>
                                    <LineChart chartData={userData} options={userData?.options} />
                                </Box>

                            </Box>
                        </Card>
                    </Grid> */}

                    <Grid item xs={12}>
                        <Card>
                            <Box sx={{
                                display: 'flex',
                                minHeight: '400px'
                            }}>

                                <Box sx={{
                                    width: 'calc(100% - 400px)',
                                    flexShrink: 0,
                                    flexGrow: 0,
                                    padding: '2rem 1rem',
                                    position: 'relative',
                                    "& img": {
                                        objectFit: 'cover'
                                    }
                                }}>

                                    <Image
                                        src="/test.jpg"
                                        fill
                                        alt="Picture of the author"
                                    />
                                </Box>

                                <Box sx={{
                                    width: '400px',
                                    flexShrink: 0,
                                    flexGrow: 0,
                                    padding: '2rem 1rem'
                                }}>

                                    <Typography component="p" sx={{
                                        fontWeight: 700,
                                        color: "#181818",
                                        marginBottom: '1rem',
                                        "& span": {
                                            color: "#999999",
                                            wordWrap: 'break-word'
                                        }
                                    }}>File Path: {' '}
                                        <Typography component="span">c://Users/bahri/Downloads/data1/data/32.929669+10.451768+2023-05-06T21:30:00.png</Typography>
                                    </Typography>

                                    <Typography component="p" sx={{
                                        fontWeight: 700,
                                        color: "#181818",
                                        marginBottom: '1rem',
                                        "& span": {
                                            color: "#999999",
                                            wordWrap: 'break-word'
                                        }
                                    }}>Latitude: {' '}
                                        <Typography component="span">32.929669</Typography>
                                    </Typography>

                                    <Typography component="p" sx={{
                                        fontWeight: 700,
                                        color: "#181818",
                                        marginBottom: '1rem',
                                        "& span": {
                                            color: "#999999",
                                            wordWrap: 'break-word'
                                        }
                                    }}>Longtitude: {' '}
                                        <Typography component="span">10.451768</Typography>
                                    </Typography>

                                </Box>


                            </Box>
                        </Card>
                    </Grid>

                </Grid>
            </Box>
        </Box>
    )
}
export default Main