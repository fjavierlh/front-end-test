import storage from '../../infrastructure/storage/storage';

const persist = (key, value) => {
  storage.set(key, value);
};

export default persist;
