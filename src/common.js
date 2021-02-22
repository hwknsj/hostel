const path = require('path')
const homedir = require('os').homedir()

const hostelDir = path.join(homedir, '.hostel')

module.exports = {
  hostelDir,
  confFile: path.join(hostelDir, 'conf.json'),
  serversDir: path.join(hostelDir, 'servers'),
  pidFile: path.join(hostelDir, 'daemon.pid'),
  logFile: path.join(hostelDir, 'daemon.log'),
  startupFile: path.join(hostelDir, 'startup')
}
