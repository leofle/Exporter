module.exports = {
  apps: [{
    name: 'exporter',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: '34.238.166.5',
      key: '~/Desktop/aws-key-pair/node_server.pem',
      ref: 'origin/master',
      repo: 'git@github.com:leofle/exporter.git',
      path: '/home/ubuntu/exporter',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
