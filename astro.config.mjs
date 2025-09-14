// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.kevindreid.com",
  devToolbar: {
    enabled: false
  },
  server: {
    headers: {
      "Content-Security-Policy-Report-Only": "frame-ancestors 'none'; default-src 'none'; font-src 'self'; img-src 'self'; style-src 'report-sample' 'self'; script-src 'report-sample' 'self'; connect-src 'self'; base-uri 'none'; form-action 'none'",
      "Cross-Origin-Embedder-Policy-Report-Only": "require-corp",
      "Cross-Origin-Opener-Policy-Report-Only": "same-origin",
      "Cross-Origin-Resource-Policy": "same-origin",
      "Permissions-Policy-Report-Only": "accelerometer=(), autoplay=(), camera=(), encrypted-media=(), geolocation=(), gyroscope=(), microphone=(), midi=(), payment=(), picture-in-picture=(), serial=(), usb=()",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "X-XSS-Protection": "0"
    }
  },
  trailingSlash: "never"
});