public:: true

# Centralised Control

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:centralised-control",
  "@type": "Page",
  "title": "Centralised Control",
  "vc:slug": "centralised-control",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:centralised-control",
  "@type": "Class",
  "label": "Centralised Control",
  "definition": "Centralised control is a governance arrangement in which decision-making authority, coordination, and enforcement are concentrated in a single entity or hierarchy rather than distributed among participants. It offers clarity of accountability and rapid, consistent decisions but introduces a single point of failure and dependence on the controlling party's competence and intentions. Centralised control is the principal foil against which decentralised and distributed governance models define themselves.",
  "domain": "governance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:governance",
      "label": "Governance"
    }
  ],
  "relations": {
    "partOf": {
      "@id": "urn:ngm:class:governance",
      "label": "Governance"
    },
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:decentralisation",
        "label": "Decentralisation"
      },
      {
        "@id": "urn:ngm:class:decentralised-governance",
        "label": "Decentralised Governance"
      },
      {
        "@id": "urn:ngm:class:distributed-governance",
        "label": "Distributed Governance"
      }
    ],
    "requires": {
      "@id": "urn:ngm:class:access-control",
      "label": "Access Control"
    },
    "enables": [
      {
        "@id": "urn:ngm:class:hierarchical-organisation",
        "label": "Hierarchical Organisation"
      }
    ],
    "dependsOn": {
      "@id": "urn:ngm:class:single-point-of-failure",
      "label": "Single Point Of Failure"
    },
    "relatedTo": [
      {
        "@id": "urn:ngm:class:community-governance",
        "label": "Community Governance"
      },
      {
        "@id": "urn:ngm:class:multi-agent-coordination",
        "label": "Multi-Agent Coordination"
      }
    ],
    "uses": {
      "@id": "urn:ngm:class:access-control",
      "label": "Access Control"
    },
    "supports": {
      "@id": "urn:ngm:class:hierarchical-organisation",
      "label": "Hierarchical Organisation"
    },
    "bridgesTo": {
      "@id": "urn:ngm:class:governance",
      "label": "Governance"
    },
    "implements": {
      "@id": "urn:ngm:class:governance",
      "label": "Governance"
    }
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
  - [[Centralised Control]] concentrates authority within [[Governance]] structures.
  - It contrasts sharply with [[Decentralisation]] and [[Decentralised Governance]].
  - It relies on [[Hierarchical Organisation]] and is exposed to a [[Single Point Of Failure]].
- ### Overview
  - Under centralised control a single locus holds the power to set rules, allocate resources, and enforce outcomes.
  - It yields fast, coherent decisions and clear accountability but concentrates risk and power.
  - Failure or capture of the central authority compromises the whole system, the classic single point of failure.
  - Many distributed and blockchain systems are explicitly designed to remove or constrain centralised control.
- ### Key aspects
  - Concentrated authority — decisions flow from a single command point.
  - Hierarchical coordination — control propagates through layered chains of command.
  - Single point of failure — compromise of the centre cascades to the whole.
  - Accountability clarity — responsibility is unambiguous but power is unchecked.
  - Efficiency versus resilience — speed of decision traded against robustness and trust minimisation.
- ### Applications
  - Corporate command structures and traditional institutions.
  - Centralised exchanges and custodial financial services.
  - Cloud platforms operated by a single provider.
  - Comparative baseline for decentralised autonomous organisations.
- ### Relationships
  - Centralised control is a mode of governance and the principal contrast to decentralisation.
  - partOf:: [[Governance]]
  - contrastsWith:: [[Decentralisation]]
  - contrastsWith:: [[Decentralised Governance]]
  - contrastsWith:: [[Distributed Governance]]
  - requires:: [[Access Control]]
  - enables:: [[Hierarchical Organisation]]
  - dependsOn:: [[Single Point Of Failure]]
  - relatedTo:: [[Community Governance]]
  - relatedTo:: [[Multi-Agent Coordination]]
  - uses:: [[Access Control]]
  - supports:: [[Hierarchical Organisation]]
  - bridgesTo:: [[Governance]]
  - implements:: [[Governance]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation inference over the narrativegoldmine ontology mesh
  - attributedTo:: did:nostr:ontology-mesh
