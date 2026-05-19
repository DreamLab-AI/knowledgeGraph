- ### Definition
  - "Real-time audio-visual communication technology enabling multiple geographically distributed participants to see and hear each other simultaneously through internet-connected devices, supporting face-to-face interaction across distances."

- ### Semantic Classification
  - owl-class:: distributed-collaboration:VideoConferencing
  - owl-role:: CommunicationTool

- ### Relationships
  - is-subclass-of:: [[TC-0010-Synchronous-Collaboration]]
  - requires:: [[Real-Time Communication Protocols]]
  - enables:: [[Face-to-Face Interaction]]
  - implements:: [[TELE-150-webrtc]]

- ### Content
  Video Conferencing

  ## Definition

  **Video Conferencing** is a synchronous telecommunication technology that transmits real-time audio and video between two or more participants at different locations. Unlike traditional telephone calls (audio-only) or text chat (asynchronous), video conferencing provides visual presence enabling facial expressions, gestures, and environmental context critical for effective human communication.

  Core components:
  - **Video Capture**: Camera acquiring participant image
  - **Audio Capture**: Microphone recording participant voice
  - **Compression**: Codec reducing bandwidth requirements (H.264, VP9, AV1)
  - **Transmission**: Network protocols delivering media streams (WebRTC, SIP)
  - **Rendering**: Display and speaker presenting remote participants
  - **Control Interface**: UI for muting, screen sharing, participant management

  ## Technical Architecture

  ### Client-Server vs. Peer-to-Peer

  **Centralized Architecture** (e.g., Zoom, Teams):
  - **Media Server**: Central hub processing and mixing all streams
  - **Advantages**: Supports large meetings (100+ participants), recording, transcription
  - **Disadvantages**: Server bandwidth costs, single point of failure
  - **Topology**: Star network with server at center

  **Peer-to-Peer Architecture** (WebRTC):
  - **Direct Connection**: Participants exchange media directly
  - **Advantages**: Low latency, no server infrastructure required
  - **Disadvantages**: Scales poorly beyond ~8 participants (N² connections)
  - **Topology**: Mesh network between clients

  **Hybrid Architecture** (Selective Forwarding Units):
  - **SFU**: Server forwards packets without processing/mixing
  - **Advantages**: Scalable to 50+ participants with lower server load than MCU
  - **Topology**: Star with lightweight relay

  ### Video Codecs

  **H.264/AVC** (Advanced Video Coding):
  - **Adoption**: Universal support across all platforms
  - **Compression**: ~2 Mbps for 720p at 30 fps
  - **Latency**: 50-150ms encoding/decoding
  - **Patents**: Licensing fees for commercial use

  **VP8/VP9** (Google):
  - **Adoption**: WebRTC standard, royalty-free
  - **Compression**: 30% more efficient than H.264
  - **Browser Support**: Native in Chrome, Firefox, Edge

  **AV1** (Alliance for Open Media):
  - **Compression**: 50% more efficient than H.264
  - **Adoption**: Growing (YouTube, Netflix) but limited hardware acceleration
  - **Future**: Expected to replace VP9 by 2027

  ### Audio Codecs

  **Opus**:
  - **Adoption**: WebRTC standard, royalty-free
  - **Bitrate**: 6-510 kbps (adaptive)
  - **Latency**: Ultra-low (5-66ms algorithmic delay)
  - **Quality**: Superior to AAC and MP3 for speech

  **G.711** (Telephony):
  - **Legacy**: Traditional VoIP systems
  - **Bitrate**: 64 kbps (uncompressed)
  - **Latency**: Minimal but inefficient bandwidth

  ### Network Protocols

  **WebRTC** (Web Real-Time Communication):
  - **Components**: getUserMedia (capture), RTCPeerConnection (transmission), RTCDataChannel (data)
  - **NAT Traversal**: ICE, STUN, TURN for firewall penetration
  - **Encryption**: Mandatory DTLS-SRTP
  - **Adoption**: Native browser support, 90%+ of video platforms
  - **Reference**: [[TELE-150-webrtc]]

  **SIP** (Session Initiation Protocol):
  - **Use Case**: Enterprise VoIP and legacy video systems
  - **Features**: Call setup, transfer, termination
  - **Integration**: Often bridges to WebRTC via gateways

  **RTMP/HLS** (Streaming):
  - **RTMP**: Real-Time Messaging Protocol (Adobe Flash legacy)
  - **HLS**: HTTP Live Streaming (Apple, adaptive bitrate)
  - **Use Case**: Large-scale broadcasts (1,000+ viewers) with 10-30s latency

  ## Major Platforms (2025 UK Market)

  ### Zoom
  - **Market Share**: 28% UK enterprise
  - **Capacity**: Up to 1,000 participants (Enterprise plan)
  - **Features**: Breakout rooms, polling, virtual backgrounds, whiteboard
  - **AI**: Real-time transcription, meeting summaries, noise suppression
  - **Security**: End-to-end encryption (optional), waiting rooms

  ### Microsoft Teams
  - **Market Share**: 41% UK enterprise (integrated with Microsoft 365)
  - **Capacity**: 10,000 view-only (Town Hall), 1,000 interactive
  - **Features**: SharePoint integration, persistent chat, app ecosystem
  - **AI**: Copilot meeting summaries, live translations (40+ languages)
  - **Hybrid**: Together Mode (AI-arranged participants in shared virtual space)

  ### Google Meet
  - **Market Share**: 18% UK enterprise (Google Workspace)
  - **Capacity**: 500 participants (Enterprise)
  - **Features**: Google Calendar integration, live captions, companion mode
  - **AI**: Noise cancellation, auto-framing, low-light enhancement
  - **Accessibility**: Real-time captions in 70+ languages

  ### Cisco Webex
  - **Market Share**: 9% UK enterprise (strong in government/regulated industries)
  - **Capacity**: 100,000 view-only (Webex Events)
  - **Features**: Gesture recognition, real-time translation, holographic calling
  - **Security**: ISO 27001, SOC 2, FedRAMP certified
  - **Hardware**: Integration with Cisco telepresence endpoints

  ## Quality Metrics

  ### Video Quality Tiers

  **Low (SD)**: 480p @ 15 fps, ~0.5 Mbps
  - **Use Case**: Low bandwidth connections (rural areas, mobile)
  - **Experience**: Acceptable for basic meetings, no fine details visible

  **Medium (HD)**: 720p @ 30 fps, ~2 Mbps
  - **Use Case**: Standard business meetings
  - **Experience**: Comfortable for most use cases, facial expressions clear

  **High (Full HD)**: 1080p @ 30 fps, ~4 Mbps
  - **Use Case**: Executive presentations, large screens
  - **Experience**: Crisp detail, suitable for projection

  **Ultra (4K)**: 2160p @ 30 fps, ~15 Mbps
  - **Use Case**: Specialized applications (design review, medical imaging)
  - **Experience**: Excessive for typical meetings, rare adoption

  ### Network Requirements

  **Minimum** (Voice call quality):
  - **Download**: 1 Mbps
  - **Upload**: 0.5 Mbps
  - **Latency**: <300ms (noticeable lag)
  - **Jitter**: <50ms

  **Recommended** (Smooth HD video):
  - **Download**: 3 Mbps
  - **Upload**: 2 Mbps
  - **Latency**: <100ms (imperceptible lag)
  - **Jitter**: <30ms
  - **Packet Loss**: <1%

  **Optimal** (Multi-stream + screen share):
  - **Download**: 10 Mbps
  - **Upload**: 5 Mbps
  - **Latency**: <50ms
  - **Jitter**: <10ms

  **UK Context**: 97% of households exceed recommended speeds (Ofcom, 2025)

  ## AI Enhancements

  ### Background Manipulation
  - **Virtual Backgrounds**: Static images or videos replacing real background
  - **Background Blur**: Gaussian blur isolating participant from environment
  - **Background Removal**: Transparency/green screen effect
  - **Technology**: Semantic segmentation neural networks (DeepLab, Mask R-CNN)

  ### Noise Suppression
  - **Deep Learning**: RNNoise, Krisp removing background noise (keyboard clicks, sirens, barking)
  - **Echo Cancellation**: Acoustic echo suppression preventing feedback
  - **Gain Control**: Automatic normalization of volume levels

  ### Gaze Correction (Eye Contact Simulation)
  - **Problem**: Camera positioned above/below screen creates misaligned gaze
  - **Solution**: Generative models repositioning eyes to appear looking at camera
  - **Platforms**: Apple Vision Pro, NVIDIA Broadcast, Microsoft Teams
  - **Ethics**: Uncanny valley effect, disclosure of manipulation

  ### Live Transcription and Translation
  - **Speech-to-Text**: Real-time captioning (Whisper, Google Speech API)
  - **Translation**: Multilingual subtitles (Microsoft Translator, Google Translate)
  - **Accuracy**: 92-97% for English (lower for accents/noise)
  - **Reference**: [[TELE-105-real-time-language-translation]]

  ### Meeting Intelligence
  - **Summarization**: GPT-based extraction of key points and action items
  - **Sentiment Analysis**: Detecting participant engagement and frustration
  - **Speaker Diarization**: Identifying who said what
  - **Integration**: Otter.ai, Fireflies.ai, Microsoft Copilot
  - **Reference**: [[TELE-107-ai-meeting-assistants]]

  ## Security and Privacy

  ### Encryption

  **Transport Encryption** (Standard):
  - **TLS/DTLS**: Encrypts data in transit from client to server
  - **Protection**: Prevents eavesdropping by network intermediaries
  - **Limitation**: Platform provider can access unencrypted content

  **End-to-End Encryption** (E2EE):
  - **Mechanism**: Only participants hold decryption keys, server cannot decrypt
  - **Platforms**: Zoom (optional), FaceTime, Signal
  - **Trade-offs**: Disables cloud recording, transcription, some AI features
  - **Verification**: Security codes displayed to participants for key confirmation

  ### Privacy Concerns

  **Data Collection**:
  - **Video/Audio**: Recorded meetings stored on platform servers
  - **Metadata**: Participant lists, meeting duration, attention tracking
  - **Behavioral Analytics**: Eye gaze, sentiment, engagement metrics
  - **Regulation**: GDPR (UK/EU), CCPA (California) require consent and transparency

  **Zoom Controversies** (2020-2021):
  - **"Zoombombing"**: Uninvited participants disrupting meetings
  - **Attention Tracking**: Monitoring if participants focused on Zoom window (removed after backlash)
  - **China Server Routing**: Encryption keys accidentally routed through Chinese servers
  - **Resolutions**: Default passwords, waiting rooms, end-to-end encryption option

  ## Use Cases

  ### Enterprise Meetings
  - **Internal**: Team standups, 1:1s, all-hands, sprint planning
  - **External**: Client presentations, sales demos, vendor meetings
  - **Governance**: Board meetings, AGMs (with voting integration)

  ### Education
  - **Lectures**: Synchronous online teaching (COVID-19 accelerated adoption)
  - **Office Hours**: Instructor-student consultations
  - **Group Projects**: Student collaboration
  - **UK Adoption**: 89% of universities use video conferencing regularly (UCAS, 2025)

  ### Healthcare (Telemedicine)
  - **Primary Care**: GP consultations for non-emergency conditions
  - **Specialist Referrals**: Remote diagnosis by specialists in other hospitals
  - **Mental Health**: Therapy sessions via secure video
  - **Regulation**: UK NHS mandates video consultation options (NHS Long Term Plan, 2024)

  ### Social Connection
  - **Family**: Staying connected with distant relatives
  - **Virtual Events**: Weddings, funerals, celebrations during COVID-19
  - **Online Communities**: Book clubs, support groups, hobbyist gatherings

  ### Legal Proceedings
  - **Hearings**: Remote court appearances (accelerated by COVID-19)
  - **Depositions**: Witness testimony via video link
  - **Prison Visits**: Family communication with incarcerated individuals
  - **UK**: 67% of court hearings in 2025 are hybrid/remote (Ministry of Justice)

  ## Challenges and Solutions

  ### "Zoom Fatigue"
  **Causes**:
  - **Excessive Eye Contact**: Constant close-up faces triggers fight-or-flight
  - **Cognitive Load**: Processing non-verbal cues from multiple small windows
  - **Self-View Stress**: Constant self-monitoring like performing
  - **Reduced Mobility**: Staying camera-framed vs. natural movement

  **Solutions**:
  - **Hide Self-View**: Disable camera preview
  - **Speaker View**: Focus on active speaker rather than gallery
  - **Audio-Only Periods**: Camera breaks during long meetings
  - **Walking Meetings**: Audio-only calls with headphones
  - **Research**: University of Manchester (2025) recommends 5-minute camera breaks every hour

  ### Accessibility
  **Visual Impairments**:
  - **Screen Readers**: Incompatibility with video layouts
  - **Live Captions**: Essential for following audio content
  - **High Contrast**: UI accessibility for low vision

  **Hearing Impairments**:
  - **Captions/Subtitles**: Real-time or post-meeting transcripts
  - **Sign Language**: Interpreter windows prominently displayed
  - **Visual Alerts**: Flashing indicators for audio notifications

  **Motor Impairments**:
  - **Voice Commands**: Hands-free control
  - **Keyboard Shortcuts**: Alternative to mouse/touch navigation
  - **Eye Tracking**: Gaze-based interface control (Tobii integration)

  **UK Legal Requirement**: Equality Act 2010 mandates reasonable accessibility accommodations

  #### Future Directions
  ### Near-Term (2025-2027)
  - **Holographic Displays**: Glasses-free 3D projection (Looking Glass displays)
  - **Spatial Audio**: Directional sound matching visual participant position
  - **AI Avatars**: Photorealistic digital representations ([[TELE-100-ai-avatars]])
  - **Haptic Feedback**: Tactile sensation for handshakes/pats

  ### Medium-Term (2027-2030)
  - **VR Integration**: Seamless transition from 2D to immersive meetings ([[TELE-020-virtual-reality-telepresence]])
  - **Neural Interfaces**: Thought-based mute/unmute, expression control
  - **Real-Time Deep Fakes**: Ethically contentious identity masking
  - **Volumetric Capture**: True 3D video conferencing

  ### Long-Term (2030+)
  - **Holographic Telepresence**: Life-size projections eliminating screens
  - **Brain-Computer Interfaces**: Direct neural communication
  - **Digital Twins**: AI agents attending on behalf of participants

  #### Related Concepts
  **Parent Category**:
  - [[TC-0010-Synchronous-Collaboration]] - Real-time interaction mode

  **Sibling Concepts**:
  - [[TC-0012-Screen-Sharing]] - Display broadcasting
  - [[TC-0013-Virtual-Meeting]] - Structured gatherings
  - [[TC-0016-Remote-Pair-Programming]] - Collaborative coding

  **Technical Infrastructure**:
  - [[TELE-150-webrtc]] - Communication protocol
  - [[TELE-153-5g-telepresence]] - Mobile networking
  - [[Real-Time Communication Protocols]] - Network standards

  **AI Enhancements**:
  - [[TELE-100-ai-avatars]] - Digital representation
  - [[TELE-105-real-time-language-translation]] - Multilingual communication
  - [[TELE-107-ai-meeting-assistants]] - Intelligent automation

  **Immersive Evolution**:
  - [[TELE-020-virtual-reality-telepresence]] - VR meetings
  - [[TELE-021-augmented-reality-collaboration]] - AR overlays

  #### References
  1. Bailenson, J. N. (2021). "Nonverbal Overload: A Theoretical Argument for the Causes of Zoom Fatigue". *Technology, Mind, and Behavior*, 2(1).
  2. Fauville, G., et al. (2021). "Zoom Exhaustion & Fatigue Scale". *Computers in Human Behavior Reports*, 4, 100119.
  3. Raake, A., & Egger, S. (2014). *Quality and Quality of Experience*. Springer.
  4. Handley, M., et al. (2006). "SIP: Session Initiation Protocol". *RFC 3261*, IETF.
  5. Loreto, S., & Romano, S. P. (2014). *Real-Time Communication with WebRTC*. O'Reilly Media.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z