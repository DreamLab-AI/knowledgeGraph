public:: true

# Interest Rate
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:interest-rate", "@type":"Page", "title":"Interest Rate", "vc:slug":"interest-rate", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:interest-rate",
  "@type": "Class",
  "label": "Interest Rate",
  "definition": "An interest rate is the price of borrowing money or the return on lending it, expressed as a percentage of the principal over a defined period, typically annualised. It compensates lenders for the time value of money, expected inflation, and the credit risk of the borrower, and it acts as the principal lever through which central banks transmit monetary policy to the broader economy. Interest rates are categorised as nominal or real, fixed or floating, and short-term or long-term, with the term structure across maturities forming the yield curve.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:monetary-policy",
      "label": "Monetary Policy"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:monetary-policy",
        "label": "Monetary Policy"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:central-banking",
        "label": "Central Banking"
      },
      {
        "@id": "urn:ngm:class:inflation",
        "label": "Inflation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:credit-risk",
        "label": "Credit Risk"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:quantitative-easing",
        "label": "Quantitative Easing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:gross-domestic-product",
        "label": "Gross Domestic Product"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:fiscal-policy",
        "label": "Fiscal Policy"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:central-banking",
        "label": "Central Banking"
      },
      {
        "@id": "urn:ngm:class:inflation",
        "label": "Inflation"
      },
      {
        "@id": "urn:ngm:class:quantitative-easing",
        "label": "Quantitative Easing"
      },
      {
        "@id": "urn:ngm:class:gross-domestic-product",
        "label": "Gross Domestic Product"
      },
      {
        "@id": "urn:ngm:class:credit-risk",
        "label": "Credit Risk"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- An interest rate is the price of borrowing money or the return earned on lending it, stated as a percentage of principal per period.
	- It is an instrument of [[Monetary Policy]] set and influenced by [[Central Banking]] authorities.
	- It compensates lenders for the time value of money, expected [[Inflation]], and [[Credit Risk]].
	- The rate spread across maturities forms the basis of bond pricing and the yield curve.
- ### Overview
	- Interest rates coordinate the supply of savings with the demand for loanable funds across an economy.
	- Central banks adjust policy rates to manage inflation and economic activity, transmitting changes through to commercial lending and deposit rates.
	- Rates are distinguished as nominal (headline) versus real (inflation-adjusted), and as fixed versus floating.
	- The term structure of interest rates links short-term and long-term borrowing costs and signals market expectations.
- ### Key aspects
	- The real rate equals the nominal rate minus expected inflation, isolating the true cost of capital.
	- Policy rates anchor the short end of the curve, while market forces shape longer maturities.
	- Risk premia widen rates for borrowers with weaker creditworthiness.
	- Compounding frequency materially affects the effective cost or yield over time.
- ### Applications
	- Pricing of loans, mortgages, bonds, and deposit products.
	- Discounting future cash flows in valuation and capital budgeting.
	- Transmission channel for monetary policy via [[Federal Reserve]] and peer central banks.
	- Macroeconomic stabilisation through tightening or easing cycles such as [[Quantitative Easing]].
- ### Relationships
	- subClassOf:: [[Monetary Policy]]
	- partOf:: [[Monetary Policy]]
	- dependsOn:: [[Central Banking]]
	- dependsOn:: [[Inflation]]
	- requires:: [[Credit Risk]]
	- enables:: [[Quantitative Easing]]
	- uses:: [[Gross Domestic Product]]
	- supports:: [[Fiscal Policy]]
	- relatedTo:: [[Central Banking]]
	- relatedTo:: [[Inflation]]
	- relatedTo:: [[Federal Reserve]]
	- relatedTo:: [[Quantitative Easing]]
	- relatedTo:: [[Gross Domestic Product]]
	- relatedTo:: [[Credit Risk]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
