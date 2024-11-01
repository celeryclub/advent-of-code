// https://adventofcode.com/2022/day/4

use itertools::Itertools;
use regex::Regex;

fn parse_line(re: &Regex, line: &str) -> (u16, u16, u16, u16) {
    re.captures(line)
        .unwrap()
        .iter()
        .skip(1)
        .map(|m| m.unwrap().as_str().parse::<u16>().unwrap())
        .collect_tuple()
        .unwrap()
}

fn part1(input: &str) -> u16 {
    let re = Regex::new(r"(\d+)-(\d+),(\d+)-(\d+)").unwrap();

    input
        .lines()
        .filter(|line| {
            let (start1, end1, start2, end2) = parse_line(&re, line);
            (start1 <= start2 && end1 >= end2) || (start2 <= start1 && end2 >= end1)
        })
        .collect::<Vec<&str>>()
        .len() as u16
}

fn part2(input: &str) -> u16 {
    let re = Regex::new(r"(\d+)-(\d+),(\d+)-(\d+)").unwrap();

    input
        .lines()
        .filter(|line| {
            let (start1, end1, start2, end2) = parse_line(&re, line);
            (start1 <= start2 && end1 >= start2) || (start2 <= start1 && end2 >= start1)
        })
        .collect::<Vec<&str>>()
        .len() as u16
}

fn main() {
    let input = include_str!("../../../../_input/2022/04.txt").trim_end();

    println!("part 1: {}", part1(input));
    println!("part 2: {}", part2(input));
}

#[cfg(test)]
mod tests {
    const INPUT: &str = include_str!("../../../../_input/2022/04.txt");

    #[test]
    fn part1() {
        assert_eq!(super::part1(INPUT.trim_end()), 584);
    }

    #[test]
    fn part2() {
        assert_eq!(super::part2(INPUT.trim_end()), 933);
    }
}
