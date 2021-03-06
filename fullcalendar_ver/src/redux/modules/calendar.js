import {firestore} from "../../firebase";
const calendar_db = firestore.collection("schedule");

//Actions
const ADD_CALENDAR = "calendar/ADD_CALENDAR";
const GET_CALENDAR = "calendar/GET_CALENDAR";
// const UPDATE_CALENDAR = "calendar/UPDATE_CALENDAR";
// const DELETE_CALENDAR = "calendar/DELETE_CALENDAR";

const initialState = {
  schedule: []
}

//Action Creators
export const addCalendar = (schedule_info) => {
  return { type: ADD_CALENDAR, schedule_info};
}
export const getCalendar = (schedule_list) => {
  return { type: GET_CALENDAR, schedule_list}
}

// export const updateCalendar = (schedule_info) => {
//   return {type: UPDATE_CALENDAR, }
// }





//firebase/middleware
export const addCalendarFB = (schedule_info) => {
  return function (dispatch){
    let schedule = {
      date: schedule_info.date_time,
      title: schedule_info.todo
    };
    calendar_db.add(schedule).then((docRef) => {
      schedule = {...schedule, id: docRef.id }
      dispatch(addCalendar(schedule))
    })
  }
}
//모든 db 가져오기, 리듀서 연결해주기
export const getCalendarFB = (schedule_list) => {
  return function (dispatch){
    calendar_db.get().then((docs) => {
      let schedule_data = [];
      //하나하나 반복문으로 뽑아줌, 수정할 때 id가 필요하다 딕셔너리로 넣어주자
      docs.forEach((doc) => {
        schedule_data = [...schedule_data, {id: doc.id, ...doc.data()}]
      })
      console.log(schedule_data);
      dispatch(getCalendar(schedule_data))
    })
  }
}
//Reducer
export default function reducer(state = initialState, action ={}){
  switch (action.type){
    case "calendar/ADD_CALENDAR": {
      console.log(action.schedule_info);
      return {...state, schedule: [...state.schedule, action.schedule_info]}
    }
    case "calendar/GET_CALENDAR": {
      let schedule_data = [...state.schedule];
      console.log(schedule_data)
      // 리덕스 데이터 id값들을 schedule_ids 
      const schedule_ids = state.schedule.map((r, idx) => {
        return r.id;
      })
      // firebase에서 가져온 값 필터 
      action.schedule_list.filter((r, idx) => {
        if(schedule_ids.indexOf(r.id) === -1){
          schedule_data = [...schedule_data, r]
        }
      })
      return {...state, schedule: schedule_data}
    }
    default:
      return state
  }
}