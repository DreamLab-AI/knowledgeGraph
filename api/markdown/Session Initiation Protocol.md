The Session Initiation Protocol (SIP) is an application-layer signalling protocol used to establish, modify and terminate real-time communication sessions such as voice and video calls over IP networks. It handles user location, session setup negotiation and call control, delegating the actual media transport to companion protocols. SIP is text-based and request-response oriented, modelled on HTTP, and underpins much of modern internet telephony and unified communications.

### Overview

- SIP solves the signalling problem of multimedia communication: locating the called party, agreeing on session parameters, and managing the lifecycle of a call. It deliberately does not carry the media itself.
- The protocol is text-based and modelled on HTTP, using requests such as INVITE, ACK, BYE and REGISTER and numeric response codes to drive a call state machine between endpoints and intermediaries.
- SIP infrastructure comprises user agents, registrars, proxies and redirect servers that cooperate to route signalling to the right destination.

### Key aspects

- Methods: INVITE, ACK, BYE, CANCEL, REGISTER, OPTIONS and others that drive session state.
- Addressing: SIP URIs resembling email addresses identify users independently of their current location.
- Registration: endpoints register their current network location so calls can reach them.
- Separation of concerns: signalling is decoupled from media transport, which a session description negotiates.
- Extensibility: header-based design accommodates presence, messaging and conferencing extensions.

### Mechanisms

- An INVITE carries a session description offering codecs and transport details, answered in the response.
- Proxies forward requests hop by hop toward the registered location of the callee.
- Once signalling completes, media flows directly between endpoints over a separate transport.
- The protocol relies on an underlying [[Network Protocol]] stack for delivery and on broader [[Infrastructure]] for connectivity.

### Applications

- Voice-over-IP telephony and SIP trunking between enterprises and carriers.
- Call setup for [[Video Conferencing]] and unified communications platforms.
- Presence and instant-messaging signalling in collaboration suites.
- Interconnection of [[Real-Time Communication]] services across providers.

### Provenance

