public:: true

# Enterprise Software Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cefe5d4c958dfb4130265e138428b910c4dc940ec562c2bfefd51586cf5d44b2",
  "@type": "Page",
  "vc:slug": "enterprise-software-domain",
  "title": "Enterprise Software Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:enterprise-resource-planning",
      "vc:label": "Enterprise Resource Planning"
    },
    {
      "@id": "urn:visionflow:linked:integration-middleware",
      "vc:label": "Integration Middleware"
    },
    {
      "@id": "urn:visionflow:linked:workflow-engine",
      "vc:label": "Workflow Engine"
    },
    {
      "@id": "urn:visionflow:linked:master-data-management",
      "vc:label": "Master Data Management"
    },
    {
      "@id": "urn:visionflow:linked:identity-and-access-management",
      "vc:label": "Identity and Access Management"
    },
    {
      "@id": "urn:visionflow:linked:infrastructure-domain",
      "vc:label": "Infrastructure Domain"
    },
    {
      "@id": "urn:visionflow:linked:data-management",
      "vc:label": "Data Management"
    },
    {
      "@id": "urn:visionflow:linked:identity-management",
      "vc:label": "Identity Management"
    },
    {
      "@id": "urn:visionflow:linked:business-process-automation",
      "vc:label": "Business Process Automation"
    },
    {
      "@id": "urn:visionflow:linked:data-integration",
      "vc:label": "Data Integration"
    },
    {
      "@id": "urn:visionflow:linked:operational-reporting",
      "vc:label": "Operational Reporting"
    },
    {
      "@id": "urn:visionflow:linked:interoperability-domain",
      "vc:label": "Interoperability Domain"
    },
    {
      "@id": "urn:visionflow:linked:information-security-domain",
      "vc:label": "Information Security Domain"
    },
    {
      "@id": "urn:visionflow:linked:accessibility-domain",
      "vc:label": "Accessibility Domain"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:togaf",
      "vc:label": "TOGAF"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-25010",
      "vc:label": "ISO/IEC 25010"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Enterprise Software Domain"
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
  "@id": "urn:ngm:class:enterprise-software-domain",
  "@type": "Class",
  "label": "Enterprise Software Domain",
  "definition": "The Enterprise Software Domain classifies concepts for applications and platforms that support the operations of organisations at scale, including resource planning, customer management, and integration middleware. It covers architecture patterns, data management, and the governance that large deployments require. As a top-level subject classification, it scopes business-grade software systems rather than the underlying infrastructure or the networks they run on.",
  "domain": "infrastructure",
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
        "@id": "urn:ngm:class:enterprise-resource-planning",
        "label": "Enterprise Resource Planning"
      },
      {
        "@id": "urn:ngm:class:integration-middleware",
        "label": "Integration Middleware"
      },
      {
        "@id": "urn:ngm:class:workflow-engine",
        "label": "Workflow Engine"
      },
      {
        "@id": "urn:ngm:class:master-data-management",
        "label": "Master Data Management"
      },
      {
        "@id": "urn:ngm:class:identity-and-access-management",
        "label": "Identity and Access Management"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:technology-infrastructure-domain-domain",
        "label": "Infrastructure Domain"
      },
      {
        "@id": "urn:ngm:class:data-management",
        "label": "Data Management"
      },
      {
        "@id": "urn:ngm:class:identity-management",
        "label": "Identity Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:business-process-automation",
        "label": "Business Process Automation"
      },
      {
        "@id": "urn:ngm:class:data-integration",
        "label": "Data Integration"
      },
      {
        "@id": "urn:ngm:class:operational-reporting",
        "label": "Operational Reporting"
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
  "@id": "urn:visionflow:annotation:link-resolutions:enterprise-software-domain:0470a78e4d79",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cefe5d4c958dfb4130265e138428b910c4dc940ec562c2bfefd51586cf5d44b2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Enterprise Resource Planning]]",
      "resolved": "urn:visionflow:linked:enterprise-resource-planning",
      "kind": "StubLink"
    },
    {
      "raw": "[[Integration Middleware]]",
      "resolved": "urn:visionflow:linked:integration-middleware",
      "kind": "StubLink"
    },
    {
      "raw": "[[Workflow Engine]]",
      "resolved": "urn:visionflow:linked:workflow-engine",
      "kind": "StubLink"
    },
    {
      "raw": "[[Master Data Management]]",
      "resolved": "urn:visionflow:linked:master-data-management",
      "kind": "StubLink"
    },
    {
      "raw": "[[Identity and Access Management]]",
      "resolved": "urn:visionflow:linked:identity-and-access-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Infrastructure Domain]]",
      "resolved": "urn:visionflow:linked:infrastructure-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Management]]",
      "resolved": "urn:visionflow:linked:data-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Management]]",
      "resolved": "urn:visionflow:linked:identity-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Business Process Automation]]",
      "resolved": "urn:visionflow:linked:business-process-automation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Integration]]",
      "resolved": "urn:visionflow:linked:data-integration",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Operational Reporting]]",
      "resolved": "urn:visionflow:linked:operational-reporting",
      "kind": "StubLink"
    },
    {
      "raw": "[[Interoperability Domain]]",
      "resolved": "urn:visionflow:linked:interoperability-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Information Security Domain]]",
      "resolved": "urn:visionflow:linked:information-security-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Accessibility Domain]]",
      "resolved": "urn:visionflow:linked:accessibility-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[TOGAF]]",
      "resolved": "urn:visionflow:linked:togaf",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 25010]]",
      "resolved": "urn:visionflow:linked:iso-iec-25010",
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
  - The Enterprise Software Domain classifies concepts for applications and platforms that support the operations of organisations at scale, including resource planning, customer management, and integration middleware. It covers architecture patterns, data management, and the governance that large deployments require. As a top-level subject classification, it scopes business-grade software systems rather than the underlying infrastructure or the networks they run on.

- ### Semantic Classification
  - owl-class:: ent:EnterpriseSoftwareDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Interoperability Domain]], [[Information Security Domain]], [[Accessibility Domain]]
  - has-part:: [[Enterprise Resource Planning]], [[Integration Middleware]], [[Workflow Engine]], [[Master Data Management]], [[Identity and Access Management]]
  - requires:: [[Infrastructure Domain]], [[Data Management]], [[Identity Management]]
  - enables:: [[Business Process Automation]], [[Data Integration]], [[Operational Reporting]]

- ### Content
  - The Enterprise Software Domain organises the systems that run organisational operations. Resource planning suites coordinate finance, supply, and human resources, integration middleware connects disparate applications, and workflow engines automate the processes that span them. Master data management keeps shared reference data consistent so that connected systems agree on customers, products, and accounts.
  - Enterprise deployments are defined by scale, longevity, and the need for governance. They must integrate with existing systems, enforce access control across many roles, and remain auditable over years of operation. These requirements drive architecture choices toward modularity, well-defined interfaces, and strong identity and access management.
  - As a top-level domain, enterprise software depends on infrastructure for compute and storage and on identity management for access. It bridges to interoperability, which connects its applications, to information security, which protects its data, and to accessibility, which governs its interfaces. Keeping business-grade software distinct from infrastructure lets the ontology describe organisational systems without conflating them with the platforms beneath them.

- ### Provenance
  - sources:: [[TOGAF]], [[ISO/IEC 25010]]
  - migration-date:: 2026-05-29T00:00:00Z
