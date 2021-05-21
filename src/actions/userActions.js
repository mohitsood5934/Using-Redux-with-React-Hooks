import {
  USER_LIST_REQUEST,
  USER_LIST_FAILED,
  USER_LIST_SUCCESS,
} from "../constants/userConstants";
import axios from "axios";

export const fetchListOfUsers = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
      config
    );
    dispatch({ type: USER_LIST_SUCCESS, payload: response && response.data });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAILED,
      payload: "Error occurred while fetching list of users",
    });
  }
};
