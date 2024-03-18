CREATE TABLE `users` (
	`id` text NOT NULL,
	`email` text(255),
	`password_hash` text,
	`username` text(255),
	`first_name` text(255),
	`last_name` text(255),
	`created_at` text DEFAULT 'Mon Mar 18 2024 12:36:04 GMT+0800 (Philippine Standard Time)' NOT NULL,
	`updated_at` text,
	`deleted_at` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_id_unique` ON `users` (`id`);