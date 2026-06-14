public:: true
alias:: Blocktrails, Block Trails Protocol

# Block Trails
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:block-trails",
  "@type": "Page",
  "title": "Block Trails",
  "vc:slug": "block-trails",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:block-trails",
  "@type": "Class",
  "label": "Block Trails",
  "definition": "Block Trails is a minimal Bitcoin-native state-anchoring primitive that records an evolving sequence of states as a cryptographic chain of key tweaks mirroring a Bitcoin spend chain. Each state transition derives a tweak t_i = SHA256(state_i) mod n which is scalar-added to the previous key (d_i = d_(i-1) + t_i), producing a fresh pay-to-Taproot (P2TR) key-path output; spending that output to create the next commitment makes every UTXO a single-use seal. The state bytes themselves live off-chain on IPFS, Git, or Nostr relays, while Bitcoin's UTXO model supplies ordering and double-spend protection so that exactly one valid history can exist. Because trails use full secp256k1 keys, existing Nostr identities can own and advance a trail without key conversion. Application semantics are defined by Profiles such as MRC20 (a fungible-token ledger) and Git-mark (anchoring Git commits).",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:client-side-validation", "label": "Client-Side Validation"}],
  "sameAs": [
    {"@id": "urn:ngm:class:blocktrails", "label": "Blocktrails"}
  ],
  "relations": {
    "implements": [
      {"@id": "urn:ngm:class:client-side-validation", "label": "Client-Side Validation"},
      {"@id": "urn:ngm:class:single-use-seals", "label": "Single Use Seals"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:bitcoin-network", "label": "Bitcoin Network"},
      {"@id": "urn:ngm:class:utxo-model", "label": "UTXO Model"},
      {"@id": "urn:ngm:class:proof-of-publication", "label": "Proof of Publication"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:taproot", "label": "Taproot"},
      {"@id": "urn:ngm:class:secp256k1", "label": "secp256k1"},
      {"@id": "urn:ngm:class:schnorr-signature", "label": "Schnorr Signature"},
      {"@id": "urn:ngm:class:sha-256", "label": "SHA-256"},
      {"@id": "urn:ngm:class:cryptographic-commitment", "label": "Cryptographic Commitment"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:single-use-seals", "label": "Single Use Seals"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:provenance-tracking", "label": "Provenance Tracking"},
      {"@id": "urn:ngm:class:fungible-token", "label": "Fungible Token"},
      {"@id": "urn:ngm:class:asset-tokenisation", "label": "Asset Tokenisation"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:nostr", "label": "Nostr"},
      {"@id": "urn:ngm:class:content-addressed-storage", "label": "Content-Addressed Storage"},
      {"@id": "urn:ngm:class:git", "label": "Git"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:rgb-protocol", "label": "RGB Protocol"},
      {"@id": "urn:ngm:class:taproot-assets", "label": "Taproot Assets"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:layer-2-scaling", "label": "Layer 2 Scaling"},
      {"@id": "urn:ngm:class:decentralised-application", "label": "Decentralised Application"},
      {"@id": "urn:ngm:class:rgb-and-client-side-validation", "label": "RGB and Client Side Validation"}
    ]
  },
  "quality": 0.74,
  "provenance": {"attributedTo": "did:nostr:ontology-mesh", "generatedAt": "2026-06-14T00:00:00Z", "inferenceRule": "ResearchAuthored"}
}
```

- ### Definition
  - Block Trails is a minimal Bitcoin-native primitive for persistent, verifiable state anchoring. It threads an evolving sequence of states through a [[Single Use Seals]] chain built on Bitcoin [[Taproot]] outputs, so that [[Bitcoin Network]] enforces ordering and uniqueness while validation of the state itself happens under [[Client-Side Validation]]. Reference: [blocktrails.org](https://blocktrails.org/).

- ### Overview
  - A trail is a head [[UTXO Model|UTXO]] whose key encodes the current state. To advance the trail, the holder computes a tweak from the next state, adds it to the controlling key, and spends the current output to a new P2TR output under the tweaked key. The Bitcoin transaction graph thus *is* the state-transition graph: there can only ever be one valid continuation, because a UTXO can be spent only once.
  - No new token, sidechain, or consensus change is required. Bitcoin contributes only ordering and double-spend resistance; the meaning of each state is defined entirely off-chain and verified by the parties who care.

- ### Mechanisms
  - **Key tweaking**: state i derives `t_i = SHA256(state_i) mod n`; the controlling scalar evolves as `d_i = d_(i-1) + t_i`, with the matching public key `P_i = P_(i-1) + t_i·G`.
  - **P2TR key-path spends**: each state maps to a [[Taproot]] pay-to-public-key output spent by signature only (no script evaluation), keeping transactions cheap and indistinguishable from ordinary Taproot spends.
  - **Single-use seals**: spending the head UTXO is the act of committing the next state — see [[Single Use Seals]] and [[Proof of Publication]].
  - **Off-chain state**: the actual state bytes (evolving JSON documents) are stored on [[Content-Addressed Storage]] (IPFS), [[Git]] repositories, or [[Nostr]] relays; only the commitment touches the chain.
  - **secp256k1 / Nostr alignment**: trails use full [[secp256k1]] keys, the same cryptography as [[Nostr]], so a Nostr identity can own a trail directly.
  - **SPV-compatibility**: trail histories are verifiable with Merkle proofs rather than a full node.

- ### Profiles
  - **MRC20** — a fungible-token ledger profile defining mint, transfer, and burn semantics over a trail.
  - **Git-mark** — anchors [[Git]] commits by using commit hashes as tweaks, giving a Bitcoin-secured provenance log for source history.
  - Custom profiles can encode voting, attestations, game state, or audit trails — the trail enforces ordering; the profile enforces application rules.

- ### Positioning
  - Block Trails is intentionally smaller than [[RGB Protocol]] or [[Taproot Assets]]: a primitive rather than a complete smart-contract system. It contrasts with those by pushing all validation rules to the application layer and keeping the Bitcoin footprint to a single key-path output per state.

- ### Anchoring web truths
  - Because a trail's state can be any document, Block Trails can anchor *web* documents — a "web truth" — to Bitcoin. A page publishes a `blocktrails.json` trail (for example `https://melvin.me/public/worldcup/blocktrails.json`, served from a [[Solid]] pod) and links it from a short, human-readable note in the page footer. The public verifier at `blocktrails.org/verify/?uri=<trail-url>` walks that trail against the chain and reports that the document's history is timestamped and tamper-evident on Bitcoin.
  - The guarantee is precise: the verifier proves the history's *immutability and temporal anchoring*, not the *truthfulness of the contents*. It establishes that this state existed at this time and has not been silently rewritten — exactly the provenance primitive that [[Git Mark]] and [[Web Contracts]] build on.

- ### Relationships
  - is-subclass-of:: [[Client-Side Validation]]
  - implements:: [[Single Use Seals]]
  - depends-on:: [[Bitcoin Network]]
  - depends-on:: [[UTXO Model]]
  - depends-on:: [[Proof of Publication]]
  - uses:: [[Taproot]]
  - uses:: [[secp256k1]]
  - uses:: [[Schnorr Signature]]
  - enables:: [[Provenance Tracking]]
  - bridges-to:: [[Nostr]] (cross-domain: shared secp256k1 identity)
  - bridges-to:: [[Content-Addressed Storage]]
  - bridges-to:: [[Git]]
  - contrasts-with:: [[RGB Protocol]]
  - contrasts-with:: [[Taproot Assets]]

- ### Provenance
  - sources:: https://blocktrails.org/
  - updated:: 2026-06-14
