import { addMinutes, format, isAfter, setHours, setMinutes } from "date-fns";

export function generateDayTimeList(date: Date): string[] {
  const currentDateTime = addMinutes(new Date(), 30);
  const startTime = setMinutes(setHours(date, 7), 0); // Set start time to 09:00
  const endTime = setMinutes(setHours(date, 21), 0); // Set end time to 21:00
  const interval = 30; // Interval in minutes
  const timeList: string[] = [];

  let currentTime = startTime;

  while (currentTime <= endTime) {
    if (isAfter(currentTime, currentDateTime)) {
      timeList.push(format(currentTime, "HH:mm"));
    }
    currentTime = addMinutes(currentTime, interval);
  }

  return timeList;
}
