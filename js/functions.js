//функция паллиндром
function palindromes(string) {
  const str = string.toLowerCase();
  const mid = Math.round(str.length / 2);

  for (let i = 0; i < mid; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return 'Не палиндром';
    }
  }
  return 'Палиндром';
}
// Строка является палиндромом
palindromes('топот'); // true
// Несмотря на разный регистр, тоже палиндром
palindromes('ДовОд'); // true
// Это не палиндром
palindromes('Кекс'); // false

//Функция проверки на числа
function checkingForNumber(string) {
  let finalLine = [];
  const str = string.toLowerCase();
  for (let i = 0; i < str.length; i++) {

    if (isNaN(str[i]) === false) {
      finalLine += str[i].trim();
    }

  }
  if (finalLine.length === 0) {
    return NaN;
  }

  return finalLine;
}
checkingForNumber('2023 год'); // 2023
checkingForNumber('ECMAScript 2022'); // 2022
checkingForNumber('1 кефир, 0.5 батона'); // 105
checkingForNumber('агент 007'); // 7
checkingForNumber('а я томат'); // NaN


//Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины
function augmentedString(originalLine, minimumLength, additionalCharacters) {
  let total = [];
  if (originalLine.length >= minimumLength) {
    return originalLine;
  } else {
    total += originalLine;
    if ((additionalCharacters + originalLine).length > minimumLength) {
      total = additionalCharacters.slice(0, minimumLength - originalLine.length).concat(total);
    }
    while ((additionalCharacters + total).length <= minimumLength) {

      total = additionalCharacters.concat(total);
    }
  }
  return total;
}

augmentedString('1', 2, '0'); // '01'
// Добавочный символ использован три раза
augmentedString('1', 4, '0'); // '0001'
// Добавочные символы обрезаны с конца
augmentedString('q', 4, 'werty'); // 'werq'
// Добавочные символы использованы полтора раза
augmentedString('q', 4, 'we'); // 'wweq' в этом примере выходит косяк)
// Добавочные символы не использованы, исходная строка не изменена
augmentedString('qwerty', 4, '0'); // 'qwerty'


//Функция для проверки длины строки

const lineLength = (stringChecked, maximumLength) => stringChecked.length <= maximumLength;

lineLength('проверяемая строка', 20);

lineLength('проверяемая строка', 18);

lineLength('проверяемая строка', 10);
