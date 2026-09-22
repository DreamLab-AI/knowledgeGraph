public:: true

# Risk Based Regulation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:risk-based-regulation",
  "@type": "Page",
  "title": "Risk Based Regulation",
  "vc:slug": "risk-based-regulation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:risk-based-regulation",
  "@type": "Class",
  "label": "Risk Based Regulation",
  "definition": "Risk-Based Regulation is a regulatory methodology that calibrates the intensity of oversight, compliance requirements, and enforcement action to the assessed level of risk posed by regulated entities or activities. Rather than applying uniform rules to all actors, risk-based approaches tier obligations by factors such as likelihood of harm, severity of potential impact, and the capacity of regulated parties to manage risk. It is the foundational approach of the EU AI Act, financial services regulation, and many modern safety frameworks.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:governance", "label": "Governance"}],
  "relations": {
    "implements": [
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"},
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:risk-management", "label": "Risk Management"},
      {"@id": "urn:ngm:class:eu-ai-act", "label": "EU AI Act"},
      {"@id": "urn:ngm:class:policy", "label": "Policy"},
      {"@id": "urn:ngm:class:proportionality-principle", "label": "Proportionality Principle"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:compliance-automation", "label": "Compliance Automation"},
      {"@id": "urn:ngm:class:responsible-ai", "label": "Responsible AI"},
      {"@id": "urn:ngm:class:innovation-policy", "label": "Innovation Policy"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:risk-classification", "label": "Risk Classification"},
      {"@id": "urn:ngm:class:conformity-assessment", "label": "Conformity Assessment"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"},
      {"@id": "urn:ngm:class:impact-assessment", "label": "Impact Assessment"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:prescriptive-regulation", "label": "Prescriptive Regulation"},
      {"@id": "urn:ngm:class:principles-based-regulation", "label": "Principles-Based Regulation"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:iso-31000", "label": "ISO 31000"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:standards", "label": "Standards"}
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
  - [[Risk Based Regulation]] tiers regulatory obligations to the assessed risk level of regulated activities rather than applying uniform rules.
  - Risk factors include probability of harm, severity of impact, reversibility, and the vulnerability of affected populations.
  - Foundational to the [[EU AI Act]] four-tier risk classification and financial services prudential frameworks.
  - Contrasts with [[Prescriptive Regulation]] (uniform rules for all) and [[Principles-Based Regulation]] (outcome-focused only).

- ### Overview
  - Regulators face resource constraints; risk-based approaches concentrate supervisory effort on highest-risk activities.
  - The [[Proportionality Principle]] underpins risk-based design: compliance burden should match the risk posed.
  - [[Risk Assessment]] and [[Impact Assessment]] methodologies feed into risk tier assignments.
  - Regulated entities in lower tiers benefit from lighter-touch obligations, stimulating [[Innovation Policy]] goals.

- ### Key Aspects
  - **Tiering**: risk categories (e.g., unacceptable / high / limited / minimal risk in EU AI Act) map to obligation sets.
  - **Dynamic adjustment**: risk tier can change as deployment context, scale, or capability evolves.
  - **Conformity assessment**: high-risk categories require independent [[Conformity Assessment]] before market entry.
  - **Regulatory dialogue**: risk-based frameworks encourage ongoing engagement between regulator and regulated entity.

- ### Mechanisms
  - Risk classification criteria defined in primary legislation or regulatory guidance.
  - Supervised entities conduct internal [[Risk Assessment]] documented in risk registers.
  - Regulators apply supervisory intensity proportional to tier: routine review vs. intensive inspection.
  - [[Compliance Automation]] tools map organisational activities to risk tiers and flag obligation changes.

- ### Applications
  - [[AI Governance]] under the [[EU AI Act]]: prohibited uses, high-risk system obligations, transparency requirements.
  - Financial services: Basel capital adequacy tiers aligned to bank systemic importance.
  - Medical device regulation: class I/II/III risk tiers determining pre-market review requirements.
  - [[Data Governance]] frameworks assessing personal data processing risk.
  - [[Responsible AI]] deployment frameworks mapping model capability to oversight intensity.

- ### Relationships
  - implements:: [[Regulatory Compliance]]
  - implements:: [[AI Governance]]
  - relatedTo:: [[Risk Management]]
  - relatedTo:: [[EU AI Act]]
  - relatedTo:: [[Policy]]
  - relatedTo:: [[Proportionality Principle]]
  - enables:: [[Compliance Automation]]
  - enables:: [[Responsible AI]]
  - enables:: [[Innovation Policy]]
  - hasPart:: [[Risk Classification]]
  - hasPart:: [[Conformity Assessment]]
  - requires:: [[Risk Assessment]]
  - requires:: [[Impact Assessment]]
  - contrastsWith:: [[Prescriptive Regulation]]
  - contrastsWith:: [[Principles-Based Regulation]]
  - standardizedBy:: [[ISO 31000]]
  - supports:: [[AI Safety]]
  - supports:: [[Data Governance]]
  - bridgesTo:: [[Standards]]

- ### Provenance
  - updated:: 2026-06-15
