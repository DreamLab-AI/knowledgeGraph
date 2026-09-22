public:: true

# privacy policy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d92443f92af063b1a5ec8f2261488c1e02a9457e023c14e4e948b1c61a3231d6",
  "@type": "Page",
  "vc:slug": "privacy-policy",
  "title": "privacy policy",
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
  "@id": "urn:ngm:class:privacy-policy",
  "@type": "Class",
  "label": "Privacy Policy",
  "definition": "A privacy policy is a formal legal disclosure instrument through which an organisation communicates to data subjects the categories of personal data collected, the purposes and legal bases for processing, retention periods, third-party sharing arrangements, and individual rights available under applicable regulations. Such documents are mandated by data protection frameworks including the EU General Data Protection Regulation (GDPR), the UK Data Protection Act 2018, and the California Consumer Privacy Act (CCPA), each requiring clear, accessible language and prominent placement at the point of data collection to constitute valid notice. Privacy policies function both as a transparency mechanism for individuals and as a compliance artefact evidencing an organisation's accountability obligations. As AI systems introduce novel data flows—inference logging, training on user data, automated decision-making—privacy policies must be continuously updated to reflect these processing activities accurately.",
  "domain": "governance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-governance",
      "label": "Data Governance"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:privacy-framework",
        "label": "Privacy Framework"
      },
      {
        "@id": "urn:ngm:class:transparency-principle",
        "label": "Transparency Principle"
      },
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability Principle"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-protection-regulation",
        "label": "Data Protection Regulation"
      },
      {
        "@id": "urn:ngm:class:legal-basis-for-processing",
        "label": "Legal Basis for Processing"
      },
      {
        "@id": "urn:ngm:class:data-protection-officer",
        "label": "Data Protection Officer"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:consent-management",
        "label": "Consent Management"
      },
      {
        "@id": "urn:ngm:class:data-subject-rights",
        "label": "Data Subject Rights"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:informed-consent",
        "label": "Informed Consent"
      },
      {
        "@id": "urn:ngm:class:data-minimisation",
        "label": "Data Minimisation"
      },
      {
        "@id": "urn:ngm:class:purpose-limitation",
        "label": "Purpose Limitation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:gdpr-compliance",
        "label": "GDPR Compliance"
      },
      {
        "@id": "urn:ngm:class:data-protection-impact-assessment",
        "label": "Data Protection Impact Assessment"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:data-privacy-vocabulary",
        "label": "Data Privacy Vocabulary"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:terms-of-service",
        "label": "Terms of Service"
      },
      {
        "@id": "urn:ngm:class:cookie-policy",
        "label": "Cookie Policy"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:personal-data",
        "label": "Personal Data"
      },
      {
        "@id": "urn:ngm:class:data-retention",
        "label": "Data Retention"
      },
      {
        "@id": "urn:ngm:class:cross-border-data-transfer",
        "label": "Cross-Border Data Transfer"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-transparency-framework",
        "label": "AI Transparency"
      },
      {
        "@id": "urn:ngm:class:automated-decision-making",
        "label": "Automated Decision-Making"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:privacy-notice",
      "label": "Privacy Notice"
    },
    {
      "@id": "urn:ngm:class:data-protection-notice",
      "label": "Data Protection Notice"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - A **privacy policy** is a formal legal disclosure instrument through which an organisation communicates to [[Data Subject|data subjects]] the categories of [[Personal Data]] collected, the purposes and legal bases for processing, retention schedules, third-party sharing arrangements, and the individual rights exercisable under applicable law. Such documents are mandated by [[Data Protection Regulation|data protection regulations]] including the EU [[GDPR Compliance|General Data Protection Regulation]], the UK [[Data Protection Act 2018]], and the [[California Consumer Privacy Act]], each requiring clear, accessible language and prominent placement at the point of data collection. A privacy policy simultaneously serves as a [[Transparency Principle|transparency mechanism]] for individuals and an [[Accountability Principle|accountability artefact]] for the organisation, evidencing that privacy obligations are understood and operationalised. The growing deployment of [[Artificial Intelligence]] systems introduces novel data flows—inference logging, model training on user data, [[Automated Decision-Making]]—that must be reflected accurately within privacy policy disclosures.

- ### Overview
  - Privacy policies emerged from early consumer protection and data protection legislation in the 1970s and 1980s and have evolved into foundational instruments of modern [[Data Governance]]. Their core function is to close the informational asymmetry between organisations that process data and the individuals whose data is processed, establishing the basis for meaningful [[Informed Consent]] and autonomous choice.
  - Regulatory regimes across jurisdictions converge on several requirements:
    - Identity and contact details of the [[Data Controller]] and, where applicable, the [[Data Protection Officer]]
    - Categories of [[Personal Data]] collected and the purposes for which each category is used
    - The [[Legal Basis for Processing]] for each purpose (consent, legitimate interest, contract, legal obligation, etc.)
    - [[Data Retention]] periods or the criteria used to determine them
    - Recipients or categories of recipients to whom data may be disclosed, including [[Third-Party Data Sharing]]
    - Details of any [[Cross-Border Data Transfer]] and the safeguards in place (Standard Contractual Clauses, Adequacy Decisions, etc.)
    - A description of [[Data Subject Rights]] and how to exercise them
    - Information about [[Automated Decision-Making]] including profiling with significant effects
    - Whether provision of data is a statutory or contractual requirement
  - Beyond legal compliance, effective privacy policies serve commercial and reputational functions: they build user trust, reduce the risk of regulatory sanction, and form a key part of the organisation's [[Privacy by Design]] posture.

- ### Key Components
  - **Identity and Contact Details**
    - Full legal name and address of the data controller
    - [[Data Protection Officer]] contact where mandatory (public authorities, large-scale systematic processing)
  - **Data Categories and Purposes**
    - Granular enumeration of [[Personal Data]] categories (identity data, contact data, financial data, behavioural data, special category data)
    - Specific, explicit, and legitimate purposes as required by [[Purpose Limitation]] under GDPR Article 5(1)(b)
  - **Legal Bases**
    - [[Consent Management|Consent]] (freely given, specific, informed, unambiguous; withdrawable at any time)
    - Legitimate interests (requires Legitimate Interests Assessment)
    - Contract performance
    - Legal obligation compliance
  - **Retention and Deletion**
    - [[Data Retention]] schedules per data category
    - Procedures for [[Right to Erasure]] requests under GDPR Article 17
  - **Third-Party Disclosure**
    - [[Third-Party Data Sharing]] arrangements (processors, joint controllers, recipients)
    - Contractual safeguards such as [[Data Processing Agreement|Data Processing Agreements]]
  - **International Transfers**
    - [[Cross-Border Data Transfer]] mechanisms: Adequacy Decisions, Standard Contractual Clauses (SCCs), Binding Corporate Rules
  - **Data Subject Rights**
    - [[Data Subject Rights]]: access (Article 15), rectification (16), erasure (17), restriction (18), portability (20), objection (21)
    - Procedure and timeframe for exercising rights (typically one calendar month)
  - **Automated Processing**
    - Disclosure of [[Automated Decision-Making]] and profiling under GDPR Article 22
    - Logic involved, significance, and envisaged consequences
  - **Layered Format**
    - Short-form notice at point of collection linked to comprehensive full policy
    - Machine-readable encoding using [[Data Privacy Vocabulary]] (DPV) or [[ODRL]] for automated [[Consent Management]]
  - **Cookies and Tracking**
    - Separate or integrated [[Cookie Policy]] disclosure covering first- and third-party trackers
    - ePrivacy Directive compliance (opt-in for non-essential cookies in the EU/UK)

- ### Applications and Use Cases
  - **Consumer-Facing Web and Mobile Services**
    - Privacy policies embedded in onboarding flows, account registration, and app stores (Apple App Store, Google Play both require them)
    - Layered notices triggered contextually when specific data categories are first collected
  - **Enterprise Software and SaaS**
    - Controller-to-processor [[Data Processing Agreement|DPAs]] supplement or replace retail-style privacy policies
    - Enterprise privacy policies address employee data separately from customer data
  - **Healthcare and Clinical Research**
    - Privacy policies interface with [[Health Data]] processing obligations under GDPR Article 9 special category rules and sectoral laws (NHS DSPT, HIPAA in the US)
    - Clinical trial participant information sheets function as specialised privacy notices
  - **Financial Services**
    - Privacy policies must align with sector-specific obligations (FCA Consumer Duty, PSD2, MiFID II client data disclosures)
    - Open Banking requires explicit consent-based data sharing disclosures
  - **AI and Machine Learning Systems**
    - Disclosure of model training on user-generated content and inference logging
    - [[AI Transparency]] obligations under the EU AI Act (Recital 47, Article 13) supplement GDPR Article 22 disclosures
    - Profiling disclosures required when [[Automated Decision-Making]] has legal or similarly significant effects
  - **Children's Services**
    - Age-appropriate design codes (UK Children's Code, US COPPA) require enhanced disclosures and parental consent mechanisms
    - Privacy policies must be intelligible to children if the service is directed at minors

- ### Relationships
  - implements:: [[Privacy Framework]]
  - implements:: [[Transparency Principle]]
  - implements:: [[Accountability Principle]]
  - requires:: [[Data Protection Regulation]]
  - requires:: [[Legal Basis for Processing]]
  - requires:: [[Data Protection Officer]]
  - supports:: [[Consent Management]]
  - supports:: [[Data Subject Rights]]
  - supports:: [[Regulatory Compliance]]
  - enables:: [[Informed Consent]]
  - enables:: [[Data Minimisation]]
  - enables:: [[Purpose Limitation]]
  - dependsOn:: [[GDPR Compliance]]
  - dependsOn:: [[Data Protection Impact Assessment]]
  - uses:: [[Data Privacy Vocabulary]]
  - uses:: [[ODRL]]
  - contrastsWith:: [[Terms of Service]]
  - contrastsWith:: [[Cookie Policy]]
  - relatedTo:: [[Personal Data]]
  - relatedTo:: [[Data Retention]]
  - relatedTo:: [[Cross-Border Data Transfer]]
  - bridges-to:: [[AI Transparency]]
  - bridges-to:: [[Automated Decision-Making]]

- ### Standards and Regulatory Context
  - **EU General Data Protection Regulation (GDPR) 2016/679**
    - Articles 13 and 14 define the information to be provided when data is collected directly or indirectly
    - Article 12 requires concise, transparent, intelligible, and easily accessible presentation
    - Recital 39 emphasises the transparency principle underpinning all notice requirements
  - **UK Data Protection Act 2018 and UK GDPR**
    - Post-Brexit retained law mirrors GDPR with ICO (Information Commissioner's Office) as supervisory authority
    - ICO Accountability Framework and documentation requirements
  - **California Consumer Privacy Act (CCPA) and CPRA**
    - Requires disclosure of the categories of personal information sold or shared and consumer opt-out rights
    - CPRA 2023 amendments added sensitive personal information categories and opt-in for minors
  - **ePrivacy Directive 2002/58/EC (Cookie Law)**
    - Requires informed consent before storing non-essential cookies; interacts with privacy policy cookie sections
  - **ISO/IEC 29100 – Privacy Framework**
    - International standard providing a high-level privacy framework, terminology, and privacy safeguarding requirements
    - Aligns privacy policy components with broader [[Privacy by Design]] and [[Privacy Engineering]] practices
  - **W3C P3P (Platform for Privacy Preferences)**
    - Legacy machine-readable privacy policy standard (deprecated by W3C in 2018)
    - Superseded by [[Data Privacy Vocabulary]] (DPV) maintained by W3C DPVCG
  - **NIST Privacy Framework**
    - US voluntary framework structuring privacy risk management, complementing NIST CSF
    - Maps to core privacy policy functions: Identify, Govern, Control, Communicate, Protect
  - **EU AI Act 2024**
    - Article 13 transparency requirements for high-risk AI systems interact directly with GDPR Article 22 disclosures
    - Organisations deploying AI must ensure privacy policies capture AI-specific data flows

- ### Provenance
  - sources::
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
