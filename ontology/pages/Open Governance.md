public:: true

# Open Governance

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:open-governance",
  "@type": "Page",
  "title": "Open Governance",
  "vc:slug": "open-governance",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-governance",
  "@type": "Class",
  "label": "Open Governance",
  "definition": "Open governance is a model of decision-making for projects, standards and organisations in which processes are transparent, participation is open and authority is distributed among stakeholders. It emphasises published rules, accountable roles and consensus-driven decisions rather than closed or unilateral control. It is common in open-source communities, standards bodies and multi-stakeholder institutions.",
  "domain": "standards",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:open-source-governance",
      "label": "Open Source Governance"
    }
  ],
  "relations": {
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
    "uses": [
      {
        "@id": "urn:ngm:class:consensus",
        "label": "Consensus"
      },
      {
        "@id": "urn:ngm:class:stakeholder-engagement",
        "label": "Stakeholder Engagement"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:decision-making",
        "label": "Decision Making"
      },
      {
        "@id": "urn:ngm:class:collective-governance",
        "label": "Collective Governance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:open-source-governance",
        "label": "Open Source Governance"
      },
      {
        "@id": "urn:ngm:class:multi-stakeholder-governance",
        "label": "Multi-Stakeholder Governance"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:open-standards",
        "label": "Open Standards"
      },
      {
        "@id": "urn:ngm:class:community-governance",
        "label": "Community Governance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:governance-framework",
        "label": "Governance Framework"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:transparent-decision-making",
        "label": "Transparent Decision Making"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:standards-body",
        "label": "Standards Body"
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
  - Relates to [[Open Source Governance]]
  - Relates to [[Transparency]]
  - Relates to [[Consensus]]
  - Relates to [[Stakeholder Engagement]]
  - Relates to [[Open Standards]]
- ### Overview
  - Open governance publishes its rules, roles and decision records for scrutiny.
  - Participation is open to interested parties rather than restricted to insiders.
  - Decisions are reached through documented consensus or voting procedures.
  - It underpins the legitimacy of open-source projects and standards processes.
- ### Key aspects
  - **Transparency** — Decision processes, meeting records and rationales are made publicly accessible.
  - **Open participation** — Stakeholders can join, contribute and influence outcomes under published criteria.
  - **Consensus mechanisms** — Rough consensus, voting or hybrid procedures resolve disagreement and confer legitimacy.
  - **Accountable roles** — Maintainers, boards and working groups hold defined, reviewable responsibilities.
- ### Applications
  - Governance of open-source software foundations and projects.
  - Multi-stakeholder standards development and ratification.
  - Internet governance and protocol stewardship.
  - Community-run platforms and decentralised organisations.
- ### Relationships
  - subClassOf:: [[Open Source Governance]]
  - requires:: [[Transparency]]
  - requires:: [[Accountability]]
  - uses:: [[Consensus]]
  - uses:: [[Stakeholder Engagement]]
  - implements:: [[Decision Making]]
  - implements:: [[Collective Governance]]
  - relatedTo:: [[Open Source Governance]]
  - relatedTo:: [[Multi-Stakeholder Governance]]
  - supports:: [[Open Standards]]
  - supports:: [[Community Governance]]
  - dependsOn:: [[Governance Framework]]
  - enables:: [[Transparent Decision Making]]
  - bridgesTo:: [[Standards Body]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
