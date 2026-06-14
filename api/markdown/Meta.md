public:: true

# Meta
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0796edd31e072d6432876a8ffd7acc44edec1b18b3a7cf20e1cb017937df9287",
  "@type": "Page",
  "vc:slug": "meta",
  "title": "Meta",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:metaverse",
      "vc:label": "Metaverse"
    },
    {
      "@id": "urn:visionflow:linked:augmented-reality",
      "vc:label": "Augmented Reality"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Meta"
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
  "@id": "urn:ngm:class:meta",
  "@type": "Class",
  "label": "Meta",
  "definition": "An American technology company, formerly named Facebook, that operates social media platforms and develops virtual and augmented reality hardware and software. It rebranded to Meta Platforms in 2021 to reflect a focus on the metaverse.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Sc Platform And Environment"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
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
  "@id": "urn:visionflow:annotation:link-resolutions:meta:ea3bd73e2b50",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0796edd31e072d6432876a8ffd7acc44edec1b18b3a7cf20e1cb017937df9287"
  },
  "vc:resolutions": [
    {
      "raw": "[[Metaverse]]",
      "resolved": "urn:visionflow:linked:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Augmented Reality]]",
      "resolved": "urn:visionflow:linked:augmented-reality",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
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
  - An American technology company, formerly named Facebook, that operates social media platforms and develops virtual and augmented reality hardware and software. It rebranded to Meta Platforms in 2021 to reflect a focus on the metaverse.

- ### Semantic Classification
  - owl-class:: metaverse:Meta
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Augmented Reality]]
  - enables:: [[Metaverse]]

- ### Content
  - Meta Platforms, founded as Facebook in 2004 by Mark Zuckerberg and others, operates social networking and messaging services including Facebook, Instagram, and WhatsApp. It renamed itself Meta in 2021.
  - Through its Reality Labs division, the company develops virtual reality headsets under the Quest brand and conducts research into augmented reality and the metaverse, alongside its advertising-driven core business.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
