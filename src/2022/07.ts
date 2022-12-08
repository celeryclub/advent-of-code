// https://adventofcode.com/2022/day/7

class Directory {
  public size = 0;
  public children: Directory[] = [];

  constructor(public path: string, public parent?: Directory) {}
}

// After examining the input programmatically, I've determined
// that each unique directory is only listed once using `ls`.
// Therefore, we don't need to store file information at all.
// We can just add each file's size to all relevant directories when it's listed.
export class Solver {
  private _input: string[];
  private _root = new Directory("/");
  private _cwd: Directory;

  constructor(input: string[]) {
    this._input = input;
    this._buildFs();
  }

  private _cd(path: string): void {
    if (path === "/") {
      this._cwd = this._root;
      return;
    } else if (path === "..") {
      this._cwd = this._cwd.parent;
      return;
    }

    let newCwd = this._cwd.children.find(child => child.path === path);

    if (!newCwd) {
      newCwd = new Directory(path, this._cwd);
      this._cwd.children.push(newCwd);
    }

    this._cwd = newCwd;
  }

  private _addSize(size: number): void {
    let currentDir = this._cwd;

    while (currentDir) {
      currentDir.size += size;
      currentDir = currentDir.parent;
    }
  }

  private _buildFs(): void {
    this._input.forEach(line => {
      const cdCommand = line.match(/^\$ cd (.+)/);

      if (cdCommand) {
        this._cd(cdCommand[1]);
      }

      const lsOutput = line.match(/^(\d+) (\w+)/);

      if (lsOutput) {
        const [_, size] = lsOutput;
        this._addSize(parseInt(size, 10));
      }
    });
  }

  private _sumMatchingDirSizes(currentDir: Directory): number {
    let totalSize = 0;

    if (currentDir.size <= 100_000) {
      totalSize += currentDir.size;
    }

    currentDir.children.forEach(child => {
      totalSize += this._sumMatchingDirSizes(child);
    });

    return totalSize;
  }

  private _findSmallestMatchingDir(currentDir: Directory, spaceNeeded: number): number {
    let smallestMatchingSize = Number.MAX_VALUE;

    if (currentDir.size >= spaceNeeded) {
      smallestMatchingSize = Math.min(smallestMatchingSize, currentDir.size);
    }

    currentDir.children.forEach(child => {
      smallestMatchingSize = Math.min(smallestMatchingSize, this._findSmallestMatchingDir(child, spaceNeeded));
    });

    return smallestMatchingSize;
  }

  public part1(): number {
    return this._sumMatchingDirSizes(this._root);
  }

  public part2(): number {
    const freeSpace = 70_000_000 - this._root.size;
    const spaceNeeded = 30_000_000 - freeSpace;

    return this._findSmallestMatchingDir(this._root, spaceNeeded);
  }
}
