public:: true

# Spatial Anchoring
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3d04187f45b4f9d8663ceed027299bf561c3624a50026cb4e2073ce191e3dee5",
  "@type": "Page",
  "vc:slug": "spatial-anchoring",
  "title": "Spatial Anchoring",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:location-based-ar",
      "vc:label": "Location Based AR"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-computing",
      "vc:label": "Spatial Computing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10050"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Spatial Anchoring"
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
  "@id": "urn:ngm:class:spatial-anchoring",
  "@type": "Class",
  "label": "Spatial Anchoring",
  "definition": "Spatial anchoring is the process of binding virtual or digital content to a precise, persistent location in physical space so that the content maintains a consistent position and orientation relative to the real world across multiple sessions, devices, and users. It relies on environmental mapping techniques such as Simultaneous Localisation and Mapping (SLAM), feature descriptor extraction, and cloud-synchronised anchor databases to re-localise digital objects reliably when the same physical environment is revisited. Anchors encode both geometric and semantic information about a surface or landmark, enabling persistent mixed-reality experiences, shared multi-user overlays, and location-aware services. The technology underpins applications ranging from indoor navigation and industrial training overlays to collaborative augmented reality workspaces and location-based gaming.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:augmented-reality",
      "label": "Augmented Reality"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      },
      {
        "@id": "urn:ngm:class:environment-mapping",
        "label": "Environment Mapping"
      },
      {
        "@id": "urn:ngm:class:pose-estimation",
        "label": "Pose Estimation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:location-based-ar",
        "label": "Location Based AR"
      },
      {
        "@id": "urn:ngm:class:persistent-ar-placement",
        "label": "Persistent AR"
      },
      {
        "@id": "urn:ngm:class:shared-ar-experiences",
        "label": "Shared Ar Experiences"
      },
      {
        "@id": "urn:ngm:class:indoor-navigation",
        "label": "Indoor Navigation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:feature-extraction",
        "label": "Feature Descriptor Extraction"
      },
      {
        "@id": "urn:ngm:class:point-cloud",
        "label": "Point Cloud"
      },
      {
        "@id": "urn:ngm:class:coordinate-frame",
        "label": "Coordinate Frame"
      },
      {
        "@id": "urn:ngm:class:cloud-storage",
        "label": "Cloud Storage"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:anchor-persistence",
        "label": "Anchor Persistence"
      },
      {
        "@id": "urn:ngm:class:localisation",
        "label": "Re-localisation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:inertial-measurement-unit",
        "label": "Inertial Measurement Unit"
      },
      {
        "@id": "urn:ngm:class:depth-sensing",
        "label": "Depth Sensing"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:mixed-reality",
        "label": "Mixed Reality"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:world-locking",
        "label": "World Locking"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:coordinate-system",
        "label": "Geospatial Coordinate System"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:world-anchor",
      "label": "World Anchor"
    },
    {
      "@id": "urn:ngm:class:ar-anchor",
      "label": "AR Anchor"
    }
  ],
  "quality": 0.72,
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
  "@id": "urn:visionflow:annotation:link-resolutions:spatial-anchoring:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3d04187f45b4f9d8663ceed027299bf561c3624a50026cb4e2073ce191e3dee5"
  },
  "vc:resolutions": [
    {
      "raw": "[[Location Based AR]]",
      "resolved": "urn:visionflow:linked:location-based-ar",
      "kind": "StubLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Computing Paradigm]]",
      "resolved": "urn:visionflow:owl:class:spatial-computing",
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
  - Spatial anchoring is the mechanism by which digital or virtual content is bound to a precise, persistent location in the physical world, ensuring that [[Augmented Reality]] objects, labels, and overlays remain fixed to their intended real-world surfaces or landmarks regardless of when or by whom the scene is viewed. It depends on environmental mapping via [[SLAM]] (Simultaneous Localisation and Mapping), [[Feature Descriptor Extraction]], and cloud-synchronised anchor stores to re-localise content reliably on return visits. The technique is foundational to [[Persistent AR]], multi-user [[Shared AR Experiences]], and any spatial service that must survive device reboots, session transitions, or hand-offs between users. Spatial anchoring sits at the intersection of [[Computer Vision]], [[Pose Estimation]], and [[Cloud Storage]], and it directly enables [[Location Based AR]] services, [[Indoor Navigation]], and [[Digital Twin]] overlays.

- ### Overview
  - Spatial anchoring solves one of the hardest problems in [[Mixed Reality]]: making digital content stay where it was placed even after the AR session ends or a different user opens the application. Without anchoring, virtual objects drift as headsets accumulate tracking error, or simply disappear when the app is closed. With anchoring, a virtual instruction manual placed on a factory machine remains there the next day, on a colleague's device, without manual repositioning.
  - The process works in two phases. During the *creation* phase, the device captures a detailed snapshot of the local environment — depth maps, visual feature descriptors, and inertial data — and packages this as an anchor descriptor, which is stored locally and optionally uploaded to a cloud anchor service (e.g., Google Cloud Anchors, Microsoft Azure Spatial Anchors, or Apple's ARKit Geo-Tracking). During the *resolution* phase, a new device or session queries the cloud service, downloads nearby anchor descriptors, and uses them as a reference map to match against live camera frames, recovering the 6-DoF (six degrees of freedom) transform needed to place the content back in the correct position.
  - Maturity is rated *emerging*: the underlying [[SLAM]] and cloud infrastructure are proven technologies, but standardised cross-platform anchor formats and interoperability between vendor ecosystems remain active areas of development.

- ### Key Components
  - #### Environment Mapping
    - [[SLAM]] builds a real-time sparse or dense map of the scene using visual odometry, depth sensors, and [[Inertial Measurement Unit]] data.
    - [[Point Cloud]] representations capture surface geometry for robust feature matching.
    - [[Depth Sensing]] (structured light, time-of-flight, or stereo) provides metric scale that prevents scale drift during re-localisation.
  - #### Anchor Descriptor
    - Encodes a compact set of [[Feature Descriptor Extraction]] keypoints (e.g., ORB, SIFT-derived) and their 3-D positions within a local [[Coordinate Frame]].
    - Stored with a UUID, creation timestamp, and optionally a [[Geospatial Coordinate System]] tag (latitude/longitude/altitude) to support outdoor geo-anchors.
    - [[Anchor Persistence]] controls how long an anchor remains valid; cloud services may expire anchors after a configurable retention period.
  - #### Re-localisation
    - [[Re-localisation]] matches live camera frames against stored descriptors to recover the device's pose relative to the anchor's coordinate frame.
    - Visual place recognition techniques (bag-of-words, NetVLAD-style embeddings) accelerate matching in large environments.
    - Confidence scoring filters out ambiguous matches to reduce ghost placements.
  - #### Synchronisation & Sharing
    - [[Cloud Storage]] backends replicate anchors across devices and sessions, enabling multi-user experiences.
    - Anchor tokens or identifiers are shared via QR codes, deep links, or server-side room codes so collaborators resolve the same anchor.

- ### Applications and Use Cases
  - #### Industrial and Enterprise
    - Persistent maintenance instructions overlaid on physical machinery, surviving shift changes and device replacements.
    - [[Digital Twin]] alignment — anchoring a live sensor dashboard to the physical asset it represents.
    - Safety zone markers in warehouses that remain visible to all workers' AR headsets.
  - #### Consumer AR and Gaming
    - [[Location Based AR]] games (e.g., Pokémon GO-style persistent landmarks) where anchor-locked content is shared among all players.
    - Social AR: leaving geo-anchored notes or art installations for others to discover at specific physical spots.
  - #### Navigation and Wayfinding
    - [[Indoor Navigation]] in airports, hospitals, and large campuses where GPS is unavailable; anchored directional arrows guide users through complex layouts.
    - Accessibility overlays providing anchored audio or visual cues at key landmarks.
  - #### Architecture and Construction
    - Building information modelling (BIM) visualisation anchored to a physical construction site so architects and contractors inspect design intent in context.
    - Progress tracking by overlaying design models on partially completed structures.
  - #### Collaborative Workspaces
    - Remote expert assistance: an anchor allows a field technician and a remote specialist to see the same overlay on the same physical object simultaneously.
    - Anchored [[Shared AR Experiences]] in education where students jointly examine a shared 3-D model at a fixed physical location.

- ### Mechanisms
  - #### 6-DoF Tracking
    - Full six-degrees-of-freedom tracking (three translational, three rotational) is required so anchored content does not wobble or tilt as the user moves.
    - [[Pose Estimation]] fuses visual, inertial, and sometimes LiDAR data to maintain sub-centimetre accuracy near the anchor origin.
  - #### Coordinate Frame Management
    - Each anchor defines a local right-handed [[Coordinate Frame]]; content is specified in anchor-relative coordinates to remain independent of global world coordinates.
    - When multiple anchors coexist, a graph-based pose graph merges them into a globally consistent map (similar to loop closure in [[SLAM]]).
  - #### Cloud Anchor Lifecycle
    - Anchors are created, shared, and resolved via REST or SDK APIs exposed by platform providers.
    - Quality checks at creation time assess feature richness; anchors with insufficient environmental texture are rejected to prevent unreliable resolution.

- ### Relationships
  - requires:: [[SLAM]]
  - requires:: [[Environment Mapping]]
  - requires:: [[Pose Estimation]]
  - enables:: [[Location Based AR]]
  - enables:: [[Persistent AR]]
  - enables:: [[Shared AR Experiences]]
  - enables:: [[Indoor Navigation]]
  - uses:: [[Feature Descriptor Extraction]]
  - uses:: [[Point Cloud]]
  - uses:: [[Coordinate Frame]]
  - uses:: [[Cloud Storage]]
  - hasPart:: [[Anchor Persistence]]
  - hasPart:: [[Re-localisation]]
  - dependsOn:: [[Inertial Measurement Unit]]
  - dependsOn:: [[Depth Sensing]]
  - supports:: [[Mixed Reality]]
  - supports:: [[Digital Twin]]
  - supports:: [[Metaverse]]
  - contrastsWith:: [[World Locking]]
  - relatedTo:: [[Spatial Computing]]
  - relatedTo:: [[Computer Vision]]
  - relatedTo:: [[Geospatial Coordinate System]]
  - bridges-to:: [[Distributed Systems]]

- ### Standards and Context
  - **OpenXR** (Khronos Group) defines portable APIs for spatial anchors across runtimes; the `XR_MSFT_spatial_anchor` and `XR_EXT_spatial_anchor_persistence` extensions standardise anchor creation and persistence within the OpenXR ecosystem.
  - **ARCore Persistent Cloud Anchors** (Google) and **Azure Spatial Anchors** (Microsoft) are the dominant cloud anchor services; **ARKit** (Apple) provides on-device and location anchor capabilities for iOS/iPadOS/visionOS.
  - **IETF** has early work on geospatial addressing for AR objects; the **Open AR Cloud** initiative pursues an open, vendor-neutral spatial anchor registry aligned with [[Geospatial Coordinate System]] standards such as WGS-84.
  - Privacy regulation (GDPR in the EU, similar frameworks globally) governs the capture and storage of environmental scan data inherent to anchor creation, as feature maps can constitute sensitive structural information about private spaces.
  - Interoperability between platform anchor ecosystems remains an unsolved standards gap; the [[Metaverse]] vision of persistent, cross-platform digital layers depends on resolving this.

- ### Provenance
  - sources:: OpenXR specification (Khronos Group); Google ARCore documentation; Microsoft Azure Spatial Anchors documentation; Apple ARKit documentation; Open AR Cloud
  - updated:: 2026-06-13
