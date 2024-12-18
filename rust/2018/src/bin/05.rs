// https://adventofcode.com/2018/day/5

fn reacted_length(polymer: &str, ignore: Option<u8>) -> usize {
    let mut reacted_polymer: Vec<u8> = vec![];

    for char in polymer.bytes() {
        if let Some(ignored_char) = ignore {
            if char == ignored_char || char + 32 == ignored_char {
                continue;
            }
        }

        if let Some(last_char) = reacted_polymer.last() {
            if char - 32 == *last_char || *last_char - 32 == char {
                reacted_polymer.pop();
            } else {
                reacted_polymer.push(char);
            }
        } else {
            reacted_polymer.push(char);
        }
    }

    reacted_polymer.len()
}

fn part1(input: &str) -> usize {
    reacted_length(input, None)
}

fn part2(input: &str) -> usize {
    (97u8..=122)
        .map(|char| reacted_length(input, Some(char)))
        .min()
        .unwrap()
}

fn main() {
    let input = include_str!("../../../../_input/2018/05.txt").trim_end();

    println!("part 1: {}", part1(input));
    println!("part 2: {}", part2(input));
}

#[cfg(test)]
mod tests {
    const INPUT: &str = include_str!("../../../../_input/2018/05.txt");

    #[test]
    fn part1() {
        assert_eq!(super::part1(INPUT.trim_end()), 9526);
    }

    #[test]
    fn part2() {
        assert_eq!(super::part2(INPUT.trim_end()), 6694);
    }
}
