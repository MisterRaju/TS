// ===================================================
// PART 9: TypeScript Utility Types
// ===================================================
var editArticle = function (article) {
    console.log("Editing article:", article);
};
editArticle({ headline: "Breaking News!" }); // ✅ Only headline is provided
var setupServer = function (settings) {
    console.log("Server setup with:", settings);
};
// setupServer({ token: "abc" }); // ❌ Error
setupServer({ token: "abc", retryLimit: 3 }); // ✅
var fixedPoint = { lat: 27.7, lng: 85.3 };
var roleAccess = {
    superuser: true,
    editor: true,
    viewer: false,
};
var preview = { accountId: 42, displayName: "TechGuru" };
var loginInfo = {
    userId: 12,
    username: "nepal_dev",
};
var currentTaskState = "running"; // ✅
var userTouch = "tap"; // ✅
var docTitle = "Getting Started"; // ✅
