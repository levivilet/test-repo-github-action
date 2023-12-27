import * as Exec from '../Exec/Exec.js'

export const addAll = async ({ repositoryPath }) => {
  await Exec.exec('git', ['add', '.'], {
    cwd: repositoryPath,
  })
}
