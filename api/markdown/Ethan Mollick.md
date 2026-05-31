public:: true

# Ethan Mollick
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6c2d225ad5cce4c2334bd9e811776fbb4dcfd05d3b38d13d00a69427672914b6",
  "@type": "Page",
  "vc:slug": "ethan-mollick",
  "title": "Ethan Mollick",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ai-adoption",
      "vc:label": "AI Adoption"
    },
    {
      "@id": "urn:visionflow:linked:generative-ai",
      "vc:label": "Generative AI"
    },
    {
      "@id": "urn:visionflow:linked:prompt-engineering",
      "vc:label": "Prompt Engineering"
    },
    {
      "@id": "urn:visionflow:linked:artificial-intelligence-domain",
      "vc:label": "Artificial Intelligence Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Ethan Mollick"
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
  "@id": "urn:ngm:class:ethan-mollick",
  "@type": "Class",
  "label": "Ethan Mollick",
  "definition": "An American academic and professor at the Wharton School of the University of Pennsylvania known for research and writing on entrepreneurship, innovation and the practical use of generative artificial intelligence in work and education.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:artificial-intelligence-domain",
      "label": "Artificial Intelligence Domain"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:ai-adoption",
        "label": "AI Adoption"
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
  "@id": "urn:visionflow:annotation:link-resolutions:ethan-mollick:242cf79514c1",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6c2d225ad5cce4c2334bd9e811776fbb4dcfd05d3b38d13d00a69427672914b6"
  },
  "vc:resolutions": [
    {
      "raw": "[[AI Adoption]]",
      "resolved": "urn:visionflow:linked:ai-adoption",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Generative AI]]",
      "resolved": "urn:visionflow:linked:generative-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Prompt Engineering]]",
      "resolved": "urn:visionflow:linked:prompt-engineering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Artificial Intelligence Domain]]",
      "resolved": "urn:visionflow:linked:artificial-intelligence-domain",
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
  - An American academic and professor at the Wharton School of the University of Pennsylvania known for research and writing on entrepreneurship, innovation and the practical use of generative artificial intelligence in work and education.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:EthanMollick
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence Domain]]
  - bridges-to:: [[Generative AI]], [[Prompt Engineering]]
  - enables:: [[AI Adoption]]

- ### Content
  - Ethan Mollick is a professor at the Wharton School of the University of Pennsylvania, where his research has addressed entrepreneurship, innovation and organisational learning. He is widely read for his analysis of how large language models and generative AI tools can be applied in education and professional work.
  - He has documented experiments on AI-assisted productivity and pedagogy and is a frequent commentator on the practical adoption of generative AI, emphasising hands-on experimentation with the tools.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
