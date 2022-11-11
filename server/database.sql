CREATE TABLE "todo" (
	"id" serial primary key,
	"list_item" varchar(100),
	"complete" BOOLEAN DEFAULT false
);
INSERT INTO "todo"
	("list_item", "complete")
VALUES
	('Walk the dogs', 'false')