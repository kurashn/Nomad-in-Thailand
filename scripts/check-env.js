console.log("Checking environment variables...");
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("KEYSTATIC_GITHUB_CLIENT_ID exists:", !!process.env.KEYSTATIC_GITHUB_CLIENT_ID);
if (process.env.KEYSTATIC_GITHUB_CLIENT_ID) {
    console.log("KEYSTATIC_GITHUB_CLIENT_ID length:", process.env.KEYSTATIC_GITHUB_CLIENT_ID.length);
} else {
    console.log("KEYSTATIC_GITHUB_CLIENT_ID is missing or empty.");
}
