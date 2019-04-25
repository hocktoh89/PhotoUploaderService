import { imageFilter } from '../ImageFilter';
  
test('Test file extensions png', () => {
  const mockFunc = (exception, result) => { return result};
  const file = {
      originalname: 'imageA.png'
  };
  const result = imageFilter({}, file, mockFunc);
  expect(result).toBeTruthy();
});

test('Test file extensions jpeg', () => {
  const mockFunc = (exception, result) => { return result};
  const file = {
      originalname: 'imageA.jpeg'
  };
  const result = imageFilter({}, file, mockFunc);
  expect(result).toBeTruthy();
});

test('Test file extensions pdf', () => {
  const mockFunc = (exception, result) => { return { exception, result} } ;
  const file = {
      originalname: 'imageB.pdf'
  };
  const output = imageFilter({}, file, mockFunc);
  expect(output.exception.message).toBe('Only image files are allowed!'); 
  expect(output.result).toBeFalsy();
});