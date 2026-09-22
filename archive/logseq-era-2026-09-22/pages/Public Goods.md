public:: true

# Public Goods

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:public-goods",
  "@type": "Page",
  "title": "Public Goods",
  "vc:slug": "public-goods",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:public-goods",
  "@type": "Class",
  "label": "Public Goods",
  "definition": "Public goods are goods or services that are non-excludable and non-rival in consumption, meaning that no one can be effectively prevented from using them and one person's use does not diminish availability to others. Because individuals cannot be charged directly, public goods are prone to under-provision through the free-rider problem and typically require collective or government funding. Examples include clean air, national defence, public knowledge, and open-source software.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:economics",
      "label": "Economics"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:economics",
        "label": "Economics"
      },
      {
        "@id": "urn:ngm:class:welfare-economics",
        "label": "Welfare Economics"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:collective-action",
        "label": "Collective Action"
      },
      {
        "@id": "urn:ngm:class:digital-commons",
        "label": "Digital Commons"
      },
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      },
      {
        "@id": "urn:ngm:class:stakeholder",
        "label": "Stakeholder"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:collective-action",
        "label": "Collective Action"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:welfare-economics",
        "label": "Welfare Economics"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:digital-commons",
        "label": "Digital Commons"
      },
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:economics",
        "label": "Economics"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:quadratic-funding",
        "label": "Quadratic Funding"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:quadratic-funding",
        "label": "Quadratic Funding"
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
  - Public goods are non-excludable and non-rival, a concept from [[Economics]].
  - They tend to be under-provided, the concern of [[Welfare Economics]].
  - Their funding is a problem of [[Collective Action]] and [[Governance]].
- ### Overview
  - Non-excludability means access cannot be cheaply restricted to payers.
  - Non-rivalry means consumption by one does not reduce supply to others.
  - Under-provision arises because rational individuals free-ride on others' contributions.
- ### Key aspects
  - Non-excludability and non-rivalry as defining properties.
  - The free-rider problem and resulting market failure.
  - Provision through taxation, collective action, or novel funding mechanisms.
  - Digital public goods such as open knowledge and open-source software.
- ### Applications
  - National defence, clean air, and public infrastructure.
  - Open-source software and shared digital commons.
  - Quadratic-funding mechanisms for public-goods financing.
  - Public-policy design and welfare economics.
- ### Relationships
  - partOf:: [[Economics]]
  - partOf:: [[Welfare Economics]]
  - relatedTo:: [[Collective Action]]
  - relatedTo:: [[Digital Commons]]
  - relatedTo:: [[Governance]]
  - relatedTo:: [[Stakeholder]]
  - enables:: [[Collective Action]]
  - requires:: [[Welfare Economics]]
  - supports:: [[Digital Commons]]
  - supports:: [[Governance]]
  - dependsOn:: [[Economics]]
  - bridgesTo:: [[Quadratic Funding]]
  - uses:: [[Quadratic Funding]]
- ### Provenance
  - updated:: 2026-06-15
