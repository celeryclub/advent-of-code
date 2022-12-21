// https://adventofcode.com/2022/day/7

// After examining the input programmatically, I've determined
// that each unique directory is only listed once using `ls`.
// Therefore, we don't need to store file information at all.
// We can just add each file's size to all relevant directories when it's listed.

class Directory {
  public size = 0;
  public children: Directory[] = [];

  constructor(public path: string, public parent?: Directory) {}
}

function cd(root: Directory, cwd: Directory, path: string): Directory {
  if (path === "/") {
    return root;
  } else if (path === "..") {
    return cwd.parent!;
  }

  let newCwd = cwd.children.find(child => child.path === path);

  if (!newCwd) {
    newCwd = new Directory(path, cwd);
    cwd.children.push(newCwd);
  }

  return newCwd;
}

function addSize(cwd: Directory, size: number): void {
  let currentDir = cwd;

  while (currentDir) {
    currentDir.size += size;
    currentDir = currentDir.parent!;
  }
}

function buildFs(root: Directory, input: string[]): void {
  let cwd: Directory;

  input.forEach(line => {
    const cdCommand = line.match(/^\$ cd (.+)/);

    if (cdCommand) {
      cwd = cd(root, cwd, cdCommand[1]);
    }

    const lsOutput = line.match(/^(\d+) (\w+)/);

    if (lsOutput) {
      const [_, size] = lsOutput;
      addSize(cwd, parseInt(size, 10));
    }
  });
}

function sumMatchingDirSizes(currentDir: Directory): number {
  let totalSize = 0;

  if (currentDir.size <= 100_000) {
    totalSize += currentDir.size;
  }

  currentDir.children.forEach(child => {
    totalSize += sumMatchingDirSizes(child);
  });

  return totalSize;
}

function findSmallestMatchingDir(currentDir: Directory, spaceNeeded: number): number {
  let smallestMatchingSize = Number.MAX_VALUE;

  if (currentDir.size >= spaceNeeded) {
    smallestMatchingSize = Math.min(smallestMatchingSize, currentDir.size);
  }

  currentDir.children.forEach(child => {
    smallestMatchingSize = Math.min(smallestMatchingSize, findSmallestMatchingDir(child, spaceNeeded));
  });

  return smallestMatchingSize;
}

export function part1(input: string[]): number {
  const root = new Directory("/");
  buildFs(root, input);

  return sumMatchingDirSizes(root);
}

export function part2(input: string[]): number {
  const root = new Directory("/");
  buildFs(root, input);

  const freeSpace = 70_000_000 - root.size;
  const spaceNeeded = 30_000_000 - freeSpace;

  return findSmallestMatchingDir(root, spaceNeeded);
}
