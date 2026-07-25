public:: true

# Inner Source

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:inner-source", "@type":"Page", "title":"Inner Source", "vc:slug":"inner-source", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:inner-source",
  "@type": "Class",
  "label": "Inner Source",
  "definition": "Inner source is the adoption of open-source development practices, tools and culture within the boundaries of a single organisation, allowing teams to discover, use and contribute to each other's code as if it were open source internally. It promotes shared repositories, transparent collaboration, peer review and meritocratic contribution while keeping the code private to the company. The approach aims to reduce duplication, improve quality and spread knowledge across organisational silos.",
  "domain": "distributed-collaboration",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-collaboration",
      "label": "Distributed Collaboration"
    },
    {
      "@id": "urn:ngm:class:open-source",
      "label": "Open Source"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:version-control",
        "label": "Version Control"
      },
      {
        "@id": "urn:ngm:class:open-source",
        "label": "Open Source"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:knowledge-sharing",
        "label": "Knowledge Sharing"
      },
      {
        "@id": "urn:ngm:class:collaboration",
        "label": "Collaboration"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:software-development",
        "label": "Software Development"
      },
      {
        "@id": "urn:ngm:class:software-engineering",
        "label": "Software Engineering"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:proprietary-software",
        "label": "Proprietary Software"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:governance-model",
        "label": "Governance Model"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:open-source",
        "label": "Open Source"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:open-source",
        "label": "Open Source"
      },
      {
        "@id": "urn:ngm:class:community",
        "label": "Community"
      },
      {
        "@id": "urn:ngm:class:collaboration",
        "label": "Collaboration"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
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
- Inner source applies [[Open Source]] practices, tooling and culture inside one organisation, letting teams collaborate across boundaries as a form of [[Distributed Collaboration]].
- It uses shared repositories and [[Version Control]] to enable [[Knowledge Sharing]] while keeping code private.
- ### Overview
- Inner source borrows the transparency, peer review and meritocratic contribution of open source and applies them internally.
- Teams publish their code to an internal commons where others can read, reuse and submit improvements.
- The goal is to reduce duplicated effort, raise quality and break down silos without releasing code publicly.
- ### Key aspects
- Internal shared repositories acting as a company-wide commons.
- Transparent, asynchronous collaboration across teams.
- Trusted maintainers reviewing and merging external contributions.
- Clear contribution guidelines and lightweight governance.
- Cultural shift toward openness within organisational limits.
- ### Mechanisms
- Pull-request style contribution mirrors open-source workflows.
- [[Version Control]] platforms host the internal commons and history.
- Maintainer roles steward quality and direction of shared components.
- A [[Governance Model]] defines ownership, review and acceptance.
- ### Applications
- Large enterprises reducing duplicated internal tooling.
- Shared platform and library components consumed across teams.
- Spreading engineering culture and best practices internally.
- Bridging toward eventual external open-sourcing of components.
- ### Relationships
- subClassOf:: [[Distributed Collaboration]]
- uses:: [[Version Control]]
- uses:: [[Open Source]]
- enables:: [[Knowledge Sharing]]
- enables:: [[Collaboration]]
- supports:: [[Software Development]]
- supports:: [[Software Engineering]]
- contrastsWith:: [[Proprietary Software]]
- requires:: [[Governance Model]]
- implements:: [[Open Source]]
- relatedTo:: [[Community]]
- bridgesTo:: [[Distributed Collaboration]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
