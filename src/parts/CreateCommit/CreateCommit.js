import { execa } from 'execa'
import * as GetCommitMessage from '../GetCommitMessage/GetCommitMessage.js'

export const createCommit = async ({ repositoryPath, version }) => {
  const commitMessage = GetCommitMessage.getCommitMessage(version)
  await execa('git', ['commit', '-m', commitMessage], {
    cwd: repositoryPath,
  })
}
