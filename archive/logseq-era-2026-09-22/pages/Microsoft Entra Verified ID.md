public:: true

# Microsoft Entra Verified ID
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d24689d7c4c750076321f2ae26923b57c0dbd0eaf69c5c49c09af24642bbed8e",
  "@type": "Page",
  "vc:slug": "microsoft-entra-verified-id",
  "title": "Microsoft Entra Verified ID",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:decentralised-identity",
      "vc:label": "Decentralised Identity"
    },
    {
      "@id": "urn:visionflow:linked:identity-verification",
      "vc:label": "Identity Verification"
    },
    {
      "@id": "urn:visionflow:linked:identity-management",
      "vc:label": "Identity Management"
    },
    {
      "@id": "urn:visionflow:linked:verifiable-credentials",
      "vc:label": "Verifiable Credentials"
    },
    {
      "@id": "urn:visionflow:linked:https-learn-microsoft-com-en-us-entra-verified-id",
      "vc:label": "https://learn.microsoft.com/en-us/entra/verified-id/"
    },
    {
      "@id": "urn:visionflow:linked:https-www-w-3-org-tr-vc-data-model",
      "vc:label": "https://www.w3.org/TR/vc-data-model/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Microsoft Entra Verified ID"
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
  "@id": "urn:ngm:class:microsoft-entra-verified-id",
  "@type": "Class",
  "label": "Microsoft Entra Verified ID",
  "definition": "Microsoft Entra Verified ID is a managed service for issuing and verifying decentralised identity credentials based on open standards for verifiable credentials.",
  "domain": "distributed-systems",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:verifiable-credentials",
      "label": "Verifiable Credentials"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
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
  "@id": "urn:visionflow:annotation:link-resolutions:microsoft-entra-verified-id:9196e79a3b34",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d24689d7c4c750076321f2ae26923b57c0dbd0eaf69c5c49c09af24642bbed8e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Decentralised Identity]]",
      "resolved": "urn:visionflow:linked:decentralised-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Verification]]",
      "resolved": "urn:visionflow:linked:identity-verification",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Management]]",
      "resolved": "urn:visionflow:linked:identity-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Verifiable Credentials]]",
      "resolved": "urn:visionflow:linked:verifiable-credentials",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://learn.microsoft.com/en-us/entra/verified-id/]]",
      "resolved": "urn:visionflow:linked:https-learn-microsoft-com-en-us-entra-verified-id",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.w3.org/TR/vc-data-model/]]",
      "resolved": "urn:visionflow:linked:https-www-w-3-org-tr-vc-data-model",
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
  - Microsoft Entra Verified ID is a managed service for issuing and verifying decentralised identity credentials based on open standards for verifiable credentials.

- ### Semantic Classification
  - owl-class:: distributed-systems:MicrosoftEntraVerifiedID
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Verifiable Credentials]]
  - bridges-to:: [[Identity Management]]
  - requires:: [[Decentralised Identity]]
  - enables:: [[Identity Verification]]

- ### Content
  - Microsoft Entra Verified ID is part of the Microsoft Entra identity product family and implements verifiable credential standards from the World Wide Web Consortium. Organisations can issue digital credentials that holders store and present.
  - The service supports decentralised identifiers and credential verification without continuous reliance on the issuer. It integrates with the wider Microsoft identity platform used by Azure-hosted applications.

- ### Provenance
  - sources:: [[https://learn.microsoft.com/en-us/entra/verified-id/]], [[https://www.w3.org/TR/vc-data-model/]]
  - migration-date:: 2026-05-29T00:00:00Z
