import * as Exec from '../Exec/Exec.js'

export const createPullRequest = async ({ repositoryPath }) => {
  await Exec.exec('gh', ['pr', 'create', '--base', 'main', '--fill'], {
    cwd: repositoryPath,
  })
}
