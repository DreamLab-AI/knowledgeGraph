```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3cf2b9f0a706cff3aa6c5a575b9b9e20c4f3738e39dd1bc8f41bbcb2d0332ae5",
  "@type": "Page",
  "vc:slug": "rfc-8785-canonical-json",
  "title": "RFC 8785 Canonical JSON",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ietf",
      "vc:label": "IETF"
    },
    {
      "@id": "urn:visionflow:linked:technical-standard",
      "vc:label": "Technical Standard"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "RFC 8785 Canonical JSON"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:rfc-8785-canonical-json",
  "@type": "Class",
  "label": "RFC 8785 Canonical JSON",
  "definition": "RFC 8785 specifies the JSON Canonicalization Scheme, a method for producing a deterministic serialisation of JSON data to support cryptographic operations.",
  "domain": "standards",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:technical-standard",
      "label": "Technical Standard"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:ietf",
        "label": "IETF"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

- ### Definition
  - RFC 8785 specifies the JSON Canonicalization Scheme, a method for producing a deterministic serialisation of JSON data to support cryptographic operations.

- ### Semantic Classification
  - owl-class:: standards:RFC8785CanonicalJSON
  - owl-role:: Standard

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[IETF]]

- ### Content
  - RFC 8785 specifies the JSON Canonicalization Scheme, a method for producing a deterministic serialisation of JSON data to support cryptographic operations.
  - Topic area: JSON canonicalisation.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
