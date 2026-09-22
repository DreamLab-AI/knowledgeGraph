public:: true

# Sidetree Protocol

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:sidetree-protocol",
  "@type": "Page",
  "title": "Sidetree Protocol",
  "vc:slug": "sidetree-protocol",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sidetree-protocol",
  "@type": "Class",
  "label": "Sidetree Protocol",
  "definition": "The Sidetree Protocol is a layer-two protocol for operating scalable decentralised identifier networks on top of any existing decentralised ledger without requiring trusted intermediaries or special-purpose consensus. It batches large numbers of DID create, update, recover, and deactivate operations, anchors a single compact commitment to the underlying chain, and stores the operation data in content-addressed storage so that any node can deterministically replay the operation log to compute current DID states. This separation of anchoring from data lets identifier throughput scale far beyond the base chain's transaction capacity.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:did-method",
      "label": "DID Method"
    }
  ],
  "relations": {
    "subClassOf": [
      {
        "@id": "urn:ngm:class:did-method",
        "label": "DID Method"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:w3-c-did",
        "label": "W3C DID"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      },
      {
        "@id": "urn:ngm:class:content-addressed-storage",
        "label": "Content-Addressed Storage"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      },
      {
        "@id": "urn:ngm:class:content-addressed-storage",
        "label": "Content-Addressed Storage"
      },
      {
        "@id": "urn:ngm:class:ipfs",
        "label": "IPFS"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      },
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:did-method",
        "label": "DID Method"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:did-document",
        "label": "DID Document"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:w3-c-did",
        "label": "W3C DID"
      },
      {
        "@id": "urn:ngm:class:ipfs",
        "label": "IPFS"
      },
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
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
	- The [[Sidetree Protocol]] is a [[DID Method]] family that runs scalable decentralised identifier networks atop a [[Distributed Ledger]].
	- It batches DID operations and anchors a single commitment to the chain while storing data in [[Content-Addressed Storage]].
	- Any node can replay the operation log deterministically to derive current [[DID Document]] state.
- ### Overview
	- Sidetree decouples anchoring from data: only a compact reference is written on-chain, dramatically increasing identifier throughput.
	- Operation files are organised with a [[Merkle Tree]] so a single anchor commits to many operations.
	- The data layer typically uses [[IPFS]] or comparable content-addressed storage.
- ### Mechanisms
	- Aggregate create, update, recover, and deactivate operations into batches.
	- Build a [[Merkle Tree]] over the batch and publish the operation data to [[Content-Addressed Storage]].
	- Anchor the batch root to a base chain such as [[Bitcoin]] or another [[Distributed Ledger]].
	- Nodes process anchors in order and replay operations to compute deterministic DID states.
- ### Applications
	- Implementing W3C-conformant [[DID Method]] networks under [[W3C DID]].
	- Providing scalable identifiers for [[Public Key Infrastructure]] and verifiable credentials.
	- Resolving [[DID Document]] state for self-sovereign identity wallets.
- ### Relationships
	- partOf:: [[W3C DID]]
	- hasPart:: [[Merkle Tree]]
	- hasPart:: [[Content-Addressed Storage]]
	- uses:: [[IPFS]]
	- dependsOn:: [[Distributed Ledger]]
	- dependsOn:: [[Bitcoin]]
	- implements:: [[DID Method]]
	- enables:: [[DID Document]]
	- supports:: [[Public Key Infrastructure]]
	- relatedTo:: [[W3C DID]]
- ### Provenance
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
	- updated:: 2026-06-15
