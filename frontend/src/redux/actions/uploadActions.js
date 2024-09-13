import { 
  UPLOAD_IMAGE, 
  UPLOAD_SUCCESS, 
  UPLOAD_FAILURE 
} from '../constants/actionTypes';
import axios from 'axios';

// Action to upload an image (camera or file upload)
export const uploadImage = (file) => async (dispatch) => {
  try {
    dispatch({ type: UPLOAD_IMAGE });

    const formData = new FormData();
    formData.append('file', file);

    const { data } = await axios.post('/api/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    dispatch({ type: UPLOAD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPLOAD_FAILURE, payload: error.message });
    console.error('Error uploading image:', error);
  }
};
