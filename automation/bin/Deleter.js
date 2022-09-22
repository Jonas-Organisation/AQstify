import fs from "fs/promises";
export default class Deleter {
    photoPath;
    constructor(photoPath) {
        this.photoPath = photoPath;
    }
    async deleteFile() {
        await fs.writeFile(this.photoPath, "");
    }
}
