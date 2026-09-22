public:: true

# ISO 639 Language Codes
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7f886262c8a8fef47abf2e8f96b32a7e71058ba8d41e587c3e1a9c51548b11f6",
  "@type": "Page",
  "vc:slug": "iso-639-language-codes",
  "title": "ISO 639 Language Codes",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:iso",
      "vc:label": "ISO"
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
      "vc:value": "ISO 639 Language Codes"
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
  "@id": "urn:ngm:class:iso-639-language-codes",
  "@type": "Class",
  "label": "ISO 639 Language Codes",
  "definition": "An ISO standard, in multiple parts, defining codes for the representation of names of languages. It is widely used to identify languages in data and software.",
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
        "@id": "urn:ngm:class:iso",
        "label": "ISO"
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

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:iso-639-language-codes:b1d1f51963a9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7f886262c8a8fef47abf2e8f96b32a7e71058ba8d41e587c3e1a9c51548b11f6"
  },
  "vc:resolutions": [
    {
      "raw": "[[ISO]]",
      "resolved": "urn:visionflow:linked:iso",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Technical Standard]]",
      "resolved": "urn:visionflow:linked:technical-standard",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - An ISO standard, in multiple parts, defining codes for the representation of names of languages. It is widely used to identify languages in data and software.

- ### Semantic Classification
  - owl-class:: standards:ISO639LanguageCodes
  - owl-role:: Standard

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[ISO]]

- ### Content
  - An ISO standard, in multiple parts, defining codes for the representation of names of languages. It is widely used to identify languages in data and software.
  - Topic area: language codes.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
