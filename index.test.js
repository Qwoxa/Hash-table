const HashTable = require('./index');

describe('HashTable', () => {
  let ht;
  beforeEach(() => {
    ht = new HashTable(13);
  });

  afterEach(() => {
    ht = null;
  });

  it('Adds and gets elements', () => {
    const pair1 = ['testKey', 'testValue'];
    const pair2 = ['testKey1', 'testValue1'];
    
    expect(ht.setElement(...pair1)).toEqual(pair1);
    expect(ht.setElement(...pair2)).toEqual(pair2);
    
    expect(ht.getElement(pair1[0])).toBe(pair1[1]);
    expect(ht.getElement(pair2[0])).toBe(pair2[1]);
  });

  it('Changes values when calling setElement second time', () => {
    const pair = ['testKey', 'testValue'];
    const newPair = ['testKey', 'newValue'];

    ht.setElement(...pair);
    ht.setElement(...newPair);

    expect(ht.getElement(pair[0])).toBe(newPair[1]);
  });

  it('If index exists, pushes new element to array', () => {
    // test1 and test14 have the same hash with the table size of 13
    const pair1 = ['test1', 'testValue'];
    const pair2 = ['test14', 'testValue14'];

    ht.setElement(...pair1);
    ht.setElement(...pair2);

    expect(ht.getElement(pair1[0])).toBe(pair1[1]);
    expect(ht.getElement(pair2[0])).toBe(pair2[1]);
  });

  it('Changes the correct value, if the index has multiple elements', () => {
    const pair1 = ['test1', 'testValue'];
    const pair2 = ['test14', 'testValue14'];
    const newValue = 'testNewValue';

    ht.setElement(...pair1);
    ht.setElement(...pair2);
    ht.setElement(pair2[0], newValue);

    expect(ht.getElement(pair2[0])).toBe(newValue);
  });
});