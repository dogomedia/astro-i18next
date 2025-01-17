import { PathsOutput } from "fdir";
import ts from "typescript";
import { AstroI18nextConfig } from "types";
export interface FileToGenerate {
    path: string;
    source: string;
}
export declare const doesStringIncludeFrontmatter: (source: string) => boolean;
export declare const extractFrontmatterFromAstroSource: (source: string) => string;
export declare const overwriteAstroFrontmatter: (source: string, frontmatter: string) => string;
export declare const addDepthToRelativePath: (relativePath: string, depth?: number) => string;
/**
 * file is hidden if its name or any of its parent folders start with an underscore
 */
export declare const isFileHidden: (filepath: string) => boolean;
export declare const resolveRelativePathsLevel: (fileContents: string, fileDepth: number) => string;
/**
 * parse frontmatter using typescript compiler
 *
 * @param source
 */
export declare const parseFrontmatter: (source: string) => ts.SourceFile;
export declare const generateLocalizedFrontmatter: (tsNode: ts.SourceFile, locale: string) => string;
/**
 * Crawls pages directory and returns all Astro pages
 * except for locale folders and excluded pages / directories (starting with underscore).
 * (https://docs.astro.build/en/core-concepts/routing/#excluding-pages)
 *
 * @param pagesDirectoryPath
 * @param childDirToCrawl will make the function crawl inside the given
 * `childDirToCrawl` (doesn't take paths, only dirname).
 */
export declare const getAstroPagesPath: (pagesDirectoryPath: string, childDirToCrawl?: AstroI18nextConfig["defaultLocale"] | undefined, locales?: AstroI18nextConfig["locales"]) => PathsOutput;
export declare const createFiles: (filesToGenerate: FileToGenerate[]) => void;
/**
 * Resolves the right translated path based on
 * a given `astroFilePath` and a locale,
 * with the `routeTranslations` mapping.
 */
export declare const resolveTranslatedAstroPath: (astroFilePath: string, locale?: string | null, basePath?: string, flatRoutes?: AstroI18nextConfig["flatRoutes"]) => string;
