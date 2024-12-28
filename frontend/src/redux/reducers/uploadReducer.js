import { 
  UPLOAD_IMAGE, 
  UPLOAD_SUCCESS, 
  UPLOAD_FAILURE 
} from '../constants/actionTypes';

const initialState = {
  uploadedImage: null,
  loading: false,
  error: null,
  message: null, // Added to store success or error message
};

export const uploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_IMAGE:
      return { ...state, loading: true, error: null, message: null };

    case UPLOAD_SUCCESS:
      return { 
        ...state, 
        loading: false, 
        uploadedImage: action.payload.image, // Assuming `image` is part of the payload
        message: action.payload.message, // Store success message
        error: null,
      };

    case UPLOAD_FAILURE:
      return { 
        ...state, 
        loading: false, 
        error: action.payload, // Store error message
        message: null, // Clear previous success message
      };

    default:
      return state;
  }
};
