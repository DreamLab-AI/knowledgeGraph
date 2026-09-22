public:: true
alias:: ISO/IEC 30170

# ISO-IEC 30170
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d9e147b965a7e3dae109970b3f8cdc31f2ce75d00413eedeec51f58f7ff83f15",
  "@type": "Page",
  "vc:slug": "iso-iec-30170",
  "title": "ISO-IEC 30170",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:technical-standard",
      "vc:label": "Technical Standard"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "ISO-IEC 30170"
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
  "@id": "urn:ngm:class:iso-iec-30170",
  "@type": "Class",
  "label": "ISO-IEC 30170",
  "definition": "ISO/IEC 30170 is the international standard specifying the syntax and semantics of the Ruby programming language. Published in 2012 and derived from the Japanese standard JIS X 3017, it defines Ruby's object model, execution behaviour and core language constructs so that independent implementations can conform to a common specification.",
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
    "relatedTo": [
      {
        "@id": "urn:ngm:class:programming-language",
        "label": "Programming Language"
      },
      {
        "@id": "urn:ngm:class:software-development",
        "label": "Software Development"
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
  "@id": "urn:visionflow:annotation:link-resolutions:iso-iec-30170:c9cc8cafb745",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d9e147b965a7e3dae109970b3f8cdc31f2ce75d00413eedeec51f58f7ff83f15"
  },
  "vc:resolutions": [
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
  - ISO/IEC 30170 is the international standard specifying the syntax and semantics of the Ruby programming language. Published in 2012 and derived from the Japanese standard JIS X 3017, it defines Ruby's object model, execution behaviour and core language constructs so that independent implementations can conform to a common specification.

- ### Semantic Classification
  - owl-class:: standards:ISOIEC30170
  - owl-role:: Standard

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - related-to:: [[Programming Language]], [[Software Development]]

- ### Content
  - ISO/IEC 30170 specifies the syntax and semantics of the Ruby programming language.
  - Topic area: programming language Ruby.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
