import storage from '../../infrastructure/storage/storage';

const removeItem = (key) => {
  storage.remove(key);
};

export default removeItem;
