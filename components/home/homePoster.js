import styles from '../../styles/Responsive.module.css'

//MUI
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import NightlifeRoundedIcon from '@mui/icons-material/NightlifeRounded';
import MasksRoundedIcon from '@mui/icons-material/MasksRounded';
import HolidayVillageRoundedIcon from '@mui/icons-material/HolidayVillageRounded';
import HealthAndSafetyRoundedIcon from '@mui/icons-material/HealthAndSafetyRounded';
import CasinoRoundedIcon from '@mui/icons-material/CasinoRounded';
import FastfoodRoundedIcon from '@mui/icons-material/FastfoodRounded';

import EventLister from './eventList';

import IconButton from '@mui/material/IconButton';

export default function HomePoster() {

    return (
        <>
            <div className={styles.poster}>
                <div className={styles.partyImage}>
                    <button class={styles.button51} role="button">Find Your Event</button>
                </div>
            </div>

            <div className={styles.selectEventTypeContainer}>
                <IconButton color="primary" size="large">
                    <MusicNoteRoundedIcon  fontSize="inherit"/>
                </IconButton>
                <IconButton color="primary" size="large">
                    <NightlifeRoundedIcon  />
                </IconButton>
                <IconButton color="primary" size="large">
                    <MasksRoundedIcon  />
                </IconButton>
                <IconButton color="primary" size="large">
                    <HolidayVillageRoundedIcon  />
                </IconButton>
                <IconButton color="primary" size="large">
                    <HealthAndSafetyRoundedIcon  />
                </IconButton>
                <IconButton color="primary" size="large">
                    <CasinoRoundedIcon  />
                </IconButton>
                <IconButton color="primary" size="large">
                    <FastfoodRoundedIcon  />
                </IconButton>
            </div>
            <div className={styles.eventChooseBar}>
                <div style={{marginLeft: '10px'}}>
                    <h2>Popular in</h2>
                </div>
                <EventLister/>
                <div>

                </div>
            </div>
        </>
    )
}