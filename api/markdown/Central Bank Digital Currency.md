schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#CentralBankDigitalCurrency
legacy_uri:: urn:visionclaw:concept:infrastructure:central-bank-digital-currency
public:: true

# Central Bank Digital Currency
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5f832c6f9d23e989ba56c11217bb56786b3e95795ec19ba3fed7f4096fbfcfa2",
  "@type": "Page",
  "vc:slug": "central-bank-digital-currency",
  "title": "Central Bank Digital Currency",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:central-bank-infrastructure",
      "vc:label": "Central Bank Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:financial-inclusion",
      "vc:label": "Financial Inclusion"
    },
    {
      "@id": "urn:visionflow:linked:monetary-policy-transmission",
      "vc:label": "Monetary Policy Transmission"
    },
    {
      "@id": "urn:visionflow:linked:payment-network",
      "vc:label": "Payment Network"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-currency",
      "vc:label": "Digital Currency"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-identity",
      "vc:label": "Digital Identity"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-payments",
      "vc:label": "Digital Payments"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-a9f6c9dcd14f"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "infrastructure"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/infrastructure#CentralBankDigitalCurrency"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9817"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Central Bank Digital Currency"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:infrastructure:central-bank-digital-currency"
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:infrastructure:central-bank-digital-currency"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:5f832c6f9d23e989ba56c11217bb56786b3e95795ec19ba3fed7f4096fbfcfa2@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:central-bank-digital-currency",
  "@type": "OntologyClass",
  "label": "Central Bank Digital Currency",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:digital-currency",
      "vc:label": "Digital Currency"
    }
  ],
  "vc:sourceDomain": "infrastructure",
  "vc:status": "active",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:5f832c6f9d23e989ba56c11217bb56786b3e95795ec19ba3fed7f4096fbfcfa2"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:5f832c6f9d23e989ba56c11217bb56786b3e95795ec19ba3fed7f4096fbfcfa2@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "A digital form of sovereign fiat money issued directly by a nation's central bank, representing a liability of the monetary authority that can serve as legal tender for retail payments or wholesale settlement, distinct from commercial bank deposits and decentralized cryptocurrencies.",
  "vc:qualityScore": {
    "@value": "0.35",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:requires": [
    {
      "@id": "urn:visionflow:linked:central-bank-infrastructure",
      "vc:label": "Central Bank Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:payment-network",
      "vc:label": "Payment Network"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-identity",
      "vc:label": "Digital Identity"
    }
  ],
  "vc:enables": [
    {
      "@id": "urn:visionflow:linked:financial-inclusion",
      "vc:label": "Financial Inclusion"
    },
    {
      "@id": "urn:visionflow:linked:monetary-policy-transmission",
      "vc:label": "Monetary Policy Transmission"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-payments",
      "vc:label": "Digital Payments"
    }
  ],
  "vc:bridgesTo": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:central-bank-digital-currency:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5f832c6f9d23e989ba56c11217bb56786b3e95795ec19ba3fed7f4096fbfcfa2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Central Bank Infrastructure]]",
      "resolved": "urn:visionflow:linked:central-bank-infrastructure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Financial Inclusion]]",
      "resolved": "urn:visionflow:linked:financial-inclusion",
      "kind": "StubLink"
    },
    {
      "raw": "[[Monetary Policy Transmission]]",
      "resolved": "urn:visionflow:linked:monetary-policy-transmission",
      "kind": "StubLink"
    },
    {
      "raw": "[[Payment Network]]",
      "resolved": "urn:visionflow:linked:payment-network",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Currency]]",
      "resolved": "urn:visionflow:owl:class:digital-currency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Identity]]",
      "resolved": "urn:visionflow:owl:class:digital-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Payments]]",
      "resolved": "urn:visionflow:owl:class:digital-payments",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:5f832c6f9d23e989ba56c11217bb56786b3e95795ec19ba3fed7f4096fbfcfa2@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A digital form of sovereign fiat money issued directly by a nation's central bank, representing a liability of the monetary authority that can serve as legal tender for retail payments or wholesale settlement, distinct from commercial bank deposits and decentralized cryptocurrencies.

- ### Semantic Classification
  - owl-class:: infrastructure:CentralBankDigitalCurrency
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Digital Currency]]
  - requires:: [[Central Bank Infrastructure]], [[Digital Identity]], [[Payment Network]]
  - enables:: [[Digital Payments]], [[Financial Inclusion]], [[Monetary Policy Transmission]]
  - bridges-to:: [[Blockchain]]

- ### Content

  - ## Technical Details
  - **Global Status** (2024): 134 countries (98% of world GDP) researching CBDCs; Bahamas, Jamaica, Nigeria have launched; China's digital RMB first major economy issuance
  - **Types**:
		- **Retail CBDC**: For households and businesses, everyday transactions
		- **Wholesale CBDC**: For financial institutions, similar to reserves
  - **Monetary Policy Implications**:
		- Can strengthen policy transmission if appropriately designed
		- May increase competition for bank deposits
		- Non-remunerated CBDC could harden zero lower bound
		- Affects reserve management and liquidity forecasting
  - **Design Considerations**:
		- Privacy vs. AML/CFT compliance
		- Token-based vs. account-based
		- Anonymity limitations for illicit activity prevention
  - **US Position** (2025): Executive Order 14178 prohibits federal agencies from establishing or promoting CBDC
  - ## Applications
  - Retail payment modernization
  - Financial inclusion for unbanked populations
  - Cross-border payment efficiency
  - Monetary policy implementation
  - Government benefit distribution

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
