import * as Exec from '../Exec/Exec.js'

export const downloadRepository = async ({
  userName,
  repoName,
  repositoryPath,
  serviceUrl,
}) => {
  await Exec.exec('git', [
    'clone',
    `${serviceUrl}/${userName}/${repoName}`,
    repositoryPath,
  ])
}
