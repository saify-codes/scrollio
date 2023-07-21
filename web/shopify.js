import { BillingInterval, LATEST_API_VERSION } from "@shopify/shopify-api";
import { shopifyApp } from "@shopify/shopify-app-express";
// import { SQLiteSessionStorage } from "@shopify/shopify-app-session-storage-sqlite"; // not using
import {MySQLSessionStorage} from '@shopify/shopify-app-session-storage-mysql';
import { restResources } from "@shopify/shopify-api/rest/admin/2023-04";
import dotenv from 'dotenv'
dotenv.config()

// const DB_PATH = `${process.cwd()}/database.sqlite`;

// The transactions with Shopify will always be marked as test transactions, unless NODE_ENV is production.
// See the ensureBilling helper to learn more about billing in this template.
const billingConfig = {
  "My Shopify One-Time Charge": {
    // This is an example configuration that would do a one-time charge for $5 (only USD is currently supported)
    amount: 5.0,
    currencyCode: "USD",
    interval: BillingInterval.OneTime,
  },
};
const shopify = shopifyApp({
  api: {
    apiKey: process.env.SHOPIFY_API_KEY,
    apiSecretKey: process.env.SHOPIFY_SECRET_KEY,
    apiVersion: LATEST_API_VERSION,
    restResources,
    billing: undefined, // or replace with billingConfig above to enable example billing
  },
  auth: {
    path: "/api/auth",
    callbackPath: "/api/auth/callback",
  },
  webhooks: {
    path: "/api/webhooks",
  },
  // This should be replaced with your preferred storage strategy
  // sessionStorage: new SQLiteSessionStorage(DB_PATH),
  sessionStorage:  MySQLSessionStorage.withCredentials(
    process.env.DB_HOST,
    process.env.DB,
    process.env.DB_USER,
    process.env.DB_PASSWORD
  ),
});

export default shopify;
