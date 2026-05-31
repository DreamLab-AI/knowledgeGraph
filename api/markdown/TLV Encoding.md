public:: true

# TLV Encoding
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:tlv-encoding",
  "@type": "Page",
  "vc:slug": "tlv-encoding",
  "title": "TLV Encoding",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tlv-encoding",
  "@type": "Class",
  "label": "TLV Encoding",
  "definition": "Type-Length-Value (TLV) encoding is a compact, extensible binary serialisation scheme in which each data field is represented by a type identifier, a length descriptor, and the value payload. Its self-describing structure allows parsers to skip unknown record types while preserving forward and backward compatibility, which is why protocols such as Lightning and Taproot Assets use it to embed optional metadata in transaction records.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-protocol-and-consensus", "label": "Blockchain Protocol and Consensus"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:taproot-assets", "label": "Taproot Assets"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A compact binary serialisation format using a type identifier, length descriptor, and value payload, enabling self-describing and extensible records. It underpins optional-field handling in protocols like [[Taproot Assets]].
- ### Content
  - TLV streams allow newer fields to be added without breaking older parsers, since unknown types can be identified by their declared length and skipped. Even-numbered types are typically mandatory and odd-numbered types optional under the Lightning/Taproot convention, supporting graceful protocol evolution.
