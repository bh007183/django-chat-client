import { useReducer } from 'react';
import { ERROR_FETCH,  FINISH_FETCH,  LOGIN_USER, START_FETCH } from './actions';



export const reducer = (state, action) => {
  switch (action.type) {
    case START_FETCH:
      return{
        ...state,
        loading: true
      }

    case FINISH_FETCH:
      return {
        ...state,
        success: { ...action.data},
        loading: ""
      };
    case ERROR_FETCH:
      return {
        ...state,
        error: action.data,
        loading: ""
      };
   
    default:
      return {...state}
  }
};

export const asyncActions = {
 
    FETCH: ({ dispatch, getState, signal }) => async (action) => {
         dispatch({ type: START_FETCH});
      // try {
        await fetch(action.myRequest).then(res => {
          if (!res.ok) { 
            res.json().then(data => {
              dispatch({ type: ERROR_FETCH, data})
            })
            return null;
          } 
          return res.json()
        }).then(data => {
          dispatch({ type: FINISH_FETCH, data });
        }).catch(err => {
         console.log("catch")
          dispatch({ type: ERROR_FETCH, err})
        });
       
    },
  };
