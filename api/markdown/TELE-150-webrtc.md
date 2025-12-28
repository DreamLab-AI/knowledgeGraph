- ### OntologyBlock
  id:: webrtc-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: TC-0150
	- preferred-term:: WebRTC
	- source-domain:: tc
	- owl:class:: tc:WebRTC
	- status:: active
	- public-access:: true
	- definition:: "An open-source framework and W3C standard enabling peer-to-peer real-time communication of audio, video, and data directly between web browsers and mobile applications without requiring intermediary servers, supporting telepresence, video conferencing, and collaborative applications through standardised JavaScript APIs."
	- maturity:: mature
	- owl:physicality:: ConceptualEntity
	- owl:role:: Object
	- is-subclass-of:: [[Communication Protocol]]
	- #### Relationships
	  id:: webrtc-relationships
	  collapsed:: true
		- implements:: [[RealTimeCommunicationProtocol]]
		- instance-of:: [[PeerToPeerNetwork]]
		- requires:: [[NATraversal]]
		- requires:: [[SignallingServer]]
		- requires:: [[InternetConnectivity]]
		- enables:: [[VideoConferencing]]
		- enables:: [[TELE-001-telepresence]]
		- enables:: [[ScreenSharing]]
		- enables:: [[TELE-020-virtual-reality-telepresence]]
		- ngm:relatedTo:: [[SIP]]
		- uses:: [[TELE-152-low-latency-networking]]
		- ngm:relatedTo:: [[RTP]]
		- uses:: [[TELE-151-real-time-protocols]]
		- has-component:: [[MediaCapture]]
		- has-component:: [[ICENegotiation]]
		- has-component:: [[DataChannel]]
		- has-component:: [[PeerConnection]]

## Definition

**WebRTC** (Web Real-Time Communication) is an open-source project and W3C/IETF standard that enables real-time peer-to-peer communication of audio, video, and arbitrary data between web browsers and native applications without requiring plugins or proprietary software. Originally developed by Google and released in 2011, WebRTC has become the foundational technology for modern video conferencing (Zoom, Google Meet, Microsoft Teams), telepresence platforms ([[TELE-020-virtual-reality-telepresence]]), and collaborative web applications.

WebRTC operates through three core JavaScript APIs: `getUserMedia` captures audio/video from device cameras/microphones, `RTCPeerConnection` establishes peer-to-peer encrypted connections for streaming media, and `RTCDataChannel` transmits arbitrary application data. The framework handles complex networking challenges including NAT traversal (using ICE/STUN/TURN protocols), adaptive bitrate encoding, packet loss concealment, and echo cancellation, abstracting these complexities behind simple browser APIs.

The protocol's peer-to-peer architecture reduces latency by eliminating media relay servers (in optimal cases), whilst built-in encryption (DTLS-SRTP) ensures secure transmission. WebRTC's browser integration enables zero-install video calling directly from web links, revolutionising remote collaboration accessibility.

## Current Landscape (2025)

WebRTC has achieved ubiquitous deployment in 2025, powering 97% of browser-based video conferencing and serving as the de facto standard for real-time web communication.

**Adoption Statistics**:
- 4.2 billion monthly active WebRTC users globally (Statista, 2025)
- 98.7% browser support (Chrome, Firefox, Safari, Edge, Opera)
- 87% of telepresence platforms use WebRTC backend ([[TELE-028-horizon-workrooms]], [[TELE-026-microsoft-mesh]])
- Average latency: 47ms peer-to-peer, 112ms through TURN relays (Callstats.io, 2025)

**Technology Evolution**:
- **WebRTC 2.0** (standardised 2024): AV1 codec support, simulcast improvements, insertable streams
- **WebTransport** integration (2025): QUIC-based low-latency data transport
- **WebCodecs API**: Direct codec access for custom processing pipelines
- **Machine Learning Integration**: On-device neural noise suppression, background replacement

**UK Context**:
- **BT**: Deployed WebRTC for consumer video calling (BT MeetMe service)
- **BBC**: Uses WebRTC for live remote broadcasts and audience interaction
- **NHS**: Telehealth consultations via WebRTC (GP at Hand, Babylon Health)
- **University of Oxford**: Research on WebRTC quality optimisation for education

## Technical Architecture

### Core Components

#### 1. Media Capture (`getUserMedia`)
```javascript
navigator.mediaDevices.getUserMedia({
  video: { width: 1920, height: 1080, frameRate: 30 },
  audio: { echoCancellation: true, noiseSuppression: true }
}).then(stream => {
  // Use media stream
});
```
- Accesses camera, microphone, screen capture
- Applies constraints (resolution, frame rate, device selection)
- Provides `MediaStream` object for transmission

#### 2. Peer Connection (`RTCPeerConnection`)
```javascript
const pc = new RTCPeerConnection({
  iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
});
pc.addTrack(audioTrack, localStream);
pc.ontrack = (event) => {
  remoteVideo.srcObject = event.streams[0];
};
```
- Negotiates connection parameters (SDP offer/answer)
- Handles ICE candidate gathering for NAT traversal
- Encrypts media streams (DTLS-SRTP)
- Adapts bitrate based on network conditions

#### 3. Data Channel (`RTCDataChannel`)
```javascript
const dataChannel = pc.createDataChannel('chat');
dataChannel.send('Hello, World!');
```
- Transmits arbitrary binary/text data
- Configurable reliability (ordered/unordered, reliable/unreliable)
- Used for file transfer, game state, collaborative editing

### Network Traversal (ICE)

**Problem**: Peers behind NATs/firewalls cannot directly connect
**Solution**: Interactive Connectivity Establishment (ICE) protocol

1. **STUN** (Session Traversal Utilities for NAT): Discovers public IP/port
2. **TURN** (Traversal Using Relays around NAT): Relays media when direct connection fails
3. **ICE**: Tests candidate pairs (local, server-reflexive, relay) to find optimal path

**Success Rates** (2025):
- Direct peer-to-peer (host candidates): 34%
- Through STUN (server-reflexive): 58%
- Through TURN relay: 8% (fallback)

### Codecs and Encoding

**Video Codecs** (2025 Support):
- **VP8**: Baseline (universal browser support)
- **VP9**: Higher efficiency, 4K capable
- **H.264**: Hardware acceleration, Apple preference
- **AV1**: Newest, 30% better compression than VP9

**Audio Codecs**:
- **Opus**: Default, best quality-to-bitrate ratio
- **G.711**: Legacy compatibility
- **iSAC/iLBC**: Low-bitrate fallback

**Adaptive Bitrate**:
- Simulcast: Sends multiple resolutions simultaneously
- SVC (Scalable Video Coding): Layered encoding
- Bandwidth estimation: REMB, Transport-CC algorithms

## Applications

### Video Conferencing
- **Google Meet**: 100% WebRTC (300M daily users)
- **Zoom**: WebRTC for browser clients
- **Microsoft Teams**: WebRTC with custom signalling
- **Jitsi Meet**: Open-source WebRTC conferencing

### Telepresence Platforms
- [[TELE-028-horizon-workrooms]]: WebRTC streams VR avatars
- [[TELE-026-microsoft-mesh]]: Hybrid WebRTC/proprietary
- Browser-based metaverse platforms (Spatial web client)

### Telehealth
- GP consultations (NHS GP at Hand)
- Mental health therapy (BetterHelp, Talkspace)
- Remote patient monitoring (ECG streaming)

### Education
- Virtual classrooms (Google Classroom video)
- Remote labs (browser-based oscilloscope control)
- Peer tutoring platforms

### Customer Service
- Live chat with video (bank support)
- Co-browsing (agent sees customer screen)
- Remote assistance (AR-guided repairs)

## Advantages and Limitations

### Advantages
- **Zero Install**: Works in browsers without plugins
- **Peer-to-Peer**: Lower latency, reduced server costs
- **Security**: Mandatory encryption (DTLS-SRTP)
- **Cross-Platform**: Web, iOS, Android, desktop
- **Open Source**: Libre implementation (no licencing fees)

### Limitations
- **Firewall Restrictions**: Corporate networks block UDP (8% TURN fallback)
- **Bandwidth Sensitivity**: Requires 1-3 Mbps per HD stream
- **Battery Drain**: Encoding/decoding taxing on mobile devices
- **Scalability**: Mesh topology (everyone-to-everyone) limited to ~6 participants
- **Browser Inconsistencies**: Implementation differences between Chrome/Safari/Firefox

## Scaling Architectures

### Mesh Topology
- **Design**: Every peer connects to every other peer
- **Limit**: 4-6 participants before bandwidth exhaustion
- **Use Case**: Small meetings, pair programming

### SFU (Selective Forwarding Unit)
- **Design**: Centralised server forwards streams (no transcoding)
- **Scaling**: 100+ participants
- **Examples**: Janus, mediasoup, Pion
- **Use Case**: Large meetings, webinars

### MCU (Multipoint Control Unit)
- **Design**: Server mixes all streams into composite
- **Advantage**: Low client bandwidth (single stream)
- **Disadvantage**: High server CPU, layout inflexibility

### Hybrid
- **Design**: SFU with server-side simulcast selection
- **Example**: Google Meet (adaptive stream selection)

## Future Directions

**Near-Term (2025-2027)**:
- **WebTransport** replacing WebRTC data channels for lower latency
- **AV2 codec** (successor to AV1) with 50% better compression
- **ML-enhanced encoding**: AI-driven bitrate optimisation

**Medium-Term (2027-2030)**:
- **Quantum-resistant encryption** for WebRTC
- **6G integration** with <1ms latency guarantees
- **Holographic WebRTC** transmitting light-field data

**Long-Term (2030+)**:
- **Neural codecs** compressing video to <100 kbps with photorealism
- **Tactile internet** integration (haptic feedback over WebRTC)
- **Brain-computer interface** streaming (thought-to-WebRTC)

## Related Concepts

- [[TELE-001-telepresence]]
- [[TELE-020-virtual-reality-telepresence]]
- [[TELE-151-real-time-protocols]]
- [[TELE-152-low-latency-networking]]
- [[TELE-153-5g-telepresence]]

## Standards and Organisations

- **W3C WebRTC Working Group**: Browser API standardisation
- **IETF RTCWEB Working Group**: Protocol specifications (ICE, DTLS, SRTP)
- **Web Real-Time Communications (WebRTC) Consortium**: Industry coordination

## Academic References

1. Loreto, S., & Romano, S. P. (2014). *Real-Time Communication with WebRTC: Peer-to-Peer in the Browser*. O'Reilly Media.
2. Dutton, S. (2025). "Getting Started with WebRTC". *HTML5 Rocks* (archived).
3. Jansen, B., et al. (2018). "Performance Evaluation of WebRTC-based Video Conferencing". *ACM SIGMETRICS Performance Evaluation Review*.

## Metadata

- **Term-ID**: TELE-150
- **Last Updated**: 2025-11-16
- **Maturity**: Mature
- **Authority Score**: 0.96
- **UK Context**: High (BT, BBC, NHS adoption)
- **Cross-Domain**: Bridges to Networking
