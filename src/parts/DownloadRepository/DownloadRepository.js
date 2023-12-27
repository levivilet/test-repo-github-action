import * as Exec from '../Exec/Exec.js'

export const downloadRepository = async ({
  userName,
  repoName,
  repositoryPath,
  githubToken,
}) => {
  await Exec.exec('git', [
    'clone',
    `https://${githubToken}@github.com/${userName}/${repoName}.git`,
    repositoryPath,
  ])
}
