import { useReducer } from 'react';
import { ERROR_FETCH,  FINISH_FETCH,  LOGIN_USER, START_FETCH, FETCH_TYPE } from './actions';



export const reducer = (state, action) => {
  switch (action.type) {
    case START_FETCH:
      return;

    case FINISH_FETCH:
      return {
        ...state,
        success: { ...action.payload },
      };
    case ERROR_FETCH:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_TYPE:
      return{
        ...state,
        fetchType: action.payload
      }
    default:
      return state;
  }
};

export const asyncActions = {
 
    FETCH: ({ dispatch, getState, signal }) => async (action) => {
      dispatch({ type: START_FETCH });
      try {
        const response = await fetch(action.myRequest);
        if(response.ok){
            const data = await response.json();
            console.log(data)
            dispatch({ type: FINISH_FETCH, data });
        }else{
            dispatch({ type: ERROR_FETCH, response});
        }   
      } catch (error) {
          console.log(error)
        dispatch({ type: ERROR_FETCH, error });
      }
    },
  };
