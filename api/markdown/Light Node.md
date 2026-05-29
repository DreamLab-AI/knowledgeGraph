public:: true

# Light Node
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8ef88e8de03f7749a9e30d0248e6fd9c45bc8d14e48ef7b53d8f2708fd5019e1",
  "@type": "Page",
  "vc:slug": "light-node",
  "title": "Light Node",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ieee-2418-1",
      "vc:label": "IEEE 2418.1"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-23257-2021",
      "vc:label": "ISO/IEC 23257:2021"
    },
    {
      "@id": "urn:visionflow:linked:nist-nistir",
      "vc:label": "NIST NISTIR"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-entity",
      "vc:label": "Blockchain Entity"
    },
    {
      "@id": "urn:visionflow:owl:class:cryptographic-domain",
      "vc:label": "CryptographicDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:network-component",
      "vc:label": "NetworkComponent"
    },
    {
      "@id": "urn:visionflow:owl:class:security-layer",
      "vc:label": "SecurityLayer"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0074"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Light Node"
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
  "@id": "urn:ngm:class:light-node",
  "@type": "Class",
  "label": "Light Node",
  "definition": "A Light Node is a blockchain network participant that downloads and verifies only block headers rather than the full transaction history, using Simplified Payment Verification (SPV) to confirm transaction inclusion via Merkle proofs. This design allows resource-constrained devices—mobile wallets, IoT devices, embedded clients—to interact securely with a blockchain without the storage and bandwidth demands of a Full Node, relying on connected full nodes to supply the underlying transaction data when required.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-entity",
      "label": "Blockchain Entity"
    }
  ],
  "relations": {
    "contrastsWith": [
      {"@id": "urn:ngm:class:full-node", "label": "Full Node"},
      {"@id": "urn:ngm:class:archival-node", "label": "Archival Node"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:cryptographic-hash-function", "label": "Cryptographic Hash Function"},
      {"@id": "urn:ngm:class:peer-to-peer-network", "label": "Peer-to-Peer Network"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:blockchain-network", "label": "Blockchain Network"},
      {"@id": "urn:ngm:class:cryptographic-protocol", "label": "Cryptographic Protocol"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:blockchain-infrastructure", "label": "Blockchain Infrastructure"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:bootstrap-node", "label": "Bootstrap Node"},
      {"@id": "urn:ngm:class:validator-node", "label": "Validator Node"},
      {"@id": "urn:ngm:class:blockchain-protocol", "label": "Blockchain Protocol"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:digital-wallet", "label": "Digital Wallet"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:light-node:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8ef88e8de03f7749a9e30d0248e6fd9c45bc8d14e48ef7b53d8f2708fd5019e1"
  },
  "vc:resolutions": [
    {
      "raw": "[[IEEE 2418.1]]",
      "resolved": "urn:visionflow:linked:ieee-2418-1",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 23257:2021]]",
      "resolved": "urn:visionflow:linked:iso-iec-23257-2021",
      "kind": "StubLink"
    },
    {
      "raw": "[[NIST NISTIR]]",
      "resolved": "urn:visionflow:linked:nist-nistir",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain Entity]]",
      "resolved": "urn:visionflow:owl:class:blockchain-entity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[CryptographicDomain]]",
      "resolved": "urn:visionflow:owl:class:cryptographic-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[NetworkComponent]]",
      "resolved": "urn:visionflow:owl:class:network-component",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SecurityLayer]]",
      "resolved": "urn:visionflow:owl:class:security-layer",
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
  A Light Node is a blockchain network participant that downloads and verifies only block headers rather than the full transaction history, using Simplified Payment Verification (SPV) to confirm transaction inclusion via Merkle proofs. This design allows resource-constrained devices—mobile wallets, IoT devices, embedded clients—to interact securely with a blockchain without the storage and bandwidth demands of a Full Node.

- ### Relationships
  Light Nodes contrast sharply with Full Nodes and Archival Nodes, which maintain complete transaction histories. They require a Cryptographic Hash Function to verify Merkle proofs embedded in block headers and depend on the Peer-to-Peer Network to obtain header data from honest peers. They operate as participants within the broader Blockchain Infrastructure and are closely related to Bootstrap Nodes, which supply initial peer discovery, and Validator Nodes, which produce the blocks light nodes consume. The digital wallet use-case is the primary consumer of the light-node pattern, enabling mobile and browser-based wallets to verify payments trustlessly.

- ### Content

  A Light Node implements Simplified Payment Verification as described in Section 8 of the original Bitcoin whitepaper. Rather than downloading every transaction, the node fetches only the chain of block headers—each an 80-byte structure containing the previous block hash, Merkle root, timestamp, difficulty target, and nonce. To verify that a specific transaction appears in a block, the light node requests a Merkle branch from a full node: a minimal set of sibling hashes that, when hashed together in the correct order, reproduce the Merkle root stored in the header. Because the header is part of the longest proof-of-work chain, the transaction's inclusion is considered probabilistically confirmed to the same security depth as the chain length.

  The principal trade-off is trust assumption. A light node inherits the security of the majority-honest full-node network; it cannot independently detect invalid transactions or double-spends unless it requests additional data. This makes light nodes appropriate for end-user wallets where convenience outweighs the marginal security benefit of running a full node, but unsuitable for exchange back-ends or high-value custody systems that demand full independent verification.

  From a network-topology perspective, light nodes are consumers rather than contributors: they do not relay unconfirmed transactions, do not store historical blocks for other peers, and do not participate in block propagation. This means large populations of light nodes add negligible load to the peer-to-peer network while still benefiting from its security guarantees—a key scalability property supporting mass consumer adoption of blockchain-based payments.

  Implementation variants include compact block filters (BIP 157/158), which allow light clients to download compressed summaries of block contents and determine locally whether any transactions are relevant, reducing privacy leakage compared to classical Bloom-filter SPV (BIP 37). This evolution addresses a recognised weakness wherein BIP-37 light clients could reveal their wallet addresses to the full nodes they queried.

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
