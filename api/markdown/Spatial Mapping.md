public:: true

# Spatial Mapping
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4ddcbe4de6a8c9a89bbc7bade1fbead10341f8c434acdb29e1f794590c417665",
  "@type": "Page",
  "vc:slug": "spatial-mapping",
  "title": "Spatial Mapping",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9148"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Spatial Mapping"
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
  "@id": "urn:ngm:class:spatial-mapping",
  "@type": "Class",
  "label": "Spatial Mapping",
  "definition": "Spatial Mapping is a spatial computing concept and a type of spatial-computing.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:spatial-mapping:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4ddcbe4de6a8c9a89bbc7bade1fbead10341f8c434acdb29e1f794590c417665"
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
  - SpatialMapping is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: spatial-computing:SpatialMapping
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  # SpatialMapping
  Spatial Mapping generates and maintains three-dimensional representations of physical environments through sensor fusion, enabling AR/VR systems to understand surroundings for occlusion, collision, placement, and navigation. Technologies include SLAM (Simultaneous Localization and Mapping) algorithms like ORB-SLAM and LSD-SLAM combining visual features and IMU data, depth sensor fusion merging multiple depth cameras or LiDAR for complete coverage, photogrammetry reconstructing geometry from multiple photographs, and neural reconstruction employing machine learning for surface completion and detail enhancement. Generated representations include dense voxel grids storing occupancy at fine resolution, sparse feature maps extracting salient landmarks for tracking, surface meshes providing lightweight geometry for physics and rendering, and semantic maps labeling surfaces by type (floor, wall, furniture) enabling context-aware placement. Real-time systems balance map quality against computational budget and memory consumption, employing progressive refinement updating maps incrementally, confidence weighting down weighting uncertain measurements, loop closure detection correcting accumulated drift, and map persistence saving spatial data across sessions. Applications enable AR content occlusion behind physical objects, virtual object physics colliding with real furniture, intelligent content placement respecting horizontal and vertical surfaces, navigation providing pathfinding around obstacles, and environmental understanding detecting room layout and boundaries.
  - https://docs.microsoft.com/en-us/windows/mixed-reality/design/spatial-mapping - HoloLens spatial mapping
  - https://developer.apple.com/documentation/arkit/arworldmap - ARKit world mapping
  - https://github.com/raulmur/ORB_SLAM2 - ORB-SLAM2 visual SLAM
  - https://github.com/googlecartographer/cartographer - Google Cartographer SLAM

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
