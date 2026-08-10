import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { prices } from "../business";

export default defineTool({
  name: "get_prices",
  title: "Get prices",
  description:
    "Get the washing and drying prices at LaColada Teruel. Optionally filter by washing or drying.",
  inputSchema: {
    category: z
      .enum(["all", "washing", "drying"])
      .optional()
      .describe("Which price list to return. Defaults to all."),
  },
  outputSchema: { prices: z.record(z.string(), z.unknown()) },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category = "all" }) => {
    const result =
      category === "washing"
        ? { currency: prices.currency, washing: prices.washing, included: prices.included }
        : category === "drying"
          ? { currency: prices.currency, drying: prices.drying, included: prices.included }
          : prices;
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      structuredContent: { prices: result },
    };
  },
});
