public:: true

# Semiconductor Supply Chain

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:semiconductor-supply-chain",
  "@type": "Page",
  "title": "Semiconductor Supply Chain",
  "vc:slug": "semiconductor-supply-chain",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:semiconductor-supply-chain",
  "@type": "Class",
  "label": "Semiconductor Supply Chain",
  "definition": "The semiconductor supply chain is the globally distributed network of design, fabrication, assembly, testing and distribution activities that produce integrated circuits. It is highly specialised and geographically concentrated, depending on leading-edge foundries, advanced lithography equipment, rare materials and complex logistics. Because chips underpin computing, AI and critical infrastructure, the semiconductor supply chain has become a focal point of geopolitics, export controls and national-security policy.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:supply-chain",
      "label": "Supply Chain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:foundry",
        "label": "Foundry"
      },
      {
        "@id": "urn:ngm:class:logistics",
        "label": "Logistics"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:export-controls",
        "label": "Export Controls"
      },
      {
        "@id": "urn:ngm:class:geopolitics",
        "label": "Geopolitics"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:supply-chain",
        "label": "Supply Chain"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:supply-chain-management",
        "label": "Supply Chain Management"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ai-chips",
        "label": "AI Chips"
      },
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:compute-governance",
        "label": "Compute Governance"
      },
      {
        "@id": "urn:ngm:class:digital-sovereignty",
        "label": "Digital Sovereignty"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:hardware",
        "label": "Hardware"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:supply-chain-management",
        "label": "Supply Chain Management"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:resilience",
        "label": "Resilience"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:supply-chain-management",
        "label": "Supply Chain Management"
      }
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
  - The [[Semiconductor Supply Chain]] spans design through fabrication and distribution, depending on the [[Foundry]], [[Logistics]] and [[Export Controls]], and central to [[Compute Governance]] and [[Digital Sovereignty]].
- ### Overview
  - Globally distributed network producing integrated circuits.
  - Highly specialised and geographically concentrated at the leading edge.
  - A focal point of geopolitics, export controls and national security.
- ### Key aspects
  - Design, fabrication, assembly, test and distribution stages.
  - Dependence on advanced lithography and rare materials.
  - Concentration risk and single points of failure.
  - Export controls and trade policy shaping access.
- ### Applications
  - Compute governance and AI chip access policy.
  - National-security and resilience planning.
  - Industrial strategy and reshoring initiatives.
  - Procurement and logistics for hardware producers.
- ### Relationships
  - requires:: [[Foundry]]
  - requires:: [[Logistics]]
  - dependsOn:: [[Export Controls]]
  - dependsOn:: [[Geopolitics]]
  - partOf:: [[Supply Chain]]
  - uses:: [[Supply Chain Management]]
  - supports:: [[AI Chips]]
  - supports:: [[GPU]]
  - relatedTo:: [[Compute Governance]]
  - relatedTo:: [[Digital Sovereignty]]
  - enables:: [[Hardware]]
  - contrastsWith:: [[Supply Chain Management]]
  - bridgesTo:: [[Resilience]]
  - implements:: [[Supply Chain Management]]
- ### Provenance
  - updated:: 2026-06-15
