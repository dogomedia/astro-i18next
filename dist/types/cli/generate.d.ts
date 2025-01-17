import { AstroI18nextConfig } from "types";
import { FileToGenerate } from "./utils";
/**
 * Reads all files inside inputPath
 *
 * @param inputPath
 * @param locales
 * @param outputPath
 */
export declare const generate: (inputPath: string, defaultLocale: AstroI18nextConfig["defaultLocale"], locales: AstroI18nextConfig["locales"], showDefaultLocale?: boolean, flatRoutes?: AstroI18nextConfig["flatRoutes"], outputPath?: string) => {
    filesToGenerate: FileToGenerate[];
    timeToProcess: number;
};
