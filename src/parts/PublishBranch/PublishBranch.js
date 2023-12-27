import * as Exec from '../Exec/Exec.js'
import * as GetBranchName from '../GetBranchName/GetBranchName.js'

export const publishBranch = async ({ repositoryPath, version }) => {
  const branchName = GetBranchName.getBranchName(version)
  await Exec.exec('git', ['push', '--set-upstream', 'origin', branchName], {
    cwd: repositoryPath,
  })
}
