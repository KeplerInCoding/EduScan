import { 
    FETCH_TABLE_DATA, 
    UPDATE_TABLE_ROW, 
    DELETE_TABLE_ROW, 
    ADD_TABLE_ROW 
  } from '../constants/actionTypes';
  import axios from 'axios';
  
  // Action to fetch table data from backend (ML model output)
  export const fetchTableData = () => async (dispatch) => {
    try {
      const { data } = await axios.get('/api/table');
      dispatch({ type: FETCH_TABLE_DATA, payload: data });
    } catch (error) {
      console.error('Error fetching table data:', error);
    }
  };
  
  // Action to update a specific row in the table
  export const updateTableRow = (rowId, updatedData) => async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/table/${rowId}`, updatedData);
      dispatch({ type: UPDATE_TABLE_ROW, payload: data });
    } catch (error) {
      console.error('Error updating table row:', error);
    }
  };
  
  // Action to delete a specific row
  export const deleteTableRow = (rowId) => async (dispatch) => {
    try {
      await axios.delete(`/api/table/${rowId}`);
      dispatch({ type: DELETE_TABLE_ROW, payload: rowId });
    } catch (error) {
      console.error('Error deleting table row:', error);
    }
  };
  
  // Action to add a new row
  export const addTableRow = (newRow) => async (dispatch) => {
    try {
      const { data } = await axios.post('/api/table', newRow);
      dispatch({ type: ADD_TABLE_ROW, payload: data });
    } catch (error) {
      console.error('Error adding new row:', error);
    }
  };
  