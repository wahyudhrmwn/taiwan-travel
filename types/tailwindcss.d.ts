// src/types/tailwindcss.d.ts atau di root proyek
import { Config } from 'tailwindcss';

declare module 'tailwindcss' {
  export type TailwindConfig = Config;
}
