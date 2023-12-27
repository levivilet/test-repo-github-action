import * as Exec from '../Exec/Exec.js'
import * as GetBranchName from '../GetBranchName/GetBranchName.js'

export const createBranch = async ({ repositoryPath, version }) => {
  const branchName = GetBranchName.getBranchName(version)
  await Exec.exec('git', ['checkout', '-b', branchName], {
    cwd: repositoryPath,
  })
}
