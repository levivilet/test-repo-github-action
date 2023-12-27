import { execa } from 'execa'

export const downloadRepository = async ({
  userName,
  repoName,
  repositoryPath,
  serviceUrl
}) => {
  await execa('git', [
    'clone',
    `${serviceUrl}/${userName}/${repoName}`,
    repositoryPath,
  ])
}
