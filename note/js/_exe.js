const execa = require("execa");
exports.run = (cmd) => {
  const parts = [], stack = [];
  let arg = '';
  for (let i = 0; i < cmd.length; i++) {
    const c = cmd[i];
    if (c === '\\') arg += cmd[++i];
    else if (['"', "'"].includes(c) && (!stack.length || stack.at(-1) === c))
      stack.length ? stack.pop() : stack.push(c);
    else if (c === ' ' && !stack.length) (arg && parts.push(arg), arg = '');
    else arg += c;
  }
  const [cmdName, ...args] = arg ? [...parts, arg] : parts;
  return execa(cmdName, args);
};