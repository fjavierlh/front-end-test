import clearStorage from "./clearStorage.service";
import getItem from "./getIem.service";
import removeItem from "./removeItem.service";
import setItem from "./setItem.service";


const StorageService = {
    setItem: setItem,
    getItem: getItem,
    removeItem: removeItem,
    clearStorage: clearStorage
};

export default StorageService;
