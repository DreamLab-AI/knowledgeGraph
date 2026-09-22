public:: true

# Social Choice Theory
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:social-choice-theory",
  "@type": "Page",
  "vc:slug": "social-choice-theory",
  "title": "Social Choice Theory",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:social-choice-theory",
  "@type": "Class",
  "label": "Social Choice Theory",
  "definition": "Social choice theory is the formal study of how individual preferences can be aggregated into a collective decision, examining the properties, fairness, and impossibility constraints of voting rules and welfare functions. Foundational results such as Arrow's impossibility theorem show that no rank-aggregation rule can simultaneously satisfy a small set of seemingly reasonable fairness axioms. It provides the theoretical underpinning for voting mechanism design in both political and digital governance systems.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:economics",
      "label": "Economics"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:arrows-impossibility-theorem",
        "label": "Arrow's Impossibility Theorem"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:preference-aggregation",
        "label": "Preference Aggregation"
      },
      {
        "@id": "urn:ngm:class:game-theory",
        "label": "Game Theory"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:voting-mechanism",
        "label": "Voting Mechanism"
      },
      {
        "@id": "urn:ngm:class:mechanism-design",
        "label": "Mechanism Design"
      },
      {
        "@id": "urn:ngm:class:quadratic-voting",
        "label": "Quadratic Voting"
      },
      {
        "@id": "urn:ngm:class:ranked-choice-voting",
        "label": "Ranked-Choice Voting"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      },
      {
        "@id": "urn:ngm:class:collective-decision-making",
        "label": "Collective Decision-Making"
      },
      {
        "@id": "urn:ngm:class:public-choice-theory",
        "label": "Public Choice Theory"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:utility-theory",
        "label": "Utility Theory"
      },
      {
        "@id": "urn:ngm:class:formal-logic",
        "label": "Formal Logic"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:individual-rationality",
        "label": "Individual Rationality"
      },
      {
        "@id": "urn:ngm:class:market-mechanism",
        "label": "Market Mechanism"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      },
      {
        "@id": "urn:ngm:class:decentralized-autonomous-organization",
        "label": "Decentralized Autonomous Organization"
      },
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:economics",
        "label": "Economics"
      },
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      },
      {
        "@id": "urn:ngm:class:political-science",
        "label": "Political Science"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:collective-choice-theory",
      "label": "Collective Choice Theory"
    }
  ],
  "quality": 0.73,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Social choice theory is a branch of [[Economics]] that formalises how individual preferences aggregate into collective decisions, characterising the fairness and impossibility limits of voting and welfare aggregation rules.
- ### Content
  - Landmark results such as Arrow's impossibility theorem and the Gibbard-Satterthwaite theorem demonstrate fundamental trade-offs in any rank-based aggregation rule. The discipline directly informs [[Governance]] mechanism design, supplying the analytical framework used to evaluate quadratic voting, ranked-choice ballots, and token-weighted on-chain governance for desirable properties and manipulation resistance.
