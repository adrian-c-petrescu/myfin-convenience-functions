import * as arrayExt from './arrayExtensions';
import * as dateExt from './dateExtensions';
import * as numberExt from './numberExtensions';
import * as objectExt from './objectExtensions';
import * as stringExt from './stringExtensions';
import * as functionExt from './functionExtensions'


export default Object.freeze({
  array: arrayExt,
  date: dateExt,
  number: numberExt,
  object: objectExt,
  string: stringExt,
  func: functionExt
});