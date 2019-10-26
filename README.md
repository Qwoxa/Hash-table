## Simple hash structure

# Example
```js
// create instance with the size of 13
const ht = new HashTable(13);

// set value of name to be 'Nick'
ht.setElement('name', 'Nick'); // ['name', 'Nick']

// get the value of name
ht.getElement('name'); // 'Nick'

// change the value of name
ht.setElement('name', 'Jogn'); // ['name', 'John']
```