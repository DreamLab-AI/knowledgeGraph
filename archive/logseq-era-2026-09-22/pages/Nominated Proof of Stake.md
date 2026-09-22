public:: true

# Nominated Proof of Stake
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f3e40ba2adf87227c3fa7099214a718653e80dd15a6a600d6f6aecb093cf214d",
  "@type": "Page",
  "vc:slug": "nominated-proof-of-stake",
  "title": "Nominated Proof of Stake",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:proof-of-stake",
      "vc:label": "Proof of Stake"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0551"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Nominated Proof of Stake"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:nominated-proof-of-stake",
  "@type": "Class",
  "label": "Nominated Proof of Stake",
  "definition": "Nominated Proof of Stake (NPoS) is a consensus mechanism variant in which token holders nominate a set of validator candidates; an election algorithm selects the active validator set to maximise stake distribution while satisfying security constraints. Elected validators produce and finalise blocks, while nominators share both block rewards and slashing penalties, aligning incentives across the broader token holder community.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-protocol-and-consensus",
      "label": "Protocol and Consensus"
    },
    {
      "@id": "urn:ngm:class:proof-of-stake",
      "label": "Proof of Stake"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:validator-node", "label": "Validator Node"},
      {"@id": "urn:ngm:class:validator-set", "label": "Validator Set"},
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:blockchain-governance", "label": "Blockchain Governance"},
      {"@id": "urn:ngm:class:block-reward", "label": "Block Reward"},
      {"@id": "urn:ngm:class:deterministic-finality", "label": "Deterministic Finality"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:delegated-proof-of-stake", "label": "Delegated Proof of Stake"},
      {"@id": "urn:ngm:class:liquid-proof-of-stake", "label": "Liquid Proof of Stake"},
      {"@id": "urn:ngm:class:polkadot-parachains", "label": "Polkadot Parachains"},
      {"@id": "urn:ngm:class:blockchain-protocol", "label": "Blockchain Protocol"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:pure-proof-of-stake", "label": "Pure Proof of Stake"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:consensus-algorithm", "label": "Consensus Algorithm"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:nominated-proof-of-stake:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f3e40ba2adf87227c3fa7099214a718653e80dd15a6a600d6f6aecb093cf214d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Proof of Stake]]",
      "resolved": "urn:visionflow:owl:class:proof-of-stake",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  Nominated Proof of Stake (NPoS) is a consensus mechanism variant in which token holders nominate a set of validator candidates; an election algorithm selects the active validator set to maximise stake distribution while satisfying security constraints. Elected validators produce and finalise blocks, while nominators share both block rewards and slashing penalties, aligning incentives across the broader token holder community.

- ### Semantic Classification
  - owl-class:: blockchain:NominatedProofOfStake
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - requires:: [[Validator Node]], [[Validator Set]], [[Consensus Mechanism]]
  - enables:: [[Blockchain Governance]], [[Block Reward]], [[Deterministic Finality]]
  - relatedTo:: [[Delegated Proof of Stake]], [[Liquid Proof of Stake]], [[Polkadot Parachains]], [[Blockchain Protocol]]
  - contrastsWith:: [[Pure Proof of Stake]]
  - uses:: [[Consensus Algorithm]]

- ### Content
  Nominated Proof of Stake was introduced as the consensus design for the Polkadot relay chain, with the goal of combining the security benefits of a large, distributed nominator base with the operational efficiency of a bounded active validator set. Token holders act as nominators by staking tokens behind up to a fixed number of validator candidates; the protocol then applies a sequential Phragmén election algorithm to select which validators become active and how stake is distributed across them to minimise the maximum stake deviation.

  The key design property is that both validators and their nominators share economic outcomes: block production rewards are distributed proportionally, but any slashing penalty for misbehaviour (equivocation, downtime) is also shared. This creates a principal-agent alignment in which nominators are incentivised to carefully evaluate validator track records, commission rates, and uptime before delegating stake. The nominator therefore acts as a distributed due-diligence mechanism rather than a passive observer.

  NPoS differs from Delegated Proof of Stake (DPoS) primarily in its election algorithm and stake distribution goals. DPoS typically uses simple coin-weighted voting, which can concentrate stake in a small set of supernodes. NPoS's Phragmén election actively redistributes backing to achieve a more balanced distribution across the validator set, increasing the cost of attacking a single validator by preventing a single large nominator from concentrating all weight on one candidate.

  In practice, NPoS enables deterministic finality through the GRANDPA gadget running alongside BABE block production on Polkadot-based chains. This layered design separates liveness (block production) from safety (finality), allowing blocks to be produced optimistically and finalised in batches, achieving high throughput without sacrificing the security guarantees required for cross-chain messaging via parachains.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
