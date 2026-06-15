public:: true

# Multicodec
```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:multicodec", "@type": "Page", "title": "Multicodec", "vc:slug": "multicodec", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:multicodec",
  "@type": "Class",
  "label": "Multicodec",
  "definition": "Multicodec is a self-describing data encoding scheme, part of the Multiformats family, that prefixes a binary value with a compact varint code identifying the codec used to interpret the bytes that follow. By making the encoding explicit and machine-readable, multicodec lets systems handle many data formats and hash algorithms without out-of-band agreement, supporting future-proof, agile interoperability across content-addressed systems.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infrastructure",
      "label": "Infrastructure"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:multihash",
        "label": "Multihash"
      },
      {
        "@id": "urn:ngm:class:content-addressing",
        "label": "Content Addressing"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:multihash",
        "label": "Multihash"
      },
      {
        "@id": "urn:ngm:class:cid",
        "label": "CID"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:multiformats",
        "label": "Multiformats"
      },
      {
        "@id": "urn:ngm:class:ipfs",
        "label": "IPFS"
      },
      {
        "@id": "urn:ngm:class:libp2p",
        "label": "libp2p"
      },
      {
        "@id": "urn:ngm:class:filecoin",
        "label": "Filecoin"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:multiformats",
        "label": "Multiformats"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:content-addressing",
        "label": "Content Addressing"
      },
      {
        "@id": "urn:ngm:class:cid",
        "label": "CID"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ipfs",
        "label": "IPFS"
      },
      {
        "@id": "urn:ngm:class:libp2p",
        "label": "libp2p"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-serialization",
        "label": "Data Serialisation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:cid",
        "label": "CID"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:identifier",
        "label": "Identifier"
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
  - [[Multicodec]] is defined in relation to [[Multiformats]], [[IPFS]], [[Multihash]], [[Content Addressing]], building on [[Infrastructure]].
  - Multicodec is a self-describing data encoding scheme, part of the Multiformats family, that prefixes a binary value with a compact varint code identifying the codec used to interpret the bytes that follow. By making the encoding explicit and machine-readable, multicodec lets systems handle many data formats and hash algorithms without out-of-band agreement, supporting future-proof, agile interoperability across content-addressed systems.

- ### Overview
  - Multicodec assigns each known data format and algorithm a small integer code, registered in a public table. A value is made self-describing by prepending the unsigned-varint encoding of its codec code; readers consult the table to dispatch the correct parser, avoiding fragile assumptions about format.
  - It is one of several Multiformats specifications — alongside Multihash, Multibase, and Multiaddr — created so that content-addressed and peer-to-peer systems can evolve their cryptographic and serialisation choices without breaking older data or peers.

- ### Key aspects
  - Varint-prefixed codes drawn from a shared registry of formats and algorithms.
  - Composability with Multihash and Multibase to build Content Identifiers (CIDs).
  - Agility: new codecs can be added without changing the wrapping convention.

- ### Applications
  - Constructing CIDs in IPFS and IPLD so that the hash and codec are unambiguous.
  - Identifying key types and protocols in libp2p peer identities and addresses.
  - Storage layers in Filecoin and other content-addressed networks.

- ### Relationships
  - subClassOf:: [[Infrastructure]]
  - uses:: [[Multihash]]
  - uses:: [[Content Addressing]]
  - hasPart:: [[Multihash]]
  - hasPart:: [[CID]]
  - relatedTo:: [[Multiformats]]
  - relatedTo:: [[IPFS]]
  - relatedTo:: [[libp2p]]
  - relatedTo:: [[Filecoin]]
  - partOf:: [[Multiformats]]
  - enables:: [[Content Addressing]]
  - enables:: [[CID]]
  - supports:: [[IPFS]]
  - supports:: [[libp2p]]
  - requires:: [[Data Serialisation]]
  - bridgesTo:: [[CID]]
  - implements:: [[Identifier]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
