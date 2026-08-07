public:: true

# Regulation D
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:66466b2beeb473048914d87507999efcca276529c35a51d3045b04bc5af0e6dd",
  "@type": "Page",
  "vc:slug": "regulation-d",
  "title": "Regulation D",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:securities-regulation",
      "vc:label": "Securities Regulation"
    },
    {
      "@id": "urn:visionflow:linked:security-token",
      "vc:label": "Security Token"
    },
    {
      "@id": "urn:visionflow:linked:know-your-customer",
      "vc:label": "Know Your Customer"
    },
    {
      "@id": "urn:visionflow:linked:crowdfunding",
      "vc:label": "Crowdfunding"
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
  "@id": "urn:ngm:class:regulation-d",
  "@type": "Class",
  "label": "Regulation D",
  "definition": "A United States Securities and Exchange Commission regulation providing exemptions from the registration requirements of the Securities Act of 1933, allowing companies to raise capital through private placements to accredited investors without a full public offering. Its Rules 504 and 506 are the dominant legal pathway for security token offerings and early-stage fundraising, trading reduced disclosure burdens for restrictions on general solicitation and resale.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:securities-regulation",
    "label": "Securities Regulation"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:securities-regulation",
        "label": "Securities Regulation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:security-token",
        "label": "Security Token"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:know-your-customer",
        "label": "Know Your Customer"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:crowdfunding",
        "label": "Crowdfunding"
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
  - "A United States Securities and Exchange Commission regulation providing exemptions from the registration requirements of the Securities Act of 1933, allowing companies to raise capital through private placements to accredited investors without a full public offering. Its Rules 504 and 506 are the dominant legal pathway for security token offerings and early-stage fundraising, trading reduced disclosure burdens for restrictions on general solicitation and resale."

- ### Semantic Classification
  - owl-class:: finance:RegulationD
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Securities Regulation]]
  - enables:: [[Security Token]]
  - requires:: [[Know Your Customer]]
  - related-to:: [[Crowdfunding]]

- ### Content

  ## Definition

  **Regulation D** is a set of rules adopted by the US Securities and Exchange Commission (SEC) under the Securities Act of 1933 that exempts certain offerings of securities from federal registration. Rather than filing a full prospectus, an issuer relying on Regulation D files a short Form D notice and sells to a restricted pool of purchasers — most importantly *accredited investors*, defined by income, net-worth, or professional-qualification thresholds.

  The exemption is not a single rule but a family. Rule 506(b) permits unlimited capital raising from accredited investors (plus up to 35 sophisticated non-accredited investors) provided there is no general solicitation; Rule 506(c) allows public advertising but demands that the issuer take reasonable steps to *verify* accredited status; Rule 504 caps smaller offerings (currently 10 million US dollars in a twelve-month period). Securities sold under Regulation D are "restricted securities" and cannot be freely resold, typically for at least six to twelve months.

  Within [[Securities Regulation]] more broadly, Regulation D matters to the digital-asset ecosystem because it is the most common compliance wrapper for a [[Security Token]] offering in the United States: token issuers accept transfer restrictions and investor-verification duties in exchange for a lawful private-placement route, often pairing it with Regulation S for offshore tranches.

  ## Current Landscape

  Regulation D remains the workhorse of US private capital formation, with Form D filings covering well over one trillion US dollars of annual issuance — far exceeding registered public offerings. In tokenised markets, platforms combine Rule 506(c) verification workflows with [[Know Your Customer]] checks and on-chain transfer-restriction logic (for example ERC-1404-style token standards) so that restricted securities cannot move to unverified wallets.

  Debate continues over the accredited-investor definition, which gates most Regulation D deals to wealthier participants, and over the boundary between exempt private placements and public [[Crowdfunding]] regimes such as Regulation CF. For UK and EU issuers the closest analogues are prospectus-exemption thresholds, but the regimes differ materially: Regulation D is jurisdiction-specific SEC law, and non-US issuers targeting US investors must still comply with it.
