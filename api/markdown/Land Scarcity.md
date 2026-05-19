public:: true

# Land Scarcity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:287dd8c8ddf99d2acd3a7f89de6726887272d0a67ec25aca7936abf48c69a5ea",
  "@type": "Page",
  "vc:slug": "land-scarcity",
  "title": "Land Scarcity",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:virtual-economics",
      "vc:label": "Virtual Economics"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "Metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse-domain",
      "vc:label": "MetaverseDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-4008"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Land Scarcity"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:land-scarcity",
  "@type": "Class",
  "label": "Land Scarcity",
  "definition": "Economic principle in virtual worlds where digital land parcels are artificially limited to create value and drive virtual real estate markets.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:metaverse",
      "label": "Metaverse"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:land-scarcity:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:287dd8c8ddf99d2acd3a7f89de6726887272d0a67ec25aca7936abf48c69a5ea"
  },
  "vc:resolutions": [
    {
      "raw": "[[Virtual Economics]]",
      "resolved": "urn:visionflow:linked:virtual-economics",
      "kind": "StubLink"
    },
    {
      "raw": "[[Metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse-domain",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Economic principle in virtual worlds where digital land parcels are artificially limited to create value and drive virtual real estate markets.

- ### Semantic Classification
  - owl-class:: spatial-computing:LandScarcity
  - owl-role:: Process
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - is-subclass-of:: [[Metaverse]]

- ### Content
  Land Scarcity — content pending enrichment.

- ### Provenance
  - sources:: [[Virtual Economics]], [[Metaverse]]
  - migration-date:: 2026-04-26T00:00:00Z
