import axios from 'axios';
import * as baseUrl from './config';

export function getData(email) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: baseUrl.getUserData,
      data: {
        email_id: email,
      },
    }).then((data) => {
      console.log(data);
      resolve(data);
    }, (error) => {
      console.log(error);
      reject(error);
    });
  });
}

export function saveDevice(email, deviceId, token) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: baseUrl.saveDeviceData,
      data: {
        email_id: email,
        device_id: deviceId,
        token,
      },
    }).then((data) => {
      resolve(data);
    }, (error) => {
      console.log(error);
      reject(error);
    });
  });
}