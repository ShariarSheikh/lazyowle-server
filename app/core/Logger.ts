import cliColor from 'cli-color'
import winston from 'winston'

const { colorize, combine, printf, timestamp } = winston.format

const myFormat = printf(({ level, message, timestamp }) => {
  const logMessage = cliColor.bgBlack.white(`Time:=>${timestamp} Level:=>${level}  Message::==>>${message}`)
  return logMessage
})

const logger = winston.createLogger({
  level: 'info',
  format: combine(timestamp(), colorize({ all: true }), myFormat),
  transports: [new winston.transports.Console()]
})

export default logger
