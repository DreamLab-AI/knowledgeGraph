public:: true

# Tendermint Consensus
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6d4e48e384e533c6036537d6b879ee757867e47441d1b9433190bafb85c8fd5e",
  "@type": "Page",
  "vc:slug": "tendermint-consensus",
  "title": "Tendermint Consensus",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:byzantine-fault-tolerance",
      "vc:label": "Byzantine Fault Tolerance"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0557"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Tendermint Consensus"
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
  "@id": "urn:ngm:class:tendermint-consensus",
  "@type": "Class",
  "label": "Tendermint Consensus",
  "definition": "Tendermint Consensus is a Byzantine Fault Tolerant consensus engine that combines Practical Byzantine Fault Tolerance (PBFT) with Proof-of-Stake validator sets to achieve immediate block finality and high transaction throughput. It underpins the Cosmos ecosystem and enables inter-blockchain communication by guaranteeing that committed blocks are never reverted, eliminating the probabilistic finality of Proof-of-Work chains.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-protocol-and-consensus",
      "label": "Protocol and Consensus"
    },
    {
      "@id": "urn:ngm:class:byzantine-fault-tolerance",
      "label": "Byzantine Fault Tolerance"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:validator-node", "label": "Validator Node"},
      {"@id": "urn:ngm:class:proof-of-stake", "label": "Proof of Stake"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:cosmos-ibc", "label": "Cosmos IBC"},
      {"@id": "urn:ngm:class:blockchain-interoperability", "label": "Blockchain Interoperability"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"},
      {"@id": "urn:ngm:class:cryptographic-hash", "label": "Cryptographic Hash"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"},
      {"@id": "urn:ngm:class:delegated-proof-of-stake", "label": "Delegated Proof of Stake"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:blockchain-scalability", "label": "Blockchain Scalability"},
      {"@id": "urn:ngm:class:low-energy-consumption", "label": "Low Energy Consumption"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:blockchain-protocol", "label": "Blockchain Protocol"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:tendermint-consensus:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6d4e48e384e533c6036537d6b879ee757867e47441d1b9433190bafb85c8fd5e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Byzantine Fault Tolerance]]",
      "resolved": "urn:visionflow:owl:class:byzantine-fault-tolerance",
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
  Tendermint Consensus is a Byzantine Fault Tolerant consensus engine combining Practical Byzantine Fault Tolerance (PBFT) with Proof-of-Stake validator sets to achieve immediate block finality and high transaction throughput. It underpins the Cosmos ecosystem and enables inter-blockchain communication by guaranteeing committed blocks are never reverted, eliminating probabilistic finality found in Proof-of-Work chains.

- ### Relationships
  - requires:: [[Validator Node]], [[Proof of Stake]]
  - enables:: [[Cosmos IBC]], [[Blockchain Interoperability]]
  - uses:: [[Digital Signature]], [[Cryptographic Hash]]
  - contrastsWith:: [[Proof Of Work]], [[Delegated Proof of Stake]]
  - relatedTo:: [[Consensus Mechanism]], [[Blockchain Scalability]], [[Low Energy Consumption]]
  - partOf:: [[Blockchain Protocol]]

- ### Content
  Tendermint Consensus was designed by Jae Kwon and formalised in a 2014 whitepaper as a deterministic BFT protocol adapted for public blockchain networks. Unlike Nakamoto-style probabilistic finality, Tendermint completes consensus in two rounds of voting—prevote and precommit—before a block is irrevocably committed. This structure guarantees safety under asynchronous network conditions as long as fewer than one-third of validator voting power is Byzantine, and liveness under partial synchrony.

  The protocol operates within a validator set selected proportionally by staked tokens. Each round has a designated proposer who broadcasts a block; validators then vote in two steps. A block is committed only when more than two-thirds of voting power sends precommit votes for the same block, ensuring accountability: any equivocation (double-signing) can be detected and penalised via slashing. This accountability property distinguishes Tendermint from pure PBFT, making it suitable for permissionless settings where validators are pseudonymous.

  Tendermint's instant finality makes it the natural substrate for the Inter-Blockchain Communication (IBC) protocol within the Cosmos ecosystem. IBC relies on light-client proofs of committed blocks; probabilistic chains require waiting for many confirmations before a cross-chain transfer is safe, whereas Tendermint-based chains can finalise transfers in seconds. This property drives adoption across Cosmos Hub, Osmosis, and dozens of application-specific chains (app-chains) built with the Cosmos SDK.

  Energy efficiency is a significant advantage: Tendermint validators perform cryptographic signing operations rather than hash grinding, consuming a fraction of the electricity required by Proof-of-Work networks at equivalent transaction volumes. This positions Tendermint-based networks favourably in ESG assessments and regulatory environments increasingly scrutinising blockchain environmental impact.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
