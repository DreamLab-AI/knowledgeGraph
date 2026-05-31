public:: true

# EU MiCA Regulation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d442b18f16de79daa1aab157e10e40758f2728124b2b90f9e5a92f70c13ae5c0",
  "@type": "Page",
  "vc:slug": "eu-mi-ca-regulation",
  "title": "EU MiCA Regulation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:regulatory-frameworks",
      "vc:label": "Regulatory Frameworks"
    },
    {
      "@id": "urn:visionflow:linked:investor-protection",
      "vc:label": "Investor Protection"
    },
    {
      "@id": "urn:visionflow:linked:stablecoin",
      "vc:label": "Stablecoin"
    },
    {
      "@id": "urn:visionflow:linked:crypto-regulation",
      "vc:label": "Crypto Regulation"
    },
    {
      "@id": "urn:visionflow:linked:https-eur-lex-europa-eu-legal-content-en-txt-uri-celex-3-a-32023-r-1114",
      "vc:label": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1114"
    },
    {
      "@id": "urn:visionflow:linked:https-www-esma-europa-eu-esmas-activities-digital-finance-and-innovation-markets-crypto-assets-regulation-mica",
      "vc:label": "https://www.esma.europa.eu/esmas-activities/digital-finance-and-innovation/markets-crypto-assets-regulation-mica"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "EU MiCA Regulation"
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
  "@id": "urn:ngm:class:eu-mi-ca-regulation",
  "@type": "Class",
  "label": "EU MiCA Regulation",
  "definition": "The EU Markets in Crypto-Assets Regulation is a European Union framework establishing harmonised rules for crypto-asset issuance, trading and service provision.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:crypto-regulation",
      "label": "Crypto Regulation"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:regulatory-frameworks",
        "label": "Regulatory Frameworks"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:investor-protection",
        "label": "Investor Protection"
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
  "@id": "urn:visionflow:annotation:link-resolutions:eu-mi-ca-regulation:f3a5bc05f8be",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d442b18f16de79daa1aab157e10e40758f2728124b2b90f9e5a92f70c13ae5c0"
  },
  "vc:resolutions": [
    {
      "raw": "[[Regulatory Frameworks]]",
      "resolved": "urn:visionflow:linked:regulatory-frameworks",
      "kind": "StubLink"
    },
    {
      "raw": "[[Investor Protection]]",
      "resolved": "urn:visionflow:linked:investor-protection",
      "kind": "StubLink"
    },
    {
      "raw": "[[Stablecoin]]",
      "resolved": "urn:visionflow:linked:stablecoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Crypto Regulation]]",
      "resolved": "urn:visionflow:linked:crypto-regulation",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1114]]",
      "resolved": "urn:visionflow:linked:https-eur-lex-europa-eu-legal-content-en-txt-uri-celex-3-a-32023-r-1114",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.esma.europa.eu/esmas-activities/digital-finance-and-innovation/markets-crypto-assets-regulation-mica]]",
      "resolved": "urn:visionflow:linked:https-www-esma-europa-eu-esmas-activities-digital-finance-and-innovation-markets-crypto-assets-regulation-mica",
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
  - The EU Markets in Crypto-Assets Regulation is a European Union framework establishing harmonised rules for crypto-asset issuance, trading and service provision.

- ### Semantic Classification
  - owl-class:: governance:EUMiCARegulation
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Crypto Regulation]]
  - bridges-to:: [[Stablecoin]]
  - requires:: [[Regulatory Frameworks]]
  - enables:: [[Investor Protection]]

- ### Content
  - The Markets in Crypto-Assets Regulation, known as MiCA, is European Union legislation that creates a single regulatory framework for crypto-assets not already covered by existing financial services law. It was adopted in 2023 with provisions applying in stages.
  - MiCA sets requirements for issuers of asset-referenced tokens and electronic money tokens, and for crypto-asset service providers. It addresses authorisation, disclosure, governance and consumer protection across European Union member states.

- ### Provenance
  - sources:: [[https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1114]], [[https://www.esma.europa.eu/esmas-activities/digital-finance-and-innovation/markets-crypto-assets-regulation-mica]]
  - migration-date:: 2026-05-29T00:00:00Z
