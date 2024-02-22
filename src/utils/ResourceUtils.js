const fs = require('fs');
const path = require('path');

export class ResourceUtilities {

    static loadConfigurationsFromDirectory(directoryPath) {
        let configurations = {};

        fs.readdirSync(directoryPath, { withFileTypes: true }).forEach(dirent => {
            const fullPath = path.join(directoryPath, dirent.name);
            if (dirent.isDirectory()) {
                Object.assign(configurations, ResourceUtilities.loadConfigurationsFromDirectory(fullPath));
            } else if (dirent.name.endsWith('.json')) {
                Object.assign(configurations, ResourceUtilities.loadJSONFile(fullPath));
            }
        });

        return configurations;
    }

    static loadJSONFile(filePath) {
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(content);
        } catch (error) {
            console.error(`Error loading JSON file: ${filePath}`, error);
            throw error;
        }
    }
}
