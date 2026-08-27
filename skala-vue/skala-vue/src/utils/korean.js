export const withSubjectParticle = (word) => {
  const code = word.charCodeAt(word.length - 1)
  const hasFinalConsonant = code >= 0xac00 && code <= 0xd7a3 && (code - 0xac00) % 28 !== 0
  return `${word}${hasFinalConsonant ? '이' : '가'}`
}
