public:: true

# Investor Disclosure
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:investor-disclosure",
  "@type": "Page",
  "vc:slug": "investor-disclosure",
  "title": "Investor Disclosure",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:investor-disclosure",
  "@type": "Class",
  "label": "Investor Disclosure",
  "definition": "Investor disclosure is the regulated obligation to provide investors with material, accurate, and timely information about an investment's risks, financials, and governance so they can make informed decisions. It underpins securities regulation by reducing information asymmetry between issuers and the market. In digital-asset and sustainability contexts it increasingly extends to environmental impact and tokenomics, including emissions and energy-use reporting.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:securities-regulation", "label": "Securities Regulation"},
      {"@id": "urn:ngm:class:blockchain-environmental-impact-assessment", "label": "Blockchain Environmental Impact Assessment"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Investor disclosure mandates material, timely information to investors, a pillar of [[Securities Regulation]]. It now also encompasses environmental reporting tied to [[Blockchain Environmental Impact Assessment]].
- ### Content
  - Disclosure regimes specify what must be reported (financials, risk factors, conflicts) and on what cadence, with liability for omissions or misstatements. Extending disclosure to crypto issuers and ESG metrics aims to give markets a clearer view of both financial and environmental risk.
