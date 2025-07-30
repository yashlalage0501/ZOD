"use strict";
// zod-complete.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogSchema = void 0;
/**
 * Title: Complete Zod Guide with TypeScript
 * Author: Yash Lalage
 * Description: A well-documented guide with all Zod concepts (basic to advanced)
 */
const zod_1 = require("zod");
// ----------------------------------------
// ✅ 1. Basic Object Schema
// ----------------------------------------
const basicUserSchema = zod_1.z.object({
    name: zod_1.z.string(),
    rank: zod_1.z.number(),
});
// Example usage
const inputUser = { name: "yash", rank: "123" };
try {
    const parsedUser = basicUserSchema.parse(inputUser); // ❌ throws
}
catch (err) {
}
const safeParsedUser = basicUserSchema.safeParse(inputUser);
console.log("Safe Parse Result:", safeParsedUser);
// ----------------------------------------
// ✅ 2. Optional and Nullable Fields
// ----------------------------------------
const optionalSchema = zod_1.z.object({
    email: zod_1.z.string().email().optional(),
    phone: zod_1.z.string().nullable(),
});
// ----------------------------------------
// ✅ 3. Default Values
// ----------------------------------------
const defaultSchema = zod_1.z.object({
    role: zod_1.z.string().default("user"),
});
// ----------------------------------------
// ✅ 4. Arrays and Nested Arrays
// ----------------------------------------
const arraySchema = zod_1.z.array(zod_1.z.number());
const nestedArraySchema = zod_1.z.array(zod_1.z.array(zod_1.z.string()));
// ----------------------------------------
// ✅ 5. Enums and Literals
// ----------------------------------------
const roleEnum = zod_1.z.enum(["admin", "user", "guest"]);
const literalExample = zod_1.z.literal("ACTIVE");
// ----------------------------------------
// ✅ 6. Tuples
// ----------------------------------------
const tupleSchema = zod_1.z.tuple([zod_1.z.string(), zod_1.z.number(), zod_1.z.boolean()]);
// ----------------------------------------
// ✅ 7. Unions and Intersections
// ----------------------------------------
const unionSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.number()]);
const intersectSchema = zod_1.z.object({ a: zod_1.z.string() }).and(zod_1.z.object({ b: zod_1.z.number() }));
// ----------------------------------------
// ✅ 8. Schema Refinement
// ----------------------------------------
const passwordSchema = zod_1.z
    .string()
    .min(8)
    .refine((val) => /[A-Z]/.test(val), {
    message: "Must include a capital letter",
});
// ----------------------------------------
// ✅ 9. Transformations
// ----------------------------------------
const transformSchema = zod_1.z
    .string()
    .transform((val) => val.toUpperCase());
const upperCaseName = transformSchema.parse("yash");
console.log("Transformed Name:", upperCaseName); // YASH
const typedUser = { name: "Rohit", rank: 5 };
// ----------------------------------------
// ✅ 11. Using Shared Zod Schemas in Frontend & Backend
// ----------------------------------------
// 1. Create a shared npm package (or folder in monorepo) `@yash/zod-schemas`
// 2. Export all schemas like:
exports.BlogSchema = zod_1.z.object({
    blogId: zod_1.z.string(),
    title: zod_1.z.string().optional(),
    content: zod_1.z.string().optional(),
    published: zod_1.z.boolean().optional(),
});
// 3. Use in Backend:
// import { BlogSchema } from '@yash/zod-schemas';
// 4. Use in Frontend:
// import { BlogSchema } from '@yash/zod-schemas';
// ✅ Bonus: Publishing to npm
// ----------------------------------------
// npm init --scope=@your-name
// npm login
// tsc --declaration // or tsup if using bundler
// npm publish --access public
// ✅ Use in another project:
// npm install @your-name/zod-schemas
// ✅ Add Zod types:
// type BlogInput = z.infer<typeof BlogSchema>;
// frontend: form validation, backend: API validation
