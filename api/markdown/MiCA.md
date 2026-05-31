public:: true

# MiCA
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:aa3b4580e17b77c569feccf581c44b78382c27b6e22b56b24c9f131b67920d45",
  "@type": "Page",
  "vc:slug": "mi-ca",
  "title": "MiCA",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:stablecoin",
      "vc:label": "Stablecoin"
    },
    {
      "@id": "urn:visionflow:linked:oecd",
      "vc:label": "OECD"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-domain",
      "vc:label": "Regulatory Domain"
    },
    {
      "@id": "urn:visionflow:linked:regulation-eu-2023-1114-on-markets-in-crypto-assets",
      "vc:label": "Regulation (EU) 2023/1114 on Markets in Crypto-Assets"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "MiCA"
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
  "@id": "urn:ngm:class:mi-ca",
  "@type": "Class",
  "label": "MiCA",
  "definition": "MiCA (Markets in Crypto-Assets Regulation) is a European Union regulation establishing a harmonised legal framework for crypto-assets not already covered by existing financial services law. Adopted in 2023 and applying in phases through 2024, it sets rules for issuers of asset-referenced tokens and e-money tokens, and for crypto-asset service providers such as exchanges and custodians. The regulation covers authorisation, capital and governance requirements, market-abuse provisions and consumer protection, including reserve and redemption rules for stablecoins. It is one of the first comprehensive crypto regulatory regimes among major jurisdictions.",
  "domain": "mica",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:regulatory-domain",
      "label": "Regulatory Domain"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:mi-ca:06bc1f0efe06",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:aa3b4580e17b77c569feccf581c44b78382c27b6e22b56b24c9f131b67920d45"
  },
  "vc:resolutions": [
    {
      "raw": "[[Stablecoin]]",
      "resolved": "urn:visionflow:linked:stablecoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[OECD]]",
      "resolved": "urn:visionflow:linked:oecd",
      "kind": "StubLink"
    },
    {
      "raw": "[[Regulatory Domain]]",
      "resolved": "urn:visionflow:linked:regulatory-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulation (EU) 2023/1114 on Markets in Crypto-Assets]]",
      "resolved": "urn:visionflow:linked:regulation-eu-2023-1114-on-markets-in-crypto-assets",
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
  - MiCA (Markets in Crypto-Assets Regulation) is a European Union regulation establishing a harmonised legal framework for crypto-assets not already covered by existing financial services law. Adopted in 2023 and applying in phases through 2024, it sets rules for issuers of asset-referenced tokens and e-money tokens, and for crypto-asset service providers such as exchanges and custodians. The regulation covers authorisation, capital and governance requirements, market-abuse provisions and consumer protection, including reserve and redemption rules for stablecoins. It is one of the first comprehensive crypto regulatory regimes among major jurisdictions.

- ### Semantic Classification
  - owl-class:: reg:MiCA
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Regulatory Domain]]
  - bridges-to:: [[Stablecoin]], [[OECD]]

- ### Content
  - MiCA classifies crypto-assets into categories, principally asset-referenced tokens, e-money tokens and other crypto-assets, and applies tailored obligations to each. Issuers must publish a white paper with prescribed disclosures, and issuers of significant stablecoins face additional requirements on reserves, redemption rights and prudential safeguards.
  - The regulation also licenses crypto-asset service providers, requiring authorisation from a national competent authority, with passporting across the EU single market once approved. Providers must meet governance, custody, conflict-of-interest and market-abuse standards comparable in spirit to those in traditional financial regulation.
  - By creating a single rulebook, MiCA aims to reduce regulatory fragmentation across member states while protecting consumers and supporting market integrity. It has become a reference point for other jurisdictions considering how to bring crypto-asset markets within a formal supervisory perimeter.

- ### Provenance
  - sources:: [[Regulation (EU) 2023/1114 on Markets in Crypto-Assets]]
  - migration-date:: 2026-05-29T00:00:00Z
