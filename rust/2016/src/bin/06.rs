// https://adventofcode.com/2016/day/6

use std::collections::HashMap;

fn frequency_map(input: &str) -> Vec<HashMap<char, u8>> {
    let line_length = input.lines().next().unwrap().len();
    let mut frequencies = vec![HashMap::new(); line_length];

    input.lines().for_each(|line| {
        line.chars().enumerate().for_each(|(i, char)| {
            *frequencies[i].entry(char).or_insert(0) += 1;
        });
    });

    frequencies
}

fn part1(input: &str) -> String {
    frequency_map(input)
        .iter()
        .map(|frequency| frequency.iter().max_by(|a, b| a.1.cmp(b.1)).unwrap().0)
        .collect()
}

fn part2(input: &str) -> String {
    frequency_map(input)
        .iter()
        .map(|frequency| frequency.iter().min_by(|a, b| a.1.cmp(b.1)).unwrap().0)
        .collect()
}

fn main() {
    let input = include_str!("../../../../_input/2016/06.txt").trim_end();

    println!("part 1: {}", part1(input));
    println!("part 2: {}", part2(input));
}

#[cfg(test)]
mod tests {
    const INPUT: &str = include_str!("../../../../_input/2016/06.txt");

    #[test]
    fn part1() {
        assert_eq!(super::part1(INPUT.trim_end()), "zcreqgiv");
    }

    #[test]
    fn part2() {
        assert_eq!(super::part2(INPUT.trim_end()), "pljvorrk");
    }
}
