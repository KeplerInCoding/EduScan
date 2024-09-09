// /redux/reducers/uploadReducer.js
import { 
    UPLOAD_IMAGE, 
    UPLOAD_SUCCESS, 
    UPLOAD_FAILURE 
  } from '../constants/actionTypes';
  
  const initialState = {
    uploadedImage: null,
    loading: false,
    error: null,
  };
  
  export const uploadReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPLOAD_IMAGE:
        return { ...state, loading: true };
  
      case UPLOAD_SUCCESS:
        return { ...state, loading: false, uploadedImage: action.payload };
  
      case UPLOAD_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  