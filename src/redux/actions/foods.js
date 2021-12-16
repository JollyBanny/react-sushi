import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchSushi = (categoryBy) => (dispatch) => {
  axios
    .get(`http://localhost:3002/foods?category=${categoryBy.link}`)
    .then(({ data }) => {
      dispatch(setSushi(data));
    });
};

export const setSushi = (items) => ({
  type: "SET_SUSHI",
  payload: items,
});
