```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:28908a60645e6d9598faf82b69900187c7928cbe51a0e69a656e348d92434637",
  "@type": "Page",
  "vc:slug": "legal-research",
  "title": "Legal Research",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:optical-character-recognition",
      "vc:label": "Optical Character Recognition"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-compliance",
      "vc:label": "Regulatory Compliance"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    },
    {
      "@id": "urn:visionflow:linked:narrow-ai",
      "vc:label": "Narrow AI"
    },
    {
      "@id": "urn:visionflow:linked:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Legal Research"
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
  "@id": "urn:ngm:class:legal-research",
  "@type": "Class",
  "label": "Legal Research",
  "definition": "Legal research is the systematic process of finding, analysing and applying statutes, case law, regulations and secondary sources to answer a legal question, increasingly assisted by retrieval and language models.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:artificial-intelligence",
      "label": "Artificial Intelligence"
    },
    {
      "@id": "urn:ngm:class:ai-application",
      "label": "AI Application"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:optical-character-recognition",
        "label": "Optical Character Recognition"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
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

- ### Definition
  - Legal research is the systematic process of finding, analysing and applying statutes, case law, regulations and secondary sources to answer a legal question, increasingly assisted by retrieval and language models.

- ### Semantic Classification
  - owl-class:: metaverse:LegalResearch
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]
  - bridges-to:: [[Machine Learning Discipline]], [[Narrow AI]]
  - requires:: [[Optical Character Recognition]]
  - enables:: [[Regulatory Compliance]]

- ### Content
  - Legal research locates authoritative sources, traces how they have been interpreted and synthesises them into an answer with citations. Machine reading of scanned documents and statutory text has made large corpora searchable and amenable to automated retrieval.
  - AI assistance now spans semantic search and drafting support over case law and regulation, with verification needed because models can fabricate citations. The task connects optical character recognition, retrieval and regulatory compliance work.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
