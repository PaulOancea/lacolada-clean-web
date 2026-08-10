import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { services } from "../business";

export default defineTool({
  name: "list_services",
  title: "List services",
  description: "List the self-service laundry services available at LaColada Teruel.",
  inputSchema: {},
  outputSchema: { services: z.array(z.object({ name: z.string(), description: z.string() })) },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: services.map((s) => `- ${s.name}: ${s.description}`).join("\n") }],
    structuredContent: { services },
  }),
});
