import { TestRepo } from "../repo/TestRepo";
import { Logger } from "../utils/logger";

export class TestService {
    _logger: Logger;
    _repo: TestRepo;

    constructor(testRepo: TestRepo, logger: Logger) {
        this._logger = logger;
        this._repo = testRepo;
    }

    create(name: string) {
        this._repo.create(name);
    }
}