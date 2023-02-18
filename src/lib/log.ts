import * as ANSI from './color';
import * as STDDEF from './STDDEF';
const timestamp = require('time-stamp');
import fs = require('fs');
export default function printLogs(message: string, type: STDDEF.LOG_TYPE, useFileLogs?:boolean): void {

  let result: string = timestamp('[YYYY/MM/DD@HH:mm:ss]');
  let filename: string = './log/server.ans.log'

  switch (type) {
    case STDDEF.LOG_TYPE.LOG_INFO:
      result += ANSI.default('black', false, 'blue', true) + 'INFO: ' + ANSI.resetANSI;
      break;
    case STDDEF.LOG_TYPE.LOG_WARN:
      result += ANSI.default('black', false, 'yellow', false) + 'WARN: ' + ANSI.resetANSI;
      break;
    case STDDEF.LOG_TYPE.LOG_DBG:
      result += ANSI.default('black', false, 'black', true) + 'DBG: ' + ANSI.resetANSI;
    case STDDEF.LOG_TYPE.LOG_ERR:
      result += ANSI.default('black', false, 'red', true) + 'ERR: ' + ANSI.resetANSI;
    case STDDEF.LOG_TYPE.LOG_CERR:
      result += ANSI.default('red', true, 'white', true) + 'CERR: ' + ANSI.resetANSI;
    default:
      result += '';

  }
  result += message + ';';
  if (useFileLogs) {
    fs.appendFile(filename, result + '\n', (err) => {
      if (err) throw err;
      return;
    });
  } else {
    console.log(result);
  }
  return;

}
