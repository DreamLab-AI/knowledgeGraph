public:: true

# Fiat Currency
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:63e98d6e81eac3eb817d8e298a18c404fae4f2b7acb9a4dcbcdc742a5c2275fd",
  "@type": "Page",
  "vc:slug": "fiat-currency",
  "title": "Fiat Currency",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:stablecoin",
      "vc:label": "Stablecoin"
    },
    {
      "@id": "urn:visionflow:linked:usd",
      "vc:label": "USD"
    },
    {
      "@id": "urn:visionflow:linked:central-bank-digital-currency",
      "vc:label": "Central Bank Digital Currency"
    },
    {
      "@id": "urn:visionflow:linked:money",
      "vc:label": "Money"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Fiat Currency"
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
  "@id": "urn:ngm:class:fiat-currency",
  "@type": "Class",
  "label": "Fiat Currency",
  "definition": "Fiat currency is money issued and declared legal tender by a sovereign government or central bank, whose value derives from state authority, institutional trust, and collective public acceptance rather than from any intrinsic commodity backing. Unlike commodity money, fiat currency is not convertible into a fixed quantity of gold, silver, or other physical assets at a legally guaranteed rate. Its purchasing power is maintained through monetary policy instruments — interest rates, reserve requirements, open-market operations — and is subject to inflation, deflation, and exchange-rate dynamics driven by macroeconomic conditions. Fiat currency forms the foundational settlement layer for modern banking systems, international trade, and the reserve benchmarks against which digital assets are priced.",
  "domain": "finance",
  "maturity": "mature",
  "qualityScore": 0.72,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:money",
      "label": "Money"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:banknote",
        "label": "Banknote"
      },
      {
        "@id": "urn:ngm:class:reserve-currency",
        "label": "Reserve Currency"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:monetary-system",
        "label": "Monetary System"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:central-bank",
        "label": "Central Bank"
      },
      {
        "@id": "urn:ngm:class:legal-tender",
        "label": "Legal Tender"
      },
      {
        "@id": "urn:ngm:class:monetary-policy",
        "label": "Monetary Policy"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      },
      {
        "@id": "urn:ngm:class:central-bank-digital-currency",
        "label": "Central Bank Digital Currency"
      },
      {
        "@id": "urn:ngm:class:fractional-reserve-banking",
        "label": "Fractional Reserve Banking"
      },
      {
        "@id": "urn:ngm:class:international-trade",
        "label": "International Trade"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:government-authority",
        "label": "Government Authority"
      },
      {
        "@id": "urn:ngm:class:institutional-trust",
        "label": "Institutional Trust"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:swift",
        "label": "SWIFT"
      },
      {
        "@id": "urn:ngm:class:real-time-gross-settlement",
        "label": "Real-Time Gross Settlement"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:commodity-money",
        "label": "Commodity Money"
      },
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      },
      {
        "@id": "urn:ngm:class:gold-standard",
        "label": "Gold Standard"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:tokenization",
        "label": "Tokenisation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:inflation",
        "label": "Inflation"
      },
      {
        "@id": "urn:ngm:class:exchange-rate",
        "label": "Exchange Rate"
      },
      {
        "@id": "urn:ngm:class:foreign-exchange-market",
        "label": "Foreign Exchange Market"
      },
      {
        "@id": "urn:ngm:class:usd",
        "label": "USD"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:paper-money",
      "label": "Paper Money"
    },
    {
      "@id": "urn:ngm:class:government-issued-currency",
      "label": "Government-Issued Currency"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:fiat-currency:44cedc008256",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:63e98d6e81eac3eb817d8e298a18c404fae4f2b7acb9a4dcbcdc742a5c2275fd"
  },
  "vc:resolutions": [
    {
      "raw": "[[Stablecoin]]",
      "resolved": "urn:visionflow:linked:stablecoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[USD]]",
      "resolved": "urn:visionflow:linked:usd",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Central Bank Digital Currency]]",
      "resolved": "urn:visionflow:linked:central-bank-digital-currency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Money]]",
      "resolved": "urn:visionflow:linked:money",
      "kind": "ResolvedLink"
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
  - Fiat currency is [[Money]] issued and declared [[Legal Tender]] by a sovereign government or [[Central Bank]], whose value derives from state authority, institutional trust, and collective acceptance rather than from an intrinsic commodity such as gold. Its purchasing power is maintained through [[Monetary Policy]] instruments — interest rates, reserve requirements, and open-market operations — and is subject to [[Inflation]], deflation, and [[Exchange Rate]] dynamics. Fiat currency forms the foundational settlement layer for modern banking, [[International Trade]], and the off-chain reserve benchmarks against which [[Cryptocurrency]] and [[Stablecoin]] assets are priced.

- ### Overview
  - Fiat currency represents the dominant form of [[Money]] in virtually every contemporary national economy. The word "fiat" derives from Latin for "let it be done," reflecting that value is conferred by governmental decree rather than by any physical backing.
  - Prior to the 20th century, many currencies operated under a [[Gold Standard]] or [[Commodity Money]] arrangement, where each unit could be redeemed for a fixed quantity of precious metal. The transition away from commodity backing culminated globally in 1971, when the United States abandoned Bretton Woods convertibility, allowing the [[USD]] to float freely — a change that generalised to nearly all major currencies.
  - Modern fiat systems rely on a hierarchy of institutions: [[Central Bank]] at the apex sets the monetary base and interest rate corridor; commercial banks create broad money through [[Fractional Reserve Banking]]; and interbank settlement occurs via [[Real-Time Gross Settlement]] systems such as Fedwire, CHAPS, and TARGET2.
  - The legitimacy of fiat currency rests on three pillars:
    - **Legal authority** — governments mandate its acceptance for settling debts and tax obligations.
    - **Institutional credibility** — central bank independence and track record of price stability anchor expectations.
    - **Network effects** — widespread use by households, firms, and governments creates self-reinforcing acceptance.

- ### Key Mechanisms
  - **Money supply control** — [[Central Bank]] adjusts the monetary base via open-market operations (buying/selling government securities), altering the quantity of reserves held by commercial banks.
  - **Interest rate signalling** — policy rate decisions propagate through the yield curve, influencing lending, saving, and investment across the economy.
  - **[[Monetary Policy]] frameworks** — inflation targeting, price-level targeting, and nominal GDP targeting are the main paradigms; most advanced economies now use explicit inflation targets (typically 2%).
  - **[[Fractional Reserve Banking]]** — commercial banks hold only a fraction of deposits as reserves, multiplying the money supply beyond the monetary base through credit creation.
  - **[[Foreign Exchange Market]]** — fiat currencies trade against one another in the world's largest and most liquid market, with exchange rates set by supply and demand subject to central bank intervention.
  - **Settlement infrastructure** — large-value payments clear via [[Real-Time Gross Settlement]] systems; retail payments use card networks and ACH-style batch systems. [[SWIFT]] provides the messaging layer for cross-border correspondent banking.
  - **[[Reserve Currency]] status** — certain fiat currencies (especially [[USD]], EUR, JPY, GBP) are held by foreign central banks as foreign exchange reserves, conferring exorbitant privilege and liquidity advantages on the issuing nation.

- ### Applications and Use Cases
  - **Everyday commerce** — wages, retail transactions, and tax payments denominated and settled in the domestic fiat unit.
  - **Government finance** — sovereign bonds denominated in fiat currency allow states to borrow and spend; [[Monetary Policy]] can be used to manage debt burdens.
  - **[[International Trade]]** — most commodity contracts and trade invoices are priced in dominant fiat currencies, principally [[USD]]; exporters and importers manage [[Exchange Rate]] risk through hedging instruments.
  - **Banking system liquidity** — central bank reserves (digital fiat held by commercial banks at the central bank) underpin overnight lending markets and interbank settlement.
  - **Digital asset on/off ramps** — [[Cryptocurrency]] exchanges use fiat currency as the entry and exit point; fiat-to-crypto conversion is the primary gateway to [[Decentralised Finance]].
  - **[[Stablecoin]] reserves** — fiat-backed stablecoins (e.g. USDC, Tether) hold fiat cash and short-term government securities as collateral, anchoring their peg to the [[USD]] or other fiat unit.
  - **[[Central Bank Digital Currency]]** — governments and central banks are piloting and deploying CBDCs as a digital form of fiat currency that is a direct liability of the monetary authority, potentially bypassing commercial bank intermediation.
  - **[[Tokenisation]]** — real-world assets, including fiat-denominated instruments like bonds and deposits, are increasingly tokenised on distributed ledgers, blending fiat-denominated value with blockchain settlement.

- ### Relationships
  - partOf:: [[Monetary System]]
  - requires:: [[Central Bank]]
  - requires:: [[Legal Tender]]
  - requires:: [[Monetary Policy]]
  - requires:: [[Government Authority]]
  - dependsOn:: [[Institutional Trust]]
  - enables:: [[Stablecoin]]
  - enables:: [[Central Bank Digital Currency]]
  - enables:: [[Fractional Reserve Banking]]
  - enables:: [[International Trade]]
  - uses:: [[SWIFT]]
  - uses:: [[Real-Time Gross Settlement]]
  - contrastsWith:: [[Commodity Money]]
  - contrastsWith:: [[Cryptocurrency]]
  - contrastsWith:: [[Gold Standard]]
  - bridges-to:: [[Decentralised Finance]]
  - bridges-to:: [[Tokenisation]]
  - relatedTo:: [[Inflation]]
  - relatedTo:: [[Exchange Rate]]
  - relatedTo:: [[Foreign Exchange Market]]
  - relatedTo:: [[USD]]
  - relatedTo:: [[Reserve Currency]]

- ### Standards and Governance Context
  - **ISO 4217** — the international standard for currency codes (e.g. USD, EUR, GBP, JPY), maintained by the International Organization for Standardization. Currency codes are used in [[SWIFT]] messages and financial data feeds.
  - **BIS (Bank for International Settlements)** — the central bank for central banks; publishes research and coordinates regulatory standards (Basel Accords) affecting the capital and liquidity requirements of commercial banks operating in fiat currency systems.
  - **IMF Special Drawing Rights (SDR)** — a supplementary reserve asset defined as a basket of major fiat currencies ([[USD]], EUR, CNY, JPY, GBP), reflecting the international monetary hierarchy.
  - **Basel III / Capital Adequacy** — [[Fractional Reserve Banking]] is governed by Basel Committee standards requiring minimum capital ratios, liquidity coverage ratios, and net stable funding ratios, all denominated in fiat.
  - **Anti-Money Laundering (AML) / Know Your Customer (KYC)** — fiat currency transactions above threshold values are subject to reporting requirements under FATF recommendations; these obligations extend to fiat on/off ramps in [[Cryptocurrency]] exchanges.
  - **[[Central Bank Digital Currency]] regulation** — emerging frameworks (e.g. EU MiCA regulation, BIS Project mBridge) are defining the legal and technical standards for digital fiat, distinguishing retail CBDC from wholesale CBDC.

- ### Contrast with Alternatives
  - **vs [[Commodity Money]]** — commodity money (gold coins, silver) has intrinsic value; fiat has only declaratory value. Commodity money limits money supply to commodity availability; fiat allows elastic supply.
  - **vs [[Gold Standard]]** — under gold standard, fiat notes were convertible at fixed rates; the pure gold standard constrains monetary policy flexibility but anchors inflation expectations.
  - **vs [[Cryptocurrency]]** — cryptocurrencies are decentralised, algorithmically governed, and not issued by a state; they lack fiat's legal tender status and central bank backing but offer censorship resistance and programmatic settlement.
  - **vs [[Stablecoin]]** — stablecoins are typically pegged to fiat currency value but operate on distributed ledgers; they derive stability from fiat reserves rather than independent monetary policy.
  - **vs [[Central Bank Digital Currency]]** — CBDCs are digital fiat issued directly by the central bank; they retain the state backing of fiat but change the technological and intermediation architecture.

- ### Provenance
  - sources:: ISO 4217; BIS Annual Economic Reports; IMF Articles of Agreement; Bretton Woods Agreement (historical); Basel III Framework (BCBS)
  - updated:: 2026-06-13
