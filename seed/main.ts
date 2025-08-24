import { seedCategories } from "./categories.ts";
import { seedProducts } from "./products.ts";
import { seedUsersAndProfiles } from "./users-profiles.ts";


// command used to seed db
// npx ts-node seed/main.ts

async function main() {
  console.log("Seeding users and profiles...");
  await seedUsersAndProfiles(2);

  console.log("Seeding categories");
  await seedCategories(10)

  console.log("Seeding products...");
  await seedProducts(20);

  console.log("Seeding complete!");
}

main();
