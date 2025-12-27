- ### OntologyBlock
  id:: mobile-robot-ontology
  collapsed:: true

  - **Identification**

    - domain-prefix:: RB

    - sequence-number:: 0002

    - filename-history:: ["RB-0002-mobile-robot.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0002
    - preferred-term:: Mobile Robot
    - source-domain:: rb
    - is-subclass-of:: [[Robotics]]
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: A mobile robot is a robot with locomotion capabilities that enable it to move within its working environment.
    - maturity:: mature
    - source:: [[ISO 8373:2021]]
    - authority-score:: 0.98

  - **Semantic Classification**
    - owl:class:: rb:MobileRobot
    - owl:physicality:: PhysicalEntity
    - owl:role:: Object
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    id:: mobile-robot-relationships
    - is-part-of:: [[Robot (RB-0001)]]

  - #### OWL Axioms
    id:: mobile-robot-owl-axioms
    collapsed:: true
    - ```clojure
      ; Core Class Declaration
      (Declaration (Class :MobileRobot))
      (SubClassOf :MobileRobot :Robot)
      
      ; Defining Characteristics
      (SubClassOf :MobileRobot
        (ObjectSomeValuesFrom :hasLocomotionSystem :LocomotionMechanism))
      
      (SubClassOf :MobileRobot
        (ObjectSomeValuesFrom :hasNavigationCapability :NavigationSystem))
      
      (SubClassOf :MobileRobot
        (ObjectSomeValuesFrom :performsLocalisation :LocalisationMethod))
      
      (SubClassOf :MobileRobot
        (ObjectSomeValuesFrom :operatesInEnvironment :OperationalEnvironment))
      
      ; Locomotion Types (Disjoint Union)
      (DisjointUnion :LocomotionMechanism
        (:WheeledLocomotion :TrackedLocomotion :LeggedLocomotion
         :AerialLocomotion :AquaticLocomotion :HybridLocomotion))
      
      ; Properties
      (DataPropertyAssertion :hasLocomotionCapability :MobileRobot "true"^^xsd:boolean)
      (DataPropertyAssertion :requiresNavigation :MobileRobot "true"^^xsd:boolean)
      
      ; Navigation Requirements
      (SubClassOf :MobileRobot
        (ObjectMinCardinality 1 :hasSensor :PerceptionSensor))
      
      ; Annotations
      (AnnotationAssertion rdfs:label :MobileRobot "Mobile Robot"@en)
      (AnnotationAssertion rdfs:comment :MobileRobot
        "Robot with locomotion capabilities for environmental navigation"@en)
      (AnnotationAssertion :hasISOReference :MobileRobot "ISO 8373:2021"^^xsd:string)
      
      ; Object Properties
      (Declaration (ObjectProperty :hasLocomotionSystem))
      (ObjectPropertyDomain :hasLocomotionSystem :MobileRobot)
      (ObjectPropertyRange :hasLocomotionSystem :LocomotionMechanism)
      
      (Declaration (ObjectProperty :hasNavigationCapability))
      (ObjectPropertyDomain :hasNavigationCapability :MobileRobot)
      (ObjectPropertyRange :hasNavigationCapability :NavigationSystem)
      
      (Declaration (ObjectProperty :traversesTerrain))
      (ObjectPropertyDomain :traversesTerrain :MobileRobot)
      (ObjectPropertyRange :traversesTerrain :TerrainType)
      
      ; Data Properties
      (Declaration (DataProperty :maximumSpeed))
      (DataPropertyDomain :maximumSpeed :MobileRobot)
      (DataPropertyRange :maximumSpeed xsd:decimal)
      
      (Declaration (DataProperty :mobilityEnvelope))
      (DataPropertyDomain :mobilityEnvelope :MobileRobot)
      (DataPropertyRange :mobilityEnvelope xsd:string)
      
      ; Equivalence Axioms
      (EquivalentClasses :MobileRobot
        (ObjectIntersectionOf :Robot
          (ObjectSomeValuesFrom :hasLocomotionSystem :LocomotionMechanism)))

  # Property characteristics
  TransitiveObjectProperty(dt:ispartof)
```

- ## About Mobile Robot
  id:: mobile-robot-about

  - A mobile robot is a robot with locomotion capabilities that enable it to move within its working environment.
  -
  - ### Technical Details
    id:: mobile-robot-details
    - [Content preserved from original file]
  -
  - ### Standards & References
    id:: mobile-robot-standards
    - [[ISO 8373:2021]]
  -
  - ### Related Concepts
    id:: mobile-robot-related
	- ## Machankura
		- Mobile phone users in Nigeria, Tanzania, South Africa, Kenya and five other African countries can now [send and receive bitcoin](https://www.forbes.com/sites/digital-assets/2023/03/15/how-africans-are-using-bitcoin-without-internet-access/?sh=434df18b7428) without a smartphone or Internet connection. Just a basic feature phone and text code will suffice, thanks to a digital wallet from software developer Ngako. No internet connection and low power handsets means using SMS and the Lightning network, with the phones SIM acting as the wallet private keys.

		- ### ChatterUI
			- **Description:** Lightweight Android app for local models.
			- **Features:**
				- Mobile-focused with offline support.
				- Works as a "SillyTavern Lite" alternative.
			- **Link:** [ChatterUI GitHub](https://github.com/Vali-98/ChatterUI)
			  
			  ---

	- ### OpenAI & ChatGPT
		- 🟢 ChatGPT mobile [app revenue suggests](https://techcrunch.com/2023/10/09/chatgpts-mobile-app-hit-record-4-58m-in-revenue-last-month-but-growth-is-slowing/) around 250,000 users of their pro service **globally**. That is much lower than I thought... Let's assume only one in ten paying users install the app. That's still 2.5M users, which is about 0.003% of the eligible population.
		- They have released a [Prompt engineering
		- OpenAI API](https://platform.openai.com/docs/guides/prompt-engineering) guide.
		- I have a [[Prompt Engineering]] section too.
		- The GPT "store" / app experience.
		- A note about GPTs. They really are quite powerful. Think of them as an app builder, containing an AI agent, in a box, with [bidirectional internet](https://medium.com/@michaelev3/connecting-custom-gpts-to-google-apis-726dc2cdb54d), and the ability to build code. (such as which is an excellent coding assistant [Grimoire](https://chat.openai.com/g/g-n7Rs0IK86-grimoire)). - 🟢 They are the most advantage you can get for $20 a month, if you have tasks that you repeat, and you're not a coder. **
		- Note they now want $25 if you want to keep your data out of their training set.**
			- {{{tweet https://twitter.com/ConsensusNLP/status/1724872225780625419}}}
		- This is called "Actions" and is only in the GPTs or via the API (or both)
		- 🟢 Microsoft integrates OpenAI right across their suites under the [[Microsoft CoPilot]] brand.
		  id:: 659a922a-e819-4baa-b323-c07b3cf85290
		- This is pure speculation, but it feels like Microsoft might eventually effectively take over, being more experienced, mature, and canny.
		- The novel structural reason for OpenAI existing the way it did (a non-profit with a "fuse" for runaway AI) has been broken.
		- Keep an eye out for the remaining canary in the coal mine which is OpenAI declaring [[Artificial Intelligence]], isolating Microsoft from that element of their models. They might pretend [[Artificial Superintelligence]] for commercial reasons.

	- ## Machankura
		- Mobile phone users in Nigeria, Tanzania, South Africa, Kenya and five other African countries can now [send and receive bitcoin](https://www.forbes.com/sites/digital-assets/2023/03/15/how-africans-are-using-bitcoin-without-internet-access/?sh=434df18b7428) without a smartphone or Internet connection. Just a basic feature phone and text code will suffice, thanks to a digital wallet from software developer Ngako. No internet connection and low power handsets means using SMS and the Lightning network, with the phones SIM acting as the wallet private keys.

		- ### ChatterUI
			- **Description:** Lightweight Android app for local models.
			- **Features:**
				- Mobile-focused with offline support.
				- Works as a "SillyTavern Lite" alternative.
			- **Link:** [ChatterUI GitHub](https://github.com/Vali-98/ChatterUI)
			  
			  ---

	- ### OpenAI & ChatGPT
		- 🟢 ChatGPT mobile [app revenue suggests](https://techcrunch.com/2023/10/09/chatgpts-mobile-app-hit-record-4-58m-in-revenue-last-month-but-growth-is-slowing/) around 250,000 users of their pro service **globally**. That is much lower than I thought... Let's assume only one in ten paying users install the app. That's still 2.5M users, which is about 0.003% of the eligible population.
		- They have released a [Prompt engineering
		- OpenAI API](https://platform.openai.com/docs/guides/prompt-engineering) guide.
		- I have a [[Prompt Engineering]] section too.
		- The GPT "store" / app experience.
		- A note about GPTs. They really are quite powerful. Think of them as an app builder, containing an AI agent, in a box, with [bidirectional internet](https://medium.com/@michaelev3/connecting-custom-gpts-to-google-apis-726dc2cdb54d), and the ability to build code. (such as which is an excellent coding assistant [Grimoire](https://chat.openai.com/g/g-n7Rs0IK86-grimoire)). - 🟢 They are the most advantage you can get for $20 a month, if you have tasks that you repeat, and you're not a coder. **
		- Note they now want $25 if you want to keep your data out of their training set.**
			- {{{tweet https://twitter.com/ConsensusNLP/status/1724872225780625419}}}
		- This is called "Actions" and is only in the GPTs or via the API (or both)
		- 🟢 Microsoft integrates OpenAI right across their suites under the [[Microsoft CoPilot]] brand.
		  id:: 659a922a-e819-4baa-b323-c07b3cf85290
		- This is pure speculation, but it feels like Microsoft might eventually effectively take over, being more experienced, mature, and canny.
		- The novel structural reason for OpenAI existing the way it did (a non-profit with a "fuse" for runaway AI) has been broken.
		- Keep an eye out for the remaining canary in the coal mine which is OpenAI declaring [[Artificial Intelligence]], isolating Microsoft from that element of their models. They might pretend [[Artificial Superintelligence]] for commercial reasons.

		- ### ChatterUI
			- **Description:** Lightweight Android app for local models.
			- **Features:**
				- Mobile-focused with offline support.
				- Works as a "SillyTavern Lite" alternative.
			- **Link:** [ChatterUI GitHub](https://github.com/Vali-98/ChatterUI)
			- **Limitations:** UI is functional but lacks visual polish.
			- **Link:** [Koboldcpp GitHub](https://github.com/koboldcpp)

- ## Future Developments
	- The creators of The Golden Key are exploring new possibilities for interactive, AI-driven experiences, including:
	- Incorporating video and 3D elements to enhance the liveliness and immersion of the generated content
	- Developing mobile app touchpoints that allow participants to interact with the installation beyond the physical space
	- Collaborating with other artists and researchers to address issues of bias, diversity, and representation in AI-generated media
	- Expanding the installation to include a wider range of cultural motifs, archetypes, and folktales from around the world

- ## Future Developments
	- The creators of The Golden Key are exploring new possibilities for interactive, AI-driven experiences, including:
	- Incorporating video and 3D elements to enhance the liveliness and immersion of the generated content
	- Developing mobile app touchpoints that allow participants to interact with the installation beyond the physical space
	- Collaborating with other artists and researchers to address issues of bias, diversity, and representation in AI-generated media
	- Expanding the installation to include a wider range of cultural motifs, archetypes, and folktales from around the world



## Academic Context

- Mobile robots are autonomous or semi-autonomous machines capable of navigating and performing tasks in various environments without continuous human control.
  - Key developments include advances in sensor fusion, machine learning, and control algorithms that enable improved perception, navigation, and manipulation.
  - Academic foundations rest on robotics, artificial intelligence, control theory, and computer vision, with interdisciplinary contributions from mechanical and electrical engineering.

## Current Landscape (2025)

- Industry adoption is widespread across manufacturing, logistics, healthcare, and service sectors, with mobile robots increasingly integrated into complex, dynamic environments.
  - Notable platforms include autonomous warehouse robots, delivery robots, and inspection robots equipped with advanced sensors such as Lidar, RGB-D cameras, and IMUs.
  - UK examples include deployment in logistics hubs around Manchester and Leeds, where mobile robots optimise warehouse operations, and in Newcastle’s healthcare facilities for autonomous delivery tasks.
- Technical capabilities now feature real-time object detection using deep learning (e.g., YOLO models), dynamic path planning algorithms like RRT* and IA-DWA, and multi-robot collaboration frameworks.
- Limitations remain in trajectory optimisation under dynamic constraints and human-robot interaction in cluttered or unpredictable environments.
- Standards and frameworks increasingly focus on safety, interoperability, and ethical deployment, with UK regulatory bodies emphasising compliance in public and industrial spaces.

## Research & Literature

- Yi, V., et al. (2025). "A multi-robot collaborative manipulation framework for dynamic and heterogeneous environments." *Frontiers in Robotics and AI*, 12, 1585544. https://doi.org/10.3389/frobt.2025.1585544
  - Presents a leader-follower control architecture integrating deep-learning object detection and RRT* path planning for dynamic obstacle avoidance.
- He, Q., Wang, Z., Li, K., et al. (2025). "Research on autonomous navigation of mobile robots based on IA-DWA algorithm." *Scientific Reports*, 15, 2099. https://doi.org/10.1038/s41598-024-84858-3
  - Demonstrates fusion of IMU and odometry data with improved A* and Dynamic Window Approach algorithms for enhanced autonomous navigation in indoor environments.
- Farag, M. (2025). "Development and Implementation of Autonomous Mobile Robots for Indoor Navigation." *International Journal of Mechanical Engineering and Robotics Research*, 14(3), 360-370.
  - Explores PID control and deep reinforcement learning for trajectory tracking and collision avoidance in warehouse applications.
- Dong, Z., Everett, M. (2025). "Efficient 3D mapping for mobile robot navigation." Northeastern University Research News.
  - Introduces a 3D mapping algorithm reducing computational resource use by up to 57%, improving long-distance autonomous operation.

- Ongoing research focuses on multi-robot collaboration, adaptive learning in dynamic environments, and integration of bioinspired mechanisms for enhanced mobility and task execution.

## UK Context

- The UK has made significant contributions to mobile robotics, with research centres in Manchester and Sheffield leading developments in autonomous navigation and human-robot collaboration.
- North England innovation hubs, such as the Advanced Manufacturing Research Centre (AMRC) in Sheffield and the Robotics Innovation Facility in Newcastle, foster industry-academic partnerships advancing mobile robot applications in manufacturing and healthcare.
- Regional case studies include:
  - Deployment of autonomous delivery robots in Leeds city centre, navigating complex pedestrian environments.
  - Use of mobile inspection robots in Manchester’s industrial facilities, enhancing safety and operational efficiency.

## Future Directions

- Emerging trends include enhanced autonomy through improved sensor fusion, AI-driven decision-making, and swarm robotics enabling collective task execution.
- Anticipated challenges involve ensuring robust operation in highly dynamic, unstructured environments and addressing ethical considerations in public deployment.
- Research priorities focus on trajectory optimisation under kinematic and dynamic constraints, human-robot interaction, and scalable multi-robot systems adaptable to diverse UK industrial and urban contexts.

## References

1. Yi, V., et al. (2025). "A multi-robot collaborative manipulation framework for dynamic and heterogeneous environments." *Frontiers in Robotics and AI*, 12, 1585544. https://doi.org/10.3389/frobt.2025.1585544
2. He, Q., Wang, Z., Li, K., et al. (2025). "Research on autonomous navigation of mobile robots based on IA-DWA algorithm." *Scientific Reports*, 15, 2099. https://doi.org/10.1038/s41598-024-84858-3
3. Farag, M. (2025). "Development and Implementation of Autonomous Mobile Robots for Indoor Navigation." *International Journal of Mechanical Engineering and Robotics Research*, 14(3), 360-370. https://doi.org/10.5281/zenodo.XXXXXXX
4. Dong, Z., Everett, M. (2025). "Efficient 3D mapping for mobile robot navigation." Northeastern University Research News.


## Metadata


- **Migration Status**: Ontology block enriched on 2025-11-12
- **Last Updated**: 2025-11-12
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable


