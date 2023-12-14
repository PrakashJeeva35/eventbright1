'use client';

import React from "react";
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
import { Typography, Container, Select, Menu, MenuItem } from '@mui/material';

function EventDetail() {

  return (
    <Container maxWidth='md' sx={{backgroundColor:'white', display: 'grid', justifyContent: 'center', padding: '10px', marginBottom: '10px'}}>
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
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
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
          <EventDetail />
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Additional Info" icon="ti-settings">
          <h3>Second Tab</h3>
          <p>Some content for the second tab</p>
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Last step" icon="ti-check">
          <h3>Last Tab</h3>
          <p>Some content for the last tab</p>
        </FormWizard.TabContent>
      </FormWizard>
      {/* add style */}
      <style>{`
        @import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
      `}</style>
    </Container>
  );
}