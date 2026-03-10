import { existsSync } from "node:fs";
import { join, resolve } from "node:path";

export function opencodeConfigPath(workspaceRoot: string): string {
  const root = resolve(workspaceRoot);
  const jsoncPath = join(root, "opencode.jsonc");
  const jsonPath = join(root, "opencode.json");
  const hiddenJsoncPath = join(root, ".opencode", "opencode.jsonc");
  const hiddenJsonPath = join(root, ".opencode", "opencode.json");

  if (existsSync(jsoncPath)) return jsoncPath;
  if (existsSync(jsonPath)) return jsonPath;
  if (existsSync(hiddenJsoncPath)) return hiddenJsoncPath;
  if (existsSync(hiddenJsonPath)) return hiddenJsonPath;

  if (existsSync(join(root, ".opencode"))) {
    return hiddenJsoncPath;
  }

  return jsoncPath;
}

export function openworkConfigPath(workspaceRoot: string): string {
  return join(workspaceRoot, ".opencode", "openwork.json");
}

export function projectSkillsDir(workspaceRoot: string): string {
  return join(workspaceRoot, ".opencode", "skills");
}

export function projectCommandsDir(workspaceRoot: string): string {
  return join(workspaceRoot, ".opencode", "commands");
}

export function projectPluginsDir(workspaceRoot: string): string {
  return join(workspaceRoot, ".opencode", "plugins");
}
