CREATE TABLE IF NOT EXISTS event_entries (
  slug TEXT PRIMARY KEY,
  draft TEXT NOT NULL,
  published TEXT,
  revision INTEGER NOT NULL DEFAULT 1,
  updated_at TEXT NOT NULL
);
