public:: true

# SEC
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:sec",
  "@type": "Page",
  "vc:slug": "sec",
  "title": "SEC",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sec",
  "@type": "Class",
  "label": "SEC",
  "definition": "The Securities and Exchange Commission (SEC) is the principal US federal regulatory agency responsible for enforcing federal securities laws, overseeing securities markets, and protecting investors. Established by the Securities Exchange Act of 1934 in the wake of the 1929 stock market crash, the SEC requires public companies to disclose material financial information and polices against fraud, insider trading, and market manipulation. In the digital asset domain, the SEC has asserted jurisdiction over many cryptocurrencies and token offerings on the grounds that they constitute investment contracts under the Howey Test, leading to high-profile enforcement actions against exchanges, issuers, and DeFi protocols. The SEC's regulatory posture towards crypto assets is a defining factor in the shape of the US digital asset industry.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:financial-regulation",
    "label": "Financial Regulation"
  },
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:securities-regulation",
        "label": "Securities Regulation"
      },
      {
        "@id": "urn:ngm:class:regulatory-framework",
        "label": "Regulatory Framework"
      },
      {
        "@id": "urn:ngm:class:digital-asset-risks",
        "label": "Digital Asset Risks"
      },
      {
        "@id": "urn:ngm:class:mi-ca-regulation",
        "label": "MiCA Regulation"
      },
      {
        "@id": "urn:ngm:class:howey-test",
        "label": "Howey Test"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:regulatory-reporting",
        "label": "Regulatory Reporting"
      },
      {
        "@id": "urn:ngm:class:compliance-audit-trail",
        "label": "Compliance Audit Trail"
      },
      {
        "@id": "urn:ngm:class:investor-protection",
        "label": "Investor Protection"
      },
      {
        "@id": "urn:ngm:class:securities-disclosure",
        "label": "Securities Disclosure"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:regulatory-standards",
        "label": "Regulatory Standards"
      },
      {
        "@id": "urn:ngm:class:market-integrity",
        "label": "Market Integrity"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:enforcement-mechanism",
        "label": "Enforcement Mechanism"
      },
      {
        "@id": "urn:ngm:class:regulatory-technology",
        "label": "Regulatory Technology"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:us-regulatory-framework",
        "label": "US Regulatory Framework"
      },
      {
        "@id": "urn:ngm:class:cftc",
        "label": "CFTC"
      },
      {
        "@id": "urn:ngm:class:financial-conduct-authority",
        "label": "Financial Conduct Authority"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:securities-regulation",
        "label": "Securities Registration"
      },
      {
        "@id": "urn:ngm:class:broker-dealer-registration",
        "label": "Broker-Dealer Registration"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:securities-exchange-act-1934",
        "label": "Securities Exchange Act"
      },
      {
        "@id": "urn:ngm:class:securities-act-1933",
        "label": "Securities Act 1933"
      },
      {
        "@id": "urn:ngm:class:regulation",
        "label": "Regulation Best Interest"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-asset-regulation",
        "label": "Digital Asset Regulation"
      },
      {
        "@id": "urn:ngm:class:defi-protocol",
        "label": "DeFi Protocol"
      },
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-etf",
        "label": "Bitcoin ETF"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:securities-and-exchange-commission",
      "label": "Securities and Exchange Commission"
    },
    {
      "@id": "urn:ngm:class:us-sec",
      "label": "US SEC"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - The SEC is the US federal agency responsible for [[Securities Regulation]] and investor protection, whose application of the Howey Test to digital assets has made it the most consequential regulatory body for the global cryptocurrency industry, shaping exchange operations, token issuance, and [[Digital Asset Risks]] disclosure requirements.

- ### Relationships
  - The SEC's jurisdiction over digital assets intersects with that of the Commodity Futures Trading Commission (CFTC), creating regulatory uncertainty about whether specific tokens are securities or commodities. [[Securities Regulation]] enforcement actions — against Ripple (XRP), Coinbase, Binance, and Kraken — defined the boundaries of permissible exchange and staking operations in the US market. [[MiCA Regulation]] in the EU provides a contrasting regulatory model that explicitly categorises asset types, whereas the SEC relies on case-by-case Howey Test application. [[Regulatory Reporting]] obligations under SEC rules require registered digital asset custodians and exchanges to file periodic disclosures analogous to traditional broker-dealer filings. [[Enforcement Mechanism]] tools include administrative proceedings, civil penalties, disgorgement orders, and criminal referrals to the Department of Justice.

- ### Content
  - The SEC was created in response to the catastrophic investor losses of the 1929 crash and the subsequent Pecora Commission findings that widespread securities fraud and market manipulation had contributed to the collapse. The foundational securities laws — the Securities Act of 1933 and the Securities Exchange Act of 1934 — established disclosure requirements and prohibited fraud in securities transactions, creating the template for all subsequent US financial regulation.

  - The SEC's engagement with digital assets intensified after the 2017 ICO boom, when the agency issued the DAO Report finding that the tokens sold in The DAO offering were securities subject to federal registration requirements. Chairman Jay Clayton's statement that "every ICO he had seen was a security" set the tone for an enforcement-first approach that characterised the agency's digital asset posture through subsequent administrations. The Ripple lawsuit (SEC v. Ripple Labs), filed in December 2020, became the decade's most significant digital asset litigation, with the 2023 district court ruling finding that institutional XRP sales were securities but programmatic exchange sales were not — a nuanced holding with wide implications.

  - The SEC's approval of Bitcoin spot ETFs in January 2024 — after years of rejections — marked a significant policy shift and validated Bitcoin's status as a commodity-like asset rather than an investment contract under the Howey Test. The approvals followed a successful legal challenge by Grayscale in the DC Circuit Court of Appeals, which held that the SEC's earlier rejections were "arbitrary and capricious." The ETF approvals opened institutional capital flows that transformed Bitcoin market structure.

  - Regulation Best Interest (Reg BI) and the SEC's proposed rules for digital asset broker-dealers and investment advisers extended traditional investor protection obligations to firms handling cryptocurrency. Custody rule proposals requiring digital asset custodians to use qualified custodians created compliance challenges for crypto-native firms whose self-custody infrastructure did not map cleanly onto traditional custody models.

  - The SEC's Crypto Assets and Cyber Unit (formerly the Cyber Unit) has grown substantially since 2017, pursuing enforcement actions covering unregistered securities offerings, exchange failures, market manipulation, and DeFi protocol operators. The enforcement approach has been criticised by the industry as "regulation by enforcement" rather than clear rule-making, and the tension between the SEC's jurisdiction-expansion agenda and the CFTC's competing claims over crypto commodities remained unresolved pending comprehensive digital asset legislation as of 2025.
