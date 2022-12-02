// https://adventofcode.com/2018/day/4

import { readLines } from "../lib/read";
import range from "../lib/range";

function _getEvents(): string[] {
  const events = readLines("04");
  // return events.sort().slice(0, 39);
  return events.sort();
}

// function part1(): number {
function part1() {
  const events = _getEvents();

  // console.log(events);

  let guardNaps = {};
  let currentGuardId: string;
  let currentGuardSleepStartTime: number = null;

  // events.forEach((event, index) => {
  events.forEach(event => {
    const shiftChangeEvent = event.match(/Guard (#\d+) begins shift/);

    // console.log(shiftChangeEvent);

    if (shiftChangeEvent) {
      currentGuardId = shiftChangeEvent[1];

      // if (currentGuardSleepStartTime === null) {
      // console.log(events[index - 1]);
      // }
      // console.log(currentGuardId);
    } else {
      // if (currentGuardId !== '#1481' && currentGuardId !== '#1553') {
      //   return;
      // }
      // const sleepEvent = event.match(/\d{2}:(\d{2})]\s(falls asleep|wakes up)/);
      const sleepEvent = event.match(/:(\d{2})/);
      // const [_, minute, eventType] = sleepEvent;
      // console.log(sleepEvent);
      const minute = parseInt(sleepEvent[1]);

      // console.log(currentGuardSleepStartTime);

      // if (currentGuardId === '#1481') {
      // console.log('---', currentGuardId);
      // }

      // if (currentGuardId === '#1481') {
      // console.log('checking currentGuardSleepStartTime:', currentGuardSleepStartTime);
      // }

      if (currentGuardSleepStartTime !== null) {
        // guardNaps[currentGuardId] =
        //   (guardNaps[currentGuardId] ? guardNaps[currentGuardId] : 0) +
        //   minute -
        //   currentGuardSleepStartTime;

        // Guards count as asleep on the minute they fall asleep,
        // and they count as awake on the minute they wake up
        const newSleep = [currentGuardSleepStartTime, minute - 1];

        guardNaps[currentGuardId] = (guardNaps[currentGuardId] ? guardNaps[currentGuardId] : []).concat([newSleep]);

        // if (currentGuardId === '#1481') {
        // console.log('wake event: minute', minute);
        // }

        // if (currentGuardId === '#1481') {
        //   console.log('wake event: minute', minute);
        //   // console.log(event);
        //   console.log(currentGuardSleepStartTime);
        // console.log('adding', minute - currentGuardSleepStartTime);
        // }

        // console.log('wake event: minute', minute);
        currentGuardSleepStartTime = null;
      } else {
        // console.log('sleep event: minute', minute);
        // if (currentGuardId === '#1481') {
        // console.log('sleep event: minute', minute);
        // }
        currentGuardSleepStartTime = minute;
      }
    }
  });

  // console.log(guardNaps);

  let sleepiestGuardId;
  let longestNapLength = 0;

  for (var guardId in guardNaps) {
    const napLength = guardNaps[guardId]
      .map(nap => {
        return nap[1] - nap[0];
      })
      .reduce((accumulator, napLength) => {
        return accumulator + napLength;
      }, 0);

    // console.log(guardId, napLength);

    if (napLength > longestNapLength) {
      sleepiestGuardId = guardId;
      longestNapLength = napLength;
    }
  }

  // console.log(sleepiestGuardId);

  const allNapMinutes = guardNaps[sleepiestGuardId]
    .map(nap => {
      // console.log(range(nap[0], nap[1]));
      return range(nap[0], nap[1]);
    })
    .reduce((accumulator, minutes) => {
      return accumulator.concat(minutes);
    }, []);

  // console.log(allNapMinutes);

  const minuteFrequencies = {};
  let highestFrequency = 1;
  let mostFrequentMinute = allNapMinutes[0];

  allNapMinutes.forEach(minute => {
    minuteFrequencies[minute] = minuteFrequencies[minute] ? minuteFrequencies[minute]++ : 1;

    if (minuteFrequencies[minute] > highestFrequency) {
      mostFrequentMinute = minute;
      highestFrequency = minuteFrequencies[minute];
    }
  });

  // console.log(allNapMinutes);
  // console.log(allNapMinutes.sort().reverse());
  // console.log(mostFrequentMinute);

  return parseInt(sleepiestGuardId.slice(1)) * mostFrequentMinute;
}

// 6617 is too low

// console.log(`part 1: ${part1()}`);
// console.log(`part 2: ${part2()}`);

describe.skip("2018/04", () => {
  test("part 1", () => {
    expect(part1()).toBe(0);
  });
});
