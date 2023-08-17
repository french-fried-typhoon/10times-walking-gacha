export interface Gacha {
  roll(...args: any): any
}

export interface SelectGachaArgs {
  options: string[]
}

export class SelectGacha implements Gacha {
  options: string[]

  constructor(args: SelectGachaArgs) {
    this.options = args.options
  }

  roll() {
    const getRondomNumber = (size: number) => Math.floor(Math.random() * size)

    const index = getRondomNumber(this.options.length)
    return this.options[index]
  }
}

export class MultiSelectGacha implements Gacha {
  options: string[]

  constructor(args: SelectGachaArgs) {
    this.options = args.options
  }

  roll(size: number) {
    let ret = []

    for (let i = 0; i < size; i++) {
      const getRondomNumber = (size: number) => Math.floor(Math.random() * size)

      const index = getRondomNumber(this.options.length)
      ret.push(...this.options.splice(index, 1))
    }

    return ret
  }
}
