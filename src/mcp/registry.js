import { tools } from "./tool";

export async function executeTool(toolName, payload) {
  const tool = tools[toolName];

  if (!tool) {
    throw new Error(`Tool "${toolName}" not found.`);
  }

  return await tool(payload);
}