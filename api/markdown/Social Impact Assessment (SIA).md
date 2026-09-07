```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e2979585c11cba664ae085ffa734ce413a203c5f016e4ba0fc131106b48f5604",
  "@type": "Page",
  "vc:slug": "social-impact-assessment-sia",
  "title": "Social Impact Assessment (SIA)",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:community-consultation",
      "vc:label": "Community Consultation"
    },
    {
      "@id": "urn:visionflow:linked:community-engagement",
      "vc:label": "Community Engagement"
    },
    {
      "@id": "urn:visionflow:linked:community-protection",
      "vc:label": "Community Protection"
    },
    {
      "@id": "urn:visionflow:linked:compliance-management",
      "vc:label": "Compliance Management"
    },
    {
      "@id": "urn:visionflow:linked:data-collection",
      "vc:label": "Data Collection"
    },
    {
      "@id": "urn:visionflow:linked:ethics-framework",
      "vc:label": "Ethics Framework"
    },
    {
      "@id": "urn:visionflow:linked:impact-indicators",
      "vc:label": "Impact Indicators"
    },
    {
      "@id": "urn:visionflow:linked:impact-metrics",
      "vc:label": "Impact Metrics"
    },
    {
      "@id": "urn:visionflow:linked:iso-26000",
      "vc:label": "ISO 26000"
    },
    {
      "@id": "urn:visionflow:linked:policy-development",
      "vc:label": "Policy Development"
    },
    {
      "@id": "urn:visionflow:linked:responsible-deployment",
      "vc:label": "Responsible Deployment"
    },
    {
      "@id": "urn:visionflow:linked:social-responsibility-policy",
      "vc:label": "Social Responsibility Policy"
    },
    {
      "@id": "urn:visionflow:linked:stakeholder-alignment",
      "vc:label": "Stakeholder Alignment"
    },
    {
      "@id": "urn:visionflow:linked:stakeholder-analysis",
      "vc:label": "Stakeholder Analysis"
    },
    {
      "@id": "urn:visionflow:linked:stakeholder-mapping",
      "vc:label": "Stakeholder Mapping"
    },
    {
      "@id": "urn:visionflow:linked:un-sdg-toolkit",
      "vc:label": "UN SDG Toolkit"
    },
    {
      "@id": "urn:visionflow:owl:class:governance-framework",
      "vc:label": "Governance Framework"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "MiddlewareLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:risk-assessment",
      "vc:label": "Risk Assessment"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "vc:label": "TrustAndGovernanceDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20228"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Social Impact Assessment (SIA)"
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
  "@id": "urn:ngm:class:social-impact-assessment-sia",
  "@type": "Class",
  "label": "Social Impact Assessment (SIA)",
  "definition": "Systematic eof potential social consequences of metaverse deployment on communities, stakeholder groups, and societal well-being.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-governance-and-safety",
      "label": "Governance and Safety"
    },
    {
      "@id": "urn:ngm:class:metaverse-governance-and-safeguarding",
      "label": "Metaverse governance and safeguarding"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:impact-metrics",
        "label": "Impact Metrics"
      },
      {
        "@id": "urn:ngm:class:stakeholder-analysis",
        "label": "Stakeholder Analysis"
      },
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-collection",
        "label": "Data Collection"
      },
      {
        "@id": "urn:ngm:class:stakeholder-mapping",
        "label": "Stakeholder Mapping"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:responsible-deployment",
        "label": "Responsible Deployment"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:compliance-management",
        "label": "Compliance Management"
      },
      {
        "@id": "urn:ngm:class:governance-framework",
        "label": "Governance Framework"
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

- ### Definition
  - Systematic evaluation of potential social consequences of metaverse deployment on communities, stakeholder groups, and societal well-being.

- ### Semantic Classification
  - owl-class:: spatial-computing:SocialImpactAssessment
  - owl-role:: Process
  - owl-inferred:: spatial-computing:VirtualProcess
  - belongs-to-domain:: [[TrustAndGovernanceDomain]]
  - implemented-in-layer:: [[MiddlewareLayer]]

- ### Relationships
  - has-part:: [[Stakeholder Analysis]], [[Impact Metrics]], [[Community Consultation]], [[Risk Assessment]]
  - is-part-of:: [[Governance Framework]], [[Compliance Management]]
  - requires:: [[Data Collection]], [[Impact Indicators]], [[Stakeholder Mapping]]
  - enables:: [[Responsible Deployment]], [[Community Protection]], [[Stakeholder Alignment]], [[Policy Development]]
  - depends-on:: [[Ethics Framework]], [[Social Responsibility Policy]], [[Community Engagement]]

- ### Content
  Social Impact Assessment (SIA) — content pending enrichment.

- ### Provenance
  - sources:: [[ISO 26000]], [[UN SDG Toolkit]]
  - migration-date:: 2026-04-26T00:00:00Z
