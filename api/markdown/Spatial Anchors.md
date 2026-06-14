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
  "definition": "Spatial anchors are persistent, georeferenced coordinate frames that bind virtual content to specific physical locations, enabling augmented and mixed reality experiences to survive device handoffs, multi-user sessions, and temporal gaps between visits. They are constructed by fusing visual feature maps (point clouds or learned descriptors), inertial measurements, and optionally GPS or Ultra-Wideband signals to produce a stable six-degrees-of-freedom pose estimate within a real-world coordinate system. Platform-level implementations such as ARKit, ARCore, Azure Spatial Anchors, and OpenXR's XR_MSFT_spatial_anchor extension expose this capability through APIs that serialise anchor state for later relocalisation. The technology underpins cross-device shared AR, indoor navigation, and location-aware digital twins by ensuring that virtual overlays remain semantically and geometrically coupled to the objects and surfaces they annotate.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ar-technology",
      "label": "AR Technology"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:pose-estimation",
        "label": "Pose Estimation"
      },
      {
        "@id": "urn:ngm:class:feature-map",
        "label": "Feature Map"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      },
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      },
      {
        "@id": "urn:ngm:class:visual-inertial-odometry",
        "label": "Visual-Inertial Odometry"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:persistent-ar-placement",
        "label": "Persistent AR Placement"
      },
      {
        "@id": "urn:ngm:class:shared-ar-experience",
        "label": "Shared AR Experience"
      },
      {
        "@id": "urn:ngm:class:indoor-navigation",
        "label": "Indoor Navigation"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:world-space-coordinate-system",
        "label": "World Space Coordinate System"
      },
      {
        "@id": "urn:ngm:class:relocalisation",
        "label": "Relocalisation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:point-cloud",
        "label": "Point Cloud"
      },
      {
        "@id": "urn:ngm:class:lidar",
        "label": "LiDAR"
      },
      {
        "@id": "urn:ngm:class:ultra-wideband",
        "label": "Ultra-Wideband"
      },
      {
        "@id": "urn:ngm:class:global-positioning-system",
        "label": "Global Positioning System"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:mixed-reality",
        "label": "Mixed Reality"
      },
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      },
      {
        "@id": "urn:ngm:class:location-based-services",
        "label": "Location-Based Services"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:openxr",
        "label": "OpenXR"
      },
      {
        "@id": "urn:ngm:class:arcore",
        "label": "ARCore"
      },
      {
        "@id": "urn:ngm:class:arkit",
        "label": "ARKit"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:image-target",
        "label": "Image Target"
      },
      {
        "@id": "urn:ngm:class:gps-coordinate",
        "label": "GPS Coordinate"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:geospatial-data",
        "label": "Geospatial Data"
      },
      {
        "@id": "urn:ngm:class:spatial-web",
        "label": "Spatial Web"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:world-locking-tools",
        "label": "World Locking Tools"
      },
      {
        "@id": "urn:ngm:class:azure-spatial-anchors",
        "label": "Azure Spatial Anchors"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:world-anchors",
      "label": "World Anchors"
    },
    {
      "@id": "urn:ngm:class:ar-anchors",
      "label": "AR Anchors"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
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
  - Spatial anchors are persistent, georeferenced coordinate frames that bind virtual content to specific physical locations, enabling [[Augmented Reality]] and [[Mixed Reality]] experiences to survive device handoffs, multi-user sessions, and temporal gaps between visits. They are produced by fusing visual feature maps, inertial measurements, and optional radio-frequency ranging signals to yield a stable six-degrees-of-freedom pose within a real-world coordinate system. The anchor state can be serialised, stored in the cloud, and retrieved later for relocalisation, making them foundational to [[Persistent AR Placement]], [[Indoor Navigation]], and cross-device [[Shared AR Experience]]. Platform SDKs such as [[ARKit]], [[ARCore]], and [[Azure Spatial Anchors]] expose the concept natively, while the [[OpenXR]] extension `XR_MSFT_spatial_anchor` provides a hardware-agnostic API path.

- ### Overview
  - Spatial anchors solve a fundamental problem in augmented reality: how to keep a virtual object stuck to a specific place in the physical world across time, across devices, and across users. A naively positioned virtual object — placed relative only to the device's local coordinate frame — drifts or disappears whenever the device loses tracking or the session ends. An anchor avoids this by recording a compact representation of the local visual environment (a [[Feature Map]] or [[Point Cloud]]) and indexing that representation in a persistent store keyed to a real-world position.
  - When a second device (or the same device in a later session) views the same location, a [[Relocalisation]] process matches the live camera feed against the stored feature map and recovers the anchor's pose, allowing the same virtual content to appear in exactly the same place. This is the mechanism that enables [[Location-Based Services]] in AR, collaborative industrial inspection, and city-scale [[Spatial Web]] overlays.
  - Maturity has advanced from research prototypes in the early 2010s to production cloud services (Microsoft Azure Spatial Anchors, Apple ARKit Collaboration, Google ARCore Persistent Cloud Anchors) and open standards ([[OpenXR]] XR_MSFT_spatial_anchor extension). The concept is now considered established in the spatial-computing domain.

- ### Key Components
  - #### Anchor Coordinate Frame
    - Each anchor defines a local origin (position) and orientation (quaternion) in world space. Content is expressed relative to this frame, insulating it from changes in the global tracking state.
  - #### Feature Map / Visual Descriptor Store
    - The anchor encodes a compact description of the visual environment at creation time using algorithms derived from [[SLAM]] — typically sparse feature descriptors (e.g. ORB, SIFT, or learned network embeddings). This map is what later relocalisation matches against.
    - [[LiDAR]] scanners on devices such as iPhone Pro and iPad Pro allow depth-seeded feature maps, improving robustness in textureless or low-light environments.
  - #### Sensor Fusion Pipeline
    - [[Sensor Fusion]] combines camera imagery, IMU data (accelerometer + gyroscope), barometric pressure, and optionally [[Global Positioning System]] or [[Ultra-Wideband]] ranging to continuously estimate device pose relative to the anchor. [[Visual-Inertial Odometry]] bridges gaps where camera-only tracking would fail.
  - #### Persistence and Cloud Synchronisation
    - Anchor data is serialised and uploaded to a cloud service (e.g. [[Azure Spatial Anchors]], Google Cloud Anchors). Subsequent devices query the service, download the anchor descriptor, and run relocalisation locally or against a server-side feature index.
  - #### Relocalisation Engine
    - Given a new camera frame, the relocalisation engine queries the stored feature map and estimates the 6-DoF pose of the current camera relative to the anchor. This is the critical step that enables multi-user and cross-session persistence.
    - [[World Locking Tools]] (WLTs) provide a layer above the raw relocalisation to stabilise accumulated drift over large-scale tracking.
  - #### Spatial Graph / Anchor Relationships
    - Multiple anchors can be linked into a spatial graph — storing relative transforms between anchors — enabling consistent large-scale environments where no single anchor covers the full space. [[Azure Spatial Anchors]] explicitly supports this via "nearby anchors" queries.

- ### Mechanisms
  - #### Anchor Creation
    - The user or application triggers anchor creation at a chosen pose. The runtime samples the local visual environment, extracts and compresses feature descriptors, and assigns a UUID to the anchor record.
  - #### Anchor Persistence
    - The anchor record (descriptor + approximate GPS bounding box) is uploaded to cloud storage. Local-only anchors survive only for the current app session.
  - #### Anchor Discovery
    - A client requests anchors near a GPS coordinate or within a set of known anchor IDs. The server returns candidate descriptors.
  - #### Anchor Localisation
    - The client runs continuous visual search: each camera frame is compared against candidate descriptors using [[Pose Estimation]] algorithms. A successful match resolves the anchor's pose in the current device coordinate frame, and virtual content is rendered relative to that pose.
  - #### Collaborative Workflows
    - Two or more devices sharing an anchor ID render the same virtual objects at the same physical location, forming the basis of [[Shared AR Experience]] — used in collaborative design review, remote maintenance, and multiplayer AR gaming.

- ### Applications
  - #### Industrial and Field Operations
    - Maintenance technicians overlay wiring diagrams, component labels, and step-by-step instructions anchored to physical machinery, eliminating the need to cross-reference paper manuals. Anchors survive shift changes so instructions persist for the next technician.
    - Quality inspectors attach defect annotations to specific components; the annotations remain visible to colleagues and are retrievable in later audit sessions.
  - #### Architecture, Engineering, and Construction
    - Architects and engineers walk a building site viewing a [[Digital Twin]] overlaid on the physical structure. Spatial anchors tie BIM model elements to their exact physical counterparts, supporting clash detection and progress tracking.
    - Structural deformation can be monitored by comparing anchor positions over time — a long-lived anchor reveals millimetre-level changes when re-localised with high precision.
  - #### Retail and Marketing
    - In-store product information, promotional AR experiences, and wayfinding arrows are anchored to shelf locations or entry points. Shoppers with compatible apps see contextually correct overlays as they navigate.
  - #### Healthcare and Education
    - Hospital wayfinding anchors route patients through complex buildings without relying solely on GPS (which fails indoors). Medical training simulations anchor anatomy overlays to mannequins or cadavers so multiple trainees share the same perspective.
  - #### Location-Based Entertainment
    - Immersive city-scale AR games (in the tradition of Pokémon GO's evolution toward AR+ features) place persistent characters and objects at specific landmarks. Anchors ensure the objects appear at the same physical spot for every player.
  - #### [[Metaverse]] Infrastructure
    - Spatial anchors are one of the candidate primitives for the [[Spatial Web]] — a world-wide layer of addressable digital content mapped to physical coordinates. Standards work such as the Open AR Cloud's GeoPose specification aims to federate anchor namespaces across vendors.

- ### Relationships
  - hasPart:: [[Pose Estimation]]
  - hasPart:: [[Feature Map]]
  - requires:: [[Sensor Fusion]]
  - requires:: [[SLAM]]
  - requires:: [[Visual-Inertial Odometry]]
  - enables:: [[Persistent AR Placement]]
  - enables:: [[Shared AR Experience]]
  - enables:: [[Indoor Navigation]]
  - enables:: [[Digital Twin]]
  - dependsOn:: [[Relocalisation]]
  - dependsOn:: [[World Space Coordinate System]]
  - uses:: [[Point Cloud]]
  - uses:: [[LiDAR]]
  - uses:: [[Ultra-Wideband]]
  - uses:: [[Global Positioning System]]
  - supports:: [[Mixed Reality]]
  - supports:: [[Metaverse]]
  - supports:: [[Location-Based Services]]
  - standardizedBy:: [[OpenXR]]
  - standardizedBy:: [[ARCore]]
  - standardizedBy:: [[ARKit]]
  - contrastsWith:: [[Image Target]]
  - contrastsWith:: [[GPS Coordinate]]
  - bridgesTo:: [[Geospatial Data]]
  - bridgesTo:: [[Spatial Web]]
  - relatedTo:: [[World Locking Tools]]
  - relatedTo:: [[Azure Spatial Anchors]]

- ### Standards and Context
  - #### OpenXR — XR_MSFT_spatial_anchor
    - The Khronos Group's [[OpenXR]] standard includes the `XR_MSFT_spatial_anchor` extension (contributed by Microsoft) which defines a vendor-agnostic API for creating, persisting, and relocalising spatial anchors on any compliant runtime. A companion extension, `XR_MSFT_spatial_anchor_persistence`, adds serialisation to named anchor stores.
  - #### ARKit (Apple)
    - Apple's [[ARKit]] exposes `ARAnchor` as the base class; subclasses include `ARWorldAnchor`, `ARImageAnchor`, `ARObjectAnchor`, and `ARBodyAnchor`. Collaborative sessions (`ARSession.CollaborationData`) distribute anchor state between peer devices over a local network. The `ARWorldMap` API serialises the full feature map for cross-session persistence on-device.
  - #### ARCore (Google)
    - Google's [[ARCore]] Persistent Cloud Anchors allow anchors to be uploaded to Google's cloud and resolved by other devices. Anchors include a spatial map hosted server-side and are discoverable by anchor ID. The Geospatial API extends this to GPS-grade outdoor relocalisation using Google Street View imagery.
  - #### Azure Spatial Anchors (Microsoft)
    - [[Azure Spatial Anchors]] is a cross-platform (iOS/Android/HoloLens) cloud service that stores anchor descriptors and supports "coarse relocalisation" — finding nearby anchors using only Bluetooth beacons or WiFi fingerprints as a first-pass filter before running the visual matching step.
  - #### Open AR Cloud — GeoPose
    - The Open AR Cloud Association develops the GeoPose standard (OGC GeoPose 1.0) for expressing position and orientation in geodetic coordinates, aiming to federate anchor namespaces so that a spatial anchor created by one vendor's SDK can be discovered by another vendor's client.
  - #### World Locking Tools (WLT)
    - Microsoft's open-source [[World Locking Tools]] library sits above the anchor layer to provide a globally stable coordinate frame on HoloLens and mobile AR, absorbing drift that accumulates as the device moves beyond the range of any single anchor.

- ### Provenance
  - sources:: OpenXR Specification (Khronos Group), ARKit Developer Documentation (Apple), ARCore Developer Documentation (Google), Azure Spatial Anchors Documentation (Microsoft), OGC GeoPose 1.0 Standard
  - updated:: 2026-06-13
