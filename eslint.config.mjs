import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([

    // Fichiers JavaScript du navigateur
    {
        files: ["public/**/*.js"],
        plugins: { js },
        extends: ["js/recommended"],
        languageOptions: {
            globals: globals.browser
        }
    },

    // Fichiers Node.js
    {
        files: ["*.js"],
        languageOptions: {
            sourceType: "commonjs",
            globals: globals.node
        }
    },

    // Tests Jest
    {
        files: ["test/**/*.js"],
        languageOptions: {
            sourceType: "commonjs",
            globals: {
                ...globals.node,
                ...globals.jest
            }
        }
    }

]);