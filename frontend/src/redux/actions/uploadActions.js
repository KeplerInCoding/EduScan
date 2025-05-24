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

    const response = await axios.post('http://localhost:5000/api/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    // Dispatch success with response data
    dispatch({
      type: UPLOAD_SUCCESS,
      payload: response.data, // Pass dummy response to the reducer
    });

    // console.log('Returning dummy response in uploadActions:', response.data);
    // Return the response to the caller
    return { success: true, message: response.data.message, data: response.data.data };

  } catch (error) {
    dispatch({
      type: UPLOAD_FAILURE,
      payload: error.response?.data?.message || 'Error uploading file',
    });
    console.error('Error processing file (dummy):', error);
    // Return the error to the caller
    return { success: false, message: error.response?.data?.message || 'Error uploading file' };
  }
};
