import Axios from 'axios';
import {API_HOST} from '../../config';
import {getData} from '../../utils';

export const getOrders = () => (dispatch) => {
  getData('token').then((resToken) => {
    Axios.get(`${API_HOST.url}/transaction`, {
      headers: {
        Authorization: resToken.value,
      },
    })
      .then((res) => {
        console.log('get orders: ', res.data);
        dispatch({type: 'SET_ORDER', value: res.data.data.data});
      })
      .catch((err) => {
        console.log('err get error', err);
      });
  });
};
export const getInProgress = () => (dispatch) => {
  getData('token').then((resToken) => {
    console.log('token in progress : ', resToken.value);
    Axios.all([
      Axios.get(`${API_HOST.url}/transaction?status=PENDING`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${API_HOST.url}/transaction?status=SUCCESS`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${API_HOST.url}/transaction?status=ON_DELIVERY`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
    ])
      .then(
        Axios.spread((res1, res2, res3) => {
          console.log('get progress: ', res1.data);
          console.log('get progress: ', res2.data);
          console.log('get progress: ', res3.data);
          const pending = res1.data.data.data;
          const success = res2.data.data.data;
          const onDelivery = res3.data.data.data;
          dispatch({
            type: 'SET_IN_PROGRESS',
            value: [...pending, ...success, ...onDelivery],
          });
        }),
      )
      .catch((err) => {
        console.log('err get progress', err);
      });
  });
};

export const getPastOrders = () => (dispatch) => {
  getData('token').then((resToken) => {
    console.log('token in progress : ', resToken.value);
    Axios.all([
        Axios.get(`${API_HOST.url}/transaction?status=CANCELLED`, {
            headers: {
              Authorization: resToken.value,
            },
          }),
          Axios.get(`${API_HOST.url}/transaction?status=DELIVERED`, {
            headers: {
              Authorization: resToken.value,
            },
          })
    ])
    .then(
        Axios.spread((res1, res2, res3) => {
          console.log('get progress: ', res1.data);
          console.log('get progress: ', res2.data);
          const cancelled = res1.data.data.data;
          const delivered = res2.data.data.data;
          dispatch({
            type: 'SET_PAST_ORDERS',
            value: [...cancelled, ...delivered],
          });
        }),
      )
      .catch((err) => {
        console.log('err get progress', err);
      });
  });
};
