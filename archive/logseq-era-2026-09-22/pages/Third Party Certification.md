public:: true

# Third Party Certification

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:third-party-certification",
  "@type": "Page",
  "title": "Third Party Certification",
  "vc:slug": "third-party-certification",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:third-party-certification",
  "@type": "Class",
  "label": "Third Party Certification",
  "definition": "Third-party certification is a conformity-assessment arrangement in which an independent accredited body, with no commercial interest in the outcome, evaluates a product, system or process against a defined standard and issues a certificate attesting to conformity. Its independence distinguishes it from first-party self-declaration and second-party customer assessment, lending the result greater credibility and market trust. In artificial intelligence it is increasingly proposed as a mechanism to assure that systems meet safety, fairness and governance requirements.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:certification",
      "label": "Certification"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:conformity-assessment",
        "label": "Conformity Assessment"
      },
      {
        "@id": "urn:ngm:class:certification",
        "label": "Certification"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:trust",
        "label": "Trust"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:conformity-assessment",
        "label": "Conformity Assessment"
      },
      {
        "@id": "urn:ngm:class:ai-audit",
        "label": "AI Audit"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:conformity-assessment",
        "label": "Conformity Assessment"
      },
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      },
      {
        "@id": "urn:ngm:class:trustworthy-ai",
        "label": "Trustworthy AI"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:ai-audit",
        "label": "AI Audit"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:certification",
        "label": "Certification"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:quality-assurance",
        "label": "Quality Assurance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:responsible-ai",
        "label": "Responsible AI"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ai-audit",
        "label": "AI Audit"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:standards",
        "label": "Standards"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Certification]]
  - [[Conformity Assessment]]
  - [[AI Audit]]
  - [[Trust]]
  - Third Party Certification is defined within the [[Certification]] area of the artificial-intelligence domain.
- ### Overview
  - Third-party certification supplies trust where a buyer cannot directly verify a supplier's claims. By interposing an accredited, independent assessor between producer and consumer, it converts a private assertion of conformity into a publicly recognisable one backed by accreditation. For AI systems, where opacity and societal risk make self-declaration insufficient, third-party certification is proposed as a governance lever: an external body audits the system against standards for safety, robustness and fairness and certifies the result, complementing internal assurance and regulatory oversight.
- ### Key aspects
  - Independence of the certifying body from the supplier, removing conflict of interest.
  - Accreditation that authorises the body to certify against a given standard.
  - Conformity assessment comprising audit, testing and review against defined criteria.
  - Certificate and mark that communicate conformity to the market.
  - Surveillance and recertification to ensure continued conformity over time.
- ### Applications
  - Assuring AI systems against safety, fairness and governance standards.
  - Product and management-system certification such as ISO 9001 and ISO 27001.
  - Building market and consumer trust through recognised certification marks.
  - Supporting regulatory compliance regimes that require independent attestation.
- ### Relationships
  - subClassOf:: [[Certification]]
  - partOf:: [[Conformity Assessment]]
  - partOf:: [[Certification]]
  - enables:: [[Trust]]
  - enables:: [[Regulatory Compliance]]
  - hasPart:: [[Conformity Assessment]]
  - hasPart:: [[AI Audit]]
  - requires:: [[Conformity Assessment]]
  - requires:: [[Risk Assessment]]
  - supports:: [[AI Governance]]
  - supports:: [[Trustworthy AI]]
  - uses:: [[AI Audit]]
  - implements:: [[Certification]]
  - dependsOn:: [[Quality Assurance]]
  - relatedTo:: [[Responsible AI]]
  - relatedTo:: [[Compliance]]
  - contrastsWith:: [[AI Audit]]
  - standardizedBy:: [[Standards]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
