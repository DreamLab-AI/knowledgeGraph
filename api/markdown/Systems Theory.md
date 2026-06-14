public:: true

# Systems Theory
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a61dda12352b01cb0b2a12c3194473431a9d1ff39ef852e83b081cc96b6c1e50",
  "@type": "Page",
  "vc:slug": "systems-theory",
  "title": "Systems Theory",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cybernetics",
      "vc:label": "Cybernetics"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Systems Theory"
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
  "@id": "urn:ngm:class:systems-theory",
  "@type": "Class",
  "label": "Systems Theory",
  "definition": "Systems theory is an interdisciplinary study of systems as sets of interrelated components, focusing on the relationships, feedback, and emergent behaviour that arise from interaction.",
  "domain": "infrastructure",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Infra Software Engineering"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:systems-theory:44ba4c3f2786",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a61dda12352b01cb0b2a12c3194473431a9d1ff39ef852e83b081cc96b6c1e50"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cybernetics]]",
      "resolved": "urn:visionflow:linked:cybernetics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
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
  - Systems theory is an interdisciplinary study of systems as sets of interrelated components, focusing on the relationships, feedback, and emergent behaviour that arise from interaction.

- ### Semantic Classification
  - owl-class:: systems:SystemsTheory
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Cybernetics]]

- ### Content
  - Systems theory examines how the behaviour of a whole arises from the interactions among its parts rather than from the parts in isolation. It introduces concepts such as feedback loops, boundaries, and emergence that apply across biology, engineering, and the social sciences.
  - The field is closely related to cybernetics, which studies regulation and control through feedback, and it informs disciplines including ecology, organisational theory, and control engineering.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
