import * as Exec from '../Exec/Exec.js'

export const publishBranch = async ({ repositoryPath }) => {
  await Exec.exec('git', ['push'], {
    cwd: repositoryPath,
  })
}
