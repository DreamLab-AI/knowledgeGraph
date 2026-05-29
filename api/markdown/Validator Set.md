public:: true

# validator set
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:df772cb57d0dfafb14f45df86e575a3d5e506ead160f271351bb14b2a5c9d098",
  "@type": "Page",
  "vc:slug": "validator-set",
  "title": "validator set",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:validator-set",
  "@type": "Class",
  "label": "Validator Set",
  "definition": "A validator set is the collection of nodes in a proof-of-stake or delegated consensus blockchain that are authorised to propose, attest, and finalise new blocks in each epoch. Validators are typically selected through staking—locking collateral that is subject to slashing penalties for misbehaviour—ensuring economic alignment with protocol security. The composition of the validator set changes at epoch boundaries based on delegation, unbonding, and slashing events, and its size determines the trade-off between decentralisation and consensus latency.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-network-component",
      "label": "Blockchain Network Component"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:proof-of-stake", "label": "Proof of Stake"},
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:validator-node", "label": "Validator Node"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:delegated-proof-of-stake", "label": "Delegated Proof of Stake"},
      {"@id": "urn:ngm:class:epoch", "label": "Epoch"},
      {"@id": "urn:ngm:class:blockchain-network", "label": "Blockchain Network"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - A validator set is the collection of nodes in a proof-of-stake or delegated consensus blockchain that are authorised to propose, attest, and finalise new blocks in each epoch. Validators are typically selected through staking—locking collateral that is subject to slashing penalties for misbehaviour—ensuring economic alignment with protocol security. The composition of the validator set changes at epoch boundaries based on delegation, unbonding, and slashing events, and its size determines the trade-off between decentralisation and consensus latency.

- ### Semantic Classification
  - owl-class:: validator-set:Validator Set
  - owl-role:: Concept

- ### Relationships
  - requires [[Proof of Stake]]
  - requires [[Consensus Mechanism]]
  - hasPart [[Validator Node]]
  - relatedTo [[Delegated Proof of Stake]]
  - relatedTo [[Epoch]]
  - relatedTo [[Blockchain Network]]

- ### Content
  A validator set is the authorised group of nodes responsible for block proposal, attestation, and finality in a proof-of-stake blockchain. Membership is gate-kept by a minimum stake requirement; in delegated systems such as Cosmos SDK-based chains or Polkadot's nominated proof-of-stake, the set is further shaped by delegation from token holders who assign their voting weight to chosen validator operators.

  The security of a PoS chain depends critically on the economic properties of its validator set. For Byzantine fault-tolerant consensus protocols such as Tendermint BFT or Casper FFG (used in Ethereum), the network can tolerate up to one-third of validators acting maliciously. Slashing conditions—such as double-signing (equivocation) or surround votes—destroy a portion of the offending validator's staked collateral, creating a direct economic penalty for protocol violations.

  Validator set rotation at epoch boundaries introduces a coordination mechanism that controls which validators are active. During an epoch, the set is fixed, giving the consensus protocol a stable committee to communicate with. Between epochs, new validators may activate as their staking transactions mature, and inactive validators unbond and withdraw their stake after a security delay. The active set size is typically bounded—Ethereum's Beacon Chain, for instance, uses a dynamic committee sampling mechanism to manage a large validator set efficiently, whilst application-specific chains often cap their active set at a smaller number to reduce communication overhead.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
