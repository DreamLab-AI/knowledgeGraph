- ### OntologyBlock
  id:: extended-reality-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: 20245
	- source-domain:: mv
	- status:: draft
- public-access:: true
	- preferred-term:: Extended Reality (XR)
	- definition:: Umbrella term encompassing all immersive technologies including Augmented Reality (AR), Virtual Reality (VR), and Mixed Reality (MR), representing the full spectrum from entirely physical to entirely virtual environments and all hybrid states between.
	- maturity:: mature
	- source:: [[ACM Glossary]], [[ISO 9241-940]]
	- owl:class:: mv:ExtendedReality
	- owl:role:: Object
	- owl:inferred-class:: mv:HybridObject
	- owl:functional-syntax:: true
	- belongsToDomain:: [[InteractionDomain]]
	- implementedInLayer:: [[NetworkLayer]], [[ComputeLayer]]
	- #### Relationships
	  id:: extended-reality-relationships
		- has-part:: [[Virtual Reality (VR)]], [[Augmented Reality (AR)]], [[Mixed Reality (MR)]], [[Reality-Virtuality Continuum]]
		- is-part-of:: [[Spatial Computing]], [[Immersive Technology]]
		- requires:: [[Head-Mounted Display]], [[Spatial Tracking]], [[Real-Time Rendering]], [[Input Device]]
		- depends-on:: [[Computer Vision]], [[Graphics Processing]], [[Sensor Fusion]], [[Human-Computer Interaction]]
		- enables:: [[Immersive Experiences]], [[Spatial Interaction]], [[Presence]], [[Cross-Reality Transitions]]
		- binds-to:: [[Physical Environment]], [[Virtual Environment]]
	- #### OWL Axioms
	  id:: extended-reality-owl-axioms
	  collapsed:: true
		- ```clojure
		  Declaration(Class(mv:ExtendedReality))

		  # Classification along two primary dimensions
		  SubClassOf(mv:ExtendedReality mv:HybridEntity)
		  SubClassOf(mv:ExtendedReality mv:Object)

		  # Encompassing relationship to constituent technologies
		  SubClassOf(mv:ExtendedReality
		    ObjectSomeValuesFrom(mv:hasPart mv:VirtualReality)
		  )
		  SubClassOf(mv:ExtendedReality
		    ObjectSomeValuesFrom(mv:hasPart mv:AugmentedReality)
		  )
		  SubClassOf(mv:ExtendedReality
		    ObjectSomeValuesFrom(mv:hasPart mv:MixedReality)
		  )

		  # Reality-virtuality continuum definition
		  SubClassOf(mv:ExtendedReality
		    ObjectSomeValuesFrom(mv:hasPart mv:RealityVirtualityContinuum)
		  )

		  # Display system requirement
		  SubClassOf(mv:ExtendedReality
		    ObjectMinCardinality(1 mv:requires mv:DisplayDevice)
		  )

		  # Spatial tracking capability
		  SubClassOf(mv:ExtendedReality
		    ObjectSomeValuesFrom(mv:requires mv:SpatialTracking)
		  )

		  # Domain classification
		  SubClassOf(mv:ExtendedReality
		    ObjectSomeValuesFrom(mv:belongsToDomain mv:InteractionDomain)
		  )

		  # Layer classification
		  SubClassOf(mv:ExtendedReality
		    ObjectSomeValuesFrom(mv:implementedInLayer mv:NetworkLayer)
		  )
		  SubClassOf(mv:ExtendedReality
		    ObjectSomeValuesFrom(mv:implementedInLayer mv:ComputeLayer)
		  )

		  # Immersive experience capability
		  SubClassOf(mv:ExtendedReality
		    ObjectSomeValuesFrom(mv:enables mv:ImmersiveExperiences)
		  )

		  # Cross-reality transition support
		  SubClassOf(mv:ExtendedReality
		    ObjectSomeValuesFrom(mv:enables mv:CrossRealityTransitions)
		  )

		  # Spatial interaction paradigm
		  SubClassOf(mv:ExtendedReality
		    ObjectSomeValuesFrom(mv:enables mv:SpatialInteraction)
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
- ## About Extended Reality (XR)
  id:: extended-reality-about
	- Extended Reality (XR) serves as a comprehensive HybridObject category that encompasses the entire spectrum of immersive technologies. Rather than referring to a single technology, XR represents the continuum described by Milgram and Kishino's Reality-Virtuality Continuum, ranging from purely physical environments (reality) through Augmented Reality and Mixed Reality to purely digital environments (Virtual Reality). XR is increasingly used as an industry-wide term for discussing platforms, standards, and experiences that span multiple points on this continuum, recognizing that many applications fluidly transition between AR, MR, and VR modalities.
	- ### Key Characteristics
	  id:: extended-reality-characteristics
		- **Technology Agnostic**: Encompasses all immersive technologies regardless of physical-virtual balance
		- **Continuum Representation**: Treats reality and virtuality as endpoints of a continuous spectrum rather than discrete categories
		- **Modal Flexibility**: Supports applications that dynamically shift between AR, MR, and VR experiences
		- **Unified Development**: Enables common frameworks and APIs (like OpenXR) that work across the entire XR spectrum
		- **Cross-Reality Interoperability**: Facilitates seamless transitions and data sharing between different immersive modalities
	- ### Technical Components
	  id:: extended-reality-components
		- [[OpenXR Runtime]] - Cross-platform API standard supporting all XR modalities
		- [[Head-Mounted Display]] - VR headsets, AR glasses, or MR devices with varying pass-through capabilities
		- [[Spatial Tracking System]] - 6DOF inside-out or outside-in tracking for head and hand position
		- [[XR Interaction Toolkit]] - Unified input abstraction layer for controllers, hand tracking, and gaze
		- [[Reality-Virtuality Continuum]] - Conceptual framework from fully real to fully virtual environments
		- [[WebXR Device API]] - Browser-based XR experiences across AR, VR, and MR
		- [[Passthrough Display]] - Video or optical pass-through enabling variable reality-virtuality balance
	- ### Functional Capabilities
	  id:: extended-reality-capabilities
		- **Modality Switching**: Applications can dynamically adjust between AR overlay, MR interaction, and VR immersion
		- **Unified Input Handling**: Consistent interaction patterns across different XR modalities and devices
		- **Cross-Platform Development**: Write once, deploy across multiple XR devices with varying capabilities
		- **Progressive Immersion**: Gradually transition users from AR (low immersion) to VR (high immersion) as needed
		- **Spatial Persistence**: Maintain spatial anchors and content positioning across different XR modalities
		- **Accessibility Options**: Provide multiple reality-virtuality balance options to accommodate different user comfort levels
	- ### Use Cases
	  id:: extended-reality-use-cases
		- **Adaptive Training**: Start with AR instructions, transition to MR simulation, then full VR immersion for complex procedures
		- **Retail Experiences**: AR product browsing in physical stores, MR virtual try-on, VR showroom exploration
		- **Healthcare**: AR patient data overlay during examination, MR surgical planning, VR exposure therapy
		- **Education**: AR textbook augmentation, MR collaborative lab simulations, VR historical immersion
		- **Design Review**: AR on-site visualization, MR collaborative manipulation, VR full-scale walkthroughs
		- **Entertainment**: AR location-based games, MR tabletop experiences, VR fully immersive worlds
	- ### Standards & References
	  id:: extended-reality-standards
		- [[ISO 9241-940]] - Ergonomics of human-system interaction for XR systems
		- [[IEEE P2048-3]] - Unified standard for Virtual Reality and Augmented Reality device interoperability
		- [[ACM Metaverse Glossary]] - Standardized XR terminology definitions
		- [[OpenXR Specification]] - Royalty-free, open standard API for XR platforms and devices
		- [[WebXR Device API]] - W3C standard for accessing XR hardware through web browsers
		- [[Milgram's Reality-Virtuality Continuum]] - Foundational taxonomy defining the XR spectrum
		- [[ETSI GR ARF 010]] - European standards for AR/XR framework and architecture
	- ### Related Concepts
	  id:: extended-reality-related
		- [[Virtual Reality (VR)]] - XR modality representing fully immersive virtual environments
		- [[Augmented Reality (AR)]] - XR modality overlaying digital content on physical environment
		- [[Mixed Reality (MR)]] - XR modality with bidirectional physical-virtual interaction
		- [[Spatial Computing]] - Broader computing paradigm where XR provides primary user interfaces
		- [[Metaverse]] - Persistent virtual worlds often accessed through XR technologies
		- [[HybridObject]] - Ontology classification for XR as category spanning physical-virtual spectrum
## Academic Context

- Extended Reality (XR) is an umbrella term encompassing immersive technologies that merge physical and digital realities, including Virtual Reality (VR), Augmented Reality (AR), and Mixed Reality (MR).
  - These technologies span a continuum from fully physical environments to fully virtual ones, with hybrid states in between.
  - XR builds on foundational concepts in computer graphics, human-computer interaction, and sensory interface design.
- Key academic developments have focused on spatial computing, user experience design for 3D environments, and the integration of sensory feedback to enhance immersion and interaction precision.
  - Theoretical frameworks emphasise XR’s role in augmenting human perception and cognition through multisensory digital overlays or complete virtual environments.

## Current Landscape (2025)

- XR adoption has matured beyond entertainment and gaming into enterprise sectors such as healthcare, manufacturing, retail, and real estate.
  - Healthcare uses include surgical training, pain management, and mental health therapies.
  - Manufacturing employs XR for real-time diagnostics and workforce training.
  - Retail leverages AR for virtual try-ons and enhanced customer engagement.
- Notable organisations include Meta (Quest 3 headset), Unity (development platforms), and Autodesk (design and engineering applications).
- In the UK, XR is increasingly integrated into education, training, and industrial applications, with growing investment in immersive technology startups.
- Technical capabilities now support high-fidelity 3D spatial mapping, real-time interaction, and multi-user collaboration, though challenges remain in hardware ergonomics, latency, and standardisation.
- Standards and frameworks are evolving to address interoperability, user safety, and ethical considerations in XR deployments.

## Research & Literature

- Key academic papers:
  - Milgram, P., & Kishino, F. (1994). A taxonomy of mixed reality visual displays. IEICE Transactions on Information and Systems, E77-D(12), 1321-1329. DOI: 10.1109/VR.1994.372792
  - Azuma, R. T. (1997). A survey of augmented reality. Presence: Teleoperators and Virtual Environments, 6(4), 355-385. DOI: 10.1162/pres.1997.6.4.355
  - Jerald, J. (2015). The VR Book: Human-Centered Design for Virtual Reality. Association for Computing Machinery and Morgan & Claypool.
- Ongoing research explores improving XR hardware comfort, reducing motion sickness, enhancing AI-driven environment understanding, and developing standardised UX design guidelines.
- Studies also investigate XR’s impact on learning retention, remote collaboration efficacy, and accessibility improvements.

## UK Context

- The UK is a significant contributor to XR innovation, with government-backed initiatives supporting immersive technology research and commercialisation.
- North England hubs such as Manchester, Leeds, Newcastle, and Sheffield host clusters of XR startups, research centres, and university programmes focusing on immersive media, digital health, and industrial applications.
  - For example, Manchester’s MediaCityUK fosters XR content creation and digital innovation.
  - Leeds Digital Hub supports XR in retail and manufacturing sectors.
- Regional case studies include XR-enabled training programmes in Sheffield’s advanced manufacturing facilities and Newcastle’s healthcare simulation projects.
- The UK’s emphasis on ethical XR use and data privacy aligns with broader European regulatory frameworks.

## Future Directions

- Emerging trends include AI-enhanced XR experiences, 5G-enabled low-latency applications, and the integration of XR with Internet of Things (IoT) devices for smart environments.
- Anticipated challenges involve hardware miniaturisation, energy efficiency, user safety standards, and addressing digital divide issues to ensure equitable access.
- Research priorities focus on improving multisensory feedback, developing universal XR content standards, and exploring XR’s societal impacts, including psychological and ergonomic effects.
- One might say the future of XR is as immersive as the technology itself—just hopefully without the need for a virtual cup of tea to calm the nerves.

## References

1. Milgram, P., & Kishino, F. (1994). A taxonomy of mixed reality visual displays. *IEICE Transactions on Information and Systems*, E77-D(12), 1321-1329. https://doi.org/10.1109/VR.1994.372792  
2. Azuma, R. T. (1997). A survey of augmented reality. *Presence: Teleoperators and Virtual Environments*, 6(4), 355-385. https://doi.org/10.1162/pres.1997.6.4.355  
3. Jerald, J. (2015). *The VR Book: Human-Centered Design for Virtual Reality*. Association for Computing Machinery and Morgan & Claypool.  
4. Sapizon. (2025). The Future of XR: Key Trends Shaping Digital Reality in 2025. Retrieved November 2025, from https://sapizon.com/the-future-of-xr-key-trends-shaping-digital-reality-in-2025/  
5. Autodesk. (2025). Extended reality (XR): Augmented, mixed, and virtual. Retrieved November 2025, from https://www.autodesk.com/design-make/emerging-tech/extended-reality  
6. Unity. (2025). What is Extended Reality (XR). Retrieved November 2025, from https://unity.com/glossary/xr  
7. XRSI. (2025). Extended Reality (XR). Retrieved November 2025, from https://xrsi.org/definition/extended-reality-xr


## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
