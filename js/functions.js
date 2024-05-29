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

