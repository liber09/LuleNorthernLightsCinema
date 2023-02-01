import jest from "jest";
import fs from "fs/promises"

    test('File has expected filename', () =>{
        const filename = 'thisisfile.md';
        const filePath = `./This is folder/${filename}`;
    
        expect(fs.existsSync(filePath)).toBe(true);

    });

    // this is commentary