public:: true

# ghg protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7ad3dda6cae7c9c31012287e41c2e35042e1b3f6bfd3ec55d6c7eb1f48acae03",
  "@type": "Page",
  "vc:slug": "ghg-protocol",
  "title": "ghg protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ghg-protocol",
  "@type": "Class",
  "label": "GHG Protocol",
  "definition": "The GHG Protocol is the internationally recognised greenhouse gas accounting and reporting framework developed by the World Resources Institute (WRI) and the World Business Council for Sustainable Development (WBCSD). It defines the methodologies by which organisations measure and categorise greenhouse gas emissions across three scopes: Scope 1 (direct emissions from owned or controlled sources), Scope 2 (indirect emissions from purchased energy), and Scope 3 (all other indirect emissions in the value chain). The GHG Protocol Corporate Standard and its sector-specific supplements underpin most corporate carbon reporting requirements globally, including those mandated by ESG disclosure frameworks and regulatory regimes.",
  "domain": "infrastructure",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-legal-and-regulatory",
      "label": "Legal and Regulatory"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:carbon-accounting", "label": "Carbon Accounting"},
      {"@id": "urn:ngm:class:esg-reporting", "label": "ESG Reporting"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:environmental-standards", "label": "Environmental Standards"},
      {"@id": "urn:ngm:class:carbon-footprint-measurement", "label": "Carbon Footprint Measurement"},
      {"@id": "urn:ngm:class:iso-14064", "label": "ISO 14064"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - The GHG Protocol is the internationally recognised greenhouse gas accounting and reporting framework developed by the World Resources Institute (WRI) and the World Business Council for Sustainable Development (WBCSD). It defines the methodologies by which organisations measure and categorise greenhouse gas emissions across three scopes: Scope 1 (direct emissions from owned or controlled sources), Scope 2 (indirect emissions from purchased energy), and Scope 3 (all other indirect emissions in the value chain). The GHG Protocol Corporate Standard and its sector-specific supplements underpin most corporate carbon reporting requirements globally, including those mandated by ESG disclosure frameworks and regulatory regimes.

- ### Semantic Classification
  - owl-class:: ghg-protocol:GHG Protocol
  - owl-role:: Concept

- ### Relationships
  - enables [[Carbon Accounting]]
  - enables [[ESG Reporting]]
  - relatedTo [[Environmental Standards]]
  - relatedTo [[Carbon Footprint Measurement]]
  - relatedTo [[ISO 14064]]

- ### Content
  - The GHG Protocol is the world's most widely used greenhouse gas accounting standard, providing the methodological foundations for corporate-level carbon accounting and reporting. Developed collaboratively by the World Resources Institute and the WBCSD from the late 1990s, it was first published as the Corporate Standard in 2001. It has since been supplemented by the GHG Protocol Scope 2 Guidance (addressing market-based and location-based accounting of electricity emissions), the Corporate Value Chain (Scope 3) Standard, and sector-specific guidance for products and projects.
  - The three-scope framework is the GHG Protocol's most influential contribution. Scope 1 covers direct emissions from combustion, process chemistry, or fugitive releases under organisational control. Scope 2 covers emissions from purchased electricity, heat, or steam, reflecting the carbon intensity of the grid. Scope 3 encompasses all other indirect emissions across the upstream and downstream value chain, including purchased goods, business travel, employee commuting, use of sold products, and end-of-life treatment — typically the largest and most complex category for most organisations.
  - The GHG Protocol is foundational to ESG Reporting frameworks including CDP (formerly Carbon Disclosure Project), the Science Based Targets initiative (SBTi), the Task Force on Climate-related Financial Disclosures (TCFD), and mandatory reporting regimes such as the EU Corporate Sustainability Reporting Directive (CSRD) and the US SEC climate disclosure rules. It is harmonised with ISO 14064, which provides a complementary international standard for GHG inventories and verification. Blockchain-based solutions for Carbon Accounting increasingly reference GHG Protocol methodologies as the basis for on-chain carbon credit quantification and Carbon Footprint Measurement.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
