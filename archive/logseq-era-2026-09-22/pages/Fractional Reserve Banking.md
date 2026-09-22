public:: true

# Fractional Reserve Banking

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:fractional-reserve-banking", "@type":"Page", "title":"Fractional Reserve Banking", "vc:slug":"fractional-reserve-banking", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:fractional-reserve-banking",
  "@type":"Class",
  "label":"Fractional Reserve Banking",
  "definition":"Fractional reserve banking is the standard banking system in which banks hold only a fraction of their deposit liabilities as reserves and lend out the remainder. Because lending creates new deposits that can be re-lent, the system expands the broad money supply far beyond the monetary base through the money multiplier. It enables credit creation and maturity transformation but exposes individual banks to liquidity risk and the possibility of bank runs.",
  "domain":"finance",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:monetary-policy","label":"Monetary Policy"}],
  "relations":{
    "enables":[{"@id":"urn:ngm:class:money","label":"Money"}],
    "contrastsWith":[{"@id":"urn:ngm:class:fiat-currency","label":"Fiat Currency"}],
    "partOf":[{"@id":"urn:ngm:class:financial-system","label":"Financial System"}],
    "uses":[{"@id":"urn:ngm:class:interest-rate","label":"Interest Rate"}],
    "dependsOn":[{"@id":"urn:ngm:class:central-bank","label":"Central Bank"}],
    "supports":[{"@id":"urn:ngm:class:monetary-policy","label":"Monetary Policy"}],
    "relatedTo":[{"@id":"urn:ngm:class:money","label":"Money"},{"@id":"urn:ngm:class:fiat-currency","label":"Fiat Currency"},{"@id":"urn:ngm:class:economics","label":"Economics"},{"@id":"urn:ngm:class:liquidity","label":"Liquidity"}],
    "implements":[{"@id":"urn:ngm:class:financial-system","label":"Financial System"}],
    "standardizedBy":[{"@id":"urn:ngm:class:financial-regulation","label":"Financial Regulation"}],
    "bridgesTo":[{"@id":"urn:ngm:class:bank-of-england","label":"Bank of England"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- **Fractional Reserve Banking** is the prevailing system in which banks hold only a fraction of their deposits as reserves and lend the rest, so each loan creates new deposit [[Money]] within the [[Financial System]]. It operates under the [[Monetary Policy]] framework set by the [[Central Bank]].
	- Because new deposits can be re-lent, the system multiplies the broad money supply beyond the monetary base, enabling credit creation and maturity transformation while exposing banks to liquidity risk; it is governed and backstopped by institutions such as the [[Bank of England]].
- ### Overview
	- When a bank receives a deposit it is legally obliged to keep only a portion available as reserves; the remainder is lent to borrowers. Those borrowers' spending becomes deposits at other banks, which in turn lend on most of it, repeating the cycle. The cumulative expansion is captured by the money multiplier, the inverse of the effective reserve ratio.
	- This mechanism is how most money in a modern economy is created — not by central-bank printing but by commercial-bank lending against [[Fiat Currency]] reserves. It allows savings to be channelled into productive investment and lets banks transform short-term deposits into long-term loans.
	- The trade-off is fragility. Because banks cannot instantly repay all depositors at once, a loss of confidence can trigger a bank run. Reserve requirements, capital rules, deposit insurance, and the central bank's lender-of-last-resort function exist to contain this systemic risk.
- ### Key aspects
	- Banks retain only a fraction of deposits as reserves and lend the balance.
	- Lending creates new deposits, expanding broad money via the money multiplier.
	- The reserve ratio and [[Interest Rate]] policy influence how much credit is created.
	- Maturity transformation turns short-term deposits into long-term loans.
	- Liquidity risk and bank runs are mitigated by [[Central Bank]] backstops and prudential rules.
- ### Applications
	- The operating model of essentially all commercial banking worldwide.
	- The transmission channel through which [[Monetary Policy]] reaches the real economy.
	- The basis for credit provision to households and firms.
	- The system that prudential regulation and deposit insurance are designed to stabilise.
- ### Relationships
	- enables:: [[Money]]
	- contrastsWith:: [[Fiat Currency]]
	- partOf:: [[Financial System]]
	- uses:: [[Interest Rate]]
	- dependsOn:: [[Central Bank]]
	- supports:: [[Monetary Policy]]
	- relatedTo:: [[Money]]
	- relatedTo:: [[Fiat Currency]]
	- relatedTo:: [[Economics]]
	- relatedTo:: [[Liquidity]]
	- implements:: [[Financial System]]
	- standardizedBy:: [[Financial Regulation]]
	- bridgesTo:: [[Bank of England]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
