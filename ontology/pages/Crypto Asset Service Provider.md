public:: true

# Crypto Asset Service Provider
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e6d5586934843d253959df2e1cd7245f71b1d8b9abf293b9964983ba0b2a3f34",
  "@type": "Page",
  "vc:slug": "crypto-asset-service-provider",
  "title": "Crypto Asset Service Provider",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:eu-mi-ca-regulation",
      "vc:label": "EU MiCA Regulation"
    },
    {
      "@id": "urn:visionflow:linked:cryptocurrency-exchange",
      "vc:label": "Cryptocurrency Exchange"
    },
    {
      "@id": "urn:visionflow:linked:transfer-of-funds-regulation",
      "vc:label": "Transfer Of Funds Regulation"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:crypto-asset-service-provider",
  "@type": "Class",
  "label": "Crypto Asset Service Provider",
  "definition": "A legal person authorised to provide crypto-asset services to third parties on a professional basis — custody, exchange operation, order execution, placement, transfer services, and advice — as defined by the EU's Markets in Crypto-Assets Regulation (MiCA); CASPs must obtain authorisation, meet prudential and governance requirements, and comply with anti-money-laundering and travel-rule obligations, gaining passporting rights across the EU single market.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:financial-services",
    "label": "Financial Services"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:eu-mi-ca-regulation",
        "label": "EU MiCA Regulation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:know-your-customer",
        "label": "Know Your Customer"
      },
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cryptocurrency-exchange",
        "label": "Cryptocurrency Exchange"
      },
      {
        "@id": "urn:ngm:class:digital-asset-custody",
        "label": "Digital Asset Custody"
      },
      {
        "@id": "urn:ngm:class:transfer-of-funds-regulation",
        "label": "Transfer Of Funds Regulation"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "A legal person authorised to provide crypto-asset services to third parties on a professional basis — custody, exchange operation, order execution, placement, transfer services, and advice — as defined by the EU's Markets in Crypto-Assets Regulation (MiCA); CASPs must obtain authorisation, meet prudential and governance requirements, and comply with anti-money-laundering and travel-rule obligations, gaining passporting rights across the EU single market."

- ### Semantic Classification
  - owl-class:: blockchain:CryptoAssetServiceProvider
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Financial Services]]
  - requires:: [[EU MiCA Regulation]]
  - implements:: [[Know Your Customer]]
  - related-to:: [[Cryptocurrency Exchange]]

- ### Content

  ## Definition

  A **crypto-asset service provider (CASP)** is the EU regulatory category, created by the Markets in Crypto-Assets Regulation ([[EU MiCA Regulation]]), for firms that professionally provide services around crypto-assets to third parties. MiCA enumerates ten services: custody and administration of crypto-assets; operation of a trading platform; exchange of crypto-assets for funds or for other crypto-assets; execution of orders; placing of crypto-assets; reception and transmission of orders; advice; portfolio management; and transfer services. Any firm offering these in the EU must be authorised by a national competent authority, after which the licence passports across all member states — replacing the previous patchwork of national virtual-asset registrations with a single harmonised regime, in force for CASPs from 30 December 2024.

  Authorisation carries substantive obligations modelled on MiFID-style financial regulation: minimum own funds (from EUR 50,000 to EUR 150,000 by service class, plus prudential buffers), fit-and-proper management, custody safeguarding rules including segregation of client assets and liability for lost assets, conflict-of-interest management, complaint handling, and market-abuse provisions covering insider dealing and manipulation in crypto markets. CASPs are also "obliged entities" under the EU anti-money-laundering framework, so they implement [[Know Your Customer]] onboarding and transaction monitoring, and the recast [[Transfer Of Funds Regulation]] applies the FATF "travel rule" — originator and beneficiary information must accompany crypto transfers without a minimum threshold.

  The CASP concept is the EU's counterpart to the FATF's globally used term **virtual asset service provider (VASP)**; exchanges such as [[Cryptocurrency Exchange]] operators (Kraken, Coinbase, Bitstamp among the early licensees) and custodians are the archetypal CASPs, but the definition deliberately spans advisory and brokerage-style firms as well.

  ## Current Landscape

  - **Licensing wave**: since early 2025, major exchanges and fintechs have obtained MiCA CASP authorisations via hub jurisdictions (Ireland, Malta, Germany, France, the Netherlands), passporting services EU-wide; ESMA maintains the public register of authorised CASPs
  - **Transitional period**: firms operating under prior national regimes benefit from grandfathering windows of up to 18 months, varying by member state, creating a staggered compliance landscape through 2026
  - **Supervisory architecture**: national competent authorities license and supervise CASPs, with ESMA and the EBA issuing technical standards; the new EU AMLA authority will assume AML oversight of the riskiest cross-border CASPs
  - **Beyond the EU**: the UK is building an analogous authorisation regime for cryptoasset activities under FSMA; FATF mutual evaluations track VASP regulation globally, making CASP-style licensing the de facto international norm
  - **Open issues**: treatment of fully decentralised protocols (formally out of MiCA scope), reverse solicitation boundaries, and the interaction between CASP custody rules and institutional digital-asset custody practice
