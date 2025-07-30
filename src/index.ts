// zod-complete.ts

/**
 * Title: Complete Zod Guide with TypeScript
 * Author: Yash Lalage
 * Description: A well-documented guide with all Zod concepts (basic to advanced)
 */

import { z } from "zod";

// ----------------------------------------
// ✅ 1. Basic Object Schema
// ----------------------------------------
const basicUserSchema = z.object({
  name: z.string(),
  rank: z.number(),
});

// Example usage
const inputUser = { name: "yash", rank: "123" };
try {
  const parsedUser = basicUserSchema.parse(inputUser); // ❌ throws
} catch (err) {
  
}

const safeParsedUser = basicUserSchema.safeParse(inputUser);
console.log("Safe Parse Result:", safeParsedUser);

// ----------------------------------------
// ✅ 2. Optional and Nullable Fields
// ----------------------------------------
const optionalSchema = z.object({
  email: z.string().email().optional(),
  phone: z.string().nullable(),
});

// ----------------------------------------
// ✅ 3. Default Values
// ----------------------------------------
const defaultSchema = z.object({
  role: z.string().default("user"),
});

// ----------------------------------------
// ✅ 4. Arrays and Nested Arrays
// ----------------------------------------
const arraySchema = z.array(z.number());
const nestedArraySchema = z.array(z.array(z.string()));

// ----------------------------------------
// ✅ 5. Enums and Literals
// ----------------------------------------
const roleEnum = z.enum(["admin", "user", "guest"]);
const literalExample = z.literal("ACTIVE");

// ----------------------------------------
// ✅ 6. Tuples
// ----------------------------------------
const tupleSchema = z.tuple([z.string(), z.number(), z.boolean()]);

// ----------------------------------------
// ✅ 7. Unions and Intersections
// ----------------------------------------
const unionSchema = z.union([z.string(), z.number()]);
const intersectSchema = z.object({ a: z.string() }).and(z.object({ b: z.number() }));

// ----------------------------------------
// ✅ 8. Schema Refinement
// ----------------------------------------
const passwordSchema = z
  .string()
  .min(8)
  .refine((val) => /[A-Z]/.test(val), {
    message: "Must include a capital letter",
  });

// ----------------------------------------
// ✅ 9. Transformations
// ----------------------------------------
const transformSchema = z
  .string()
  .transform((val) => val.toUpperCase());

const upperCaseName = transformSchema.parse("yash");
console.log("Transformed Name:", upperCaseName); // YASH

// ----------------------------------------
// ✅ 10. Type Inference
// ----------------------------------------
type UserType = z.infer<typeof basicUserSchema>;
const typedUser: UserType = { name: "Rohit", rank: 5 };

// ----------------------------------------
// ✅ 11. Using Shared Zod Schemas in Frontend & Backend
// ----------------------------------------
// 1. Create a shared npm package (or folder in monorepo) `@yash/zod-schemas`
// 2. Export all schemas like:

export const BlogSchema = z.object({
  blogId: z.string(),
  title: z.string().optional(),
  content: z.string().optional(),
  published: z.boolean().optional(),
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
