// ====================================================
// DEV RISHI INTERNATIONAL SCHOOL - HEIC TO JPG CONVERTER
// ====================================================
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const targetDir = path.join(__dirname, '..', 'School_Images', 'Ground');
const filesToConvert = [
    { input: '20260511_170659.heic', output: '20260511_170659.jpg' },
    { input: '20260511_170723.heic', output: '20260511_170723.jpg' }
];

// 1. Ensure heic-convert package is installed
try {
    require.resolve('heic-convert');
    console.log("-> 'heic-convert' is already installed.");
} catch (e) {
    console.log("-> 'heic-convert' is missing. Installing locally...");
    try {
        execSync('npm install heic-convert', { cwd: path.join(__dirname, '..'), stdio: 'inherit' });
        console.log("-> Installation complete.");
    } catch (err) {
        console.error("Failed to install package 'heic-convert'. Make sure you have node & npm in path.", err);
        process.exit(1);
    }
}

const convert = require('heic-convert');

// 2. Perform conversions
async function run() {
    for (const f of filesToConvert) {
        const inputPath = path.join(targetDir, f.input);
        const outputPath = path.join(targetDir, f.output);

        if (!fs.existsSync(inputPath)) {
            console.log(`[Warning] Input HEIC file does not exist: ${inputPath}`);
            continue;
        }

        console.log(`-> Converting ${f.input} to ${f.output}...`);
        try {
            const inputBuffer = fs.readFileSync(inputPath);
            const outputBuffer = await convert({
                buffer: inputBuffer,
                format: 'JPEG',
                quality: 0.82 // 82% quality provides excellent sharpness and high compression
            });

            fs.writeFileSync(outputPath, outputBuffer);
            console.log(`[Success] Saved to ${outputPath} (${Math.round(outputBuffer.length / 1024)} KB)`);
        } catch (error) {
            console.error(`[Error] Conversion failed for ${f.input}:`, error);
        }
    }
    console.log("\n-> All asset conversions processed.");
}

run();
