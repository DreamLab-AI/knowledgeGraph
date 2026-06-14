public:: true

# ETSI GR ARF 010
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b075a6813add770a8b88e4efe11637879eb6171f8691eea56d5faa8d3230f14a",
  "@type": "Page",
  "vc:slug": "etsi-gr-arf-010",
  "title": "ETSI GR ARF 010",
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
      "vc:value": "ETSI GR ARF 010"
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
  "@id": "urn:ngm:class:etsi-gr-arf-010",
  "@type": "Class",
  "label": "ETSI GR ARF 010",
  "definition": "ETSI GR ARF 010 is a Group Report produced by the ETSI Industry Specification Group on Augmented Reality Framework (ISG ARF), defining architectural concepts, terminology, and interoperability requirements for augmented reality systems. It specifies a reference architecture that decouples AR content pipelines, tracking subsystems, and rendering layers to enable multi-vendor interoperability. The report addresses how AR devices, services, and platforms should communicate using standardised interfaces covering world anchoring, coordinate systems, and content delivery. It serves as a foundational normative reference for the broader ARF specification suite, informing subsequent standards such as ETSI GS ARF 003.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:technical-standard",
      "label": "Technical Standard"
    }
  ],
  "relations": {
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:etsi",
        "label": "ETSI"
      },
      {
        "@id": "urn:ngm:class:etsi-isg-arf",
        "label": "ETSI ISG ARF"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:ar-reference-architecture",
        "label": "AR Reference Architecture"
      },
      {
        "@id": "urn:ngm:class:world-anchor",
        "label": "World Anchor"
      },
      {
        "@id": "urn:ngm:class:coordinate-reference-system",
        "label": "Coordinate Reference System"
      },
      {
        "@id": "urn:ngm:class:ar-tracking-subsystem",
        "label": "AR Tracking Subsystem"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:spatial-tracking",
        "label": "Spatial Tracking"
      },
      {
        "@id": "urn:ngm:class:pose-estimation",
        "label": "Pose Estimation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:ar-interoperability",
        "label": "AR Interoperability"
      },
      {
        "@id": "urn:ngm:class:multi-vendor-ar",
        "label": "Multi-Vendor AR"
      },
      {
        "@id": "urn:ngm:class:persistent-ar-content",
        "label": "Persistent AR Content"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:augmented-reality-framework",
        "label": "Augmented Reality Framework"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:etsi-gs-arf-003",
        "label": "ETSI GS ARF 003"
      },
      {
        "@id": "urn:ngm:class:openxr",
        "label": "OpenXR"
      },
      {
        "@id": "urn:ngm:class:3gpp",
        "label": "3GPP"
      },
      {
        "@id": "urn:ngm:class:xr-architecture",
        "label": "XR Architecture"
      },
      {
        "@id": "urn:ngm:class:spatial-web",
        "label": "Spatial Web"
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
      },
      {
        "@id": "urn:ngm:class:arkit",
        "label": "ARKit"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:5g-network-slicing",
        "label": "5G Network Slicing"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:etsi-isg-arf-group-report-010",
      "label": "ETSI ISG ARF Group Report 010"
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
  "@id": "urn:visionflow:annotation:link-resolutions:etsi-gr-arf-010:076e907d9cab",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b075a6813add770a8b88e4efe11637879eb6171f8691eea56d5faa8d3230f14a"
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
  - ETSI GR ARF 010 is a Group Report published by the [[ETSI]] Industry Specification Group on [[Augmented Reality Framework]] (ISG ARF), establishing the foundational architecture, terminology, and interoperability model for [[Augmented Reality]] systems. It defines a layered reference architecture that decouples [[AR Tracking Subsystem]], content pipeline, and rendering components, enabling multi-vendor solutions to interoperate through standardised interfaces. The document addresses [[World Anchor]] concepts, [[Coordinate Reference System]] conventions, and the handshake protocols through which AR clients, services, and infrastructure exchange spatial data. It acts as the architectural spine of the ARF suite, with subsequent group specifications — most notably [[ETSI GS ARF 003]] — building normative protocol bindings on top of its conceptual framework.

- ### Overview
  - ETSI ISG ARF was formed to address the fragmentation in the [[Augmented Reality]] ecosystem, where proprietary SDKs such as [[ARKit]] and [[ARCore]] prevented content and services from moving freely between devices and platforms.
  - GR ARF 010 (a "GR" denotes a non-normative Group Report, functioning as a study/architectural basis document) surveys the problem space and defines the conceptual architecture on which binding Group Specifications (GS) are based.
  - The report is significant because it:
    - Provides a vendor-neutral vocabulary for [[AR Reference Architecture]] components
    - Identifies the minimum set of interfaces required for spatial-computing interoperability
    - Defines the relationship between the device layer ([[Spatial Tracking]], [[Pose Estimation]]), the service layer (content brokering, anchor management), and the application layer
    - Sets requirements for [[Persistent AR Content]] that survives across sessions and devices
  - The scope deliberately covers [[Mixed Reality]] and [[Extended Reality]] scenarios, not purely optical see-through AR, making the framework applicable to [[XR Architecture]] broadly.
  - Alignment with [[3GPP]] network-layer work and [[GSMA]] use cases is explicitly referenced, positioning ARF 010 within the wider [[Spatial Web]] standardisation landscape.

- ### Key Components
  - **Reference Architecture Layers**
    - Device Layer — [[Spatial Tracking]], sensor fusion, [[Pose Estimation]], and display hardware abstraction
    - Tracking Subsystem — decoupled [[AR Tracking Subsystem]] modules that can be swapped independently (SLAM, marker, GPS-fused)
    - Anchor Service Layer — management of [[World Anchor]] entities linking virtual content to physical locations
    - Content Pipeline — delivery and lifecycle management of [[Persistent AR Content]] objects
    - Application Layer — end-user AR experiences consuming standardised interfaces from lower layers
  - **World Anchoring Model**
    - Defines a spatial anchor as a named, versioned object with a pose relative to a [[Coordinate Reference System]]
    - Supports both local (device-relative) and global (geo-referenced, [[WGS84]]-based) coordinate frames
    - Anchor discovery, registration, and deletion are first-class operations specified in the model
  - **Interoperability Interfaces**
    - Client-to-Service interface for anchor CRUD operations
    - Service-to-Service interface for cross-provider anchor federation
    - Device-to-Service tracking data exchange, enabling off-device [[Simultaneous Localisation and Mapping]] computations at the [[Edge Computing]] layer
  - **Terminology and Taxonomy**
    - Normative glossary covering: AR scene, anchor, trackable, pose, frame of reference, rendering pipeline
    - Aligns with [[OpenXR]] terminology where possible, identifying delta points where ARF diverges for service-layer concerns [[OpenXR]] does not address

- ### Applications and Use Cases
  - **Industrial AR**
    - Workers using AR headsets from different manufacturers viewing shared annotations overlaid on the same physical equipment — enabled by ARF 010's shared anchor and content model
    - Integration with [[Digital Twin]] platforms where the ARF anchor service references a twin object in a simulation environment
  - **Smart Cities and Urban AR**
    - City-scale [[Persistent AR Content]] attached to buildings, transport nodes, and public infrastructure, accessible regardless of the client device
    - Cross-operator content federation using the Service-to-Service anchor interface
  - **5G-Enhanced AR**
    - Off-loading [[Simultaneous Localisation and Mapping]] compute to [[Edge Computing]] nodes close to the [[5G Network Slicing]] user-plane function, reducing device-side latency
    - [[Multi-Access Edge Computing]] deployments where ARF-compliant anchor services run at the MEC host
  - **Retail and Navigation**
    - In-store AR navigation using global geo-anchors aligned to floor-plan coordinate systems
    - Product overlay experiences that persist across consumer device brands
  - **Collaborative AR**
    - Multi-user AR sessions where all participants share the same world-model through a common anchor service, regardless of their runtime platform (Apple, Android, dedicated headset)

- ### Relationships
  - standardizedBy:: [[ETSI]]
  - standardizedBy:: [[ETSI ISG ARF]]
  - hasPart:: [[AR Reference Architecture]]
  - hasPart:: [[World Anchor]]
  - hasPart:: [[Coordinate Reference System]]
  - hasPart:: [[AR Tracking Subsystem]]
  - requires:: [[Spatial Tracking]]
  - requires:: [[Pose Estimation]]
  - enables:: [[AR Interoperability]]
  - enables:: [[Multi-Vendor AR]]
  - enables:: [[Persistent AR Content]]
  - implements:: [[Augmented Reality Framework]]
  - relatedTo:: [[ETSI GS ARF 003]]
  - relatedTo:: [[OpenXR]]
  - relatedTo:: [[3GPP]]
  - relatedTo:: [[XR Architecture]]
  - relatedTo:: [[Spatial Web]]
  - contrastsWith:: [[ARCore]]
  - contrastsWith:: [[ARKit]]
  - bridges-to:: [[5G Network Slicing]]
  - bridges-to:: [[Edge Computing]]
  - bridges-to:: [[Digital Twin]]

- ### Standards and Context
  - **Issuing body**: [[ETSI]] Industry Specification Group on Augmented Reality Framework (ISG ARF)
  - **Document type**: GR (Group Report) — informative/architectural, not directly binding; lays the ground for normative GS documents
  - **Companion specifications**:
    - [[ETSI GS ARF 003]] — the normative Group Specification for ARF interfaces, building on GR 010 architecture
    - [[ETSI GS ARF 001]] — use cases and requirements document
    - [[ETSI GS ARF 002]] — general requirements
  - **Related external standards**:
    - [[OpenXR]] (Khronos Group) — device-layer XR runtime standard; ARF 010 architecture operates above this layer
    - [[3GPP]] TS 26.928 — Extended Reality and 5G; ARF 010 references 3GPP network requirements
    - [[ISO/IEC 18023]] — MPEG-I scene description, relevant to content encoding within ARF pipelines
    - [[W3C Spatial Data on the Web]] — geo-reference alignment
  - **Positioning**: ETSI ARF occupies the service and interoperability layer of the [[Spatial Computing]] stack, addressing gaps that device-layer standards ([[OpenXR]], [[ARKit]], [[ARCore]]) and content standards ([[glTF]], [[USD]]) leave open — specifically, how services broker spatial anchors and content across organisational boundaries.
  - **Industry context**: The ARF initiative was launched in response to market fragmentation identified by operators, enterprise AR vendors, and platform providers. It complements [[W3C Immersive Web]] and [[Open AR Cloud]] community efforts by providing a formal ETSI standardisation track.
  - **Regulatory relevance**: As [[XR Architecture]] and [[Spatial Web]] deployments expand in regulated sectors (healthcare, manufacturing, transport), ARF 010 provides a standards reference that supports [[CE Marking]] and procurement compliance in European markets.

- ### Semantic Classification
  - owl-class:: spatial-computing:ETSIGRARF010
  - owl-role:: Standard

- ### Provenance
  - sources:: ETSI ISG ARF publications portal; ETSI GR ARF 010 document header; ETSI ISG ARF work programme
  - updated:: 2026-06-13
