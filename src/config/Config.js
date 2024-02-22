import { ResourceUtilities } from "../utils/ResourceUtils";
import path from 'path';
export default class Config {
    constructor() {
        const rootPath = process.env.ROOT || process.cwd();
        const env = process.env.ENV || 'linux';
        this.resourcePath = path.join(rootPath,'resources');
        this.config = ResourceUtilities.loadConfigurationsFromDirectory(path.join(this.resourcePath, 'etc'));
        Object.assign(this.config, ResourceUtilities.loadConfigurationsFromDirectory(path.join(this.resourcePath, 'env', env)));
        this.setUpSuiteVariables();
    }

    setUpSuiteVariables() {
        this.chromeDriverPath = path.join(this.resourcePath, 'drivers', this.config.chromeDriverExec);
        this.pauseInTest = this.config.PAUSE_IN_TEST_MILLS || 15000;
        this.userName = this.config.pc_user_name;
        this.userPassword = this.config.pc_user_password;
    }

    getPauseInTest() {
        return this.PAUSE_IN_TEST_MILLS;
    }

    getUseName() {
        return this.config.pc_user_name;
    }

    getUserPassword() {
        return this.getUserPassword;
    }
    

    static getInstance() {
        if (!Config.instance) {
            Config.instance = new Config();
        }
        return Config.instance;
    }
}


