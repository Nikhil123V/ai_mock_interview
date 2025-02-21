/**  @type {import("drizzle-kit").Config}*/

export default {
  schema:'./utils/schema.js',
  dialect:'postgresql',
  dbCredentials:{
      url:'postgresql://neondb_owner:lHAxqW7Yeda2@ep-flat-paper-a58phifg.us-east-2.aws.neon.tech/neondb?sslmode=require',
  }
}
