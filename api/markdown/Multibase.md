public:: true

# Multibase

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:multibase", "@type": "Page", "title": "Multibase", "vc:slug": "multibase", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:multibase",
  "@type": "Class",
  "label": "Multibase",
  "definition": "Multibase is a self-describing encoding format specification that prefixes a binary value with a single character identifying which base encoding, such as base58btc, base32 or base64url, was used, so the encoded string can be decoded without external context. It is part of the Multiformats family of self-describing protocol specifications. It is used wherever content identifiers or decentralised-identifier material must be represented as text unambiguously across systems, such as Content Identifiers.",
  "domain": "infrastructure",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:multiformats",
      "label": "Multiformats"
    }
  ],
  "relations": {
    "uses": [],
    "enables": [],
    "requires": [],
    "implements": [],
    "partOf": [
      {
        "@id": "urn:ngm:class:multiformats",
        "label": "Multiformats"
      }
    ],
    "contrastsWith": [],
    "dependsOn": [],
    "bridgesTo": [],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:content-identifier",
        "label": "Content Identifier"
      }
    ],
    "supports": []
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
	- Multibase is a self-describing encoding format specification that prefixes a binary value with a single character identifying which base encoding, such as base58btc, base32 or base64url, was used, so the encoded string can be decoded without external context. It is part of the Multiformats family of self-describing protocol specifications. It is used wherever content identifiers or decentralised-identifier material must be represented as text unambiguously across systems, such as Content Identifiers.
- ### Relationships
	- partOf:: [[Multiformats]]
	- relatedTo:: [[Content Identifier]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
