public:: true

# fatf
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:624ecacfed98c6096ec9c4b77a7c8db749dcb7a0e413577f69f437dd1a3b30bf",
  "@type": "Page",
  "vc:slug": "fatf",
  "title": "fatf",
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
  "@id": "urn:ngm:class:fatf",
  "@type": "Class",
  "label": "FATF",
  "definition": "The Financial Action Task Force (FATF) is an intergovernmental policy-making body founded in 1989 that sets global standards for combating money laundering, terrorist financing, and proliferation financing. Its 40 Recommendations constitute the international framework that member jurisdictions are expected to implement through national legislation and regulatory action. FATF conducts mutual evaluations of member countries' compliance, publishes grey and black lists of high-risk jurisdictions, and issues guidance on emerging risks including those arising from virtual assets and virtual asset service providers.",
  "domain": "infrastructure",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-legal-and-regulatory",
      "label": "Legal and Regulatory"
    }
  ],
  "relations": {
    "standardizedBy": [
      {"@id": "urn:ngm:class:standards-organization", "label": "Standards Organization"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:anti-money-laundering", "label": "Anti-Money Laundering"},
      {"@id": "urn:ngm:class:financial-stability", "label": "Financial Stability"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:fatf-travel-rule", "label": "FATF Travel Rule"},
      {"@id": "urn:ngm:class:compliance-framework", "label": "Compliance Framework"},
      {"@id": "urn:ngm:class:virtual-asset", "label": "Virtual Asset"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - The Financial Action Task Force (FATF) is an intergovernmental policy-making body founded in 1989 that sets global standards for combating money laundering, terrorist financing, and proliferation financing. Its 40 Recommendations constitute the international framework that member jurisdictions are expected to implement through national legislation and regulatory action. FATF conducts mutual evaluations of member countries' compliance, publishes grey and black lists of high-risk jurisdictions, and issues guidance on emerging risks including those arising from virtual assets and virtual asset service providers.

- ### Semantic Classification
  - owl-class:: fatf:FATF
  - owl-role:: Concept

- ### Relationships
  - standardizedBy [[Standards Organization]]
  - enables [[Anti-Money Laundering]]
  - enables [[Financial Stability]]
  - relatedTo [[FATF Travel Rule]]
  - relatedTo [[Compliance Framework]]
  - relatedTo [[Virtual Asset]]

- ### Content
  - The Financial Action Task Force is a Paris-based intergovernmental body established in 1989 by the G7 Summit. Its membership encompasses over 37 member jurisdictions and two regional organisations, and it works in close collaboration with a network of FATF-Style Regional Bodies (FSRBs). The core output of FATF is the 40 Recommendations, which define the international anti-money-laundering and counter-terrorist-financing (AML/CFT) framework. These are not legally binding in themselves, but carry significant normative weight: countries that fail mutual evaluations face reputational consequences and potential listing, which can affect their access to international financial markets and correspondent banking relationships.
  - In the virtual asset space, FATF issued updated guidance in 2019 and 2021 extending AML/CFT obligations to Virtual Asset Service Providers (VASPs). Key provisions include the application of Recommendation 16 (the Travel Rule) to crypto-asset transfers, requirements for VASPs to conduct customer due diligence, and expectations around transaction monitoring and suspicious activity reporting. FATF also introduced the concept of the unhosted wallet, which remains a contested area of policy as jurisdictions determine how to apply identity obligations to peer-to-peer transactions.
  - FATF's grey list (Jurisdictions Under Increased Monitoring) and black list (Non-Cooperative Countries or Territories) are closely watched by financial institutions and regulators. Listing has significant economic consequences, prompting jurisdictions to accelerate legislative reform. The body's work on emerging technologies, including decentralised finance and central bank digital currencies, shapes the direction of crypto-asset regulation globally.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
