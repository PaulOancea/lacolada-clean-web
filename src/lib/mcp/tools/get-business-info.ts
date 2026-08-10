import { defineTool } from "@lovable.dev/mcp-js";
import { business } from "../business";

export default defineTool({
  name: "get_business_info",
  title: "Get business info",
  description:
    "Get public details about Lavandería LaColada Teruel: address, opening hours, languages and directions link.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(business, null, 2) }],
    structuredContent: { business },
  }),
});
