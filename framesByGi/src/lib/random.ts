/** Cópia embaralhada (Fisher–Yates); não altera o array original. */
export function shuffle<T>(items: readonly T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/** Um item qualquer do array. */
export function pickRandom<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

/** Número aleatório entre `min` e `max`. */
export function randomBetween(min: number, max: number): number {
  return min + Math.random() * (max - min);
}
