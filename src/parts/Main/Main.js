import * as CreateBranch from '../CreateBranch/CreateBranch.js'
import * as CreateCommit from '../CreateCommit/CreateCommit.js'
import * as CreatePullRequest from '../CreatePullRequest/CreatePullRequest.js'
import * as DownloadRepository from '../DownloadRepository/DownloadRepository.js'
import * as InitGit from '../InitGit/InitGit.js'
import * as PublishBranch from '../PublishBranch/PublishBranch.js'
import * as UpdateRepository from '../UpdateRepository/UpdateRepository.js'

export const main = async () => {
  const userName = 'levivilet'
  const repoName = 'test-repo-a'
  const gitUserEmail = 'github-actions[bot]@users.noreply.github.com'
  const gitUserName = 'github-actions[bot]'
  const repositoryPath = '/github/workspace/tmp-repository'
  const version =
    process.env.RG_VERSION || process.env.VERSION || 'unknown-version'
  await InitGit.initGit({
    gitUserEmail,
    gitUserName,
  })
  await DownloadRepository.downloadRepository({
    userName,
    repoName,
    repositoryPath,
  })
  await CreateBranch.createBranch({
    repositoryPath,
    version,
  })
  await UpdateRepository.updateRepository({
    repositoryPath,
    version,
  })
  await CreateCommit.createCommit({
    repositoryPath,
    version,
  })
  await PublishBranch.publishBranch({
    repositoryPath,
  })
  await CreatePullRequest.createPullRequest({
    repositoryPath,
  })
}
