// This script is used to publish the package to npm using the token from .env

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// We are in .../rust-wasm
// .env is in .../logseq/.env
// So we need to go up 3 levels: rust-wasm -> WasmVOWL -> publishing-tools -> logseq
const envPath = path.resolve(__dirname, '..', '..', '..', '.env');

console.log(`Looking for .env at ${envPath}`);

let npmToken = null;

if (fs.existsSync(envPath)) {
    console.log(`Found .env file`);
    const content = fs.readFileSync(envPath, 'utf8');
    const match = content.match(/NPM_TOKEN=(.*)/);
    if (match) {
        npmToken = match[1].trim();
    }
}

if (!npmToken) {
    console.error('Could not find NPM_TOKEN in .env file');
    process.exit(1);
}

console.log('Found NPM_TOKEN, preparing to publish...');

// Target directory is ./pkg
const pkgDir = path.join(__dirname, 'pkg');
if (!fs.existsSync(pkgDir)) {
    console.error('pkg directory not found. Run wasm-pack build first.');
    process.exit(1);
}

// Create .npmrc file in the pkg directory
const npmrcPath = path.join(pkgDir, '.npmrc');
fs.writeFileSync(npmrcPath, `//registry.npmjs.org/:_authToken=${npmToken}`);

try {
    console.log(`Publishing from ${pkgDir}...`);
    execSync('npm publish --access public', {
        cwd: pkgDir,
        stdio: 'inherit'
    });
    console.log('Successfully published to npm');
} catch (error) {
    console.error('Failed to publish to npm');
    process.exit(1);
} finally {
    // Clean up .npmrc
    if (fs.existsSync(npmrcPath)) {
        fs.unlinkSync(npmrcPath);
    }
}
