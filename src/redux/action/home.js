import {showMessage} from '../../utils';

const {default: Axios} = require('axios');
const {API_HOST} = require('../../config');

export const getProductData = () => (dispatch) => {
  Axios.get(`${API_HOST.url}/product`)
    .then((res) => {
      dispatch({type: 'SET_PRODUCT', value: res.data.data.data});
    })
    .catch((err) => {
      showMessage(
        `${err?.response?.data?.message} on PRODUCT API` ||
          'Terjadi kesalahan di API Product',
      );
    });
};

export const getProductDataByTypes = (types) => (dispatch) => {
  Axios.get(`${API_HOST.url}/product/?types=${types}`)
    .then((res) => {
      if (types === 'coffee') {
        dispatch({type: 'SET_COFFEE', value: res.data.data.data});
      }
      if (types === 'non_coffee') {
        dispatch({type: 'SET_NON_COFFEE', value: res.data.data.data});
      }
      if (types === 'food') {
        dispatch({type: 'SET_FOOD', value: res.data.data.data});
      }
      if (types === 'beans') {
        dispatch({type: 'SET_BEANS', value: res.data.data.data});
      }
    })
    .catch((err) => {
      showMessage(
        `${err?.response?.data?.message} on Food By Type API` ||
          'Terjadi kesalahan di API Food By Type',
      );
    });
};


// const {default:Axios} = require('axios');
// const {API_HOST}= require('../../config');

// export const getProductData = () => (dispatch) => {
//   Axios.get(`${API_HOST.url}/product`)
//     .then((res) => {
//         console.log('res produtc: ', res.data.data.data);
//         dispatch({type: 'SET_PRODUCT', value: res.data.data.data})
//     })
//     .catch((err) => {
//         console.log('err: ', err);
//     });
// };
