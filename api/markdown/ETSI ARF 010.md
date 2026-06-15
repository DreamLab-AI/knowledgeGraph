public:: true

# ETSI ARF 010
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1a497f63be2abd01e84f0c0778ee66a020f458d51c341c0ac8e7d15be2a72fc0",
  "@type": "Page",
  "vc:slug": "etsi-arf-010",
  "title": "ETSI ARF 010",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:etsi",
      "vc:label": "ETSI"
    },
    {
      "@id": "urn:visionflow:linked:technical-standard",
      "vc:label": "Technical Standard"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "ETSI ARF 010"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:etsi-arf-010",
  "@type": "Class",
  "label": "ETSI ARF 010",
  "definition": "ETSI ARF 010 is a technical deliverable produced by the ETSI Industry Specification Group on Augmented Reality Framework (ISG ARF), defining architectural principles, terminology, and interoperability requirements for augmented reality systems and services. It establishes a common reference architecture that allows AR components—such as tracking engines, scene anchors, and rendering pipelines—to interoperate across heterogeneous platforms and devices. The specification addresses how spatial anchors, coordinate systems, and world models are managed and shared, enabling consistent AR experiences in multi-vendor and multi-device deployments. ETSI ARF 010 serves as a foundational normative document within the ARF series, complemented by companion deliverables covering use cases, protocols, and conformance.",
  "domain": "spatial-computing",
  "maturity": "established",
  "qualityScore": 0.72,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:technical-standard",
      "label": "Technical Standard"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:etsi-arf",
        "label": "ETSI ARF"
      },
      {
        "@id": "urn:ngm:class:etsi",
        "label": "ETSI"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:reference-architecture",
        "label": "AR Reference Architecture"
      },
      {
        "@id": "urn:ngm:class:spatial-anchor",
        "label": "Spatial Anchor"
      },
      {
        "@id": "urn:ngm:class:world-model",
        "label": "World Model"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:coordinate-system",
        "label": "Coordinate System"
      },
      {
        "@id": "urn:ngm:class:universal-scene-description",
        "label": "Scene Description"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:ar-interoperability",
        "label": "AR Interoperability"
      },
      {
        "@id": "urn:ngm:class:shared-ar-experiences",
        "label": "Shared AR Experience"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:tracking",
        "label": "Tracking"
      },
      {
        "@id": "urn:ngm:class:pose-estimation",
        "label": "Pose Estimation"
      },
      {
        "@id": "urn:ngm:class:physical-virtual-registration",
        "label": "3D Registration"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:etsi-isg-arf",
        "label": "ETSI ISG ARF"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:openxr",
        "label": "OpenXR"
      },
      {
        "@id": "urn:ngm:class:arcore",
        "label": "ARCore"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:web-of-things",
        "label": "Web of Things"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:etsi-arf-011",
        "label": "ETSI ARF 011"
      },
      {
        "@id": "urn:ngm:class:iso-iec-18092",
        "label": "ISO/IEC 18092"
      },
      {
        "@id": "urn:ngm:class:mixed-reality",
        "label": "Mixed Reality"
      },
      {
        "@id": "urn:ngm:class:extended-reality",
        "label": "Extended Reality"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:etsi-gs-arf-010",
      "label": "ETSI GS ARF 010"
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
  "@id": "urn:visionflow:annotation:link-resolutions:etsi-arf-010:5b78fa879d32",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1a497f63be2abd01e84f0c0778ee66a020f458d51c341c0ac8e7d15be2a72fc0"
  },
  "vc:resolutions": [
    {
      "raw": "[[ETSI]]",
      "resolved": "urn:visionflow:linked:etsi",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Technical Standard]]",
      "resolved": "urn:visionflow:linked:technical-standard",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - ETSI ARF 010 is a Group Specification (GS) produced by the [[ETSI]] Industry Specification Group on [[Augmented Reality Framework]] (ISG ARF), defining the reference architecture, core terminology, and interoperability requirements for [[Augmented Reality]] systems. It specifies how AR components—including [[Tracking]] engines, [[Spatial Anchor]] managers, and rendering pipelines—must expose interfaces to ensure seamless composition in heterogeneous multi-vendor deployments. The document underpins the broader ARF series by establishing normative vocabulary and architectural constraints that companion deliverables (covering use cases, protocols, and conformance) build upon, making it the foundational pillar for standards-based [[Spatial Computing]] services.

- ### Overview
  - ETSI ARF 010 sits within the **ETSI ISG ARF** work programme, a body established to create a vendor-neutral framework for deploying, managing, and composing AR content and services across diverse devices and networks.
  - **Why it matters**: without a common reference architecture, AR experiences are siloed to single-vendor SDKs (e.g. [[ARCore]], [[ARKit]]). ARF 010 defines the abstract layer that enables cross-platform content portability and multi-user shared scenes.
  - **Scope**: the specification covers the logical decomposition of an AR system into functional entities, their responsibilities, and the interfaces between them. It does not mandate implementation technologies but specifies the behavioural contracts each entity must honour.
  - **Position in the ARF series**:
    - ARF 001 — use cases and requirements
    - **ARF 010 — reference architecture (this document)**
    - ARF 011 — APIs and data model
    - ARF 012 — conformance and testing
  - The standard is closely aligned with [[OpenXR]] (Khronos) at the device API level but operates at a higher service-architecture level, addressing deployment, discovery, and federation of AR environments.

- ### Key Components
  - **Functional Entities**
    - [[World Model]] — the persistent, updatable representation of the physical environment, including geometry, semantic labels, and anchors.
    - [[Spatial Anchor]] — a named, geo-referenced or scene-relative reference point used to attach virtual content stably to the real world.
    - [[Coordinate System]] — the spatial reference frame in which all AR entities are expressed; ARF 010 mandates explicit coordinate system declarations for all exchanged data.
    - [[AR Content]] repository — stores and serves versioned content descriptors aligned with [[Scene Description]] formats.
    - Tracking & Localisation Engine — responsible for [[Pose Estimation]] of the user/device within the World Model.
  - **Architectural Layers**
    - Device Layer — sensors, displays, and OS-level AR SDKs (e.g. [[ARCore]], [[ARKit]], [[OpenXR]])
    - Service Layer — cloud or edge services exposing ARF-compliant APIs for anchor persistence, content delivery, and analytics
    - Application Layer — end-user AR applications consuming the service layer
  - **Key Interfaces**
    - Anchor Management Interface — CRUD operations on [[Spatial Anchor]] objects
    - World Model Interface — query/update operations on environment geometry
    - Content Delivery Interface — resolves content descriptors to renderable assets
  - **Data Model Concepts**
    - Anchor descriptors and [[3D Registration]] parameters
    - Spatial relationship graphs expressing relative poses
    - Session and capability negotiation metadata

- ### Applications and Use Cases
  - **Industrial AR**: factory floor guidance systems where multiple workers wearing different headsets (HoloLens, Magic Leap, phone-based) share the same [[Shared AR Experience]] anchored to physical machinery.
  - **Smart Cities**: municipal AR overlays (navigation, hazard warnings, heritage information) delivered by city-operated services to any ARF-compliant client device, supporting [[Extended Reality]] city-scale deployments.
  - **Retail and Commerce**: persistent AR product placements or in-store navigation anchored to [[Spatial Anchor]] points registered to building plans; compatible across consumer devices.
  - **Healthcare**: surgical guidance overlays requiring strict inter-system coordination between imaging equipment and AR headsets, where coordinate system conformance from ARF 010 is safety-critical.
  - **[[Digital Twin]] Integration**: ARF 010's World Model interface provides a natural ingestion point for [[Digital Twin]] spatial data, bridging physical-world sensing to AR visualisation.
  - **Collaborative Design**: [[Multi-Device AR]] sessions in architecture and engineering where design teams co-inspect 3D models overlaid on a construction site, relying on shared anchor consensus defined by ARF 010.
  - **Education and Training**: location-aware educational AR tours where content authored once is delivered consistently across institutional devices from multiple vendors.

- ### Mechanisms
  - **Anchor Lifecycle Management**: ARF 010 defines create, persist, resolve, and expire operations for [[Spatial Anchor]] objects, enabling anchors to survive device reboots and be shared across users.
  - **Coordinate System Federation**: the standard specifies how local device coordinate frames are expressed in terms of a shared global frame (e.g., WGS-84 or a site-local reference), enabling [[3D Registration]] across devices.
  - **Capability Negotiation**: clients and services exchange capability manifests so that the service layer can adapt content delivery (level of detail, anchor density) to device constraints.
  - **Session Model**: ARF 010 defines an AR session abstraction that encapsulates a user's interaction context, including active anchors, subscribed world model regions, and content streams.
  - **Security and Privacy Hooks**: the architecture includes interface points for access control on anchor and world model data, acknowledging that environment scans are privacy-sensitive; detailed mechanisms are deferred to companion deliverables.

- ### Relationships
  - partOf:: [[ETSI ARF]]
  - partOf:: [[ETSI]]
  - hasPart:: [[Spatial Anchor]]
  - hasPart:: [[World Model]]
  - hasPart:: [[AR Reference Architecture]]
  - requires:: [[Coordinate System]]
  - requires:: [[Scene Description]]
  - enables:: [[AR Interoperability]]
  - enables:: [[Multi-Device AR]]
  - enables:: [[Shared AR Experience]]
  - implements:: [[Augmented Reality]]
  - implements:: [[Spatial Computing]]
  - uses:: [[Tracking]]
  - uses:: [[Pose Estimation]]
  - uses:: [[3D Registration]]
  - standardizedBy:: [[ETSI ISG ARF]]
  - contrastsWith:: [[OpenXR]]
  - contrastsWith:: [[ARCore]]
  - bridges-to:: [[Digital Twin]]
  - bridges-to:: [[Web of Things]]
  - relatedTo:: [[ETSI ARF 011]]
  - relatedTo:: [[Mixed Reality]]
  - relatedTo:: [[Extended Reality]]

- ### Standards and Context
  - **Producing body**: [[ETSI]] Industry Specification Group on Augmented Reality Framework (ISG ARF), established around 2020 as a fast-track industry group.
  - **Document type**: Group Specification (GS), indicating consensus among ISG ARF member companies rather than a full European Standard (EN).
  - **Related ETSI work**:
    - ETSI GS ARF 001 — use cases and requirements
    - ETSI GS ARF 011 — [[ETSI ARF 011]] (APIs and data model, companion to ARF 010)
    - ETSI GS ARF 012 — conformance testing
  - **Relationship to other standards**:
    - [[OpenXR]] (Khronos Group) — device-level XR API; ARF 010 operates above this layer
    - W3C WebXR — browser-based XR access; ARF 010 service layer can be consumed via WebXR clients
    - ISO/TC 213, ISO/IEC JTC 1/SC 24 — 3D graphics and mixed reality standardisation bodies with overlapping scope
    - [[Web of Things]] (W3C WoT) — ARF 010 bridges to IoT environments via the World Model interface
  - **Industry context**: the ARF ISG includes participation from major telecommunications operators and device manufacturers, reflecting industry demand for AR as a telco-grade service rather than a single-app SDK feature.
  - **Regulatory relevance**: as AR expands into public safety, automotive, and healthcare, normative architecture standards like ARF 010 become prerequisites for regulatory approval in jurisdictions requiring interoperability mandates.

- ### Provenance
  - sources:: ETSI ISG ARF public deliverables portal; ETSI GS ARF 010 specification document; ETSI ISG ARF Terms of Reference
  - updated:: 2026-06-13
