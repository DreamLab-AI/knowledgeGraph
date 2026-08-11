public:: true

# Peg
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5ca1b7b104433c8e4e319bedf7678d3a07e4725b1dc8ccadd64fa4e21a8110d7",
  "@type": "Page",
  "vc:slug": "peg",
  "title": "Peg",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:exchange-rate",
      "vc:label": "Exchange Rate"
    },
    {
      "@id": "urn:visionflow:linked:peg-mechanism",
      "vc:label": "Peg Mechanism"
    },
    {
      "@id": "urn:visionflow:linked:stablecoin",
      "vc:label": "Stablecoin"
    },
    {
      "@id": "urn:visionflow:linked:redemption-mechanism",
      "vc:label": "Redemption Mechanism"
    },
    {
      "@id": "urn:visionflow:linked:monetary-policy",
      "vc:label": "Monetary Policy"
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
  "@id": "urn:ngm:class:peg",
  "@type": "Class",
  "label": "Peg",
  "definition": "A peg is a commitment to hold the price of one asset fixed against another — historically a national currency fixed to gold or to the US dollar, and in decentralised finance a stablecoin held at parity with a fiat currency. Maintaining a peg requires reserves, redemption rights, or algorithmic supply adjustment strong enough to absorb market pressure and sustain arbitrage back to parity; when confidence in these defences fails the peg breaks, as in classic currency crises and stablecoin de-pegging events such as the 2022 TerraUSD collapse.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:exchange-rate",
    "label": "Exchange Rate"
  },
  "relations": {
    "dependsOn": [
      {
        "@id": "urn:ngm:class:redemption-mechanism",
        "label": "Redemption Mechanism"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:peg-mechanism",
        "label": "Peg Mechanism"
      },
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      },
      {
        "@id": "urn:ngm:class:monetary-policy",
        "label": "Monetary Policy"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "A peg is a commitment to hold the price of one asset fixed against another — historically a national currency fixed to gold or to the US dollar, and in decentralised finance a stablecoin held at parity with a fiat currency. Maintaining a peg requires reserves, redemption rights, or algorithmic supply adjustment strong enough to absorb market pressure and sustain arbitrage back to parity; when confidence in these defences fails the peg breaks, as in classic currency crises and stablecoin de-pegging events such as the 2022 TerraUSD collapse."

- ### Semantic Classification
  - owl-class:: finance:Peg
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Exchange Rate]]
  - depends-on:: [[Redemption Mechanism]]
  - related-to:: [[Peg Mechanism]]
  - related-to:: [[Stablecoin]]

- ### Content

  ## Definition

  A **peg** is a fixed price promise: the issuer or authority behind one asset commits that it will exchange at a set rate against a reference asset. The concept long predates cryptocurrency. Under the gold standard, currencies were pegged to gold; under Bretton Woods (1944-1971), currencies were pegged to the US dollar, itself convertible to gold; today the Hong Kong dollar, the Danish krone (to the euro), and several Gulf currencies operate maintained pegs, defended by central banks through reserves and interest-rate policy. A peg trades monetary-policy autonomy for stability and predictability — the "impossible trinity" of international economics says a country cannot simultaneously have a fixed exchange rate, free capital movement, and independent monetary policy.

  In decentralised finance the same concept reappears as the defining property of the [[Stablecoin]]: a token intended to trade at parity with (usually) the US dollar. The [[Peg Mechanism]] — the machinery that defends the target — varies by design. Fiat-collateralised issuers (USDC, Tether) hold reserve assets and offer direct redemption; crypto-collateralised systems (DAI) over-collateralise with volatile assets and liquidate positions that fall below a safety ratio; algorithmic designs attempt to hold parity through supply elasticity and incentive games alone. In every case, the working principle is arbitrage anchored by a credible [[Redemption Mechanism]]: if the token trades below parity, arbitrageurs buy it cheaply and redeem at face value, pushing the price back up; above parity, minting and selling does the reverse.

  Pegs fail the same way in both worlds: when the market doubts the defender's capacity or willingness to honour the promise, holders rush to exit before reserves run out, and the resulting run is self-fulfilling. Sterling's ejection from the ERM in 1992 and the 2022 collapse of TerraUSD — whose algorithmic peg unravelled from parity to near zero within a week, erasing roughly $40 billion — are structurally the same event: a peg without sufficient credible backing meeting coordinated selling pressure. Even fully reserved stablecoins wobble under stress, as USDC's brief de-peg during the March 2023 Silicon Valley Bank exposure showed.

  ## Current Landscape

  - **US GENIUS Act enacted**: the Guiding and Establishing National Innovation for U.S. Stablecoins Act was signed into law on 18 July 2025, creating the first federal framework for payment stablecoins; it requires 1:1 reserves in cash and short-dated (≤93-day) Treasuries with monthly public reserve disclosures. The framework is not yet fully in effect, with implementing rules expected around late 2026.
  - **EU MiCA live**: MiCA's stablecoin (EMT/ART) rules have applied since 30 June 2024, imposing 100% reserve backing and a bank-deposit floor of 30% (rising to 60% for "significant" tokens).
  - **UK regime finalised but delayed**: the Financial Services and Markets Act 2000 (Cryptoassets) Regulations 2026 (SI 2026/102) bring stablecoin issuance and custody under FCA supervision, with the full regime commencing 25 October 2027; the Bank of England oversees "systemic" sterling stablecoins and in June 2026 replaced individual holding caps with a temporary £40 billion aggregate issuance cap.
  - **Algorithmic pegs marginalised**: all three major regimes mandate full reserve backing and redemption rights, effectively outlawing unbacked algorithmic designs of the kind that produced the 2022 TerraUSD collapse.
  - **Sovereign pegs**: hard pegs (currency boards such as Hong Kong's), conventional fixed pegs, and crawling pegs remain defended with foreign-exchange reserves and rate policy under [[Monetary Policy]] constraints and the "impossible trinity".

  - **Sources**:
    - https://www.whitehouse.gov/fact-sheets/2025/07/fact-sheet-president-donald-j-trump-signs-genius-act-into-law/
    - https://eco.com/support/en/articles/14796313-mica-vs-genius-act-vs-uk-fca
    - https://www.spark.money/tools/stablecoin-regulation-by-country
    - https://www.gibsondunn.com/wp-content/uploads/2026/03/global-stablecoin-rules-in-focus-a-cross-border-guide-to-the-new-era-of-stablecoin-regulation.pdf
