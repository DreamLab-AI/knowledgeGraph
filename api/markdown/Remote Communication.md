public:: true

# Remote Communication
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:27eeddef6a8f9289971fc00f299c72200e35dfb9eaa1c5c85b2c860eaed96f19",
  "@type": "Page",
  "vc:slug": "remote-communication",
  "title": "Remote Communication",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "TC-9510"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Remote Communication"
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
  "@id": "urn:ngm:class:remote-communication",
  "@type": "Class",
  "label": "Remote Communication",
  "definition": "Remote Communication encompasses the protocols, platforms, and practices that enable synchronous and asynchronous exchange of information between geographically distributed participants. It spans text, voice, video, and immersive modalities, and underpins distributed work, telecollaboration, and telepresence systems by abstracting physical distance through networked infrastructure.",
  "domain": "distributed-collaboration",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dc-communication",
      "label": "Communication Technology"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:telecollaboration", "label": "Telecollaboration"},
      {"@id": "urn:ngm:class:distributed-work", "label": "Distributed Work"},
      {"@id": "urn:ngm:class:video-conferencing", "label": "Video Conferencing"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:network-protocol", "label": "Network Protocol"},
      {"@id": "urn:ngm:class:latency", "label": "Latency"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:collaboration-platform", "label": "Collaboration Platform"},
      {"@id": "urn:ngm:class:immersive-communication", "label": "Immersive Communication"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:remote-communication:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:27eeddef6a8f9289971fc00f299c72200e35dfb9eaa1c5c85b2c860eaed96f19"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
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
  - Remote Communication encompasses the protocols, platforms, and practices that enable synchronous and asynchronous exchange of information between geographically distributed participants. It spans text, voice, video, and immersive modalities, and underpins distributed work, telecollaboration, and telepresence systems by abstracting physical distance through networked infrastructure.

- ### Semantic Classification
  - owl-class:: distributed-collaboration:RemoteCommunication
  - owl-role:: concept

- ### Relationships
  - **enables** → [[Telecollaboration]], [[Distributed Work]], [[Video Conferencing]]
  - **requires** → [[Network Protocol]], [[Latency]]
  - **relatedTo** → [[Collaboration Platform]], [[Immersive Communication]]

- ### Content

  ## Overview

  Remote Communication represents an abstract concept in the telecollaboration ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
