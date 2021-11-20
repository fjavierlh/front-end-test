import storage from '../../infrastructure/storage/storage';

const getItem = (key) => {
  return storage.get(key);
};

export default getItem;