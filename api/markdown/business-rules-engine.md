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