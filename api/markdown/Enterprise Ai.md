public:: true

# Enterprise Ai
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:enterprise-ai",
  "@type": "Page",
  "title": "Enterprise Ai",
  "vc:slug": "enterprise-ai",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:enterprise-ai",
  "@type": "Class",
  "label": "Enterprise Ai",
  "definition": "Enterprise AI is the application of artificial-intelligence systems within large organisations to automate workflows, augment knowledge work and inform decisions, subject to governance, security and integration constraints. It spans foundation-model assistants, retrieval-augmented systems over corporate data, and agentic automation embedded in existing software estates. Distinct from consumer AI, it prioritises auditability, data residency, access control and measurable return on investment.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:artificial-intelligence",
      "label": "Artificial Intelligence"
    }
  ],
  "relations": {
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:enterprise-automation",
        "label": "Enterprise Automation"
      },
      {
        "@id": "urn:ngm:class:enterprise-resource-planning",
        "label": "Enterprise Resource Planning"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ai-adoption",
        "label": "AI Adoption"
      },
      {
        "@id": "urn:ngm:class:technology-adoption",
        "label": "Technology Adoption"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:institutional-adoption",
        "label": "Institutional Adoption"
      },
      {
        "@id": "urn:ngm:class:enterprise-ai-adoption",
        "label": "Enterprise AI Adoption"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:foundation-model",
        "label": "Foundation Model"
      },
      {
        "@id": "urn:ngm:class:ai-agents",
        "label": "AI Agents"
      },
      {
        "@id": "urn:ngm:class:microsoft-copilot",
        "label": "Microsoft Copilot"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:ai-governance-law-and-privacy",
        "label": "AI Governance Law and Privacy"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:agentic-workflow",
        "label": "Agentic Workflow"
      },
      {
        "@id": "urn:ngm:class:enterprise-search",
        "label": "Enterprise Search"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:foundation-model",
        "label": "Foundation Model"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:ai-governance-law-and-privacy",
        "label": "AI Governance Law and Privacy"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ai-adoption",
        "label": "AI Adoption"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```
- ### Definition
  - Enterprise AI is the application of artificial-intelligence systems within large organisations to automate workflows, augment knowledge work and inform decisions, subject to governance, security and integration constraints. It spans foundation-model assistants, retrieval-augmented systems over corporate data, and agentic automation embedded in existing software estates. Distinct from consumer AI, it prioritises auditability, data residency, access control and measurable return on investment.
  - Related concepts: [[Artificial Intelligence]] [[Foundation Model]] [[Enterprise Automation]] [[AI Governance Law and Privacy]] [[Institutional Adoption]]
- ### Overview
  - Enterprise AI integrates models into the operational fabric of a business: connected to systems of record, gated by identity and access management, and monitored for cost and compliance. The dominant patterns are assistant copilots embedded in productivity tools, retrieval-augmented generation grounding outputs in proprietary corpora, and autonomous or semi-autonomous agents executing multi-step processes. Success is governed less by raw model capability than by data plumbing, evaluation, and organisational change.
- ### Key aspects
  - Grounding model outputs in proprietary corporate data
  - Identity, access control and data-residency constraints
  - Cost governance and ROI measurement
  - Human-in-the-loop oversight and auditability
  - Integration with existing ERP, CRM and workflow systems
- ### Applications
  - Knowledge-work copilots for drafting, summarising and search
  - Customer-support automation grounded in internal documentation
  - Agentic process automation across back-office workflows
  - Decision support over enterprise analytics and reporting
- ### Relationships
  - subClassOf:: [[Artificial Intelligence]]
  - bridgesTo:: [[Enterprise Automation]]
  - bridgesTo:: [[Enterprise Resource Planning]]
  - supports:: [[AI Adoption]]
  - supports:: [[Technology Adoption]]
  - relatedTo:: [[Institutional Adoption]]
  - relatedTo:: [[Enterprise AI Adoption]]
  - uses:: [[Foundation Model]]
  - uses:: [[AI Agents]]
  - uses:: [[Microsoft Copilot]]
  - requires:: [[AI Governance Law and Privacy]]
  - enables:: [[Agentic Workflow]]
  - enables:: [[Enterprise Search]]
  - implements:: [[Foundation Model]]
  - dependsOn:: [[AI Governance Law and Privacy]]
  - contrastsWith:: [[AI Adoption]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
