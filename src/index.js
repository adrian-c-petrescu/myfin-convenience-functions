import * as arrayExt from './arrayExtensions';
import * as dateExt from './dateExtensions';
import * as numberExt from './numberExtensions';
import * as objectExt from './objectExtensions';
import * as stringExt from './stringExtensions';
import * as functionExt from './functionExtensions'

exports.array = Object.freeze(arrayExt);
exports.date = Object.freeze(dateExt);
exports.number = Object.freeze(numberExt);
exports.string = Object.freeze(stringExt);
exports.object = Object.freeze(objectExt);
exports.func = Object.freeze(functionExt);
