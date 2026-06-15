public:: true

# Open Source Sustainability

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:open-source-sustainability",
  "@type": "Page",
  "title": "Open Source Sustainability",
  "vc:slug": "open-source-sustainability",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-source-sustainability",
  "@type": "Class",
  "label": "Open Source Sustainability",
  "definition": "Open source sustainability concerns the long-term viability of freely available software projects, addressing how maintainers are funded, how contributor effort is sustained, and how critical dependencies are kept secure and maintained. It examines the mismatch between the widespread reliance on open source infrastructure and the scarce, often volunteer, resources behind it. Funding mechanisms such as grants, quadratic funding, and retroactive public-goods funding attempt to close this gap.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:open-source-software",
      "label": "Open Source Software"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:open-source",
        "label": "Open Source"
      },
      {
        "@id": "urn:ngm:class:open-source-software",
        "label": "Open Source Software"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:open-source",
        "label": "Open Source"
      },
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      },
      {
        "@id": "urn:ngm:class:community-governance",
        "label": "Community Governance"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:quadratic-funding",
        "label": "Quadratic Funding"
      },
      {
        "@id": "urn:ngm:class:retroactive-public-goods-funding",
        "label": "Retroactive Public Goods Funding"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:open-source-software",
        "label": "Open Source Software"
      },
      {
        "@id": "urn:ngm:class:community-governance",
        "label": "Community Governance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:quadratic-funding",
        "label": "Quadratic Funding"
      },
      {
        "@id": "urn:ngm:class:retroactive-public-goods-funding",
        "label": "Retroactive Public Goods Funding"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:retroactive-public-goods-funding",
        "label": "Retroactive Public Goods Funding"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:open-source-software",
        "label": "Open Source Software"
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
  - Open source sustainability concerns the long-term viability of freely available software projects, addressing how maintainers are funded, how contributor effort is sustained, and how critical dependencies are kept secure and maintained. It examines the mismatch between the widespread reliance on open source infrastructure and the scarce, often volunteer, resources behind it. Funding mechanisms such as grants, quadratic funding, and retroactive public-goods funding attempt to close this gap.
  - Related core concepts: [[Open Source Software]] [[Open Source]] [[Quadratic Funding]] [[Retroactive Public Goods Funding]] [[Governance]]
- ### Overview
  - Open source sustainability frames maintained, secure free software as a public good that society depends on but systematically underfunds. The challenge spans funding maintainers, retaining contributors, and governing projects so that critical dependencies do not decay. Crypto-native mechanisms such as quadratic and retroactive public-goods funding offer experimental routes to durable support.
- ### Key aspects
  - Mismatch between reliance on open source and the resources supporting it
  - Funding models including grants, sponsorship, and public-goods mechanisms
  - Maintainer retention and the risk of burnout in critical projects
  - Governance structures that share decision-making across communities
  - Security and supply-chain risk in widely depended-upon libraries
- ### Applications
  - Funding maintainers of critical open source infrastructure
  - Allocating grants and retroactive rewards to high-impact projects
  - Designing community governance for sustainable stewardship
  - Reducing supply-chain risk in widely used dependencies
- ### Relationships
  - enables:: [[Open Source]]
  - enables:: [[Open Source Software]]
  - relatedTo:: [[Open Source]]
  - relatedTo:: [[Governance]]
  - relatedTo:: [[Community Governance]]
  - uses:: [[Quadratic Funding]]
  - uses:: [[Retroactive Public Goods Funding]]
  - supports:: [[Open Source Software]]
  - supports:: [[Community Governance]]
  - dependsOn:: [[Quadratic Funding]]
  - dependsOn:: [[Retroactive Public Goods Funding]]
  - bridgesTo:: [[Retroactive Public Goods Funding]]
  - requires:: [[Governance]]
  - partOf:: [[Open Source Software]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
