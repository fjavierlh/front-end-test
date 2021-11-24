import clear from "./clear.service";
import get from "./get.service";
import remove from "./remove.service";
import persist from "./persist.service";


const PersistenceService = {
  persist: persist,
  get: get,
  remove: remove,
  clear: clear,
};

export default PersistenceService;
