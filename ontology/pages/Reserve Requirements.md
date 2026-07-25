public:: true

# Reserve Requirements

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:reserve-requirements", "@type":"Page", "title":"Reserve Requirements", "vc:slug":"reserve-requirements", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:reserve-requirements",
  "@type":"Class",
  "label":"Reserve Requirements",
  "definition":"Reserve requirements are central-bank rules obliging commercial banks to hold a minimum fraction of their deposit liabilities as reserves, either as vault cash or as balances at the central bank. By constraining the proportion of deposits banks may lend, they influence credit creation, money supply and bank liquidity. They are a classic monetary-policy instrument, though many modern central banks now rely more on interest-rate tools.",
  "domain":"finance",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:monetary-policy","label":"Monetary Policy"}],
  "relations":{
    "hasPart":[{"@id":"urn:ngm:class:fractional-reserve-banking","label":"Fractional Reserve Banking"}],
    "partOf":[{"@id":"urn:ngm:class:monetary-policy","label":"Monetary Policy"}],
    "uses":[{"@id":"urn:ngm:class:central-banking","label":"Central Banking"}],
    "enables":[{"@id":"urn:ngm:class:financial-stability","label":"Financial Stability"}],
    "supports":[{"@id":"urn:ngm:class:financial-stability","label":"Financial Stability"},{"@id":"urn:ngm:class:liquidity","label":"Liquidity"}],
    "dependsOn":[{"@id":"urn:ngm:class:central-banking","label":"Central Banking"}],
    "requires":[{"@id":"urn:ngm:class:banking-regulation","label":"Banking Regulation"}],
    "implements":[{"@id":"urn:ngm:class:monetary-policy","label":"Monetary Policy"}],
    "contrastsWith":[{"@id":"urn:ngm:class:open-market-operations","label":"Open Market Operations"},{"@id":"urn:ngm:class:interest-rate-policy","label":"Interest Rate Policy"}],
    "bridgesTo":[{"@id":"urn:ngm:class:basel-iii","label":"Basel III"}],
    "relatedTo":[{"@id":"urn:ngm:class:liquidity","label":"Liquidity"},{"@id":"urn:ngm:class:quantitative-easing","label":"Quantitative Easing"},{"@id":"urn:ngm:class:fractional-reserve-banking","label":"Fractional Reserve Banking"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Reserve requirements are rules set by a [[Central Banking]] authority that compel commercial banks to retain a minimum share of deposits as reserves rather than lending them out. They are a foundational instrument of [[Monetary Policy]] and a direct expression of [[Fractional Reserve Banking]].
- By limiting how much of each deposit can be re-lent, reserve requirements shape the money-multiplier process, affecting credit creation, [[Liquidity]] and overall [[Financial Stability]].
- ### Overview
- A reserve ratio specifies the fraction of eligible deposit liabilities that must be held as reserves. A higher ratio tightens credit; a lower ratio loosens it.
- Reserves may be held as physical cash or, more commonly, as balances in the bank's account at the central bank.
- Reserve requirements interact with the broader regulatory framework, including liquidity rules under [[Basel III]], which impose additional buffers beyond statutory reserves.
- Many advanced-economy central banks have reduced or eliminated active reserve requirements, steering policy primarily through [[Interest Rate Policy]] and [[Open Market Operations]], while others still use them as an active lever.
- ### Mechanisms
- Ratio setting: the central bank announces the required reserve fraction for classes of deposit liability.
- Compliance: banks maintain average reserves over a maintenance period to meet the requirement.
- Money multiplier: the requirement bounds the maximum expansion of bank-created money from a given monetary base.
- Liquidity management: banks trade reserves in money markets to satisfy the requirement, linking it to short-term interest rates.
- ### Applications
- Controlling credit creation and money supply growth.
- Maintaining a minimum [[Liquidity]] cushion across the banking system.
- Supporting [[Financial Stability]] objectives during stress.
- Complementing or substituting for [[Open Market Operations]] in policy transmission.
- ### Relationships
- subClassOf:: [[Monetary Policy]]
- hasPart:: [[Fractional Reserve Banking]]
- partOf:: [[Monetary Policy]]
- uses:: [[Central Banking]]
- enables:: [[Financial Stability]]
- supports:: [[Financial Stability]]
- supports:: [[Liquidity]]
- dependsOn:: [[Central Banking]]
- requires:: [[Banking Regulation]]
- implements:: [[Monetary Policy]]
- contrastsWith:: [[Open Market Operations]]
- contrastsWith:: [[Interest Rate Policy]]
- bridgesTo:: [[Basel III]]
- relatedTo:: [[Liquidity]]
- relatedTo:: [[Quantitative Easing]]
- relatedTo:: [[Fractional Reserve Banking]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
