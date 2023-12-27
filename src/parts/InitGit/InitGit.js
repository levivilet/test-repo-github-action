import { execa } from 'execa'

export const initGit = async ({
  gitUserEmail,
  gitUserName,
  repositoryPath,
}) => {
  await execa('git', ['config', 'user.email', gitUserEmail], {
    cwd: repositoryPath,
  })
  await execa('git', ['config', 'user.name', gitUserName], {
    cwd: repositoryPath,
  })
}
