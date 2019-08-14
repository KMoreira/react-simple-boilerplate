const resolveLessThanTen = time => (time < 10 ? `0${time}` : time);

export default (timeInSec) => {
  const time = +timeInSec;
  const minutes = parseInt(time / 60, 10);
  const seconds = resolveLessThanTen(parseInt(time % 60, 10));

  return `${minutes}:${seconds}`;
};
