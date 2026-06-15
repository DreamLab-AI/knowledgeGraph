public:: true

# eIDAS
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6bccc205e43849e43b57a43a06ef48bd0bbc204e26a7c08229e97387afdddd22",
  "@type": "Page",
  "vc:slug": "e-idas",
  "title": "eIDAS",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:digital-signature",
      "vc:label": "Digital Signature"
    },
    {
      "@id": "urn:visionflow:linked:public-key-infrastructure",
      "vc:label": "Public Key Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:digital-identity",
      "vc:label": "Digital Identity"
    },
    {
      "@id": "urn:visionflow:linked:identity-verification",
      "vc:label": "Identity Verification"
    },
    {
      "@id": "urn:visionflow:linked:certificate-authority",
      "vc:label": "Certificate Authority"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-framework",
      "vc:label": "Regulatory Framework"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "eIDAS"
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
  "@id": "urn:ngm:class:e-idas",
  "@type": "Class",
  "label": "eIDAS",
  "definition": "A European Union regulation establishing a framework for electronic identification and trust services for electronic transactions across the internal market, defining assurance levels, legal effects for electronic signatures, seals, timestamps and certificates, and mandating mutual recognition of notified national identity schemes.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:regulatory-framework",
    "label": "Regulatory Framework"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:certificate-authority",
        "label": "Certificate Authority"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      },
      {
        "@id": "urn:ngm:class:cross-border-authentication",
        "label": "Cross-Border Authentication"
      },
      {
        "@id": "urn:ngm:class:timestamp",
        "label": "Electronic Timestamp"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:eu-digital-single-market",
        "label": "EU Digital Single Market"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:european-commission",
        "label": "European Commission"
      },
      {
        "@id": "urn:ngm:class:etsi",
        "label": "ETSI"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:x-509-certificate",
        "label": "X.509 Certificate"
      },
      {
        "@id": "urn:ngm:class:qualified-electronic-signature",
        "label": "Qualified Electronic Signature"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:gdpr",
        "label": "GDPR"
      },
      {
        "@id": "urn:ngm:class:digital-identity-wallet",
        "label": "European Digital Identity Wallet"
      },
      {
        "@id": "urn:ngm:class:open-banking",
        "label": "Open Banking"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:fido2",
        "label": "FIDO2"
      },
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:verifiable-credential-vc",
        "label": "Verifiable Credential"
      },
      {
        "@id": "urn:ngm:class:decentralised-identifier",
        "label": "Decentralised Identifier"
      },
      {
        "@id": "urn:ngm:class:blockchain-identity",
        "label": "Blockchain Identity"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:know-your-customer",
        "label": "Know Your Customer"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:electronic-identification-authentication-and-trust-services",
      "label": "Electronic Identification Authentication and Trust Services"
    },
    {
      "@id": "urn:ngm:class:eu-regulation-910-2014",
      "label": "EU Regulation 910/2014"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:e-idas:f91ca908f344",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6bccc205e43849e43b57a43a06ef48bd0bbc204e26a7c08229e97387afdddd22"
  },
  "vc:resolutions": [
    {
      "raw": "[[Digital Signature]]",
      "resolved": "urn:visionflow:linked:digital-signature",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Public Key Infrastructure]]",
      "resolved": "urn:visionflow:linked:public-key-infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Identity]]",
      "resolved": "urn:visionflow:linked:digital-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Verification]]",
      "resolved": "urn:visionflow:linked:identity-verification",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Certificate Authority]]",
      "resolved": "urn:visionflow:linked:certificate-authority",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulatory Framework]]",
      "resolved": "urn:visionflow:linked:regulatory-framework",
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
  - A European Union regulation establishing a framework for electronic identification and trust services for electronic transactions across the internal market.

- ### Semantic Classification
  - owl-class:: governance:eIDAS
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Regulatory Framework]]
  - bridges-to:: [[Certificate Authority]]
  - requires:: [[Digital Signature]], [[Public Key Infrastructure]]
  - enables:: [[Digital Identity]], [[Identity Verification]]

- ### Content
  - The eIDAS regulation sets out rules for electronic identification schemes and for trust services such as electronic signatures, seals, time stamps and certificates within the European Union. It provides for mutual recognition of notified national identification schemes across member states.
  - By defining assurance levels and legal effect for these services, the regulation supports cross-border electronic transactions. Subsequent revisions have introduced provisions for a European digital identity framework and associated wallets.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
