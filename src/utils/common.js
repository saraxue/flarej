import fj from '../core';

//Get global unique id
export const guid = () => {
  return new Date().getTime() + Math.random().toFixed(6).substr(2);
};

export const capitalize = str => {
  return str[0].toUpperCase() + str.substr(1);
};

Object.assign(fj, {
  guid,
  capitalize
});