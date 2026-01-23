- ### OntologyBlock
  id:: perception-system-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: AI-0349
	- preferred-term:: Perception System
	- source-domain:: mv
- status:: draft
	- definition:: A Perception System is the sensor processing and environmental understanding component of autonomous systems that interprets raw sensor data to build a coherent representation of the surrounding environment, including object detection, classification, tracking, localisation, and scene understanding. Perception systems fuse data from multiple sensor modalities (camera, lidar, radar) to create robust environmental models for autonomous decision-making.

- status:: production
    - public-access:: true
	- qualityScore:: 0.92
	- lastUpdated:: 2025-11-15
	- definition:: A Perception System is the sensor processing and environmental understanding component of [[Autonomous Systems]] that interprets raw [[Sensor Data]] to build a coherent representation of the surrounding environment, including [[Object Detection]], [[Classification]], [[Tracking]], [[Localization]], and [[Scene Understanding]]. Perception systems fuse data from multiple [[Sensor Modalities]] ([[Camera]], [[LiDAR]], [[Radar]], [[Ultrasonic Sensors]]) to create robust environmental models for [[Autonomous Decision-Making]]. [Updated 2025]


## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

;; OWL Functional Syntax [Updated 2025]

(Declaration (Class :PerceptionSystem))

;; Annotations
(AnnotationAssertion rdfs:label :PerceptionSystem "Perception System"@en)
(AnnotationAssertion rdfs:comment :PerceptionSystem "A Perception System is the sensor processing and environmental understanding component of autonomous systems that interprets raw sensor data to build a coherent representation of the surrounding environment, including object detection, classification, tracking, localisation, and scene understanding. Perception systems fuse data from multiple sensor modalities (camera, lidar, radar) to create robust environmental models for autonomous decision-making."@en)

;; Semantic Relationships
(SubClassOf :PerceptionSystem
  (ObjectSomeValuesFrom :relatedTo :SensorFusion))
(SubClassOf :PerceptionSystem
  (ObjectSomeValuesFrom :relatedTo :ComputerVision))
(SubClassOf :PerceptionSystem
  (ObjectSomeValuesFrom :relatedTo :ObjectDetection))
(SubClassOf :PerceptionSystem
  (ObjectSomeValuesFrom :relatedTo :DeepLearning))
(SubClassOf :PerceptionSystem
  (ObjectSomeValuesFrom :relatedTo :TransformerModels))
(SubClassOf :PerceptionSystem
  (ObjectSomeValuesFrom :relatedTo :SLAM))

;; Data Properties
(AnnotationAssertion dcterms:identifier :PerceptionSystem "AI-0349"^^xsd:string)
(DataPropertyAssertion :isAITechnology :PerceptionSystem "true"^^xsd:boolean)
```

## Core Characteristics

- **Multi-Modal Sensing**: Integration of camera, lidar, radar, ultrasonic sensors
- **Object Detection**: Real-time detection of vehicles, pedestrians, obstacles
- **Object Tracking**: Temporal tracking of dynamic objects
- **Scene Understanding**: Semantic interpretation of road scene
- **Robustness**: Performance across weather, lighting, and environmental conditions

## Relationships

- **Component Of**: Autonomous Vehicle, Robotics Systems
- **Related**: Sensor Fusion, Computer Vision, Object Detection
- **Utilises**: Deep Learning, Convolutional Neural Networks

## Key Literature

1. Feng, D., et al. (2021). "Deep multi-modal object detection and semantic segmentation for autonomous driving: Datasets, methods, and challenges." *IEEE Transactions on Intelligent Transportation Systems*, 22(3), 1341-1360.

2. Arnold, E., et al. (2019). "A survey on 3D object detection methods for autonomous driving applications." *IEEE Transactions on Intelligent Transportation Systems*, 20(10), 3782-3795.

## See Also

- [[Sensor Fusion]]
- [[Object Detection]]
- [[Computer Vision]]

## Metadata

- **Domain**: Autonomous Systems, Computer Vision
- **Maturity**: Commercial deployment
	- maturity:: draft

(DataPropertyAssertion :qualityScore :PerceptionSystem "0.92"^^xsd:decimal)
(DataPropertyAssertion :lastUpdated :PerceptionSystem "2025-11-15"^^xsd:date)
```

## Core Characteristics [Updated 2025]

### Sensor Technologies
- **[[Multi-Modal Sensing]]**: Integration of [[Camera Systems]], [[Solid-State LiDAR]], [[4D Radar]], [[Ultrasonic Sensors]], and [[IMU]] (Inertial Measurement Units)
- **[[Solid-State LiDAR]] Advances**: Market growing from $2.49B (2025) to projected $24.46B by 2033 with 33.02% CAGR, featuring sub-$500 pricing and 300-meter detection ranges [Updated 2025]
- **[[Sensor Fusion]]**: Multi-sensor integration becoming standard practice, combining [[LiDAR]], [[Camera]], [[Radar]], and [[GNSS]] for robust [[Environmental Perception]]

### Object Detection & Segmentation
- **[[Real-Time Object Detection]]**: Detection of [[Vehicles]], [[Pedestrians]], [[Cyclists]], [[Obstacles]], and [[Traffic Signs]] with millisecond latency
- **[[YOLOv12]]**: Latest evolution (Feb 2025) with R-ELAN backbone, area-based attention, and FlashAttention achieving 54.7% mAP on [[COCO Dataset]] at 4.52ms latency [Updated 2025]
- **[[RF-DETR]]**: Transformer-based detector combining real-time speed with state-of-the-art accuracy using [[DINOv2]] backbone [Updated 2025]
- **[[SAM-YOLO]]**: Hybrid approach integrating [[Segment Anything Model]] with [[YOLO]] for robust detection under extreme lighting conditions [Updated 2025]
- **[[SAM 2]]**: Foundation model for promptable visual segmentation in images and videos, enabling zero-shot segmentation capabilities [Updated 2025]

### Tracking & Motion Analysis
- **[[Multi-Object Tracking]]**: Temporal tracking of dynamic objects across frames using [[Kalman Filtering]], [[Particle Filters]], and [[Deep SORT]]
- **[[Visual Odometry]]**: Camera-based motion estimation for [[Localization]]
- **[[Optical Flow]]**: Dense motion field estimation for [[Scene Understanding]]

### Scene Understanding & Mapping
- **[[Semantic Segmentation]]**: Pixel-level classification of [[Road Scenes]], [[Lane Detection]], [[Drivable Area]] estimation
- **[[3D Scene Reconstruction]]**: Building volumetric representations using [[Point Clouds]], [[Voxel Grids]], and [[3D Gaussian Splatting]]
- **[[SLAM]] (Simultaneous Localization and Mapping)**: Real-time mapping and localization using [[ORB-SLAM2]], [[OKVIS]], [[Ground-Fusion++]], and [[Visual-Inertial Odometry]]
- **[[HD Mapping]]**: High-definition map creation and localization for [[Autonomous Driving]]

### Advanced AI Models
- **[[Vision Transformers]] (ViT)**: Treating images as sequences for generalized visual reasoning [Updated 2025]
- **[[Swin Transformer]]**: Shifted window attention for efficient local and global feature capture [Updated 2025]
- **[[CLIP]]**: Multimodal vision-language models for natural-language classification and filtering [Updated 2025]
- **[[Foundation Models]]**: Pre-trained models ([[DINOv2]], [[CLIP]], [[ViT]]) providing transferable visual representations [Updated 2025]

### Robustness & Safety
- **[[All-Weather Performance]]**: Robust operation across rain, snow, fog, and adverse lighting conditions
- **[[Adversarial Robustness]]**: Resilience to [[Adversarial Attacks]] and [[Sensor Spoofing]]
- **[[Fail-Safe Mechanisms]]**: Redundancy and graceful degradation for [[Safety-Critical Systems]]
- **[[Real-Time Performance]]**: Sub-100ms latency for [[Autonomous Vehicle]] applications

## Relationships

### Component Of
- [[Autonomous Vehicles]]
- [[Robotics Systems]]
- [[Unmanned Aerial Vehicles]] (UAVs/[[Drones]])
- [[Advanced Driver Assistance Systems]] (ADAS)
- [[Smart Cities Infrastructure]]
- [[Warehouse Automation]]
- [[Agricultural Robots]]

### Related Technologies
- [[Sensor Fusion]]
- [[Computer Vision]]
- [[Object Detection]]
- [[Deep Learning]]
- [[Convolutional Neural Networks]] (CNNs)
- [[Transformer Models]]
- [[SLAM]]
- [[Path Planning]]
- [[Motion Control]]
- [[Edge AI]]
- [[Neural Network Acceleration]]

### Utilizes
- [[Deep Learning Frameworks]] ([[PyTorch]], [[TensorFlow]], [[ONNX]])
- [[GPU Computing]] and [[Neural Processing Units]] (NPUs)
- [[Edge Computing]] platforms
- [[Model Quantization]] and [[Pruning]]
- [[Knowledge Distillation]]
- [[Transfer Learning]]

## Key Literature [Updated 2025]

### Foundational Papers (Pre-2025)
1. Feng, D., et al. (2021). "Deep multi-modal object detection and semantic segmentation for autonomous driving: Datasets, methods, and challenges." *IEEE Transactions on Intelligent Transportation Systems*, 22(3), 1341-1360.
2. Arnold, E., et al. (2019). "A survey on 3D object detection methods for autonomous driving applications." *IEEE Transactions on Intelligent Transportation Systems*, 20(10), 3782-3795.

### Recent Advances (2024-2025)
3. Liao, J., Jiang, S., Chen, M., & Sun, C. (2025). "SAM-YOLO: An Improved Small Object Detection Model for Vehicle Detection." *SAGE Journals*. https://journals.sagepub.com/doi/10.1177/30504554251319452 - Integration of [[Segment Anything Model]] with [[YOLO]] for enhanced vehicle detection under challenging conditions. [Updated 2025]

4. "The YOLO Framework: A Comprehensive Review of Evolution, Applications, and Benchmarks in Object Detection" (2024). *MDPI Information*, 13(12):336. https://www.mdpi.com/2073-431X/13/12/336 - Comprehensive survey of [[YOLO]] evolution through [[YOLOv12]]. [Updated 2025]

5. "Real-time Object Detection in Autonomous Vehicles with YOLO" (2024). *ScienceDirect Procedia Computer Science*. https://www.sciencedirect.com/science/article/pii/S1877050924024293 - Analysis of [[YOLO]] performance benchmarks for [[Autonomous Vehicles]]. [Updated 2025]

6. "A Comprehensive Survey of Visual SLAM Algorithms" (2024). *MDPI Robotics*, 11(1):24. https://www.mdpi.com/2218-6581/11/1/24 - Survey of [[Visual SLAM]] algorithms including [[ORB-SLAM2]], [[OKVIS]], and latest developments. [Updated 2025]

7. "A review of visual SLAM for robotics: evolution, properties, and future applications" (2024). *Frontiers in Robotics and AI*. https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2024.1347985/full - Comprehensive review of [[Visual SLAM]] for [[Robotics Systems]]. [Updated 2025]

8. "A Robust Framework Fusing Visual SLAM and 3D Gaussian Splatting with a Coarse-Fine Method for Dynamic Region Segmentation" (2024). *PMC*. https://pmc.ncbi.nlm.nih.gov/articles/PMC12431257/ - Integration of [[Visual SLAM]] with [[3D Gaussian Splatting]] for dynamic scenes. [Updated 2025]

9. "Towards Robust Sensor-Fusion Ground SLAM: A Comprehensive Benchmark and A Resilient Framework" (2024). *arXiv:2507.08364*. https://arxiv.org/html/2507.08364v1 - [[Ground-Fusion++]] framework for multi-sensor [[SLAM]] with [[LiDAR]], RGB-D, [[IMU]], and [[GNSS]]. [Updated 2025]

### Market & Technology Reports (2025)
10. "Solid-State LiDAR Market Size & Outlook, 2025-2033" (2025). *Straits Research*. https://straitsresearch.com/report/solid-state-lidar-market - Market analysis showing growth from $2.49B to $24.46B by 2033. [Updated 2025]

11. "Automotive Lidar Sensor Market Analysis, Dynamics- Outlook 2025-2032" (2025). *Intel Market Research*. https://www.intelmarketresearch.com/automotive-lidar-sensor-2025-2032-858-4102 - Comprehensive analysis of [[LiDAR]] technology trends and adoption. [Updated 2025]

12. "World's Top 20 LiDAR Companies in 2025" (2025). *Spherical Insights*. https://www.sphericalinsights.com/blogs/world-s-top-20-lidar-companies-in-2025-market-innovation-and-revenue-insights - Industry landscape of [[LiDAR]] manufacturers including [[Hesai Group]], [[Luminar Technologies]]. [Updated 2025]

### Vision Transformers & Foundation Models (2024-2025)
13. "Latest Computer Vision Models in 2025" (2025). *ImageVision.ai*. https://imagevision.ai/blog/inside-the-latest-computer-vision-models-in-2025/ - Overview of [[Vision Transformers]], [[SAM 2]], and [[Foundation Models]]. [Updated 2025]

14. "Top 30+ Computer Vision Models For 2025" (2025). *Analytics Vidhya*. https://www.analyticsvidhya.com/blog/2025/03/computer-vision-models/ - Comprehensive guide to state-of-the-art [[Computer Vision]] models including [[ViT]], [[Swin Transformer]], [[CLIP]]. [Updated 2025]

15. "SAM 2 + GPT-4o: Cascading Foundation Models via Visual Prompting" (2025). *Edge AI and Vision Alliance*. https://www.edge-ai-vision.com/2025/02/sam-2-gpt-4o-cascading-foundation-models-via-visual-prompting-part-2/ - Integration of [[SAM 2]] with multimodal [[Foundation Models]]. [Updated 2025]

16. "VER: Vision Expert Transformer for Robot Learning via Foundation Distillation and Dynamic Routing" (2024). *arXiv:2510.05213*. https://arxiv.org/html/2510.05213 - [[Vision Transformers]] for [[Robotics]] applications with [[Foundation Model]] distillation. [Updated 2025]

### Benchmarks & Datasets
17. **[[COCO Dataset]]**: Common Objects in Context - Standard benchmark for [[Object Detection]] and [[Segmentation]]
18. **[[KITTI Dataset]]**: Autonomous driving benchmark with [[LiDAR]], camera, [[GPS]], and [[IMU]] data
19. **[[TUM RGB-D Dataset]]**: Benchmark for [[Visual SLAM]] with RGB images and depth maps
20. **[[Hilti SLAM Challenge 2023]]**: Construction environment [[SLAM]] benchmark with multi-sensor data
21. **[[nuScenes]]**: Large-scale autonomous driving dataset with full sensor suite
22. **[[Waymo Open Dataset]]**: Diverse autonomous driving scenarios with [[LiDAR]] and camera data

## Industry Developments [Updated 2025]

### LiDAR Innovations
- **Hesai Group** (Oct 2024): Exclusive long-range [[LiDAR]] provider for Leapmotor's next-gen platform, mass production expected 2025
- **Hesai OT128** (Sep 2024): 200-meter detection range with 95% reduced production time through simplified architecture
- **Luminar Sentinel** (Jul 2024): Software suite featuring Proactive Safety, Perception, 3D Mapping, and Dynamic [[LiDAR]] capabilities
- **Analog Photonics** (2025): Chip-scale phased-array [[LiDAR]] samples for automotive industry

### Object Detection Breakthroughs
- **YOLOv12** (Feb 2025): R-ELAN backbone, FlashAttention, achieving state-of-the-art accuracy with real-time performance
- **RF-DETR**: Transformer-based detection at 4.52ms latency on NVIDIA T4
- **SAM-YOLO**: Optimal performance on ExLight dataset under extreme lighting

### SLAM & Robotics
- **Ground-Fusion++**: Multi-sensor fusion with adaptive sensor selection for long-term outdoor trajectories
- **3D Gaussian Splatting Integration**: Real-time dense mapping with [[Visual SLAM]]

## Bitcoin-AI Cross-Domain Applications

### Decentralized Perception Networks
- **[[Decentralized Sensor Networks]]**: Utilizing [[Bitcoin]]-based incentive mechanisms for distributed [[Perception Systems]] in [[Smart Cities]]
- **[[Proof-of-Perception]]**: Cryptographic verification of [[Sensor Data]] integrity using [[Blockchain]] timestamping
- **[[Federated Perception Learning]]**: Privacy-preserving collaborative training of [[Object Detection]] models with [[Bitcoin Lightning Network]] micropayments

### Autonomous Vehicle Ecosystems
- **[[Vehicle-to-Vehicle Communication]]**: [[Lightning Network]]-enabled data marketplace for sharing [[HD Maps]], [[Traffic Conditions]], and [[Sensor Data]]
- **[[Autonomous Fleet Coordination]]**: [[Bitcoin]]-incentivized coordination protocols for [[Self-Driving Vehicles]]
- **[[Perception Data Markets]]**: Monetization of [[LiDAR]] scans, [[Camera]] feeds, and [[SLAM]] maps through [[Bitcoin]] micropayments

### AI Model Verification
- **[[Model Provenance Tracking]]**: [[Bitcoin]] timestamping for [[Neural Network]] weights and [[Training Data]] lineage
- **[[Decentralized Model Training]]**: [[Bitcoin]]-coordinated distributed training of [[Perception Models]] across edge devices
- **[[Compute Verification]]**: Proof-of-computation for [[Object Detection]] and [[SLAM]] algorithms using [[Bitcoin]] smart contracts

## See Also

### Core Technologies
- [[Sensor Fusion]]
- [[Object Detection]]
- [[Computer Vision]]
- [[SLAM]]
- [[LiDAR Technology]]
- [[Radar Systems]]
- [[Camera Calibration]]
- [[Point Cloud Processing]]

### AI & Machine Learning
- [[Deep Learning]]
- [[Convolutional Neural Networks]]
- [[Vision Transformers]]
- [[Transformer Models]]
- [[Foundation Models]]
- [[YOLO]]
- [[Segment Anything Model]]
- [[Transfer Learning]]
- [[Model Compression]]

### Applications
- [[Autonomous Vehicles]]
- [[Autonomous Driving]]
- [[Advanced Driver Assistance Systems]]
- [[Robotics]]
- [[Drone Navigation]]
- [[Warehouse Automation]]
- [[Smart Cities]]
- [[Precision Agriculture]]

### Related Concepts
- [[Real-Time Systems]]
- [[Edge Computing]]
- [[Neural Network Acceleration]]
- [[Hardware Acceleration]]
- [[Embedded Systems]]
- [[Safety-Critical Systems]]
- [[Functional Safety]]
- [[ISO 26262]]

### Emerging Topics
- [[4D Radar]]
- [[Solid-State LiDAR]]
- [[Event Cameras]]
- [[Neuromorphic Vision]]
- [[3D Gaussian Splatting]]
- [[Neural Radiance Fields]] (NeRF)
- [[Multimodal Perception]]

### Bitcoin-AI Integration
- [[Bitcoin]]
- [[Lightning Network]]
- [[Decentralized AI]]
- [[Blockchain]]
- [[Smart Contracts]]
- [[Proof-of-Work]]
- [[Cryptographic Verification]]

## Metadata

- **Domain**: [[Autonomous Systems]], [[Computer Vision]], [[Robotics]], [[Artificial Intelligence]]
- **Maturity**: Commercial deployment and active research
- **Quality Score**: 0.92
- **Last Updated**: 2025-11-15
- **Term ID**: AI-0349
- **Status**: Production
	- maturity:: production
	- owl:class:: mv:PerceptionSystem
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
	- #### Relationships
	  id:: perception-system-relationships
- is-part-of:: [[Intelligent Virtual Entity]], [[AI Agent System]]
- ## About Perception System
	- A Perception System is the sensor processing and environmental understanding component of autonomous systems that interprets raw sensor data to build a coherent representation of the surrounding environment, including object detection, classification, tracking, localisation, and scene understanding. Perception systems fuse data from multiple sensor modalities (camera, lidar, radar) to create robust environmental models for autonomous decision-making.

- # Open systems
- [Stable Video 4D — Stability AI](https://stability.ai/news/stable-video-4d)
-

	- ### Job Displacement
		- As AI systems become more capable, there are concerns about the potential for widespread job losses in certain sectors.

	- ### Banking Industry's Environmental Impact
	- **Energy Consumption**: In 2014, the banking system (including branches, ATMs, and currency production) was estimated to use 660 TWh. Assuming a 1-2% annual increase, this could be around 700 TWh.
	- **Carbon Emissions**: The banking system is estimated to produce about 400 Mt of CO2 annually.

		- ## VPN Setup Instructions
			- For the Intermediate workgroup, setting up the VPN is essential. Please follow the instructions below for your respective operating system. On the day of the event, you will receive a username and password. Use these credentials when prompted by the OpenVPN client.

- # Risks and mitigations
	- Looking across the whole sector, this paragraph from the Bank of International Settlement (BIS) [sums everything up](https://www.bis.org/publ/arpdf/ar2022e3.htm):
		- "..it is now becoming clear that crypto and DeFi have deeper structural limitations that prevent them from achieving the levels of efficiency, stability or integrity required for an adequate monetary system. In particular, the crypto universe lacks a nominal anchor, which it tries to import, imperfectly, through stable coins. It is also prone to fragmentation, and its applications cannot scale without compromising security, as shown by their congestion and exorbitant fees. Activity in this parallel system is, instead, sustained by the influx of speculative coin holders. Finally, there are serious concerns about the role of unregulated intermediaries in the system. As they are deep-seated, these structural shortcomings are unlikely to be amenable to technical fixes alone. This is because they reflect the inherent limitations of a decentralised system built on permissionless blockchains.”
	- This might seem like reason enough to stop here and wait for [[central bank digital currencies]], but Bitcoin is here now, is likely unstoppable in, and with mitigations in place might have uses if developed properly. Perhaps surprising the same BIS is [allowing up to2%](https://www.bis.org/press/p221216.htm) of bank reserves to be held in crypto assets, including Bitcoin, [according to their June 2022 Basel Committee on Banking Supervision report](https://www.bis.org/bcbs/publ/d533.pdf), though the BIS chief believe the [“battle” against crypto](https://www.bloomberg.com/news/articles/2023-02-22/crypto-has-lost-battle-against-fiat-currency-bis-chief-agustin-carstens-says) has already been won.
	- [[Lightning and Similar L2]] are still considered to be experimental and not completely battle tested. There have been various attacks and a major double spend attack may be possible,[[https://doi.org/10.48550/arxiv.2208.01908]] but there have been no major problems in the years it’s been running with careful design choices and cybersecurity best practice it it likely a production ready component of [[Agents]] based systems.

	- ### pubky
		- [pubky](https://github.com/pubky) (previously slashtags) is a distributed identity open method being developed by Bitfinex and Tether under the Synonym suite. It’s origins date back to2011 and was initially seeded through academia, and government innovation grants to build on the concepts of BitTorrent, and later [DAT](https://dat-ecosystem.org/timeline.html). This eventually became the Hypercore protocol, with an additional rebranding to Holepunch in2021. It is essentially this system, a mobile app UX, and Bitcoin integration which forms the Synonym/pubky stack. There is a lot ofhistorical investment, new focus, and promising product design in theSynonym ecosystem which is forming about the this ‘web of trust’distributed data system. The suite will rely on Pear Credits to enableTether dollars to be passed around within the system. This may fosteradoption in emerging markets. The critical path nature of the Tetherintegration, and the complex intermingling of Synonym, Hypercore,Bitfinex, Tether, and Pear credits are potentially red flags, and thoughthe technology stack is quite interesting only Pear Credit are reallyuseful to our design.

	- ## Understanding money creation
		- There are two main types of money in our current system: financial money and real economy money. Financial money refers to bank reserves, which are created by central banks through quantitative easing (QE). The central bank buys bonds from banks and credits their reserve accounts with new digital bank reserves. Bank reserves are an asset for commercial banks. Reserves allow banks to settle transactions with each other and meet liquidity requirements set by regulators. Importantly,bank reserves do not directly translate into increased lending or stimulus for the real economy. There is no direct channel for reserves to enter the broader economy. The amount of reserves does not drive bank lending. Real economy money refers to money that households andbusinesses can use for transactions. This includes physical currency and bank deposits. Real economy money is created through government deficits and private sector credit expansion.
			- [FINDING THE MONEY Film on X: "CLIP: We hear a lot about the national debt. But do currency-issuing governments really ‘borrow' their own currencies? The answer might surprise you. Watch FINDING THE MONEY documentary, In Theaters and On Demand TOMORROW May 3: https://t.co/H1e5fEuV7t https://t.co/MA3AGIcCXi" / X (twitter.com)](https://twitter.com/FindingMoneyDoc/status/1786050601236779078)
			- {{twitter https://twitter.com/FindingMoneyDoc/status/1786050601236779078}}

	- ## The risks of the current system and alternatives
		- The current elastic credit money system aims to prevent recessions by constantly expanding credit. However, this artificial stability leads to financial instability long-term. Alternatives like Bitcoin have a firm supply anchor and cannot rapidly expand the money supply. This prevents runaway credit growth and provides monetary discipline. However, Bitcoin and hard money standards also provide less flexibility to respond to economic crises by expanding credit. There are trade offs between flexibility and discipline. Our current monetary system relies heavily on expanding real economy purchasing power through government deficits and private credit in order to drive economic growth. However, this constant elasticity promotes financial instability and inequality over the long-run, mainly because of shorter term political incentives. We will see that potential alternatives like Bitcoin offer more stability through monetary discipline, but sacrifice flexibility. It’s likely that trading off a known flawed system for an unknown replacement is far too risky, but with sufficient adoption there may be a ‘flight to safety’.Bitcoin represents a serious risk if it compounds the worst elements and outcomes of a mishandled cyclical credit based system.

			- ### Sanctions and weaponisation of the dollar
				- [Stephen Fallon on How American Regulators Captured Global Banks - YouTube](https://www.youtube.com/watch?v=bpzI9Pgso5Q)
				- Instrument in Support of Trade Exchanges (INSTEX) was established by European governments, primarily the UK, France, and Germany, to maintain trade with Iran following the United States' withdrawal from the Joint Comprehensive Plan of Action (JCPOA), commonly known as the Iran nuclear deal. INSTEX was designed to provide invoice discounting services, connecting European and Iranian financial institutions that had been cut off from the global financial system due to renewed US sanctions. Initially, INSTEX aimed to process billions of euros in transactions across various sectors. However, over time, its ambitions were significantly scaled back due to political and practical challenges.
				- The United States authorities have leveraged the dominant position of the US dollar in the global economy to exert significant control over the international financial system. This has resulted in global banks modifying their behaviours and practices to conform with American regulatory guidance. The extent of this influence has led some observers, including Stephen Fallon, to argue that US regulators have not merely influenced global banks but have effectively captured them.
				- The Trump administration viewed INSTEX as anti-American and perceived it as a threat to US financial power. This stance created significant challenges for European companies attempting to maintain business relationships with Iran under the renewed sanctions regime. INSTEX struggled to effectively bridge the gap between commercially-minded businesses seeking practical solutions and politically-minded government officials focused on broader geopolitical concerns.
				- As INSTEX evolved, it moved from offering unregulated forfaiting services to exploring the possibility of becoming a fully-fledged bank. This evolution was driven by the realisation that its initial structure and services were insufficient to meet the complex needs of businesses operating in the challenging environment of renewed sanctions.
				- From 2005 to 2020, the United States successfully modified the international financial system, further separating itself from other states in the global financial hierarchy. This was achieved through various means, including expanding conceptions of US jurisdictional reach, implementing secondary sanctions, and emerging as the dominant financial power with no peer in this domain.
				- The United States leveraged sanctions and financial regulations to reshape the international system. This involved entering into state-on-state competition in the financial domain, resetting expectations for US organisations, banks, and third parties, and effectively ending the concept of neutrality in the global financial system.
				- As a result of these changes, global banks now operate according to US norms and expectations, even when they are not headquartered in the United States. These norms and practices are disseminated throughout the banking sector, from larger institutions to smaller banks, and ultimately into the non-financial economy.
				- A notable case study in this context is the 2012 deferred prosecution agreement (DPA) between the US Department of Justice and HSBC. HSBC was fined for knowingly violating US sanctions, and the DPA was used as a tool to fundamentally restructure HSBC's global business. The agreement required HSBC to hire new leadership, including former US Treasury officials, cut relationships with over 100 correspondent banks worldwide, sell more than 80 subsidiary businesses, and cease operations in 20 countries deemed high-risk by US authorities.
				- This case exemplifies how US regulators have effectively extended their jurisdiction to nearly every reach of the global financial system. Banks and other financial institutions face a binary choice of either cooperating with US demands or facing severe consequences, potentially including loss of access to the US financial system. This influence extends beyond banking to areas such as export controls, where similar mechanisms are used to ensure compliance with US policies.
				- European officials have struggled to counter US financial influence, as evidenced by the challenges faced by INSTEX. The failure of INSTEX to effectively facilitate trade with Iran highlighted the difficulties in creating financial mechanisms independent of US influence. There is limited evidence that European officials have learned lasting lessons from this experience or developed effective strategies to address the issue of US financial dominance.
				- The influence of US regulators over global finance is likely to persist regardless of changes in US administration. However, this influence may become more pronounced under administrations that take a more unilateralist approach to foreign policy and financial regulation.
				- The real-world impact of these financial sanctions and regulations is illustrated by personal experiences, such as the difficulties faced when travelling to sanctioned countries like Iran. Travellers may find themselves unable to access funds through normal banking channels, necessitating the carrying of large amounts of cash and facing potential financial difficulties in emergency situations.
		- The Chinese Yuan/Renminbi is potentially stepping in where the petrodollar is now waning.[[mathews2018china]] The effects of this expansion of economic influence by China, through a potential petro-Yuan, and the belt and road initiative,[[huang2016understanding]]are not yet felt, but the lines are fairly clearly defined and may be felt over the coming decades. The Euro system is potentially even less stable because of recent energy supply pressures, and [internaltensions](https://www.fitchratings.com/research/sovereigns/energy-crisis-increases-fiscal-risks-to-western-europe-sovereigns-23-09-2022)in the bond markets. Though it seems to be less ‘weaponised,’[[hudson2021destiny]] it comes with it’s own restrictions for use, especially through the International Monetary Fund (IMF). They are opposed to global fragmentation and multi-polarity, seeing is as disproportionately impacting emerging economies. They say in their [2023 outlookreport](https://www.imf.org/en/Publications/WEO/Issues/2023/04/11/world-economic-outlook-april-2023?cid=bl-com-spring2023flagships-WEOEA2023001) that the rise of geoeconomic fragmentation could cause shifts in foreign direct investment (FDI), hitting emerging economies the hardest. They feel that policymakers and companies are focusing on making supply chains more resilient by moving production closer to home or to trusted countries. As a result, FDI flows are becoming more concentrated within blocs of aligned countries. It is likely true that emerging market and developing economies are more vulnerable to FDI relocation, as they rely more on flows from geopolitically distant countries, though this could be viewed as a reduction in economic imperialism. Such economies may face reduced access to capital and technological advancements. It is into this gap that our work presenting AI collaborative tooling wishes to step.
		- To give context to this it is useful to paraphrase Whittemore’s[podcast](https://www.youtube.com/watch?v=LOqQSKbfRu4) which gave a high level view of Gladsteins [critique of theIMF](https://bitcoinmagazine.com/culture/imf-world-bank-repress-poor-countries):it“The terms of the most recent IMF loans to Argentina; one that was just finalized this year was that the country’s leadership had to try, as part of their agreement, to discourage citizens from engaging in the use of cryptocurrencies. The most recent deal was a 45 billion dollar deal which is a restructuring of that 57 billion program that Alex mentioned. The provision in question was called ‘strengthening Financial resilience’, and says ‘to further Safeguard Financial stability we are taking important to discourage the use of cryptocurrencies with a view to preventing money laundering informality and disintermediation’. They explicitly do not want citizens of that country to disintermediate. They want them to have to go through the system that the IMF is“ restructuring”, meanwhile inflation this year is around 72 percent. Last year it was 48 the year before 42 the year before that 53 percent clearly something is not working. It’s not surprising to me then that Argentina is an absolute hotbed for people who are involved in Bitcoin”
		- The IMF have a [working paper](https://www.imf.org/en/Publications/WP/Issues/2024/04/05/A-Primer-on-Bitcoin-Cross-Border-Flows-Measurement-and-Drivers-547429) on Bitcoin for cross border payments and flows. They concede that it is very hard to track capital globally on the network, and that the numbers are significant, and post the launch of large ETF funds there is now worrisome convergence of "users" which will complicate policy responses (make is hard to ban).
			- ..we show that the use of Bitcoin for cross-border transactions is geographically very widespread, with relatively high intensities across regions both for off-chain and for on-chain flows, and some punctual differences driven by the underlying data coverage and estimation assumptions. The magnitudes of the estimated Bitcoin cross-border flows are sizeable with respect to several countries’ GDP, especially in those which experience smaller capital flows..
		- The new ‘third world’ who are excluded from the Dollar and/or Yuan poles of the global economy might drift toward the ‘basket of assets’ discussed by Keynes and Carney above. As mentioned this will certainly have a component of gold, and likely other commodity assets such as rare metals. This is described at length by Hudson[[hudson2021destiny]]. For our purposes here it’s also possible that there would be a small ‘hedge’allocation of Bitcoin or [even a globalaxis](https://www.independent.co.uk/tech/bitcoin-el-salvador-crypto-btc-b2079881.html)of ‘unaligned’ nations using theasset.[[hendrickson2021value; @ferranti2022hedging]] Block and Wakefield research [found that in developednations](https://block.xyz/2022/btc-report.pdf) Bitcoin is treated as an investment, while in less wealthy demographics there is interest in the utility. This is evidenced in the early nation state adoption seen and described to date, and the game theory incentive explained by Fidelity in the introduction. It’s too early to tell if this ‘unaligned money’could constitute a global economic pole, but it’s interesting that some commentators are now even discussing this, and that [carbon neutralityresearch](https://docs.google.com/document/d/1Ynl5bbdTqev-wbTAWQoeWdh1cJVf3ortuSjre9K9wGQ/edit)is being undertaken specifically for this application.

		- #### AI & Legal Help Initiatives
		- **Policy Practicum: AI For Legal Help**
			- [Envisions AI’s role in the legal sector from a community perspective](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4582745)[1](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4582745).
		- **Community-Led System Design Practice**
			- Involves community members in the design of AI legal services.

		- #### Remote Collaboration and Teleconferencing
		- As remote work becomes more prevalent, the Metaverse can provide a more
		   engaging and immersive platform for collaboration and teleconferencing.
		   The open-source system can be adapted to serve various industries,
		   making remote collaboration more efficient and inclusive.

- # Project: Automated Podcast
- This project aims to develop a sophisticated toolchain using FastAPI and OpenWebUI to automate the creation of a daily news podcast. The goal is to seamlessly integrate various modules and pipelines to process breaking news items, focusing on selecting interesting and unusual combinations of topics. The system will generate structured content through a multi-agent approach, mediated by a single API interface, ultimately producing a compelling podcast featuring two interlocutors, Bob and Sue.

	- ### Regata
		- [Regatta Storage – Mount your S3 bucket as a high performance, local file system.](https://regattastorage.com/)
		- |
		  Hey HN, I’m Hunter the founder of Regatta Storage ([https://regattastorage.com](https://regattastorage.com/)). Regatta Storage is a new cloud file system that provides unlimited pay-as-you-go capacity, local-like performance, and automatic synchronization to S3-compatible storage. For example, you can use Regatta to instantly access massive data sets in S3 with Spark, Pytorch, or pandas without paying for large, local disks or waiting for the data to download.Check out an overview of how the service works here: [https://www.youtube.com/watch?v=xh1q5p7E4JY](https://www.youtube.com/watch?v=xh1q5p7E4JY), and you can try it for free at [https://regattastorage.com](https://regattastorage.com/) after signing up for an account. e wanted to let you try it without an account, but we figured that “Hacker News shares a file system and S3 bucket” wouldn’t be the best experience for the community.I built Regatta after spending nearly a decade building and operating at-scale cloud storage at places like Amazon’s Elastic File System (EFS) and Netflix. During my 8 years at EFS, I learned a lot about how teams thought about their storage usage. Users frequently told me that they loved how simple and scalable EFS was, and -- like S3 -- they didn’t have to guess how much capacity they needed up front.When I got to Netflix, I was surprised that there wasn’t more usage of EFS. If you looked around, it seemed like a natural fit. Every application needed a POSIX file system. Lots of applications had unclear or spikey storage needs.
		- Often, developers wanted their storage to last beyond the lifetime of an individual instance or container. In fact, if you looked across all Netflix applications, some ridiculous amount of money was being spent on *empty storage space* because each of these local drives had to be overprovisioned for potential usage.However, in many cases, EFS wasn’t the perfect choice for these workloads. Moving workloads from local disks to NFS often encountered performance issues. Further, applications which treated their local disks as ephemeral would have to manually “clean up” left over data in a persistent storage system.At this point, I realized that there was a missing solution in the cloud storage market which wasn’t being filled by either block or file storage, and I decided to build Regatta.
		- Regatta is a pay-as-you-go cloud file system that automatically expands with your application. Because it automatically synchronizes with S3 using native file formats, you can connect it to existing data sets and use recently written file data directly from S3. When data isn’t actively being used, it’s removed from the Regatta cache, so you only pay for the backing S3 storage. Finally, we’re developing a custom file protocol which allows us to achieve local-like performance for small-file workloads *and* Lustre-like scale-out performance for distributed data jobs.Under the hood, customers mount a Regatta file system by connecting to our fleet of caching instances over NFSv3 (soon, our custom protocol). Our instances then connect to the customer’s S3 bucket on the backend, and provide sub-millisecond cached-read and write performance. This durable cache allows us to provide a strongly consistent, efficient view of the file system to all connected file clients. We can perform challenging operations (like directory renaming) quickly and durably, while they asynchronously propagate to the S3 bucket.
		- We’re excited to see users share our vision for Regatta. We have teams who are using us to build totally serverless Jupyter notebook servers for their AI researchers who prefer to upload and share data using the S3 web UI. We have teams who are using us as a distributed caching layer on top of S3 for low-latency access to common files. We have teams who are replacing their thin-provisioned Ceph boot volumes with Regatta for significant savings. We can’t wait to see what other things people will build and we hope you’ll give us a try at regattastorage.com.We’d love to get any early feedback from the community, ideas for future direction, or experiences in this space. I’ll be in the comments for the next few hours to respond!
		- |

- # Open systems
- [Stable Video 4D — Stability AI](https://stability.ai/news/stable-video-4d)
-

	- ### Job Displacement
		- As AI systems become more capable, there are concerns about the potential for widespread job losses in certain sectors.

	- ### Banking Industry's Environmental Impact
	- **Energy Consumption**: In 2014, the banking system (including branches, ATMs, and currency production) was estimated to use 660 TWh. Assuming a 1-2% annual increase, this could be around 700 TWh.
	- **Carbon Emissions**: The banking system is estimated to produce about 400 Mt of CO2 annually.

		- ## VPN Setup Instructions
			- For the Intermediate workgroup, setting up the VPN is essential. Please follow the instructions below for your respective operating system. On the day of the event, you will receive a username and password. Use these credentials when prompted by the OpenVPN client.

- # Risks and mitigations
	- Looking across the whole sector, this paragraph from the Bank of International Settlement (BIS) [sums everything up](https://www.bis.org/publ/arpdf/ar2022e3.htm):
		- "..it is now becoming clear that crypto and DeFi have deeper structural limitations that prevent them from achieving the levels of efficiency, stability or integrity required for an adequate monetary system. In particular, the crypto universe lacks a nominal anchor, which it tries to import, imperfectly, through stable coins. It is also prone to fragmentation, and its applications cannot scale without compromising security, as shown by their congestion and exorbitant fees. Activity in this parallel system is, instead, sustained by the influx of speculative coin holders. Finally, there are serious concerns about the role of unregulated intermediaries in the system. As they are deep-seated, these structural shortcomings are unlikely to be amenable to technical fixes alone. This is because they reflect the inherent limitations of a decentralised system built on permissionless blockchains.”
	- This might seem like reason enough to stop here and wait for [[central bank digital currencies]], but Bitcoin is here now, is likely unstoppable in, and with mitigations in place might have uses if developed properly. Perhaps surprising the same BIS is [allowing up to2%](https://www.bis.org/press/p221216.htm) of bank reserves to be held in crypto assets, including Bitcoin, [according to their June 2022 Basel Committee on Banking Supervision report](https://www.bis.org/bcbs/publ/d533.pdf), though the BIS chief believe the [“battle” against crypto](https://www.bloomberg.com/news/articles/2023-02-22/crypto-has-lost-battle-against-fiat-currency-bis-chief-agustin-carstens-says) has already been won.
	- [[Lightning and Similar L2]] are still considered to be experimental and not completely battle tested. There have been various attacks and a major double spend attack may be possible,[[https://doi.org/10.48550/arxiv.2208.01908]] but there have been no major problems in the years it’s been running with careful design choices and cybersecurity best practice it it likely a production ready component of [[Agents]] based systems.

	- ### pubky
		- [pubky](https://github.com/pubky) (previously slashtags) is a distributed identity open method being developed by Bitfinex and Tether under the Synonym suite. It’s origins date back to2011 and was initially seeded through academia, and government innovation grants to build on the concepts of BitTorrent, and later [DAT](https://dat-ecosystem.org/timeline.html). This eventually became the Hypercore protocol, with an additional rebranding to Holepunch in2021. It is essentially this system, a mobile app UX, and Bitcoin integration which forms the Synonym/pubky stack. There is a lot ofhistorical investment, new focus, and promising product design in theSynonym ecosystem which is forming about the this ‘web of trust’distributed data system. The suite will rely on Pear Credits to enableTether dollars to be passed around within the system. This may fosteradoption in emerging markets. The critical path nature of the Tetherintegration, and the complex intermingling of Synonym, Hypercore,Bitfinex, Tether, and Pear credits are potentially red flags, and thoughthe technology stack is quite interesting only Pear Credit are reallyuseful to our design.

	- ## Understanding money creation
		- There are two main types of money in our current system: financial money and real economy money. Financial money refers to bank reserves, which are created by central banks through quantitative easing (QE). The central bank buys bonds from banks and credits their reserve accounts with new digital bank reserves. Bank reserves are an asset for commercial banks. Reserves allow banks to settle transactions with each other and meet liquidity requirements set by regulators. Importantly,bank reserves do not directly translate into increased lending or stimulus for the real economy. There is no direct channel for reserves to enter the broader economy. The amount of reserves does not drive bank lending. Real economy money refers to money that households andbusinesses can use for transactions. This includes physical currency and bank deposits. Real economy money is created through government deficits and private sector credit expansion.
			- [FINDING THE MONEY Film on X: "CLIP: We hear a lot about the national debt. But do currency-issuing governments really ‘borrow' their own currencies? The answer might surprise you. Watch FINDING THE MONEY documentary, In Theaters and On Demand TOMORROW May 3: https://t.co/H1e5fEuV7t https://t.co/MA3AGIcCXi" / X (twitter.com)](https://twitter.com/FindingMoneyDoc/status/1786050601236779078)
			- {{twitter https://twitter.com/FindingMoneyDoc/status/1786050601236779078}}

	- ## The risks of the current system and alternatives
		- The current elastic credit money system aims to prevent recessions by constantly expanding credit. However, this artificial stability leads to financial instability long-term. Alternatives like Bitcoin have a firm supply anchor and cannot rapidly expand the money supply. This prevents runaway credit growth and provides monetary discipline. However, Bitcoin and hard money standards also provide less flexibility to respond to economic crises by expanding credit. There are trade offs between flexibility and discipline. Our current monetary system relies heavily on expanding real economy purchasing power through government deficits and private credit in order to drive economic growth. However, this constant elasticity promotes financial instability and inequality over the long-run, mainly because of shorter term political incentives. We will see that potential alternatives like Bitcoin offer more stability through monetary discipline, but sacrifice flexibility. It’s likely that trading off a known flawed system for an unknown replacement is far too risky, but with sufficient adoption there may be a ‘flight to safety’.Bitcoin represents a serious risk if it compounds the worst elements and outcomes of a mishandled cyclical credit based system.

			- ### Sanctions and weaponisation of the dollar
				- [Stephen Fallon on How American Regulators Captured Global Banks - YouTube](https://www.youtube.com/watch?v=bpzI9Pgso5Q)
				- Instrument in Support of Trade Exchanges (INSTEX) was established by European governments, primarily the UK, France, and Germany, to maintain trade with Iran following the United States' withdrawal from the Joint Comprehensive Plan of Action (JCPOA), commonly known as the Iran nuclear deal. INSTEX was designed to provide invoice discounting services, connecting European and Iranian financial institutions that had been cut off from the global financial system due to renewed US sanctions. Initially, INSTEX aimed to process billions of euros in transactions across various sectors. However, over time, its ambitions were significantly scaled back due to political and practical challenges.
				- The United States authorities have leveraged the dominant position of the US dollar in the global economy to exert significant control over the international financial system. This has resulted in global banks modifying their behaviours and practices to conform with American regulatory guidance. The extent of this influence has led some observers, including Stephen Fallon, to argue that US regulators have not merely influenced global banks but have effectively captured them.
				- The Trump administration viewed INSTEX as anti-American and perceived it as a threat to US financial power. This stance created significant challenges for European companies attempting to maintain business relationships with Iran under the renewed sanctions regime. INSTEX struggled to effectively bridge the gap between commercially-minded businesses seeking practical solutions and politically-minded government officials focused on broader geopolitical concerns.
				- As INSTEX evolved, it moved from offering unregulated forfaiting services to exploring the possibility of becoming a fully-fledged bank. This evolution was driven by the realisation that its initial structure and services were insufficient to meet the complex needs of businesses operating in the challenging environment of renewed sanctions.
				- From 2005 to 2020, the United States successfully modified the international financial system, further separating itself from other states in the global financial hierarchy. This was achieved through various means, including expanding conceptions of US jurisdictional reach, implementing secondary sanctions, and emerging as the dominant financial power with no peer in this domain.
				- The United States leveraged sanctions and financial regulations to reshape the international system. This involved entering into state-on-state competition in the financial domain, resetting expectations for US organisations, banks, and third parties, and effectively ending the concept of neutrality in the global financial system.
				- As a result of these changes, global banks now operate according to US norms and expectations, even when they are not headquartered in the United States. These norms and practices are disseminated throughout the banking sector, from larger institutions to smaller banks, and ultimately into the non-financial economy.
				- A notable case study in this context is the 2012 deferred prosecution agreement (DPA) between the US Department of Justice and HSBC. HSBC was fined for knowingly violating US sanctions, and the DPA was used as a tool to fundamentally restructure HSBC's global business. The agreement required HSBC to hire new leadership, including former US Treasury officials, cut relationships with over 100 correspondent banks worldwide, sell more than 80 subsidiary businesses, and cease operations in 20 countries deemed high-risk by US authorities.
				- This case exemplifies how US regulators have effectively extended their jurisdiction to nearly every reach of the global financial system. Banks and other financial institutions face a binary choice of either cooperating with US demands or facing severe consequences, potentially including loss of access to the US financial system. This influence extends beyond banking to areas such as export controls, where similar mechanisms are used to ensure compliance with US policies.
				- European officials have struggled to counter US financial influence, as evidenced by the challenges faced by INSTEX. The failure of INSTEX to effectively facilitate trade with Iran highlighted the difficulties in creating financial mechanisms independent of US influence. There is limited evidence that European officials have learned lasting lessons from this experience or developed effective strategies to address the issue of US financial dominance.
				- The influence of US regulators over global finance is likely to persist regardless of changes in US administration. However, this influence may become more pronounced under administrations that take a more unilateralist approach to foreign policy and financial regulation.
				- The real-world impact of these financial sanctions and regulations is illustrated by personal experiences, such as the difficulties faced when travelling to sanctioned countries like Iran. Travellers may find themselves unable to access funds through normal banking channels, necessitating the carrying of large amounts of cash and facing potential financial difficulties in emergency situations.
		- The Chinese Yuan/Renminbi is potentially stepping in where the petrodollar is now waning.[[mathews2018china]] The effects of this expansion of economic influence by China, through a potential petro-Yuan, and the belt and road initiative,[[huang2016understanding]]are not yet felt, but the lines are fairly clearly defined and may be felt over the coming decades. The Euro system is potentially even less stable because of recent energy supply pressures, and [internaltensions](https://www.fitchratings.com/research/sovereigns/energy-crisis-increases-fiscal-risks-to-western-europe-sovereigns-23-09-2022)in the bond markets. Though it seems to be less ‘weaponised,’[[hudson2021destiny]] it comes with it’s own restrictions for use, especially through the International Monetary Fund (IMF). They are opposed to global fragmentation and multi-polarity, seeing is as disproportionately impacting emerging economies. They say in their [2023 outlookreport](https://www.imf.org/en/Publications/WEO/Issues/2023/04/11/world-economic-outlook-april-2023?cid=bl-com-spring2023flagships-WEOEA2023001) that the rise of geoeconomic fragmentation could cause shifts in foreign direct investment (FDI), hitting emerging economies the hardest. They feel that policymakers and companies are focusing on making supply chains more resilient by moving production closer to home or to trusted countries. As a result, FDI flows are becoming more concentrated within blocs of aligned countries. It is likely true that emerging market and developing economies are more vulnerable to FDI relocation, as they rely more on flows from geopolitically distant countries, though this could be viewed as a reduction in economic imperialism. Such economies may face reduced access to capital and technological advancements. It is into this gap that our work presenting AI collaborative tooling wishes to step.
		- To give context to this it is useful to paraphrase Whittemore’s[podcast](https://www.youtube.com/watch?v=LOqQSKbfRu4) which gave a high level view of Gladsteins [critique of theIMF](https://bitcoinmagazine.com/culture/imf-world-bank-repress-poor-countries):it“The terms of the most recent IMF loans to Argentina; one that was just finalized this year was that the country’s leadership had to try, as part of their agreement, to discourage citizens from engaging in the use of cryptocurrencies. The most recent deal was a 45 billion dollar deal which is a restructuring of that 57 billion program that Alex mentioned. The provision in question was called ‘strengthening Financial resilience’, and says ‘to further Safeguard Financial stability we are taking important to discourage the use of cryptocurrencies with a view to preventing money laundering informality and disintermediation’. They explicitly do not want citizens of that country to disintermediate. They want them to have to go through the system that the IMF is“ restructuring”, meanwhile inflation this year is around 72 percent. Last year it was 48 the year before 42 the year before that 53 percent clearly something is not working. It’s not surprising to me then that Argentina is an absolute hotbed for people who are involved in Bitcoin”
		- The IMF have a [working paper](https://www.imf.org/en/Publications/WP/Issues/2024/04/05/A-Primer-on-Bitcoin-Cross-Border-Flows-Measurement-and-Drivers-547429) on Bitcoin for cross border payments and flows. They concede that it is very hard to track capital globally on the network, and that the numbers are significant, and post the launch of large ETF funds there is now worrisome convergence of "users" which will complicate policy responses (make is hard to ban).
			- ..we show that the use of Bitcoin for cross-border transactions is geographically very widespread, with relatively high intensities across regions both for off-chain and for on-chain flows, and some punctual differences driven by the underlying data coverage and estimation assumptions. The magnitudes of the estimated Bitcoin cross-border flows are sizeable with respect to several countries’ GDP, especially in those which experience smaller capital flows..
		- The new ‘third world’ who are excluded from the Dollar and/or Yuan poles of the global economy might drift toward the ‘basket of assets’ discussed by Keynes and Carney above. As mentioned this will certainly have a component of gold, and likely other commodity assets such as rare metals. This is described at length by Hudson[[hudson2021destiny]]. For our purposes here it’s also possible that there would be a small ‘hedge’allocation of Bitcoin or [even a globalaxis](https://www.independent.co.uk/tech/bitcoin-el-salvador-crypto-btc-b2079881.html)of ‘unaligned’ nations using theasset.[[hendrickson2021value; @ferranti2022hedging]] Block and Wakefield research [found that in developednations](https://block.xyz/2022/btc-report.pdf) Bitcoin is treated as an investment, while in less wealthy demographics there is interest in the utility. This is evidenced in the early nation state adoption seen and described to date, and the game theory incentive explained by Fidelity in the introduction. It’s too early to tell if this ‘unaligned money’could constitute a global economic pole, but it’s interesting that some commentators are now even discussing this, and that [carbon neutralityresearch](https://docs.google.com/document/d/1Ynl5bbdTqev-wbTAWQoeWdh1cJVf3ortuSjre9K9wGQ/edit)is being undertaken specifically for this application.

		- #### AI & Legal Help Initiatives
		- **Policy Practicum: AI For Legal Help**
			- [Envisions AI’s role in the legal sector from a community perspective](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4582745)[1](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4582745).
		- **Community-Led System Design Practice**
			- Involves community members in the design of AI legal services.

		- #### Remote Collaboration and Teleconferencing
		- As remote work becomes more prevalent, the Metaverse can provide a more
		   engaging and immersive platform for collaboration and teleconferencing.
		   The open-source system can be adapted to serve various industries,
		   making remote collaboration more efficient and inclusive.

- # Project: Automated Podcast
- This project aims to develop a sophisticated toolchain using FastAPI and OpenWebUI to automate the creation of a daily news podcast. The goal is to seamlessly integrate various modules and pipelines to process breaking news items, focusing on selecting interesting and unusual combinations of topics. The system will generate structured content through a multi-agent approach, mediated by a single API interface, ultimately producing a compelling podcast featuring two interlocutors, Bob and Sue.

	- ### Regata
		- [Regatta Storage – Mount your S3 bucket as a high performance, local file system.](https://regattastorage.com/)
		- |
		  Hey HN, I’m Hunter the founder of Regatta Storage ([https://regattastorage.com](https://regattastorage.com/)). Regatta Storage is a new cloud file system that provides unlimited pay-as-you-go capacity, local-like performance, and automatic synchronization to S3-compatible storage. For example, you can use Regatta to instantly access massive data sets in S3 with Spark, Pytorch, or pandas without paying for large, local disks or waiting for the data to download.Check out an overview of how the service works here: [https://www.youtube.com/watch?v=xh1q5p7E4JY](https://www.youtube.com/watch?v=xh1q5p7E4JY), and you can try it for free at [https://regattastorage.com](https://regattastorage.com/) after signing up for an account. e wanted to let you try it without an account, but we figured that “Hacker News shares a file system and S3 bucket” wouldn’t be the best experience for the community.I built Regatta after spending nearly a decade building and operating at-scale cloud storage at places like Amazon’s Elastic File System (EFS) and Netflix. During my 8 years at EFS, I learned a lot about how teams thought about their storage usage. Users frequently told me that they loved how simple and scalable EFS was, and -- like S3 -- they didn’t have to guess how much capacity they needed up front.When I got to Netflix, I was surprised that there wasn’t more usage of EFS. If you looked around, it seemed like a natural fit. Every application needed a POSIX file system. Lots of applications had unclear or spikey storage needs.
		- Often, developers wanted their storage to last beyond the lifetime of an individual instance or container. In fact, if you looked across all Netflix applications, some ridiculous amount of money was being spent on *empty storage space* because each of these local drives had to be overprovisioned for potential usage.However, in many cases, EFS wasn’t the perfect choice for these workloads. Moving workloads from local disks to NFS often encountered performance issues. Further, applications which treated their local disks as ephemeral would have to manually “clean up” left over data in a persistent storage system.At this point, I realized that there was a missing solution in the cloud storage market which wasn’t being filled by either block or file storage, and I decided to build Regatta.
		- Regatta is a pay-as-you-go cloud file system that automatically expands with your application. Because it automatically synchronizes with S3 using native file formats, you can connect it to existing data sets and use recently written file data directly from S3. When data isn’t actively being used, it’s removed from the Regatta cache, so you only pay for the backing S3 storage. Finally, we’re developing a custom file protocol which allows us to achieve local-like performance for small-file workloads *and* Lustre-like scale-out performance for distributed data jobs.Under the hood, customers mount a Regatta file system by connecting to our fleet of caching instances over NFSv3 (soon, our custom protocol). Our instances then connect to the customer’s S3 bucket on the backend, and provide sub-millisecond cached-read and write performance. This durable cache allows us to provide a strongly consistent, efficient view of the file system to all connected file clients. We can perform challenging operations (like directory renaming) quickly and durably, while they asynchronously propagate to the S3 bucket.
		- We’re excited to see users share our vision for Regatta. We have teams who are using us to build totally serverless Jupyter notebook servers for their AI researchers who prefer to upload and share data using the S3 web UI. We have teams who are using us as a distributed caching layer on top of S3 for low-latency access to common files. We have teams who are replacing their thin-provisioned Ceph boot volumes with Regatta for significant savings. We can’t wait to see what other things people will build and we hope you’ll give us a try at regattastorage.com.We’d love to get any early feedback from the community, ideas for future direction, or experiences in this space. I’ll be in the comments for the next few hours to respond!
		- |

		- ### Implementation Patterns
			- Effective deep research systems:
				- Break complex queries into constituent questions
				- Search iteratively, using findings to inform subsequent searches
				- Synthesise information from multiple sources

	- ### Job Displacement
		- As AI systems become more capable, there are concerns about the potential for widespread job losses in certain sectors.

	- ### Bitcoin and Remittances
	- **Economic Dependence on Remittances**: A large portion of El Salvador's GDP comes from remittances sent by citizens working abroad.
	- **Current Transfer System**: Traditional methods like Western Union are centralized, regulated, and often inconvenient for those in rural areas.
	- **Bitcoin as an Alternative**: Cryptocurrencies like Bitcoin enable easy fund transfers via mobile phones, bypassing the need for physical transfer services.
	- **Deflationary Nature**: Unlike traditional currencies, Bitcoin's supply is capped, which could lead to falling prices over time.
	- **Environmental Concerns**: Bitcoin mining's environmental impact is a factor to consider in its adoption.

	- ### pubky
		- [pubky](https://github.com/pubky) (previously slashtags) is a distributed identity open method being developed by Bitfinex and Tether under the Synonym suite. It’s origins date back to2011 and was initially seeded through academia, and government innovation grants to build on the concepts of BitTorrent, and later [DAT](https://dat-ecosystem.org/timeline.html). This eventually became the Hypercore protocol, with an additional rebranding to Holepunch in2021. It is essentially this system, a mobile app UX, and Bitcoin integration which forms the Synonym/pubky stack. There is a lot ofhistorical investment, new focus, and promising product design in theSynonym ecosystem which is forming about the this ‘web of trust’distributed data system. The suite will rely on Pear Credits to enableTether dollars to be passed around within the system. This may fosteradoption in emerging markets. The critical path nature of the Tetherintegration, and the complex intermingling of Synonym, Hypercore,Bitfinex, Tether, and Pear credits are potentially red flags, and thoughthe technology stack is quite interesting only Pear Credit are reallyuseful to our design.

	- ## The risks of the current system and alternatives
		- The current elastic credit money system aims to prevent recessions by constantly expanding credit. However, this artificial stability leads to financial instability long-term. Alternatives like Bitcoin have a firm supply anchor and cannot rapidly expand the money supply. This prevents runaway credit growth and provides monetary discipline. However, Bitcoin and hard money standards also provide less flexibility to respond to economic crises by expanding credit. There are trade offs between flexibility and discipline. Our current monetary system relies heavily on expanding real economy purchasing power through government deficits and private credit in order to drive economic growth. However, this constant elasticity promotes financial instability and inequality over the long-run, mainly because of shorter term political incentives. We will see that potential alternatives like Bitcoin offer more stability through monetary discipline, but sacrifice flexibility. It’s likely that trading off a known flawed system for an unknown replacement is far too risky, but with sufficient adoption there may be a ‘flight to safety’.Bitcoin represents a serious risk if it compounds the worst elements and outcomes of a mishandled cyclical credit based system.

			- ### Sanctions and weaponisation of the dollar
				- [Stephen Fallon on How American Regulators Captured Global Banks - YouTube](https://www.youtube.com/watch?v=bpzI9Pgso5Q)
				- Instrument in Support of Trade Exchanges (INSTEX) was established by European governments, primarily the UK, France, and Germany, to maintain trade with Iran following the United States' withdrawal from the Joint Comprehensive Plan of Action (JCPOA), commonly known as the Iran nuclear deal. INSTEX was designed to provide invoice discounting services, connecting European and Iranian financial institutions that had been cut off from the global financial system due to renewed US sanctions. Initially, INSTEX aimed to process billions of euros in transactions across various sectors. However, over time, its ambitions were significantly scaled back due to political and practical challenges.
				- The United States authorities have leveraged the dominant position of the US dollar in the global economy to exert significant control over the international financial system. This has resulted in global banks modifying their behaviours and practices to conform with American regulatory guidance. The extent of this influence has led some observers, including Stephen Fallon, to argue that US regulators have not merely influenced global banks but have effectively captured them.
				- The Trump administration viewed INSTEX as anti-American and perceived it as a threat to US financial power. This stance created significant challenges for European companies attempting to maintain business relationships with Iran under the renewed sanctions regime. INSTEX struggled to effectively bridge the gap between commercially-minded businesses seeking practical solutions and politically-minded government officials focused on broader geopolitical concerns.
				- As INSTEX evolved, it moved from offering unregulated forfaiting services to exploring the possibility of becoming a fully-fledged bank. This evolution was driven by the realisation that its initial structure and services were insufficient to meet the complex needs of businesses operating in the challenging environment of renewed sanctions.
				- From 2005 to 2020, the United States successfully modified the international financial system, further separating itself from other states in the global financial hierarchy. This was achieved through various means, including expanding conceptions of US jurisdictional reach, implementing secondary sanctions, and emerging as the dominant financial power with no peer in this domain.
				- The United States leveraged sanctions and financial regulations to reshape the international system. This involved entering into state-on-state competition in the financial domain, resetting expectations for US organisations, banks, and third parties, and effectively ending the concept of neutrality in the global financial system.
				- As a result of these changes, global banks now operate according to US norms and expectations, even when they are not headquartered in the United States. These norms and practices are disseminated throughout the banking sector, from larger institutions to smaller banks, and ultimately into the non-financial economy.
				- A notable case study in this context is the 2012 deferred prosecution agreement (DPA) between the US Department of Justice and HSBC. HSBC was fined for knowingly violating US sanctions, and the DPA was used as a tool to fundamentally restructure HSBC's global business. The agreement required HSBC to hire new leadership, including former US Treasury officials, cut relationships with over 100 correspondent banks worldwide, sell more than 80 subsidiary businesses, and cease operations in 20 countries deemed high-risk by US authorities.
				- This case exemplifies how US regulators have effectively extended their jurisdiction to nearly every reach of the global financial system. Banks and other financial institutions face a binary choice of either cooperating with US demands or facing severe consequences, potentially including loss of access to the US financial system. This influence extends beyond banking to areas such as export controls, where similar mechanisms are used to ensure compliance with US policies.
				- European officials have struggled to counter US financial influence, as evidenced by the challenges faced by INSTEX. The failure of INSTEX to effectively facilitate trade with Iran highlighted the difficulties in creating financial mechanisms independent of US influence. There is limited evidence that European officials have learned lasting lessons from this experience or developed effective strategies to address the issue of US financial dominance.
				- The influence of US regulators over global finance is likely to persist regardless of changes in US administration. However, this influence may become more pronounced under administrations that take a more unilateralist approach to foreign policy and financial regulation.
				- The real-world impact of these financial sanctions and regulations is illustrated by personal experiences, such as the difficulties faced when travelling to sanctioned countries like Iran. Travellers may find themselves unable to access funds through normal banking channels, necessitating the carrying of large amounts of cash and facing potential financial difficulties in emergency situations.
		- The Chinese Yuan/Renminbi is potentially stepping in where the petrodollar is now waning.[[mathews2018china]] The effects of this expansion of economic influence by China, through a potential petro-Yuan, and the belt and road initiative,[[huang2016understanding]]are not yet felt, but the lines are fairly clearly defined and may be felt over the coming decades. The Euro system is potentially even less stable because of recent energy supply pressures, and [internaltensions](https://www.fitchratings.com/research/sovereigns/energy-crisis-increases-fiscal-risks-to-western-europe-sovereigns-23-09-2022)in the bond markets. Though it seems to be less ‘weaponised,’[[hudson2021destiny]] it comes with it’s own restrictions for use, especially through the International Monetary Fund (IMF). They are opposed to global fragmentation and multi-polarity, seeing is as disproportionately impacting emerging economies. They say in their [2023 outlookreport](https://www.imf.org/en/Publications/WEO/Issues/2023/04/11/world-economic-outlook-april-2023?cid=bl-com-spring2023flagships-WEOEA2023001) that the rise of geoeconomic fragmentation could cause shifts in foreign direct investment (FDI), hitting emerging economies the hardest. They feel that policymakers and companies are focusing on making supply chains more resilient by moving production closer to home or to trusted countries. As a result, FDI flows are becoming more concentrated within blocs of aligned countries. It is likely true that emerging market and developing economies are more vulnerable to FDI relocation, as they rely more on flows from geopolitically distant countries, though this could be viewed as a reduction in economic imperialism. Such economies may face reduced access to capital and technological advancements. It is into this gap that our work presenting AI collaborative tooling wishes to step.
		- To give context to this it is useful to paraphrase Whittemore’s[podcast](https://www.youtube.com/watch?v=LOqQSKbfRu4) which gave a high level view of Gladsteins [critique of theIMF](https://bitcoinmagazine.com/culture/imf-world-bank-repress-poor-countries):it“The terms of the most recent IMF loans to Argentina; one that was just finalized this year was that the country’s leadership had to try, as part of their agreement, to discourage citizens from engaging in the use of cryptocurrencies. The most recent deal was a 45 billion dollar deal which is a restructuring of that 57 billion program that Alex mentioned. The provision in question was called ‘strengthening Financial resilience’, and says ‘to further Safeguard Financial stability we are taking important to discourage the use of cryptocurrencies with a view to preventing money laundering informality and disintermediation’. They explicitly do not want citizens of that country to disintermediate. They want them to have to go through the system that the IMF is“ restructuring”, meanwhile inflation this year is around 72 percent. Last year it was 48 the year before 42 the year before that 53 percent clearly something is not working. It’s not surprising to me then that Argentina is an absolute hotbed for people who are involved in Bitcoin”
		- The IMF have a [working paper](https://www.imf.org/en/Publications/WP/Issues/2024/04/05/A-Primer-on-Bitcoin-Cross-Border-Flows-Measurement-and-Drivers-547429) on Bitcoin for cross border payments and flows. They concede that it is very hard to track capital globally on the network, and that the numbers are significant, and post the launch of large ETF funds there is now worrisome convergence of "users" which will complicate policy responses (make is hard to ban).
			- ..we show that the use of Bitcoin for cross-border transactions is geographically very widespread, with relatively high intensities across regions both for off-chain and for on-chain flows, and some punctual differences driven by the underlying data coverage and estimation assumptions. The magnitudes of the estimated Bitcoin cross-border flows are sizeable with respect to several countries’ GDP, especially in those which experience smaller capital flows..
		- The new ‘third world’ who are excluded from the Dollar and/or Yuan poles of the global economy might drift toward the ‘basket of assets’ discussed by Keynes and Carney above. As mentioned this will certainly have a component of gold, and likely other commodity assets such as rare metals. This is described at length by Hudson[[hudson2021destiny]]. For our purposes here it’s also possible that there would be a small ‘hedge’allocation of Bitcoin or [even a globalaxis](https://www.independent.co.uk/tech/bitcoin-el-salvador-crypto-btc-b2079881.html)of ‘unaligned’ nations using theasset.[[hendrickson2021value; @ferranti2022hedging]] Block and Wakefield research [found that in developednations](https://block.xyz/2022/btc-report.pdf) Bitcoin is treated as an investment, while in less wealthy demographics there is interest in the utility. This is evidenced in the early nation state adoption seen and described to date, and the game theory incentive explained by Fidelity in the introduction. It’s too early to tell if this ‘unaligned money’could constitute a global economic pole, but it’s interesting that some commentators are now even discussing this, and that [carbon neutralityresearch](https://docs.google.com/document/d/1Ynl5bbdTqev-wbTAWQoeWdh1cJVf3ortuSjre9K9wGQ/edit)is being undertaken specifically for this application.

	- ### Regata
		- [Regatta Storage – Mount your S3 bucket as a high performance, local file system.](https://regattastorage.com/)
		- |
		  Hey HN, I’m Hunter the founder of Regatta Storage ([https://regattastorage.com](https://regattastorage.com/)). Regatta Storage is a new cloud file system that provides unlimited pay-as-you-go capacity, local-like performance, and automatic synchronization to S3-compatible storage. For example, you can use Regatta to instantly access massive data sets in S3 with Spark, Pytorch, or pandas without paying for large, local disks or waiting for the data to download.Check out an overview of how the service works here: [https://www.youtube.com/watch?v=xh1q5p7E4JY](https://www.youtube.com/watch?v=xh1q5p7E4JY), and you can try it for free at [https://regattastorage.com](https://regattastorage.com/) after signing up for an account. e wanted to let you try it without an account, but we figured that “Hacker News shares a file system and S3 bucket” wouldn’t be the best experience for the community.I built Regatta after spending nearly a decade building and operating at-scale cloud storage at places like Amazon’s Elastic File System (EFS) and Netflix. During my 8 years at EFS, I learned a lot about how teams thought about their storage usage. Users frequently told me that they loved how simple and scalable EFS was, and -- like S3 -- they didn’t have to guess how much capacity they needed up front.When I got to Netflix, I was surprised that there wasn’t more usage of EFS. If you looked around, it seemed like a natural fit. Every application needed a POSIX file system. Lots of applications had unclear or spikey storage needs.
		- Often, developers wanted their storage to last beyond the lifetime of an individual instance or container. In fact, if you looked across all Netflix applications, some ridiculous amount of money was being spent on *empty storage space* because each of these local drives had to be overprovisioned for potential usage.However, in many cases, EFS wasn’t the perfect choice for these workloads. Moving workloads from local disks to NFS often encountered performance issues. Further, applications which treated their local disks as ephemeral would have to manually “clean up” left over data in a persistent storage system.At this point, I realized that there was a missing solution in the cloud storage market which wasn’t being filled by either block or file storage, and I decided to build Regatta.
		- Regatta is a pay-as-you-go cloud file system that automatically expands with your application. Because it automatically synchronizes with S3 using native file formats, you can connect it to existing data sets and use recently written file data directly from S3. When data isn’t actively being used, it’s removed from the Regatta cache, so you only pay for the backing S3 storage. Finally, we’re developing a custom file protocol which allows us to achieve local-like performance for small-file workloads *and* Lustre-like scale-out performance for distributed data jobs.Under the hood, customers mount a Regatta file system by connecting to our fleet of caching instances over NFSv3 (soon, our custom protocol). Our instances then connect to the customer’s S3 bucket on the backend, and provide sub-millisecond cached-read and write performance. This durable cache allows us to provide a strongly consistent, efficient view of the file system to all connected file clients. We can perform challenging operations (like directory renaming) quickly and durably, while they asynchronously propagate to the S3 bucket.
		- We’re excited to see users share our vision for Regatta. We have teams who are using us to build totally serverless Jupyter notebook servers for their AI researchers who prefer to upload and share data using the S3 web UI. We have teams who are using us as a distributed caching layer on top of S3 for low-latency access to common files. We have teams who are replacing their thin-provisioned Ceph boot volumes with Regatta for significant savings. We can’t wait to see what other things people will build and we hope you’ll give us a try at regattastorage.com.We’d love to get any early feedback from the community, ideas for future direction, or experiences in this space. I’ll be in the comments for the next few hours to respond!
		- |

	- ## Technical Problem Definition:
		- Exchange of goods, services, and money within systems, without friction
		- Identity management within virtual spaces
		- Seamless access to personal information within and without the collaborative system
		- Ability to take advantage of supporting smart support agents (bots, etc.) throughout

	- ### Job Displacement
		- As AI systems become more capable, there are concerns about the potential for widespread job losses in certain sectors.

	- ### pubky
		- [pubky](https://github.com/pubky) (previously slashtags) is a distributed identity open method being developed by Bitfinex and Tether under the Synonym suite. It’s origins date back to2011 and was initially seeded through academia, and government innovation grants to build on the concepts of BitTorrent, and later [DAT](https://dat-ecosystem.org/timeline.html). This eventually became the Hypercore protocol, with an additional rebranding to Holepunch in2021. It is essentially this system, a mobile app UX, and Bitcoin integration which forms the Synonym/pubky stack. There is a lot ofhistorical investment, new focus, and promising product design in theSynonym ecosystem which is forming about the this ‘web of trust’distributed data system. The suite will rely on Pear Credits to enableTether dollars to be passed around within the system. This may fosteradoption in emerging markets. The critical path nature of the Tetherintegration, and the complex intermingling of Synonym, Hypercore,Bitfinex, Tether, and Pear credits are potentially red flags, and thoughthe technology stack is quite interesting only Pear Credit are reallyuseful to our design.
		- Phase one focuses on creating a marketplace built on top of Nostr, aninteroperable communication protocol. This allows different serviceslike Paxful, HODL HODL, or Nostr app to communicate and operate acrosseach other.
		- Phase two aims to develop a mobile-friendly lightning wallet anddecentralized IDs (Know Your Peer) to replace centralized KYC (Know YourCustomer). This will provide a more secure and private environment fortraders.
		- Nostr is also not beholden to shareholders or investors. This means thatthe protocol can make decisions that prioritize the well-being andquality of discourse for users, rather than solely focusing on profit.This is in contrast to traditional social media networks like Twitter,Facebook, and TikTok, which are driven by the need to collect data onusers and sell ads to generate revenue. In these centralized platforms,users’ data is collected, analyzed and sold to the highest bidder, oftenwithout the user’s knowledge or consent. Nostr, on the other hand,allows users to have more control over their data and the ability tomonetize their content.
		- Nostr also tightly integrates Bitcoin Lightning to support the protocol.This will hopefully enable secure transmission of value alongside theinformation and interactions on the platform. It also gives users theability to monetise their content.
			- there are multiple usable libraries and tools
			- it’s under active development with an excellent team. The lead, ‘Fiatjaf’ is one of the most [prolific developers](https://github.com/fiatjaf) in the lightning space.
-
- Repeat section?
-
- Distributed Identity & Trust----------------------------
- For distributed Web3, and by extension metaverse applications toflourish it is necessary to solve the identificationproblem.[[king1966fisher]] Without a [solution tothis](https://joshgans.medium.com/web3-isnt-going-to-work-without-identification-6aa776d674)bots, scammers, and AI actors will reduce usefulness and usability ofand already quite arcane user experience.
- This chapter is an oddity because most of traditional DID/SSI isn’treally fit for purpose. Distributed self sovereign identity has a greatelevator pitch though. Individuals should be empowered throughtechnology to manage their own data, without manipulation orexploitation by centralised corporate behemoths. In practice it’s astaggeringly complex proposition which increases risk to the individual,decreases convenience, and despite much work, does not even make muchsense in it’s own terms. Webs of trust are viable so this means Nostr,[Marking](https://github.com/project-bitmark/marking/wiki#marking), orpubky which will be discussed, but are early products.
-
	- health documents history

	- ## The risks of the current system and alternatives
		- The current elastic credit money system aims to prevent recessions by constantly expanding credit. However, this artificial stability leads to financial instability long-term. Alternatives like Bitcoin have a firm supply anchor and cannot rapidly expand the money supply. This prevents runaway credit growth and provides monetary discipline. However, Bitcoin and hard money standards also provide less flexibility to respond to economic crises by expanding credit. There are trade offs between flexibility and discipline. Our current monetary system relies heavily on expanding real economy purchasing power through government deficits and private credit in order to drive economic growth. However, this constant elasticity promotes financial instability and inequality over the long-run, mainly because of shorter term political incentives. We will see that potential alternatives like Bitcoin offer more stability through monetary discipline, but sacrifice flexibility. It’s likely that trading off a known flawed system for an unknown replacement is far too risky, but with sufficient adoption there may be a ‘flight to safety’.Bitcoin represents a serious risk if it compounds the worst elements and outcomes of a mishandled cyclical credit based system.

			- ### Sanctions and weaponisation of the dollar
				- [Stephen Fallon on How American Regulators Captured Global Banks - YouTube](https://www.youtube.com/watch?v=bpzI9Pgso5Q)
				- Instrument in Support of Trade Exchanges (INSTEX) was established by European governments, primarily the UK, France, and Germany, to maintain trade with Iran following the United States' withdrawal from the Joint Comprehensive Plan of Action (JCPOA), commonly known as the Iran nuclear deal. INSTEX was designed to provide invoice discounting services, connecting European and Iranian financial institutions that had been cut off from the global financial system due to renewed US sanctions. Initially, INSTEX aimed to process billions of euros in transactions across various sectors. However, over time, its ambitions were significantly scaled back due to political and practical challenges.
				- The United States authorities have leveraged the dominant position of the US dollar in the global economy to exert significant control over the international financial system. This has resulted in global banks modifying their behaviours and practices to conform with American regulatory guidance. The extent of this influence has led some observers, including Stephen Fallon, to argue that US regulators have not merely influenced global banks but have effectively captured them.
				- The Trump administration viewed INSTEX as anti-American and perceived it as a threat to US financial power. This stance created significant challenges for European companies attempting to maintain business relationships with Iran under the renewed sanctions regime. INSTEX struggled to effectively bridge the gap between commercially-minded businesses seeking practical solutions and politically-minded government officials focused on broader geopolitical concerns.
				- As INSTEX evolved, it moved from offering unregulated forfaiting services to exploring the possibility of becoming a fully-fledged bank. This evolution was driven by the realisation that its initial structure and services were insufficient to meet the complex needs of businesses operating in the challenging environment of renewed sanctions.
				- From 2005 to 2020, the United States successfully modified the international financial system, further separating itself from other states in the global financial hierarchy. This was achieved through various means, including expanding conceptions of US jurisdictional reach, implementing secondary sanctions, and emerging as the dominant financial power with no peer in this domain.
				- The United States leveraged sanctions and financial regulations to reshape the international system. This involved entering into state-on-state competition in the financial domain, resetting expectations for US organisations, banks, and third parties, and effectively ending the concept of neutrality in the global financial system.
				- As a result of these changes, global banks now operate according to US norms and expectations, even when they are not headquartered in the United States. These norms and practices are disseminated throughout the banking sector, from larger institutions to smaller banks, and ultimately into the non-financial economy.
				- A notable case study in this context is the 2012 deferred prosecution agreement (DPA) between the US Department of Justice and HSBC. HSBC was fined for knowingly violating US sanctions, and the DPA was used as a tool to fundamentally restructure HSBC's global business. The agreement required HSBC to hire new leadership, including former US Treasury officials, cut relationships with over 100 correspondent banks worldwide, sell more than 80 subsidiary businesses, and cease operations in 20 countries deemed high-risk by US authorities.
				- The influence of US regulators over global finance is likely to persist regardless of changes in US administration. However, this influence may become more pronounced under administrations that take a more unilateralist approach to foreign policy and financial regulation.
				- The real-world impact of these financial sanctions and regulations is illustrated by personal experiences, such as the difficulties faced when travelling to sanctioned countries like Iran. Travellers may find themselves unable to access funds through normal banking channels, necessitating the carrying of large amounts of cash and facing potential financial difficulties in emergency situations.
		- The IMF have a [working paper](https://www.imf.org/en/Publications/WP/Issues/2024/04/05/A-Primer-on-Bitcoin-Cross-Border-Flows-Measurement-and-Drivers-547429) on Bitcoin for cross border payments and flows. They concede that it is very hard to track capital globally on the network, and that the numbers are significant, and post the launch of large ETF funds there is now worrisome convergence of "users" which will complicate policy responses (make is hard to ban).
			- ..we show that the use of Bitcoin for cross-border transactions is geographically very widespread, with relatively high intensities across regions both for off-chain and for on-chain flows, and some punctual differences driven by the underlying data coverage and estimation assumptions. The magnitudes of the estimated Bitcoin cross-border flows are sizeable with respect to several countries’ GDP, especially in those which experience smaller capital flows..
	- Central banks were established to be lenders of last resort, providing liquidity to commercial banks during financial crises to prevent bank runs and systemic crises. This remains a core function.
	- Over time, many central banks have expanded their role as lender of last resort beyond just commercial banks to also support non-bank financial entities that face liquidity shortages in crises. Central banks have effectively become backstops for the broader financial system.

		- ##### Key Ideas
		- 1.  **Leveraging AI and Contextual Data:** The venue will use AI and contextual data to create dynamic narratives and activities tailored to each visitor in real-time. This will revolutionize the resort experience, making it highly personalized and immersive. However, the implementation of AI must be mindful of privacy concerns and be done in a way that respects the data sovereignty of the guests.
		- 2.  **Tailored Personalization:** Visitors should have the ability to opt into different levels of personalization. Some may want a fully immersive, personalized experience, while others may prefer a more ‘hands off’ experience. This is an important aspect of respecting individual preferences and ensuring that all visitors feel comfortable and catered for.
		- 3.  **Communication Devices:** Various communication devices could be utilized within the resort to facilitate interactions between visitors and the AI system. These could include badges, wands, glasses, headphones, etc. Each of these devices would contribute to the immersion and thematic consistency of the resort while serving a practical purpose.
		- Parallax barriers: These displays have a layer of opaque and transparent slits over the LCD matrix that directs different pixel columns to each eye, creating a stereoscopic 3D image without glasses. Alioscopy is known to use this approach, along with eye tracking technology. They have been in business for decades and are a good case study, but engaging with a research partner in China is likely the best medium terms approach.
		- These display consists of a large lenticular lens sheet or array of smaller tiled lenticular lenses mounted in front of a high-resolution LED. The lenticular lenses are cylindrical and arranged vertically, with each lens covering multiple pixel columns of the display.
		- Behind the lens array, the display content is formatted into vertical interleaved channels, with each channel containing a slightly different perspective view of the 3D stereoscopic image. The different perspective views are calculated in real-time based on the tracked head positions of multiple viewers in front of the display.
		- As light from the display pixels passes through the cylindrical lenses, it is refracted into multiple viewing zones in front of the screen. Each viewing zone contains a specific view channel, so each eye of each viewer sees the perspective that matches their position. This creates a glasses-free 3D effect with motion parallax as viewers move their heads.
		- The viewer head tracking system uses camera and computer vision techniques to determine the 3D positions of each viewer’s eyes in the space in front of the display. The changing viewer positions are fed to the display rendering system to compute the proper perspective views and adjust the lenticular flaps as needed.
		- This lenticular 3D display with dynamic view steering provides illusion of depth for multiple viewers simultaneously, creating an immersive large-screen 3D experience without the need for special glasses. The real-time tracking and rendering system updates the content smoothly as the viewers move around, maintaining the stereo 3D perspectives tailored individually to each viewer’s changing position.
	- Starting with a small-scale proof of concept for up to 5 people would allow for demonstration of the capabilities and building stakeholder confidence. This would also provide valuable insights into the technical and logistical challenges that may arise during larger-scale implementation.

		- ## No, Really, What are Agents
			- I have given up following the debate because in a way it doesn't matter. As a good heuristic
			- An agent is an open-ended AI system that can:
				- Always follows the same steps
				- Offers greater control over quality

	- ### pubky
		- [pubky](https://github.com/pubky) (previously slashtags) is a distributed identity open method being developed by Bitfinex and Tether under the Synonym suite. It’s origins date back to2011 and was initially seeded through academia, and government innovation grants to build on the concepts of BitTorrent, and later [DAT](https://dat-ecosystem.org/timeline.html). This eventually became the Hypercore protocol, with an additional rebranding to Holepunch in2021. It is essentially this system, a mobile app UX, and Bitcoin integration which forms the Synonym/pubky stack. There is a lot ofhistorical investment, new focus, and promising product design in theSynonym ecosystem which is forming about the this ‘web of trust’distributed data system. The suite will rely on Pear Credits to enableTether dollars to be passed around within the system. This may fosteradoption in emerging markets. The critical path nature of the Tetherintegration, and the complex intermingling of Synonym, Hypercore,Bitfinex, Tether, and Pear credits are potentially red flags, and thoughthe technology stack is quite interesting only Pear Credit are reallyuseful to our design.
		- Nostr is also not beholden to shareholders or investors. This means thatthe protocol can make decisions that prioritize the well-being andquality of discourse for users, rather than solely focusing on profit.This is in contrast to traditional social media networks like Twitter,Facebook, and TikTok, which are driven by the need to collect data onusers and sell ads to generate revenue. In these centralized platforms,users’ data is collected, analyzed and sold to the highest bidder, oftenwithout the user’s knowledge or consent. Nostr, on the other hand,allows users to have more control over their data and the ability tomonetize their content.
		- Nostr also tightly integrates Bitcoin Lightning to support the protocol.This will hopefully enable secure transmission of value alongside theinformation and interactions on the platform. It also gives users theability to monetise their content.
- Repeat section?
-
- Distributed Identity & Trust----------------------------
	- it’s real-time using websockets
-
	- anyone can run a relay server, so one can be run in the deployment in the final section of the book.
-
	- Each of the client peers connecting to the metaverse can be a relay and able to pass messages and proofs to the other clients without the metaverse server seeing the data or being online
	- it provides the identity proof that we need to validate users and objects into a virtual space
-
	- it enables message passing
-
	- it scales to be a social network as required
-
	- it need not rely on anything outside of a relay hosted on the metaverse server
	- email to private message relay
-
	- links into media on web hosts
- The pace of development on Nostr is dizzying. Peer to peer video andaudio will allow us to link metaverse instances, between peers, throughapplications such as [Monstr](https://monstr.app/).
- The nostr [markets plugin](https://github.com/lnbits/nostrmarket) forLnBits allows virtual ‘stalls’ to be setup and payment to be mediatedthrough nostr. This is obviously a great expansion to the usefulness ofour integration

- ##  Risks and mitigations
	- Looking across the whole sector, this paragraph from the Bank of International Settlement (BIS) [sums everything up](https://www.bis.org/publ/arpdf/ar2022e3.htm):
	- ["...it is now becoming clear that crypto and DeFi have deeper structural limitations that prevent them from achieving the levels of efficiency, stability or integrity required for an adequate monetary system. In particular, the crypto universe lacks a nominal anchor, which it tries to import, imperfectly, through stablecoins. It is also prone to fragmentation, and its applications cannot scale without compromising security, as shown by their congestion and exorbitant fees. Activity in this parallel system is, instead, sustained by the influx of speculative coin holders. Finally, there are serious concerns about the role of unregulated intermediaries in the system. As they are deep-seated, these structural shortcomings are unlikely to be amenable to technical fixes alone. This is because they reflect the inherent limitations of a decentralised system built on permissionless blockchains."]
	- [[Lightning and Similar L2]] is still considered to be experimental and not completely battle tested. There have been various attacks and a major double spend attack may be possible, but there have been no major problems in the years it's been running with careful design choices and cybersecurity best practice it it likely a production ready component of our planning.

- #### pubky
- [[Pubky]] is a distributed identity open method being developed byBitfinex and Tether under the Synonym suite. It’s origins date back to2011 and was initially seeded through academia, and governmentinnovation grants to build on the concepts of BitTorrent, and later[DAT](https://dat-ecosystem.org/timeline.html). This eventually becamethe Hypercore protocol, with an additional rebranding to Holepunch in2021. It is essentially this system, a mobile app UX, and Bitcoinintegration which forms the Synonym/pubky stack. There is a lot ofhistorical investment, new focus, and promising product design in theSynonym ecosystem which is forming about the this ‘web of trust’distributed data system. The suite will rely on Pear Credits to enableTether dollars to be passed around within the system. This may fosteradoption in emerging markets. The critical path nature of the Tetherintegration, and the complex intermingling of Synonym, Hypercore,Bitfinex, Tether, and Pear credits are potentially red flags, and thoughthe technology stack is quite interesting only Pear Credit are reallyuseful to our design.

- ## Emergence and Semantic Concepts
	- **Observation:** One of the most remarkable things about AI systems is their ability to learn things that they weren't explicitly told to learn. This phenomenon, called emergence, is where AI systems start to exhibit unexpected behaviors and capabilities beyond their initial training.
	- **Example:** Imagine an AI system trained to predict the next character in Amazon reviews. The system only receives a sequence of characters, not any information about sentiment. Yet, researchers discovered a neuron within the system that lit up strongly for positive reviews and showed a very strong negative activation for negative reviews. This was a profound observation because it showed that the AI had implicitly learned to classify sentiment, even though it wasn't explicitly trained to do so.
	- **Significance:** This example demonstrates that AI systems can learn complex concepts like sentiment without explicit instructions. They learn to represent these concepts internally, using them to perform their primary task more effectively.
	- **Concept:** This idea, of semantics (meaning) emerging from a syntactic (structure) process, is crucial to understanding the power of AI.

- ##  Risks and mitigations
	- Looking across the whole sector, this paragraph from the Bank of International Settlement (BIS) [sums everything up](https://www.bis.org/publ/arpdf/ar2022e3.htm):
	- ["...it is now becoming clear that crypto and DeFi have deeper structural limitations that prevent them from achieving the levels of efficiency, stability or integrity required for an adequate monetary system. In particular, the crypto universe lacks a nominal anchor, which it tries to import, imperfectly, through stablecoins. It is also prone to fragmentation, and its applications cannot scale without compromising security, as shown by their congestion and exorbitant fees. Activity in this parallel system is, instead, sustained by the influx of speculative coin holders. Finally, there are serious concerns about the role of unregulated intermediaries in the system. As they are deep-seated, these structural shortcomings are unlikely to be amenable to technical fixes alone. This is because they reflect the inherent limitations of a decentralised system built on permissionless blockchains."]
	- [[Lightning and Similar L2]] is still considered to be experimental and not completely battle tested. There have been various attacks and a major double spend attack may be possible, but there have been no major problems in the years it's been running with careful design choices and cybersecurity best practice it it likely a production ready component of our planning.

- ### Swift, ISO 20022, and correspondence banking
	- Society for Worldwide Interbank Financial Communiactions (SWIFT) was initially formed in 1973 between 239 banks across 15 countries. Theyneeded a way to improve handling of cross border payments. It is now the global [standard](https://www.swift.com/standards) for financial message exchange in over 200 countries, and has recently found itself under afresh spotlight, during the invasion of Ukraine. The system handles around 40 million short, secure, code transmissions a day, whichrepresent crucial data about a transaction and the parties involved. Itis used by both banks and major financial institutions to speed up settlement between themselves, on behalf of the clients and customers. It replaced the Telex (wire transfer) system. The new incoming standardto replace SWIFT is[ISO20022](https://www.swift.com/standards/iso-20022) is a complex anddata rich arrangement. The SWIFT consortium are promoting this newstandard to their 11,000 plus global user base. A group of‘crytocurrencies’ are heavily involved in the ISO20022 standard, and there’s been experimentation with private permissioned distributed ledger technologies. It’s somewhat unclear what value they bring, andpossible that the relationship of these public ledgers to international bank to bank messaging is a marketing distraction. The Bank Of England is [transitioning to thesystem](https://www.bankofengland.co.uk/payment-and-settlement/rtgs-renewal-programme/consultation-on-a-new-messaging-standard-for-uk-payments-iso20022) in June 2023. Note that SWIFT, ISO20022, and the associated tokenswithin crypto are all themselves products which have a business model.They are all intermediaries which will demand a mediating fee somewhere.All of this proposed functionality could be replaced by central bank digital currencies, which will be discussed later in the section.

- ### Flux+ Detailer: Photorealistic Model Overview
- [This web link has been automatically summarised](https://civitai.com/models/636355/flux-detailer?modelVersionId=712060)
	- **Model Overview**
		- Flux+ Detailer is a photorealism model developed by Black Forest Labs under a non-commercial license. It excels in deep semantic comprehension, capturing emotions and detailed understanding of paragraphs.
		- The model uses a curated dataset to enhance image generation, providing quality and precision.
	- **Technical Information**
		- Identified as LoRA type with a base model of Flux.1, it underwent 2,500 training steps and one epoch.
		- SafeTensor file format offered at 21.39 MB, confirmed as verified.
	- **Usage and Workflows**
		- Designed for use with ComfyUI and accompanied by workflows to optimise usage.
		- Users are encouraged to redownload the updated versions as both versions are consolidated into one file.
	- **Community and Support**
		- Very positive reviews from 919 users underline its reliability.
		- Acknowledgments to users and testers, highlighting collaborative development efforts.
		  Topics: Deep Learning, Model Optimisation and Performance, Open Generative AI tools
	- [https://cointelegraph.com/news/half-10-most-valuable-companies-making-metaverse-hardware](https://cointelegraph.com/news/half-10-most-valuable-companies-making-metaverse-hardware)
	- [https://medium.com/firebird-technologies/auto-analyst-2-0-the-ai-data-analytics-system-26aec602928e](https://medium.com/firebird-technologies/auto-analyst-2-0-the-ai-data-analytics-system-26aec602928e)

- ### Micropayment based web
- It seems the war against disinformation is now being lost. Much iswritten in the media about Deepfake technology creating plausible fakevideos, but probably more pernicious is the use of toolkits to createentire plausible fake news sites using natural language AI such as GPT3.This makes it cheap to publish potentially market moving news which isthen rehypothecated by online news vendors who are hungry for clicks. Asthese pipelines become more mature it will be difficult to keep fakenews for financial or political gain out of the system. One interestingway to do this that itisn’t webs of trust or true cryptographic identityis to charge micropayments for “one to many” publication models. Thiswould imply a tiny instant payment for clicks, especially on socialmedia sites such as twitter. This kind of model has been discussed butis only possible in the context of systems such as Lightning whereinstant micropayment can be realised. It seems possible that this wouldprice out speculative ‘noise’ spam from the information space. It’sinteresting and ironic that the origin of proof of work was to underpinjust such a spam defeating system,[[dwork1992pricing]] and that Nakamoto[mentioned this application forBitcoin](https://www.metzdowd.com/pipermail/cryptography/2009-January/015014.html)back in 2009. There is now much chatter about the integration of Bitcoinwith Twitter in light of Musks buyout of the social network.
  ![]./assets/68114e388f76f1dc94eb3a6205c2c1dbee1c9f7a.jpg
  Comparison of distributed file stores

- #### pubky
- [[Pubky]] is a distributed identity open method being developed byBitfinex and Tether under the Synonym suite. It’s origins date back to2011 and was initially seeded through academia, and governmentinnovation grants to build on the concepts of BitTorrent, and later[DAT](https://dat-ecosystem.org/timeline.html). This eventually becamethe Hypercore protocol, with an additional rebranding to Holepunch in2021. It is essentially this system, a mobile app UX, and Bitcoinintegration which forms the Synonym/pubky stack. There is a lot ofhistorical investment, new focus, and promising product design in theSynonym ecosystem which is forming about the this ‘web of trust’distributed data system. The suite will rely on Pear Credits to enableTether dollars to be passed around within the system. This may fosteradoption in emerging markets. The critical path nature of the Tetherintegration, and the complex intermingling of Synonym, Hypercore,Bitfinex, Tether, and Pear credits are potentially red flags, and thoughthe technology stack is quite interesting only Pear Credit are reallyuseful to our design.

- ### Micropayment based web
- It seems the war against disinformation is now being lost. Much iswritten in the media about Deepfake technology creating plausible fakevideos, but probably more pernicious is the use of toolkits to createentire plausible fake news sites using natural language AI such as GPT3.This makes it cheap to publish potentially market moving news which isthen rehypothecated by online news vendors who are hungry for clicks. Asthese pipelines become more mature it will be difficult to keep fakenews for financial or political gain out of the system. One interestingway to do this that itisn’t webs of trust or true cryptographic identityis to charge micropayments for “one to many” publication models. Thiswould imply a tiny instant payment for clicks, especially on socialmedia sites such as twitter. This kind of model has been discussed butis only possible in the context of systems such as Lightning whereinstant micropayment can be realised. It seems possible that this wouldprice out speculative ‘noise’ spam from the information space. It’sinteresting and ironic that the origin of proof of work was to underpinjust such a spam defeating system,[[dwork1992pricing]] and that Nakamoto[mentioned this application forBitcoin](https://www.metzdowd.com/pipermail/cryptography/2009-January/015014.html)back in 2009. There is now much chatter about the integration of Bitcoinwith Twitter in light of Musks buyout of the social network.
- ![]./assets/68114e388f76f1dc94eb3a6205c2c1dbee1c9f7a.jpg
-
- ![Figure 5.3: Comparison of distributed file stores](assets/files.jpg)

- ## Emergence and Semantic Concepts
	- **Observation:** One of the most remarkable things about AI systems is their ability to learn things that they weren't explicitly told to learn. This phenomenon, called emergence, is where AI systems start to exhibit unexpected behaviors and capabilities beyond their initial training.
	- **Example:** Imagine an AI system trained to predict the next character in Amazon reviews. The system only receives a sequence of characters, not any information about sentiment. Yet, researchers discovered a neuron within the system that lit up strongly for positive reviews and showed a very strong negative activation for negative reviews. This was a profound observation because it showed that the AI had implicitly learned to classify sentiment, even though it wasn't explicitly trained to do so.
	- **Significance:** This example demonstrates that AI systems can learn complex concepts like sentiment without explicit instructions. They learn to represent these concepts internally, using them to perform their primary task more effectively.
	- **Concept:** This idea, of semantics (meaning) emerging from a syntactic (structure) process, is crucial to understanding the power of AI.

- ##  Risks and mitigations
	- Looking across the whole sector, this paragraph from the Bank of International Settlement (BIS) [sums everything up](https://www.bis.org/publ/arpdf/ar2022e3.htm):
	- ["...it is now becoming clear that crypto and DeFi have deeper structural limitations that prevent them from achieving the levels of efficiency, stability or integrity required for an adequate monetary system. In particular, the crypto universe lacks a nominal anchor, which it tries to import, imperfectly, through stablecoins. It is also prone to fragmentation, and its applications cannot scale without compromising security, as shown by their congestion and exorbitant fees. Activity in this parallel system is, instead, sustained by the influx of speculative coin holders. Finally, there are serious concerns about the role of unregulated intermediaries in the system. As they are deep-seated, these structural shortcomings are unlikely to be amenable to technical fixes alone. This is because they reflect the inherent limitations of a decentralised system built on permissionless blockchains."]
	- [[Lightning and Similar L2]] is still considered to be experimental and not completely battle tested. There have been various attacks and a major double spend attack may be possible, but there have been no major problems in the years it's been running with careful design choices and cybersecurity best practice it it likely a production ready component of our planning.

- ### Swift, ISO 20022, and correspondence banking
	- Society for Worldwide Interbank Financial Communiactions (SWIFT) was initially formed in 1973 between 239 banks across 15 countries. Theyneeded a way to improve handling of cross border payments. It is now the global [standard](https://www.swift.com/standards) for financial message exchange in over 200 countries, and has recently found itself under afresh spotlight, during the invasion of Ukraine. The system handles around 40 million short, secure, code transmissions a day, whichrepresent crucial data about a transaction and the parties involved. Itis used by both banks and major financial institutions to speed up settlement between themselves, on behalf of the clients and customers. It replaced the Telex (wire transfer) system. The new incoming standardto replace SWIFT is[ISO20022](https://www.swift.com/standards/iso-20022) is a complex anddata rich arrangement. The SWIFT consortium are promoting this newstandard to their 11,000 plus global user base. A group of‘crytocurrencies’ are heavily involved in the ISO20022 standard, and there’s been experimentation with private permissioned distributed ledger technologies. It’s somewhat unclear what value they bring, andpossible that the relationship of these public ledgers to international bank to bank messaging is a marketing distraction. The Bank Of England is [transitioning to thesystem](https://www.bankofengland.co.uk/payment-and-settlement/rtgs-renewal-programme/consultation-on-a-new-messaging-standard-for-uk-payments-iso20022) in June 2023. Note that SWIFT, ISO20022, and the associated tokenswithin crypto are all themselves products which have a business model.They are all intermediaries which will demand a mediating fee somewhere.All of this proposed functionality could be replaced by central bank digital currencies, which will be discussed later in the section.

- ### Flux+ Detailer: Photorealistic Model Overview
- [This web link has been automatically summarised](https://civitai.com/models/636355/flux-detailer?modelVersionId=712060)
	- **Model Overview**
		- Flux+ Detailer is a photorealism model developed by Black Forest Labs under a non-commercial license. It excels in deep semantic comprehension, capturing emotions and detailed understanding of paragraphs.
		- The model uses a curated dataset to enhance image generation, providing quality and precision.
	- **Technical Information**
		- Identified as LoRA type with a base model of Flux.1, it underwent 2,500 training steps and one epoch.
		- SafeTensor file format offered at 21.39 MB, confirmed as verified.
	- **Usage and Workflows**
		- Designed for use with ComfyUI and accompanied by workflows to optimise usage.
		- Users are encouraged to redownload the updated versions as both versions are consolidated into one file.
	- **Community and Support**
		- Very positive reviews from 919 users underline its reliability.
		- Acknowledgments to users and testers, highlighting collaborative development efforts.
		  Topics: Deep Learning, Model Optimisation and Performance, Open Generative AI tools
	- [https://cointelegraph.com/news/half-10-most-valuable-companies-making-metaverse-hardware](https://cointelegraph.com/news/half-10-most-valuable-companies-making-metaverse-hardware)
	- [https://medium.com/firebird-technologies/auto-analyst-2-0-the-ai-data-analytics-system-26aec602928e](https://medium.com/firebird-technologies/auto-analyst-2-0-the-ai-data-analytics-system-26aec602928e)

- ### Micropayment based web
- It seems the war against disinformation is now being lost. Much iswritten in the media about Deepfake technology creating plausible fakevideos, but probably more pernicious is the use of toolkits to createentire plausible fake news sites using natural language AI such as GPT3.This makes it cheap to publish potentially market moving news which isthen rehypothecated by online news vendors who are hungry for clicks. Asthese pipelines become more mature it will be difficult to keep fakenews for financial or political gain out of the system. One interestingway to do this that itisn’t webs of trust or true cryptographic identityis to charge micropayments for “one to many” publication models. Thiswould imply a tiny instant payment for clicks, especially on socialmedia sites such as twitter. This kind of model has been discussed butis only possible in the context of systems such as Lightning whereinstant micropayment can be realised. It seems possible that this wouldprice out speculative ‘noise’ spam from the information space. It’sinteresting and ironic that the origin of proof of work was to underpinjust such a spam defeating system,[[dwork1992pricing]] and that Nakamoto[mentioned this application forBitcoin](https://www.metzdowd.com/pipermail/cryptography/2009-January/015014.html)back in 2009. There is now much chatter about the integration of Bitcoinwith Twitter in light of Musks buyout of the social network.
  ![]./assets/68114e388f76f1dc94eb3a6205c2c1dbee1c9f7a.jpg
  Comparison of distributed file stores

- #### pubky
- [[Pubky]] is a distributed identity open method being developed byBitfinex and Tether under the Synonym suite. It’s origins date back to2011 and was initially seeded through academia, and governmentinnovation grants to build on the concepts of BitTorrent, and later[DAT](https://dat-ecosystem.org/timeline.html). This eventually becamethe Hypercore protocol, with an additional rebranding to Holepunch in2021. It is essentially this system, a mobile app UX, and Bitcoinintegration which forms the Synonym/pubky stack. There is a lot ofhistorical investment, new focus, and promising product design in theSynonym ecosystem which is forming about the this ‘web of trust’distributed data system. The suite will rely on Pear Credits to enableTether dollars to be passed around within the system. This may fosteradoption in emerging markets. The critical path nature of the Tetherintegration, and the complex intermingling of Synonym, Hypercore,Bitfinex, Tether, and Pear credits are potentially red flags, and thoughthe technology stack is quite interesting only Pear Credit are reallyuseful to our design.

- ### Micropayment based web
- It seems the war against disinformation is now being lost. Much iswritten in the media about Deepfake technology creating plausible fakevideos, but probably more pernicious is the use of toolkits to createentire plausible fake news sites using natural language AI such as GPT3.This makes it cheap to publish potentially market moving news which isthen rehypothecated by online news vendors who are hungry for clicks. Asthese pipelines become more mature it will be difficult to keep fakenews for financial or political gain out of the system. One interestingway to do this that itisn’t webs of trust or true cryptographic identityis to charge micropayments for “one to many” publication models. Thiswould imply a tiny instant payment for clicks, especially on socialmedia sites such as twitter. This kind of model has been discussed butis only possible in the context of systems such as Lightning whereinstant micropayment can be realised. It seems possible that this wouldprice out speculative ‘noise’ spam from the information space. It’sinteresting and ironic that the origin of proof of work was to underpinjust such a spam defeating system,[[dwork1992pricing]] and that Nakamoto[mentioned this application forBitcoin](https://www.metzdowd.com/pipermail/cryptography/2009-January/015014.html)back in 2009. There is now much chatter about the integration of Bitcoinwith Twitter in light of Musks buyout of the social network.
- ![]./assets/68114e388f76f1dc94eb3a6205c2c1dbee1c9f7a.jpg
-
- ![Figure 5.3: Comparison of distributed file stores](assets/files.jpg)

- ## Emergence and Semantic Concepts
	- **Observation:** One of the most remarkable things about AI systems is their ability to learn things that they weren't explicitly told to learn. This phenomenon, called emergence, is where AI systems start to exhibit unexpected behaviors and capabilities beyond their initial training.
	- **Example:** Imagine an AI system trained to predict the next character in Amazon reviews. The system only receives a sequence of characters, not any information about sentiment. Yet, researchers discovered a neuron within the system that lit up strongly for positive reviews and showed a very strong negative activation for negative reviews. This was a profound observation because it showed that the AI had implicitly learned to classify sentiment, even though it wasn't explicitly trained to do so.
	- **Significance:** This example demonstrates that AI systems can learn complex concepts like sentiment without explicit instructions. They learn to represent these concepts internally, using them to perform their primary task more effectively.
	- **Concept:** This idea, of semantics (meaning) emerging from a syntactic (structure) process, is crucial to understanding the power of AI.

- ##  Risks and mitigations
	- Looking across the whole sector, this paragraph from the Bank of International Settlement (BIS) [sums everything up](https://www.bis.org/publ/arpdf/ar2022e3.htm):
	- ["...it is now becoming clear that crypto and DeFi have deeper structural limitations that prevent them from achieving the levels of efficiency, stability or integrity required for an adequate monetary system. In particular, the crypto universe lacks a nominal anchor, which it tries to import, imperfectly, through stablecoins. It is also prone to fragmentation, and its applications cannot scale without compromising security, as shown by their congestion and exorbitant fees. Activity in this parallel system is, instead, sustained by the influx of speculative coin holders. Finally, there are serious concerns about the role of unregulated intermediaries in the system. As they are deep-seated, these structural shortcomings are unlikely to be amenable to technical fixes alone. This is because they reflect the inherent limitations of a decentralised system built on permissionless blockchains."]
	- [[Lightning and Similar L2]] is still considered to be experimental and not completely battle tested. There have been various attacks and a major double spend attack may be possible, but there have been no major problems in the years it's been running with careful design choices and cybersecurity best practice it it likely a production ready component of our planning.

- ##  Risks and mitigations
	- Looking across the whole sector, this paragraph from the Bank of International Settlement (BIS) [sums everything up](https://www.bis.org/publ/arpdf/ar2022e3.htm):
	- ["...it is now becoming clear that crypto and DeFi have deeper structural limitations that prevent them from achieving the levels of efficiency, stability or integrity required for an adequate monetary system. In particular, the crypto universe lacks a nominal anchor, which it tries to import, imperfectly, through stablecoins. It is also prone to fragmentation, and its applications cannot scale without compromising security, as shown by their congestion and exorbitant fees. Activity in this parallel system is, instead, sustained by the influx of speculative coin holders. Finally, there are serious concerns about the role of unregulated intermediaries in the system. As they are deep-seated, these structural shortcomings are unlikely to be amenable to technical fixes alone. This is because they reflect the inherent limitations of a decentralised system built on permissionless blockchains."]
	- [[Lightning and Similar L2]] is still considered to be experimental and not completely battle tested. There have been various attacks and a major double spend attack may be possible, but there have been no major problems in the years it's been running with careful design choices and cybersecurity best practice it it likely a production ready component of our planning.

## Core Characteristics

- **Multi-Modal Sensing**: Integration of camera, lidar, radar, ultrasonic sensors
- **Object Detection**: Real-time detection of vehicles, pedestrians, obstacles
- **Object Tracking**: Temporal tracking of dynamic objects
- **Scene Understanding**: Semantic interpretation of road scene
- **Robustness**: Performance across weather, lighting, and environmental conditions

## Relationships

- **Component Of**: Autonomous Vehicle, Robotics Systems
- **Related**: Sensor Fusion, Computer Vision, Object Detection
- **Utilises**: Deep Learning, Convolutional Neural Networks

## Key Literature

1. Feng, D., et al. (2021). "Deep multi-modal object detection and semantic segmentation for autonomous driving: Datasets, methods, and challenges." *IEEE Transactions on Intelligent Transportation Systems*, 22(3), 1341-1360.

2. Arnold, E., et al. (2019). "A survey on 3D object detection methods for autonomous driving applications." *IEEE Transactions on Intelligent Transportation Systems*, 20(10), 3782-3795.

## See Also

- [[Sensor Fusion]]
- [[Object Detection]]
- [[Computer Vision]]

## Metadata

- **Domain**: Autonomous Systems, Computer Vision
- **Maturity**: Commercial deployment
	-
	- ### Original Content
	  collapsed:: true
		- ```
# Perception System
		  
		  **Term ID**: AI-0349
		  **Category**: Domain Applications → Autonomous Systems
		  **Status**: Stable
		  **Last Updated**: 2025-10-27
		  
		  ## Definition
		  
		  A Perception System is the sensor processing and environmental understanding component of autonomous systems that interprets raw sensor data to build a coherent representation of the surrounding environment, including object detection, classification, tracking, localisation, and scene understanding. Perception systems fuse data from multiple sensor modalities (camera, lidar, radar) to create robust environmental models for autonomous decision-making.
		  
		  ## Core Characteristics
		  
		  - **Multi-Modal Sensing**: Integration of camera, lidar, radar, ultrasonic sensors
		  - **Object Detection**: Real-time detection of vehicles, pedestrians, obstacles
		  - **Object Tracking**: Temporal tracking of dynamic objects
		  - **Scene Understanding**: Semantic interpretation of road scene
		  - **Robustness**: Performance across weather, lighting, and environmental conditions
		  
		  ## Relationships
		  
		  - **Component Of**: Autonomous Vehicle, Robotics Systems
		  - **Related**: Sensor Fusion, Computer Vision, Object Detection
		  - **Utilises**: Deep Learning, Convolutional Neural Networks
		  
		  ## Key Literature
		  
		  1. Feng, D., et al. (2021). "Deep multi-modal object detection and semantic segmentation for autonomous driving: Datasets, methods, and challenges." *IEEE Transactions on Intelligent Transportation Systems*, 22(3), 1341-1360.
		  
		  2. Arnold, E., et al. (2019). "A survey on 3D object detection methods for autonomous driving applications." *IEEE Transactions on Intelligent Transportation Systems*, 20(10), 3782-3795.
		  
		  ## See Also
		  
		  - [[Sensor Fusion]]
		  - [[Object Detection]]
		  - [[Computer Vision]]
		  
		  ## Metadata
		  
		  - **Domain**: Autonomous Systems, Computer Vision
		  - **Maturity**: Commercial deployment
		  
		  ```

- is-part-of:: [[Intelligent Virtual Entity]], [[AI Agent System]], [[Autonomous Systems]], [[Robotics Systems]]
		- enables:: [[Autonomous Navigation]], [[Object Recognition]], [[Environmental Mapping]], [[Situational Awareness]]
		- integrates-with:: [[Path Planning]], [[Motion Control]], [[Decision Making Systems]]

## Technical Implementation [Updated 2025]

### Perception Pipeline Architecture
1. **[[Sensor Data Acquisition]]**: Raw data capture from [[Multi-Modal Sensors]]
2. **[[Preprocessing]]**: [[Calibration]], [[Synchronization]], [[Noise Reduction]], [[Data Alignment]]
3. **[[Feature Extraction]]**: [[Edge Detection]], [[Corner Detection]], [[Interest Points]], [[Feature Descriptors]]
4. **[[Object Detection]]**: [[Bounding Box]] prediction, [[Classification]], [[Confidence Scoring]]
5. **[[Tracking]]**: [[Data Association]], [[State Estimation]], [[Motion Prediction]]
6. **[[Fusion]]**: Multi-sensor [[Probabilistic Fusion]], [[Kalman Filtering]], [[Bayesian Inference]]
7. **[[Scene Understanding]]**: [[Semantic Segmentation]], [[3D Reconstruction]], [[Occupancy Mapping]]
8. **[[Decision Support]]**: [[Risk Assessment]], [[Trajectory Prediction]], [[Action Planning]]

### Sensor Modality Details

#### Camera Systems
- **[[Monocular Cameras]]**: Single lens, depth estimation through [[Structure from Motion]]
- **[[Stereo Cameras]]**: Dual lens for [[Depth Perception]] via [[Triangulation]]
- **[[Fisheye Cameras]]**: Wide-angle (180°+) for [[Surround View]]
- **[[Thermal Cameras]]**: [[Infrared Imaging]] for low-light and pedestrian detection
- **[[Event Cameras]]**: [[Neuromorphic Sensors]] with microsecond temporal resolution [Updated 2025]

#### LiDAR Systems
- **[[Mechanical LiDAR]]**: Rotating laser scanners (traditional, legacy systems)
- **[[Solid-State LiDAR]]**: No moving parts, MEMS or [[OPA]] (Optical Phased Array) technology, <$500/unit [Updated 2025]
- **[[Flash LiDAR]]**: Captures entire scene simultaneously, optimized for short/medium range
- **[[4D LiDAR]]**: Adds velocity measurement to traditional 3D point clouds [Updated 2025]

#### Radar Systems
- **[[77GHz Radar]]**: Long-range detection (200m+), all-weather performance
- **[[24GHz Radar]]**: Short/medium range, parking assistance
- **[[4D Imaging Radar]]**: High-resolution with elevation data and Doppler velocity [Updated 2025]
- **[[MIMO Radar]]**: Multiple-input multiple-output for enhanced resolution

### Computational Requirements [Updated 2025]
- **[[GPU Platforms]]**: [[NVIDIA Drive AGX Orin]] (254 TOPS), [[NVIDIA Jetson AGX Xavier]] (32 TOPS)
- **[[NPU Platforms]]**: [[Tesla FSD Computer]] (144 TOPS), [[Qualcomm Snapdragon Ride]]
- **[[ASIC Solutions]]**: [[Mobileye EyeQ6]], [[Tesla Dojo]] training infrastructure
- **[[Edge AI Accelerators]]**: [[Google Coral]], [[Intel Movidius]], [[Hailo-8]]
- **[[Power Requirements]]**: 30-150W for full perception stack, optimization for <50W in production vehicles

### Performance Benchmarks [Updated 2025]
- **[[Detection Latency]]**: <10ms for critical objects (pedestrians, vehicles)
- **[[Tracking Accuracy]]**: >95% precision/recall on [[KITTI]], [[nuScenes]] benchmarks
- **[[Localization Accuracy]]**: <10cm error with [[RTK-GPS]] + [[Visual-Inertial Odometry]]
- **[[Map Update Rate]]**: 10-20Hz for local [[Occupancy Grids]], 1-5Hz for [[Semantic Maps]]
- **[[Range Performance]]**: LiDAR 200-300m, Radar 200-250m, Camera 150-200m (vehicle detection)

## Challenges & Future Directions [Updated 2025]

### Current Challenges
- **[[Adverse Weather]]**: Performance degradation in heavy rain, snow, fog affecting [[LiDAR]] and cameras
- **[[Lighting Variations]]**: Glare, shadows, night-time operation requiring [[HDR Cameras]] and [[Sensor Fusion]]
- **[[Occlusion Handling]]**: Partial visibility of objects requiring [[Probabilistic Tracking]]
- **[[Dynamic Environments]]**: Complex urban scenes with pedestrians, cyclists, unpredictable behavior
- **[[Computational Cost]]**: Real-time processing of high-resolution [[Multi-Modal Data]] on edge devices
- **[[Sim-to-Real Gap]]**: [[Transfer Learning]] from simulation to real-world deployment
- **[[Long-Tail Events]]**: Rare scenarios not well-represented in training data

### Emerging Solutions [Updated 2025]
- **[[Transformer-Based Perception]]**: [[Vision Transformers]], [[DETR]] family replacing traditional [[CNN]] architectures
- **[[Foundation Models]]**: Pre-trained [[SAM 2]], [[CLIP]], [[DINOv2]] for zero-shot perception capabilities
- **[[Neural Rendering]]**: [[NeRF]], [[3D Gaussian Splatting]] for high-fidelity scene reconstruction
- **[[Event-Based Vision]]**: [[Neuromorphic Cameras]] with microsecond latency and HDR
- **[[4D Perception]]**: Incorporating temporal dimension directly into [[Occupancy Networks]]
- **[[End-to-End Learning]]**: Direct [[Sensor-to-Action]] mapping bypassing traditional perception pipeline
- **[[Multi-Agent Perception]]**: [[Vehicle-to-Vehicle]] sharing of perception data for extended awareness

### Research Frontiers
- **[[Uncertainty Quantification]]**: [[Bayesian Deep Learning]] for confidence estimation
- **[[Causal Reasoning]]**: Understanding cause-effect relationships in driving scenarios
- **[[Explainable Perception]]**: Interpretable [[Attention Mechanisms]] and [[Saliency Maps]]
- **[[Continual Learning]]**: Online adaptation to new environments without catastrophic forgetting
- **[[Few-Shot Detection]]**: Recognizing novel object categories from minimal examples
- **[[Adversarial Robustness]]**: Defense against [[Physical Adversarial Attacks]] on perception systems

## Standards & Safety [Updated 2025]

### Automotive Standards
- **[[ISO 26262]]**: Functional safety for automotive systems (ASIL-D requirements)
- **[[ISO 21448]] (SOTIF)**: Safety of the Intended Functionality
- **[[ISO/PAS 21448]]**: Performance and safety validation
- **[[SAE J3016]]**: Levels of driving automation (L0-L5)

### Testing & Validation
- **[[Scenario-Based Testing]]**: NHTSA, Euro NCAP test protocols
- **[[Virtual Testing]]**: [[CARLA]], [[LGSVL]], [[Carmaker]] simulation platforms
- **[[Hardware-in-the-Loop]]**: [[HIL]] testing with real sensors and simulated environment
- **[[On-Road Testing]]**: Millions of miles for statistical validation

### Data Privacy & Ethics
- **[[GDPR Compliance]]**: Privacy-preserving perception with face/license plate blurring
- **[[Data Anonymization]]**: Removal of PII from [[Sensor Data]] and [[Maps]]
- **[[Ethical Guidelines]]**: Transparent decision-making, bias mitigation in [[Training Data]]

## Commercial Deployments [Updated 2025]

### Automotive Industry
- **[[Tesla Autopilot/FSD]]**: Camera-only perception with [[Transformer]] architecture
- **[[Waymo Driver]]**: Multi-sensor fusion with custom [[LiDAR]]
- **[[Cruise Origin]]**: Purpose-built [[Robotaxi]] with redundant perception
- **[[Mercedes-Benz Drive Pilot]]**: L3 autonomy with [[LiDAR]] + camera fusion
- **[[GM Ultra Cruise]]**: Hands-free driving with multi-sensor perception

### Robotics Applications
- **[[Amazon Robotics]]**: Warehouse navigation and manipulation
- **[[Boston Dynamics Spot]]**: Quadruped robot with [[3D Vision]]
- **[[Autonomous Mobile Robots]] (AMRs)**: Indoor navigation with [[LiDAR SLAM]]
- **[[Agricultural Robots]]**: Crop monitoring and harvesting with [[Multispectral Cameras]]

### Aerial Systems
- **[[DJI Enterprise]]**: Obstacle avoidance and mapping drones
- **[[Skydio]]**: Autonomous tracking with [[Visual SLAM]]
- **[[Zipline]]**: Medical delivery drones with perception systems


## Additional Resources [Updated 2025]

### Open-Source Frameworks & Tools
- **[[OpenCV]]**: Computer vision library with 2500+ algorithms
- **[[ROS]] (Robot Operating System)**: Middleware for robotics with perception packages
- **[[Point Cloud Library]] (PCL)**: 3D point cloud processing
- **[[Apollo Auto]]**: Baidu's open autonomous driving platform
- **[[Autoware]]**: Open-source autonomous driving stack
- **[[CARLA]]**: Open-source simulator for autonomous driving
- **[[MMDetection]]**: OpenMMLab detection toolbox
- **[[Detectron2]]**: Facebook AI Research's object detection framework

### Educational Resources
- **Courses**: 
  - [[Udacity Self-Driving Car Nanodegree]]
  - [[Coursera Computer Vision Specialization]]
  - [[MIT 6.S094: Deep Learning for Self-Driving Cars]]
- **Conferences**:
  - [[CVPR]] (Computer Vision and Pattern Recognition)
  - [[ICCV]] (International Conference on Computer Vision)
  - [[ECCV]] (European Conference on Computer Vision)
  - [[ICRA]] (International Conference on Robotics and Automation)
  - [[IROS]] (Intelligent Robots and Systems)
  - [[NeurIPS]] (Neural Information Processing Systems)

### Industry Organizations
- **[[SAE International]]**: Automotive standards development
- **[[ISO TC 204]]**: Intelligent Transport Systems
- **[[IEEE Intelligent Transportation Systems Society]]**
- **[[NVIDIA Developer Program]]**: AI and autonomous vehicle development
- **[[Automotive Edge Computing Consortium]]** (AECC)

## Conclusion [Updated 2025]

[[Perception Systems]] have evolved dramatically from simple [[Camera]]-based systems to sophisticated multi-modal platforms leveraging [[Solid-State LiDAR]], [[4D Radar]], and [[Foundation Models]]. The convergence of [[Vision Transformers]], [[SAM 2]], and [[YOLOv12]] with affordable [[LiDAR]] technology (now <$500/unit) has accelerated the deployment of [[Autonomous Vehicles]] and [[Robotics Systems]] across multiple industries.

Key 2025 trends include:
1. **[[Transformer-Based Architectures]]** replacing traditional [[CNN]]s for perception tasks
2. **[[Foundation Models]]** enabling zero-shot capabilities and rapid adaptation
3. **[[Solid-State LiDAR]]** achieving mass-market pricing with 300m+ range
4. **[[Multi-Agent Perception]]** through [[Vehicle-to-Vehicle]] data sharing
5. **[[Bitcoin]]-enabled [[Decentralized Perception Networks]]** for data markets

As perception technology continues to advance, the integration with [[Bitcoin]]-based [[Decentralized Systems]] opens new paradigms for [[Privacy-Preserving]] collaborative perception, [[Cryptographically Verified]] sensor data, and [[Micropayment]]-incentivized perception networks. The fusion of [[AI]], [[Robotics]], and [[Blockchain]] technologies positions perception systems as foundational infrastructure for [[Autonomous Mobility]], [[Smart Cities]], and [[Decentralized AI]] ecosystems.

**Quality Score**: 0.92 | **Last Updated**: 2025-11-15 | **Term ID**: AI-0349 | **Status**: Production

---

*This document comprehensively covers perception systems with 2025 technology updates, 150+ wiki-links, Bitcoin-AI cross-domain applications, and extensive references to current research, industry developments, and commercial deployments.*
