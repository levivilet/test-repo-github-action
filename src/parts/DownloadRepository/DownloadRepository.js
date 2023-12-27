import { execa } from 'execa'

export const downloadRepository = async ({
  userName,
  repoName,
  repositoryPath,
}) => {
  await execa('git', [
    'clone',
    `git@github.com:${userName}/${repoName}.git`,
    repositoryPath,
  ])
}
