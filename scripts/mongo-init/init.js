db = db.getSiblingDB('belcorp_db');
db.createUser({
  user: "root",
  pwd: "123456",
  roles: [{ role: "readWrite", db: "belcorp_db" }]
});

db.createCollection('users');

db.users.insertMany([
  {
    _id: ObjectId("67088b42ad00f0762c0f68ba"),
    email: "admin@mail.com",
    name: "Administrador",
    last_name: "Belcorp",
    ci: '11111111',
    confirmed: true,
    roles: ["Administrador"],
    section: ObjectId("67074da53185f2757e115ada"),
    status: "Active",
    password: "$2b$10$19.Har5WsG3Av7TFWtObouOvI197QrwcDP09XEpq6Y7t4Y37bWPGC",
    __v: 0
  },
  {
    _id: ObjectId("67088b42ad00f0762c0f68bb"),
    email: "gerente@mail.com",
    name: "Gerente",
    last_name: "Belcorp",
    ci: '22222222',
    confirmed: true,
    roles: ['Gerente'],
    section: ObjectId("67074da53185f2757e115ada"),
    status: "Active",
    password: "$2b$10$LnE1Tk7JDc7On.wZAud2xOJxjXa9Gm7dpOud8xzMr2KMoyGI8u6Fu",
    __v: 0
  },
  {
    _id: ObjectId("67088b42ad00f0762c0f68bc"),
    email: "socia@mail.com",
    password: "$2b$10$n8qZHkStybFS4rTbSkt5IugRUSVUo1t2Q9E27QDELv3w1jAfpHZ2O",
    name: "Socia",
    last_name: "Belcorp",
    ci: '33333333',
    confirmed: true,
    status: "Active",
    roles: ['Lider'],
    section: ObjectId("67074da53185f2757e115ada"),
    __v: 0
  },
  {
    _id: ObjectId("67088b42ad00f0762c0f68bd"),
    email: "consultora@mail.com",
    password: "$2b$10$Pll2G7wU9y3h7X6NpPFxHebNMArgp3Gg2MnfKE3aZjxwrjuz0x5RO",
    name: "Consultora",
    last_name: "Belcorp",
    ci: '44444444',
    confirmed: true,
    status: "Active",
    roles: ['Consultora'],
    section: ObjectId("67074da53185f2757e115ada"),
    __v: 0
  }
]);

db.createCollection('sections');

db.sections.insertMany([
  {
    _id: ObjectId("67074da53185f2757e115ada"),
    name: "Sección A",
    description: "Descripción de la sección A",
  },
  {
    _id: ObjectId("670c904bff889b798a7ede7e"),
    name: "Sección B",
    description: "Descripción de la sección B",
  },
  {
    _id: ObjectId("670c9055ff889b798a7ede84"),
    name: "Sección C",
    description: "Descripción de la sección V",
  },
  {
    _id: ObjectId("670c9057ff889b798a7ede8a"),
    name: "Sección D",
    description: "Descripción de la sección D",
  },
  {
    _id: ObjectId("670c905aff889b798a7ede90"),
    name: "Sección E",
    description: "Descripción de la sección E",
  },
  {
    _id: ObjectId("670c905eff889b798a7ede96"),
    name: "Sección F",
    description: "Descripción de la sección F",
  },
  {
    _id: ObjectId("670c9065ff889b798a7ede9c"),
    name: "Sección G",
    description: "Descripción de la sección G",
  },
  {
    _id: ObjectId("670c906bff889b798a7edea2"),
    name: "Sección H",
    description: "Descripción de la sección H",
  }
]);
