public:: true

# Business Rules Engine

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:business-rules-engine",
  "@type": "Page",
  "title": "Business Rules Engine",
  "vc:slug": "business-rules-engine",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:business-rules-engine",
  "@type": "Class",
  "label": "Business Rules Engine",
  "definition": "A Business Rules Engine (BRE) is a software component that externalises and executes business logic as declarative rules separate from application code. Rules are authored by domain experts in natural-language-like syntax and evaluated against facts at runtime using algorithms such as the Rete network. BREs enable non-technical stakeholders to modify organisational policies without redeploying software, making them a key enabler of agile governance and compliance automation.",
  "domain": "governance",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:governance", "label": "Governance"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:rule-repository", "label": "Rule Repository"},
      {"@id": "urn:ngm:class:inference-engine", "label": "Inference Engine"},
      {"@id": "urn:ngm:class:fact-model", "label": "Fact Model"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:knowledge-representation", "label": "Knowledge Representation"},
      {"@id": "urn:ngm:class:reasoning-engine", "label": "Reasoning Engine"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:compliance-automation", "label": "Compliance Automation"},
      {"@id": "urn:ngm:class:policy-enforcement", "label": "Policy Enforcement"},
      {"@id": "urn:ngm:class:decision-management", "label": "Decision Management"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:rete-algorithm", "label": "Rete Algorithm"},
      {"@id": "urn:ngm:class:decision-table", "label": "Decision Table"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:dmn", "label": "DMN"},
      {"@id": "urn:ngm:class:drools", "label": "Drools"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"},
      {"@id": "urn:ngm:class:risk-management", "label": "Risk Management"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:workflow-automation", "label": "Workflow Automation"},
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:hardcoded-logic", "label": "Hardcoded Logic"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:ai-decision-system", "label": "AI Decision System"}
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A [[Business Rules Engine]] externalises business logic as declarative rules, separating policy from application code.
  - Rules are evaluated against a [[Fact Model]] at runtime using pattern-matching algorithms such as the [[Rete Algorithm]].
  - Enables domain experts to author and modify rules without redeployment, supporting agile [[Regulatory Compliance]].
  - Standardised representations include [[DMN]] (Decision Model and Notation) for portable rule interchange.

- ### Overview
  - In traditional software, business logic is embedded in procedural code, making it hard for non-developers to modify.
  - A BRE separates the rule store from the execution engine, allowing business analysts to manage rules directly.
  - The [[Inference Engine]] pattern-matches incoming facts against rule conditions and fires consequents.
  - Widely deployed in banking (credit decisioning), insurance (claims), and healthcare (eligibility) domains.

- ### Key Aspects
  - **Rule authoring**: if-then syntax, decision tables, or decision trees authored in a rule IDE.
  - **Pattern matching**: [[Rete Algorithm]] compiles rules into a network for efficient incremental evaluation.
  - **Conflict resolution**: strategies (priority, specificity, recency) determine which rule fires when multiple match.
  - **Auditability**: rule execution traces provide human-readable explanations of decisions.

- ### Mechanisms
  - Facts (data objects) are inserted into working memory and matched against rule conditions.
  - The agenda queues activated rules; the conflict resolver selects execution order.
  - Rule actions assert new facts, retract existing ones, or invoke external services.
  - [[Decision Table]] representations flatten complex rule sets into tabular form for analyst review.

- ### Applications
  - [[Compliance Automation]] for regulatory rule sets (KYC, AML, GDPR).
  - [[Policy Enforcement]] in access control and entitlement systems.
  - Credit and insurance underwriting decision pipelines.
  - [[Smart Contract]] logic prototyping before on-chain deployment.
  - [[AI Governance]] guardrails evaluating model outputs against policy rules.

- ### Relationships
  - hasPart:: [[Rule Repository]]
  - hasPart:: [[Inference Engine]]
  - hasPart:: [[Fact Model]]
  - dependsOn:: [[Knowledge Representation]]
  - dependsOn:: [[Reasoning Engine]]
  - enables:: [[Compliance Automation]]
  - enables:: [[Policy Enforcement]]
  - enables:: [[Decision Management]]
  - uses:: [[Rete Algorithm]]
  - uses:: [[Decision Table]]
  - standardizedBy:: [[DMN]]
  - supports:: [[Regulatory Compliance]]
  - supports:: [[Risk Management]]
  - relatedTo:: [[Workflow Automation]]
  - relatedTo:: [[AI Governance]]
  - relatedTo:: [[Smart Contract]]
  - contrastsWith:: [[Machine Learning]]
  - bridgesTo:: [[AI Decision System]]

- ### Provenance
  - updated:: 2026-06-15
