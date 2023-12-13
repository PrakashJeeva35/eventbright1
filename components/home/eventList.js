import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// MUI
import AddLocationAltRoundedIcon from '@mui/icons-material/AddLocationAltRounded';

export default function EventLister() {

    const [currentLoc, setCurrentLoc] = useState("Use Current Location")
    const [eventSelectCode, setEventSelectCode] = useState(null)

    const getCurrentLocation = (e) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
            });
            console.log("Geolocation is not supported by this browser.", currentLoc);
            setCurrentLoc('Salem')
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    const handleChange = (event) => {
        if (event.target.value == 1) {
            setCurrentLoc('Salem')
            setEventSelectCode(event.target.value)
        }
        else{
            setCurrentLoc("Use Current Location")
            setEventSelectCode(event.target.value)
        }
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl variant="standard" sx={{ m: 1 }} fullWidth>
                <InputLabel id="demo-simple-select-standard-label">Select City</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    onChange={handleChange}
                    value={eventSelectCode}
                >
                    <MenuItem value={1} onClick={getCurrentLocation} >
                        <ListItemIcon>
                            {eventSelectCode == 1 ? <></> : <AddLocationAltRoundedIcon />}
                        </ListItemIcon>
                        {currentLoc}
                    </MenuItem>
                    <MenuItem value={2}>Online Events</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
