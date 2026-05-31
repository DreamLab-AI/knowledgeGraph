public:: true

# Applied Mathematics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f233b4c0d922e4e9dcba50bf635e31b558a587fbe20104f46023a236bfdeaeca",
  "@type": "Page",
  "vc:slug": "applied-mathematics",
  "title": "Applied Mathematics",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:convex-optimisation",
      "vc:label": "Convex Optimisation"
    },
    {
      "@id": "urn:visionflow:linked:numerical-methods",
      "vc:label": "Numerical Methods"
    },
    {
      "@id": "urn:visionflow:linked:functional-analysis",
      "vc:label": "Functional Analysis"
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
      "vc:value": "Applied Mathematics"
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
  "@id": "urn:ngm:class:applied-mathematics",
  "@type": "Class",
  "label": "Applied Mathematics",
  "definition": "Applied mathematics is the use of mathematical methods to solve problems in science, engineering, economics and industry. It includes areas such as modelling, numerical analysis and optimisation.",
  "domain": "mathematics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:convex-optimisation",
        "label": "Convex Optimisation"
      },
      {
        "@id": "urn:ngm:class:numerical-methods",
        "label": "Numerical Methods"
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
  "@id": "urn:visionflow:annotation:link-resolutions:applied-mathematics:b07a615e2a98",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f233b4c0d922e4e9dcba50bf635e31b558a587fbe20104f46023a236bfdeaeca"
  },
  "vc:resolutions": [
    {
      "raw": "[[Convex Optimisation]]",
      "resolved": "urn:visionflow:linked:convex-optimisation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Numerical Methods]]",
      "resolved": "urn:visionflow:linked:numerical-methods",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Functional Analysis]]",
      "resolved": "urn:visionflow:linked:functional-analysis",
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
  - Applied mathematics is the use of mathematical methods to solve problems in science, engineering, economics and industry. It includes areas such as modelling, numerical analysis and optimisation.

- ### Semantic Classification
  - owl-class:: mathematics:AppliedMathematics
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Functional Analysis]]
  - enables:: [[Convex Optimisation]], [[Numerical Methods]]

- ### Content
  - Applied mathematics develops and uses mathematical techniques to model and solve practical problems, drawing on analysis, linear algebra, probability, differential equations and computation. It often involves formulating a real-world situation as a mathematical model and then analysing or simulating it.
  - Subfields include numerical analysis, optimisation, mathematical physics, mathematical biology and operations research. The discipline bridges pure mathematics and the sciences, providing tools that underpin engineering, finance and machine learning.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
