public:: true

# Digital Modeling
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4832556b5f144219127d0dc3f67dbd38c4dfdeb53df30ce6017154f243053073",
  "@type": "Page",
  "vc:slug": "digital-modeling",
  "title": "Digital Modeling",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
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
      "vc:value": "MV-9584"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Digital Modeling"
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
  "@id": "urn:ngm:class:digital-modeling",
  "@type": "Class",
  "label": "Digital Modeling",
  "definition": "Digital Modelling is the process of creating mathematical or geometric representations of physical objects, environments, or systems in a computer, encompassing polygonal mesh construction, NURBS surfaces, procedural generation, and scan-based reconstruction. Digital models serve as the foundation for real-time rendering, simulation, digital twin creation, and asset delivery in spatial computing platforms.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:rendering-engine",
        "label": "Rendering Engine"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:photogrammetry",
        "label": "Photogrammetry"
      },
      {
        "@id": "urn:ngm:class:point-cloud",
        "label": "Point Cloud"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:procedural-content-generation",
        "label": "Procedural Content Generation"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:digital-modeling:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4832556b5f144219127d0dc3f67dbd38c4dfdeb53df30ce6017154f243053073"
  },
  "vc:resolutions": [
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
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
  - Digital Modelling is the process of creating mathematical or geometric representations of physical objects, environments, or systems in a computer, encompassing polygonal mesh construction, NURBS surfaces, procedural generation, and scan-based reconstruction. Digital models serve as the foundation for real-time rendering, simulation, digital twin creation, and asset delivery in spatial computing platforms.

- ### Semantic Classification
  - owl-class:: spatial-computing:DigitalModeling
  - owl-role:: concept

- ### Relationships
  - enables:: [[Digital Twin]], [[Rendering Engine]]
  - uses:: [[Photogrammetry]], [[Point Cloud]]
  - bridges-to:: [[Computer Vision]]
  - related-to:: [[Procedural Content Generation]]

- ### Content

  ## Overview

  Digital Modeling represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
