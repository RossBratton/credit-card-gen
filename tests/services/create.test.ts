import { TestRepo } from "../../repo/TestRepo";

const logger = {
    log: jest.fn()
}

describe("TestRepo", () => {
    it("should create a new test", () => {
        // Arrange
        const testName: string = 'test';
        const checkString: string = `Created ${testName}`;
        const testRepo = new TestRepo(logger);

        // Act
        testRepo.create(testName);
        
        // Assert
        expect(logger.log).toHaveBeenCalledWith(checkString);
        expect(testRepo._dataStore).toEqual([testName]);
    });

    it("should update a test", () => {
        // Arrange
        const testName: string = 'test';
        const newName: string = 'newTest';
        const checkString: string = `Updated ${testName} to ${newName}`;
        const testRepo = new TestRepo(logger);

        // Act
        testRepo.update(testName, newName);

        // Asset
        expect(logger.log).toHaveBeenCalledWith(checkString);
        expect(testRepo._dataStore).toEqual([newName]);
    });
});