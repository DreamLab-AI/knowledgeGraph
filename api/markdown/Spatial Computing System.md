public:: true

# Spatial Computing System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f9965a28d5363437e73aeb2bc893928731ee53604525b2bb411b7af414c40fd4",
  "@type": "Page",
  "vc:slug": "spatial-computing-system",
  "title": "Spatial Computing System",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:spatial-interface",
      "vc:label": "Spatial Interface"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:mixed-reality-platform",
      "vc:label": "Mixed Reality Platform"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10056"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Spatial Computing System"
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
  "@id": "urn:ngm:class:spatial-computing-system",
  "@type": "Class",
  "label": "Spatial Computing System",
  "definition": "An integrated computing platform that seamlessly merges digital content with physical environments, exemplified by Apple Vision Pro with its M2 and R1 chips, enabling interaction through eye tracking, hand gestures, and voice while displaying content on micro-OLED displays with spatial positionin...",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:mixed-reality-platform",
      "label": "Mixed Reality Platform"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:spatial-interface",
        "label": "Spatial Interface"
      }
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:spatial-computing-system:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f9965a28d5363437e73aeb2bc893928731ee53604525b2bb411b7af414c40fd4"
  },
  "vc:resolutions": [
    {
      "raw": "[[Spatial Interface]]",
      "resolved": "urn:visionflow:linked:spatial-interface",
      "kind": "StubLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Mixed Reality Platform]]",
      "resolved": "urn:visionflow:owl:class:mixed-reality-platform",
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
  - An integrated computing platform that seamlessly merges digital content with physical environments, exemplified by Apple Vision Pro with its M2 and R1 chips, enabling interaction through eye tracking, hand gestures, and voice while displaying content on micro-OLED displays with spatial positioning awareness.

- ### Semantic Classification
  - owl-class:: spatial-computing:SpatialComputingSystem
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Mixed Reality Platform]]
  - enables:: [[Spatial Interface]]

- ### Content

  - #### Key Technologies
		- Micro-OLED high-resolution displays
		- Dedicated spatial computing processors
		- Multi-sensor environmental understanding
		- Hand and eye tracking input
		- Spatial audio integration
  - #### Apple Vision Pro Specs
		- M2 chip for visionOS and graphics
		- R1 chip for sensor processing
		- 23 million pixels total (4K+ per eye)
		- Launched February 2, 2024
		- Starting price $3,499

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
