module.exports = function toReadable (number) {
  const TEN = [
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
    'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ]
  const TEN_PLUS = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
    'ninety'
  ]
  const UNIT = [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
  ]
  const arrNumber = number.toString().split('').reverse();
  let hundreds = '';
  let tens = '';
  let units = '';
  
  if(number === 0) {
  	return 'zero';
  }
  
  if (+arrNumber[1] === 1) {
  	tens = `${TEN[+arrNumber[0]]}`
  } else {
  	if (arrNumber[1]) {
    	tens = `${TEN_PLUS[+arrNumber[1]]}`
    }
    units = `${UNIT[+arrNumber[0]]}`
  }
  if (arrNumber[2]) {
  	hundreds = `${UNIT[+arrNumber[2]]} hundred`
  }
  
  let result = [hundreds, tens, units].filter((word) => word !== '').join(' ');
  
  return result;
}