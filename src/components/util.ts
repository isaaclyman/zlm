function intBetween(low: number, high: number): number {
  return Math.floor(Math.random() * (high - low + 1)) + low;
}

export function pickAnyCard<T>(arr: T[]): T {
  return arr[intBetween(0, arr.length - 1)];
}
