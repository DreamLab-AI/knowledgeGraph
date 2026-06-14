public:: true

# Content Moderation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a9913f9ef85e5399ec3870d193f830e643b7a6daee3b5ba3bddb35b7e2d880bc",
  "@type": "Page",
  "vc:slug": "content-moderation",
  "title": "Content Moderation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:appeal-process",
      "vc:label": "Appeal Process"
    },
    {
      "@id": "urn:visionflow:linked:automated-filtering",
      "vc:label": "Automated Filtering"
    },
    {
      "@id": "urn:visionflow:linked:community-guidelines-enforcement",
      "vc:label": "Community Guidelines Enforcement"
    },
    {
      "@id": "urn:visionflow:linked:content-analysis-tools",
      "vc:label": "Content Analysis Tools"
    },
    {
      "@id": "urn:visionflow:linked:content-classification-system",
      "vc:label": "Content Classification System"
    },
    {
      "@id": "urn:visionflow:linked:decision-framework",
      "vc:label": "Decision Framework"
    },
    {
      "@id": "urn:visionflow:linked:etsi-gr-arf-010",
      "vc:label": "ETSI GR ARF 010"
    },
    {
      "@id": "urn:visionflow:linked:harmful-content-prevention",
      "vc:label": "Harmful Content Prevention"
    },
    {
      "@id": "urn:visionflow:linked:human-moderators",
      "vc:label": "Human Moderators"
    },
    {
      "@id": "urn:visionflow:linked:human-review-workflow",
      "vc:label": "Human Review Workflow"
    },
    {
      "@id": "urn:visionflow:linked:moderation-policy",
      "vc:label": "Moderation Policy"
    },
    {
      "@id": "urn:visionflow:linked:platform-governance-system",
      "vc:label": "Platform Governance System"
    },
    {
      "@id": "urn:visionflow:linked:policy-enforcement-engine",
      "vc:label": "Policy Enforcement Engine"
    },
    {
      "@id": "urn:visionflow:linked:reporting-system",
      "vc:label": "Reporting System"
    },
    {
      "@id": "urn:visionflow:linked:reviewer-training-program",
      "vc:label": "Reviewer Training Program"
    },
    {
      "@id": "urn:visionflow:linked:safe-user-experience",
      "vc:label": "Safe User Experience"
    },
    {
      "@id": "urn:visionflow:linked:trust-and-safety-infrastructure",
      "vc:label": "Trust and Safety Infrastructure"
    },
    {
      "@id": "urn:visionflow:owl:class:application-layer",
      "vc:label": "Application Layer"
    },
    {
      "@id": "urn:visionflow:owl:class:community-standards",
      "vc:label": "Community Standards"
    },
    {
      "@id": "urn:visionflow:owl:class:machine-learning-models",
      "vc:label": "Machine Learning Models"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "Middleware Layer"
    },
    {
      "@id": "urn:visionflow:owl:class:regulatory-compliance",
      "vc:label": "Regulatory Compliance"
    },
    {
      "@id": "urn:visionflow:owl:class:telecollaboration",
      "vc:label": "Telecollaboration"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "vc:label": "TrustAndGovernanceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-society",
      "vc:label": "VirtualSocietyDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20122"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Content Moderation"
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
  "@id": "urn:ngm:class:content-moderation",
  "@type": "Class",
  "label": "Content Moderation",
  "definition": "A systematic process or system for reviewing, filtering, and managing user-generated content to enforce community standards, legal requirements, and platform policies while balancing freedom of expression with safety and compliance.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    },
    {
      "@id": "urn:ngm:class:ai-safety",
      "label": "AI Safety"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:appeal-process",
        "label": "Appeal Process"
      },
      {
        "@id": "urn:ngm:class:automated-filtering",
        "label": "Automated Filtering"
      },
      {
        "@id": "urn:ngm:class:content-classification-system",
        "label": "Content Classification System"
      },
      {
        "@id": "urn:ngm:class:human-review-workflow",
        "label": "Human Review Workflow"
      },
      {
        "@id": "urn:ngm:class:policy-enforcement-engine",
        "label": "Policy Enforcement Engine"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:content-analysis-tools",
        "label": "Content Analysis Tools"
      },
      {
        "@id": "urn:ngm:class:moderation-policy",
        "label": "Moderation Policy"
      },
      {
        "@id": "urn:ngm:class:reviewer-training-program",
        "label": "Reviewer Training Program"
      },
      {
        "@id": "urn:ngm:class:community-standards",
        "label": "Community Standards"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:community-guidelines-enforcement",
        "label": "Community Guidelines Enforcement"
      },
      {
        "@id": "urn:ngm:class:harmful-content-prevention",
        "label": "Harmful Content Prevention"
      },
      {
        "@id": "urn:ngm:class:safe-user-experience",
        "label": "Safe User Experience"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:platform-governance-system",
        "label": "Platform Governance System"
      },
      {
        "@id": "urn:ngm:class:trust-and-safety-infrastructure",
        "label": "Trust and Safety Infrastructure"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:content-moderation:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a9913f9ef85e5399ec3870d193f830e643b7a6daee3b5ba3bddb35b7e2d880bc"
  },
  "vc:resolutions": [
    {
      "raw": "[[Appeal Process]]",
      "resolved": "urn:visionflow:linked:appeal-process",
      "kind": "StubLink"
    },
    {
      "raw": "[[Automated Filtering]]",
      "resolved": "urn:visionflow:linked:automated-filtering",
      "kind": "StubLink"
    },
    {
      "raw": "[[Community Guidelines Enforcement]]",
      "resolved": "urn:visionflow:linked:community-guidelines-enforcement",
      "kind": "StubLink"
    },
    {
      "raw": "[[Content Analysis Tools]]",
      "resolved": "urn:visionflow:linked:content-analysis-tools",
      "kind": "StubLink"
    },
    {
      "raw": "[[Content Classification System]]",
      "resolved": "urn:visionflow:linked:content-classification-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Decision Framework]]",
      "resolved": "urn:visionflow:linked:decision-framework",
      "kind": "StubLink"
    },
    {
      "raw": "[[ETSI GR ARF 010]]",
      "resolved": "urn:visionflow:linked:etsi-gr-arf-010",
      "kind": "StubLink"
    },
    {
      "raw": "[[Harmful Content Prevention]]",
      "resolved": "urn:visionflow:linked:harmful-content-prevention",
      "kind": "StubLink"
    },
    {
      "raw": "[[Human Moderators]]",
      "resolved": "urn:visionflow:linked:human-moderators",
      "kind": "StubLink"
    },
    {
      "raw": "[[Human Review Workflow]]",
      "resolved": "urn:visionflow:linked:human-review-workflow",
      "kind": "StubLink"
    },
    {
      "raw": "[[Moderation Policy]]",
      "resolved": "urn:visionflow:linked:moderation-policy",
      "kind": "StubLink"
    },
    {
      "raw": "[[Platform Governance System]]",
      "resolved": "urn:visionflow:linked:platform-governance-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Policy Enforcement Engine]]",
      "resolved": "urn:visionflow:linked:policy-enforcement-engine",
      "kind": "StubLink"
    },
    {
      "raw": "[[Reporting System]]",
      "resolved": "urn:visionflow:linked:reporting-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Reviewer Training Program]]",
      "resolved": "urn:visionflow:linked:reviewer-training-program",
      "kind": "StubLink"
    },
    {
      "raw": "[[Safe User Experience]]",
      "resolved": "urn:visionflow:linked:safe-user-experience",
      "kind": "StubLink"
    },
    {
      "raw": "[[Trust and Safety Infrastructure]]",
      "resolved": "urn:visionflow:linked:trust-and-safety-infrastructure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Application Layer]]",
      "resolved": "urn:visionflow:owl:class:application-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Community Standards]]",
      "resolved": "urn:visionflow:owl:class:community-standards",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Machine Learning Models]]",
      "resolved": "urn:visionflow:owl:class:machine-learning-models",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Middleware Layer]]",
      "resolved": "urn:visionflow:owl:class:middleware-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulatory Compliance]]",
      "resolved": "urn:visionflow:owl:class:regulatory-compliance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Telecollaboration]]",
      "resolved": "urn:visionflow:owl:class:telecollaboration",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[TrustAndGovernanceDomain]]",
      "resolved": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[VirtualSocietyDomain]]",
      "resolved": "urn:visionflow:owl:class:virtual-society",
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
  - A systematic process or system for reviewing, filtering, and managing user-generated content to enforce community standards, legal requirements, and platform policies while balancing freedom of expression with safety and compliance.

- ### Semantic Classification
  - owl-class:: spatial-computing:ContentModeration
  - owl-role:: Process
  - owl-inferred:: spatial-computing:VirtualProcess
  - belongs-to-domain:: [[TrustAndGovernanceDomain]], [[VirtualSocietyDomain]]
  - implemented-in-layer:: [[Middleware Layer]], [[Application Layer]]

- ### Relationships
  - bridges-to:: [[Telecollaboration]]
  - has-part:: [[Automated Filtering]], [[Human Review Workflow]], [[Policy Enforcement Engine]], [[Appeal Process]], [[Content Classification System]]
  - is-part-of:: [[Platform Governance System]], [[Trust and Safety Infrastructure]]
  - requires:: [[Community Standards]], [[Moderation Policy]], [[Content Analysis Tools]], [[Reviewer Training Program]]
  - enables:: [[Safe User Experience]], [[Regulatory Compliance]], [[Community Guidelines Enforcement]], [[Harmful Content Prevention]]
  - depends-on:: [[Machine Learning Models]], [[Human Moderators]], [[Reporting System]], [[Decision Framework]]

- ### Content
  Content Moderation — content pending enrichment.

- ### Provenance
  - sources:: [[ETSI GR ARF 010]]
  - migration-date:: 2026-04-26T00:00:00Z
