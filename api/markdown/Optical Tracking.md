public:: true

# Optical Tracking
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:48cefb208b67c38507cd1b1d37d82970c69e10d06180df0fe2da955dc7944d03",
  "@type": "Page",
  "vc:slug": "optical-tracking",
  "title": "Optical Tracking",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9120"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Optical Tracking"
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
  "@id": "urn:ngm:class:optical-tracking",
  "@type": "Class",
  "label": "Optical Tracking",
  "definition": "Optical Tracking is a technology infrastructure concept and a type of infrastructure.",
  "domain": "infrastructure",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-computing-and-cloud",
      "label": "Computing and Cloud"
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
  "@id": "urn:visionflow:annotation:link-resolutions:optical-tracking:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:48cefb208b67c38507cd1b1d37d82970c69e10d06180df0fe2da955dc7944d03"
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
  - OpticalTracking is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:OpticalTracking
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  # OpticalTracking
  OpticalTracking utilizes camera-based systems to monitor user position, orientation, and movement within physical space for accurate representation in virtual environments. Technologies span marker-based tracking using printed fiducial markers or infrared-reflective spheres with known geometry, to advanced markerless systems employing computer vision, feature detection, and SLAM (Simultaneous Localization and Mapping) algorithms. Modern systems deploy infrared LEDs creating active tracking constellations, structured light patterns for depth perception, or passive visual feature tracking using natural environmental points. Commercial implementations achieve sub-millimeter positional accuracy and sub-degree rotational precision at update rates exceeding 1000Hz. Applications include inside-out tracking for standalone VR headsets using onboard cameras scanning the environment, outside-in tracking with external sensor arrays for room-scale experiences, full-body motion capture systems with 40+ optical markers for avatar animation, hand tracking enabling natural gesture interaction without controllers, and environmental mapping generating spatial meshes for accurate AR content placement and occlusion.
  - https://developer.oculus.com/documentation/native/ps-tracking/ - Meta Quest optical tracking system
  - https://docs.microsoft.com/en-us/windows/mixed-reality/design/tracking-systems - HoloLens spatial tracking
  - https://optitrack.com/ - OptiTrack precision motion capture
  - https://www.vicon.com/ - Vicon optical tracking technology

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
