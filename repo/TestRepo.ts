import { Logger } from "../utils/logger";

export class TestRepo {
    _logger: Logger;
    _dataStore: string[];

    constructor(logger: Logger) {
        this._logger = logger;
        this._dataStore = [];
    }

    create(name: string) {
        this._dataStore.push(name);
        this._logger.log(`Created ${name}`);
    }
}