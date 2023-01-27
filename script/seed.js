"use strict";

const {
  db,
  models: { User, Landlord, Complex, Tenant, MaintenanceRequest, Unit },
} = require("../server/db");


console.log(`this is complex`,Complex)
console.log(`this is models`, User)
/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({ username: "murphy", password: "123" }),
    User.create({ username: "cody", password: "123" }),
  ]);
  //creating landlords
  const landlords = await Promise.all([
    Landlord.create({
      name: "Jeff",
      email: "jeff@properties.com",
      phoneNumber: "5622341171",
    }),
  ]);

  const complexes = await Promise.all([
    Complex.create({
      propertyName: "jeffsMobileHomes",
      address: "117 Washington blvd, Los Angeles, California",
      numberOfUnits: 15,
    }),
  ]);

  const units = await Promise.all([
    Unit.create({
      unitNumber: 1,
      rentAmount: 900,
      rentDueDate: 10,
      isOccupied: true,
      bedrooms: 1,
    }),
    Unit.create({
      unitNumber: 2,
      rentAmount: 1200,
      rentDueDate: 10,
      isOccupied: true,
      bedrooms: 2,
    }),
    Unit.create({
      unitNumber: 3,
      rentAmount: 1200,
      rentDueDate: 10,
      isOccupied: true,
      bedrooms: 2,
    }),
    Unit.create({
      unitNumber: 4,
      rentAmount: 1200,
      rentDueDate: 10,
      isOccupied: true,
      bedrooms: 2,
    }),
    Unit.create({
      unitNumber: 5,
      rentAmount: 1200,
      rentDueDate: 10,
      isOccupied: true,
      bedrooms: 2,
    }),
    Unit.create({
      unitNumber: 6,
      rentAmount: 1200,
      rentDueDate: 10,
      isOccupied: true,
      bedrooms: 2,
    }),
    Unit.create({
      unitNumber: 7,
      rentAmount: 1200,
      rentDueDate: 10,
      isOccupied: true,
      bedrooms: 2,
    }),
    Unit.create({
      unitNumber: 8,
      rentAmount: 1200,
      rentDueDate: 10,
      isOccupied: true,
      bedrooms: 2,
    }),
    Unit.create({
      unitNumber: 9,
      rentAmount: 1200,
      rentDueDate: 10,
      isOccupied: true,
      bedrooms: 2,
    }),
    Unit.create({
      unitNumber: 10,
      rentAmount: 1200,
      rentDueDate: 10,
      isOccupied: true,
      bedrooms: 2,
    }),
    Unit.create({
      unitNumber: 11,
      rentAmount: 1200,
      rentDueDate: 10,
      isOccupied: true,
      bedrooms: 2,
    }),
    Unit.create({
      unitNumber: 12,
      rentAmount: 1200,
      rentDueDate: 10,
      isOccupied: true,
      bedrooms: 2,
    }),
    Unit.create({
      unitNumber: 13,
      rentAmount: 1200,
      rentDueDate: 10,
      isOccupied: true,
      bedrooms: 2,
    }),
    Unit.create({
      unitNumber: 14,
      rentAmount: 1200,
      rentDueDate: 10,
      isOccupied: false,
      bedrooms: 2,
    }),
    Unit.create({
      unitNumber: 15,
      rentAmount: 1200,
      rentDueDate: 10,
      isOccupied: true,
      bedrooms: 2,
    }),
  ]);
  const tenants = await Promise.all([
    Tenant.create({
      name: "Will Murphy",
      email: "john@smith.com",
      phoneNumber: "1234567899",
      rentPaid: false,
      leaseStartDate: "01/01/2023",
      leaseEndDate: "01/01/2024",
      dateOfBirth: "08/05/1973",
    }),
    Tenant.create({
      name: "Laura Sanchez",
      email: "john@smith.com",
      phoneNumber: "1234567899",
      rentPaid: false,
      leaseStartDate: "01/01/2023",
      leaseEndDate: "01/01/2024",
      dateOfBirth: "08/05/1973",
    }),
    Tenant.create({
      name: "Fernando Diaz",
      email: "john@smith.com",
      phoneNumber: "1234567899",
      rentPaid: false,
      leaseStartDate: "01/01/2023",
      leaseEndDate: "01/01/2024",
      dateOfBirth: "08/05/1973",
    }),
    Tenant.create({
      name: "Karla Fernandez",
      email: "john@smith.com",
      phoneNumber: "1234567899",
      rentPaid: false,
      leaseStartDate: "01/01/2023",
      leaseEndDate: "01/01/2024",
      dateOfBirth: "08/05/1973",
    }),
    Tenant.create({
      name: "Angela Aguilar",
      email: "john@smith.com",
      phoneNumber: "1234567899",
      rentPaid: false,
      leaseStartDate: "01/01/2023",
      leaseEndDate: "01/01/2024",
      dateOfBirth: "08/05/1973",
    }),
    Tenant.create({
      name: "Noah Varela",
      email: "john@smith.com",
      phoneNumber: "1234567899",
      rentPaid: false,
      leaseStartDate: "01/01/2023",
      leaseEndDate: "01/01/2024",
      dateOfBirth: "08/05/1973",
    }),
    Tenant.create({
      name: "Alfonso Gonzalez",
      email: "john@smith.com",
      phoneNumber: "1234567899",
      rentPaid: false,
      leaseStartDate: "01/01/2023",
      leaseEndDate: "01/01/2024",
      dateOfBirth: "08/05/1973",
    }),
    Tenant.create({
      name: "Kevin Guerrero",
      email: "john@smith.com",
      phoneNumber: "1234567899",
      rentPaid: false,
      leaseStartDate: "01/01/2023",
      leaseEndDate: "01/01/2024",
      dateOfBirth: "08/05/1973",
    }),
    Tenant.create({
      name: "Issac Ramirez",
      email: "john@smith.com",
      phoneNumber: "1234567899",
      rentPaid: false,
      leaseStartDate: "01/01/2023",
      leaseEndDate: "01/01/2024",
      dateOfBirth: "08/05/1973",
    }),
    Tenant.create({
      name: "Carmine Ichelli",
      email: "john@smith.com",
      phoneNumber: "1234567899",
      rentPaid: false,
      leaseStartDate: "01/01/2023",
      leaseEndDate: "01/01/2024",
      dateOfBirth: "08/05/1973",
    }),
    Tenant.create({
      name: "Rudy Dawson",
      email: "john@smith.com",
      phoneNumber: "1234567899",
      rentPaid: false,
      leaseStartDate: "01/01/2023",
      leaseEndDate: "01/01/2024",
      dateOfBirth: "08/05/1973",
    }),
    Tenant.create({
      name: "Grace Lee",
      email: "john@smith.com",
      phoneNumber: "1234567899",
      rentPaid: false,
      leaseStartDate: "01/01/2023",
      leaseEndDate: "01/01/2024",
      dateOfBirth: "08/05/1973",
    }),
    Tenant.create({
      name: "Brian Sanchez",
      email: "john@smith.com",
      phoneNumber: "1234567899",
      rentPaid: false,
      leaseStartDate: "01/01/2023",
      leaseEndDate: "01/01/2024",
      dateOfBirth: "08/05/1973",
    }),
    Tenant.create({
      name: "Abraham Lopez",
      email: "tstark@gmail.com",
      phoneNumber: "1234567899",
      rentPaid: true,
      leaseStartDate: "01/01/2023",
      leaseEndDate: "01/01/2024",
      dateOfBirth: "01/01/1990",
    }),
  ]);

  const maintenanceRequests = await Promise.all([
    MaintenanceRequest.create({
      type: "plumbing",
      severity: "low",
      description: "the toilet takes a long time to refill",
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${landlords.length} landlords`);
  console.log(`seeded ${complexes.length} complexes`);
  console.log(`seeded ${units.length} units`);
  console.log(`seeded ${tenants.length} tenants`);
  console.log(`seeded ${maintenanceRequests.length} maintenanceRequests`);
  console.log(`seeded successfully`);

 }

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
