import { execa } from 'execa'
import * as GetBranchName from '../GetBranchName/GetBranchName.js'

export const createBranch = async ({ repositoryPath, version }) => {
  const branchName = GetBranchName.getBranchName(version)
  await execa('git', ['checkout', '-b', branchName], {
    cwd: repositoryPath,
  })
}
