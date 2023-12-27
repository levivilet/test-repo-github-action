import { execa } from 'execa'

export const publishBranch = async ({ repositoryPath }) => {
  await execa('git', ['push'], {
    cwd: repositoryPath,
  })
}
