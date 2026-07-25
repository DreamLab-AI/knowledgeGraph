public:: true

# Open Banking
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:open-banking", "@type":"Page", "title":"Open Banking", "vc:slug":"open-banking", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:open-banking",
  "@type":"Class",
  "label":"Open Banking",
  "definition":"Open Banking is a regulatory and technical framework that allows authorised third-party providers to access customer banking data and initiate payments through secure application programming interfaces, subject to explicit customer consent. It shifts control of financial data from incumbent banks to the account holder, who may grant fine-grained, revocable permissions. The model underpins regulated data sharing regimes such as the EU's PSD2 and the UK's Open Banking Standard, fostering competition and new financial products.",
  "domain":"finance",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:financial-services","label":"Financial Services"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:consent-management","label":"Consent Management"},
      {"@id":"urn:ngm:class:api-gateway","label":"API Gateway"},
      {"@id":"urn:ngm:class:payment-processing","label":"Payment Processing"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:financial-system","label":"Financial System"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:authentication","label":"Authentication"},
      {"@id":"urn:ngm:class:digital-identity","label":"Digital Identity"},
      {"@id":"urn:ngm:class:regulatory-compliance","label":"Regulatory Compliance"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:fintech","label":"FinTech"},
      {"@id":"urn:ngm:class:financial-inclusion","label":"Financial Inclusion"},
      {"@id":"urn:ngm:class:data-sharing","label":"Data Sharing"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:financial-regulation","label":"Financial Regulation"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:oauth","label":"OAuth"},
      {"@id":"urn:ngm:class:rest-api","label":"REST API"},
      {"@id":"urn:ngm:class:api-standard","label":"API Standard"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:interoperability","label":"Interoperability"},
      {"@id":"urn:ngm:class:data-privacy","label":"Data Privacy"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:decentralised-finance","label":"Decentralised Finance"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:gdpr","label":"GDPR"},
      {"@id":"urn:ngm:class:banking","label":"Banking"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Open Banking is a framework that lets authorised third parties access [[Banking]] data and initiate payments via secure [[REST API]]s under customer consent.
	- It is a sub-discipline of [[Financial Services]] and a key enabler of modern [[FinTech]].
	- Control of [[Data Privacy]] shifts to the account holder, who grants revocable permissions through [[Consent Management]].
- ### Overview
	- Open Banking emerged from regulatory mandates designed to break the data monopoly of incumbent banks and stimulate competition.
	- The EU Revised Payment Services Directive (PSD2) and the UK Open Banking Standard are the canonical regimes, each defining authorisation, security, and data-sharing obligations.
	- Banks expose standardised programmatic interfaces; licensed Account Information Service Providers and Payment Initiation Service Providers consume them.
	- The architecture decouples the service layer from the data layer, allowing aggregators and budgeting tools to operate across multiple institutions.
- ### Key aspects
	- Strong Customer Authentication binds every sensitive action to a verified identity, typically via multi-factor methods.
	- Consent is explicit, scoped, time-limited, and auditable, with the holder able to revoke access at any time.
	- API standardisation ensures that a third party can integrate once and reach many banks consistently.
	- Liability and dispute-resolution rules are defined by the governing regulator rather than bilateral contracts.
- ### Applications
	- Account aggregation dashboards that consolidate balances across providers.
	- Payment initiation that bypasses card networks for lower-cost transfers.
	- Affordability and credit-decisioning tools that read transaction history with consent.
	- Embedded finance, where non-bank platforms offer banking features through licensed partners.
- ### Relationships
	- subClassOf:: [[Financial Services]]
	- hasPart:: [[Consent Management]]
	- hasPart:: [[API Gateway]]
	- hasPart:: [[Payment Processing]]
	- partOf:: [[Financial System]]
	- requires:: [[Authentication]]
	- requires:: [[Digital Identity]]
	- requires:: [[Regulatory Compliance]]
	- enables:: [[FinTech]]
	- enables:: [[Financial Inclusion]]
	- enables:: [[Data Sharing]]
	- dependsOn:: [[Financial Regulation]]
	- uses:: [[OAuth]]
	- uses:: [[REST API]]
	- uses:: [[API Standard]]
	- supports:: [[Interoperability]]
	- supports:: [[Data Privacy]]
	- bridgesTo:: [[Decentralised Finance]]
	- relatedTo:: [[GDPR]]
	- relatedTo:: [[Banking]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
