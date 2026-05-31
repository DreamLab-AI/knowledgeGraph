public:: true
alias:: TELE-021-augmented-reality-collaboration

# Augmented Reality Collaboration
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:92d2fd79cd61c3ad3816059dede0a192fd3322860afc527aeaf756c1e73237f4",
  "@type": "Page",
  "vc:slug": "augmented-reality-collaboration",
  "title": "Augmented Reality Collaboration",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:collaborative-design",
      "vc:label": "CollaborativeDesign"
    },
    {
      "@id": "urn:visionflow:linked:tele-002-telecollaboration",
      "vc:label": "TELE-002-telecollaboration"
    },
    {
      "@id": "urn:visionflow:linked:tele-020-virtual-reality-telepresence",
      "vc:label": "TELE-020-virtual-reality-telepresence"
    },
    {
      "@id": "urn:visionflow:linked:tele-025-microsoft-hololens",
      "vc:label": "TELE-025-microsoft-hololens"
    },
    {
      "@id": "urn:visionflow:linked:tele-026-microsoft-mesh",
      "vc:label": "TELE-026-microsoft-mesh"
    },
    {
      "@id": "urn:visionflow:linked:tele-100-ai-avatars",
      "vc:label": "TELE-100-ai-avatars"
    },
    {
      "@id": "urn:visionflow:linked:tele-150-webrtc",
      "vc:label": "TELE-150-webrtc"
    },
    {
      "@id": "urn:visionflow:linked:tele-203-haptic-feedback-telepresence",
      "vc:label": "TELE-203-haptic-feedback-telepresence"
    },
    {
      "@id": "urn:visionflow:owl:class:augmented-reality",
      "vc:label": "AugmentedReality"
    },
    {
      "@id": "urn:visionflow:owl:class:mixed-reality",
      "vc:label": "MixedReality"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-computing",
      "vc:label": "SpatialComputing"
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
      "vc:value": "TC-0021"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Augmented Reality Collaboration"
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
  "@id": "urn:ngm:class:augmented-reality-collaboration",
  "@type": "Class",
  "label": "Augmented Reality Collaboration",
  "definition": "\"Collaborative work where geographically distributed team members share a common augmented reality environment, viewing and manipulating virtual 3D objects overlaid on their respective physical spaces whilst communicating via spatial audio and holographic avatars, enabling hybrid physical-virtual...",
  "domain": "distributed-collaboration",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dc-telepresence",
      "label": "Telepresence"
    },
    {
      "@id": "urn:ngm:class:telecollaboration-domain",
      "label": "TELE-002-telecollaboration"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:web-rtc",
        "label": "TELE-150-webrtc"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:collaborative-design",
        "label": "CollaborativeDesign"
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
  "@id": "urn:visionflow:annotation:link-resolutions:augmented-reality-collaboration:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:92d2fd79cd61c3ad3816059dede0a192fd3322860afc527aeaf756c1e73237f4"
  },
  "vc:resolutions": [
    {
      "raw": "[[CollaborativeDesign]]",
      "resolved": "urn:visionflow:linked:collaborative-design",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-002-telecollaboration]]",
      "resolved": "urn:visionflow:linked:tele-002-telecollaboration",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-020-virtual-reality-telepresence]]",
      "resolved": "urn:visionflow:linked:tele-020-virtual-reality-telepresence",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-025-microsoft-hololens]]",
      "resolved": "urn:visionflow:linked:tele-025-microsoft-hololens",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-026-microsoft-mesh]]",
      "resolved": "urn:visionflow:linked:tele-026-microsoft-mesh",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-100-ai-avatars]]",
      "resolved": "urn:visionflow:linked:tele-100-ai-avatars",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-150-webrtc]]",
      "resolved": "urn:visionflow:linked:tele-150-webrtc",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-203-haptic-feedback-telepresence]]",
      "resolved": "urn:visionflow:linked:tele-203-haptic-feedback-telepresence",
      "kind": "StubLink"
    },
    {
      "raw": "[[AugmentedReality]]",
      "resolved": "urn:visionflow:owl:class:augmented-reality",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MixedReality]]",
      "resolved": "urn:visionflow:owl:class:mixed-reality",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SpatialComputing]]",
      "resolved": "urn:visionflow:owl:class:spatial-computing",
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
