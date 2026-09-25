Presence technology refers to systems and protocols that detect, represent, and communicate the real-time availability and contextual state of users or entities within digital and physical environments. It aggregates signals such as location, device activity, calendar status, and explicit user input to publish a presence indicator consumed by communication, collaboration, and ambient computing applications. In extended reality contexts, presence technology additionally encompasses volumetric capture and avatar fidelity systems that convey embodied social presence.

### Overview

- Presence technology originated in instant messaging (ICQ, Jabber) as simple availability indicators. It matured into rich presence (activity, location, device) consumed by enterprise UC platforms. With XR adoption, presence has expanded to spatial presence — the subjective sense of being co-located in a shared virtual space. This requires low-latency body tracking, expressive avatar rendering, and haptic feedback to maintain believable social presence. The [[Metaverse]] vision depends critically on high-fidelity presence technology.

### Key aspects

- **Availability states** — online, busy, away, do-not-disturb, custom activity.
- **Contextual enrichment** — calendar integration, location, device type, activity inference.
- **Spatial presence** — 3D avatar position, gaze direction, gesture replication.
- **Volumetric capture** — photorealistic real-time 3D reconstruction of the user.
- **Presence protocols** — SIMPLE (SIP-based), XMPP/PEP, proprietary cloud presence APIs.

### Mechanisms

- Presence agents on user devices collect signals, aggregate them, and publish to a presence server or P2P mesh. Subscribers receive notify messages when state changes. In XR, sensor arrays (depth cameras, IMUs) feed a body-pose estimation pipeline whose output is transmitted as skeletal or mesh data to remote renderers.

### Applications

- Enterprise collaboration (Microsoft Teams, Cisco Webex presence indicators).
- Social VR platforms (Meta Horizon, VRChat avatar presence).
- Remote assistance and AR telepresence.
- Smart building occupancy and wayfinding systems.

### Provenance

