const storage = {
  get: (key) => {
    const storedItem = localStorage.getItem(key);

    if (!storedItem) return null;

    const item = JSON.parse(storedItem);
    const now = new Date();

    if(now.getDate() > item.expires) {
      localStorage.removeItem(key);
      return null;
    }

    return item.value;
  },

  set: (key, value) => {
    const now = new Date();

    const item = {
      value,
      expires: now.getTime() + 60 * 60 * 1000,
    };
    localStorage.setItem(key, JSON.stringify(item));
  },

  remove: (key) => {
    localStorage.removeItem(key);
  },

  clear: () => {
    localStorage.clear();
  },
};

export default storage;
