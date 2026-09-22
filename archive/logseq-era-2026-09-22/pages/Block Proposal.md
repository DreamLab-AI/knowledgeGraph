public:: true

# Block Proposal

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:block-proposal", "@type":"Page", "title":"Block Proposal", "vc:slug":"block-proposal", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:block-proposal",
  "@type":"Class",
  "label":"Block Proposal",
  "definition":"Block proposal is the step in a blockchain consensus protocol where a designated participant assembles a candidate block of ordered transactions and broadcasts it to the network for validation and agreement. The proposer selects transactions from the mempool, constructs the block header referencing the prior block, and signs the proposal so peers can verify its authorship. In proof-of-stake systems the proposer is chosen by a leader-election procedure for each slot, after which validators attest to the proposed block.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:consensus-mechanism","label":"Consensus Mechanism"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:consensus-mechanism","label":"Consensus Mechanism"}],
    "hasPart":[
      {"@id":"urn:ngm:class:block","label":"Block"},
      {"@id":"urn:ngm:class:cryptographic-signature","label":"Cryptographic Signature"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:leader-election","label":"Leader Election"},
      {"@id":"urn:ngm:class:mempool","label":"Mempool"},
      {"@id":"urn:ngm:class:validator","label":"Validator"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:attestation","label":"Attestation"},
      {"@id":"urn:ngm:class:finality-gadget","label":"Finality Gadget"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:proof-of-stake","label":"Proof of Stake"},
      {"@id":"urn:ngm:class:fork-choice-rule","label":"Fork Choice Rule"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:digital-signature","label":"Digital Signature"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:slashing","label":"Slashing"},
      {"@id":"urn:ngm:class:blockchain","label":"Blockchain"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:attestation","label":"Attestation"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Block proposal is the consensus step where a chosen participant builds and broadcasts a candidate block. It connects [[Consensus Mechanism]], [[Leader Election]], [[Validator]] and [[Mempool]] into the production phase of a [[Blockchain]].
- The proposer assembles ordered transactions, links to the previous block, and signs the result so the network can authenticate authorship before agreement proceeds.
- ### Overview
- In every consensus round a single proposer is responsible for advancing the chain by one block. Proof-of-stake designs derive the proposer for each slot from a verifiable, stake-weighted leader-election procedure, while proof-of-work designs effectively select the proposer through mining races.
- The proposed block is not yet final: it must be received, validated, and agreed upon by the rest of the network. Validators check signatures, transaction validity, and adherence to protocol rules before attesting to or building on the block.
- A well-formed proposal balances inclusion (maximising fee revenue from the mempool) against propagation speed, since late or oversized proposals risk being orphaned by the fork-choice rule.
- ### Mechanisms
- Proposer selection: a leader-election function picks the slot proposer, often from the active validator set.
- Transaction selection: the proposer pulls pending transactions from the mempool, ordering them to maximise fees and respect dependencies.
- Block construction: a header is built referencing the parent block, state root, and timestamp.
- Signing and broadcast: the proposer signs the block with its private key and gossips it to peers.
- Validation and attestation: validators verify the proposal and attest, feeding the fork-choice rule that determines the canonical chain.
- ### Applications
- Ethereum and other proof-of-stake networks rely on per-slot block proposal to advance the chain.
- Proposer-builder separation refines block proposal by splitting transaction ordering from block publication.
- MEV (maximal extractable value) strategies operate during transaction selection within the proposal step.
- Slashing penalties deter proposers who equivocate by proposing conflicting blocks.
- ### Relationships
- partOf:: [[Consensus Mechanism]]
- hasPart:: [[Block]]
- hasPart:: [[Cryptographic Signature]]
- requires:: [[Leader Election]]
- requires:: [[Mempool]]
- requires:: [[Validator]]
- enables:: [[Attestation]]
- enables:: [[Finality Gadget]]
- dependsOn:: [[Proof of Stake]]
- dependsOn:: [[Fork Choice Rule]]
- uses:: [[Digital Signature]]
- relatedTo:: [[Slashing]]
- relatedTo:: [[Blockchain]]
- contrastsWith:: [[Attestation]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
