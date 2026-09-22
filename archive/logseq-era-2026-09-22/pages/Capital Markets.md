public:: true

# Capital Markets

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:capital-markets", "@type":"Page", "title":"Capital Markets", "vc:slug":"capital-markets", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:capital-markets",
  "@type":"Class",
  "label":"Capital Markets",
  "definition":"Capital markets are the financial markets in which long-term debt and equity instruments are issued and traded, channelling savings from investors to issuers such as companies and governments. They comprise primary markets, where new securities are issued, and secondary markets, where existing securities trade among investors. They are central to capital formation, price discovery and liquidity, and are increasingly intersecting with tokenisation and blockchain-based settlement.",
  "domain":"finance",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:traditional-finance","label":"Traditional Finance"}],
  "relations":{
    "hasPart":[{"@id":"urn:ngm:class:financial-instruments","label":"Financial Instruments"},{"@id":"urn:ngm:class:liquidity","label":"Liquidity"}],
    "partOf":[{"@id":"urn:ngm:class:traditional-finance","label":"Traditional Finance"}],
    "enables":[{"@id":"urn:ngm:class:capital-formation","label":"Capital Formation"},{"@id":"urn:ngm:class:liquidity","label":"Liquidity"}],
    "requires":[{"@id":"urn:ngm:class:financial-regulation","label":"Financial Regulation"},{"@id":"urn:ngm:class:financial-infrastructure","label":"Financial Infrastructure"}],
    "uses":[{"@id":"urn:ngm:class:financial-instruments","label":"Financial Instruments"}],
    "dependsOn":[{"@id":"urn:ngm:class:financial-infrastructure","label":"Financial Infrastructure"}],
    "supports":[{"@id":"urn:ngm:class:institutional-adoption","label":"Institutional Adoption"}],
    "relatedTo":[{"@id":"urn:ngm:class:financial-instruments","label":"Financial Instruments"},{"@id":"urn:ngm:class:financial-regulation","label":"Financial Regulation"},{"@id":"urn:ngm:class:institutional-adoption","label":"Institutional Adoption"}],
    "bridgesTo":[{"@id":"urn:ngm:class:financial-infrastructure","label":"Financial Infrastructure"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - [[Capital Markets]] are the markets where long-term [[Financial Instruments]] are issued and traded, forming part of [[Traditional Finance]] and enabling [[Capital Formation]] and [[Liquidity]].
  - They rely on [[Financial Regulation]] and [[Financial Infrastructure]] to function.
- ### Overview
  - Primary markets allocate new capital by issuing securities directly from issuers to investors, for example through initial public offerings or bond issuance.
  - Secondary markets provide liquidity by allowing investors to trade existing securities, supporting continuous price discovery.
  - Participants include issuers, institutional and retail investors, intermediaries, exchanges and regulators.
  - Tokenisation and blockchain-based settlement are emerging as new infrastructure for issuance and trading.
- ### Key aspects
  - Capital formation channelling savings to productive use.
  - Price discovery and risk transfer.
  - Liquidity provision through secondary trading.
  - Regulatory oversight ensuring fairness and transparency.
- ### Applications
  - Corporate equity and debt financing.
  - Government and municipal bond issuance.
  - Institutional asset allocation and portfolio management.
  - Tokenised real-world assets and security-token offerings.
- ### Relationships
  - hasPart:: [[Financial Instruments]]
  - hasPart:: [[Liquidity]]
  - partOf:: [[Traditional Finance]]
  - enables:: [[Capital Formation]]
  - enables:: [[Liquidity]]
  - requires:: [[Financial Regulation]]
  - requires:: [[Financial Infrastructure]]
  - uses:: [[Financial Instruments]]
  - dependsOn:: [[Financial Infrastructure]]
  - supports:: [[Institutional Adoption]]
  - relatedTo:: [[Financial Instruments]]
  - relatedTo:: [[Financial Regulation]]
  - relatedTo:: [[Institutional Adoption]]
  - bridgesTo:: [[Financial Infrastructure]]
- ### Provenance
  - updated:: 2026-06-15
