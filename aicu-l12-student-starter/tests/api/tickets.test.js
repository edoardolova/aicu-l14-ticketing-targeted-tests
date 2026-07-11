import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { buildTicket, postTicket, startTestApplication } from "../helpers/ticket-api.js";

describe("POST /api/tickets", () => {
  it("whatsapp is not a valid sourceChannel -> 400 + fieldErrors.sourceChannel", async (t) => {
    const baseUrl = await startTestApplication(t);
    const ticket = buildTicket({ sourceChannel: "whatsapp" });

    const response = await postTicket(baseUrl, ticket);
    const body = await response.json();

    assert.equal(response.status, 400);
    assert.equal(body.code, "VALIDATION_ERROR");
    assert.equal(body.fieldErrors.sourceChannel, "Canale di richiesta non valido.");
  });
});
