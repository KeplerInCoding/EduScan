// /redux/reducers/tableReducer.js
import { 
    FETCH_TABLE_DATA, 
    UPDATE_TABLE_ROW, 
    DELETE_TABLE_ROW, 
    ADD_TABLE_ROW 
  } from '../constants/actionTypes';
  
  const initialState = {
    tableData: [],
    loading: true,
  };
  
  export const tableReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TABLE_DATA:
        return {
          ...state,
          tableData: action.payload,
          loading: false,
        };
  
      case UPDATE_TABLE_ROW:
        return {
          ...state,
          tableData: state.tableData.map((row) => 
            row.id === action.payload.id ? action.payload : row
          ),
        };
  
      case DELETE_TABLE_ROW:
        return {
          ...state,
          tableData: state.tableData.filter((row) => row.id !== action.payload),
        };
  
      case ADD_TABLE_ROW:
        return {
          ...state,
          tableData: [...state.tableData, action.payload],
        };
  
      default:
        return state;
    }
  };
  