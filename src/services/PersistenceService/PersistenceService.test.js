import PersistenceService from '.';
import storage from '../../infrastructure/storage/storage';

jest.mock('../../infrastructure/storage/storage');
describe('PersistenceService', () => {
  const key = 'key';
  const value = 'value';

  test('should persist data', () => {
    storage.set.mockImplementation(() => {});
    PersistenceService.persist(key, value);
    expect(storage.set).toHaveBeenCalledWith(key, value);
  });

  test('should retrieve data', () => {
    storage.set.mockImplementation(() => {});
    storage.get.mockImplementation(() => value);

    PersistenceService.persist(key, value);

    const expectedValue = PersistenceService.get(key);
    expect(storage.get).toHaveBeenCalledWith(key);
    expect(expectedValue).toEqual(value);
  });

  test('should remove data', () => {
    storage.set.mockImplementation(() => {});
    storage.remove.mockImplementation(() => {});
    storage.get.mockImplementation(() => null);

    PersistenceService.remove(key);
    expect(storage.remove).toHaveBeenCalledWith(key);
  });

  test('should clear all data', () => {
    storage.set.mockImplementation(() => {});
    storage.remove.mockImplementation(() => {});

    PersistenceService.clear();
    expect(storage.clear).toHaveBeenCalled();
  });
});
