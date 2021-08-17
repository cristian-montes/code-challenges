import { sortedKeys, getFilteredKey } from './object-keys-entries.js';

test('it sorts keys', () => {
  const dataObject = { 
            name: 'Spot', 
            age: 3, 
            isDog: true, 
            friends: ['Rover', 'Steve', 'Fluffy'] 
        }
; //arrange
  const output = sortedKeys(dataObject); //act
  expect(output).toEqual(['age', 'name', 'isDog', 'friends']); //assert
});

test('it gets the key age', () => {
    const dataObject = { 
        name: 'Angelina Jolie', 
        isSpot: false, 
        age: 80, 
    }
  ; //arrange
    const output = getFilteredKey(dataObject); //act
    expect(output).toEqual(['age']); //assert
  });
