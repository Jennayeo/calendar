import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

const Calendar = (props) => {

    return (
        <div>
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        // weekends={false}
        events={[
            { title: 'event 1', date: '2021-04-01' },
            { title: 'event 2', date: '2021-04-02' }
        ]}
        />
        </div>

    );
    };


export default Calendar;