// https://adventofcode.com/2018/day/1

use std::collections::HashSet;

fn part1(input: &str) -> i32 {
    input.lines().map(|line| line.parse::<i32>().unwrap()).sum()
}

fn part2(input: &str) -> i32 {
    let mut known_frequencies = HashSet::new();

    input
        .lines()
        .map(|line| line.parse::<i32>().unwrap())
        .cycle()
        // scan is actually filter_scan which is why its iterator yields an option
        .scan(0, |freq, change| {
            *freq += change;
            Some(*freq)
        })
        .find(|freq| !known_frequencies.insert(*freq))
        .unwrap()
}

fn main() {
    let input = include_str!("../../../../_input/2018/01.txt").trim_end();

    println!("part 1: {}", part1(input));
    println!("part 2: {}", part2(input));
}

#[cfg(test)]
mod tests {
    const INPUT: &str = include_str!("../../../../_input/2018/01.txt");

    #[test]
    fn part1() {
        assert_eq!(super::part1(INPUT.trim_end()), 590);
    }

    #[test]
    fn part2() {
        assert_eq!(super::part2(INPUT.trim_end()), 83445);
    }
}
