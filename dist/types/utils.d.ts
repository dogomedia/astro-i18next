/// <reference types="node" />
import load from "@proload/core";
import { AstroI18nextConfig } from "./types";
/**
 * Adapted from astro's tailwind integration:
 * https://github.com/withastro/astro/tree/main/packages/integrations/tailwind
 */
export declare const getUserConfig: (root: URL, configPath?: string) => Promise<load.Config<AstroI18nextConfig>>;
/**
 * Moves the default locale in the first index
 */
export declare const moveDefaultLocaleToFirstIndex: (locales: string[], baseLocale: string) => void;
/**
 * Interpolates a localized string (loaded with the i18nKey) to a given reference string.
 */
export declare const interpolate: (i18nKey: string, referenceString: string, namespace?: string | null) => string;
/**
 * Creates a reference string from an HTML string. The reverse of interpolate(), for use
 * with <Trans> when not explicitly setting a key
 */
export declare const createReferenceStringFromHTML: (html: string) => string;
/**
 * Injects the given locale to a path
 */
export declare const localizePath: (path?: string, locale?: string | null, base?: string) => string;
/**
 * Injects the given locale to a url
 */
export declare const localizeUrl: (url: string, locale?: string | null, base?: string) => string;
/**
 * Returns the locale detected from a given path
 */
export declare const detectLocaleFromPath: (path: string) => string;
export declare const deeplyStringifyObject: (obj: object | Array<any>) => string;
