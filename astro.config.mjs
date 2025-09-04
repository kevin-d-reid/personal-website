// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://www.kevindreid.com",
  devToolbar: {
    enabled: false
  },
  server: {
    headers: {
      "Content-Security-Policy-Report-Only": "frame-ancestors 'none'; default-src 'none'; font-src 'self'; img-src 'self'; style-src 'self' 'unsafe-hashes' 'sha256-4Su6mBWzEIFnH4pAGMOuaeBrstwJN4Z3pq/s1Kn4/KQ='; script-src 'self'; require-trusted-types-for 'script'; trusted-types 'none'; base-uri 'none'; form-action 'none'",
      "Cross-Origin-Embedder-Policy-Report-Only": "require-corp",
      "Cross-Origin-Opener-Policy-Report-Only": "same-origin",
      "Cross-Origin-Resource-Policy": "same-origin",
      "Permissions-Policy-Report-Only": "accelerometer=(), autoplay=(), camera=(), geolocation=(), gyroscope=(), microphone=(), payment=(), usb=()",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "X-XSS-Protection": "0"
    }
  },
  trailingSlash: "never",
  adapter: vercel()
});