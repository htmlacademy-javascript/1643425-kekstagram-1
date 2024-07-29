//функция паллиндром
const checkIsPalindrom = (string) => {
  const str = string.toLowerCase();
  const mid = Math.round(str.length / 2);

  for (let i = 0; i < mid; i++) {

    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
};


//Функция проверки на числа
const parseNumber = (string) => {
  let finalLine = '';
  const str = string.toLowerCase();

  for (let i = 0; i < str.length; i++) {

    if (!isNaN(str[i])) {
      finalLine += str[i].trim();//Если здесь убрать trim то строка '1 кефир, 0.5 батона' на выходе получается '1 05' и  строка 'ECMAScript 2022' выходит с пробелом впереди
    }
  }

  if (finalLine.length === 0) {
    return NaN;
  }

  return finalLine;
};
/* console.log(parseNumber('2023 год')); // 2023
console.log(parseNumber('ECMAScript 2022')); // 2022
console.log(parseNumber('1 кефир, 0.5 батона')); // 105
console.log(parseNumber('а я томат')); // NaN */


//Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины
const returnsModifiedString = (originalLine, targetLength, additionalStr) => {
  let total = '';

  if (originalLine.length >= targetLength) {
    return originalLine;
  }

  total = originalLine;
  const additionalCount = targetLength - originalLine.length;
  const numberRepetitions = Math.floor(additionalCount / additionalStr.length);
  const remainderDivision = additionalCount % additionalStr.length;

  if ((additionalStr + originalLine).length > targetLength) {
    total = additionalStr.slice(0, additionalCount) + total;

  } else {
    const mainСharacters = additionalStr.repeat(numberRepetitions);
    const residualСharacters = additionalStr.slice(0, remainderDivision);
    total = residualСharacters + mainСharacters + total;
  }

  return total;
};

//console.log(returnsModifiedString('1', 2, '0')); // '01'
//console.log(returnsModifiedString('1', 4, '0')); // '0001' */
//console.log(returnsModifiedString('q', 4, 'werty')); // 'werq'
//console.log(returnsModifiedString('q', 4, 'we')); // 'wweq'
//console.log(returnsModifiedString('qwerty', 4, '0')); // 'qwerty'


//Функция для проверки длины строки

const checkLineLength = (stringChecked, maximumLength) => stringChecked.length <= maximumLength; //сборка не дает сократить параметры до str и max

/* console.log(checkLineLength('проверяемая строка', 20));

console.log(checkLineLength('проверяемая строка', 18));

console.log(checkLineLength('проверяемая строка', 10)); */


/*const createPictures = createDuplicatesPictures();
const similarListFragment = document.createDocumentFragment();


createPictures.forEach(({ url, likes, comments }) => {

  const pictureElements = pictureTemplate.cloneNode(true);
  pictureElements.querySelector('.picture__img').src = url;
  pictureElements.querySelector('.picture__likes').textContent = likes;
  pictureElements.querySelector('.picture__comments').textContent = comments.length;
  similarListFragment.appendChild(pictureElements);
});

container.appendChild(similarListFragment);*/

