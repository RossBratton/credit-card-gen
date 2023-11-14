import { TestRepo } from "../../repo/TestRepo";

const logger = {
    log: jest.fn()
}

describe("TestRepo", () => {
    it("should create a new test", () => {
        // Arrange
        const testRepo = new TestRepo(logger);

        // Act
        testRepo.create("test");
        
        // Assert
        expect(logger.log).toHaveBeenCalledWith("Created test");
        expect(testRepo._dataStore).toEqual(["test"]);
    });
});