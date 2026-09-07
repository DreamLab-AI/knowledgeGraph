```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7ab78e9c14d330e328192a4c41ef70f8dffe527a01f565b9d48077216c9e1bfc",
  "@type": "Page",
  "vc:slug": "virtual-securities-offering-vso",
  "title": "Virtual Securities Offering (VSO)",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:24-7-trading",
      "vc:label": "24/7 Trading"
    },
    {
      "@id": "urn:visionflow:linked:automated-compliance",
      "vc:label": "Automated Compliance"
    },
    {
      "@id": "urn:visionflow:linked:compliance-validation-engine",
      "vc:label": "Compliance Validation Engine"
    },
    {
      "@id": "urn:visionflow:linked:custody-solution",
      "vc:label": "Custody Solution"
    },
    {
      "@id": "urn:visionflow:linked:distribution-mechanism",
      "vc:label": "Distribution Mechanism"
    },
    {
      "@id": "urn:visionflow:linked:finra",
      "vc:label": "FINRA"
    },
    {
      "@id": "urn:visionflow:linked:fractional-ownership",
      "vc:label": "Fractional Ownership"
    },
    {
      "@id": "urn:visionflow:linked:global-capital-access",
      "vc:label": "Global Capital Access"
    },
    {
      "@id": "urn:visionflow:linked:investor-registry",
      "vc:label": "Investor Registry"
    },
    {
      "@id": "urn:visionflow:linked:kyc-aml-system",
      "vc:label": "KYC/AML System"
    },
    {
      "@id": "urn:visionflow:linked:legal-structure",
      "vc:label": "Legal Structure"
    },
    {
      "@id": "urn:visionflow:linked:mi-ca",
      "vc:label": "MiCA"
    },
    {
      "@id": "urn:visionflow:linked:programmable-securities",
      "vc:label": "Programmable Securities"
    },
    {
      "@id": "urn:visionflow:linked:sec",
      "vc:label": "SEC"
    },
    {
      "@id": "urn:visionflow:linked:securities-law",
      "vc:label": "Securities Law"
    },
    {
      "@id": "urn:visionflow:linked:token-issuance-contract",
      "vc:label": "Token Issuance Contract"
    },
    {
      "@id": "urn:visionflow:linked:transfer-agent",
      "vc:label": "Transfer Agent"
    },
    {
      "@id": "urn:visionflow:owl:class:application-layer",
      "vc:label": "ApplicationLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:audit-trail",
      "vc:label": "Audit Trail"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-network",
      "vc:label": "Blockchain Network"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-asset-ecosystem",
      "vc:label": "Digital Asset Ecosystem"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-identity",
      "vc:label": "Digital Identity"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "MiddlewareLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:regulatory-framework",
      "vc:label": "Regulatory Framework"
    },
    {
      "@id": "urn:visionflow:owl:class:secondary-market-integration",
      "vc:label": "Secondary Market Integration"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract-platform",
      "vc:label": "Smart Contract Platform"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-economy",
      "vc:label": "VirtualEconomyDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20273"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Virtual Securities Offering (VSO)"
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
  "@id": "urn:ngm:class:virtual-securities-offering-vso",
  "@type": "Class",
  "label": "Virtual Securities Offering (VSO)",
  "definition": "A tokenized securities issuance process that leverages blockchain technology to create, distribute, and manage digital representations of traditional securities with embedded regulatory compliance and automated governance mechanisms.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-governance-and-safety",
      "label": "Governance and Safety"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:secondary-market-integration",
        "label": "Secondary Market Integration"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:custody",
        "label": "Custody Solution"
      },
      {
        "@id": "urn:ngm:class:kyc-aml",
        "label": "KYC/AML System"
      },
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:regulatory-framework",
        "label": "Regulatory Framework"
      },
      {
        "@id": "urn:ngm:class:smart-contract-platform",
        "label": "Smart Contract Platform"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:automated-compliance",
        "label": "Automated Compliance"
      },
      {
        "@id": "urn:ngm:class:fractional-ownership",
        "label": "Fractional Ownership"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:digital-asset-ecosystem",
        "label": "Digital Asset Ecosystem"
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
  - A tokenized securities issuance process that leverages blockchain technology to create, distribute, and manage digital representations of traditional securities with embedded regulatory compliance and automated governance mechanisms.

- ### Semantic Classification
  - owl-class:: spatial-computing:VirtualSecuritiesOffering
  - owl-role:: Process
  - owl-inferred:: spatial-computing:VirtualProcess
  - belongs-to-domain:: [[VirtualEconomyDomain]]
  - implemented-in-layer:: [[MiddlewareLayer]] [[ApplicationLayer]]

- ### Relationships
  - has-part:: [[Token Issuance Contract]], [[Compliance Validation Engine]], [[Investor Registry]], [[Distribution Mechanism]], [[Secondary Market Integration]]
  - is-part-of:: [[Digital Asset Ecosystem]]
  - requires:: [[Smart Contract Platform]], [[KYC/AML System]], [[Digital Identity]], [[Regulatory Framework]], [[Custody Solution]]
  - enables:: [[Fractional Ownership]], [[Automated Compliance]], [[Global Capital Access]], [[24/7 Trading]], [[Programmable Securities]]
  - depends-on:: [[Blockchain Network]], [[Legal Structure]], [[Securities Law]], [[Transfer Agent]], [[Audit Trail]]

- ### Content
  Virtual Securities Offering (VSO) — content pending enrichment.

- ### Provenance
  - sources:: [[SEC]] [[MiCA]] [[FINRA]]
  - migration-date:: 2026-04-26T00:00:00Z
