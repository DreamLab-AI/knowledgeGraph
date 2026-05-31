public:: true

# Software Engineering Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8d9c7792ee36beb313f989bf1310dea7df98ebd29fdf1da826ca2aa9ed8cb925",
  "@type": "Page",
  "vc:slug": "software-engineering-domain",
  "title": "Software Engineering Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:requirements-engineering",
      "vc:label": "Requirements Engineering"
    },
    {
      "@id": "urn:visionflow:linked:software-architecture",
      "vc:label": "Software Architecture"
    },
    {
      "@id": "urn:visionflow:linked:testing",
      "vc:label": "Testing"
    },
    {
      "@id": "urn:visionflow:linked:version-control",
      "vc:label": "Version Control"
    },
    {
      "@id": "urn:visionflow:linked:continuous-integration",
      "vc:label": "Continuous Integration"
    },
    {
      "@id": "urn:visionflow:linked:formal-methods-domain",
      "vc:label": "Formal Methods Domain"
    },
    {
      "@id": "urn:visionflow:linked:maintainable-systems",
      "vc:label": "Maintainable Systems"
    },
    {
      "@id": "urn:visionflow:linked:reproducible-builds",
      "vc:label": "Reproducible Builds"
    },
    {
      "@id": "urn:visionflow:linked:distributed-systems-domain",
      "vc:label": "Distributed Systems Domain"
    },
    {
      "@id": "urn:visionflow:linked:security-domain",
      "vc:label": "Security Domain"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-ieee-12207",
      "vc:label": "ISO/IEC/IEEE 12207"
    },
    {
      "@id": "urn:visionflow:linked:swebok",
      "vc:label": "SWEBOK"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Software Engineering Domain"
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
  "@id": "urn:ngm:class:software-engineering-domain",
  "@type": "Class",
  "label": "Software Engineering Domain",
  "definition": "The Software Engineering Domain classifies concepts concerning the systematic development, maintenance and evolution of software systems. It covers requirements, design, construction, testing and the processes that coordinate these activities. As a top-level subject axis it provides the disciplined methods by which other domains are realised as reliable, maintainable software.",
  "domain": "software-engineering",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:requirements-engineering",
        "label": "Requirements Engineering"
      },
      {
        "@id": "urn:ngm:class:software-architecture",
        "label": "Software Architecture"
      },
      {
        "@id": "urn:ngm:class:testing",
        "label": "Testing"
      },
      {
        "@id": "urn:ngm:class:version-control",
        "label": "Version Control"
      },
      {
        "@id": "urn:ngm:class:continuous-integration",
        "label": "Continuous Integration"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:formal-methods-domain",
        "label": "Formal Methods Domain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:maintainable-systems",
        "label": "Maintainable Systems"
      },
      {
        "@id": "urn:ngm:class:reproducible-builds",
        "label": "Reproducible Builds"
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
  "@id": "urn:visionflow:annotation:link-resolutions:software-engineering-domain:b2a5619ae295",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8d9c7792ee36beb313f989bf1310dea7df98ebd29fdf1da826ca2aa9ed8cb925"
  },
  "vc:resolutions": [
    {
      "raw": "[[Requirements Engineering]]",
      "resolved": "urn:visionflow:linked:requirements-engineering",
      "kind": "StubLink"
    },
    {
      "raw": "[[Software Architecture]]",
      "resolved": "urn:visionflow:linked:software-architecture",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Testing]]",
      "resolved": "urn:visionflow:linked:testing",
      "kind": "StubLink"
    },
    {
      "raw": "[[Version Control]]",
      "resolved": "urn:visionflow:linked:version-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Continuous Integration]]",
      "resolved": "urn:visionflow:linked:continuous-integration",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Formal Methods Domain]]",
      "resolved": "urn:visionflow:linked:formal-methods-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Maintainable Systems]]",
      "resolved": "urn:visionflow:linked:maintainable-systems",
      "kind": "StubLink"
    },
    {
      "raw": "[[Reproducible Builds]]",
      "resolved": "urn:visionflow:linked:reproducible-builds",
      "kind": "StubLink"
    },
    {
      "raw": "[[Distributed Systems Domain]]",
      "resolved": "urn:visionflow:linked:distributed-systems-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Security Domain]]",
      "resolved": "urn:visionflow:linked:security-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ISO/IEC/IEEE 12207]]",
      "resolved": "urn:visionflow:linked:iso-iec-ieee-12207",
      "kind": "StubLink"
    },
    {
      "raw": "[[SWEBOK]]",
      "resolved": "urn:visionflow:linked:swebok",
      "kind": "StubLink"
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
  - The Software Engineering Domain classifies concepts concerning the systematic development, maintenance and evolution of software systems. It covers requirements, design, construction, testing and the processes that coordinate these activities. As a top-level subject axis it provides the disciplined methods by which other domains are realised as reliable, maintainable software.

- ### Semantic Classification
  - owl-class:: swe:SoftwareEngineeringDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Distributed Systems Domain]], [[Security Domain]]
  - has-part:: [[Requirements Engineering]], [[Software Architecture]], [[Testing]], [[Version Control]], [[Continuous Integration]]
  - requires:: [[Formal Methods Domain]]
  - enables:: [[Maintainable Systems]], [[Reproducible Builds]]

- ### Content
  - Software engineering applies disciplined methods to the production of software so that outcomes are predictable in cost, quality and schedule. It organises work into activities such as eliciting requirements, designing architecture, writing code and verifying behaviour. Process models from plan-driven to iterative coordinate these activities and manage change.
  - The domain treats quality attributes including correctness, maintainability, performance and security as explicit design objectives traceable to requirements. Practices such as version control, automated testing and continuous integration provide feedback and guard against regression. Architecture decisions allocate responsibilities to components and define the interfaces between them.
  - Software engineering bridges to distributed systems and security, where its practices must accommodate concurrency, failure and adversarial conditions. It draws on formal methods for the rigorous specification and verification of components where correctness is critical.

- ### Provenance
  - sources:: [[ISO/IEC/IEEE 12207]], [[SWEBOK]]
  - migration-date:: 2026-05-29T00:00:00Z
