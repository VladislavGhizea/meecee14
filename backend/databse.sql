-- This SQL creates necessary tables and triggers for a cat adoption application.

-- Enable the necessary extension for UUIDs
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Users Table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    fiscal_code TEXT UNIQUE NOT NULL,
    address TEXT NOT NULL,
    postal_code TEXT NOT NULL,
    city TEXT NOT NULL,
    role TEXT CHECK (role IN ('user', 'owner')) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Descriptions Table
CREATE TABLE descriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    details JSONB NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Cats Table
CREATE TABLE cats (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    age SMALLINT,
    description_id UUID NOT NULL,
    photo_url TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_description FOREIGN KEY (description_id) REFERENCES descriptions (id) ON DELETE CASCADE
);

-- Matches Table
CREATE TABLE matches (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    cat_id UUID NOT NULL,
    user_id UUID NOT NULL,
    date TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_cat_match FOREIGN KEY (cat_id) REFERENCES cats (id) ON DELETE CASCADE,
    CONSTRAINT fk_user_match FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

-- Interactions Table
CREATE TABLE interactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    cat_id UUID NOT NULL,
    user_id UUID NOT NULL,
    type TEXT CHECK (type IN ('like', 'dislike')) NOT NULL,
    date TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_cat_interaction FOREIGN KEY (cat_id) REFERENCES cats (id) ON DELETE CASCADE,
    CONSTRAINT fk_user_interaction FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

-- Trigger Function to Update the updated_at Timestamp
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for Users Table
CREATE TRIGGER update_users_timestamp
BEFORE UPDATE ON users
FOR EACH ROW EXECUTE FUNCTION update_timestamp();

-- Trigger for Descriptions Table
CREATE TRIGGER update_descriptions_timestamp
BEFORE UPDATE ON descriptions
FOR EACH ROW EXECUTE FUNCTION update_timestamp();

-- Trigger for Cats Table
CREATE TRIGGER update_cats_timestamp
BEFORE UPDATE ON cats
FOR EACH ROW EXECUTE FUNCTION update_timestamp();

-- Trigger for Matches Table
CREATE TRIGGER update_matches_timestamp
BEFORE UPDATE ON matches
FOR EACH ROW EXECUTE FUNCTION update_timestamp();

-- Trigger for Interactions Table
CREATE TRIGGER update_interactions_timestamp
BEFORE UPDATE ON interactions
FOR EACH ROW EXECUTE FUNCTION update_timestamp();