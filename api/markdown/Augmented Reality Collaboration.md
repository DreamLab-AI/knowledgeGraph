iri:: http://narrativegoldmine.com/distributed-collaboration#AugmentedRealityCollaboration
uri:: urn:visionclaw:concept:distributed-collaboration:augmented-reality-collaboration
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:distributed-collaboration:augmented-reality-collaboration
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: distributed-collaboration
preferred-term:: Augmented Reality Collaboration
content-hash:: sha256-12-73721de2f65e
legacy-term-id:: TC-0021
status:: active
maturity:: developing
quality-score:: 0.50
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true
bridges-to:: [[Computer Vision]]

- ### Definition
  - "Collaborative work where geographically distributed team members share a common augmented reality environment, viewing and manipulating virtual 3D objects overlaid on their respective physical spaces whilst communicating via spatial audio and holographic avatars, enabling hybrid physical-virtual cooperation through AR headsets or mobile devices."

- ### Semantic Classification
  - owl-class:: distributed-collaboration:AugmentedRealityCollaboration
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[TELE-002-telecollaboration]]
  - requires:: [[TELE-150-webrtc]]
  - enables:: [[CollaborativeDesign]]

- ### Content

  ## Definition

  **Augmented Reality Collaboration** enables distributed teams to work together in shared spatial contexts where virtual 3D content is overlaid on physical environments visible through AR headsets (Microsoft HoloLens, Magic Leap) or mobile devices (smartphones, tablets). Unlike VR telepresence ([[TELE-020-virtual-reality-telepresence]]) that immerses users entirely in virtual worlds, AR collaboration preserves awareness of the physical workspace whilst adding digital layers—holographic avatars, 3D CAD models, annotations, data visualisations—that multiple remote participants view and manipulate simultaneously from their respective locations.

  AR collaboration leverages spatial computing: headsets map the physical environment (SLAM - Simultaneous Localisation and Mapping), track user position/orientation, and anchor digital content to real-world coordinates via spatial anchors. When an engineer in London places a holographic engine component on their desk, a colleague in Tokyo sees the same hologram on their desk, enabling co-manipulation of shared 3D objects despite geographical separation. Spatial audio renders voices directionally, whilst holographic avatars (photorealistic or stylised) represent remote participants, creating hybrid physical-virtual collaboration.

  #### Current Landscape
  AR collaboration has evolved from experimental demonstrations to enterprise deployments in manufacturing, healthcare, field service, and architecture, with the global market reaching £3.2 billion (MarketsandMarkets, 2025).

  **Adoption Statistics**:
  - 23% of UK manufacturers use AR collaboration for remote assistance (Made Smarter Review, 2025)
  - 12% of architecture firms employ AR for client presentations (AIA Technology Survey)
  - Microsoft HoloLens 2: 300,000+ units deployed globally, 18,000 in UK
  - Magic Leap 2: 50,000 units (enterprise-focused)

  **Technology Capabilities (2025)**:
  - **Field of View**: 52° diagonal (HoloLens 2), 70° (Magic Leap 2)
  - **Hand Tracking**: Gesture control without controllers
  - **Spatial Mapping**: Real-time environment meshing at 10 Hz
  - **Occlusion**: Virtual objects occluded by physical objects (realistic depth)

  **UK Context**:
  - **Rolls-Royce**: AR remote assistance for engine maintenance (HoloLens 2)
  - **Bentley Systems**: AR BIM collaboration for construction projects
  - **Imperial College London**: Surgical training via AR collaboration
  - **UK Ministry of Defence**: AR tactical planning and training

  ## Platforms and Technologies

  ### Microsoft HoloLens 2 ([[TELE-025-microsoft-hololens]])
  - **Form Factor**: Standalone AR headset, wireless
  - **Optics**: Waveguide displays, 52° diagonal FOV, 2K resolution per eye
  - **Interaction**: Hand tracking, eye tracking, voice commands
  - **Collaboration**: Microsoft Mesh integration for multi-user AR sessions
  - **Price**: £3,150

  ### Microsoft Mesh ([[TELE-026-microsoft-mesh]])
  - **Platform**: Cloud-based AR/VR collaboration service
  - **Features**: Shared holographic spaces, persistent content, multi-platform (HoloLens, Quest, PC)
  - **Integration**: Microsoft Teams, Azure Digital Twins
  - **Use Case**: Hybrid meetings (AR users, VR users, video participants)

  ### Apple Vision Pro (visionOS)
  - **Passthrough Mode**: High-fidelity video passthrough enables AR collaboration
  - **Personas**: Photorealistic holographic avatars
  - **SharePlay**: Shared AR experiences (co-viewing 3D models)
  - **Price**: £3,499

  ### Magic Leap 2
  - **Form Factor**: Lightweight enterprise AR headset
  - **Optics**: 70° diagonal FOV, dimming technology for outdoor use
  - **Targeting**: Healthcare, manufacturing, field service
  - **Price**: £2,999

  ### Mobile AR (ARKit, ARCore)
  - **Devices**: iPhones, iPads, Android smartphones/tablets
  - **Collaboration**: Multi-user AR sessions via ARKit Collaborative Session, ARCore Cloud Anchors
  - **Advantage**: No headset required (billions of compatible devices)
  - **Limitation**: Holding device vs. hands-free headset

  ## Applications

  ### Remote Assistance
  - Field technician wears AR headset, remote expert sees technician's view
  - Expert annotates technician's view with arrows, circles, 3D instructions
  - Spatial audio enables natural conversation
  - **Example**: BT Engineers use HoloLens for network equipment repairs

  ### Collaborative Design
  - Architects, clients view 3D building models at scale in physical space
  - Co-manipulate: Rotate, scale, modify materials in real-time
  - Multiple stakeholders join from different locations
  - **Example**: Bentley Systems iTwin for infrastructure design review

  ### Medical Collaboration
  - Surgeons view 3D patient scans overlaid on patient during surgery
  - Remote specialists annotate surgical plan in AR
  - Medical students observe procedures via holographic avatars
  - **Example**: Imperial College Hamlyn Centre surgical AR research

  ### Manufacturing
  - Engineers overlay CAD models on physical prototypes
  - Identify design-manufacture discrepancies
  - Remote quality inspections via AR annotations
  - **Example**: Airbus uses AR for aircraft assembly guidance

  ### Education and Training
  - Distributed students manipulate shared 3D molecular models
  - Remote instructors demonstrate procedures via holographic presence
  - Hands-on training without physical proximity
  - **Example**: University of Cambridge chemistry education AR

  ## Advantages and Limitations

  ### Advantages
  - **Contextual**: Work on physical objects whilst viewing digital overlays
  - **Hands-Free**: Headsets enable manipulation whilst viewing instructions
  - **Spatial Understanding**: 3D depth perception superior to 2D screens
  - **Hybrid Meetings**: AR users collaborate with VR and video participants
  - **Safety**: Maintain physical environment awareness (vs. VR blindness)

  ### Limitations
  - **Field of View**: Limited FOV creates "keyhole" viewing (52-70° vs. 180° human vision)
  - **Weight**: Headsets cause neck strain after 60-90 minutes
  - **Brightness**: Holograms difficult to see in bright sunlight
  - **Cost**: £3,000+ headsets prohibitive for consumer adoption
  - **Social Acceptance**: Wearing headsets in public perceived as awkward

  #### Future Directions
  **Near-Term (2025-2027)**:
  - Lightweight AR glasses (100g vs. 566g HoloLens 2)
  - Wider FOV (100°+) for immersive AR
  - Neural rendering for photorealistic holographic avatars [[TELE-100-ai-avatars]]

  **Medium-Term (2027-2030)**:
  - Contact-lens AR (eliminating external hardware)
  - Haptic feedback for touching holograms [[TELE-203-haptic-feedback-telepresence]]
  - AI-generated AR content from voice descriptions

  **Long-Term (2030+)**:
  - Retinal projection AR (direct light to retina)
  - Brain-computer interface AR control
  - Persistent AR metaverse overlay on entire physical world

  #### Related Concepts
  - [[TELE-001-telepresence]]
  - [[TELE-020-virtual-reality-telepresence]]
  - [[TELE-025-microsoft-hololens]]
  - [[TELE-026-microsoft-mesh]]
  - [[AugmentedReality]]
  - [[MixedReality]]
  - [[SpatialComputing]]

  #### References
  1. Billinghurst, M., & Kato, H. (2002). "Collaborative Augmented Reality". *Communications of the ACM*, 45(7), 64-70.
  2. Ens, B., et al. (2021). "Revisiting Collaboration through Mixed Reality: The Evolution of Groupware". *International Journal of Human-Computer Studies*, 131, 81-98.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
