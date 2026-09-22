public:: true

# BC-0456-virtual-asset-service-providers
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:594a777faaf417b0f7d4fe1d7249015ffcfdb196d286bf6487bb9bf66fefae95",
  "@type": "Page",
  "vc:slug": "bc-0456-virtual-asset-service-providers",
  "title": "BC-0456-virtual-asset-service-providers",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:aml-kyc-compliance",
      "vc:label": "AML KYC Compliance"
    },
    {
      "@id": "urn:visionflow:linked:travel-rule",
      "vc:label": "Travel Rule"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-compliance",
      "vc:label": "Regulatory Compliance"
    },
    {
      "@id": "urn:visionflow:linked:fatf",
      "vc:label": "FATF"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "BC-0456-virtual-asset-service-providers"
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
  "@id": "urn:ngm:class:bc-0456-virtual-asset-service-providers",
  "@type": "Class",
  "label": "BC-0456-virtual-asset-service-providers",
  "definition": "Virtual asset service providers are businesses that conduct activities such as exchange, transfer, custody or issuance of crypto-assets on behalf of others, and that are subject to financial regulation.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:regulatory-compliance",
      "label": "Regulatory Compliance"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:aml-kyc-compliance",
        "label": "AML KYC Compliance"
      },
      {
        "@id": "urn:ngm:class:travel-rule",
        "label": "Travel Rule"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
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
  "@id": "urn:visionflow:annotation:link-resolutions:bc-0456-virtual-asset-service-providers:46343093b8d8",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:594a777faaf417b0f7d4fe1d7249015ffcfdb196d286bf6487bb9bf66fefae95"
  },
  "vc:resolutions": [
    {
      "raw": "[[AML KYC Compliance]]",
      "resolved": "urn:visionflow:linked:aml-kyc-compliance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Travel Rule]]",
      "resolved": "urn:visionflow:linked:travel-rule",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulatory Compliance]]",
      "resolved": "urn:visionflow:linked:regulatory-compliance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[FATF]]",
      "resolved": "urn:visionflow:linked:fatf",
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
  - Virtual asset service providers are businesses that conduct activities such as exchange, transfer, custody or issuance of crypto-assets on behalf of others, and that are subject to financial regulation.

- ### Semantic Classification
  - owl-class:: blockchain:BC0456virtualassetserviceproviders
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Regulatory Compliance]]
  - bridges-to:: [[FATF]]
  - requires:: [[AML KYC Compliance]], [[Travel Rule]]
  - enables:: [[Regulatory Compliance]]

- ### Content
  - A virtual asset service provider (VASP) is an entity that, as a business, exchanges, transfers, safeguards or administers virtual assets, or provides financial services around their issuance and sale. The term originates from Financial Action Task Force guidance and is used in many national anti-money-laundering frameworks.
  - VASPs are required to register or obtain authorisation and to apply customer due diligence, transaction monitoring and the travel rule for transfers. Examples include centralised exchanges, custodial wallet providers and brokers, which must report to financial authorities.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
