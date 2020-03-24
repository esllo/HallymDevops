module.exports = {
  apps: [
    {
      name: 'devops',
      script: 'next start',
      instances: 0,
      exec_mode: 'cluster',
    },
  ],
};
