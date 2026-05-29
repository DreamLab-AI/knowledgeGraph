public:: true

# Spatial Web
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cb6abc1bbdf211b0294e17fc7b5950f479e9cbfbeda69cf2dcc1a31e6edf49f3",
  "@type": "Page",
  "vc:slug": "spatial-web",
  "title": "Spatial Web",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": ""
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Spatial Web"
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
  "@id": "urn:ngm:class:spatial-web",
  "@type": "Class",
  "label": "Spatial Web",
  "definition": "The Spatial Web is a computing paradigm that overlays machine-readable semantic information on physical locations and objects, enabling devices to understand and interact with the real world in context. It combines spatial computing, geospatial data, IoT sensors, and web standards to blur the boundary between physical and digital environments, and is regarded as a foundational layer for persistent augmented reality and metaverse experiences.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:spatial-anchor", "label": "Spatial Anchor"},
      {"@id": "urn:ngm:class:internet-of-things", "label": "Internet of Things"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"},
      {"@id": "urn:ngm:class:immersive-experience", "label": "Immersive Experience"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:web3", "label": "Web3"},
      {"@id": "urn:ngm:class:semantic-web", "label": "Semantic Web"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:spatial-web:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cb6abc1bbdf211b0294e17fc7b5950f479e9cbfbeda69cf2dcc1a31e6edf49f3"
  },
  "vc:resolutions": [],
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
  - The Spatial Web is a computing paradigm that overlays machine-readable semantic information on physical locations and objects, enabling devices to understand and interact with the real world in context. It combines spatial computing, geospatial data, IoT sensors, and web standards to blur the boundary between physical and digital environments, and is regarded as a foundational layer for persistent augmented reality and metaverse experiences.

- ### Semantic Classification
  - owl-class:: spatial-computing:SpatialWeb
  - owl-role:: Concept

- ### Relationships
  - requires [[Spatial Anchor]]
  - requires [[Internet of Things]]
  - enables [[Augmented Reality]]
  - enables [[Immersive Experience]]
  - bridgesTo [[Web3]]
  - bridgesTo [[Semantic Web]]

- ### Content
  “The Spatial Web”, a blurring of the boundaries between digital and geospatial physical objects, seems to have developed from the strands in the original W3C scope around devices in the real world. It has been concentrating around AR and VR but is being marketed and amplified with the same references to availability of data. This too is finding little traction in practice, though obviously the component technologies continue to enjoy rapid development. Nonetheless, this interpretation of Web3 becomes valuable when examining Metaverse later.

  #### Spatial web

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
