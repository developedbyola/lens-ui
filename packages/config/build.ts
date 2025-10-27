// #!/usr/bin/env bun

import { $, Glob } from "bun";

async function buildPackage() {
  try {
    // 1. Clean up previous build artifacts
    console.log("🧹 Cleaning dist directory...");
    await $`rm -rf dist`;

    // 2. Discover and filter all entry points in the 'src' folder
    console.log("🔍 Discovering and filtering source files...");
    const glob = new Glob("src/**/*.{ts,js,tsx,jsx}");
    const allFiles = await Array.fromAsync(glob.scan());

    // Filter out .stories, .test, and .spec files
    const entrypoints = allFiles.filter(
      (file) =>
        !file.endsWith(".stories.ts") &&
        !file.endsWith(".stories.tsx") &&
        !file.endsWith(".test.ts") &&
        !file.endsWith(".test.tsx") &&
        !file.endsWith(".spec.ts") &&
        !file.endsWith(".spec.tsx"),
    );

    // 3. Build for ESM
    console.log("📦 Building ESM with source structure...");
    await Bun.build({
      entrypoints,
      outdir: "./dist/esm",
      root: "./src",
      format: "esm",
      target: "browser",
      packages: "external",
    });

    // 4. Build for CJS
    console.log("📦 Building CJS with source structure...");
    await Bun.build({
      entrypoints,
      outdir: "./dist/cjs",
      root: "./src",
      format: "cjs",
      target: "node",
      packages: "external",
    });

    // 5. Generate TypeScript declarations
    console.log("📝 Generating TypeScript declarations...");
    await $`bunx tsc --emitDeclarationOnly --outDir ./dist/types --sourceMap false`;

    console.log("✅ Build completed successfully!");
  } catch (error) {
    console.error("❌ Build failed:", error);
    process.exit(1);
  }
}

await buildPackage();
