const fs = require('fs')
const path = require('path')
const test = require('ava')
const sinon = require('sinon')
const untildify = require('untildify')
const userStartup = require('user-startup')
const common = require('../../src/common')
const cli = require('../../src/cli')

test.before(() => {
  sinon.stub(userStartup, 'create')
  sinon.stub(userStartup, 'remove')
  sinon.stub(process, 'kill')
})

test('start should start daemon', (t) => {
  const node = process.execPath
  const daemonFile = path.join(__dirname, '../../src/daemon')
  const daemonLog = path.resolve(untildify('~/.hostel/daemon.log'))

  cli(['', '', 'start'])

  sinon.assert.calledWithExactly(
    userStartup.create,
    'hostel',
    node,
    [daemonFile],
    daemonLog
  )

  t.is(
    fs.readFileSync(common.startupFile, 'utf-8'),
    userStartup.getFile('hostel'),
    'startupFile should point to startup file path'
  )

  t.pass()
})

test('stop should stop daemon', (t) => {
  fs.writeFileSync(common.pidFile, '1234')

  cli(['', '', 'stop'])

  sinon.assert.calledWithExactly(userStartup.remove, 'hostel')
  sinon.assert.calledWithExactly(process.kill, '1234')
  t.pass()
})
