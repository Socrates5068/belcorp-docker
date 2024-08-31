db = db.getSiblingDB('belcorp_db');
db.createCollection('users');
db.createUser({
  user: "root",
  pwd: "123456",
  roles: [{ role: "readWrite", db: "belcorp_db" }]
});

db.users.insertOne({
  _id: ObjectId("66caa2a778b23d4e993eea0c"),
  email: "admin@admin.com",
  password: "$2b$10$NVE8eumZgdzTTpfxayy1peXDD8dduhnqi1F9luUvDVlpRZEetdmqS",
  name: "admin",
  confirmed: true,
  status: "Active",
  __v: 0
})
