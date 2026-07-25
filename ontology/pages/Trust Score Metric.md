public:: true

# Trust Score Metric
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:98466af371d9ce52f5973a1feafb7ed387f11c31760cbaa77d2b7277617af2d2",
  "@type": "Page",
  "vc:slug": "trust-score-metric",
  "title": "Trust Score Metric",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:access-control-decisions",
      "vc:label": "Access Control Decisions"
    },
    {
      "@id": "urn:visionflow:linked:behavioral-data",
      "vc:label": "Behavioral Data"
    },
    {
      "@id": "urn:visionflow:linked:calculation-timestamp",
      "vc:label": "Calculation Timestamp"
    },
    {
      "@id": "urn:visionflow:linked:confidence-interval",
      "vc:label": "Confidence Interval"
    },
    {
      "@id": "urn:visionflow:linked:data-quality-metrics",
      "vc:label": "Data Quality Metrics"
    },
    {
      "@id": "urn:visionflow:linked:etsi-gs-mec",
      "vc:label": "ETSI GS MEC"
    },
    {
      "@id": "urn:visionflow:linked:score-value",
      "vc:label": "Score Value"
    },
    {
      "@id": "urn:visionflow:linked:scoring-methodology-reference",
      "vc:label": "Scoring Methodology Reference"
    },
    {
      "@id": "urn:visionflow:linked:statistical-models",
      "vc:label": "Statistical Models"
    },
    {
      "@id": "urn:visionflow:linked:transaction-approval",
      "vc:label": "Transaction Approval"
    },
    {
      "@id": "urn:visionflow:linked:validation-rules",
      "vc:label": "Validation Rules"
    },
    {
      "@id": "urn:visionflow:linked:validity-period",
      "vc:label": "Validity Period"
    },
    {
      "@id": "urn:visionflow:owl:class:calculation-parameters",
      "vc:label": "Calculation Parameters"
    },
    {
      "@id": "urn:visionflow:owl:class:identity-verification",
      "vc:label": "Identity Verification"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "MiddlewareLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:reputation-scoring-model",
      "vc:label": "Reputation Scoring Model"
    },
    {
      "@id": "urn:visionflow:owl:class:risk-assessment",
      "vc:label": "Risk Assessment"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "vc:label": "TrustAndGovernanceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:trust-infrastructure",
      "vc:label": "Trust Infrastructure"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-20289"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Trust Score Metric"
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
  "@id": "urn:ngm:class:trust-score-metric",
  "@type": "Class",
  "label": "Trust Score Metric",
  "definition": "A quantitative measurement representing an entity's trustworthiness, credibility, or risk level, expressed as a numerical value with associated confidence intervals and time validity, used to inform authorization decisions, transaction approvals, and access control policies.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-governance-and-safety",
      "label": "Governance and Safety"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:calculation-parameters",
        "label": "Calculation Parameters"
      },
      {
        "@id": "urn:ngm:class:reputation-scoring-model",
        "label": "Reputation Scoring Model"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:access-control-decisions",
        "label": "Access Control Decisions"
      },
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      },
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:trust-infrastructure",
        "label": "Trust Infrastructure"
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
  "@id": "urn:visionflow:annotation:link-resolutions:trust-score-metric:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:98466af371d9ce52f5973a1feafb7ed387f11c31760cbaa77d2b7277617af2d2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Access Control Decisions]]",
      "resolved": "urn:visionflow:linked:access-control-decisions",
      "kind": "StubLink"
    },
    {
      "raw": "[[Behavioral Data]]",
      "resolved": "urn:visionflow:linked:behavioral-data",
      "kind": "StubLink"
    },
    {
      "raw": "[[Calculation Timestamp]]",
      "resolved": "urn:visionflow:linked:calculation-timestamp",
      "kind": "StubLink"
    },
    {
      "raw": "[[Confidence Interval]]",
      "resolved": "urn:visionflow:linked:confidence-interval",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Quality Metrics]]",
      "resolved": "urn:visionflow:linked:data-quality-metrics",
      "kind": "StubLink"
    },
    {
      "raw": "[[ETSI GS MEC]]",
      "resolved": "urn:visionflow:linked:etsi-gs-mec",
      "kind": "StubLink"
    },
    {
      "raw": "[[Score Value]]",
      "resolved": "urn:visionflow:linked:score-value",
      "kind": "StubLink"
    },
    {
      "raw": "[[Scoring Methodology Reference]]",
      "resolved": "urn:visionflow:linked:scoring-methodology-reference",
      "kind": "StubLink"
    },
    {
      "raw": "[[Statistical Models]]",
      "resolved": "urn:visionflow:linked:statistical-models",
      "kind": "StubLink"
    },
    {
      "raw": "[[Transaction Approval]]",
      "resolved": "urn:visionflow:linked:transaction-approval",
      "kind": "StubLink"
    },
    {
      "raw": "[[Validation Rules]]",
      "resolved": "urn:visionflow:linked:validation-rules",
      "kind": "StubLink"
    },
    {
      "raw": "[[Validity Period]]",
      "resolved": "urn:visionflow:linked:validity-period",
      "kind": "StubLink"
    },
    {
      "raw": "[[Calculation Parameters]]",
      "resolved": "urn:visionflow:owl:class:calculation-parameters",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Verification]]",
      "resolved": "urn:visionflow:owl:class:identity-verification",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MiddlewareLayer]]",
      "resolved": "urn:visionflow:owl:class:middleware-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Reputation Scoring Model]]",
      "resolved": "urn:visionflow:owl:class:reputation-scoring-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Risk Assessment]]",
      "resolved": "urn:visionflow:owl:class:risk-assessment",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[TrustAndGovernanceDomain]]",
      "resolved": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Trust Infrastructure]]",
      "resolved": "urn:visionflow:owl:class:trust-infrastructure",
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
  - A quantitative measurement representing an entity's trustworthiness, credibility, or risk level, expressed as a numerical value with associated confidence intervals and time validity, used to inform authorization decisions, transaction approvals, and access control policies.

- ### Semantic Classification
  - owl-class:: spatial-computing:TrustScoreMetric
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[TrustAndGovernanceDomain]]
  - implemented-in-layer:: [[MiddlewareLayer]]

- ### Relationships
  - has-part:: [[Score Value]], [[Confidence Interval]], [[Calculation Timestamp]], [[Validity Period]], [[Scoring Methodology Reference]]
  - is-part-of:: [[Trust Infrastructure]]
  - requires:: [[Reputation Scoring Model]], [[Behavioral Data]], [[Calculation Parameters]]
  - enables:: [[Access Control Decisions]], [[Risk Assessment]], [[Transaction Approval]], [[Identity Verification]]
  - depends-on:: [[Data Quality Metrics]], [[Statistical Models]], [[Validation Rules]]

- ### Content
  Trust Score Metric — content pending enrichment.

- ### Provenance
  - sources:: [[ETSI GS MEC]]
  - migration-date:: 2026-04-26T00:00:00Z
