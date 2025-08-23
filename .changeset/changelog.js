module.exports = {
  getReleaseLine: (changeset) => Promise.resolve(`- ${changeset.summary}\n`),
  getDependencyReleaseLine: () => Promise.resolve(''),
};
