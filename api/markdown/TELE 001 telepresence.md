public:: true

# TELE 001 telepresence
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ac4de16dfe47f483e4601f7bdcee0a713d8ea897209045a9c8342af6d7d57d42",
  "@type": "Page",
  "vc:slug": "tele-001-telepresence",
  "title": "TELE 001 telepresence",
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
      "vc:value": "TC-9512"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "TELE 001 telepresence"
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
  "@id": "urn:ngm:class:tele-001-telepresence",
  "@type": "Class",
  "label": "TELE 001 telepresence",
  "definition": "TELE 001 Telepresence is a foundational concept within the telecollaboration domain that defines the sense of physical presence transmitted across a distance through audio-visual, haptic, and immersive communication technologies. It serves as the baseline specification for how distributed participants experience co-presence in collaborative environments, underpinning higher-order telecollaboration and virtual meeting systems.",
  "domain": "distributed-collaboration",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dc-telepresence",
      "label": "Telepresence"
    }
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:telecollaboration", "label": "Telecollaboration"},
      {"@id": "urn:ngm:class:distributed-collaboration", "label": "Distributed Collaboration"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:virtual-collaboration", "label": "Virtual Collaboration"},
      {"@id": "urn:ngm:class:immersive-communication", "label": "Immersive Communication"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:audio-system", "label": "Audio System"},
      {"@id": "urn:ngm:class:avatar", "label": "Avatar"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:tele-001-telepresence:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ac4de16dfe47f483e4601f7bdcee0a713d8ea897209045a9c8342af6d7d57d42"
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
  - TELE 001 Telepresence is a foundational concept within the telecollaboration domain defining the sense of physical presence transmitted across distance through audio-visual, haptic, and immersive communication technologies, underpinning higher-order telecollaboration and virtual meeting systems.

- ### Semantic Classification
  - owl-class:: distributed-collaboration:TELE001telepresence
  - owl-role:: concept

- ### Relationships
  - partOf [[Telecollaboration]]
  - partOf [[Distributed Collaboration]]
  - enables [[Virtual Collaboration]]
  - enables [[Immersive Communication]]
  - uses [[Audio System]]
  - uses [[Avatar]]

- ### Content

  ## Overview

  T E L E 001 telepresence represents an abstract concept in the telecollaboration ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
