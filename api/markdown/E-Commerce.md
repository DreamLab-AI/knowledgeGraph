public:: true

# E-Commerce
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1ead2bcc227f5802f2aab44314744ccce166183fc43796824c49d979ab8f304c",
  "@type": "Page",
  "vc:slug": "e-commerce",
  "title": "E-Commerce",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9595"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "E-Commerce"
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
  "@id": "urn:ngm:class:e-commerce",
  "@type": "Class",
  "label": "E-Commerce",
  "definition": "E-Commerce is a type of Spatial Computing in the spatial computing domain.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:e-commerce:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1ead2bcc227f5802f2aab44314744ccce166183fc43796824c49d979ab8f304c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
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
  - E Commerce is a concept within the metaverse domain. Further enrichment pending.
- ### Bridge-To
  - bridges-to:: [[Blockchain]] (bc)
- ### Semantic Classification
  - owl-class:: spatial-computing:ECommerce
  - owl-role:: concept
- ### Relationships
  - <!-- No relationships defined -->
- ### Content
  ## Overview
  E Commerce represents an abstract concept in the metaverse ontology hierarchy.
  #### Related Concepts
  - [[owl:Thing]]
- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
