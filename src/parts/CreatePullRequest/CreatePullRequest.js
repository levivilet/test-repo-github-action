import { execa } from 'execa'

export const createPullRequest = async ({ repositoryPath }) => {
  await execa('gh', ['pr', 'create', '--base', 'main', '--fill'], {
    cwd: repositoryPath,
  })
}
