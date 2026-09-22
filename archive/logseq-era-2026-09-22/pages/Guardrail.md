public:: true

# Guardrail
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2f0a9e4fec74e596ad09c1ed0f7b77efd01d2149acc4d492e06a87a0da365b1f",
  "@type": "Page",
  "vc:slug": "guardrail",
  "title": "Guardrail",
  "vc:public": true,
  "vc:outboundWikilinks": [
    { "@id": "urn:visionflow:linked:ai-safety", "vc:label": "AISafety" },
    { "@id": "urn:visionflow:linked:content-moderation", "vc:label": "ContentModeration" },
    { "@id": "urn:visionflow:linked:constrained-decoding", "vc:label": "ConstrainedDecoding" },
    { "@id": "urn:visionflow:linked:constitutional-ai", "vc:label": "ConstitutionalAI" }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": { "@id": "did:nostr:ontology-mesh" },
  "prov:generatedAtTime": { "@value": "2026-08-07T00:00:00Z", "@type": "xsd:dateTime" }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:guardrail",
  "@type": "Class",
  "label": "Guardrail",
  "definition": "A programmable safety control placed around a language model or agent that inspects, constrains, or rewrites inputs and outputs to keep behaviour within a defined policy envelope. Guardrails operate at runtime as input filters, output validators, topic and PII detectors, schema or format enforcers, and tool-permission gates; they block, redact, or re-prompt when a violation is detected, providing an enforcement layer that is independent of, and complementary to, the alignment baked into the model itself.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": { "@id": "urn:ngm:class:ai-safety", "label": "AI Safety" },
  "relations": {
    "uses": [
      { "@id": "urn:ngm:class:content-moderation", "label": "Content Moderation" },
      { "@id": "urn:ngm:class:constrained-decoding", "label": "Constrained Decoding" }
    ],
    "enables": [
      { "@id": "urn:ngm:class:ai-safety", "label": "AI Safety" }
    ],
    "contrastsWith": [
      { "@id": "urn:ngm:class:constitutional-ai", "label": "Constitutional AI" }
    ]
  },
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "GapFill"
  }
}
```

- ### Definition
  - "A programmable safety control placed around a language model or agent that inspects, constrains, or rewrites inputs and outputs to keep behaviour within a defined policy envelope. Guardrails operate at runtime as input filters, output validators, topic and PII detectors, schema or format enforcers, and tool-permission gates; they block, redact, or re-prompt when a violation is detected, providing an enforcement layer that is independent of, and complementary to, the alignment baked into the model itself."

- ### In Plain Terms
  - A guardrail is a safety check wrapped around an AI that watches what goes in and what comes out, and steps in to block or fix anything that breaks the rules.

- ### Semantic Classification
  - owl-class:: security:Guardrail
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[AISafety]]
  - uses:: [[ContentModeration]]
  - uses:: [[ConstrainedDecoding]]
  - enables:: [[AISafety]]
  - contrasts-with:: [[ConstitutionalAI]]

- ### Content

  ## Definition

  A **guardrail** is an external enforcement mechanism that sits between a user, a model, and the tools an agent can reach, ensuring that traffic in both directions conforms to a stated policy. Unlike training-time alignment, which shapes what a model is inclined to do, a guardrail is a runtime control that acts regardless of the model's disposition: even a perfectly aligned model can be jailbroken, hallucinate, or be pointed at an out-of-scope task, and the guardrail is the deterministic backstop that catches these cases before they reach the user or an irreversible action.

  Guardrails come in two broad orientations. Input guardrails screen prompts before they reach the model — detecting prompt-injection attempts, off-topic requests, personally identifiable information, or disallowed intents — and can block or sanitise them. Output guardrails validate the model's response — enforcing a JSON schema, checking for toxic or unsafe content, verifying that cited facts are grounded, or stripping secrets — and can reject, redact, or trigger a re-generation. Between them sit action guardrails that gate an agent's tool use, requiring that a proposed database write or shell command satisfy a permission policy before it executes.

  ## Implementation Patterns

  Guardrails are typically implemented as a chain of validators, each returning a pass, fail, or fix verdict. Cheap deterministic checks — regular expressions, allow-lists, schema validators, [[ConstrainedDecoding]] that forces output to match a grammar — run first and fail fast. More expensive checks, such as a moderation classifier or a small judge model, run when the deterministic layer is inconclusive; these reuse [[ContentModeration]] machinery to score text against safety categories. On failure, a guardrail can hard-block, silently redact, or re-prompt the model with the violation described, the last of which preserves usefulness while still enforcing policy.

  ## Relationship to Alignment

  A guardrail **contrasts with** [[ConstitutionalAI]] and other training-time alignment methods: alignment changes the model's weights so it is intrinsically less likely to misbehave, whereas a guardrail assumes the model may misbehave and constrains it from the outside. The two are complementary layers of defence in depth — alignment reduces the rate of violations, guardrails catch the residual ones deterministically — and together they underpin a system's overall [[AISafety]] posture. Because guardrails are explicit and auditable, they are also the layer where compliance requirements, red-team findings, and incident fixes are most cheaply encoded.
