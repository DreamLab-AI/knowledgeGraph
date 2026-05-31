public:: true

# Addressing Scheme
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:addressing-scheme",
  "@type": "Page",
  "vc:slug": "addressing-scheme",
  "title": "Addressing Scheme",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:addressing-scheme",
  "@type": "Class",
  "label": "Addressing Scheme",
  "definition": "An addressing scheme is a systematic convention for assigning, structuring, and resolving identifiers that locate resources, nodes, or content within a namespace. Schemes range from hierarchical and human-readable forms such as IP addresses and URLs to flat cryptographic forms such as content hashes and public-key fingerprints. The defining properties of an addressing scheme are its uniqueness guarantees, its resolution mechanism, and whether addresses are location-based, identity-based, or content-derived. Addressing schemes underpin routing, naming, and reference integrity across networked and decentralised systems.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:technique", "label": "Technique"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:content-addressing", "label": "Content Addressing"},
      {"@id": "urn:ngm:class:decentralised-identifier", "label": "Decentralised Identifier"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:content-identifier", "label": "Content Identifier"}
    ]
  },
  "quality": 0.75
}
```

- ### Definition
  - An [[Addressing Scheme]] is a convention for assigning and resolving identifiers that locate resources within a namespace. It may be location-based, identity-based, or content-derived, and it defines both the structure of valid addresses and the mechanism by which they are resolved to the resources they name.
- ### Relationships
  - Addressing schemes are the foundation of [[Content Addressing]], where the address is derived from the bytes of the content itself, and of [[Decentralised Identifier]] systems, where addresses are bound to cryptographic key material rather than network location. They enable stable [[Content Identifier]] references that survive relocation of the underlying data.
- ### Content
  - Addressing schemes divide broadly into location-based and content-based families. Location-based schemes such as IP addressing and DNS hostnames identify where a resource currently resides, requiring update when the resource moves. Content-based schemes derive the address from a cryptographic hash of the content, yielding immutable, self-verifying references that decouple identity from location.

  - In decentralised systems the choice of addressing scheme determines censorship resistance, deduplication behaviour, and verifiability. Content-addressed stores such as IPFS guarantee that retrieving an address yields exactly the intended bytes, while identity-based schemes such as DIDs allow stable references to mutable resources controlled by a key holder.
