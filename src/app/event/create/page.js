'use client';

import React from "react";
import { useState } from 'react'
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";

//Css
import styles from '../../../../styles/Responsive.module.css';

//MUI
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Typography, Container, Select, Menu, MenuItem, Button } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

function EventDetailForm1() {

  return (
    <Container maxWidth='md' sx={{ backgroundColor: 'white', display: 'grid', justifyContent: 'center', padding: '15px', marginBottom: '10px' }}>
      <Box className={styles.eventCreateForm1}>
        <Typography variant="h4" position='-moz-initial' className={styles.eventCreateForm1Header}>
          Basic Info
        </Typography>
        <Typography variant="body2" gutterBottom className={styles.eventCreateForm1Cap}>
          Name your event and tell event-goers why they should come. Add details that highlight what makes it unique.
        </Typography>
        <TextField className={styles.eventCreateForm1Inputs} fullWidth label="Event title *" id="fullWidth" />
        <TextField className={styles.eventCreateForm1Inputs} fullWidth label="Organizer *" id="fullWidth" />
        <Typography className={styles.eventCreateForm1Cap} variant="caption">
          This profile describes a unique organizer and shows all of the events on one page.
        </Typography>
        <div className={styles.eventCreateForm1Select}>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Type"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Category"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
        <Typography variant="h5" position='-moz-initial' className={styles.eventCreateForm1Header}>
          Tags
        </Typography>
        <Typography variant="body2" gutterBottom className={styles.eventCreateForm1Cap}>
          Improve discoverability of your event by adding tags relevant to the subject matter.
        </Typography>
        <TextField className={styles.eventCreateForm1Inputs} fullWidth label="Please add a tag" id="fullWidth" />
      </Box>
    </Container>
  )
}

function EventDetailForm2() {

  const [showVenue, setShowVenue] = useState(true);
  const [showOnlineEvent, setShowOnlineEvent] = useState(false);

  const setShower = (e) => {
    if (e.toLowerCase() == 'venue') {
      setShowVenue(true);
      setShowOnlineEvent(false);
    } else if (e.toLowerCase() == 'online event') {
      setShowVenue(false);
      setShowOnlineEvent(true);
    } else {
      setShowVenue(false);
      setShowOnlineEvent(false);
    }

  }

  return (
    <Container maxWidth='md' sx={{ backgroundColor: 'white', display: 'grid', justifyContent: 'center', padding: '15px', marginBottom: '10px' }}>
      <Box className={styles.eventCreateForm1}>
        <Typography variant="h4" position='-moz-initial' className={styles.eventCreateForm1Header}>
          Location
        </Typography>
        <Typography variant="body2" gutterBottom className={styles.eventCreateForm1Cap}>
          Help people in the area discover your event and let attendees know where to show up.
        </Typography>
        <div className={styles.eventCreateForm2GroupBtn}>
          <Button variant="outlined" onClick={() => setShower('Venue')}>Venue</Button>
          <Button variant="outlined" onClick={() => setShower('Online event')}>Online event</Button>
          <Button variant="outlined" onClick={() => setShower('To be announced')}>To be announced</Button>
        </div>

        {
          showVenue ?
            <div>
              <Typography variant="body2" gutterBottom className={styles.eventCreateForm1Cap}>
                Venue location
              </Typography>
              <TextField className={styles.eventCreateForm1Inputs} fullWidth label="Search for venue" id="fullWidth" />
            </div>
            :
            null
        }

        {
          showOnlineEvent ?
            <Typography variant="body2" gutterBottom className={styles.eventCreateForm1Cap}>
              Online events have unique event pages where you can add links to livestreams and more
            </Typography>
            : null
        }


      </Box>
    </Container>
  )
}

function EventDetailForm3() {

  const [showVenue, setShowVenue] = useState(true);
  const [showOnlineEvent, setShowOnlineEvent] = useState(false);

  const setShower = (e) => {
    if (e.toLowerCase() == 'venue') {
      setShowVenue(true);
      setShowOnlineEvent(false);
    } else if (e.toLowerCase() == 'online event') {
      setShowVenue(false);
      setShowOnlineEvent(true);
    } else {
      setShowVenue(false);
      setShowOnlineEvent(false);
    }

  }

  return (
    <Container maxWidth='md' sx={{ backgroundColor: 'white', display: 'grid', justifyContent: 'center', padding: '15px', marginBottom: '10px' }}>
      <Box className={styles.eventCreateForm1}>
        <Typography variant="h4" position='-moz-initial' className={styles.eventCreateForm1Header}>
          Date and time
        </Typography>
        <Typography variant="body2" gutterBottom className={styles.eventCreateForm1Cap}>
          Tell event-goers when your event starts and ends so they can make plans to attend.
        </Typography>
        <div className={styles.eventCreateForm2GroupBtn}>
          <Button variant="outlined" onClick={() => setShower('Venue')}>Single event</Button>
        </div>

        <LocalizationProvider dateAdapter={AdapterDayjs} >
          <DemoContainer components={['DateTimePicker']}>
            <DateTimePicker label="Basic date time picker" className={styles.eventCreateForm1Inputs}/>
          </DemoContainer>
        </LocalizationProvider>

      </Box>
    </Container>
  )
}

export default function simple() {
  const handleComplete = () => {
    console.log("Form completed!");
    // Handle form completion logic here
  };
  const tabChanged = ({
    prevIndex,
    nextIndex,
  }) => {
    console.log("prevIndex", prevIndex);
    console.log("nextIndex", nextIndex);
  };

  return (
    <Container maxWidth="lg">
      <FormWizard
        onComplete={handleComplete}
        onTabChange={tabChanged}
      >
        <FormWizard.TabContent title="Event Details" icon="ti-user">
          <EventDetailForm1 />
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Additional Info" icon="ti-settings">
          <EventDetailForm2 />
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Last step" icon="ti-check">
          <EventDetailForm3 />
        </FormWizard.TabContent>
      </FormWizard>
      {/* add style */}
      <style>{`
        @import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
      `}</style>
    </Container>
  );
}