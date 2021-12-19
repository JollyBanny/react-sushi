import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchSushi = (categoryBy) => (dispatch) => {
  dispatch({
    type: "SET_LOADED",
    payload: false,
  });
  axios
    .get(`http://localhost:3002/foods?category=${categoryBy.link}`)
    .then(({ data }) => {
      dispatch(setSushi(data));
    });
};

export const fetchPromotion = () => (dispatch) => {
  dispatch({
    type: "SET_LOADED",
    payload: false,
  });
  axios.get(`http://localhost:3002/foods?superPrice!=null`).then(({ data }) => {
    dispatch(setSushi(data));
  });
};

export const setSushi = (items) => ({
  type: "SET_SUSHI",
  payload: items,
});
