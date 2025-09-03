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
      "Content-Security-Policy-Report-Only": "frame-ancestors 'none'; default-src 'none'; font-src 'self'; img-src 'self'; style-src 'self'; script-src 'self'; require-trusted-types-for 'script'; trusted-types 'none'; base-uri 'none'; form-action 'none'",
      "Content-Type": "text/html; charset=UTF-8",
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