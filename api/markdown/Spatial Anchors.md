public:: true

# Spatial Anchors
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:55ebc0932a62ae15d9040a36fd815a838ad7a2e060497389d6648fbdbd609737",
  "@type": "Page",
  "vc:slug": "spatial-anchors",
  "title": "Spatial Anchors",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:ar-technology",
      "vc:label": "AR Technology"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:persistent-ar-placement",
      "vc:label": "Persistent AR Placement"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10051"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Spatial Anchors"
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
  "@id": "urn:ngm:class:spatial-anchors",
  "@type": "Class",
  "label": "Spatial Anchors",
  "definition": "Virtual reference points that bind digital content to specific physical locations in augmented reality environments, using sensor fusion from cameras, GPS, and accelerometers to maintain persistent positioning and orientation of virtual objects relative to real-world spaces.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:ar-technology",
      "label": "AR Technology"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:persistent-ar-placement",
        "label": "Persistent AR Placement"
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
  "@id": "urn:visionflow:annotation:link-resolutions:spatial-anchors:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:55ebc0932a62ae15d9040a36fd815a838ad7a2e060497389d6648fbdbd609737"
  },
  "vc:resolutions": [
    {
      "raw": "[[AR Technology]]",
      "resolved": "urn:visionflow:owl:class:ar-technology",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Persistent AR Placement]]",
      "resolved": "urn:visionflow:owl:class:persistent-ar-placement",
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
  - Virtual reference points that bind digital content to specific physical locations in augmented reality environments, using sensor fusion from cameras, GPS, and accelerometers to maintain persistent positioning and orientation of virtual objects relative to real-world spaces.

- ### Semantic Classification
  - owl-class:: spatial-computing:SpatialAnchors
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[AR Technology]]
  - enables:: [[Persistent AR Placement]]

- ### Content

  - #### Technologies
		- Apple ARKit with ObjectTrackingProvider (June 2024)
		- Vuforia for indoor environments
		- World Locking Tools (WLTs)
		- LiDAR scanner for rapid object placement
		- GPS and accelerometer sensor fusion
  - #### Applications
		- Location-based gaming with virtual characters
		- Architectural visualization on construction sites
		- Industrial maintenance with AR overlays
		- Wayfinding in hospitals and campuses
		- Remote collaboration on shared virtual content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
