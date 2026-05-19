public:: true

# AI-GroundedDomain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5d9d318623ce6a60d21c6ce26d1fd4e42b3a9c2c9aabd9cc2a0382a4120dca4f",
  "@type": "Page",
  "vc:slug": "ai-grounded-domain",
  "title": "AI-GroundedDomain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:empirical-evaluation",
      "vc:label": "Empirical Evaluation"
    },
    {
      "@id": "urn:visionflow:linked:theoretical-ai",
      "vc:label": "Theoretical AI"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence-domain",
      "vc:label": "ArtificialIntelligenceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:performance-metrics",
      "vc:label": "Performance Metrics"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-7021"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "AI-GroundedDomain"
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
  "@id": "urn:ngm:class:ai-grounded-domain",
  "@type": "Class",
  "label": "AI-GroundedDomain",
  "definition": "A meta-classification domain for AI concepts that are empirically grounded in operational systems, validated through real-world deployment, and supported by measurable performance data rather than purely theoretical constructs.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-research-area",
      "label": "AI Research Area"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:performance-metrics",
        "label": "Performance Metrics"
      }
    ]
  },
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:ai-grounded-domain:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5d9d318623ce6a60d21c6ce26d1fd4e42b3a9c2c9aabd9cc2a0382a4120dca4f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Empirical Evaluation]]",
      "resolved": "urn:visionflow:linked:empirical-evaluation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Theoretical AI]]",
      "resolved": "urn:visionflow:linked:theoretical-ai",
      "kind": "StubLink"
    },
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ArtificialIntelligenceDomain]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Performance Metrics]]",
      "resolved": "urn:visionflow:owl:class:performance-metrics",
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
  - A meta-classification domain for AI concepts that are empirically grounded in operational systems, validated through real-world deployment, and supported by measurable performance data rather than purely theoretical constructs.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AiGroundedDomain
  - owl-role:: Domain
  - belongs-to-domain:: [[Artificial Intelligence]]

- ### Relationships
  - is-subclass-of:: [[ArtificialIntelligenceDomain]]
  - requires:: [[Performance Metrics]]

- ### Content

  - #### Member Concepts (Inferred by Reasoner)
		    - Deployed AI System is-member-of AI-GroundedDomain
		    - Production ML Model is-member-of AI-GroundedDomain
		    - Validated AI Application is-member-of AI-GroundedDomain
		    - Benchmarked Algorithm is-member-of AI-GroundedDomain
		- distinguishes-from:: [[Theoretical AI]] (speculative concepts)
		- validates-through:: [[Empirical Evaluation]]
		- requires:: [[Performance Metrics]]

  ## Definition

  The **AI-Grounded Domain** represents a meta-level classification distinguishing AI concepts that have been empirically validated through real-world implementation from purely theoretical or speculative AI constructs. This domain classification ensures ontological rigour by requiring:

  1. **Operational Evidence**: Concepts must be instantiated in functioning systems
  2. **Measurable Performance**: Quantifiable metrics demonstrating capability
  3. **Reproducible Results**: Independent verification of claimed properties
  4. **Deployment History**: Track record in production environments

  ## Ontological Purpose

  This domain classification serves to:
  - Separate implemented AI capabilities from research aspirations
  - Ground knowledge claims in empirical evidence
  - Enable reasoners to distinguish validated from theoretical concepts
  - Support trust assessment in AI capability claims

  ## Member Concept Criteria

  Concepts classified under AI-GroundedDomain must demonstrate:
  - Deployment in at least one production system
  - Published performance benchmarks
  - Reproducible evaluation methodology
  - Clear operational constraints and limitations

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
