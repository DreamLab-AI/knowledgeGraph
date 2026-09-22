public:: true

# Negotiation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:negotiation",
  "@type": "Page",
  "title": "Negotiation",
  "vc:slug": "negotiation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:negotiation",
  "@type": "Class",
  "label": "Negotiation",
  "definition": "Negotiation is the structured interactive process by which two or more parties with partially conflicting interests communicate proposals and concessions to reach a mutually acceptable agreement without recourse to coercion or third-party adjudication. It draws on principled bargaining, interest analysis, and reservation-value reasoning to expand and divide the zone of possible agreement. In decentralised and automated governance contexts, negotiation increasingly manifests as protocol-mediated bargaining among software agents, stakeholders, and on-chain coalitions.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:conflict-resolution",
      "label": "Conflict Resolution"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:game-theory",
        "label": "Game Theory"
      },
      {
        "@id": "urn:ngm:class:decision-making",
        "label": "Decision Making"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:conflict-resolution",
        "label": "Conflict Resolution"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:decision-making",
        "label": "Decision Making"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:dispute-resolution",
        "label": "Dispute Resolution"
      },
      {
        "@id": "urn:ngm:class:collaboration",
        "label": "Collaboration"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:game-theory",
        "label": "Game Theory"
      },
      {
        "@id": "urn:ngm:class:auction-mechanism",
        "label": "Auction Mechanism"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:collaboration",
        "label": "Collaboration"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:mediation",
        "label": "Mediation"
      },
      {
        "@id": "urn:ngm:class:dispute-resolution",
        "label": "Dispute Resolution"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:conflict-resolution",
        "label": "Conflict Resolution"
      },
      {
        "@id": "urn:ngm:class:negotiation-protocol",
        "label": "Negotiation Protocol"
      },
      {
        "@id": "urn:ngm:class:decision-making",
        "label": "Decision Making"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
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
  - Negotiation is a core practice within [[Conflict Resolution]] and [[Governance]], drawing on [[Game Theory]] and informing [[Decision Making]].
  - It underpins [[Dispute Resolution]] and supports [[Collaboration]] and [[Consensus Mechanism]] formation.
  - Automated variants are codified through [[Negotiation Protocol]] specifications and [[Auction Mechanism]] designs.
- ### Overview
  - Negotiation operates on the premise that parties can create joint value (integrative bargaining) before claiming it (distributive bargaining), and that the credibility of one's best alternative to a negotiated agreement governs leverage.
  - Outcomes depend on framing, anchoring, sequencing of concessions, and the management of information asymmetry between the parties.
  - In multi-agent and DAO settings, negotiation is formalised as message-passing protocols where utility functions and reservation prices replace human intuition.
- ### Key aspects
  - BATNA (best alternative to a negotiated agreement) sets each party's walk-away threshold and underpins bargaining power.
  - The zone of possible agreement (ZOPA) is the overlap between parties' reservation values where deals can settle.
  - Integrative tactics expand the pie by trading across differently-valued issues; distributive tactics divide a fixed surplus.
  - Procedural fairness and reputation effects sustain cooperation across repeated negotiation rounds.
- ### Applications
  - Commercial contract formation, mergers and acquisitions, and labour relations.
  - Treaty diplomacy and multi-stakeholder policy bargaining within governance frameworks.
  - Automated agent negotiation for resource allocation, pricing, and on-chain coalition formation in decentralised organisations.
- ### Relationships
  - hasPart:: [[Game Theory]]
  - hasPart:: [[Decision Making]]
  - partOf:: [[Conflict Resolution]]
  - requires:: [[Decision Making]]
  - enables:: [[Dispute Resolution]]
  - enables:: [[Collaboration]]
  - uses:: [[Game Theory]]
  - uses:: [[Auction Mechanism]]
  - supports:: [[Consensus Mechanism]]
  - supports:: [[Collaboration]]
  - contrastsWith:: [[Mediation]]
  - contrastsWith:: [[Dispute Resolution]]
  - relatedTo:: [[Conflict Resolution]]
  - relatedTo:: [[Negotiation Protocol]]
  - relatedTo:: [[Decision Making]]
  - bridgesTo:: [[Consensus Mechanism]]
  - subClassOf:: [[Conflict Resolution]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
