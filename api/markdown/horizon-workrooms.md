- ### Definition
  - "Meta's enterprise virtual reality telepresence application for Quest headsets, providing immersive meeting rooms where distributed teams collaborate as avatars around virtual conference tables with spatial audio, shared whiteboards, screen sharing, and keyboard passthrough, representing mainstream commercialisation of VR-based remote collaboration."

- ### Semantic Classification
  - owl-class:: distributed-collaboration:HorizonWorkrooms
  - owl-role:: Object

- ### Relationships
  - is-subclass-of:: [[TELE-020-virtual-reality-telepresence]]
  - requires:: [[TELE-100-ai-avatars]]
  - enables:: [[VirtualWhiteboarding]]

- ### Content

  ## Definition

  **Horizon Workrooms** is Meta's flagship enterprise virtual reality collaboration platform, launched in 2021 and continuously enhanced through 2025, enabling distributed teams to meet as photorealistic or stylised avatars in immersive 3D meeting rooms. Running on Meta Quest headsets (Quest 2, Quest 3, Quest Pro), Workrooms provides spatial audio, shared virtual whiteboards, screen sharing from physical computers, and keyboard passthrough (typing on physical keyboard whilst in VR), creating a professional telepresence environment that combines the social presence of face-to-face meetings with the flexibility of remote work.

  The platform represents Meta's bet on the "metaverse of work" ([[Metaverse-Telepresence Bridge]]), offering free access to up to 16 simultaneous VR participants (plus 50 video call participants) in customisable virtual conference rooms. Users create persistent avatars with customised appearance, join scheduled meetings via web links, and collaborate using hand tracking or controllers to manipulate 3D objects, write on whiteboards, and gesture naturally. Integration with productivity tools (Zoom, Google Meet, Slack) provides hybrid meeting capabilities where VR users appear alongside traditional video conference participants.

  #### Current Landscape
  Horizon Workrooms has evolved from experimental prototype to viable enterprise platform, with 4.7 million monthly active users globally and adoption by 38% of UK enterprises using VR collaboration (Meta Business Report, 2025).

  **Adoption Statistics**:
  - 4.7M monthly active users globally (Meta, Q1 2025)
  - 38% of UK enterprises with VR collaboration use Workrooms (IDC Enterprise XR Survey)
  - 180,000+ virtual rooms created (cumulative since launch)
  - Average meeting duration: 32 minutes (vs. 58 minutes for Zoom calls)

  **Technology Capabilities (2025)**:
  - **Avatars**: Stylised Horizon avatars (free) or photorealistic Codec Avatars (Quest Pro)
  - **Audio**: Spatial audio with head-related transfer functions, noise cancellation
  - **Collaboration**: 3 shared whiteboards, screen sharing (desktop mirroring), PDF import
  - **Interoperability**: Zoom, Google Meet integration (video participants appear on screens in VR)
  - **Devices**: Quest 2, Quest 3, Quest 3S, Quest Pro

  **UK Context**:
  - **PwC UK**: 1,200-person VR collaboration pilot using Workrooms
  - **Accenture UK**: Onboarding new hires in Workrooms virtual offices
  - **University of Leeds**: Research on learning outcomes in VR education
  - **BT Enterprise**: Client consultations via Workrooms for remote customers

  ## Features

  ### Virtual Meeting Rooms
  - **Room Templates**: Conference rooms, amphitheatres, outdoor spaces
  - **Customisation**: Upload company logos, photos, 3D models
  - **Persistent Spaces**: Rooms remain configured between meetings
  - **Capacity**: 16 VR users + 50 video call participants

  ### Avatar System ([[TELE-100-ai-avatars]])
  - **Stylised Avatars**: Cartoon-like Horizon avatars (default, free)
  - **Codec Avatars**: Photorealistic facial scans (Quest Pro only, experimental)
  - **Facial Tracking**: Quest Pro cameras capture expressions (52 blend shapes)
  - **Hand Tracking**: Controller-free gesture interaction (Quest 3, Pro)
  - **Body Language**: Upper body inverse kinematics simulate natural posture

  ### Collaboration Tools
  - **Whiteboards**: 3 virtual whiteboards per room, 2D/3D drawing, sticky notes
  - **Screen Sharing**: Desktop mirrored into VR (Windows/Mac)
  - **Keyboard Passthrough**: Type on physical keyboard whilst in VR (Quest 3 camera passthrough)
  - **File Sharing**: Import PDFs, images onto whiteboards
  - **Breakout Rooms**: Split into smaller groups

  ### Integration
  - **Video Conferencing**: Join Zoom/Google Meet from VR, video participants appear on screens
  - **Slack**: Schedule Workrooms meetings from Slack
  - **Calendar**: Google Calendar, Outlook integration
  - **Meta Business Suite**: Admin dashboard, usage analytics

  ## User Experience

  ### Joining a Meeting
  1. **Scheduling**: Create meeting via web (workrooms.com), share link
  2. **Headset**: Don Quest headset, launch Workrooms app
  3. **Avatar**: Select/customise avatar (one-time setup)
  4. **Entry**: Click meeting link, enter virtual room
  5. **Seating**: Sit at virtual conference table (position affects spatial audio)

  ### During Meeting
  - **Voice**: Speak naturally, spatial audio localises voices (sounds come from avatar positions)
  - **Gestures**: Raise hand, thumbs up, wave (controller buttons or hand tracking)
  - **Whiteboard**: Walk to whiteboard, draw with controller/finger
  - **Screen Share**: Share desktop, appears on virtual screen in room
  - **Keyboard**: Type notes on physical keyboard (passthrough shows hands/keyboard)

  ### Leaving
  - **Exit**: Remove headset or click "Leave Room"
  - **Persistence**: Whiteboards, room configuration saved for next meeting

  ## Comparison to Competing Platforms

  | Feature | Horizon Workrooms | [[TELE-026-microsoft-mesh\|Microsoft Mesh]] | [[TELE-027-spatial-platform\|Spatial]] |
  |---------|------------------|----------------------|---------|
  | **Platform** | Meta Quest only | HoloLens, Quest, PC VR | Quest, Vision Pro, Web |
  | **Avatars** | Stylised, photorealistic (Pro) | Microsoft Mesh avatars | Photorealistic (ReadyPlayerMe) |
  | **Max Users (VR)** | 16 | 100+ | 50 |
  | **Integration** | Zoom, Meet, Slack | Microsoft Teams, Azure | Discord, Slack |
  | **Price** | Free | Included with Teams Premium (£6.90/user/month) | Free tier, £25/month Pro |
  | **Focus** | Enterprise meetings | Enterprise/education | Creative collaboration |

  ## Advantages and Limitations

  ### Advantages
  - **Free**: No cost for core features (hardware investment only)
  - **Ease of Use**: Simple web scheduling, intuitive VR interface
  - **Social Presence**: 84% of face-to-face social presence (Stanford VR Lab study)
  - **Hybrid Meetings**: VR and video participants co-exist
  - **Persistent Spaces**: Rooms remain configured for recurring meetings

  ### Limitations
  - **Hardware Lock-In**: Requires Meta Quest (£300-£1,000 investment)
  - **Comfort**: Headset discomfort after 60-90 minutes
  - **Realism**: Stylised avatars less professional than photorealistic
  - **Features**: Fewer productivity integrations than Microsoft Teams/Zoom
  - **Privacy**: Meta collects extensive behavioural data (gaze, movement)
  - **Accessibility**: Limited options for visually/motor-impaired users

  ## Use Cases

  ### Remote Team Meetings
  - Weekly standups, sprint planning, retrospectives
  - More engaging than video calls, less fatigue
  - Spatial audio enables natural turn-taking

  ### Client Consultations
  - Architects present 3D building models in VR
  - Consultants collaborate with remote clients on whiteboards
  - Professional appearance via customised meeting rooms

  ### Training and Onboarding
  - New hire orientations in virtual corporate HQ
  - Soft skills training (presentations, negotiations)
  - Safety training simulations

  ### Design Reviews
  - Engineers inspect 3D CAD models collaboratively
  - Product managers review UI/UX prototypes
  - Creative teams critique designs on virtual whiteboards

  ## Future Roadmap

  **Near-Term (2025-2026)**:
  - Photorealistic Codec Avatars for all Quest models (currently Quest Pro only)
  - AI meeting assistants ([[TELE-107-ai-meeting-assistants]]) for transcription, action items
  - Mobile app participation (phone/tablet users join VR meetings as 2D avatars)

  **Medium-Term (2026-2028)**:
  - Full-body avatars with leg tracking
  - Haptic gloves for tactile whiteboard interaction ([[TELE-203-haptic-feedback-telepresence]])
  - Real-time language translation ([[TELE-105-real-time-language-translation]])

  **Long-Term (2028+)**:
  - AR glasses support (replace VR headsets)
  - Holographic projection (no headset required)
  - Autonomous AI avatars attending meetings on user's behalf

  #### Related Concepts
  - [[TELE-001-telepresence]]
  - [[TELE-020-virtual-reality-telepresence]]
  - [[TELE-026-microsoft-mesh]]
  - [[TELE-100-ai-avatars]]
  - [[TELE-302-shared-whiteboards]]
  - [[Metaverse-Telepresence Bridge]]

  #### References
  1. Meta. (2025). *Horizon Workrooms Product Documentation*. https://www.oculus.com/workrooms
  2. Bailenson, J. (2021). "Nonverbal Overload: A Theoretical Argument for the Causes of Zoom Fatigue". *Technology, Mind, and Behaviour*, 2(1).
  3. Stanford VR Lab. (2025). *Social Presence in VR Telepresence Study*.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z