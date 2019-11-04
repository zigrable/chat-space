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
|name|string|null: false, unique: true index: ture|
|mail|string|null: false, unique: true|
|pass|string|null: false|

### Associationm
-has_many: groups,thourgh: :user_group
-has_many: groups


## Group_テーブル
|column|type|options|
|------|----|-------|
|name|string|null: false|
|user|reference|null: false, foreign_key: true|


### Associationm
-has_many: users,thourgh: :user_group
- has_many: chats


## Chat_テーブル
|column|type|options|
|------|----|-------|
|group_id|reference|null: false, foreign_key: true|
|user_id|reference|null: false, foreign_key: true|
|text|text|t.text|
|image|string|text|

### Associationm
- belongs_to: user
- belongs_to :group

### user_group_テーブル
|column|type|options|
|------|----|-------|
|group_id|reference|null: false, foreign_key: true|
|user_id|reference|null: false, foreign_key: true|

### Associationm
- belongs_to: user
- belongs_to :group

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
