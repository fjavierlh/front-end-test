import storage from '../../infrastructure/storage/storage';

const get = (key) => {
  return storage.get(key);
};

export default get;