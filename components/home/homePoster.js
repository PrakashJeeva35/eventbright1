import styles from '../../styles/Responsive.module.css'

//MUI
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import NightlifeOutlinedIcon from '@mui/icons-material/NightlifeOutlined';
import MasksOutlinedIcon from '@mui/icons-material/MasksOutlined';
import HolidayVillageOutlinedIcon from '@mui/icons-material/HolidayVillageOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import CasinoOutlinedIcon from '@mui/icons-material/CasinoOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';

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
                <IconButton color="primary" className={styles.iconsCon}>
                    <MusicNoteRoundedIcon className={styles.icons} />
                </IconButton>
                <IconButton color="primary" className={styles.iconsCon}>
                    <NightlifeOutlinedIcon className={styles.icons} />
                </IconButton>
                <IconButton color="primary" className={styles.iconsCon}>
                    <MasksOutlinedIcon className={styles.icons} />
                </IconButton>
                <IconButton color="primary" className={styles.iconsCon}>
                    <HolidayVillageOutlinedIcon className={styles.icons} />
                </IconButton>
                <IconButton color="primary" className={styles.iconsCon}>
                    <HealthAndSafetyOutlinedIcon className={styles.icons} />
                </IconButton>
                <IconButton color="primary" className={styles.iconsCon}>
                    <CasinoOutlinedIcon className={styles.icons} />
                </IconButton>
                <IconButton color="primary" className={styles.iconsCon}>
                    <FastfoodOutlinedIcon className={styles.icons} />
                </IconButton>
            </div>
            <div className={styles.eventChooseBar}>
                <div>
                    <h1>Popular in</h1>
                </div>
                <EventLister/>
                <div>

                </div>
            </div>
        </>
    )
}