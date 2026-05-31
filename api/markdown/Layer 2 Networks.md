public:: true

# Layer 2 Networks
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:20fd0630f33a07f2940ecab4004f0f4577533de9e9169011178bf44fd6a451f9",
  "@type": "Page",
  "vc:slug": "layer-2-networks",
  "title": "Layer 2 Networks",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:layer-1",
      "vc:label": "Layer 1"
    },
    {
      "@id": "urn:visionflow:linked:scalability",
      "vc:label": "Scalability"
    },
    {
      "@id": "urn:visionflow:linked:rollup",
      "vc:label": "Rollup"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Layer 2 Networks"
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
  "@id": "urn:ngm:class:layer-2-networks",
  "@type": "Class",
  "label": "Layer 2 Networks",
  "definition": "Protocols built on top of a base blockchain that process transactions off the main chain while inheriting its settlement and security guarantees.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:layer-1",
      "label": "Layer 1"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:layer-1",
        "label": "Layer 1"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
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
  "@id": "urn:visionflow:annotation:link-resolutions:layer-2-networks:31852eaab73d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:20fd0630f33a07f2940ecab4004f0f4577533de9e9169011178bf44fd6a451f9"
  },
  "vc:resolutions": [
    {
      "raw": "[[Layer 1]]",
      "resolved": "urn:visionflow:linked:layer-1",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Scalability]]",
      "resolved": "urn:visionflow:linked:scalability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Rollup]]",
      "resolved": "urn:visionflow:linked:rollup",
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
  - Protocols built on top of a base blockchain that process transactions off the main chain while inheriting its settlement and security guarantees.

- ### Semantic Classification
  - owl-class:: blockchain:Layer2Networks
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Layer 1]]
  - bridges-to:: [[Rollup]]
  - requires:: [[Layer 1]]
  - enables:: [[Scalability]]

- ### Content
  - Layer 2 networks move execution and data away from the base chain to increase throughput and lower cost, then settle results back to Layer 1. Common forms include rollups, state channels, and sidechains.
  - Their security depends on the ability to fall back to the base layer, for example by posting data or proofs that allow disputes to be resolved on Layer 1. This lets them scale transaction volume without weakening final settlement.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
