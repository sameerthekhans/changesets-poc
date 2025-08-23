module.exports = {
  getReleaseLine: (changeset: { summary: string }) =>
    Promise.resolve(`- ${changeset.summary}\n`),
  getDependencyReleaseLine: () => Promise.resolve(''),
};
