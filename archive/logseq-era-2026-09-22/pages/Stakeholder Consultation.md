public:: true

# Stakeholder Consultation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:stakeholder-consultation",
  "@type": "Page",
  "title": "Stakeholder Consultation",
  "vc:slug": "stakeholder-consultation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:stakeholder-consultation",
  "@type": "Class",
  "label": "Stakeholder Consultation",
  "definition": "Stakeholder consultation is the structured process of seeking, gathering, and incorporating the views of parties affected by or interested in a decision, policy, or project. It enhances legitimacy, surfaces risks and local knowledge, and builds trust by giving affected groups a genuine voice before decisions are finalised. Consultation ranges from informing and gathering feedback through to collaborative and participatory decision-making.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:governance-framework",
      "label": "Governance Framework"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:governance-framework",
        "label": "Governance Framework"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:policy-framework",
        "label": "Policy Framework"
      },
      {
        "@id": "urn:ngm:class:impact-assessment",
        "label": "Impact Assessment"
      },
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      },
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:policy-framework",
        "label": "Policy Framework"
      },
      {
        "@id": "urn:ngm:class:impact-assessment",
        "label": "Impact Assessment"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:governance-framework",
        "label": "Governance Framework"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:impact-assessment",
        "label": "Impact Assessment"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
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
  - Stakeholder consultation is the structured process of seeking, gathering, and incorporating the views of parties affected by or interested in a decision, policy, or project. It enhances legitimacy, surfaces risks and local knowledge, and builds trust by giving affected groups a genuine voice before decisions are finalised. Consultation ranges from informing and gathering feedback through to collaborative and participatory decision-making.
  - Related concepts: [[Governance Framework]] [[Policy Framework]] [[Transparency]] [[Accountability]] [[Impact Assessment]]
- ### Overview
  - Decisions imposed without consultation tend to be brittle, contested, and blind to local realities; stakeholder consultation addresses this by building participation into the decision lifecycle. Practitioners map who is affected, choose engagement methods proportionate to the stakes, and document how input shaped the outcome. Done well, consultation improves both the quality and the perceived legitimacy of policy and project decisions.
- ### Key aspects
  - Stakeholder identification and mapping by interest and influence
  - A ladder of engagement from informing to co-deciding
  - Inclusive and accessible methods to reach marginalised voices
  - Transparent feedback loops showing how input was used
  - Documentation supporting accountability and impact assessment
- ### Applications
  - Public consultation on regulation and planning decisions
  - Environmental and social impact assessments
  - Standards development and multi-stakeholder governance
  - Community engagement in infrastructure and technology projects
- ### Relationships
  - subClassOf:: [[Governance Framework]]
  - partOf:: [[Governance Framework]]
  - relatedTo:: [[Policy Framework]]
  - relatedTo:: [[Impact Assessment]]
  - relatedTo:: [[Transparency]]
  - requires:: [[Transparency]]
  - requires:: [[Accountability]]
  - enables:: [[Policy Framework]]
  - enables:: [[Impact Assessment]]
  - supports:: [[Regulatory Compliance]]
  - supports:: [[Governance Framework]]
  - uses:: [[Impact Assessment]]
  - dependsOn:: [[Accountability]]
  - bridgesTo:: [[Governance]]
  - contrastsWith:: [[Regulatory Compliance]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
