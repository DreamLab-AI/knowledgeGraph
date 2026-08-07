public:: true

# Unified Communications
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:219156fbd0be4bd08a0d4add14e7910fe3ea1d286615fd34b6fdabfd80dedeb9",
  "@type": "Page",
  "vc:slug": "unified-communications",
  "title": "Unified Communications",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:video-conferencing",
      "vc:label": "Video Conferencing"
    },
    {
      "@id": "urn:visionflow:linked:presence-technology",
      "vc:label": "Presence Technology"
    },
    {
      "@id": "urn:visionflow:linked:digital-workplace-platform",
      "vc:label": "Digital Workplace Platform"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:unified-communications",
  "@type": "Class",
  "label": "Unified Communications",
  "definition": "The integration of enterprise communication channels — voice telephony, video conferencing, instant messaging, presence, voicemail, and content sharing — into a single coherent platform with a consistent user experience across devices, so that a conversation can move fluidly between modalities; delivered today predominantly as cloud services (UCaaS) such as Microsoft Teams, Zoom, and Cisco Webex.",
  "domain": "distributed-collaboration",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:real-time-communication",
    "label": "Real-Time Communication"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:video-conferencing",
        "label": "Video Conferencing"
      },
      {
        "@id": "urn:ngm:class:instant-messaging",
        "label": "Instant Messaging"
      },
      {
        "@id": "urn:ngm:class:presence-technology",
        "label": "Presence Technology"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-workplace-platform",
        "label": "Digital Workplace Platform"
      },
      {
        "@id": "urn:ngm:class:collaboration-platform",
        "label": "Collaboration Platform"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "The integration of enterprise communication channels — voice telephony, video conferencing, instant messaging, presence, voicemail, and content sharing — into a single coherent platform with a consistent user experience across devices, so that a conversation can move fluidly between modalities; delivered today predominantly as cloud services (UCaaS) such as Microsoft Teams, Zoom, and Cisco Webex."

- ### Semantic Classification
  - owl-class:: distributed-collaboration:UnifiedCommunications
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Real-Time Communication]]
  - has-part:: [[Video Conferencing]]
  - has-part:: [[Presence Technology]]
  - related-to:: [[Digital Workplace Platform]]

- ### Content

  ## Definition

  **Unified communications (UC)** is the architectural and product strategy of consolidating an organisation's communication channels — telephony, [[Video Conferencing]], instant messaging, voicemail, presence, and screen or content sharing — into one integrated platform with a shared directory, common identity, and consistent experience across desk phones, desktops, and mobile devices. The defining capability is fluid modality switching: a chat escalates to a call, the call adds video and participants, and the session carries its context (participants, shared documents, history) across each transition. [[Presence Technology]] is the connective tissue, signalling availability so colleagues choose the right channel before initiating contact.

  UC emerged in the 2000s from the convergence of enterprise IP telephony (VoIP/PBX vendors such as Cisco, Avaya, and Nortel) with messaging and conferencing software, standardised around protocols including SIP for session control and, later, WebRTC for browser-native media. The industry distinguishes **UC&C** (unified communications and collaboration, folding in persistent team workspaces) and **UCaaS** (UC as a cloud service), which has displaced on-premises PBX deployments in most sectors. Adjacent integration patterns include CPaaS (communications APIs embedded into applications) and contact-centre platforms (CCaaS), which increasingly share infrastructure with UC suites.

  Within this knowledge graph, UC is the communications substrate of the [[Digital Workplace Platform]]: the workplace platform adds document co-editing, workflow, and application integration on top of the real-time channel layer that UC provides.

  ## Current Landscape

  - **Market structure**: Microsoft Teams (embedded in Microsoft 365, with PSTN calling plans), Zoom Workplace, Cisco Webex, Google Workspace/Meet, and RingCentral dominate UCaaS; legacy on-premises PBX estates continue to migrate to cloud calling
  - **Interoperability**: SIP trunking connects UC platforms to the PSTN; cross-platform meeting interop (e.g. Teams and Zoom joining each other's meetings, standards work in the IETF and W3C around WebRTC) remains partial, and message-level federation is limited
  - **AI layer**: meeting transcription, live translation, summarisation, and assistant features (Microsoft Copilot, Zoom AI Companion, Webex AI) have become the primary axis of vendor differentiation
  - **Operational concerns**: quality-of-service management for real-time media, emergency-calling compliance (e.g. UK 999/E911 obligations for cloud telephony), retention and eDiscovery of chat records, and security of federated guest access
