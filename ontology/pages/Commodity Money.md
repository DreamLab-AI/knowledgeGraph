public:: true

# Commodity Money

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:commodity-money", "@type":"Page", "title":"Commodity Money", "vc:slug":"commodity-money", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:commodity-money",
  "@type":"Class",
  "label":"Commodity Money",
  "definition":"Commodity money is a form of money whose value derives from the intrinsic worth of the physical commodity from which it is made, such as gold, silver, salt or grain. Because the medium of exchange is itself a useful or scarce good, its monetary value is anchored to its commodity value rather than to government decree. Commodity money predates and contrasts with fiat currency, where value rests on trust in an issuing authority.",
  "domain":"finance",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:money","label":"Money"}],
  "relations":{
    "uses":[{"@id":"urn:ngm:class:gold","label":"Gold"}],
    "partOf":[{"@id":"urn:ngm:class:monetary-system","label":"Monetary System"}],
    "enables":[{"@id":"urn:ngm:class:store-of-value","label":"Store of Value"}],
    "supports":[{"@id":"urn:ngm:class:gold-standard","label":"Gold Standard"}],
    "implements":[{"@id":"urn:ngm:class:hard-money","label":"Hard Money"}],
    "requires":[{"@id":"urn:ngm:class:value","label":"Value"}],
    "contrastsWith":[{"@id":"urn:ngm:class:fiat-currency","label":"Fiat Currency"},{"@id":"urn:ngm:class:cryptocurrency","label":"Cryptocurrency"}],
    "relatedTo":[{"@id":"urn:ngm:class:money","label":"Money"},{"@id":"urn:ngm:class:inflation","label":"Inflation"},{"@id":"urn:ngm:class:finance","label":"Finance"},{"@id":"urn:ngm:class:monetary-policy","label":"Monetary Policy"},{"@id":"urn:ngm:class:bitcoin","label":"Bitcoin"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - **Commodity Money** is [[Money]] that has intrinsic value because the object used as currency is itself a useful or scarce commodity.
  - Classic examples include [[Gold]], silver, salt, cattle and grain, where the medium of exchange could also be consumed or traded as a good.
  - Its purchasing power is anchored to the underlying commodity's value, which constrains how much can be created.
  - It stands in contrast to [[Fiat Currency]], whose value rests on confidence in an issuer rather than on any physical backing.
- ### Overview
  - Commodity money is the oldest form of money, emerging from barter as societies converged on widely accepted, durable and divisible goods.
  - Because supply is tied to the availability of the commodity, issuance cannot be expanded at will, giving commodity money its reputation as [[Hard Money]] resistant to debasement.
  - The same property limits monetary flexibility: economies cannot easily expand the money supply to respond to shocks.
  - Commodity money forms a key chapter in the evolution of the [[Monetary System]], bridging barter and modern fiat regimes.
- ### Key aspects
  - **Intrinsic value** — the currency is worth something independent of its monetary role, providing a natural floor on its value.
  - **Scarcity discipline** — limited supply restrains [[Inflation]] but also restrains policy responses.
  - **Divisibility and durability** — successful commodity monies are easy to divide, transport and preserve, which is why precious metals dominated.
  - **Store-of-value strength** — high intrinsic worth makes commodity money an effective [[Store of Value]] across long horizons.
  - **Standardisation** — coinage and assaying emerged to certify weight and purity, reducing transaction friction.
- ### Mechanisms
  - Value is set by the market price of the underlying commodity plus any minting premium.
  - A [[Gold Standard]] formalised commodity money by pegging paper claims to fixed quantities of metal.
  - Gresham's law describes how, when two monies circulate, the one with lower intrinsic value tends to drive the higher-value one out of circulation.
- ### Applications
  - Historical coinage and metallic currency across civilisations.
  - Backing for convertible paper notes under metallic standards.
  - A conceptual benchmark for evaluating modern [[Fiat Currency]] and scarce digital assets.
  - A reference point in debates about [[Inflation]], monetary discipline and sound money.
- ### Relationships
  - uses:: [[Gold]]
  - partOf:: [[Monetary System]]
  - enables:: [[Store of Value]]
  - supports:: [[Gold Standard]]
  - implements:: [[Hard Money]]
  - requires:: [[Value]]
  - contrastsWith:: [[Fiat Currency]]
  - contrastsWith:: [[Cryptocurrency]]
  - relatedTo:: [[Money]]
  - relatedTo:: [[Inflation]]
  - relatedTo:: [[Finance]]
  - relatedTo:: [[Monetary Policy]]
  - relatedTo:: [[Bitcoin]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
