/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-shorts-generator_owner:E4UWRnvL2zSA@ep-lingering-sky-a5n4hlma.us-east-2.aws.neon.tech/ai-shorts-generator?sslmode=require'
    }
  };