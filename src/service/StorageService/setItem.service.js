import storage from '../../infrastructure/storage/storage';

const setItem = (key, value) => {
  storage.set(key, value);
};

export default setItem;
