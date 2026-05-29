public:: true

# Media Theory
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:52a5afe62f585aef3eef61f0a641331c226d99dfa13b54ce3d0e996dc6d1c04d",
  "@type": "Page",
  "vc:slug": "media-theory",
  "title": "Media Theory",
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
      "vc:value": "TC-9504"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Media Theory"
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
  "@id": "urn:ngm:class:media-theory",
  "@type": "Class",
  "label": "Media Theory",
  "definition": "An interdisciplinary field examining how communication media shape human perception, social interaction, and cultural meaning, encompassing frameworks such as media richness theory, social presence theory, and Marshall McLuhan's medium-as-message thesis. Media theory informs the design of telecollaboration and immersive systems by analysing how channel properties affect communication fidelity and presence.",
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
      {"@id": "urn:ngm:class:social-presence", "label": "Social Presence"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:media-richness-theory", "label": "Media Richness Theory"},
      {"@id": "urn:ngm:class:social-presence-theory", "label": "Social Presence Theory"},
      {"@id": "urn:ngm:class:communication-theory", "label": "Communication Theory"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:immersive-experience", "label": "Immersive Experience"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:media-theory:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:52a5afe62f585aef3eef61f0a641331c226d99dfa13b54ce3d0e996dc6d1c04d"
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
  - An interdisciplinary field examining how communication media shape human perception, social interaction, and cultural meaning, encompassing frameworks such as media richness theory, social presence theory, and Marshall McLuhan's medium-as-message thesis. Media theory informs the design of telecollaboration and immersive systems by analysing how channel properties affect communication fidelity and presence.

- ### Semantic Classification
  - owl-class:: distributed-collaboration:MediaTheory
  - owl-role:: concept

- ### Relationships
  - **enables** [[Telecollaboration]] — media theory provides the conceptual grounding for effective telecollaboration design
  - **enables** [[Social Presence]] — understanding media richness shapes how presence is engineered in virtual environments
  - **relatedTo** [[Media Richness Theory]] — media richness is a core sub-framework within media theory
  - **relatedTo** [[Social Presence Theory]] — social presence theory extends media theory to virtual context
  - **relatedTo** [[Communication Theory]] — media theory is a branch of broader communication theory
  - **supports** [[Immersive Experience]] — media theory explains how immersion amplifies communicative engagement

- ### Content

  ## Overview

  Media Theory represents an abstract concept in the telecollaboration ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
