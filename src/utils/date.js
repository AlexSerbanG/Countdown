import { addDays, differenceInMinutes, differenceInSeconds, addMinutes, differenceInHours, addHours, differenceInDays, isAfter } from 'date-fns';

export const getTimer = (date= addDays(Date.now(), 20)) => {
  const then = date;
  const now = Date.now();
  if (isAfter(now, then)) {
    return { };
  }
  const days = differenceInDays(then, now);
  const hours = -differenceInHours(addDays(now, days), then);
  const minutes = -differenceInMinutes(addHours(addDays(now, days), hours), then);
  const seconds = -differenceInSeconds(addMinutes(addHours(addDays(now, days), hours), minutes), then);
  return {
    days,
    hours,
    minutes,
    seconds
  };
}