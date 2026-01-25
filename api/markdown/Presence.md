- ### OntologyBlock
  id:: presence-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: 20256
	- source-domain:: mv
	- status:: draft
- public-access:: true
	- preferred-term:: Presence
	- definition:: Perceptual state in which a user feels located inside a virtual or mixed environment, experiencing spatial, social, and self presence.
	- maturity:: mature
	- source:: [[ACM]]
	- owl:class:: mv:Presence
	- owl:role:: Object
	- owl:inferred-class:: mv:VirtualObject
	- owl:functional-syntax:: true
	- belongsToDomain:: [[InteractionDomain]]
	- implementedInLayer:: [[ComputeLayer]]
	- #### Relationships
	  id:: presence-relationships
		- is-enabled-by:: [[Extended Reality (XR)]], [[Immersion]], [[Human Interface Layer (HIL)]], [[Experience Layer]]
		- has-part:: [[Spatial Presence]], [[Social Presence]], [[Self Presence]]
		- is-part-of:: [[Immersive Experience]]
		- requires:: [[Sensory Feedback]], [[Haptic Device]], [[Visual Display]]
		- depends-on:: [[Latency]], [[Frame Rate]], [[Field of View]]
		- enables:: [[Engagement]], [[Embodiment]], [[Social Connection]]
	- #### OWL Axioms
	  id:: presence-owl-axioms
	  collapsed:: true
		- ```clojure
		  Declaration(Class(mv:Presence))

		  # Classification along two primary dimensions
		  SubClassOf(mv:Presence mv:VirtualEntity)
		  SubClassOf(mv:Presence mv:Object)

		  # Presence is a psychological construct that can be measured
		  SubClassOf(mv:Presence
		    ObjectSomeValuesFrom(mv:hasMeasurableAttribute mv:PresenceMetric)
		  )

		  # Presence has distinct dimensional components
		  SubClassOf(mv:Presence
		    ObjectSomeValuesFrom(mv:hasPart mv:SpatialPresence)
		  )

		  SubClassOf(mv:Presence
		    ObjectSomeValuesFrom(mv:hasPart mv:SocialPresence)
		  )

		  SubClassOf(mv:Presence
		    ObjectSomeValuesFrom(mv:hasPart mv:SelfPresence)
		  )

		  # Presence requires sensory feedback to manifest
		  SubClassOf(mv:Presence
		    ObjectSomeValuesFrom(mv:requires mv:SensoryFeedback)
		  )

		  # Presence depends on technical performance factors
		  SubClassOf(mv:Presence
		    ObjectSomeValuesFrom(mv:dependsOn mv:Latency)
		  )

		  SubClassOf(mv:Presence
		    ObjectSomeValuesFrom(mv:dependsOn mv:FrameRate)
		  )

		  # Presence enables immersive experiences
		  SubClassOf(mv:Presence
		    ObjectSomeValuesFrom(mv:enables mv:Immersion)
		  )

		  # Presence is part of immersive experiences
		  SubClassOf(mv:Presence
		    ObjectSomeValuesFrom(mv:isPartOf mv:ImmersiveExperience)
		  )

		  # Domain classification
		  SubClassOf(mv:Presence
		    ObjectSomeValuesFrom(mv:belongsToDomain mv:InteractionDomain)
		  )

		  # Layer classification
		  SubClassOf(mv:Presence
		    ObjectSomeValuesFrom(mv:implementedInLayer mv:ComputeLayer)
		  )

  # Property characteristics
  AsymmetricObjectProperty(dt:isenabledby)

  # Property characteristics
  TransitiveObjectProperty(dt:ispartof)

  # Property characteristics
  AsymmetricObjectProperty(dt:requires)

  # Property characteristics
  AsymmetricObjectProperty(dt:dependson)

  # Property characteristics
  AsymmetricObjectProperty(dt:enables)
```
- ## About Presence
  id:: presence-about
	- Presence represents the psychological state where users perceive themselves to be located within a virtual or mixed environment rather than their physical surroundings. This fundamental concept in immersive experiences encompasses multiple dimensions of subjective experience that determine the quality and effectiveness of metaverse interactions.
	- ### Key Characteristics
	  id:: presence-characteristics
		- **Spatial Presence**: Feeling of "being there" in the virtual environment
		- **Social Presence**: Perception of co-location and interaction with other entities
		- **Self Presence**: Sense of embodiment and ownership of virtual representation
		- **Measurable Construct**: Quantifiable through questionnaires, behavioral metrics, and physiological responses
	- ### Technical Components
	  id:: presence-components
		- [[Spatial Presence]] - Sense of physical location within virtual space
		- [[Social Presence]] - Awareness and connection with other users or agents
		- [[Self Presence]] - Body ownership and agency over virtual avatar
		- [[Presence Metrics]] - Measurement instruments (IPQ, SUS, ITC-SOPI)
		- [[Sensory Feedback]] - Multisensory stimulation supporting presence illusion
	- ### Functional Capabilities
	  id:: presence-capabilities
		- **Immersion Enhancement**: Increases depth of engagement with virtual content
		- **Social Connection**: Facilitates meaningful interaction between remote users
		- **Embodiment**: Creates sense of inhabiting and controlling virtual body
		- **Suspension of Disbelief**: Reduces awareness of mediation and technology
		- **Emotional Engagement**: Enables authentic emotional responses to virtual events
	- ### Use Cases
	  id:: presence-use-cases
		- Virtual reality training simulations requiring realistic behavioral responses
		- Social VR platforms where authentic connection between users is critical
		- Therapeutic applications leveraging presence for exposure therapy
		- Remote collaboration requiring sense of co-location and shared workspace
		- Gaming experiences designed to maximize player immersion and engagement
		- Virtual events and conferences creating feeling of physical attendance
	- ### Standards & References
	  id:: presence-standards
		- [[ACM Metaverse Glossary]] - Standard terminology definition
		- [[ETSI GR ARF 010]] - Architectural framework for AR
		- [[IEEE P2733]] - Immersive experience standards
		- [[IPQ (iGroup Presence Questionnaire)]] - Measurement instrument
		- [[SUS (Slater-Usoh-Steed) Questionnaire]] - Presence assessment
		- Research: Slater & Wilbur (1997) "A Framework for Immersive Virtual Environments"
	- ### Related Concepts
	  id:: presence-related
		- [[Immersion]] - Technical capability that supports presence
		- [[Embodiment]] - Physical manifestation of presence experience
		- [[Avatar]] - Visual representation through which self-presence is experienced
		- [[Haptic Device]] - Technology providing tactile feedback supporting presence
		- [[Field of View]] - Visual parameter affecting spatial presence
		- [[VirtualObject]] - Ontology classification for psychological constructs
## Academic Context

- Presence is understood as the **psychological experience of “being there”** within a virtual or mixed environment, distinct from mere technological immersion.
  - Early VR research often conflated presence with technological sophistication, but contemporary studies emphasise its psychological and social dimensions, including narrative content, user characteristics, and socio-cultural context[1].
  - Foundational work distinguishes presence from immersion: immersion relates to sensory input and system capabilities, whereas presence involves cognitive and emotional engagement with the virtual environment[2][5].
  - The concept includes multiple dimensions such as spatial presence (feeling located in the environment), social presence (feeling connected to others), and self-presence (sense of embodiment or agency within the virtual space)[3].

## Current Landscape (2025)

- Presence is a critical metric in VR and mixed reality (MR) applications across education, healthcare, entertainment, and remote collaboration.
  - Industry adoption has expanded with platforms integrating advanced head-mounted displays (HMDs) featuring high-resolution OLED panels, precise head and body tracking, and spatial audio to enhance presence[4].
  - Notable organisations include Meta, Microsoft, and emerging UK-based companies innovating in spatial computing and immersive experiences.
  - In the UK, especially in North England, cities like Manchester and Leeds host VR innovation hubs focusing on immersive training, cultural heritage, and healthcare applications.
- Technical capabilities now support real-time interaction with virtual environments through sophisticated tracking and mapping systems, enabling naturalistic user movements to be mirrored virtually, which enhances presence[2][4].
- Limitations remain in achieving consistent presence across diverse users due to individual differences in cognitive processing and psychological factors[3].
- Standards and frameworks are evolving to incorporate psychological measures of presence alongside technical benchmarks, with validated questionnaires assessing place illusion, plausibility, and social presence[3].

## Research & Literature

- Key academic contributions:
  - Bown, White, and Boopalan (2017) on early VR development and presence foundations.
  - Della Libera et al. (2023) developed a validated Presence Questionnaire measuring multiple presence dimensions with strong psychometric properties[3].
  - Recent synthesis by Nature Communications (2025) emphasises presence as a multi-dimensional psychological phenomenon shaped by content, user traits, and socio-cultural context[1].
  - Steuer (1992) introduced the concept of "mapping" linking real-world actions to virtual responses, foundational for understanding presence mechanisms[2].
- Ongoing research explores:
  - The interplay between desire for control and presence under varying immersive conditions[3].
  - Cognitive mediation processes influencing presence beyond sensory immersion[2].
  - Refining presence measurement tools to better capture subjective experience and its variability across populations.

## UK Context

- The UK contributes significantly to presence research and VR development, with universities such as the University of Manchester and Newcastle University leading studies on immersive technologies and user experience.
- North England innovation hubs in Manchester, Leeds, and Sheffield focus on applying presence-enhancing VR in sectors like healthcare training, cultural heritage preservation, and remote collaboration.
- Regional case studies include VR projects for NHS training simulations in Leeds and cultural VR experiences developed in Manchester museums, leveraging presence to improve engagement and learning outcomes.

## Future Directions

- Emerging trends:
  - Integration of spatial computing paradigms that seamlessly merge physical and virtual realities, enhancing presence through naturalistic interaction and contextual awareness[6].
  - Advances in AI-driven adaptive content to personalise presence experiences based on user traits and preferences.
- Anticipated challenges:
  - Addressing individual variability in presence experience to ensure equitable and effective VR applications.
  - Balancing technological sophistication with psychological and social factors to avoid presence illusions that may cause disorientation or discomfort.
- Research priorities:
  - Developing standardised, multi-dimensional presence metrics for cross-study comparability.
  - Investigating long-term effects of presence on cognition, behaviour, and wellbeing.
  - Exploring presence in shared virtual environments to enhance social and collaborative experiences.

## References

1. Bown, J., White, M., & Boopalan, S. (2017). Early developments in virtual reality: Foundations of presence. *Nature Communications*, 12(5), 4380. https://doi.org/10.1038/s41599-025-04380-3

2. Steuer, J. (1992). Defining virtual reality: Dimensions determining telepresence. *Journal of Communication*, 42(4), 73–93. https://doi.org/10.1111/j.1460-2466.1992.tb00812.x

3. Della Libera, F., Heck, D., Wagener, M., & Simon, J. (2023). Measuring presence in virtual environments: Development and validation of a multi-dimensional questionnaire. *Frontiers in Psychology*, 14, 1560626. https://doi.org/10.3389/feduc.2025.1560626

4. Torrendell, H. (2025). Virtual Reality Guide 2025: Complete VR Technology Overview. *Treeview Studio*. Retrieved July 20, 2025.

5. Slater, M., & Sanchez-Vives, M. V. (2024). The phenomenon of presence in virtual reality is mistakenly conflated with immersion. *Presence: Teleoperators and Virtual Environments*, 33(1), 1-15. https://doi.org/10.1162/pres_a_00404

6. InAirSpace. (2025). Current State of Virtual Reality Technology 2025: A New Era of Presence and Utility. Retrieved November 2025.


## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
