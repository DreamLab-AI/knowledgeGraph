- ### OntologyBlock
  id:: mixed-reality-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: 20244
	- source-domain:: mv
	- status:: draft
- public-access:: true
	- preferred-term:: Mixed Reality (MR)
	- definition:: Interactive environment where physical and digital elements coexist, interact bidirectionally, and dynamically influence each other in real time with advanced occlusion, lighting, and physics simulation creating seamless blended experiences.
	- maturity:: mature
	- source:: [[ACM]], [[ISO 9241-940]]
	- owl:class:: mv:MixedReality
	- owl:physicality:: HybridEntity
	- owl:role:: Object
	- owl:inferred-class:: mv:HybridObject
	- owl:functional-syntax:: true
	- belongsToDomain:: [[InteractionDomain]]
	- implementedInLayer:: [[NetworkLayer]], [[ComputeLayer]]
	- #### Relationships
	  id:: mixed-reality-relationships
		- has-part:: [[Spatial Mesh]], [[Physics Simulation Engine]], [[Lighting Estimation]], [[Occlusion Rendering]], [[Depth Camera]]
		- is-part-of:: [[Extended Reality (XR)]], [[Spatial Computing]]
		- requires:: [[Real-Time 3D Reconstruction]], [[Environmental Lighting]], [[Object Tracking]], [[Hand Tracking]]
		- depends-on:: [[SLAM]], [[Depth Sensing]], [[Computer Vision]], [[Physics Engine]]
		- enables:: [[Bidirectional Interaction]], [[Virtual-Physical Collision]], [[Realistic Occlusion]], [[Shared Spatial Anchors]]
		- binds-to:: [[Physical Objects]], [[Virtual Objects]]
	- #### OWL Axioms
	  id:: mixed-reality-owl-axioms
	  collapsed:: true
		- ```clojure
		  Declaration(Class(mv:MixedReality))

		  # Classification along two primary dimensions
		  SubClassOf(mv:MixedReality mv:HybridEntity)
		  SubClassOf(mv:MixedReality mv:Object)

		  # Bidirectional interaction constraint
		  SubClassOf(mv:MixedReality
		    ObjectSomeValuesFrom(mv:enablesBidirectionalInteraction
		      ObjectIntersectionOf(mv:PhysicalObject mv:VirtualObject))
		  )

		  # Advanced spatial understanding requirement
		  SubClassOf(mv:MixedReality
		    ObjectSomeValuesFrom(mv:requires mv:RealTime3DReconstruction)
		  )
		  SubClassOf(mv:MixedReality
		    ObjectSomeValuesFrom(mv:requires mv:DepthSensing)
		  )

		  # Physics simulation integration
		  SubClassOf(mv:MixedReality
		    ObjectSomeValuesFrom(mv:hasPart mv:PhysicsSimulationEngine)
		  )

		  # Occlusion rendering capability
		  SubClassOf(mv:MixedReality
		    ObjectSomeValuesFrom(mv:enables mv:RealisticOcclusion)
		  )

		  # Environmental lighting integration
		  SubClassOf(mv:MixedReality
		    ObjectSomeValuesFrom(mv:requires mv:EnvironmentalLighting)
		  )

		  # Domain classification
		  SubClassOf(mv:MixedReality
		    ObjectSomeValuesFrom(mv:belongsToDomain mv:InteractionDomain)
		  )

		  # Layer classification
		  SubClassOf(mv:MixedReality
		    ObjectSomeValuesFrom(mv:implementedInLayer mv:NetworkLayer)
		  )
		  SubClassOf(mv:MixedReality
		    ObjectSomeValuesFrom(mv:implementedInLayer mv:ComputeLayer)
		  )

		  # Spatial mesh requirement
		  SubClassOf(mv:MixedReality
		    ObjectMinCardinality(1 mv:hasPart mv:SpatialMesh)
		  )

		  # Virtual-physical collision capability
		  SubClassOf(mv:MixedReality
		    ObjectSomeValuesFrom(mv:enables mv:VirtualPhysicalCollision)
		  )

		  # Shared anchor support
		  SubClassOf(mv:MixedReality
		    ObjectSomeValuesFrom(mv:enables mv:SharedSpatialAnchors)
		  )

  # Property characteristics
  TransitiveObjectProperty(dt:ispartof)

  # Property characteristics
  AsymmetricObjectProperty(dt:requires)

  # Property characteristics
  AsymmetricObjectProperty(dt:dependson)

  # Property characteristics
  AsymmetricObjectProperty(dt:enables)
```
- ## About Mixed Reality (MR)
  id:: mixed-reality-about
	- Mixed Reality (MR) represents an advanced form of HybridObject technology that goes beyond basic AR overlay to create deeply integrated physical-virtual environments. MR systems understand the physical environment in rich detail—including geometry, lighting, and object properties—allowing virtual content to interact realistically with physical objects. Virtual objects can cast shadows, reflect environmental lighting, occlude behind physical surfaces, and respond to physics interactions as if they truly existed in the physical space. This bidirectional interaction creates experiences where the boundary between physical and virtual becomes perceptually seamless.
	- ### Key Characteristics
	  id:: mixed-reality-characteristics
		- **Seamless Blending**: Virtual and physical elements are perceptually indistinguishable through realistic lighting, shadows, and occlusion
		- **Bidirectional Interaction**: Both physical and virtual objects influence each other through physics simulation and collision detection
		- **Environmental Awareness**: Deep understanding of physical space geometry, materials, lighting, and object properties
		- **Real-Time Physics**: Virtual objects obey gravity, collide with surfaces, and respond to forces as physical objects would
		- **Persistent Spatial Context**: Detailed spatial mesh and anchor maps maintain consistent virtual-physical registration across sessions
	- ### Technical Components
	  id:: mixed-reality-components
		- [[Spatial Mesh]] - High-resolution 3D reconstruction of physical environment geometry
		- [[Depth Camera]] - ToF or structured light sensors for precise depth measurement and occlusion
		- [[Physics Simulation Engine]] - Real-time rigid body dynamics and collision detection
		- [[Lighting Estimation]] - Environmental light probes and HDR capture for realistic virtual object illumination
		- [[Occlusion Rendering]] - Depth-based pixel culling so virtual objects correctly appear behind physical ones
		- [[Hand Tracking]] - Natural gesture input for manipulating virtual objects with physical hand movements
		- [[Shared Spatial Anchors]] - Cloud-synchronized coordinate systems for multi-user MR experiences
	- ### Functional Capabilities
	  id:: mixed-reality-capabilities
		- **Realistic Occlusion**: Virtual objects correctly hide behind physical objects and reveal when unoccluded
		- **Environmental Lighting**: Virtual objects are lit by actual environmental light sources, matching physical object appearance
		- **Physics-Based Interaction**: Virtual objects bounce, slide, and rest on physical surfaces following real-world physics
		- **Surface Magnetization**: Virtual content automatically aligns and snaps to detected physical surfaces
		- **Spatial Audio with Occlusion**: Sound propagation accounts for physical walls and surfaces blocking audio paths
		- **Multi-User Coherence**: Multiple users in same physical space see and interact with identical virtual content registration
	- ### Use Cases
	  id:: mixed-reality-use-cases
		- **Industrial Design Review**: Place virtual prototypes on physical factory floors with realistic lighting and scale for design validation
		- **Collaborative Spatial Planning**: Architects and clients manipulate virtual building models on physical site locations
		- **Medical Simulation**: Virtual organs and surgical tools interact with physical training mannequins with haptic feedback
		- **Interactive Gaming**: Virtual characters navigate physical room layouts, hide behind furniture, and respond to physical object interactions
		- **Remote Telepresence**: Life-size holographic avatars of remote participants appear seated at physical conference tables
		- **Training Simulation**: Virtual machinery components overlay on physical equipment with realistic maintenance procedures
	- ### Standards & References
	  id:: mixed-reality-standards
		- [[ISO 9241-940]] - Ergonomics of human-system interaction for AR/VR systems
		- [[IEEE P2048-3]] - Virtual Reality and Augmented Reality device interoperability
		- [[ACM Metaverse Glossary]] - Standardized MR terminology and definitions
		- [[OpenXR]] - Cross-platform runtime API supporting MR features
		- [[WebXR Anchors Module]] - Web standard for persistent spatial anchors in MR
		- [[Azure Spatial Anchors]] - Cloud-based shared coordinate system for multi-user MR
	- ### Related Concepts
	  id:: mixed-reality-related
		- [[Augmented Reality (AR)]] - Simpler overlay approach; MR adds bidirectional interaction and advanced occlusion
		- [[Extended Reality (XR)]] - Umbrella category containing MR along with AR and VR
		- [[Spatial Computing]] - Broader computing paradigm where MR is a primary interaction modality
		- [[Digital Twin]] - MR enables immersive visualization and interaction with digital twin data in physical context
		- [[Holographic Display]] - Display technology often used for MR experiences with realistic depth perception
		- [[HybridObject]] - Ontology classification for MR as system binding physical and virtual elements
# Mixed Reality (MR) – Ontology Entry Review & Enhancement

## Academic Context

- Mixed reality represents the contemporary evolution of human-computer interaction
  - Conceptual foundations established by Milgram and Kishino (1994) in their seminal taxonomy of visual displays, introducing the virtuality continuum[2]
  - Distinguishes itself from augmented reality through bidirectional interaction rather than unidirectional overlay[5]
  - Encompasses spatial awareness, environmental mapping, and real-time physics simulation as core technical requirements[4]
  - Positioned as the next computational paradigm following mainframes, personal computers, and smartphones[2]

## Current Landscape (2025)

- Industry adoption and implementations
  - Mixed reality has transitioned from laboratory prototypes to practical commercial deployment across multiple sectors[1]
  - Enterprise applications dominate current adoption: pilot training, architectural visualisation, repair documentation, and collaborative design workflows[1]
  - Consumer accessibility expanding through mobile AR implementations (Instagram filters represent mainstream MR experiences for hundreds of millions globally)[2]
  - Hardware maturity improving with depth sensors, high-speed processors, and micro-displays enabling eye-tracking and real-time spatial mapping[1]

- Technical capabilities and limitations
  - Spatial anchoring now provides persistent digital object placement within physical environments, eliminating drift and jitter[4]
  - Real-time environmental perception through multi-sensor fusion (cameras, microphones, processors) enables millisecond-latency scene updates[1]
  - Advanced occlusion, lighting simulation, and physics interactions create convincing blended experiences (though complete photorealism remains aspirational rather than universal)[1]
  - Wireless latency and processing power remain practical constraints for complex scenarios[1]

- Standards and frameworks
  - Windows Mixed Reality platform represents enterprise-grade implementation with holographic 3D models and spatial sound capabilities[2]
  - Extended Reality (XR) serves as umbrella terminology encompassing the full reality-virtuality continuum[3]
  - Environmental understanding now includes hand-tracking, eye-tracking, speech input, and collaborative 3D asset manipulation[2]

## UK Context

- British contributions and implementations
  - Microsoft's mixed reality research and development maintains significant UK presence, particularly through Windows Mixed Reality initiatives[2]
  - UK manufacturing and engineering sectors increasingly adopting MR for maintenance documentation and worker training protocols
  - Healthcare applications emerging in surgical planning and medical training environments across NHS trusts

- North England innovation considerations
  - Manchester's technology sector showing growing interest in MR applications for industrial design and manufacturing visualisation
  - Leeds and Sheffield manufacturing clusters represent potential adoption hubs for repair and maintenance documentation workflows
  - Newcastle's digital innovation community exploring MR applications, though formal case studies remain limited in published literature

## Research & Literature

- Key academic foundations and current sources
  - Milgram, P. & Kishino, F. (1994). "A Taxonomy of Mixed Reality Visual Displays." *IEICE Transactions on Information and Systems*, E77-D(12), 1321–1329. [Foundational conceptual framework][2]
  - Microsoft Learn documentation on Mixed Reality (2023–2025 updates) provides current technical specifications and platform capabilities[2]
  - Circuit Stream and N-iX MR publications (2025) offer contemporary technical analysis of spatial mapping, environmental perception, and real-time interaction requirements[3][4]
  - Coursera and Interaction Design Foundation resources provide accessible yet rigorous explanations of MR distinctions from AR and VR[5][6]

- Ongoing research directions
  - Photorealistic rendering and physics simulation fidelity improvements
  - Latency reduction in wireless transmission and environmental mapping
  - Accessibility and usability across diverse user populations
  - Ethical considerations regarding persistent spatial data collection and privacy

## Future Directions

- Emerging trends and developments
  - Convergence of MR with artificial intelligence for adaptive environmental understanding and predictive object placement[1]
  - Expansion beyond enterprise into consumer lifestyle applications (home design, entertainment, social interaction)
  - Integration with Internet of Things (IoT) enabling MR interfaces for smart environments
  - Improved battery efficiency and form-factor miniaturisation reducing headset burden

- Anticipated challenges
  - Standardisation across competing hardware platforms and software ecosystems remains incomplete
  - Privacy implications of continuous environmental sensing and spatial data retention
  - User fatigue and ergonomic concerns with extended headset usage
  - Accessibility barriers for users with visual, motor, or cognitive differences

- Research priorities
  - Robust environmental mapping in challenging lighting and complex spatial conditions
  - Seamless hand-object interaction physics without perceptible latency
  - Cross-platform interoperability standards
  - Ethical frameworks for spatial data governance

## Revised Definition

Mixed reality is a computational paradigm that seamlessly blends physical and digital environments through real-time spatial mapping, enabling bidirectional interaction between users, physical objects, and persistent digital elements. Distinguished from augmented reality by genuine environmental understanding and physics-aware rendering, MR creates convincing composite experiences where digital content behaves according to real-world spatial and optical principles. Current implementations leverage advanced sensor fusion, low-latency processing, and sophisticated computer vision to anchor virtual objects reliably within physical space, supporting applications from industrial maintenance to collaborative design—though achieving universal photorealism and eliminating perceptible latency remain active research challenges.

---

**Note:** The original definition was technically sound but lacked historical grounding and current implementation context. This revision anchors the concept within established academic frameworks whilst acknowledging practical limitations that distinguish aspirational capabilities from deployed reality. UK context remains limited in published literature; North England examples are speculative pending formal case study documentation.


## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
