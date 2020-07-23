// Carefully copy-pasted from NCBackend3 (where it has tests, etc)
export function camelToSnake(s: string): string {
  return (
    s
      // .replace(/[\w]([A-Z])/g, m => m[0] + '_' + m[1])
      .replace(/[a-z0-9_]([A-Z])/g, m => m[0] + '_' + m[1]) // magic people voodoo people
      .replace(/\s+/g, '_') // spaces to _
      .replace(/_+/g, '_') // multiple ___ to single _
      .toLowerCase()
  )
}

export function snakeToCamel(s: string): string {
  return s.replace(/(_\w)/g, m => m[1].toUpperCase())
}
