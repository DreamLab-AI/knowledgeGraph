public:: true

# Plutocratic Voting

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:plutocratic-voting",
  "@type": "Page",
  "title": "Plutocratic Voting",
  "vc:slug": "plutocratic-voting",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:plutocratic-voting",
  "@type": "Class",
  "label": "Plutocratic Voting",
  "definition": "Plutocratic voting is a governance model in which voting power is proportional to the quantity of tokens, shares, or stake an actor holds, so that wealthier participants exert correspondingly greater influence over collective decisions. It is the default in most token-based on-chain governance systems, where one token equals one vote. While simple and Sybil-resistant by construction, it concentrates control among large holders and can entrench incumbent interests.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:governance",
      "label": "Governance"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:on-chain-governance",
        "label": "On-Chain Governance"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:token-weighted-voting",
        "label": "Token-Weighted Voting"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:dao-governance",
        "label": "DAO Governance"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decentralized-autonomous-organization",
        "label": "Decentralised Autonomous Organisation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:delegation",
        "label": "Delegation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:quadratic-voting",
        "label": "Quadratic Voting"
      },
      {
        "@id": "urn:ngm:class:conviction-voting",
        "label": "Conviction Voting"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralization",
        "label": "Decentralisation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:sybil-resistance",
        "label": "Sybil Resistance"
      },
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      },
      {
        "@id": "urn:ngm:class:voting-mechanism",
        "label": "Voting Mechanism"
      },
      {
        "@id": "urn:ngm:class:collective-decision-making",
        "label": "Collective Decision-Making"
      },
      {
        "@id": "urn:ngm:class:tokenomics",
        "label": "Tokenomics"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:token-weighted-voting",
      "label": "Token-Weighted Voting"
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
  - [[Governance]]
  - [[On-Chain Governance]]
  - [[Governance Token]]
  - [[Quadratic Voting]]
  - [[Decentralisation]]
- ### Overview
  - Maps economic stake directly onto political power: more tokens, more votes.
  - Dominates real-world DAO and protocol governance because it is trivial to implement on-chain.
  - Trades egalitarian legitimacy for resistance to identity-based attacks such as Sybil flooding.
- ### Key aspects
  - One-token-one-vote tallying where influence scales linearly with holdings.
  - Inherent Sybil resistance: splitting holdings across accounts confers no advantage.
  - Susceptibility to whale capture and wealth concentration of decision rights.
  - Frequent pairing with delegation so passive holders can lend voting power.
  - Tension with broader-based legitimacy that mechanisms like quadratic voting seek to restore.
- ### Applications
  - Token-holder votes on protocol upgrades and treasury allocation in DeFi DAOs.
  - Shareholder-style governance ported onto blockchain-native organisations.
  - Baseline against which alternative voting schemes are designed and benchmarked.
  - Delegated governance markets where voting power is concentrated in active delegates.
- ### Relationships
  - partOf:: [[On-Chain Governance]]
  - uses:: [[Governance Token]]
  - dependsOn:: [[Token-Weighted Voting]]
  - enables:: [[DAO Governance]]
  - supports:: [[Decentralised Autonomous Organisation]]
  - requires:: [[Delegation]]
  - contrastsWith:: [[Quadratic Voting]]
  - contrastsWith:: [[Conviction Voting]]
  - bridgesTo:: [[Decentralisation]]
  - relatedTo:: [[Sybil Resistance]]
  - relatedTo:: [[Governance]]
  - relatedTo:: [[Voting Mechanism]]
  - relatedTo:: [[Collective Decision-Making]]
  - relatedTo:: [[Tokenomics]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
