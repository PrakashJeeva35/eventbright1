'use client';

import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase URL and API key
const supabaseUrl = "https://gonsjfvfvuytjgpfpbmt.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvbnNqZnZmdnV5dGpncGZwYm10Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMzE0MzkzNCwiZXhwIjoyMDE4NzE5OTM0fQ.gqQDcxdanrbtHLFs6z73fkOx86OUr7sJtU6zz6H_7Dw";

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

import { useState, useEffect } from 'react';

// MUI
import { Container, Box, Typography, CardMedia, IconButton, Button } from '@mui/material';
import KeyboardArrowLeftSharpIcon from '@mui/icons-material/KeyboardArrowLeftSharp';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';

// Styles
import style from '../../../../styles/event.module.css'

export default function ListEvents() {

    const [events, setEvents] = useState([]);
    const [eventcategory, setEventcategory] = useState([]);
    const [openEventPopup, setOpenEventPopup] = useState(false);
    const [popupData, setPopupData] = useState({});

    useEffect(() => {
        // Fetch data from the 'your_table_name' table
        const fetchData = async () => {

            let eventData = await supabase.from('event').select('*');
            if (eventData.error) {
                console.error('Error fetching data:', error.message);
            } else {
                setEvents(eventData.data);
            }

            let categoryData = await supabase.from('event_category').select('*');
            if (categoryData.error) {
                console.error('Error fetching data:', error.message);
            } else {
                setEventcategory(categoryData.data);
            }
        };

        fetchData();
    }, []); // Run once on component mount

    const openPopUp = (data) => {
        setOpenEventPopup(true);
        setPopupData(data);
    }

    const closePopup = function () {
        setOpenEventPopup(false)
    }

    return (
        <>
            {/* <Container maxWidth > */}
            <Box sx={{ color: 'white', padding: '10px', bgcolor: '#191A1A' }}>
                <EventDetailPopup eventData={popupData} openEventPopup={openEventPopup} closePopup={closePopup} />
                {
                    eventcategory.map((v, i) => (
                        <div className={style.eventCategoryContainer} >
                            <Typography variant="h5" gutterBottom sx={{ marginLeft: '38px' }}>
                                {v.name} Events
                            </Typography>
                            <div className={style.eventImageContainer}>
                                <IconButton aria-label="delete" size="large"
                                    className={style.eventImageContainerLeftBtn}
                                    sx={{
                                        color: 'white',
                                        borderRadius: 0,
                                        width: '7px'
                                    }}>
                                    <KeyboardArrowLeftSharpIcon fontSize="inherit" />
                                </IconButton>
                                {
                                    events.map((ev, ei) => (
                                        ev.event_category_id == v.category_id ?
                                            <Button className={style.eventPoster} onClick={(e) => openPopUp(ev)}>
                                                <CardMedia
                                                    sx={{
                                                        height: '100%',
                                                        width: '100%'
                                                    }}
                                                    component="img"
                                                    image={ev.event_poster}
                                                    alt="Live from space album cover"
                                                />
                                            </Button>
                                            : null
                                        //     < Button className = { style.eventPoster } >
                                        //     <CardMedia
                                        //         sx={{
                                        //             height: '100%',
                                        //             width: '100%'
                                        //         }}
                                        //         component="img"
                                        //         image={ev.event_poster}
                                        //         alt="Live from space album cover"
                                        //     />
                                        // </Button>
                                    ))
                                }
                                <IconButton aria-label="delete" size="large"
                                    className={style.eventImageContainerRightBtn}
                                    sx={{
                                        color: 'white',
                                        borderRadius: 0,
                                        width: '7px',
                                        marginRight: '0px',
                                        position: 'absolute',
                                        right: '0%',
                                        height: '100%'
                                    }}>
                                    <ChevronRightIcon fontSize="inherit" />
                                </IconButton>
                            </div>
                        </div>
                    ))
                }
            </Box >
            {/* </Container> */}
        </>
    )
}

function EventDetailPopup(props) {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClose = () => {
        props.closePopup();
    };

    return (
        <>
            <Dialog
                fullScreen={fullScreen}
                open={props.openEventPopup}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <Card>
                    <CardMedia
                        component="img"
                        height="350"
                        image={props.eventData.event_poster}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.eventData.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Organizer - {props.eventData.organizer}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Event location - {props.eventData.location}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Event Timing - {new Date(props.eventData.start_time).toUTCString()} to  {new Date(props.eventData.end_time).toUTCString()}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button color='warning' onClick={handleClose}>close</Button>
                    </CardActions>
                </Card>
            </Dialog>
        </>
    )
}