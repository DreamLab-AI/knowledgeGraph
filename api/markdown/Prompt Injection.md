public:: true

# prompt injection
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3bec6d6afcc2a42b00574dd30ccf440fd18b7b2323f63514d3ab283ba2a037d4",
  "@type": "Page",
  "vc:slug": "prompt-injection",
  "title": "prompt injection",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:prompt-injection",
  "@type": "Class",
  "label": "Prompt Injection",
  "definition": "Prompt injection is a class of adversarial attacks against large language model systems in which attacker-controlled text embedded in the model's input context overrides or subverts the developer-specified system prompt, causing the model to follow attacker instructions rather than its intended operating constraints. Direct prompt injection occurs when a user submits malicious instructions in their own turn; indirect prompt injection occurs when the model retrieves or processes external content (web pages, documents, tool outputs) that contains embedded adversarial instructions. As LLMs are deployed in agentic pipelines with tool-calling access to external systems, prompt injection becomes a significant security boundary violation risk.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "contrastsWith": [
      {"@id": "urn:ngm:class:adversarial-robustness", "label": "Adversarial Robustness"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:jailbreaking", "label": "Jailbreaking"},
      {"@id": "urn:ngm:class:red-teaming", "label": "Red Teaming"},
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:adversarial-attack", "label": "Adversarial Attack"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:adversarial-testing", "label": "Adversarial Testing"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Prompt injection is a class of adversarial attacks against large language model systems in which attacker-controlled text embedded in the model's input context overrides or subverts the developer-specified system prompt, causing the model to follow attacker instructions rather than its intended operating constraints. Direct prompt injection occurs when a user submits malicious instructions in their own turn; indirect prompt injection occurs when the model retrieves or processes external content (web pages, documents, tool outputs) that contains embedded adversarial instructions. As LLMs are deployed in agentic pipelines with tool-calling access to external systems, prompt injection becomes a significant security boundary violation risk.

- ### Semantic Classification
  - owl-class:: prompt-injection:Prompt Injection
  - owl-role:: Concept

- ### Relationships
  - contrastsWith [[Adversarial Robustness]]
  - relatedTo [[Jailbreaking]]
  - relatedTo [[Red Teaming]]
  - relatedTo [[AI Safety]]
  - requires [[Adversarial Attack]]
  - enables [[Adversarial Testing]]

- ### Content
  - Prompt injection is structurally analogous to SQL injection in relational databases: both exploit the conflation of control and data channels within a single input stream. In LLM systems, there is no strict syntactic demarcation between trusted system prompt text and untrusted user or external content, so the model must rely on semantic understanding to maintain trust boundaries—a task that current models perform unreliably under adversarial conditions.
  - Direct prompt injection typically takes the form of instructions that begin with phrases overriding the system context ("Ignore previous instructions and..."), escalating privilege claims, or persona substitution commands. Indirect prompt injection is more dangerous in agentic settings: a web-browsing agent may retrieve a page containing hidden instructions that exfiltrate session data via tool calls, without the user or developer being aware.
  - Defences against prompt injection include privilege separation (structurally isolating system and user context), input sanitisation and output monitoring, LLM-based judges that classify whether a response violates policy, and sandboxed execution environments for agentic tool calls. Red teaming and adversarial testing practices systematically probe these boundaries. The OWASP Top 10 for Large Language Model Applications lists prompt injection as a primary vulnerability class, and frameworks such as Anthropic's Constitutional AI and OpenAI's Instruction Hierarchy address the problem architecturally by training models to prioritise higher-trust instruction sources.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
