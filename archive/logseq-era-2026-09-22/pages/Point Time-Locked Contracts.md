public:: true

# Point Time-Locked Contracts

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:point-time-locked-contracts", "@type": "Page", "title": "Point Time-Locked Contracts", "vc:slug": "point-time-locked-contracts", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:point-time-locked-contracts",
  "@type": "Class",
  "label": "Point Time-Locked Contracts",
  "definition": "Point Time-Locked Contracts (PTLCs) are a Bitcoin Lightning Network payment primitive that use elliptic-curve adaptor signatures and a single secret point, rather than a hash preimage, to enforce conditional, time-bound payment across a route. They replace Hash Time-Locked Contracts with a scheme that reveals no shared hash across hops, improving privacy and eliminating hash-linkage attacks between channels. PTLCs are enabled by Taproot's Schnorr signatures and are proposed as a routing primitive for higher Bitcoin layers such as BTC Layer 3.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:hash-time-locked-contract",
      "label": "Hash Time-Locked Contract"
    }
  ],
  "relations": {
    "uses": [],
    "requires": [
      {
        "@id": "urn:ngm:class:taproot",
        "label": "Taproot"
      }
    ],
    "enables": [],
    "partOf": []
  },
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- Point Time-Locked Contracts (PTLCs) are a Bitcoin Lightning Network payment primitive that use elliptic-curve adaptor signatures and a single secret point, rather than a hash preimage, to enforce conditional, time-bound payment across a route. They replace Hash Time-Locked Contracts with a scheme that reveals no shared hash across hops, improving privacy and eliminating hash-linkage attacks between channels. PTLCs are enabled by Taproot's Schnorr signatures and are proposed as a routing primitive for higher Bitcoin layers such as BTC Layer 3.
- ### Relationships
	- requires:: [[Taproot]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
