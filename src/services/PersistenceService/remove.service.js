import storage from '../../infrastructure/storage/storage';

const remove = (key) => {
  storage.remove(key);
};

export default remove;
