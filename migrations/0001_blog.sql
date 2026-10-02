CREATE TABLE IF NOT EXISTS blog_entries (
  slug TEXT PRIMARY KEY,
  draft TEXT NOT NULL,
  published TEXT,
  revision INTEGER NOT NULL DEFAULT 1,
  updated_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS blog_media (
  id TEXT PRIMARY KEY,
  content_type TEXT NOT NULL,
  bytes BLOB NOT NULL,
  created_at TEXT NOT NULL
);
