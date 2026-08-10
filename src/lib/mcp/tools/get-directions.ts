import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { business } from "../business";

export default defineTool({
  name: "get_directions",
  title: "Get directions",
  description:
    "Get a Google Maps directions link to LaColada Teruel, optionally from a starting address.",
  inputSchema: {
    origin: z.string().optional().describe("Optional starting address or place name."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
  handler: ({ origin }) => {
    const url = origin
      ? `${business.directionsUrl}&origin=${encodeURIComponent(origin)}`
      : business.directionsUrl;
    return {
      content: [{ type: "text", text: `${business.address}\nDirections: ${url}\n${business.hours}` }],
      structuredContent: { address: business.address, hours: business.hours, directionsUrl: url },
    };
  },
});
