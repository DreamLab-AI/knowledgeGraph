public:: true

# Geospatial Information
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1ca57b1e37c172831ba36236c722acab3192f5cec356b457de662092b5d7db39",
  "@type": "Page",
  "vc:slug": "geospatial-information",
  "title": "Geospatial Information",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9619"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Geospatial Information"
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
  "@id": "urn:ngm:class:geospatial-information",
  "@type": "Class",
  "label": "Geospatial Information",
  "definition": "Geospatial Information is data that describes objects, events, or phenomena with reference to a location on or near the Earth's surface. It integrates coordinate systems, geographic data layers, and spatial analytics to support location-aware applications including digital twins, augmented reality overlays, and urban simulation.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-standards-and-interop",
      "label": "Standards and Interoperability"
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
        "@id": "urn:ngm:class:geospatial-engine",
        "label": "Geospatial Engine"
      },
      {
        "@id": "urn:ngm:class:location-based-experience",
        "label": "Location Based Experience"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:coordinate-system",
        "label": "Coordinate System"
      },
      {
        "@id": "urn:ngm:class:lidar",
        "label": "Lidar"
      },
      {
        "@id": "urn:ngm:class:point-cloud",
        "label": "Point Cloud"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:spatial-data-structure",
        "label": "Spatial Data Structure"
      },
      {
        "@id": "urn:ngm:class:geospatial-technology",
        "label": "Geospatial Technology"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:geospatial-information:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1ca57b1e37c172831ba36236c722acab3192f5cec356b457de662092b5d7db39"
  },
  "vc:resolutions": [
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
  - Geospatial Information is data that describes objects, events, or phenomena with reference to a location on or near the Earth's surface. It integrates coordinate systems, geographic data layers, and spatial analytics to support location-aware applications including digital twins, augmented reality overlays, and urban simulation.

- ### Semantic Classification
  - owl-class:: spatial-computing:GeospatialInformation
  - owl-role:: concept

- ### Relationships
  - Uses [[Coordinate System]]
  - Uses [[Lidar]]
  - Uses [[Point Cloud]]
  - Enables [[Geospatial Engine]]
  - Enables [[Location Based Experience]]
  - Related To [[Spatial Data Structure]]
  - Related To [[Geospatial Technology]]

- ### Content

  ## Overview

  Geospatial Information represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
