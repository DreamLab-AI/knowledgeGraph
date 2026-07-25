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
  "definition": "A sensing technology that uses camera-based systems and computer vision algorithms to determine the position and orientation of objects or users within physical space. Implementations range from marker-based infrared systems achieving sub-millimetre accuracy to markerless inside-out tracking using SLAM, enabling motion capture, hand tracking, and environmental mapping for XR applications.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-computing-and-cloud",
      "label": "Computing and Cloud"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:motion-capture",
        "label": "Motion Capture"
      },
      {
        "@id": "urn:ngm:class:hand-tracking",
        "label": "Hand Tracking"
      },
      {
        "@id": "urn:ngm:class:xr-runtime-environment",
        "label": "XR Runtime Environment"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:photogrammetry",
        "label": "Photogrammetry"
      },
      {
        "@id": "urn:ngm:class:structure-from-motion",
        "label": "Structure-from-Motion"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      },
      {
        "@id": "urn:ngm:class:pose-estimation",
        "label": "Pose Estimation"
      }
    ]
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
  - A sensing technology that uses camera-based systems and computer vision algorithms to determine the position and orientation of objects or users within physical space. Implementations range from marker-based infrared systems achieving sub-millimetre accuracy to markerless inside-out tracking using SLAM, enabling motion capture, hand tracking, and environmental mapping for XR applications.

- ### Semantic Classification
  - owl-class:: spatial-computing:OpticalTracking
  - owl-role:: Concept

- ### Relationships
  - Uses [[Computer Vision]]
  - Uses [[SLAM]]
  - Uses [[Pose Estimation]]
  - Enables [[Motion Capture]]
  - Enables [[Hand Tracking]]
  - Enables [[XR Runtime Environment]]
  - Depends On [[Photogrammetry]]
  - Depends On [[Structure-from-Motion]]

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
