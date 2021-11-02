const checkProdFreeze = require("./lib/check-prod-freeze");
const core = require("@actions/core");
const forcedeploy = core.getInput("force_deploy");
const env = core.getInput("env");

try {
    checkProdFreeze("16:00","18:00",env,forcedeploy); 
} catch (error) {
    core.setFailed(error.message);
}
