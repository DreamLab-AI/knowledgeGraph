public:: true

# University of Cambridge
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d274b3bbddc468d12c0e56992a19186aa4c7b4876e202f3f2b60dd52cde49a67",
  "@type": "Page",
  "vc:slug": "university-of-cambridge",
  "title": "University of Cambridge",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:imperial-college-london",
      "vc:label": "Imperial College London"
    },
    {
      "@id": "urn:visionflow:linked:university-of-edinburgh",
      "vc:label": "University of Edinburgh"
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
      "vc:value": "University of Cambridge"
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
  "@id": "urn:ngm:class:university-of-cambridge",
  "@type": "Class",
  "label": "University of Cambridge",
  "definition": "The University of Cambridge is a collegiate public research university in Cambridge, England, founded in 1209 and one of the oldest universities in the world. Organised as a federation of constituent colleges and academic departments, it is a member of the Russell Group and consistently ranks among the leading universities globally. It has a distinguished record in mathematics, physics, computing and the life sciences, and its Computer Laboratory and mathematics tradition have shaped modern computer science. The university is associated with a very large number of Nobel laureates.",
  "domain": "university-of-cambridge",
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
  "@id": "urn:visionflow:annotation:link-resolutions:university-of-cambridge:47a9db1cc719",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d274b3bbddc468d12c0e56992a19186aa4c7b4876e202f3f2b60dd52cde49a67"
  },
  "vc:resolutions": [
    {
      "raw": "[[Imperial College London]]",
      "resolved": "urn:visionflow:linked:imperial-college-london",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[University of Edinburgh]]",
      "resolved": "urn:visionflow:linked:university-of-edinburgh",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[University of Manchester]]",
      "resolved": "urn:visionflow:linked:university-of-manchester",
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
  - The University of Cambridge is a collegiate public research university in Cambridge, England, founded in 1209 and one of the oldest universities in the world. Organised as a federation of constituent colleges and academic departments, it is a member of the Russell Group and consistently ranks among the leading universities globally. It has a distinguished record in mathematics, physics, computing and the life sciences, and its Computer Laboratory and mathematics tradition have shaped modern computer science. The university is associated with a very large number of Nobel laureates.

- ### Semantic Classification
  - owl-class:: org:UniversityOfCambridge
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Imperial College London]], [[University of Edinburgh]], [[University of Manchester]]

- ### Content
  - Founded in 1209, the University of Cambridge developed into a collegiate institution in which the central university and its many colleges share responsibility for teaching, research and student life. It remains one of the most prominent research universities in the world.
  - Cambridge has a deep tradition in mathematics and the physical sciences, and its researchers contributed foundational work in computing, including early stored-program computers and theoretical computer science. The Cavendish Laboratory and the Computer Laboratory are among its well-known research centres.
  - As a Russell Group member, the university maintains broad research excellence across disciplines and strong links with industry and the Cambridge technology cluster. It has produced a large number of Nobel laureates and influential figures across the sciences and humanities.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
