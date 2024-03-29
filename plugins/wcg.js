const { Module_Exports, wcg } = require('../lib/')
Module_Exports(
  {
    kingcmd: 'wcg',
    fromMe: true,
    desc: 'word chain game\nwcg start to force start game',
    type: 'game',
  },
  async (message, match) => {
    if (match == 'start') {
      return await wcg.start(message.jid, message.participant)
    }
    if (match == 'end') {
      return await wcg.end(message.jid, message.participant)
    }
    wcg.start_game(message.jid, message.participant, 'chain', match)
  }
)

Module_Exports(
  {
    kingcmd: 'wrg',
    fromMe: true,
    desc: 'random word game\nwrg start to force start game',
    type: 'game',
  },
  async (message, match) => {
    if (match == 'start') {
      return await wcg.start(message.jid, message.participant)
    }
    if (match == 'end') {
      return await wcg.end(message.jid, message.participant)
    }
    wcg.start_game(message.jid, message.participant, 'random', match)
  }
)
