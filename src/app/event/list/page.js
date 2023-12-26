'use client';

import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase URL and API key
const supabaseUrl = "https://gonsjfvfvuytjgpfpbmt.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvbnNqZnZmdnV5dGpncGZwYm10Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMzE0MzkzNCwiZXhwIjoyMDE4NzE5OTM0fQ.gqQDcxdanrbtHLFs6z73fkOx86OUr7sJtU6zz6H_7Dw";

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

import { useState, useEffect } from 'react';

// MUI
import { Container, Box, Typography, CardMedia } from '@mui/material';

// Styles
import style from '../../../../styles/event.module.css'

export default function ListEvents() {

    const [events, setEvents] = useState([]);
    const [eventcategory, setEventcategory] = useState([]);

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

    return (
        <>
            {/* <Container maxWidth > */}
                <Box sx={{ color: 'white', padding: '10px', bgcolor: 'black' }}>
                    {
                        eventcategory.map((v, i) => (
                            <div className={style.eventCategoryContainer} >
                                <Typography variant="h5" gutterBottom sx={{ marginLeft: '7px' }}>
                                    {v.name} Events
                                </Typography>
                                <div className={style.eventImageContainer}>
                                    {
                                        events.map((ev, ei) => (
                                            // ev.event_category_id == v.category_id ? <CardMedia
                                            //     className={style.eventPoster}
                                            //     component="img"
                                            //     image={ev.event_poster}
                                            //     alt="Live from space album cover"
                                            // /> : null
                                            <CardMedia
                                                className={style.eventPoster}
                                                component="img"
                                                image={ev.event_poster}
                                                alt="Live from space album cover"
                                            /> 
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </Box>
            {/* </Container> */}
        </>
    )
}