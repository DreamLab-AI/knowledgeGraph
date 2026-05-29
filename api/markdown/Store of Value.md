public:: true

# Store of Value
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:store-of-value",
  "@type": "Page",
  "vc:slug": "store-of-value",
  "title": "Store of Value",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:store-of-value",
  "@type": "Class",
  "label": "Store of Value",
  "definition": "A store of value is any asset that retains purchasing power over time, enabling the owner to defer consumption and retrieve real wealth in the future with minimal loss to inflation, confiscation, or degradation. Classical monetary theory identifies store-of-value function alongside medium-of-exchange and unit-of-account as the three primary functions of money, though assets can serve one function without the others.",
  "domain": "blockchain",
  "maturity": "mature",
  "subClassOf": [
    {"@id": "urn:ngm:class:bitcoin-as-money", "label": "Bitcoin as Money"}
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:hard-money", "label": "Hard Money"},
      {"@id": "urn:ngm:class:inflation-hedge", "label": "Inflation Hedge"},
      {"@id": "urn:ngm:class:gold-standard", "label": "Gold Standard"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:austrian-hard-money-theory", "label": "Austrian Hard Money Theory"},
      {"@id": "urn:ngm:class:fixed-supply-monetary-policy", "label": "Fixed Supply Monetary Policy"}
    ]
  },
  "quality": 0.85
}
```

- ### Definition
  - A store of value is an asset capable of preserving purchasing power across time, underpinning one of the three canonical functions of money alongside medium-of-exchange and unit-of-account. Durable, scarce, and portable assets — gold, land, [[Hard Money]] instruments, and increasingly Bitcoin — compete on how well they fulfil this function relative to inflationary fiat currencies, a debate structured by [[Austrian Hard Money Theory]].

- ### Relationships
  - The store-of-value function historically belonged to gold under the [[Gold Standard]], which enforced [[Fixed Supply Monetary Policy]] by tying currency issuance to metal reserves. [[Hard Money]] is the broader category of assets possessing supply inelasticity that underpins store-of-value status. Bitcoin proponents argue its 21-million-coin supply cap makes it a superior [[Inflation Hedge]] to fiat-denominated assets, situating it within the [[Austrian Hard Money Theory]] tradition.

- ### Content
  - The concept of money as a store of value originates in Aristotle's analysis of monetary functions and was formalised by 19th-century economists. Under the classical gold standard (1870s–1914 and intermittently until 1971), central banks held gold reserves and issued notes redeemable in gold, anchoring the currency's store-of-value properties to a commodity with inelastic supply. The breakdown of Bretton Woods in 1971, when the US ended gold convertibility, shifted major economies to fiat money and re-opened debate about what assets best preserve wealth.
  - For an asset to function as a reliable store of value, it must exhibit durability (not physically degrade), scarcity (supply cannot be inflated rapidly), portability, divisibility, and verifiability. Gold scores well on durability and historical track record but poorly on portability and divisibility for small transactions. Real estate is durable and scarce in desirable locations but illiquid. Fiat currencies are portable and divisible but vulnerable to inflation. Bitcoin is argued to combine digital portability, perfect divisibility, and algorithmic supply scarcity — though it fails on the price-stability criterion that some definitions require.
  - The store-of-value function matters because it enables intertemporal exchange: individuals and institutions can accumulate surplus production today and redeploy it in the future without erosion of real value. Without reliable stores of value, actors either overconsume (use it or lose it) or accept capital destruction over time. For emerging market populations facing currency crises (Venezuela, Turkey, Argentina), access to hard assets or dollar-denominated savings is economically critical. For institutional investors, store-of-value assets serve as portfolio hedges against currency debasement.
  - As of 2024–2025, the debate over store-of-value assets has intensified. Bitcoin ETF approvals in January 2024 (BlackRock iShares Bitcoin Trust, Fidelity Wise Origin) brought institutional store-of-value investment to mainstream finance, with over $50B AUM accumulated in the first year. Bitcoin's 2024 halving — reducing issuance to 3.125 BTC per block — reinforced the fixed-supply narrative. Meanwhile, gold hit all-time highs above $2,400/oz driven by central bank purchases from geopolitically motivated de-dollarisation. The competition between gold, Bitcoin, and inflation-linked bonds as stores of value is a live institutional-asset-allocation question.
