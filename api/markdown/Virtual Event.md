public:: true

# Virtual Event
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6b534fa23ab2c3c1255c914c1a1a3ae092b69dc01111354b85c965273e37115b",
  "@type": "Page",
  "vc:slug": "virtual-event",
  "title": "Virtual Event",
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
      "vc:value": "MV-9721"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Virtual Event"
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
  "@id": "urn:ngm:class:virtual-event",
  "@type": "Class",
  "label": "Virtual Event",
  "definition": "A Virtual Event is a digitally mediated gathering where participants interact in real time within a shared virtual environment, replicating or augmenting the social, educational, or commercial functions of physical events. Virtual events leverage spatial audio, avatar-based presence, interactive objects, and live streaming to create shared experiences for conferences, concerts, exhibitions, and collaborative workshops across geographically distributed participants.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:virtual-reality", "label": "Virtual Reality"},
      {"@id": "urn:ngm:class:avatar", "label": "Avatar"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:remote-collaboration", "label": "Remote Collaboration"},
      {"@id": "urn:ngm:class:telecollaboration", "label": "Telecollaboration"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:immersive-experience", "label": "Immersive Experience"},
      {"@id": "urn:ngm:class:metaverse", "label": "Metaverse"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:virtual-event:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6b534fa23ab2c3c1255c914c1a1a3ae092b69dc01111354b85c965273e37115b"
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
  - A Virtual Event is a digitally mediated gathering where participants interact in real time within a shared virtual environment, replicating or augmenting the social, educational, or commercial functions of physical events. Virtual events leverage spatial audio, avatar-based presence, interactive objects, and live streaming to create shared experiences for conferences, concerts, exhibitions, and collaborative workshops across geographically distributed participants.

- ### Semantic Classification
  - owl-class:: spatial-computing:VirtualEvent
  - owl-role:: concept

- ### Relationships
  - requires [[Virtual Reality]]
  - requires [[Avatar]]
  - enables [[Remote Collaboration]]
  - enables [[Telecollaboration]]
  - relatedTo [[Immersive Experience]]
  - relatedTo [[Metaverse]]

- ### Content

  ## Overview

  Virtual Event represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
