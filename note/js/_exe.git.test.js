const { run } = require("./_exe");
const t = async () => {
  try {
    await run("git pull");
    await run("git --no-pager log");
    await run("git checkout  feat/sq");
    await run("git add *");
    await run('git commit -m "feat: testing interactive git command"');
    await run("git push -f");

    //get latest commit for master
    console.log(await run("git rev-parse master"));
    //get latest commit for current
    console.log(await run("git rev-parse HEAD"));
    // get all branch
    console.log(await run("git branch -r"));
    // is Master branch
    console.log((await run("git rev-parse master")).stdout == (await run("git rev-parse HEAD")).stdout);
  } catch (e) {
    console.log(e);
  }
};
t();
