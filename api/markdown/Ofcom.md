public:: true

# Ofcom
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ofcom",
  "@type": "Page",
  "vc:slug": "ofcom",
  "title": "Ofcom",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ofcom",
  "@type": "Class",
  "label": "Ofcom",
  "definition": "Ofcom (the Office of Communications) is the independent statutory regulator and competition authority for the UK communications industries, established by the Communications Act 2003. Its remit covers broadcasting, telecommunications, postal services, and — following the Online Safety Act 2023 — online platforms. It enforces spectrum management, sets licence conditions for broadcasters and telecoms operators, adjudicates on consumer complaints, and oversees compliance with the UK Online Safety Act framework requiring platforms to implement systems preventing access to illegal content.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:regulatory-authority", "label": "Regulatory Authority"}],
  "relations": {
    "standardizedBy": [
      {"@id": "urn:ngm:class:digital-regulation", "label": "Digital Regulation"},
      {"@id": "urn:ngm:class:compliance-framework", "label": "Compliance Framework"},
      {"@id": "urn:ngm:class:communications-act-2003", "label": "Communications Act 2003"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:online-safety-act-2023", "label": "Online Safety Act 2023"},
      {"@id": "urn:ngm:class:uk-online-safety-act", "label": "UK Online Safety Act"},
      {"@id": "urn:ngm:class:content-moderation", "label": "Content Moderation"},
      {"@id": "urn:ngm:class:telecommunications-infrastructure", "label": "Telecommunications Infrastructure"},
      {"@id": "urn:ngm:class:spectrum-management", "label": "Spectrum Management"},
      {"@id": "urn:ngm:class:broadcasting-regulation", "label": "Broadcasting Regulation"},
      {"@id": "urn:ngm:class:net-neutrality", "label": "Net Neutrality"},
      {"@id": "urn:ngm:class:information-commissioner-office", "label": "Information Commissioner's Office"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:content-moderation-standards", "label": "Content Moderation Standards"},
      {"@id": "urn:ngm:class:compliance-monitoring", "label": "Compliance Monitoring"},
      {"@id": "urn:ngm:class:consumer-protection", "label": "Consumer Protection"},
      {"@id": "urn:ngm:class:market-competition", "label": "Market Competition"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:child-safety-online", "label": "Child Safety Online"},
      {"@id": "urn:ngm:class:data-protection", "label": "Data Protection"},
      {"@id": "urn:ngm:class:media-plurality", "label": "Media Plurality"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:online-safety-regime", "label": "Online Safety Regime"},
      {"@id": "urn:ngm:class:age-verification", "label": "Age Verification"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:transparency-reporting", "label": "Transparency Reporting"},
      {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:self-regulation", "label": "Self-Regulation"},
      {"@id": "urn:ngm:class:co-regulation", "label": "Co-Regulation"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:artificial-intelligence", "label": "Artificial Intelligence"},
      {"@id": "urn:ngm:class:infrastructure", "label": "Infrastructure"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:office-of-communications", "label": "Office of Communications"}
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
  - [[Ofcom]] is the UK's converged independent regulator for communications, covering broadcasting, telecoms, postal services, and online platforms, with enforcement powers under the [[UK Online Safety Act]] and earlier legislation to set and oversee [[Compliance Framework]] obligations for spectrum use, service quality, and [[Content Moderation]] across the information ecosystem.

- ### Relationships
  - [[Ofcom]] exercises its [[Digital Regulation]] mandate through codes of practice, licence conditions, and investigations, enforcing the [[Online Safety Act 2023]] framework that obliges large platforms to conduct risk assessments and deploy systems for [[Content Moderation Standards]]. It coordinates with the [[FCA]] and the ICO on cross-cutting digital harms, oversees the [[Telecommunications Infrastructure]] obligations of BT Openreach, and drives [[Compliance Monitoring]] through annual transparency reporting requirements on category 1 services.

- ### Content
  - Ofcom was created by the Communications Act 2003 as a merger of five predecessor regulators: Oftel (telecommunications), the Broadcasting Standards Commission, the Independent Television Commission, the Radio Authority, and the Radiocommunications Agency. This consolidation reflected convergence between broadcasting and telecommunications networks as broadband internet transformed media consumption. The organisation is accountable to Parliament and funded through industry licence fees rather than government appropriation, maintaining operational independence.

  - Ofcom's core regulatory functions span spectrum management (licensing radio spectrum for mobile networks, broadcasting, and emerging uses such as 5G and satellite services), broadcasting regulation (licensing ITV, Channel 4, and radio stations; enforcing the Broadcasting Code on impartiality, harm, and accuracy), and telecommunications (regulating BT's Openreach wholesale network access, resolving disputes between operators, and monitoring broadband speeds). It publishes annual Connected Nations reports on UK broadband and mobile coverage and uses market review powers under EU-derived legislation (now retained in UK law post-Brexit) to impose regulatory obligations on operators with significant market power.

  - The Online Safety Act 2023 significantly expanded Ofcom's remit, designating it the principal regulator for online platforms in the UK. The Act requires Ofcom to publish Codes of Practice covering illegal content (child sexual abuse material, terrorism, fraud) and content harmful to children, conduct Technology Notices compelling platforms to use accredited technology to detect CSAM, and impose fines of up to 10% of global annual turnover for non-compliance. Category 1 services (the largest platforms) face additional transparency and accountability obligations. This regulatory expansion positions Ofcom as one of the most powerful internet regulators globally.

  - By 2025, Ofcom had issued its Phase 1 illegal content codes and was mid-way through consultations on the children's safety codes. Platforms were submitting their first round of risk assessments under the new framework, and Ofcom had begun deploying specialist technical staff to assess platforms' safety systems. The regulator also oversees the UK's response to the EU AI Act (for AI systems within broadcasting and communications), participates in international regulatory fora including the Global Online Safety Regulators Network, and is shaping norms for AI-generated content labelling in broadcast media.

