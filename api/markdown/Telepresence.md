public:: true

# Telepresence
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5f2b28ae5084661d6fef595db065d91bb1a83915023743fe6a3df82f3128b7a2",
  "@type": "Page",
  "vc:slug": "telepresence",
  "title": "Telepresence",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "TC-9024"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Telepresence"
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
  "@id": "urn:ngm:class:telepresence",
  "@type": "Class",
  "label": "Telepresence",
  "definition": "Telepresence is a spatial computing concept and a type of spatial-computing.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:telepresence:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5f2b28ae5084661d6fef595db065d91bb1a83915023743fe6a3df82f3128b7a2"
  },
  "vc:resolutions": [],
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
  - Telepresence is a concept within the ngm domain.
- ### Semantic Classification
  - owl-class:: spatial-computing:Telepresence
  - owl-role:: Concept
- ### Relationships
  - <!-- No relationships defined -->
- ### Content
  ## Definition
  Telepresence encompasses technologies and experiences creating the perception of being physically present in remote locations, enabling natural interaction with distant environments and participants. This domain spans video telepresence systems with large displays and spatial audio replicating in-person meetings, robotic telepresence platforms providing mobile physical presence, and immersive XR systems enabling embodied presence in virtual or augmented spaces. High-fidelity video telepresence (Cisco TelePresence, Polycom RealPresence) employs ultra-high-definition cameras, specialized room designs with matched lighting and backgrounds, and low-latency networking creating seamless eye contact and spatial continuity. Technical requirements include sub-100ms end-to-end latency preventing conversational disruption, synchronized lip movement and audio, and spatial audio preserving directional cues. Modern implementations integrate AI-powered background replacement, automatic framing following speakers, and noise suppression isolating voices from ambient sound. Advanced telepresence systems employ light field displays creating glasses-free 3D effects, volumetric capture generating 3D holographic representations transmitted as point clouds or neural representations, and haptic feedback providing tactile presence. The convergence of telepresence technologies aims to create indistinguishable remote and co-located experiences through multimodal sensory fidelity, natural interaction affordances, and cognitive presence in shared contexts.
  #### References
  - IEEE International Conference on Multimedia and Expo. (2024). "Telepresence Systems and Applications." https://www.ieee.org/
  - Cisco. (2024). "Webex Hologram Telepresence Platform." https://www.cisco.com/
  - Microsoft. (2024). "Azure Communication Services for Telepresence." https://azure.microsoft.com/services/communication-services/
  - ACM Multimedia. (2024). "Immersive Telepresence Research." https://www.acmmm.org/
  - ITU-T F.730. (2024). "Framework and Requirements for Telepresence Systems." https://www.itu.int/
- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
