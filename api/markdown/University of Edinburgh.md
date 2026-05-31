public:: true

# University of Edinburgh
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7d94a74b273c7d51f40d9bc94e07f6e41a7158ffd93ae4cbece4b055dc3c403b",
  "@type": "Page",
  "vc:slug": "university-of-edinburgh",
  "title": "University of Edinburgh",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:university-of-cambridge",
      "vc:label": "University of Cambridge"
    },
    {
      "@id": "urn:visionflow:linked:imperial-college-london",
      "vc:label": "Imperial College London"
    },
    {
      "@id": "urn:visionflow:linked:university-of-manchester",
      "vc:label": "University of Manchester"
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
      "vc:value": "University of Edinburgh"
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
  "@id": "urn:ngm:class:university-of-edinburgh",
  "@type": "Class",
  "label": "University of Edinburgh",
  "definition": "The University of Edinburgh is a public research university in Scotland, founded in 1582, making it one of the oldest universities in the English-speaking world. It is a member of the Russell Group and is recognised internationally for research in informatics, artificial intelligence, medicine and the humanities. Its School of Informatics is among the largest computer science research centres in Europe and has a long history in machine learning and natural language processing. The university has been associated with many notable figures across science, philosophy and engineering.",
  "domain": "university-of-edinburgh",
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
  "@id": "urn:visionflow:annotation:link-resolutions:university-of-edinburgh:da211f030c83",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7d94a74b273c7d51f40d9bc94e07f6e41a7158ffd93ae4cbece4b055dc3c403b"
  },
  "vc:resolutions": [
    {
      "raw": "[[University of Cambridge]]",
      "resolved": "urn:visionflow:linked:university-of-cambridge",
      "kind": "StubLink"
    },
    {
      "raw": "[[Imperial College London]]",
      "resolved": "urn:visionflow:linked:imperial-college-london",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[University of Manchester]]",
      "resolved": "urn:visionflow:linked:university-of-manchester",
      "kind": "StubLink"
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
  - The University of Edinburgh is a public research university in Scotland, founded in 1582, making it one of the oldest universities in the English-speaking world. It is a member of the Russell Group and is recognised internationally for research in informatics, artificial intelligence, medicine and the humanities. Its School of Informatics is among the largest computer science research centres in Europe and has a long history in machine learning and natural language processing. The university has been associated with many notable figures across science, philosophy and engineering.

- ### Semantic Classification
  - owl-class:: org:UniversityOfEdinburgh
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[University of Cambridge]], [[Imperial College London]], [[University of Manchester]]

- ### Content
  - Founded by royal charter in 1582, the University of Edinburgh grew into a major centre of the Scottish Enlightenment and remains a comprehensive research university spanning the sciences, medicine, humanities and social sciences. It operates across several campuses in the city of Edinburgh.
  - The School of Informatics is a particular research strength, combining computer science, artificial intelligence, cognitive science and related fields. Edinburgh has long been associated with research in machine learning, natural language processing, robotics and the theory of computation.
  - As a Russell Group member, the university collaborates widely with industry and other institutions and contributes substantially to the United Kingdom's research output. Its alumni and faculty include numerous influential scientists, philosophers and Nobel laureates.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
