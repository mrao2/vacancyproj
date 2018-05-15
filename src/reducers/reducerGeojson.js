import {
  REQUEST_GEODATA,
  RECEIVE_GEODATA,
} from '../actions';

const initialState = {
  geojson
}

const records = (state = initialState, action) => {
  switch(action.type) {
    case REQUEST_GEODATA:
      return(
        ...state
      );

    case RECEIVE_GEODATA:
      return(
        ...state,
        ...action.response
      );
  }
}
