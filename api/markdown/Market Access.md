public:: true

# Market Access
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:market-access", "@type":"Page", "title":"Market Access", "vc:slug":"market-access", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:market-access",
  "@type": "Class",
  "label": "Market Access",
  "definition": "Market access is the ability of a product, service or system to be lawfully sold and adopted within a target jurisdiction or sector, conditioned on meeting regulatory, certification and conformity requirements. For robotic and physical-automation systems it depends on demonstrating compliance with safety, electromagnetic and product-directive obligations such as CE marking before placement on a market. Achieving market access is therefore a gateway to commercialisation rather than a purely commercial activity.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robotics",
      "label": "Robotics"
    },
    {
      "@id": "urn:ngm:class:robo-safety-and-standards",
      "label": "Safety and Standards"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:regulatory-approval",
        "label": "Regulatory Approval"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:ce-marking",
        "label": "CE Marking"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:supply-chain",
        "label": "Supply Chain"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ce-marking",
        "label": "CE Marking"
      },
      {
        "@id": "urn:ngm:class:regulatory-approval",
        "label": "Regulatory Approval"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ce-marking",
        "label": "CE Marking"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:supply-chain",
        "label": "Supply Chain"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:regulatory-approval",
        "label": "Regulatory Approval"
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
- Market access is the lawful ability to place a product or system on a target market, gated by [[Compliance]], [[Regulatory Approval]] and conformity marks such as [[CE Marking]]. For [[Robotics]] it unlocks the downstream [[Supply Chain]] and commercial deployment.
- ### Overview
- Building a capable robotic system is necessary but not sufficient for commercial success; the system must also satisfy the legal and conformity requirements of each jurisdiction it will be sold into.
- Market access frames these requirements as a gateway: until conformity is demonstrated and documented, a product may not legally be placed on the market.
- Because requirements differ across regions, market access is often pursued jurisdiction by jurisdiction, with overlapping but distinct evidence needs.
- ### Key aspects
- Conformity assessment against applicable directives and standards.
- Technical documentation and declaration of conformity.
- Affixing recognised marks such as CE for the relevant economic area.
- Ongoing post-market surveillance and reporting obligations.
- ### Applications
- Placing industrial and service robots on regional markets.
- Commercialising automation hardware and embedded systems.
- Coordinating supply-chain entry once conformity is achieved.
- ### Relationships
- requires:: [[Regulatory Approval]]
- requires:: [[Compliance]]
- dependsOn:: [[CE Marking]]
- enables:: [[Supply Chain]]
- supports:: [[Risk Assessment]]
- relatedTo:: [[CE Marking]]
- relatedTo:: [[Regulatory Approval]]
- relatedTo:: [[Compliance]]
- standardizedBy:: [[CE Marking]]
- bridgesTo:: [[Supply Chain]]
- contrastsWith:: [[Regulatory Approval]]
- ### Provenance
- updated:: 2026-06-15
