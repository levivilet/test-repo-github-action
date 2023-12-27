import * as Exec from '../Exec/Exec.js'
import * as GetCommitMessage from '../GetCommitMessage/GetCommitMessage.js'

export const createCommit = async ({ repositoryPath, version }) => {
  const commitMessage = GetCommitMessage.getCommitMessage(version)
  await Exec.exec('git', ['commit', '-m', commitMessage], {
    cwd: repositoryPath,
  })
}
