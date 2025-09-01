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
      "Content-Security-Policy-Report-Only": "default-src 'none'; frame-ancestors 'none'; style-src 'self'; script-src 'self'; font-src 'self'; img-src 'self'; base-uri 'self'; form-action 'none'",
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
  trailingSlash: "never"
});
