import { formatName, formatId, capitalizeFirstLetter } from './format';

describe('Capitalize First Letter', () => {

  it("recieved 1 word -> returns it Capitalized", () => {
    expect(capitalizeFirstLetter('mr')).toEqual('Mr');
  });

});

describe('Format Pokemon Name', () => {

  it("recieved 1 word -> returns it Capitalized", () => {
    expect(formatName('mr')).toEqual('Mr');
  });

  it("recieved 2 word -> returns them both Capitalized", () => {
    expect(formatName('mr mime')).toEqual('Mr Mime');
  });

  it("recieved a word seperated by '-' -> returns splited words and all Capitalized", () => {
    expect(formatName('mr mime')).toEqual('Mr Mime');
  });
});

describe('Format Pokemon ID', () => {
  it("recieved a 1 digit number -> returns add 2 zeroes before", () => {
    expect(formatId(1)).toEqual('001');
  });

  it("recieved a 2 digit number -> returns add a zero before", () => {
    expect(formatId(10)).toEqual('010');
  });

  it("recieved a 3 digit number -> returns it as a string", () => {
    expect(formatId(100)).toEqual('100');
  });

  it("recieved a 4 digit number -> returns it as a string", () => {
    expect(formatId(1000)).toEqual('1000');
  });

  it("recieved a zero digit number -> returns a zero as a string", () => {
    expect(formatId(0)).toEqual('0');
  });

  it("recieved nothing -> returns a zero as a string", () => {
    expect(formatId()).toEqual('0');
  });
});