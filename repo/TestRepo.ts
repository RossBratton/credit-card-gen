import { Logger, dummyLogger } from "ts-log";

export class TestRepo {
    _logger: Logger;
    _dataStore: string[];

    constructor() {
        this._logger = dummyLogger;
        this._dataStore = [];
    }

    create(name: string) {
        this._dataStore.push(name);
        this._logger.info(`Created ${name}`);
    }
}