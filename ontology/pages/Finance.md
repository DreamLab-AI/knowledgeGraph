public:: true

# Finance
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:finance", "@type":"Page", "title":"Finance", "vc:slug":"finance", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:finance",
  "@type":"Class",
  "label":"Finance",
  "definition":"Finance is the discipline concerned with the management, creation, and study of money, investments, and other financial instruments across individuals, organisations, and markets. It encompasses how capital is raised, allocated, priced, and risk-managed over time, spanning corporate finance, public finance, and personal finance. In the context of distributed systems, finance increasingly intersects with blockchain-based instruments and decentralised protocols that reimagine settlement, custody, and intermediation.",
  "domain":"blockchain",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:economics","label":"Economics"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:capital-markets","label":"Capital Markets"},
      {"@id":"urn:ngm:class:investment-management","label":"Investment Management"},
      {"@id":"urn:ngm:class:asset-management","label":"Asset Management"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:economics","label":"Economics"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:financial-system","label":"Financial System"},
      {"@id":"urn:ngm:class:banking-system","label":"Banking System"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:monetary-policy","label":"Monetary Policy"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:fintech","label":"FinTech"},
      {"@id":"urn:ngm:class:payment-processing","label":"Payment Processing"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:risk","label":"Risk"},
      {"@id":"urn:ngm:class:financial-services","label":"Financial Services"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:financial-inclusion","label":"Financial Inclusion"},
      {"@id":"urn:ngm:class:banking","label":"Banking"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:decentralised-finance","label":"Decentralised Finance"},
      {"@id":"urn:ngm:class:token-economy","label":"Token Economy"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:regulatory-compliance","label":"Regulatory Compliance"},
      {"@id":"urn:ngm:class:open-banking","label":"Open Banking"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Finance is the discipline of managing money, investments, and financial instruments across actors and markets.
	- It is a branch of [[Economics]] spanning corporate, public, and personal domains.
	- Its modern frontier intersects with [[Decentralised Finance]] and the [[Token Economy]].
- ### Overview
	- Finance studies how capital is raised, allocated, priced, and risk-managed over time.
	- It coordinates savers and borrowers through markets, intermediaries, and instruments.
	- The field divides broadly into corporate finance, investments, and financial institutions.
	- Blockchain-based instruments are reshaping settlement, custody, and intermediation within this discipline.
- ### Key aspects
	- Time value of money and the pricing of risk underpin valuation across instruments.
	- Capital markets channel funds between issuers and investors at scale.
	- Risk management hedges exposure to market, credit, and liquidity shocks.
	- Regulation and compliance shape how financial activity is conducted and reported.
- ### Applications
	- Corporate capital raising through equity and debt issuance.
	- Portfolio and asset management for institutions and individuals.
	- Payment, lending, and settlement infrastructure.
	- Decentralised protocols offering lending, exchange, and derivatives without traditional intermediaries.
- ### Relationships
	- subClassOf:: [[Economics]]
	- hasPart:: [[Capital Markets]]
	- hasPart:: [[Investment Management]]
	- hasPart:: [[Asset Management]]
	- partOf:: [[Economics]]
	- requires:: [[Financial System]]
	- requires:: [[Banking System]]
	- dependsOn:: [[Monetary Policy]]
	- enables:: [[FinTech]]
	- enables:: [[Payment Processing]]
	- uses:: [[Risk]]
	- uses:: [[Financial Services]]
	- supports:: [[Financial Inclusion]]
	- supports:: [[Banking]]
	- bridgesTo:: [[Decentralised Finance]]
	- bridgesTo:: [[Token Economy]]
	- relatedTo:: [[Regulatory Compliance]]
	- relatedTo:: [[Open Banking]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
