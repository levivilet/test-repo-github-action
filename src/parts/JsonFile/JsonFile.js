import { readFile, writeFile } from 'fs/promises'

export const readJson = async (path) => {
  const content = await readFile(path, 'utf8')
  return JSON.parse(content)
}

export const writeJson = async (path, value) => {
  await writeFile(path, JSON.stringify(value, null, 2) + '\n')
}
