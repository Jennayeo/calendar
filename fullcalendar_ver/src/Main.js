import React, { useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import {useState, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCalendarFB, getCalendarFB, addCalendar, getCalendar} from "./redux/modules/calendar"
import './Main.css';

const Main = (props) => {
  const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(getCalendarFB());
    },[]);

  const event_list = useSelector((state) => state.calendar.schedule);

  let calendar_list = [];
  calendar_list = event_list.map((r, idx) => {
    return {title: r.title, start: r.date}
  })

    return (
      <div>
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events = {calendar_list}
        height = '100vh'
        />
        <div className="icon">
          <Fab color="secondary" aria-label="edit" onClick={() => {
          props.history.push('/addplan')
          }}>
          <EditIcon />
          </Fab>
        </div>
        <button onClick={() => {props.history.push('/modal')}}>modal</button>
      </div>

    );
};

export default Main;