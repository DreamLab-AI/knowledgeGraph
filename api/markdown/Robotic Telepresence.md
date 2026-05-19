public:: true

# Robotic Telepresence
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5c4f4e8971a195851da6bc741a038424a739e6ebe9d01c59a24f3be6480298e7",
  "@type": "Page",
  "vc:slug": "robotic-telepresence",
  "title": "Robotic Telepresence",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:remote-office-attendance",
      "vc:label": "RemoteOfficeAttendance"
    },
    {
      "@id": "urn:visionflow:linked:tele-020-virtual-reality-telepresence",
      "vc:label": "TELE-020-virtual-reality-telepresence"
    },
    {
      "@id": "urn:visionflow:linked:tele-150-webrtc",
      "vc:label": "TELE-150-webrtc"
    },
    {
      "@id": "urn:visionflow:linked:tele-201-teleoperation-systems",
      "vc:label": "TELE-201-teleoperation-systems"
    },
    {
      "@id": "urn:visionflow:linked:tele-202-remote-manipulation",
      "vc:label": "TELE-202-remote-manipulation"
    },
    {
      "@id": "urn:visionflow:linked:tele-203-haptic-feedback-telepresence",
      "vc:label": "TELE-203-haptic-feedback-telepresence"
    },
    {
      "@id": "urn:visionflow:owl:class:autonomous-navigation",
      "vc:label": "AutonomousNavigation"
    },
    {
      "@id": "urn:visionflow:owl:class:human-robot-interaction",
      "vc:label": "HumanRobotInteraction"
    },
    {
      "@id": "urn:visionflow:owl:class:tele-001-telepresence",
      "vc:label": "TELE-001-telepresence"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "TC-0200"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Robotic Telepresence"
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
  "@id": "urn:ngm:class:robotic-telepresence",
  "@type": "Class",
  "label": "Robotic Telepresence",
  "definition": "\"The projection of human presence into remote physical locations through mobile robotic platforms equipped with cameras, displays, microphones, and speakers, enabling remote operators to navigate environments, interact with people, and manipulate objects as if physically present, bridging virtual...",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dc-telepresence",
      "label": "Telepresence"
    },
    {
      "@id": "urn:ngm:class:tele-001-telepresence",
      "label": "TELE-001-telepresence"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:autonomous-navigation",
        "label": "AutonomousNavigation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:remote-office-attendance",
        "label": "RemoteOfficeAttendance"
      }
    ]
  },
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:robotic-telepresence:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5c4f4e8971a195851da6bc741a038424a739e6ebe9d01c59a24f3be6480298e7"
  },
  "vc:resolutions": [
    {
      "raw": "[[RemoteOfficeAttendance]]",
      "resolved": "urn:visionflow:linked:remote-office-attendance",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-020-virtual-reality-telepresence]]",
      "resolved": "urn:visionflow:linked:tele-020-virtual-reality-telepresence",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-150-webrtc]]",
      "resolved": "urn:visionflow:linked:tele-150-webrtc",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-201-teleoperation-systems]]",
      "resolved": "urn:visionflow:linked:tele-201-teleoperation-systems",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-202-remote-manipulation]]",
      "resolved": "urn:visionflow:linked:tele-202-remote-manipulation",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-203-haptic-feedback-telepresence]]",
      "resolved": "urn:visionflow:linked:tele-203-haptic-feedback-telepresence",
      "kind": "StubLink"
    },
    {
      "raw": "[[AutonomousNavigation]]",
      "resolved": "urn:visionflow:owl:class:autonomous-navigation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[HumanRobotInteraction]]",
      "resolved": "urn:visionflow:owl:class:human-robot-interaction",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[TELE-001-telepresence]]",
      "resolved": "urn:visionflow:owl:class:tele-001-telepresence",
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
  - "The projection of human presence into remote physical locations through mobile robotic platforms equipped with cameras, displays, microphones, and speakers, enabling remote operators to navigate environments, interact with people, and manipulate objects as if physically present, bridging virtual and physical collaboration modalities."

- ### Semantic Classification
  - owl-class:: distributed-collaboration:RoboticTelepresence
  - owl-role:: Object

- ### Relationships
  - is-subclass-of:: [[TELE-001-telepresence]]
  - requires:: [[AutonomousNavigation]]
  - enables:: [[RemoteOfficeAttendance]]

- ### Content

  ## Definition

  **Robotic Telepresence** systems employ mobile robotic platforms as physical avatars for remote operators, projecting human presence into real-world environments through bidirectional video/audio communication whilst enabling navigation and interaction. Unlike purely virtual telepresence ([[TELE-020-virtual-reality-telepresence]]) occurring in digital spaces, robotic telepresence embeds remote participants in physical locations — offices, hospitals, museums, homes — where they can move autonomously, maintain eye contact via pan-tilt displays, and engage with local individuals as embodied proxies.

  A typical robotic telepresence platform consists of: a wheeled mobile base providing locomotion; a vertical mast terminating in a display screen showing the remote operator's video feed; cameras capturing the local environment; microphones and speakers for bidirectional audio; and networking hardware streaming media over WiFi/5G. Remote operators control the robot through web interfaces, mobile apps, or VR headsets, driving navigation via keyboard/touchscreen whilst their video appears on the robot's screen, creating the impression of physical presence for local participants.

  Advanced systems incorporate autonomous navigation, collision avoidance, and AI-driven positioning to automatically centre the robot in conversations or navigate to meeting rooms. This hybrid human-AI control enables operators to focus on interaction whilst delegating mobility to autonomous systems ([[TELE-201-teleoperation-systems]]).

  #### Current Landscape
  Robotic telepresence has evolved from research curiosities to commercial deployments across healthcare, education, corporate offices, and hospitality, with the global market reaching £1.2 billion annually (MarketsandMarkets, 2025).

  **Adoption Statistics**:
  - 47% of UK hospitals employ robotic telepresence for specialist consultations (NHS Digital, 2025)
  - 23% of hybrid-work companies use telepresence robots for remote employees (Gartner Survey)
  - 12,000+ Double Robotics units deployed globally in education sector
  - Average cost: £2,500-£15,000 depending on features

  **Technology Capabilities (2025)**:
  - **Battery Life**: 8-12 hours continuous operation
  - **Speed**: 1.2 m/s maximum (human walking pace)
  - **Navigation**: SLAM-based autonomous obstacle avoidance
  - **Displays**: 1080p-4K touchscreens with eye-level positioning
  - **Connectivity**: 5G, WiFi 6E for low-latency streaming

  **UK Context**:
  - **Imperial College London**: Robotic telepresence for remote research collaboration
  - **Great Ormond Street Hospital**: Paediatric consultations via telepresence robots
  - **OhmniLabs UK**: Distribution of telepresence robots to British enterprises
  - **University of Bristol**: Research on social acceptance of telepresence robots

  ## Major Platforms

  ### Double 3 (Double Robotics)
  - **Design**: iPad-based, minimalist vertical mast
  - **Features**: Auto-docking, clickable floorplan navigation, 13-hour battery
  - **Use Cases**: Offices, schools, medical facilities
  - **Price**: £3,400

  ### Ohmni (OhmniLabs)
  - **Design**: Humanoid torso form factor with arms
  - **Features**: AI auto-framing, 4K camera, remote hand control
  - **Use Cases**: Healthcare, retail, hospitality
  - **Price**: £2,200-£5,500

  ### Temi (Robotemi)
  - **Design**: Consumer-friendly, autonomous AI assistant
  - **Features**: Alexa integration, auto-follow mode, tray for deliveries
  - **Use Cases**: Hotels, care homes, retail
  - **Price**: £2,800

  ### Beam (Suitable Technologies, acquired by Blue Ocean)
  - **Design**: Robust enterprise platform
  - **Features**: Auto-navigation, scheduled meetings, multi-user access
  - **Use Cases**: Corporate offices, healthcare
  - **Price**: £11,000

  ### Custom Research Platforms
  - **Anybots QB**: Early pioneer (discontinued)
  - **VGo (Vecna)**: Healthcare-focused (discontinued)
  - **Telepresence Robots from Academic Labs**: Experimental designs with haptics, AR overlays

  ## Applications

  ### Healthcare
  - **Specialist Consultations**: Neurologists remotely examine patients in rural hospitals
  - **ICU Rounds**: Intensivists monitor multiple hospitals simultaneously
  - **Mental Health**: Therapy sessions without patient travel
  - **Pharmacy**: Remote pharmacist verifies prescriptions
  - **Example**: NHS Scotland deploys 30 robots across Highland hospitals

  ### Education
  - **Remote Attendance**: Sick students attend class from home
  - **Guest Lectures**: International experts present without travel
  - **Special Education**: Homebound students maintain social connections
  - **Example**: UK schools use Double 3 for long-term absent pupils

  ### Corporate Offices
  - **Hybrid Work**: Remote employees "walk" through office, join spontaneous conversations
  - **Site Visits**: Executives inspect facilities globally
  - **Recruitment**: Candidates tour offices remotely
  - **Example**: Microsoft uses telepresence robots for distributed teams

  ### Hospitality and Tourism
  - **Virtual Tours**: Real estate agents show properties remotely
  - **Museum Guides**: Curators lead tours for global audiences
  - **Hotel Services**: Concierge assistance via mobile robots

  ## Technical Architecture

  ### Mobility System
  - **Differential Drive**: Two-wheeled base with caster for stability
  - **SLAM Navigation**: LiDAR/camera-based mapping and localisation
  - **Obstacle Avoidance**: Ultrasonic/infrared sensors, AI vision
  - **Elevator Integration**: API calls to building systems for floor changes

  ### Communication System
  - **Video**: 1080p-4K front camera, operator's video on display
  - **Audio**: Beamforming microphones, directional speakers
  - **Protocols**: [[TELE-150-webrtc]] for peer-to-peer streaming
  - **Bandwidth**: 2-5 Mbps upload/download

  ### Control Interfaces
  - **Web App**: Point-and-click navigation on floorplan
  - **Mobile App**: Virtual joystick, tilt-to-steer
  - **VR Control**: First-person perspective with head tracking
  - **Autonomous Modes**: "Go to meeting room", "follow person", "return to dock"

  ### AI Enhancements
  - **Auto-Framing**: Centres operator's face in local participants' view
  - **Gaze Correction**: Adjusts eye contact despite camera/screen offset
  - **Voice Commands**: "Turn left", "go faster", "stop"
  - **Predictive Positioning**: Anticipates conversation flow, positions optimally

  ## Advantages and Limitations

  ### Advantages
  - **Physical Presence**: Interact in real-world environments, not just virtual
  - **Mobility**: Navigate autonomously, choose vantage points
  - **Accessibility**: Enables participation for mobility-impaired or remote users
  - **Cost Savings**: Eliminates travel while maintaining presence
  - **Spontaneity**: Join impromptu hallway conversations, office serendipity

  ### Limitations
  - **Social Awkwardness**: Some users report feeling "weird" interacting with robot
  - **Connectivity Dependency**: Unusable without reliable WiFi/5G
  - **Physical Constraints**: Cannot climb stairs, open doors (unless automated), manipulate objects
  - **Battery Life**: Limited to 8-12 hours before recharging
  - **Privacy Concerns**: Recordings, eavesdropping, surveillance potential
  - **Cost**: £2,000-£15,000 capital investment

  ## Comparison to Virtual Telepresence

  | Aspect | Robotic Telepresence | VR Telepresence ([[TELE-020-virtual-reality-telepresence]]) |
  |--------|----------------------|-----------------------------------------------------------|
  | **Environment** | Physical, real-world | Virtual, computer-generated |
  | **Interaction** | Real objects, people | Virtual avatars, objects |
  | **Mobility** | Robot drives through space | Teleport, walk virtually |
  | **Presence Cues** | Physical embodiment | Immersive visuals, spatial audio |
  | **Use Case** | Office visits, medical rounds | Design reviews, training simulations |
  | **Cost** | £2,000-£15,000 hardware | £300-£3,500 VR headset |

  **Hybrid Approach**: Some systems combine both (robot displays VR environment, operator controls from VR headset)

  ## Ethical and Social Considerations

  ### Privacy
  - Robots equipped with cameras raise surveillance concerns
  - Solutions: LED indicators when recording, privacy mode (screen off), access logs

  ### Accessibility
  - Robots enable participation for wheelchair users, immunocompromised individuals
  - Risk: Assuming robot is sufficient replacement for physical accommodations

  ### Labour Implications
  - Remote workers via robots may be "always available", blurring work/life boundaries
  - Risk: Devaluation of local presence, outsourcing skilled labour

  ### Social Norms
  - Etiquette unclear: Can robot enter private offices? Interrupt conversations?
  - Cultural acceptance varies: Higher in Japan, Scandinavia; lower in Southern Europe

  #### Future Directions
  **Near-Term (2025-2027)**:
  - Autonomous multi-floor navigation (elevators, doors)
  - Manipulator arms for object handoff ([[TELE-202-remote-manipulation]])
  - Emotional expression via LED faces or animated displays

  **Medium-Term (2027-2030)**:
  - Humanoid telepresence robots with bipedal walking
  - Haptic feedback for remote operators ([[TELE-203-haptic-feedback-telepresence]])
  - Holographic projection replacing physical screens

  **Long-Term (2030+)**:
  - Swarm telepresence (control multiple robots simultaneously)
  - Bio-hybrid robots (living tissue components)
  - Brain-computer interface control

  #### Related Concepts
  - [[TELE-001-telepresence]]
  - [[TELE-020-virtual-reality-telepresence]]
  - [[TELE-201-teleoperation-systems]]
  - [[TELE-203-haptic-feedback-telepresence]]
  - [[HumanRobotInteraction]]
  - [[AutonomousNavigation]]

  #### References
  1. Kristoffersson, A., et al. (2013). "A Review of Mobile Robotic Telepresence". *Advances in Human-Computer Interaction*, 2013.
  2. Neustaedter, C., et al. (2016). "Telepresence and Video Conferencing: A Mixed Methods Approach". *Foundations and Trends in Human-Computer Interaction*, 9(1), 1-123.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
