import { join } from 'path'
import * as JsonFile from '../JsonFile/JsonFile.js'

const getNewValue = (oldValue, version) => {
  const newItems = oldValue.map((item) => {
    if (item.name === 'b') {
      return {
        ...item,
        version,
      }
    }
    return item
  })
  return newItems
}

export const updateRepository = async ({
  repositoryPath,
  version,
  filesPath,
}) => {
  const filesJsonPath = join(repositoryPath, filesPath)
  const oldValue = await JsonFile.readJson(filesJsonPath)
  const newValue = getNewValue(oldValue, version)
  await JsonFile.writeJson(filesJsonPath, newValue)
}
