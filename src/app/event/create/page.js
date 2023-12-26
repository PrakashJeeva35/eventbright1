'use client';

// React
import React from "react";
import { useEffect, useState } from 'react';
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import { useRouter } from 'next/navigation';

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
import Alert from '@mui/material/Alert';


// supabase
import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase URL and API key
const supabaseUrl = "https://gonsjfvfvuytjgpfpbmt.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvbnNqZnZmdnV5dGpncGZwYm10Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMzE0MzkzNCwiZXhwIjoyMDE4NzE5OTM0fQ.gqQDcxdanrbtHLFs6z73fkOx86OUr7sJtU6zz6H_7Dw";

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);


function EventDetailForm1(props) {

  const [eventTypes, setEventTypes] = useState([]);
  const [eventCategory, setEventCategory] = useState([]);

  useEffect(() => {
    const fetchData = async (table) => {
      const { data, error } = await supabase
        .from(table)
        .select('*');

      if (error) {
        console.error('Error fetching data:', error.message);
      } else {
        if (table == 'event_type') setEventTypes(data)
        else setEventCategory(data)
      }
    };

    fetchData('event_type');
    fetchData('event_category');

  }, [])

  return (
    <>
      <Container maxWidth='md' sx={{ backgroundColor: 'white', display: 'grid', justifyContent: 'center', padding: '15px', marginBottom: '10px' }}>
        <FormControl className={styles.eventCreateForm1} onChange={props.getEventData}>
          <Typography variant="h4" position='-moz-initial' className={styles.eventCreateForm1Header}>
            Basic Info
          </Typography>

          <Typography variant="body2" gutterBottom className={styles.eventCreateForm1Cap}>
            Name your event and tell event-goers why they should come. Add details that highlight what makes it unique.
          </Typography>

          <TextField className={styles.eventCreateForm1Inputs} fullWidth label="Event title *" id="eventTitle" />
          <TextField className={styles.eventCreateForm1Inputs} fullWidth label="Organizer *" id="eventOrganizer" />
          <TextField className={styles.eventCreateForm1Inputs} fullWidth type="file" placeholder="Upload Event Poster Here" id="eventPoster" />

          <Typography className={styles.eventCreateForm1Cap} variant="caption">
            This profile describes a unique organizer and shows all of the events on one page.
          </Typography>

          <div className={styles.eventCreateForm1Select}>

            <Select
              id="event_type"
              label="Type"
              // placeholder="type"
              onChange={(e) => props.getEventData({ id: "event_type", value: e.target.value })}
            >
              {
                eventTypes.map((v, i) => (
                  <MenuItem key={v.event_type_id} value={v.event_type_id}>{v.name}</MenuItem>
                ))
              }
            </Select>

            <Select
              id="event_category"
              label="Category"
              // placeholder="category"
              onChange={(e) => props.getEventData({ id: "event_category", value: e.target.value })}
            >
              {
                eventCategory.map((v, i) => (
                  <MenuItem key={v.category_id} value={v.category_id}>{v.name}</MenuItem>
                ))
              }
            </Select>

          </div>

          <Typography variant="h5" position='-moz-initial' className={styles.eventCreateForm1Header}>
            Tags
          </Typography>
          <Typography variant="body2" gutterBottom className={styles.eventCreateForm1Cap}>
            Improve discoverability of your event by adding tags relevant to the subject matter.
          </Typography>
          <TextField className={styles.eventCreateForm1Inputs} fullWidth label="Please add a tag" id="event_tag" />
        </FormControl>
      </Container>
    </>
  )
}

function EventDetailForm2(props) {

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
      <FormControl className={styles.eventCreateForm1} onChange={props.getEventData}>
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
              <TextField className={styles.eventCreateForm1Inputs} fullWidth label="Search for venue" id="event_location" />
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


      </FormControl>
    </Container>
  )
}

function EventDetailForm3(props) {

  return (
    <Container maxWidth='md' sx={{ backgroundColor: 'white', display: 'grid', justifyContent: 'center', padding: '15px', marginBottom: '10px' }}>
      <FormControl className={styles.eventCreateForm1} onChange={props.getEventData}>
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
          <DemoContainer components={['DateTimePicker']} >
            <DateTimePicker label="Event start time" className={styles.eventCreateForm1Inputs} id="event_start_time" onChange={(e) => props.getEventData({ id: "event_start_time", value: new Date(e.$d).toUTCString() })} />
          </DemoContainer>
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDayjs} >
          <DemoContainer components={['DateTimePicker']}>
            <DateTimePicker label="Event end time" className={styles.eventCreateForm1Inputs} id="event_end_time" onChange={(e) => props.getEventData({ id: "event_end_time", value: new Date(e.$d).toUTCString() })} />
          </DemoContainer>
        </LocalizationProvider>

      </FormControl>
    </Container>
  )
}

export default function simple() {

  const router = useRouter();

  const [showEventAlert, setShowEventAlert] = useState('');

  const [formValue, setFormValue] = useState({
    name: null,
    organizer: null,
    event_type_id: null,
    event_category_id: null,
    tag: null,
    location: null,
    start_time: null,
    end_time: null,
    event_poster: null,
    // event_poster_name: null,
    // event_poster_fileType: null,
    event_poster_file: null
  });

  const handleComplete = async (e) => {

    let evntPosterUrl = null;
    const uploadPoster = await supabase.storage
      .from('EventPoster') // Replace with your actual storage bucket name
      .upload(`/Development/${formValue.event_poster_file.name}`, formValue.event_poster_file, {
        contentType: formValue.event_poster_file.type,
      });

    if (uploadPoster.error) {
      console.error('Error uploading file:', uploadPoster.error.message);
    } else {
      console.log('File uploaded successfully:', uploadPoster.data);
      //   {
      //     "path": "Development/music-event-crowd-entertainment.jpg",
      //     "id": "b1639df9-bfff-4935-9f6f-31cbf1281611",
      //     "fullPath": "EventPoster/Development/music-event-crowd-entertainment.jpg"
      // }

      // const { data } = await supabase
      //   .storage
      //   .from('EventPoster')
      //   .getPublicUrl(uploadPoster.data.path)
      evntPosterUrl = `https://gonsjfvfvuytjgpfpbmt.supabase.co/storage/v1/object/public/EventPoster/Development/${formValue.event_poster_file.name}`;
      // console.log('public url ', `https://gonsjfvfvuytjgpfpbmt.supabase.co/storage/v1/object/public/EventPoster/Development/${formValue.event_poster_file.name}`);
      // setFormValue({ ...formValue, event_poster: `https://gonsjfvfvuytjgpfpbmt.supabase.co/storage/v1/object/public/EventPoster/Development/${formValue.event_poster_file.name}` });
    }

    console.log('formValue ', formValue)
    let eventPayload = { ...formValue, event_poster: evntPosterUrl };
    delete eventPayload.event_poster_file;
    console.log('eventPayload ', eventPayload)
    const { data, error } = await supabase
      .from('event')
      .insert([eventPayload]);

    if (error) {
      console.error('Error fetching data:', error.message);
      setShowEventAlert('false')
    } else {
      setShowEventAlert('true')
      setTimeout(() => {
        router.push('/event/list')
      }, 3000);
      console.log('Event created ', data)
    }


    // Handle form completion logic here
  };
  const tabChanged = ({
    prevIndex,
    nextIndex,
  }) => {
    // console.log("prevIndex", prevIndex);
    // console.log("nextIndex", nextIndex);
  };

  const getEventData = async (e) => {
    if (e && e.target && e.target.id == 'eventTitle') setFormValue({ ...formValue, name: e.target.value })
    else if (e && e.target && e.target.id == 'eventOrganizer') setFormValue({ ...formValue, organizer: e.target.value })
    else if (e && e.id == 'event_type') setFormValue({ ...formValue, event_type_id: e.value })
    else if (e && e.id == 'event_category') setFormValue({ ...formValue, event_category_id: e.value })
    else if (e && e.target && e.target.id == 'event_tag') setFormValue({ ...formValue, tag: e.target.value })
    else if (e && e.target && e.target.id == 'event_location') setFormValue({ ...formValue, location: e.target.value })
    else if (e.id == 'event_start_time') setFormValue({ ...formValue, start_time: e.value })
    else if (e.id == 'event_end_time') setFormValue({ ...formValue, end_time: e.value })
    else if (e && e.target && e.target.id == 'eventPoster') {
      let file = e.target.files[0], base64 = null;
      // let filename = file.name;
      // const fileReader = new FileReader();
      // fileReader.readAsDataURL(file);

      // fileReader.onload = () => {
      //   base64 = fileReader.result;
      //   console.log('success base64  ', base64)
      //   setFormValue({ ...formValue, event_poster: base64, event_poster_name: filename, event_poster_fileType: file.type })
      // };

      // fileReader.onerror = (error) => {
      //   base64 = null;
      //   console.log('error base64  ', base64)
      // };
      setFormValue({ ...formValue, event_poster_file: file })
    }
  }

  return (
    <Container maxWidth="lg">
      {
        showEventAlert.length > 0 && showEventAlert == 'true' && <Alert severity="success">Event created...</Alert>
      }
      {
        showEventAlert.length > 0 && showEventAlert == 'false' && <Alert severity="error">Error while creating event...</Alert>
      }

      <FormWizard
        onComplete={handleComplete}
        onTabChange={tabChanged}
      >
        <FormWizard.TabContent title="Event Details" icon="ti-user">
          <EventDetailForm1 getEventData={getEventData} />
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Additional Info" icon="ti-settings">
          <EventDetailForm2 getEventData={getEventData} />
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Last step" icon="ti-check">
          <EventDetailForm3 getEventData={getEventData} />
        </FormWizard.TabContent>
      </FormWizard>
      {/* add style */}
      <style>{`
        @import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
      `}</style>
    </Container>
  );
}