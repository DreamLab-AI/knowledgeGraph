public:: true

# Science Based Targets
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:science-based-targets",
  "@type": "Page",
  "vc:slug": "science-based-targets",
  "title": "Science Based Targets",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:science-based-targets",
  "@type": "Class",
  "label": "Science Based Targets",
  "definition": "Science Based Targets (SBTs) are greenhouse gas emission reduction targets set by companies in alignment with the level of decarbonisation required by climate science to limit global warming to 1.5°C above pre-industrial levels, as defined by the Science Based Targets initiative (SBTi). Targets are validated by the SBTi against approved methods including absolute contraction, sectoral decarbonisation approach, and economy-wide linear regression, and must cover Scope 1 and Scope 2 emissions with a growing requirement to include Scope 3.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:science-based-target", "label": "Science Based Target"}],
  "relations": {
    "standardizedBy": [{"@id": "urn:ngm:class:sbti", "label": "SBTi"}],
    "requires": [{"@id": "urn:ngm:class:ghg-protocol-corporate-standard", "label": "GHG Protocol Corporate Standard"}, {"@id": "urn:ngm:class:scope-3-emissions", "label": "Scope 3 Emissions"}],
    "enables": [{"@id": "urn:ngm:class:net-zero-targets", "label": "Net Zero Targets"}, {"@id": "urn:ngm:class:decarbonisation", "label": "Decarbonisation"}],
    "relatedTo": [{"@id": "urn:ngm:class:paris-agreement", "label": "Paris Agreement"}]
  },
  "quality": 0.8
}
```

- ### Definition
  - Science Based Targets are corporate emissions reduction commitments validated by the [[SBTi]] as consistent with climate science pathways to 1.5°C, requiring companies to measure emissions against the [[GHG Protocol Corporate Standard]] and commit to reductions across [[Scope 3 Emissions]] value chains, serving as a credible corporate mechanism for pursuing [[Net Zero Targets]] aligned with the [[Paris Agreement]].

- ### Relationships
  - Science Based Targets are standardised and validated by the [[SBTi]], require emissions measurement using the [[GHG Protocol Corporate Standard]] and must increasingly cover [[Scope 3 Emissions]] in value chains, enable credible corporate [[Net Zero Targets]] and [[Decarbonisation]] pathways, and are grounded in the temperature goals of the [[Paris Agreement]].

- ### Content
  - The Science Based Targets initiative (SBTi) was launched in 2015 as a collaboration between CDP (formerly Carbon Disclosure Project), United Nations Global Compact, World Resources Institute (WRI), and WWF, coinciding with the Paris Agreement negotiations. The initial focus was on 2°C-aligned targets; the 1.5°C standard became the primary validation criterion in 2019, following the IPCC Special Report on 1.5°C. Adoption grew from a handful of pioneering companies in 2015-2016 to over 7,000 companies with approved or committed targets by 2024, covering more than one-third of global market capitalisation across sectors including energy, manufacturing, retail, financial services, and technology.

  - The SBTi validates targets using several approved methods. The Absolute Contraction Approach (ACA) requires companies to reduce Scope 1, 2, and 3 emissions by a defined percentage annually (typically 4.2% per year for 1.5°C). The Sectoral Decarbonisation Approach (SDA) uses sector-specific physical intensity metrics (tonnes CO2 per MWh for power companies, CO2 per tonne-kilometre for freight) aligned to International Energy Agency sectoral pathways. The FLAG (Forest, Land and Agriculture) guidance addresses land-use emissions from food and agriculture companies. Near-term targets must span five to ten years; the SBTi Net-Zero Standard (published 2021) introduced long-term targets requiring 90-95% absolute emission reductions by 2050 with residual emissions neutralised by permanent carbon removal.

  - For companies, SBT validation provides several strategic benefits beyond reputational signalling. Investors increasingly require SBT commitments as part of ESG due diligence, and major asset managers such as BlackRock and Legal & General screen portfolios for climate alignment. Supply chain customers impose SBT requirements on suppliers, particularly in sectors with ambitious Scope 3 commitments (Apple, Unilever, Microsoft have all communicated supplier engagement expectations). Corporate reporting frameworks (TCFD, CDP, ISSB/IFRS S2) reference SBT commitment status as a disclosure element, linking target-setting to financial disclosures.

  - In 2024-2025 the SBTi faced significant internal controversy around the use of carbon credits for Scope 3 target achievement. A May 2024 statement from the SBTi board proposing to allow high-quality carbon credits to count toward Scope 3 targets generated fierce staff opposition and an open letter from 80 scientific experts arguing this would undermine the ambition of the standard. The SBTi subsequently committed to a multi-year review of Scope 3 requirements. Simultaneously, the SBTi Financial Institutions Net-Zero Standard (FINZ) for banks and investors to align lending and investment portfolios with 1.5°C was under development, raising methodological debates about portfolio temperature scoring and financed emissions attribution.
