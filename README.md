# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation
## Users_テーブル
|column|type|options|
|------|----|-------|
|user_id|integer|null: false|
|user-name|string|null: false, unique: true|
|mail|string|null: false, unique: true|
|pass|string|null: false,|

### Associationm
-has_many: groups
-has_many: chats


## Group_テーブル
|column|type|options|
|------|----|-------|
|group_id|integer|null: false|
|group_name|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|user_name|string|null: false, foreign_key: true, index|

### Associationm
- belongs_to: user
- has_many: chats


## Chat_テーブル
|column|type|options|
|------|----|-------|
|group_ID|integer|null: false, foreign_key: true|
|user_ID|integer|null: false, foreign_key: true|
|user_name|string|null: false, foreign_key: true|
|text|text|t.text|
|image|stri|string||

### Associationm
- belongs_to: user
- belongs_to :group

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
