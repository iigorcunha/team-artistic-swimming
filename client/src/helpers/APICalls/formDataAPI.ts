import axios from 'axios';

const formDataAPI = async (file: any) => {
  const formData = new FormData();
  formData.append('image', file);
  try {
    //axios.defaults.withCredentials = true;
    const res = await axios.post('http://localhost:3001/upload-image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*',
      },
    });
    return res.data;
  } catch (err) {
    if (err.response.status === 500) {
      console.log('there was a problem with the server');
    }
    console.log(err.response.data.msg);
  }
};
export default formDataAPI;

/*
import { FetchOptionsUploadFile } from '../../interface/FetchOptions';

const formDataAPI = async (file: any) => {
  const formData = new FormData();
  formData.append('image', file, '[PROXY]');
  const myHeaders = new Headers();
  myHeaders.append(
    'Cookie',
    'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMWVjODRjYWE3ZmYxYTg1OTA1MTM2NCIsImlhdCI6MTYyOTQwNzMwOSwiZXhwIjoxNjMwMDEyMTA5fQ.3gSMMA5pW73V_NjNNV3RE0YTDtiFFDywt6RqPZbtQKY',
  );
  myHeaders.append('Access-Control-Allow-Origin', 'http://localhost:3001/upload-image');
  myHeaders.append('Access-Control-Allow-Credentials', 'true');

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      Cookie:
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMWVjODRjYWE3ZmYxYTg1OTA1MTM2NCIsImlhdCI6MTYyOTQwNzMwOSwiZXhwIjoxNjMwMDEyMTA5fQ.3gSMMA5pW73V_NjNNV3RE0YTDtiFFDywt6RqPZbtQKY',
    },
    body: formData,
    credentials: 'include',
  };
  const fetchOptions: FetchOptionsUploadFile = {
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data', 'Access-Control-Allow-Origin': '*' },
    body: formData,
    mode: 'no-cors',
    credentials: 'include',
  };

  try {
    const res = await fetch('http://localhost:3001/upload-image', fetchOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
    //return res;
  } catch (err) {
    console.log('there was a problem with the server');
  }
};

export default formDataAPI;
*/
