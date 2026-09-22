public:: true

# Co Regulation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:co-regulation",
  "@type": "Page",
  "title": "Co Regulation",
  "vc:slug": "co-regulation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:co-regulation",
  "@type": "Class",
  "label": "Co Regulation",
  "definition": "Co-regulation is a governance model in which statutory authorities and industry actors jointly develop and enforce rules, blending the legitimacy and backstop powers of the state with the technical expertise and agility of the regulated sector. It sits between command-and-control regulation and pure self-regulation: codes of practice drafted by industry are approved and overseen by a public regulator that retains enforcement powers. The approach is common in online safety, broadcasting and data protection.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:regulatory-framework",
      "label": "Regulatory Framework"
    }
  ],
  "relations": {
    "partOf": {
      "@id": "urn:ngm:class:regulatory-framework",
      "label": "Regulatory Framework"
    },
    "implements": [
      {
        "@id": "urn:ngm:class:policy-framework",
        "label": "Policy Framework"
      },
      {
        "@id": "urn:ngm:class:regulation",
        "label": "Regulation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:self-regulation",
        "label": "Self-Regulation"
      },
      {
        "@id": "urn:ngm:class:centralised-finance",
        "label": "Centralised Finance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:audit",
        "label": "Audit"
      },
      {
        "@id": "urn:ngm:class:transparency-reporting",
        "label": "Transparency Reporting"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:platform-governance",
        "label": "Platform Governance"
      },
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ofcom",
        "label": "Ofcom"
      },
      {
        "@id": "urn:ngm:class:uk-online-safety-act",
        "label": "UK Online Safety Act"
      },
      {
        "@id": "urn:ngm:class:content-moderation",
        "label": "Content Moderation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
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
  - Co-regulation is a [[Regulatory Framework]] combining state oversight with industry rule-making.
  - It contrasts with [[Self-Regulation]] by retaining statutory enforcement.
  - Bodies such as [[Ofcom]] approve industry codes under regimes like the [[UK Online Safety Act]].
- ### Overview
  - Under co-regulation, industry drafts detailed codes of practice that a public regulator scrutinises, approves and ultimately enforces.
  - The model leverages sector expertise and adaptability while preserving democratic legitimacy and a statutory backstop.
  - It is widely used where technology evolves faster than primary legislation can be amended.
- ### Key aspects
  - Industry-authored codes ratified by a statutory regulator.
  - Retained public enforcement and sanctioning powers.
  - Shared standard-setting between regulator and regulated.
  - Periodic review and accountability mechanisms.
- ### Applications
  - Online safety codes overseen by national communications regulators.
  - Broadcasting and advertising standards governance.
  - Data-protection codes endorsed by privacy authorities.
- ### Trade-offs
  - Faster adaptation than pure statute, with retained legitimacy.
  - Risk of regulatory capture if oversight is weak.
  - Dependence on credible enforcement to deter non-compliance.
- ### Relationships
  - partOf:: [[Regulatory Framework]]
  - implements:: [[Policy Framework]]
  - implements:: [[Regulation]]
  - contrastsWith:: [[Self-Regulation]]
  - contrastsWith:: [[Centralised Finance]]
  - requires:: [[Accountability]]
  - requires:: [[Compliance]]
  - uses:: [[Audit]]
  - uses:: [[Transparency Reporting]]
  - supports:: [[Platform Governance]]
  - supports:: [[Governance]]
  - relatedTo:: [[Ofcom]]
  - relatedTo:: [[UK Online Safety Act]]
  - relatedTo:: [[Content Moderation]]
  - enables:: [[Data Governance]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - quality:: 0.62
