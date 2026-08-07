public:: true

# Vendor Lock-in

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:vendor-lock-in",
  "@type": "Page",
  "title": "Vendor Lock-in",
  "vc:slug": "vendor-lock-in",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:vendor-lock-in",
  "@type": "Class",
  "label": "Vendor Lock-in",
  "definition": "Vendor lock-in is a situation in which a customer becomes dependent on a particular supplier's products or services and cannot switch to an alternative without substantial cost, effort or disruption. It arises from proprietary formats, non-portable data, integration dependencies and incompatible interfaces that raise switching costs. Open standards, data portability and interoperability are the principal countermeasures that preserve customer choice.",
  "domain": "standards",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-network-and-comms",
      "label": "Network and Communication"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      },
      {
        "@id": "urn:ngm:class:open-standard",
        "label": "Open Standard"
      },
      {
        "@id": "urn:ngm:class:portability",
        "label": "Portability"
      },
      {
        "@id": "urn:ngm:class:open-source",
        "label": "Open Source"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:api",
        "label": "API"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-portability",
        "label": "Data Portability"
      },
      {
        "@id": "urn:ngm:class:asset-portability",
        "label": "Asset Portability"
      },
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      },
      {
        "@id": "urn:ngm:class:standards-compliance",
        "label": "Standards Compliance"
      },
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:standards",
        "label": "Standards"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:api",
        "label": "API"
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
  - A dependency on one supplier that makes switching costly, the inverse of [[Interoperability]].
  - Sustained by proprietary formats and weak [[Data Portability]].
  - Mitigated by [[Open Standard]] adoption and [[Portability]].
- ### Overview
  - Lock-in can be technical (data and APIs), contractual, or skills-based.
  - High switching costs reduce competitive pressure on the incumbent supplier.
  - Cloud platforms can create lock-in through proprietary managed services and egress fees.
  - Procurement and architecture choices made early strongly influence later exit costs.
- ### Key aspects
  - Proprietary data formats hindering migration.
  - Non-standard or undocumented integration interfaces.
  - Ecosystem dependencies and bundled services.
  - Egress costs and data extraction friction.
- ### Applications
  - Cloud migration and exit-planning analysis.
  - Procurement risk assessment and supplier diversification.
  - Open-standards advocacy and architecture governance.
- ### Relationships
  - subClassOf:: [[Network and Communication]]
  - contrastsWith:: [[Interoperability]]
  - contrastsWith:: [[Open Standard]]
  - contrastsWith:: [[Portability]]
  - contrastsWith:: [[Open Source]]
  - dependsOn:: [[API]]
  - relatedTo:: [[Data Portability]]
  - relatedTo:: [[Asset Portability]]
  - relatedTo:: [[Cloud Computing]]
  - relatedTo:: [[Standards Compliance]]
  - relatedTo:: [[Interoperability]]
  - bridgesTo:: [[Standards]]
  - requires:: [[API]]
- ### Provenance
  - updated:: 2026-06-15
