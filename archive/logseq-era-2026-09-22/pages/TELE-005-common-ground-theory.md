public:: true

# TELE-005-common-ground-theory
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a9ebbac1c5412b9a45ccf50e10ed1b527a5f1fc357b2ede74b9fd85b2f81e16e",
  "@type": "Page",
  "vc:slug": "tele-005-common-ground-theory",
  "title": "TELE-005-common-ground-theory",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:communication-theory",
      "vc:label": "Communication Theory"
    },
    {
      "@id": "urn:visionflow:linked:collaboration",
      "vc:label": "Collaboration"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "TELE-005-common-ground-theory"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tele-005-common-ground-theory",
  "@type": "Class",
  "label": "TELE-005-common-ground-theory",
  "definition": "Common ground theory is an account of communication holding that participants build and rely on shared knowledge, beliefs and assumptions, which they update through interaction to coordinate meaning.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:communication-theory",
      "label": "Communication Theory"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:communication-theory",
        "label": "Communication Theory"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:collaboration",
        "label": "Collaboration"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:tele-005-common-ground-theory:f6c0f670f965",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a9ebbac1c5412b9a45ccf50e10ed1b527a5f1fc357b2ede74b9fd85b2f81e16e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Communication Theory]]",
      "resolved": "urn:visionflow:linked:communication-theory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Collaboration]]",
      "resolved": "urn:visionflow:linked:collaboration",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Common ground theory is an account of communication holding that participants build and rely on shared knowledge, beliefs and assumptions, which they update through interaction to coordinate meaning.

- ### Semantic Classification
  - owl-class:: metaverse:TELE005commongroundtheory
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Communication Theory]]
  - bridges-to:: [[Communication Theory]]
  - requires:: [[Communication Theory]]
  - enables:: [[Collaboration]]

- ### Content
  - Common ground theory, associated with the work of Herbert Clark, describes communication as the joint construction of shared knowledge between participants. Speakers and listeners track what they mutually know and use a process of grounding, in which contributions are accepted or clarified, to keep that shared understanding current.
  - The theory is applied to the design of collaborative and telecommunication systems, where reduced cues can make grounding harder and increase misunderstanding. It explains why richer channels and feedback mechanisms often improve coordination between remote participants.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
