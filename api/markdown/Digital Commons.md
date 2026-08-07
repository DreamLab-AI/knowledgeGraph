public:: true

# Digital Commons
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:digital-commons", "@type":"Page", "title":"Digital Commons", "vc:slug":"digital-commons", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:digital-commons",
  "@type": "Class",
  "label": "Digital Commons",
  "definition": "The digital commons are shared, non-rivalrous information resources that a community collectively produces, governs, and stewards under open licences and self-defined rules, rather than through private enclosure or state provision. Examples include open-source software, open data, free knowledge repositories, and open scientific outputs, often coordinated via peer production and commons-based governance. As a governance concept it bridges classical commons theory with digital public goods, examining how communities sustain shared resources, prevent enclosure, and align incentives in distributed and blockchain-supported settings.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:public-goods",
      "label": "Public Goods"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:open-source",
        "label": "Open Source"
      },
      {
        "@id": "urn:ngm:class:open-data",
        "label": "Open Data"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:creative-commons",
        "label": "Creative Commons"
      },
      {
        "@id": "urn:ngm:class:free-software",
        "label": "Free Software"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:digital-public-goods",
        "label": "Digital Public Goods"
      },
      {
        "@id": "urn:ngm:class:open-science",
        "label": "Open Science"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:collective-action",
        "label": "Collective Action"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:collective-action",
        "label": "Collective Action"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-public-goods",
        "label": "Digital Public Goods"
      },
      {
        "@id": "urn:ngm:class:public-goods",
        "label": "Public Goods"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:open-science",
        "label": "Open Science"
      },
      {
        "@id": "urn:ngm:class:open-data",
        "label": "Open Data"
      },
      {
        "@id": "urn:ngm:class:creative-commons",
        "label": "Creative Commons"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:knowledge-commons",
      "label": "Knowledge Commons"
    }
  ],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - The [[Digital Commons]] are shared, non-rivalrous information resources that a community collectively produces, governs, and stewards under open licences and self-defined rules, distinct from private enclosure or pure state provision.
  - Examples include [[Open Source]] software, [[Open Data]], [[Free Software]], and [[Open Science]] outputs, coordinated through peer production and commons-based [[Governance]].
  - As a governance concept it bridges classical commons theory with [[Digital Public Goods]], asking how communities sustain shared resources and prevent enclosure.

- ### Overview
  - Digital commons extend Elinor Ostrom's analysis of governed commons from natural resources to information goods, where non-rivalry changes the core dilemma from depletion to underprovision and enclosure.
  - Because copies are costless, the central risks are not overgrazing but free-riding on contribution, capture by proprietary actors, and erosion of open licences.
  - Commons-based peer production, exemplified by collaborative encyclopaedias and large open-source projects, demonstrates that distributed, intrinsically motivated contribution can sustain valuable shared resources at scale.
  - Blockchain and token mechanisms are increasingly explored as funding and coordination layers for digital commons, linking the concept to [[Public Goods]] funding and [[Collective Action]] problems.

- ### Key aspects
  - #### Open licensing
    - [[Creative Commons]] and free/open-source licences legally constitute the commons, defining permitted reuse and copyleft obligations that resist re-enclosure.
  - #### Commons-based governance
    - Self-organising communities set norms, resolve disputes, and maintain shared infrastructure under [[Governance]] arrangements rather than market or hierarchy alone.
    - Stewardship roles, contribution guidelines, and moderation sustain quality and inclusion.
  - #### Peer production
    - Decentralised, voluntary contribution aggregated into coherent resources such as code, datasets, and reference works.
    - Modular tasks and low coordination costs enable broad participation.
  - #### Sustainability and funding
    - The chronic challenge of funding maintenance of widely used commons motivates [[Public Goods]] funding mechanisms and [[Digital Public Goods]] initiatives.

- ### Applications
  - #### Open-source software ecosystems
    - Critical shared infrastructure libraries maintained as commons, with funding and governance as recurring concerns.
  - #### Open knowledge and science
    - [[Open Data]], open-access publishing, and [[Open Science]] platforms that pool research outputs for collective benefit.
  - #### Civic and public-interest technology
    - [[Digital Public Goods]] for health, education, and governance shared across institutions and jurisdictions.

- ### Relationships
  - subClassOf:: [[Public Goods]]
  - hasPart:: [[Open Source]]
  - hasPart:: [[Open Data]]
  - partOf:: [[Governance]]
  - uses:: [[Creative Commons]]
  - uses:: [[Free Software]]
  - enables:: [[Digital Public Goods]]
  - enables:: [[Open Science]]
  - supports:: [[Collective Action]]
  - requires:: [[Governance]]
  - dependsOn:: [[Collective Action]]
  - bridgesTo:: [[Digital Public Goods]]
  - bridgesTo:: [[Public Goods]]
  - relatedTo:: [[Open Science]]
  - relatedTo:: [[Open Data]]
  - relatedTo:: [[Creative Commons]]

- ### Provenance
  - sources::
  - updated:: 2026-06-15
