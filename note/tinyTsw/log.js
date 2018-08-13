const l = console.log
process.on('uncaughtException', _ => l('E', _))
process.on('warning', _ => l('W', _))
process.on('unhandledRejection', _ => l('W', _))
