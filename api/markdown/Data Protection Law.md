public:: true

# Data Protection Law
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e974beb252bea38aa4e34ae7c8629d5db05e79c6974fed8b226cd5187278c715",
  "@type": "Page",
  "vc:slug": "data-protection-law",
  "title": "Data Protection Law",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:data-protection",
      "vc:label": "Data Protection"
    },
    {
      "@id": "urn:visionflow:linked:privacy",
      "vc:label": "Privacy"
    },
    {
      "@id": "urn:visionflow:linked:data-privacy",
      "vc:label": "Data Privacy"
    },
    {
      "@id": "urn:visionflow:linked:gdpr",
      "vc:label": "GDPR"
    },
    {
      "@id": "urn:visionflow:linked:ccpa",
      "vc:label": "CCPA"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Data Protection Law"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-protection-law",
  "@type": "Class",
  "label": "Data Protection Law",
  "definition": "The body of law governing how personal data may be collected, processed, stored and shared, and the rights afforded to individuals over their personal information.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-protection",
      "label": "Data Protection"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:gdpr",
        "label": "GDPR"
      },
      {
        "@id": "urn:ngm:class:ccpa",
        "label": "CCPA"
      },
      {
        "@id": "urn:ngm:class:data-subject-rights",
        "label": "Data Subject Rights"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-protection",
        "label": "Data Protection"
      },
      {
        "@id": "urn:ngm:class:consent-management",
        "label": "Consent Management"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      },
      {
        "@id": "urn:ngm:class:data-privacy",
        "label": "Data Privacy"
      },
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:personal-data",
        "label": "Personal Data"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:privacy-by-design",
        "label": "Privacy by Design"
      },
      {
        "@id": "urn:ngm:class:data-minimisation",
        "label": "Data Minimisation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:data-breach-notification",
        "label": "Data Breach Notification"
      },
      {
        "@id": "urn:ngm:class:data-protection-impact-assessment",
        "label": "Data Protection Impact Assessment"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:information-security",
        "label": "Information Security"
      },
      {
        "@id": "urn:ngm:class:digital-rights",
        "label": "Digital Rights"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-27701",
        "label": "ISO 27701"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:surveillance-capitalism",
        "label": "Surveillance Capitalism"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      },
      {
        "@id": "urn:ngm:class:cybersecurity",
        "label": "Cybersecurity"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:right-to-be-forgotten",
        "label": "Right to be Forgotten"
      },
      {
        "@id": "urn:ngm:class:data-portability",
        "label": "Data Portability"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:data-privacy-law",
      "label": "Data Privacy Law"
    },
    {
      "@id": "urn:ngm:class:privacy-law",
      "label": "Privacy Law"
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

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:data-protection-law:bd5b0eb82a6f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e974beb252bea38aa4e34ae7c8629d5db05e79c6974fed8b226cd5187278c715"
  },
  "vc:resolutions": [
    {
      "raw": "[[Data Protection]]",
      "resolved": "urn:visionflow:linked:data-protection",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Privacy]]",
      "resolved": "urn:visionflow:linked:privacy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Privacy]]",
      "resolved": "urn:visionflow:linked:data-privacy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[GDPR]]",
      "resolved": "urn:visionflow:linked:gdpr",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[CCPA]]",
      "resolved": "urn:visionflow:linked:ccpa",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The body of law governing how personal data may be collected, processed, stored and shared, and the rights afforded to individuals over their personal information.

- ### Semantic Classification
  - owl-class:: governance:DataProtectionLaw
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Data Protection]]
  - bridges-to:: [[GDPR]], [[CCPA]]
  - requires:: [[Data Protection]]
  - enables:: [[Privacy]], [[Data Privacy]]

- ### Content
  - Data protection law establishes obligations for organisations that handle personal data and confers rights on the individuals whose data is processed. Common principles include lawfulness, purpose limitation, data minimisation and accountability.
  - Regimes differ across jurisdictions in their definitions, enforcement mechanisms and territorial reach. Prominent examples include the European Union's General Data Protection Regulation and the California Consumer Privacy Act, which have influenced legislation elsewhere.

- ### Current Landscape (2026)
  - The EU's late-2025 "Digital Omnibus" package proposes to simplify and align the GDPR, AI Act, Data Act, NIS2 and ePrivacy rules — narrowing records-of-processing duties for smaller organisations, moving to a relative, entity-specific definition of personal data, lengthening breach-notification timelines and folding cookie rules into the GDPR; the EDPB and EDPS issued a critical joint opinion in early 2026 and the text is still moving through Parliament and Council.
  - GDPR enforcement has intensified sharply: cumulative fines since 2018 now exceed €7.1 billion (roughly €1.2 billion in 2025 alone per the DLA Piper January 2026 survey), with supervisory authorities receiving about 443 breach notifications per day and the EDPB's coordinated action targeting the Article 17 right to erasure.
  - The EU AI Act adds a second regulatory layer atop data protection law; general-purpose AI obligations applied from August 2025, but under the June 2026 "Omnibus VII" simplification the high-risk rules were delayed to 2 December 2027 (stand-alone systems) and 2 August 2028 (embedded systems), with penalties up to €35 million or 7% of global turnover.
  - In the UK the Data (Use and Access) Act 2025 (Royal Assent 19 June 2025) had its main data-protection provisions commence on 5 February 2026, introducing a "recognised legitimate interests" basis, a relaxed automated-decision-making regime, a "not materially lower" adequacy test and PECR fines raised to UK GDPR levels (£17.5 million or 4%); complaint-handling duties followed on 19 June 2026.
  - US state-level regulation continues to fragment in the absence of a federal law: around 20 comprehensive state privacy laws are now in effect (Indiana, Kentucky and Rhode Island joined on 1 January 2026), while Louisiana, Oklahoma, Alabama and Vermont passed new laws during 2026 with later effective dates; expiring cure periods (e.g. Delaware, Montana, New Jersey) are removing grace-period buffers.
  - California operationalised its Delete Act via the DROP platform on 1 January 2026 (data brokers must honour centralised deletion requests by 1 August 2026), alongside new automated-decision-making (ADMT), cybersecurity-audit and risk-assessment regulations, with ADMT enforcement due in January 2027.
  - The open frontier as of 2026 is the collision of data-protection law with AI: regulators are actively applying transparency, profiling and automated-decision obligations to AI systems (US states enacted around 145 AI-related laws in 2025, e.g. Colorado's AI Act and Texas's TRAIGA), while an updated COPPA rule sets an April 2026 children's-data compliance deadline and cross-border transfer/adequacy regimes remain in flux.

- ### References
  - 1. Kiteworks (2026). GDPR Fines Hit €7.1 Billion: Data Privacy Enforcement Trends in 2026. https://www.kiteworks.com/gdpr-compliance/gdpr-fines-data-privacy-enforcement-2026/
  - 2. JD Supra (2026). Privacy and AI Heatmap for 2026. https://www.jdsupra.com/legalnews/privacy-and-ai-heatmap-for-2026-what-6171799/
  - 3. Aosphere (2026). Global Data Protection, Cybersecurity and AI Regulation: Key Developments from Summer 2026. https://www.aosphere.com/know-how/global-data-protection-cybersecurity-and-ai-regulation-key-developments-from-summer-2026/
  - 4. Clifford Chance (2026). Key aspects of the Data (Use and Access) Act take effect. https://www.cliffordchance.com/insights/resources/blogs/talking-tech/en/articles/2026/02/key-aspects-of-the-data--use-and-access--act-take-effect.html
  - 5. Multistate (2026). 20 State Privacy Laws in Effect in 2026: Key Dates & Changes. https://www.multistate.us/insider/2026/2/4/all-of-the-comprehensive-privacy-laws-that-take-effect-in-2026
  - 6. O'Melveny & Myers (2026). 2026 Data Security and Privacy Compliance Checklist. https://www.omm.com/insights/alerts-publications/2026-data-security-and-privacy-compliance-checklist-key-us-state-law-updates-ai-rules-coppa-changes-and-global-data-protection-risks/

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
