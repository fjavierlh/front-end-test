const storage = {
  get: (key) => {
    return localStorage.getItem(key);
  },

  set: (key, value) => {
    const now = new Date();

    const item = {
      value,
      expires: now.getTime() + 60 * 60 * 1000,
    };
    localStorage.setItem(key, item);
  },

  remove: (key) => {
    localStorage.removeItem(key);
  },

  clear: () => {
    localStorage.clear();
  },
};

export default storage;
