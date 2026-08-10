import { defineMcp } from "@lovable.dev/mcp-js";
import getBusinessInfo from "./tools/get-business-info";
import listServices from "./tools/list-services";
import getPrices from "./tools/get-prices";
import getDirections from "./tools/get-directions";

export default defineMcp({
  name: "lacolada-local",
  title: "LaColada Local",
  version: "0.1.0",
  instructions:
    "Public tools for Lavandería LaColada Teruel, a self-service laundromat in Teruel, Spain. Use get_business_info for address and opening hours, list_services for available services, get_prices for washing and drying prices, and get_directions for a Google Maps link.",
  tools: [getBusinessInfo, listServices, getPrices, getDirections],
});
