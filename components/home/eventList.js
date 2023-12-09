import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// MUI
import AddLocationAltRoundedIcon from '@mui/icons-material/AddLocationAltRounded';

export default function EventLister() {
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl variant="standard" sx={{ m: 1 }} fullWidth>
                <InputLabel id="demo-simple-select-standard-label">Select City</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Select City"
                >
                    <MenuItem value={10}>
                        <ListItemIcon>
                            <AddLocationAltRoundedIcon />
                        </ListItemIcon>
                        <span>Use Current Location</span>
                    </MenuItem>
                    <MenuItem value={20}>Chennai</MenuItem>
                    <MenuItem value={30}>Bangalore</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
