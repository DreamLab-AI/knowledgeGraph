public:: true

# Session Initiation Protocol

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:session-initiation-protocol", "@type":"Page", "title":"Session Initiation Protocol", "vc:slug":"session-initiation-protocol", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:session-initiation-protocol",
  "@type":"Class",
  "label":"Session Initiation Protocol",
  "definition":"The Session Initiation Protocol (SIP) is an application-layer signalling protocol used to establish, modify and terminate real-time communication sessions such as voice and video calls over IP networks. It handles user location, session setup negotiation and call control, delegating the actual media transport to companion protocols. SIP is text-based and request-response oriented, modelled on HTTP, and underpins much of modern internet telephony and unified communications.",
  "domain":"infrastructure",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:communication-protocol","label":"Communication Protocol"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:real-time-communication","label":"Real-Time Communication"}],
    "hasPart":[{"@id":"urn:ngm:class:network-protocol","label":"Network Protocol"}],
    "requires":[{"@id":"urn:ngm:class:network-protocol","label":"Network Protocol"}],
    "enables":[{"@id":"urn:ngm:class:video-conferencing","label":"Video Conferencing"}],
    "uses":[{"@id":"urn:ngm:class:network-protocol","label":"Network Protocol"}],
    "dependsOn":[{"@id":"urn:ngm:class:infrastructure","label":"Infrastructure"}],
    "supports":[{"@id":"urn:ngm:class:real-time-communication","label":"Real-Time Communication"}],
    "implements":[{"@id":"urn:ngm:class:communication-protocol","label":"Communication Protocol"}],
    "relatedTo":[{"@id":"urn:ngm:class:video-conferencing","label":"Video Conferencing"},{"@id":"urn:ngm:class:communication-protocol","label":"Communication Protocol"}],
    "bridgesTo":[{"@id":"urn:ngm:class:real-time-communication","label":"Real-Time Communication"}],
    "contrastsWith":[{"@id":"urn:ngm:class:network-protocol","label":"Network Protocol"}],
    "standardizedBy":[{"@id":"urn:ngm:class:standards","label":"Standards"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - The Session Initiation Protocol is a [[Communication Protocol]] for setting up, changing and tearing down real-time sessions over IP.
  - It performs signalling and call control for [[Real-Time Communication]], leaving media transport to companion protocols.
  - It is a foundational layer beneath [[Video Conferencing]] and internet telephony.
- ### Overview
  - SIP solves the signalling problem of multimedia communication: locating the called party, agreeing on session parameters, and managing the lifecycle of a call. It deliberately does not carry the media itself.
  - The protocol is text-based and modelled on HTTP, using requests such as INVITE, ACK, BYE and REGISTER and numeric response codes to drive a call state machine between endpoints and intermediaries.
  - SIP infrastructure comprises user agents, registrars, proxies and redirect servers that cooperate to route signalling to the right destination.
- ### Key aspects
  - Methods: INVITE, ACK, BYE, CANCEL, REGISTER, OPTIONS and others that drive session state.
  - Addressing: SIP URIs resembling email addresses identify users independently of their current location.
  - Registration: endpoints register their current network location so calls can reach them.
  - Separation of concerns: signalling is decoupled from media transport, which a session description negotiates.
  - Extensibility: header-based design accommodates presence, messaging and conferencing extensions.
- ### Mechanisms
  - An INVITE carries a session description offering codecs and transport details, answered in the response.
  - Proxies forward requests hop by hop toward the registered location of the callee.
  - Once signalling completes, media flows directly between endpoints over a separate transport.
  - The protocol relies on an underlying [[Network Protocol]] stack for delivery and on broader [[Infrastructure]] for connectivity.
- ### Applications
  - Voice-over-IP telephony and SIP trunking between enterprises and carriers.
  - Call setup for [[Video Conferencing]] and unified communications platforms.
  - Presence and instant-messaging signalling in collaboration suites.
  - Interconnection of [[Real-Time Communication]] services across providers.
- ### Relationships
  - partOf:: [[Real-Time Communication]]
  - hasPart:: [[Network Protocol]]
  - requires:: [[Network Protocol]]
  - enables:: [[Video Conferencing]]
  - uses:: [[Network Protocol]]
  - dependsOn:: [[Infrastructure]]
  - supports:: [[Real-Time Communication]]
  - implements:: [[Communication Protocol]]
  - relatedTo:: [[Video Conferencing]]
  - relatedTo:: [[Communication Protocol]]
  - bridgesTo:: [[Real-Time Communication]]
  - contrastsWith:: [[Network Protocol]]
  - standardizedBy:: [[Standards]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
