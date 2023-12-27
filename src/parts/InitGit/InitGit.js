import * as Exec from '../Exec/Exec.js'

export const initGit = async ({
  gitUserEmail,
  gitUserName,
  repositoryPath,
}) => {
  await Exec.exec('git', ['config', 'user.email', gitUserEmail], {
    cwd: repositoryPath,
  })
  await Exec.exec('git', ['config', 'user.name', gitUserName], {
    cwd: repositoryPath,
  })
}
