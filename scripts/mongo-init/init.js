db = db.getSiblingDB('belcorp_db');
db.createUser({
  user: "root",
  pwd: "123456",
  roles: [{ role: "readWrite", db: "belcorp_db" }]
});

// Importar y ejecutar la función `createUsers`
db.createCollection('users');

db.users.insertMany([
  {
    _id: ObjectId("67088b42ad00f0762c0f68bf"),
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
  /* {
    email: "gerente@mail.com",
    password: "$2b$10$LnE1Tk7JDc7On.wZAud2xOJxjXa9Gm7dpOud8xzMr2KMoyGI8u6Fu",
    name: "Gerente",
    last_name: "Belcorp",
    ci: '22222222',
    confirmed: true,
    status: "Active",
    roles: ['Gerente'],
    section: {
      $oid: "67074da53185f2757e115ada"
    },
    __v: 0
  },
  {
    email: "socia@mail.com",
    password: "$2b$10$n8qZHkStybFS4rTbSkt5IugRUSVUo1t2Q9E27QDELv3w1jAfpHZ2O",
    name: "Socia",
    last_name: "Belcorp",
    ci: '33333333',
    confirmed: true,
    status: "Active",
    roles: ['Socia'],
    section: {
      $oid: "67074da53185f2757e115ada"
    },
    __v: 0
  },
  {
    email: "consultora@mail.com",
    password: "$2b$10$Pll2G7wU9y3h7X6NpPFxHebNMArgp3Gg2MnfKE3aZjxwrjuz0x5RO",
    name: "Consultora",
    last_name: "Belcorp",
    ci: '44444444',
    confirmed: true,
    status: "Active",
    roles: ['Consultora'],
    section: {
      $oid: "67074da53185f2757e115ada"
    },
    __v: 0
  } */
]);

db.createCollection('sections');

db.sections.insertMany([
  {
    _id: ObjectId("67074da53185f2757e115ada"),
    name: "Sección 1",
    description: "Descripción de la sección 1",
  },
  {
    name: "Sección 2",
    description: "Descripción de la sección 2",
  }
]);
