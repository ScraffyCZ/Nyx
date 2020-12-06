module.exports = {
    name: 'say',
    description: "Jednoduchý příkaz přes který lze psát za bota",
    execute(message, args){
      const sayMessage = args.join(" ");
      message.delete().catch(err => console.log(err));
      message.channel.send(sayMessage);
    }
}
