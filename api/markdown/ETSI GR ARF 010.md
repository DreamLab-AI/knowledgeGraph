ETSI GR ARF 010 is a Group Report produced by the ETSI Industry Specification Group on Augmented Reality Framework (ISG ARF), defining architectural concepts, terminology, and interoperability requirements for augmented reality systems. It specifies a reference architecture that decouples AR content pipelines, tracking subsystems, and rendering layers to enable multi-vendor interoperability. The report addresses how AR devices, services, and platforms should communicate using standardised interfaces covering world anchoring, coordinate systems, and content delivery. It serves as a foundational normative reference for the broader ARF specification suite, informing subsequent standards such as ETSI GS ARF 003.

### Overview

- ETSI ISG ARF was formed to address the fragmentation in the [[Augmented Reality]] ecosystem, where proprietary SDKs such as [[ARKit]] and [[ARCore]] prevented content and services from moving freely between devices and platforms.
- GR ARF 010 (a "GR" denotes a non-normative Group Report, functioning as a study/architectural basis document) surveys the problem space and defines the conceptual architecture on which binding Group Specifications (GS) are based.
- The report is significant because it:
  - Provides a vendor-neutral vocabulary for [[AR Reference Architecture]] components
  - Identifies the minimum set of interfaces required for spatial-computing interoperability
  - Defines the relationship between the device layer ([[Spatial Tracking]], [[Pose Estimation]]), the service layer (content brokering, anchor management), and the application layer
  - Sets requirements for [[Persistent AR Content]] that survives across sessions and devices
- The scope deliberately covers [[Mixed Reality]] and [[Extended Reality]] scenarios, not purely optical see-through AR, making the framework applicable to [[XR Architecture]] broadly.
- Alignment with [[3GPP]] network-layer work and [[GSMA]] use cases is explicitly referenced, positioning ARF 010 within the wider [[Spatial Web]] standardisation landscape.

### Key Components

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

### Applications and Use Cases

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

### Standards and Context

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

### Semantic Classification

### Provenance

