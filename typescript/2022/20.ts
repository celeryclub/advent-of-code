// https://adventofcode.com/2022/day/20

export const name = "day 1: classic cool";

enum Direction {
  Forward = 1,
  Reverse = -1,
}

class Item {
  constructor(
    public value: number,
    public index: number
  ) {}
}

function createItems(input: string) {
  return input.split("\n").map((line, index) => {
    return new Item(parseInt(line, 10), index);
  });
}

function wrapIndex(index: number, length: number): number {
  const remainder = index % length;
  // console.log(index, length, remainder);
  return remainder < 0 ? length + remainder : remainder;

  // if (index < 0) return length + index;
  // if (index >= length) return 0 + index;

  // return index;
}

function part1(input: string): number {
  const originalList = createItems(input);
  const mixedList = [...originalList];

  // let current = 0;
  // let highest = 0;

  console.log(mixedList);
  // console.log(mixedList.map(item => item.value).join(","));

  originalList.forEach(item => {
    // console.log(item);
    // const direction = Math.sign(item.value) as Direction;
    console.log("start moving", item.value);
    console.log(mixedList);

    const sign = Math.sign(item.value);
    const newIndex = wrapIndex(item.index + item.value, mixedList.length);

    // console.log({ sign, newIndex });

    let { index } = item;

    console.log("loop", Math.abs(item.value), "times to update others");

    // Update the in-between items' indexes
    for (let i = 0; i < Math.abs(item.value); i++) {
      index = wrapIndex(index + sign, mixedList.length);
      const nextItem = mixedList[index];
      // nextItem.index = wrapIndex(nextItem.index + sign * -1, mixedList.length);

      // mixedList.splice(currentIndex, 1, nextItem);
      // mixedList.splice(nextIndex, 1, item);

      nextItem.index = wrapIndex(nextItem.index - sign, mixedList.length);
      console.log("UPDATED index", index, nextItem);
    }

    // console.log("remove at index", item.index);
    // mixedList.splice(item.index, 1);
    // console.log("add at index", newIndex);
    // mixedList.splice(newIndex, 0, item);

    // Update this item's index
    item.index = newIndex;
    // console.log("UPDATE", item);

    // ----

    // for (let i = Math.abs(item.value); i > 0; i--) {
    //   console.log("before move", item.value, mixedList.map(item => item.value).join(","));

    //   const currentIndex = item.index;
    //   const nextIndex = wrapIndex(currentIndex + sign, mixedList.length);
    //   console.log({ currentIndex, nextIndex });

    //   // const thisItem = mixedList[currentIndex];
    //   const nextItem = mixedList[nextIndex];
    //   console.log({ item, nextItem });

    //   // if (item.value>0) {
    //   //   // Move forward

    //   if (nextIndex === 0) {
    //     // Move item to the beginning of the list
    //     mixedList.pop();
    //     mixedList.unshift(item);
    //   } else if (nextIndex === mixedList.length - 1) {
    //     // Move item to the end of the list
    //     mixedList.shift();
    //     mixedList.push(item);
    //   } else {
    //     // Swap this item with next item
    //     mixedList.splice(currentIndex, 1, nextItem);
    //     mixedList.splice(nextIndex, 1, item);

    //     // Update item indexes to match their new positions
    //     item.index = nextIndex;
    //     nextItem.index -= Math.sign(item.value);
    //   }

    //   // }

    //   // if (item.value < 0) {
    //   //   // Move backward
    //   // }

    //   // console.log("after move", item.value, mixedList.map(item => item.value).join(","));
    //   console.log("after move", item.value, mixedList);
    // }

    console.log("finish moving", item.value);

    // let i = item.value;
    // while (i > 0) {
    //   console.log("move", item);
    //   i--;
    // }

    //   const num = parseInt(numberString, 10);
    //   if (!isNaN(num)) {
    //     current += num;
    //   } else {
    //     highest = Math.max(highest, current);
    //     current = 0;
    //   }
  });

  console.log("ALL DONE");
  console.log(mixedList);
  // console.log(mixedList.map(item => item.value).join(","));

  // console.log(originalList);

  // originalList[0].index = 90;
  // console.log(mixedList);

  // return highest;
  return 2;
}

const input = (await Bun.file("../_input/2022/06.txt").text()).trimEnd();

if (import.meta.env.NODE_ENV === "test") {
  const { test, expect } = await import("bun:test");

  test.skip("part 1", () => expect(part1(input)).toBe(0));
} else {
  console.log("part 1:", part1(input));
}
