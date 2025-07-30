/**
 * Title: Complete Zod Guide with TypeScript
 * Author: Yash Lalage
 * Description: A well-documented guide with all Zod concepts (basic to advanced)
 */
import { z } from "zod";
export declare const BlogSchema: z.ZodObject<{
    blogId: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    published: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
