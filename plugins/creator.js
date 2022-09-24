let handler = function (m) {
  // this.sendContact(m.chat, '212601257461', 'Nurutomo', m)
  conn.sendContact(m.chat, '212601257461', 'My Owner', m)
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
