import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { computeUrgencyLabel } from "../../server/ticket-rules.js";

describe("computeUrgencyLabel nor + email = stand", () => {
  it("normale + email -> standard", () => {
    assert.equal(computeUrgencyLabel("normale", "email"), "standard");
  });
});
