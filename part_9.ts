// ===================================================
// PART 9: TypeScript Utility Types
// ===================================================

// ----------- Partial<T> -----------
type Article = {
  headline: string;
  writer: string;
  length: number;
};

const editArticle = (article: Partial<Article>) => {
  console.log("Editing article:", article);
};

editArticle({ headline: "Breaking News!" }); // ✅ Only headline is provided


// ----------- Required<T> -----------
type ServerSettings = {
  token?: string;
  retryLimit?: number;
};

const setupServer = (settings: Required<ServerSettings>) => {
  console.log("Server setup with:", settings);
};

// setupServer({ token: "abc" }); // ❌ Error
setupServer({ token: "abc", retryLimit: 3 }); // ✅


// ----------- Readonly<T> -----------
type Point2D = {
  lat: number;
  lng: number;
};

const fixedPoint: Readonly<Point2D> = { lat: 27.7, lng: 85.3 };
// fixedPoint.lat = 30.0; // ❌ Error: Cannot assign to 'lat'


// ----------- Record<K, T> -----------
type UserRoles = "superuser" | "editor" | "viewer";
type AccessFlags = Record<UserRoles, boolean>;

const roleAccess: AccessFlags = {
  superuser: true,
  editor: true,
  viewer: false,
};


// ----------- Pick<T, K> -----------
type AccountInfo = {
  accountId: number;
  displayName: string;
  contactEmail: string;
};

type ProfilePreview = Pick<AccountInfo, "accountId" | "displayName">;

const preview: ProfilePreview = { accountId: 42, displayName: "TechGuru" };


// ----------- Omit<T, K> -----------
type LoginDetails = {
  userId: number;
  username: string;
  secretKey: string;
};

type PublicLoginInfo = Omit<LoginDetails, "secretKey">;

const loginInfo: PublicLoginInfo = {
  userId: 12,
  username: "nepal_dev",
};


// ----------- Exclude<T, U> -----------
type TaskState = "queued" | "running" | "failed";
type ActiveTaskState = Exclude<TaskState, "failed">;

const currentTaskState: ActiveTaskState = "running"; // ✅


// ----------- Extract<T, U> -----------
type UIEvents = "tap" | "drag" | "hover";
type TouchEvents = Extract<UIEvents, "tap" | "drag">;

const userTouch: TouchEvents = "tap"; // ✅


// ----------- NonNullable<T> -----------
type OptionalTitle = string | null | undefined;
type RequiredTitle = NonNullable<OptionalTitle>;

const docTitle: RequiredTitle = "Getting Started"; // ✅
