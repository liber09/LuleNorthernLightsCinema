import jest from "jest";
import fs from "fs/promises"

describe("Checks if file is .md")

    test('File has expected filename', () =>{
        const filename = 'thisisfile.md';
        const filePath = `./This is folder/${filename}`;
    
        expect(fs.existsSync(filePath)).toBe(true);

    });