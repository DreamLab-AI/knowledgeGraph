public:: true

# University of Manchester
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e5cd859b6a22ba40cc9ebaed197dab2e0a8f861260fc8a7c003f945b477a8351",
  "@type": "Page",
  "vc:slug": "university-of-manchester",
  "title": "University of Manchester",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:university-of-cambridge",
      "vc:label": "University of Cambridge"
    },
    {
      "@id": "urn:visionflow:linked:university-of-edinburgh",
      "vc:label": "University of Edinburgh"
    },
    {
      "@id": "urn:visionflow:linked:imperial-college-london",
      "vc:label": "Imperial College London"
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
      "vc:value": "University of Manchester"
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
  "@id": "urn:ngm:class:university-of-manchester",
  "@type": "Class",
  "label": "University of Manchester",
  "definition": "The University of Manchester is a public research university in Manchester, England, formed in 2004 by the merger of the Victoria University of Manchester and UMIST, with institutional roots dating to 1824. It is a member of the Russell Group and has a strong record in physics, engineering, computing and materials science. The university is the site of early computing history, including the Manchester Baby, the first stored-program electronic computer, and of the isolation of graphene. It has been associated with a large number of Nobel laureates across its history.",
  "domain": "university-of-manchester",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
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
  "@id": "urn:visionflow:annotation:link-resolutions:university-of-manchester:2559fa676136",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e5cd859b6a22ba40cc9ebaed197dab2e0a8f861260fc8a7c003f945b477a8351"
  },
  "vc:resolutions": [
    {
      "raw": "[[University of Cambridge]]",
      "resolved": "urn:visionflow:linked:university-of-cambridge",
      "kind": "StubLink"
    },
    {
      "raw": "[[University of Edinburgh]]",
      "resolved": "urn:visionflow:linked:university-of-edinburgh",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Imperial College London]]",
      "resolved": "urn:visionflow:linked:imperial-college-london",
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
  - The University of Manchester is a public research university in Manchester, England, formed in 2004 by the merger of the Victoria University of Manchester and UMIST, with institutional roots dating to 1824. It is a member of the Russell Group and has a strong record in physics, engineering, computing and materials science. The university is the site of early computing history, including the Manchester Baby, the first stored-program electronic computer, and of the isolation of graphene. It has been associated with a large number of Nobel laureates across its history.

- ### Semantic Classification
  - owl-class:: org:UniversityOfManchester
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[University of Cambridge]], [[University of Edinburgh]], [[Imperial College London]]

- ### Content
  - The present university was created in 2004 by combining the Victoria University of Manchester with the University of Manchester Institute of Science and Technology, uniting institutions whose origins reach back to the early nineteenth century. It is one of the largest single-site universities in the United Kingdom.
  - Manchester holds a notable place in the history of computing and physics. The Manchester Baby ran the first stored program in 1948, Alan Turing worked there, and later researchers isolated graphene, work recognised with a Nobel Prize in Physics in 2010.
  - As a Russell Group institution, the university maintains broad research activity across science, engineering, medicine, social sciences and the humanities. It has a long association with Nobel laureates and contributes significantly to national research and innovation.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
