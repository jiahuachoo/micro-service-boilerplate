jest.mock('fs', () => ({
    readFileSync: jest.fn()
}));

const fs = require('fs');
const status = require('../status')

test('should return expected application status', () => {
    const fakeCommitHash = "abc";
    const description = "pre-interview technical test";
    const version = "1.0";

    
    fs.readFileSync.mockReturnValue(fakeCommitHash);

    const actualStatus = status.getStatus();
    expect(actualStatus.myapplication.version).toBe(version);
    expect(actualStatus.myapplication.description).toBe(description);
    expect(actualStatus.myapplication.lastcommitsha).toBe(fakeCommitHash);
});

test('should return expected expected commit hash', () => {
    const fakeCommitHash = "abc\n";
    
    fs.readFileSync.mockReturnValue(fakeCommitHash);

    const actualHash = status.getGitLastCommitHash();
    expect(actualHash).toBe("abc");
});