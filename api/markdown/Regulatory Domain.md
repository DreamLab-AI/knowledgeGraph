public:: true

# Regulatory Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b12ce3fe146d5da10ef652252d452329b71b52612dd16d2aff3210deb48961db",
  "@type": "Page",
  "vc:slug": "regulatory-domain",
  "title": "Regulatory Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:statutory-requirement",
      "vc:label": "Statutory Requirement"
    },
    {
      "@id": "urn:visionflow:linked:supervisory-authority",
      "vc:label": "Supervisory Authority"
    },
    {
      "@id": "urn:visionflow:linked:compliance-obligation",
      "vc:label": "Compliance Obligation"
    },
    {
      "@id": "urn:visionflow:linked:enforcement-action",
      "vc:label": "Enforcement Action"
    },
    {
      "@id": "urn:visionflow:linked:reporting-requirement",
      "vc:label": "Reporting Requirement"
    },
    {
      "@id": "urn:visionflow:linked:governance-domain",
      "vc:label": "Governance Domain"
    },
    {
      "@id": "urn:visionflow:linked:identity-domain",
      "vc:label": "Identity Domain"
    },
    {
      "@id": "urn:visionflow:linked:market-integrity",
      "vc:label": "Market Integrity"
    },
    {
      "@id": "urn:visionflow:linked:consumer-protection",
      "vc:label": "Consumer Protection"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-compliance-domain",
      "vc:label": "Regulatory Compliance Domain"
    },
    {
      "@id": "urn:visionflow:linked:financial-regulation-domain",
      "vc:label": "Financial Regulation Domain"
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
      "vc:value": "Regulatory Domain"
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
  "@id": "urn:ngm:class:regulatory-domain",
  "@type": "Class",
  "label": "Regulatory Domain",
  "definition": "The Regulatory Domain classifies concepts concerning the rules issued by public authorities and the obligations they impose on regulated activities. It covers statutory requirements, supervisory regimes and the mechanisms through which compliance is demonstrated and enforced. As a top-level subject axis it constrains how systems in other domains may lawfully be designed and operated.",
  "domain": "regulatory",
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
        "@id": "urn:ngm:class:statutory-requirement",
        "label": "Statutory Requirement"
      },
      {
        "@id": "urn:ngm:class:supervisory-authority",
        "label": "Supervisory Authority"
      },
      {
        "@id": "urn:ngm:class:compliance-obligation",
        "label": "Compliance Obligation"
      },
      {
        "@id": "urn:ngm:class:enforcement-action",
        "label": "Enforcement Action"
      },
      {
        "@id": "urn:ngm:class:reporting-requirement",
        "label": "Reporting Requirement"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:governance-domain",
        "label": "Governance Domain"
      },
      {
        "@id": "urn:ngm:class:identity-domain",
        "label": "Identity Domain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:market-integrity",
        "label": "Market Integrity"
      },
      {
        "@id": "urn:ngm:class:consumer-protection",
        "label": "Consumer Protection"
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
  "@id": "urn:visionflow:annotation:link-resolutions:regulatory-domain:166d9ee73dd1",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b12ce3fe146d5da10ef652252d452329b71b52612dd16d2aff3210deb48961db"
  },
  "vc:resolutions": [
    {
      "raw": "[[Statutory Requirement]]",
      "resolved": "urn:visionflow:linked:statutory-requirement",
      "kind": "StubLink"
    },
    {
      "raw": "[[Supervisory Authority]]",
      "resolved": "urn:visionflow:linked:supervisory-authority",
      "kind": "StubLink"
    },
    {
      "raw": "[[Compliance Obligation]]",
      "resolved": "urn:visionflow:linked:compliance-obligation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Enforcement Action]]",
      "resolved": "urn:visionflow:linked:enforcement-action",
      "kind": "StubLink"
    },
    {
      "raw": "[[Reporting Requirement]]",
      "resolved": "urn:visionflow:linked:reporting-requirement",
      "kind": "StubLink"
    },
    {
      "raw": "[[Governance Domain]]",
      "resolved": "urn:visionflow:linked:governance-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Domain]]",
      "resolved": "urn:visionflow:linked:identity-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Market Integrity]]",
      "resolved": "urn:visionflow:linked:market-integrity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Consumer Protection]]",
      "resolved": "urn:visionflow:linked:consumer-protection",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulatory Compliance Domain]]",
      "resolved": "urn:visionflow:linked:regulatory-compliance-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Financial Regulation Domain]]",
      "resolved": "urn:visionflow:linked:financial-regulation-domain",
      "kind": "StubLink"
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
  - The Regulatory Domain classifies concepts concerning the rules issued by public authorities and the obligations they impose on regulated activities. It covers statutory requirements, supervisory regimes and the mechanisms through which compliance is demonstrated and enforced. As a top-level subject axis it constrains how systems in other domains may lawfully be designed and operated.

- ### Semantic Classification
  - owl-class:: reg:RegulatoryDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Regulatory Compliance Domain]], [[Financial Regulation Domain]]
  - has-part:: [[Statutory Requirement]], [[Supervisory Authority]], [[Compliance Obligation]], [[Enforcement Action]], [[Reporting Requirement]]
  - requires:: [[Governance Domain]], [[Identity Domain]]
  - enables:: [[Market Integrity]], [[Consumer Protection]]

- ### Content
  - The regulatory domain describes the binding rules set by legislatures and agencies and the supervisory structures that administer them. It distinguishes the rule itself from the obligations it creates and the sanctions available for breach. Regulation typically pursues public objectives such as safety, market integrity and the protection of consumers and data subjects.
  - Regulated entities must interpret requirements, implement controls and produce evidence of conformance, often through periodic reporting and audit. The domain addresses the lifecycle of a rule from consultation and adoption through interpretation, supervision and revision. Cross-border activity introduces conflicts of law and the need to satisfy multiple regimes simultaneously.
  - The regulatory domain bridges to compliance, which operationalises its requirements, and to financial regulation as a prominent specialisation. It depends on governance for legitimate rule-making and on identity for the attribution of obligations to accountable parties.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
