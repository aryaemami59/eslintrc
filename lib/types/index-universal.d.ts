import type { ConfigArray } from "@eslint/config-array";
import type { ESLint, Linter, Rule } from "eslint";

declare function getRuleSeverity(ruleConfig: Linter.RuleEntry): Linter.Severity;

declare function normalizeToStrings(config: any): void;

declare function isErrorSeverity(ruleConfig: Linter.RuleEntry): boolean;

declare function isValidSeverity(ruleConfig: Linter.RuleEntry): boolean;

declare function isEverySeverityValid(config: any): boolean;

declare function normalizeConfigGlobal(
    configuredValue: boolean | string | null
): Extract<Linter.GlobalConf, "readonly" | "writable" | "off">;

declare class ConfigValidator {
    builtInRules: Map<string, Rule.RuleModule>;

    constructor(options?: { builtInRules?: Map<string, Rule.RuleModule> });

    getRuleOptionsSchema(
        rule: Rule.RuleModule | null
    ): Rule.RuleMetaData["schema"] | null;

    validateRuleSeverity(
        options: Linter.RuleEntry | undefined
    ): Linter.RuleSeverity;

    validateRuleSchema(rule: Rule.RuleModule | null, localOptions: any[]): void;

    validateRuleOptions(
        rule: Rule.RuleModule | null,
        ruleId: string,
        options: Linter.RuleEntry | undefined,
        source?: string | null
    ): void;

    validateEnvironment(
        environment: ESLint.Environment | undefined,
        source: string,
        getAdditionalEnv?: (envId: string) => ESLint.Environment | null
    ): void;

    validateRules(
        rulesConfig: Linter.Config["rules"],
        source: string,
        getAdditionalRule?: (ruleId: string) => Rule.RuleModule | null
    ): void;

    validateGlobals(
        globalsConfig: Linter.Globals | undefined,
        source?: string | null
    ): void;

    validateProcessor(
        processorName: string | undefined,
        source: string,
        getProcessor: (id: string) => Linter.Processor | undefined
    ): void;

    formatErrors(errors: any[]): string;

    validateConfigSchema(
        config: Linter.Config & Linter.LegacyConfig,
        source?: string | null
    ): void;

    validate(
        config: Linter.Config & Linter.LegacyConfig,
        source: string,
        getAdditionalRule?: (ruleId: string) => Rule.RuleModule | null,
        getAdditionalEnv?: (envId: string) => ESLint.Environment | null
    ): void;

    validateConfigArray(configArray: ConfigArray): void;
}

declare function normalizePackageName(name: string, prefix: string): string;

declare function getShorthandName(fullname: string, prefix: string): string;

declare function getNamespaceFromTerm(term: string): string;

export declare const Legacy: {
    environments: Map<string, ESLint.Environment>;

    ConfigOps: {
        getRuleSeverity: typeof getRuleSeverity;
        normalizeToStrings: typeof normalizeToStrings;
        isErrorSeverity: typeof isErrorSeverity;
        isValidSeverity: typeof isValidSeverity;
        isEverySeverityValid: typeof isEverySeverityValid;
        normalizeConfigGlobal: typeof normalizeConfigGlobal;
    };

    ConfigValidator: typeof ConfigValidator;

    naming: {
        normalizePackageName: typeof normalizePackageName;
        getShorthandName: typeof getShorthandName;
        getNamespaceFromTerm: typeof getNamespaceFromTerm;
    };
};
