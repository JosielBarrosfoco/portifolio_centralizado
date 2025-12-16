import { Hono } from "hono";

interface Env {
  // Environment variables for Cloudflare Workers
  // Not used in Vercel deployment
}

const app = new Hono<{ Bindings: Env }>();

export default app;
