const { exe } = require("./_exe");
const t = async () => {
  try {
    await exe("git pull");
    await exe("git --no-pager log");
    await exe("git checkout  feat/sq");
    await exe("git add *");
    await exe('git commit -m "feat: testing interactive git command"');
    await exe("git push -f");

    //get latest commit for master
    console.log(await exe("git rev-parse master"));
    //get latest commit for current
    console.log(await exe("git rev-parse HEAD"));
    // get all branch
    console.log(await exe("git branch -r"));
    // is Master branch
    console.log((await exe("git rev-parse master")).stdout == (await exe("git rev-parse HEAD")).stdout);
  } catch (e) {
    console.log(e);
  }
};
t();
