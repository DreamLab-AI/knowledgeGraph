public:: true

# ERC3643 Token
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6505177b1599aa97ab6165f36116e2e64eb1ab53d49ca950eeca8f5c7a243504",
  "@type": "Page",
  "vc:slug": "erc3643-token",
  "title": "ERC3643 Token",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:security-token",
      "vc:label": "Security Token"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0519"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "ERC3643 Token"
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
  "@id": "urn:ngm:class:erc3643-token",
  "@type": "Class",
  "label": "ERC3643 Token",
  "definition": "The ERC-3643 (T-REX) standard is an Ethereum permissioned token framework designed for compliant security token issuance, embedding on-chain identity verification and transfer-restriction logic that enforces investor eligibility, jurisdiction rules, and AML/KYC requirements at the smart contract level. Transfer authorisation is governed by an on-chain identity registry and a modular compliance module, enabling automated regulatory enforcement.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-token-and-asset",
      "label": "Token and Asset"
    },
    {
      "@id": "urn:ngm:class:security-token",
      "label": "Security Token"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:identity-verification", "label": "Identity Verification"},
      {"@id": "urn:ngm:class:aml-kyc-compliance", "label": "AML KYC Compliance"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:security-token-offering", "label": "Security Token Offering"},
      {"@id": "urn:ngm:class:compliance-verification", "label": "Compliance Verification"},
      {"@id": "urn:ngm:class:blockchain-compliance", "label": "Blockchain Compliance"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:erc3643-standard", "label": "ERC3643 Standard"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:erc20-token", "label": "ERC20 Token"},
      {"@id": "urn:ngm:class:erc1400-token", "label": "ERC1400 Token"},
      {"@id": "urn:ngm:class:identity-management", "label": "Identity Management"},
      {"@id": "urn:ngm:class:compliance-framework", "label": "Compliance Framework"},
      {"@id": "urn:ngm:class:tokenomics-governance", "label": "Tokenomics Governance"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:erc3643-token:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6505177b1599aa97ab6165f36116e2e64eb1ab53d49ca950eeca8f5c7a243504"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Security Token]]",
      "resolved": "urn:visionflow:owl:class:security-token",
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
  - A permissioned token standard for security tokens with on-chain identity verification and compliance rules, enabling compliant transfer restrictions based on investor identity and jurisdiction.

- ### Semantic Classification
  - owl-class:: blockchain:ERC3643Token
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Security Token]]

- ### Content
  ERC-3643 Token — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
