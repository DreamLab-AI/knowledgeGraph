public:: true

# User Consent Token
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8c954024f6cf099111b9cccb38261e57dfeb0426c82561307881276ecc29cb56",
  "@type": "Page",
  "vc:slug": "user-consent-token",
  "title": "User Consent Token",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:automated-privacy-compliance",
      "vc:label": "Automated Privacy Compliance"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-ledger",
      "vc:label": "Blockchain Ledger"
    },
    {
      "@id": "urn:visionflow:linked:consent-audit-trail",
      "vc:label": "Consent Audit Trail"
    },
    {
      "@id": "urn:visionflow:linked:consent-management-framework",
      "vc:label": "Consent Management Framework"
    },
    {
      "@id": "urn:visionflow:linked:consent-payload",
      "vc:label": "Consent Payload"
    },
    {
      "@id": "urn:visionflow:linked:consent-registry",
      "vc:label": "Consent Registry"
    },
    {
      "@id": "urn:visionflow:linked:consent-revocation",
      "vc:label": "Consent Revocation"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-key",
      "vc:label": "Cryptographic Key"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-signature",
      "vc:label": "Cryptographic Signature"
    },
    {
      "@id": "urn:visionflow:linked:data-schema",
      "vc:label": "Data Schema"
    },
    {
      "@id": "urn:visionflow:linked:decentralized-identifier-did",
      "vc:label": "Decentralized Identifier (DID)"
    },
    {
      "@id": "urn:visionflow:linked:gdpr",
      "vc:label": "GDPR"
    },
    {
      "@id": "urn:visionflow:linked:iso-29184",
      "vc:label": "ISO 29184"
    },
    {
      "@id": "urn:visionflow:linked:privacy-policy",
      "vc:label": "Privacy Policy"
    },
    {
      "@id": "urn:visionflow:linked:revocation-mechanism",
      "vc:label": "Revocation Mechanism"
    },
    {
      "@id": "urn:visionflow:linked:scope-definition",
      "vc:label": "Scope Definition"
    },
    {
      "@id": "urn:visionflow:linked:time-oracle",
      "vc:label": "Time Oracle"
    },
    {
      "@id": "urn:visionflow:linked:user-data-sovereignty",
      "vc:label": "User Data Sovereignty"
    },
    {
      "@id": "urn:visionflow:linked:verifiable-credential",
      "vc:label": "Verifiable Credential"
    },
    {
      "@id": "urn:visionflow:linked:w3-c-did-core",
      "vc:label": "W3C DID Core"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-identity",
      "vc:label": "Digital Identity"
    },
    {
      "@id": "urn:visionflow:owl:class:granular-consent-control",
      "vc:label": "Granular Consent Control"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "MiddlewareLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:timestamp",
      "vc:label": "Timestamp"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "vc:label": "TrustAndGovernanceDomain"
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
      "vc:value": "20274"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "User Consent Token"
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
  "@id": "urn:ngm:class:user-consent-token",
  "@type": "Class",
  "label": "User Consent Token",
  "definition": "A cryptographically verifiable digital token that represents and enforces user consent for data processing, collection, sharing, or participation in virtual environments with granular permission controls and revocation mechanisms.",
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
        "@id": "urn:ngm:class:consent-payload",
        "label": "Consent Payload"
      },
      {
        "@id": "urn:ngm:class:cryptographic-signature",
        "label": "Cryptographic Signature"
      },
      {
        "@id": "urn:ngm:class:revocation-mechanism",
        "label": "Revocation Mechanism"
      },
      {
        "@id": "urn:ngm:class:scope-definition",
        "label": "Scope Definition"
      },
      {
        "@id": "urn:ngm:class:timestamp",
        "label": "Timestamp"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:consent-registry",
        "label": "Consent Registry"
      },
      {
        "@id": "urn:ngm:class:cryptographic-keys",
        "label": "Cryptographic Keys"
      },
      {
        "@id": "urn:ngm:class:data-schema",
        "label": "Data Schema"
      },
      {
        "@id": "urn:ngm:class:privacy-policy",
        "label": "Privacy Policy"
      },
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:automated-privacy-compliance",
        "label": "Automated Privacy Compliance"
      },
      {
        "@id": "urn:ngm:class:consent-audit-trail",
        "label": "Consent Audit Trail"
      },
      {
        "@id": "urn:ngm:class:consent-revocation",
        "label": "Consent Revocation"
      },
      {
        "@id": "urn:ngm:class:user-data-sovereignty",
        "label": "User Data Sovereignty"
      },
      {
        "@id": "urn:ngm:class:granular-consent-control",
        "label": "Granular Consent Control"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:consent-management",
        "label": "Consent Management Framework"
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
  "@id": "urn:visionflow:annotation:link-resolutions:user-consent-token:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8c954024f6cf099111b9cccb38261e57dfeb0426c82561307881276ecc29cb56"
  },
  "vc:resolutions": [
    {
      "raw": "[[Automated Privacy Compliance]]",
      "resolved": "urn:visionflow:linked:automated-privacy-compliance",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain Ledger]]",
      "resolved": "urn:visionflow:linked:blockchain-ledger",
      "kind": "StubLink"
    },
    {
      "raw": "[[Consent Audit Trail]]",
      "resolved": "urn:visionflow:linked:consent-audit-trail",
      "kind": "StubLink"
    },
    {
      "raw": "[[Consent Management Framework]]",
      "resolved": "urn:visionflow:linked:consent-management-framework",
      "kind": "StubLink"
    },
    {
      "raw": "[[Consent Payload]]",
      "resolved": "urn:visionflow:linked:consent-payload",
      "kind": "StubLink"
    },
    {
      "raw": "[[Consent Registry]]",
      "resolved": "urn:visionflow:linked:consent-registry",
      "kind": "StubLink"
    },
    {
      "raw": "[[Consent Revocation]]",
      "resolved": "urn:visionflow:linked:consent-revocation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cryptographic Key]]",
      "resolved": "urn:visionflow:linked:cryptographic-key",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cryptographic Signature]]",
      "resolved": "urn:visionflow:linked:cryptographic-signature",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Schema]]",
      "resolved": "urn:visionflow:linked:data-schema",
      "kind": "StubLink"
    },
    {
      "raw": "[[Decentralized Identifier (DID)]]",
      "resolved": "urn:visionflow:linked:decentralized-identifier-did",
      "kind": "StubLink"
    },
    {
      "raw": "[[GDPR]]",
      "resolved": "urn:visionflow:linked:gdpr",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO 29184]]",
      "resolved": "urn:visionflow:linked:iso-29184",
      "kind": "StubLink"
    },
    {
      "raw": "[[Privacy Policy]]",
      "resolved": "urn:visionflow:linked:privacy-policy",
      "kind": "StubLink"
    },
    {
      "raw": "[[Revocation Mechanism]]",
      "resolved": "urn:visionflow:linked:revocation-mechanism",
      "kind": "StubLink"
    },
    {
      "raw": "[[Scope Definition]]",
      "resolved": "urn:visionflow:linked:scope-definition",
      "kind": "StubLink"
    },
    {
      "raw": "[[Time Oracle]]",
      "resolved": "urn:visionflow:linked:time-oracle",
      "kind": "StubLink"
    },
    {
      "raw": "[[User Data Sovereignty]]",
      "resolved": "urn:visionflow:linked:user-data-sovereignty",
      "kind": "StubLink"
    },
    {
      "raw": "[[Verifiable Credential]]",
      "resolved": "urn:visionflow:linked:verifiable-credential",
      "kind": "StubLink"
    },
    {
      "raw": "[[W3C DID Core]]",
      "resolved": "urn:visionflow:linked:w3-c-did-core",
      "kind": "StubLink"
    },
    {
      "raw": "[[Digital Identity]]",
      "resolved": "urn:visionflow:owl:class:digital-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Granular Consent Control]]",
      "resolved": "urn:visionflow:owl:class:granular-consent-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MiddlewareLayer]]",
      "resolved": "urn:visionflow:owl:class:middleware-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Timestamp]]",
      "resolved": "urn:visionflow:owl:class:timestamp",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[TrustAndGovernanceDomain]]",
      "resolved": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[VirtualEconomyDomain]]",
      "resolved": "urn:visionflow:owl:class:virtual-economy",
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
  - A cryptographically verifiable digital token that represents and enforces user consent for data processing, collection, sharing, or participation in virtual environments with granular permission controls and revocation mechanisms.

- ### Semantic Classification
  - owl-class:: spatial-computing:UserConsentToken
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[VirtualEconomyDomain]] [[TrustAndGovernanceDomain]]
  - implemented-in-layer:: [[MiddlewareLayer]]

- ### Relationships
  - has-part:: [[Consent Payload]], [[Cryptographic Signature]], [[Scope Definition]], [[Timestamp]], [[Revocation Mechanism]]
  - is-part-of:: [[Consent Management Framework]]
  - requires:: [[Digital Identity]], [[Cryptographic Key]], [[Consent Registry]], [[Privacy Policy]], [[Data Schema]]
  - enables:: [[Granular Consent Control]], [[Consent Audit Trail]], [[Automated Privacy Compliance]], [[User Data Sovereignty]], [[Consent Revocation]]
  - depends-on:: [[Decentralized Identifier (DID)]], [[Verifiable Credential]], [[Blockchain Ledger]], [[Time Oracle]]

- ### Content
  User Consent Token — content pending enrichment.

- ### Provenance
  - sources:: [[GDPR]] [[W3C DID Core]] [[ISO 29184]]
  - migration-date:: 2026-04-26T00:00:00Z
