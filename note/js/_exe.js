const execa = require("execa");
const cmd = async cmd => await execa(cmd.c, cmd.a);
const replaceAt = (str, i, text) => str.substr(0, i) + text + str.substr(i + 1);
/**
 * @description not supoort multple lines
 * @param {*} str
 */
const formatCommand = str => {
  let isIn34 = false,
    isIn39 = false,
    length = str.length;
  str = str.trim();
  for (let i = 0; i < length; i++) {
    isIn34 = str.charCodeAt(i) === 34 ? !isIn34 : isIn34;
    isIn39 = str.charCodeAt(i) === 39 ? !isIn39 : isIn39;
    if (/\s/.test(str[i]) && (isIn34 || isIn39)) {
      str = replaceAt(str, i, "$_____$");
      length += 6;
    }
  }
  const strArray = str.split(/\s+/).map(i => i.replace(/\$_____\$/g, " "));
  return { c: strArray[0], a: strArray.slice(1) };
};
exports.exe = str => cmd(formatCommand(str));
