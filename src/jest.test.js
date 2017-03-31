import sum from './jest';

test('adds 1 + 2 to be 3', () => {
  expect(sum(1, 2)).toBe(3);
});

/*test('failed ! toBe use ====', () => {
  const data = {one: 1, two: 2};
  expect(data).toBe({one: 1, two: 2});
});*/

test('Success ! toEqual test recursive properties', () => {
  const data = {one: 1, two: 2};
  expect(data).toEqual({one: 1, two: 2});
});

// Truthiness
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

//Numbers
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  expect(value).not.toBe(0.32);    // It isn't! Because rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});

//Strings
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

// Arrays
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
});

// Exceptions
function compileAndroidCode() {
  throw 'you are using the wrong JDK';
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow();

  // You can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/);
});


// Asynchronous
function fetchData(callback){
  setTimeout(()=>{
    callback('peanut butter');
  },200);
}
test('the data is peanut butter', done => {
  function callback(data) {
    expect(data).toBe('peanut butter');
    done();
  }

  fetchData(callback);
});
