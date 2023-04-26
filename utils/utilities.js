export function randomNumberGenerator(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  if (randomNumber === exclude) {
    return randomNumberGenerator(min, max, exclude);
  } else {
    return randomNumber;
  }
}
