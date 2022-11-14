CREATE TABLE "todo_table" (
	"id" serial primary key,
	"list_item" varchar(100) NOT NULL,
	"complete" BOOLEAN DEFAULT false NOT NULL
);
INSERT INTO "todo_table"
	("list_item", "complete")
VALUES
	('Walk the dogs', false)