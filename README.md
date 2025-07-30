# ZOD# Zod + TypeScript Complete Guide 📘

This repo covers **Zod from Basic to Advanced** concepts with full TypeScript support. It is designed for use in both **frontend and backend** via a shared NPM package.

---

## 📦 What is Zod?

Zod is a TypeScript-first schema declaration and validation library. It allows you to:

* Validate incoming data (e.g., API body)
* Infer TypeScript types
* Share validation between frontend & backend

---

## 🚀 Use Cases

| Use Case                    | Zod Usage                                |
| --------------------------- | ---------------------------------------- |
| API request validation      | `safeParse()` for backend request bodies |
| Form validation (frontend)  | Validate input data before submitting    |
| Shared schema between FE/BE | Publish Zod schemas to NPM               |

---

## 📁 Project Structure

```
my-zod-schemas/
├── src/
│   └── index.ts        # All Zod schemas
├── package.json
├── tsconfig.json
└── README.md
```

---

## ✅ Basic Zod Example

```ts
const userSchema = z.object({
  name: z.string(),
  rank: z.number(),
});

userSchema.safeParse({ name: "Yash", rank: 1 });
```

---

## 📚 Advanced Concepts

| Concept        | Example                                   |
| -------------- | ----------------------------------------- |
| Optional Field | `z.string().optional()`                   |
| Nullable       | `z.string().nullable()`                   |
| Enum           | `z.enum(["admin", "user"])`               |
| Literal        | `z.literal("ACTIVE")`                     |
| Tuple          | `z.tuple([z.string(), z.number()])`       |
| Union          | `z.union([z.string(), z.number()])`       |
| Transform      | `z.string().transform(val => val.trim())` |
| Refinement     | `.refine(val => val.length > 5)`          |
| Type Inference | `z.infer<typeof schema>`                  |

---

## 🧩 Share Zod Types (Frontend + Backend)

1. **Create an NPM package**

```bash
npm init --scope=@yourname
```

2. **Write schemas in `src/index.ts`**

```ts
export const BlogSchema = z.object({
  blogId: z.string(),
  title: z.string().optional(),
  content: z.string().optional(),
  published: z.boolean().optional(),
});
```

3. **Compile and Publish**

```bash
npm login
npm run build   # (e.g. tsc or tsup)
npm publish --access public
```

4. **Use Anywhere**

```ts
import { BlogSchema } from '@yourname/zod-schemas';
```

---

## 🛠️ Useful CLI Commands

| Command                             | Description                   |
| ----------------------------------- | ----------------------------- |
| `npm init`                          | Create a new package          |
| `tsc --declaration`                 | Compile to `.js` + `.d.ts`    |
| `npm login`                         | Authenticate to NPM registry  |
| `npm publish --access public`       | Publish scoped public package |
| `npm install @yourname/zod-schemas` | Use in other projects         |

---

## 📄 License

MIT

---

Made with ❤️ by [Yash Lalage](https://github.com/yashlalage0501)

---

To download this full guide as a PDF, let me know — I’ll generate one for you!
