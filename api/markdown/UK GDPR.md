public:: true

# UK GDPR
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:uk-gdpr",
  "@type": "Page",
  "vc:slug": "uk-gdpr",
  "title": "UK GDPR",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:uk-gdpr",
  "@type": "Class",
  "label": "UK GDPR",
  "definition": "UK GDPR is the retained EU law version of the General Data Protection Regulation that came into force in the United Kingdom on 1 January 2021 following the end of the Brexit transition period, implemented alongside the Data Protection Act 2018. It preserves the core principles of the EU GDPR — lawfulness, fairness, transparency, purpose limitation, data minimisation, accuracy, storage limitation, integrity, and accountability — while allowing the UK government to diverge from EU rules through domestic legislation.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-protection-regulation", "label": "Data Protection Regulation"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:gdpr", "label": "GDPR"}, {"@id": "urn:ngm:class:ico", "label": "ICO"}, {"@id": "urn:ngm:class:data-protection-law", "label": "Data Protection Law"}],
    "requires": [{"@id": "urn:ngm:class:privacy-by-design", "label": "Privacy by Design"}, {"@id": "urn:ngm:class:consent-management", "label": "Consent Management"}],
    "enables": [{"@id": "urn:ngm:class:data-privacy", "label": "Data Privacy"}]
  },
  "quality": 0.8
}
```

- ### Definition
  - UK GDPR is a [[Data Protection Regulation]] enacted as retained EU law following Brexit, preserving the substantive rights and obligations of [[GDPR]] within UK jurisdiction, enforced by the [[ICO]] (Information Commissioner's Office), and differing from EU GDPR primarily in its provisions for international transfers and the UK government's power to update standards by secondary legislation.

- ### Relationships
  - UK GDPR is closely related to [[GDPR]] (from which it was derived), is enforced by the [[ICO]], is part of the UK [[Data Protection Law]] framework, mandates [[Privacy by Design]] in system architecture, requires [[Consent Management]] as a lawful basis mechanism, and protects the right to [[Data Privacy]] for UK residents.

- ### Content
  - Prior to 31 January 2020, the UK applied EU GDPR directly as a member state. The EU (Withdrawal) Act 2018 and the Data Protection, Privacy and Electronic Communications (Amendments etc) (EU Exit) Regulations 2019 transposed EU GDPR into UK domestic law as "UK GDPR", taking effect on 1 January 2021. The UK GDPR sits alongside the Data Protection Act 2018 (DPA 2018), which provides supplementary provisions such as exemptions for national security, law enforcement, and processing by intelligence services. The EU granted the UK an adequacy decision in June 2021, allowing free data flows from the EEA to the UK, though this decision is time-limited and subject to periodic review.

  - UK GDPR retains the six lawful bases for processing (consent, contract, legal obligation, vital interests, public task, legitimate interests), the eight data subject rights (access, rectification, erasure, restriction, portability, objection, automated decision-making rights, and the right to withdraw consent), and the accountability principle requiring documented compliance policies, Data Protection Impact Assessments (DPIAs) for high-risk processing, and Data Protection Officer (DPO) appointments where required. Controllers and processors must maintain Records of Processing Activities (RoPAs). Breach notification to the ICO within 72 hours of discovery remains mandatory for breaches likely to result in risk to individuals.

  - The practical significance of UK GDPR extends beyond UK-incorporated organisations: any entity processing personal data of UK residents is subject to its requirements, regardless of where that entity is established. Maximum fines are the higher of £17.5 million or 4% of annual global turnover (matching EU GDPR's upper tier) or £8.7 million / 2% of turnover for less serious infringements. The ICO has issued notable enforcement actions against British Airways (initially £183 million, reduced to £20 million), Marriott International (£18.4 million), and TikTok (£12.7 million for misuse of children's data).

  - Between 2023 and 2025 the UK government pursued a programme of divergence from EU GDPR through the Data Protection and Digital Information (DPDI) Bill, which was eventually enacted as the Data (Use and Access) Act 2025. This legislation introduces "recognised legitimate interests" that bypass the balancing test for certain processing activities, creates a new UK data bridge framework for international transfers, reforms the DPO role into a "Senior Responsible Individual", and introduces a risk-based accountability model. The ICO has simultaneously published detailed guidance on AI systems under UK GDPR, particularly regarding automated decision-making under Article 22-equivalent provisions and the application of data protection principles to AI training datasets.
