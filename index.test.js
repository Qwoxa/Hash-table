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
});