import { Logger, dummyLogger } from "ts-log";
import { TestRepo } from "../repo/TestRepo";

export class TestService {
    _logger: Logger;
    _repo: TestRepo;

    constructor(testRepo: TestRepo) {
        this._logger = dummyLogger;
        this._repo = testRepo;
    }

    create(name: string) {
        this._repo.create(name);
    }
}