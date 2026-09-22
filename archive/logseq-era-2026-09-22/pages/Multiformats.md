public:: true

# Multiformats
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:multiformats", "@type":"Page", "title":"Multiformats", "vc:slug":"multiformats", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:multiformats",
  "@type":"Class",
  "label":"Multiformats",
  "definition":"Multiformats is a collection of self-describing protocol and value specifications designed to make data formats future-proof and interoperable across decentralised systems. Rather than hard-coding a single hash, encoding, or address scheme, each multiformat prefixes the value with a compact code declaring which algorithm or format it uses, so software can interpret it unambiguously and evolve without breaking. Components include multihash, multibase, multicodec, and multiaddr, and the family underpins content addressing in IPFS and libp2p.",
  "domain":"infrastructure",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:content-addressing","label":"Content Addressing"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:content-addressing","label":"Content Addressing"}
    ],
    "hasPart":[
      {"@id":"urn:ngm:class:multihash","label":"Multihash"},
      {"@id":"urn:ngm:class:content-identifier","label":"Content Identifier"}
    ],
    "standardizedBy":[
      {"@id":"urn:ngm:class:standards","label":"Standards"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:interoperability","label":"Interoperability"},
      {"@id":"urn:ngm:class:content-addressing","label":"Content Addressing"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:cryptography","label":"Cryptography"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:ipfs","label":"IPFS"},
      {"@id":"urn:ngm:class:libp2p","label":"libp2p"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:content-identifier","label":"Content Identifier"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:decentralised-file-storage","label":"Decentralised file storage"},
      {"@id":"urn:ngm:class:distributed-hash-table","label":"Distributed Hash Table"},
      {"@id":"urn:ngm:class:interoperability","label":"Interoperability"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Multiformats]] is a family of self-describing format specifications that make values portable across decentralised systems.
	- Each value carries a prefix code declaring its algorithm, enabling unambiguous interpretation and graceful evolution, central to [[Content Addressing]].
	- It includes [[Multihash]] and underpins the [[Content Identifier]] used by [[IPFS]] and [[libp2p]].
- ### Overview
	- Distributed systems must agree on how to hash, encode, and address data, but hard-coding one algorithm makes upgrades impossible without breaking existing references.
	- Multiformats solves this by making every value self-describing: a short prefix names the algorithm or format, so the same parser handles old and new variants side by side.
	- The core members are multihash (self-describing cryptographic digests), multibase (self-describing text encodings), multicodec (self-describing serialisation/codec tags), and multiaddr (self-describing network addresses).
	- Together they let content-addressed systems remain agile in the face of evolving cryptography and transport layers.
- ### Mechanisms
	- Prefix each value with a varint code drawn from a shared codec table.
	- Compose codes to describe layered structures such as a CID wrapping a multihash and multicodec.
	- Parse generically by reading the prefix before the payload, never assuming a fixed algorithm.
	- Extend the registry to adopt new hashes or encodings without invalidating existing data.
- ### Applications
	- Building [[Content Identifier|content identifiers]] (CIDs) for [[IPFS]] and the broader IPLD data model.
	- Encoding peer and transport addresses in [[libp2p]] via multiaddr.
	- Representing cryptographic digests portably with [[Multihash]].
	- Enabling forward-compatible [[Decentralised file storage]] and naming.
- ### Relationships
	- partOf:: [[Content Addressing]]
	- hasPart:: [[Multihash]]
	- hasPart:: [[Content Identifier]]
	- standardizedBy:: [[Standards]]
	- enables:: [[Interoperability]]
	- enables:: [[Content Addressing]]
	- uses:: [[Cryptography]]
	- supports:: [[IPFS]]
	- supports:: [[libp2p]]
	- implements:: [[Content Identifier]]
	- relatedTo:: [[Decentralised file storage]]
	- relatedTo:: [[Distributed Hash Table]]
	- relatedTo:: [[Interoperability]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
