import { useReducer } from 'react';
import { ERROR_FETCH,  FINISH_FETCH,  LOGIN_USER, START_FETCH } from './actions';



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
    default:
      return state;
  }
};

export const asyncActions = {
 
    FETCH: ({ dispatch, getState, signal }) => async (action) => {
        console.log(action)
      dispatch({ type: 'START_FETCH' });
      try {
        const response = await fetch(action.myRequest);
        console.log(response)
        if(response.ok){
            const data = await response.json();
            dispatch({ type: 'FINISH_FETCH', data });
        }else{
            dispatch({ type: 'ERROR_FETCH', response});
        }
        
      } catch (error) {
          console.log(error)
        dispatch({ type: 'ERROR_FETCH', error });
      }
    },
  };
