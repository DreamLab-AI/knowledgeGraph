public:: true

# Insider Trading
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c88172024b5aeeeb7a01b971cf0b569d103151140880315505e77fc7653bd4bb",
  "@type": "Page",
  "vc:slug": "insider-trading",
  "title": "Insider Trading",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:market-manipulation",
      "vc:label": "Market Manipulation"
    },
    {
      "@id": "urn:visionflow:linked:market-integrity",
      "vc:label": "Market Integrity"
    },
    {
      "@id": "urn:visionflow:linked:investor-protection",
      "vc:label": "Investor Protection"
    },
    {
      "@id": "urn:visionflow:linked:securities-law",
      "vc:label": "Securities Law"
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
  "@id": "urn:ngm:class:insider-trading",
  "@type": "Class",
  "label": "Insider Trading",
  "definition": "The buying or selling of a publicly traded company's securities by individuals with access to material, non-public information about that company, in breach of a fiduciary duty or other relationship of trust. It undermines market integrity and investor confidence by giving informed parties an unfair advantage over ordinary participants, and is prohibited under securities law in most jurisdictions, with enforcement led by regulators such as the SEC and the FCA.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:market-manipulation",
    "label": "Market Manipulation"
  },
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:market-integrity",
        "label": "Market Integrity"
      },
      {
        "@id": "urn:ngm:class:investor-protection",
        "label": "Investor Protection"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:capital-markets",
        "label": "Capital Markets"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:securities-law",
        "label": "Securities Law"
      },
      {
        "@id": "urn:ngm:class:securities-regulation",
        "label": "Securities Regulation"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "The buying or selling of a publicly traded company's securities by individuals with access to material, non-public information about that company, in breach of a fiduciary duty or other relationship of trust. It undermines market integrity and investor confidence by giving informed parties an unfair advantage over ordinary participants, and is prohibited under securities law in most jurisdictions, with enforcement led by regulators such as the SEC and the FCA."

- ### Semantic Classification
  - owl-class:: finance:InsiderTrading
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Market Manipulation]]
  - contrasts-with:: [[Market Integrity]], [[Investor Protection]]
  - related-to:: [[Securities Law]]

- ### Content

  ## Definition

  **Insider trading** is the trading of a company's shares, bonds, or derivatives by people who possess material, non-public information about that company — directors, officers, employees, advisers, or anyone who receives such information in breach of a duty of confidence. The conduct is unlawful when the information would be expected to move the security's price and the trader either owes a fiduciary duty to shareholders or has misappropriated the information from its source. Tipping — passing inside information to others who then trade — is equally prohibited.

  The prohibition rests on the premise that fair markets require broadly equal access to price-sensitive information. When insiders trade ahead of announcements such as merger negotiations, earnings surprises, or regulatory decisions, they extract value from counterparties who could not have known what the insider knew. This corrodes [[Market Integrity]] and weakens [[Investor Protection]], raising the cost of capital as ordinary investors demand compensation for the risk of trading against better-informed parties.

  Not all trading by insiders is illegal. Executives may lawfully buy and sell their own company's shares provided they do not hold inside information at the time, disclose their dealings, and, in many jurisdictions, trade only within scheduled windows or under pre-arranged plans such as the SEC's Rule 10b5-1 arrangements. The legal line is drawn at the informational advantage, not at the identity of the trader.

  ## Current Landscape

  In the United States, insider trading is prosecuted principally under Section 10(b) of the Securities Exchange Act 1934 and SEC Rule 10b-5, developed through case law including *Dirks v. SEC* (1983) and *United States v. O'Hagan* (1997), which established the tipper-tippee and misappropriation theories. In the United Kingdom and European Union, the conduct is termed insider dealing and sits alongside unlawful disclosure and [[Market Manipulation]] within the market abuse framework — the EU Market Abuse Regulation (596/2014) and the UK's retained equivalent, enforced by the FCA with both civil and criminal sanctions under the Criminal Justice Act 1993.

  Enforcement increasingly relies on surveillance technology. Regulators and exchanges run pattern-detection systems that correlate trading activity with subsequent announcements, flag anomalous positions in options ahead of takeovers, and mine communications metadata. The rise of digital assets has extended the concept to new venues: prosecutions have targeted employees of token exchanges who traded ahead of listing announcements, applying wire-fraud and market-abuse theories to instruments outside traditional [[Securities Law]] categories. Penalties remain severe — disgorgement, multiples of profit as civil fines, industry bans, and custodial sentences — reflecting the doctrine that confidence in fair markets is a public good worth defending.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
