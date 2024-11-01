// https://adventofcode.com/2022/day/9

use regex::Regex;
use std::collections::HashSet;

#[derive(Clone, Default, Eq, Hash, PartialEq)]
struct Point {
    x: i16,
    y: i16,
}

fn move_rope(
    rope: &mut Vec<Point>,
    tail_position_set: &mut HashSet<Point>,
    direction: char,
    distance: u8,
) {
    for _ in 0..distance {
        // Move head knot one position
        match direction {
            'U' => rope[0].y -= 1,
            'R' => rope[0].x += 1,
            'D' => rope[0].y += 1,
            'L' => rope[0].x -= 1,
            _ => unreachable!(),
        }

        let rope_length = rope.len();

        // Move each subsequent knot if needed
        for j in 1..rope_length {
            let previous = rope[j - 1].clone();
            let current = &mut rope[j];

            let horizontal_distance = previous.x - current.x;
            let vertical_distance = previous.y - current.y;

            if horizontal_distance == 0 && vertical_distance == 0 {
                // We're all caught up, so no further movement is needed
                break;
            }

            if horizontal_distance.abs() > 1 || vertical_distance.abs() > 1 {
                // Move diagonally
                current.x += horizontal_distance.signum();
                current.y += vertical_distance.signum();
            } else if horizontal_distance.abs() > 1 {
                // Move horizontally
                current.x += horizontal_distance.signum();
            } else if vertical_distance.abs() > 1 {
                // Move vertially
                current.y += vertical_distance.signum();
            }

            // This is the tail knot
            if j == rope_length - 1 {
                tail_position_set.insert(current.clone());
            }
        }
    }
}

fn count_tail_positions(length: usize, input: &str) -> usize {
    let re = Regex::new(r"(\w) (\d+)").unwrap();
    let mut rope = vec![Point::default(); length];
    let mut tail_position_set = HashSet::new();

    input.lines().for_each(|line| {
        let caps = re.captures(line).unwrap();
        let direction = caps[1].chars().nth(0).unwrap();
        let distance = caps[2].parse::<u8>().unwrap();

        move_rope(&mut rope, &mut tail_position_set, direction, distance);
    });

    tail_position_set.len()
}

fn part1(input: &str) -> usize {
    count_tail_positions(2, input)
}

fn part2(input: &str) -> usize {
    count_tail_positions(10, input)
}

fn main() {
    let input = include_str!("../../../../_input/2022/09.txt").trim_end();

    println!("part 1: {}", part1(input));
    println!("part 2: {}", part2(input));
}

#[cfg(test)]
mod tests {
    const INPUT: &str = include_str!("../../../../_input/2022/09.txt");

    #[test]
    fn part1() {
        assert_eq!(super::part1(INPUT.trim_end()), 5981);
    }

    #[test]
    fn part2() {
        assert_eq!(super::part2(INPUT.trim_end()), 2352);
    }
}
