import { sortedKeys } from './object-keys-entries.js';

test('it capitalizes the keys', () => {
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
