public:: true
alias:: Proof-of-Publication, Proof Of Publication

# Proof of Publication
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:proof-of-publication",
  "@type": "Page",
  "title": "Proof of Publication",
  "vc:slug": "proof-of-publication",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:proof-of-publication",
  "@type": "Class",
  "label": "Proof of Publication",
  "definition": "Proof of publication is a cryptographic guarantee that a given message has been published to, and ordered within, an append-only medium visible to all relevant parties, such that the publisher cannot later equivocate or hide it. Together with single-use seals it forms one of the two foundations of client-side validation: the publication medium (most commonly the Bitcoin blockchain, but also a Nostr relay set or other consensus system) provides ordering and non-equivocation, while seals bind specific messages to spendable objects. It is the property that lets off-chain smart-contract systems trust that a seal closure was witnessed once and only once.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptographic-protocol",
      "label": "Cryptographic Protocol"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:proof-of-publication-medium",
      "label": "Publication Medium"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:single-use-seals",
        "label": "Single Use Seals"
      },
      {
        "@id": "urn:ngm:class:client-side-validation",
        "label": "Client-Side Validation"
      },
      {
        "@id": "urn:ngm:class:block-trails",
        "label": "Block Trails"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-network",
        "label": "Bitcoin Network"
      },
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      },
      {
        "@id": "urn:ngm:class:trusted-timestamping",
        "label": "Timestamping"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:distributed-consensus",
        "label": "Distributed Consensus"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:nostr",
        "label": "Nostr"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:censorship-resistance",
        "label": "Censorship Resistance"
      },
      {
        "@id": "urn:ngm:class:data-availability",
        "label": "Data Availability"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:rgb-protocol",
        "label": "RGB Protocol"
      }
    ]
  },
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "ResearchAuthored"
  }
}
```

- ### Definition
  - Proof of publication guarantees that a message was made public on an append-only, ordered medium that the relevant parties all observe, removing the publisher's ability to equivocate. It is the medium-layer counterpart to [[Single Use Seals]] in Peter Todd's [[Client-Side Validation]] paradigm.

- ### Overview
  - A single-use seal only matters if the act of closing it is *witnessed once*. Proof of publication supplies that property: the [[Bitcoin Network]] (or another consensus medium) orders transactions and makes them globally visible, so a seal closure cannot be performed twice or concealed. [[Nostr]] relay sets can serve as a lighter-weight publication medium for systems that need ordering and availability without Bitcoin-grade finality.

- ### Mechanisms
  - **Ordering** — the medium imposes a total or partial order on published messages (block height for Bitcoin).
  - **Non-equivocation** — once published, a message cannot be replaced by a conflicting one without detection.
  - **Inclusion proofs** — [[Merkle Tree]] paths let a light client prove a message's publication without downloading the whole medium.
  - **Timestamping** — publication binds the message to a point in time (see [[Timestamping]]).

- ### Relationships
  - is-subclass-of:: [[Cryptographic Protocol]]
  - enables:: [[Single Use Seals]]
  - enables:: [[Client-Side Validation]]
  - enables:: [[Block Trails]]
  - uses:: [[Bitcoin Network]]
  - uses:: [[Merkle Tree]]
  - bridges-to:: [[Nostr]]
  - related-to:: [[Censorship Resistance]]
  - related-to:: [[Data Availability]]

- ### Provenance
  - sources:: Peter Todd, client-side validation writings; RGB Black Paper; Bitcoin Optech
  - updated:: 2026-06-14
