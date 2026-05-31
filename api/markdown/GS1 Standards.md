public:: true

# GS1 Standards
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:533295cc7c84719ec6d63a1886c565c1857225055e04de3b185410b43a062849",
  "@type": "Page",
  "vc:slug": "gs-1-standards",
  "title": "GS1 Standards",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:standards",
      "vc:label": "Standards"
    },
    {
      "@id": "urn:visionflow:linked:supply-chain",
      "vc:label": "Supply Chain"
    },
    {
      "@id": "urn:visionflow:linked:open-standards",
      "vc:label": "Open Standards"
    },
    {
      "@id": "urn:visionflow:linked:internet-of-things",
      "vc:label": "Internet of Things"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "GS1 Standards"
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
  "@id": "urn:ngm:class:gs-1-standards",
  "@type": "Class",
  "label": "GS1 Standards",
  "definition": "GS1 standards are a global system of identification keys, barcodes and data formats that uniquely identify products, locations and assets across supply chains.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:standards",
      "label": "Standards"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:standards",
        "label": "Standards"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:supply-chain",
        "label": "Supply Chain"
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
  "@id": "urn:visionflow:annotation:link-resolutions:gs-1-standards:8689481d8909",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:533295cc7c84719ec6d63a1886c565c1857225055e04de3b185410b43a062849"
  },
  "vc:resolutions": [
    {
      "raw": "[[Standards]]",
      "resolved": "urn:visionflow:linked:standards",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Supply Chain]]",
      "resolved": "urn:visionflow:linked:supply-chain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Open Standards]]",
      "resolved": "urn:visionflow:linked:open-standards",
      "kind": "StubLink"
    },
    {
      "raw": "[[Internet of Things]]",
      "resolved": "urn:visionflow:linked:internet-of-things",
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
  - GS1 standards are a global system of identification keys, barcodes and data formats that uniquely identify products, locations and assets across supply chains.

- ### Semantic Classification
  - owl-class:: metaverse:GS1Standards
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Standards]]
  - bridges-to:: [[Open Standards]], [[Internet of Things]]
  - requires:: [[Standards]]
  - enables:: [[Supply Chain]]

- ### Content
  - GS1 defines identification keys such as the global trade item number and encodings including linear and two-dimensional barcodes, alongside data exchange formats. These let trading partners refer to the same physical item consistently across organisations.
  - The standards underpin retail scanning, logistics tracking and increasingly digital product passports that link physical goods to online records. They connect physical supply chains to internet-of-things and data interchange systems.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
