schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/artificial-intelligence#AiRiskRegister
legacy_uri:: urn:visionclaw:concept:artificial-intelligence:ai-risk-register
public:: true

# AI Risk Register
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:31e94f647b29938388a199e0c7d7d647f86577da08b1f97065058713335cb4c6",
  "@type": "Page",
  "vc:slug": "ai-risk-register",
  "title": "AI Risk Register",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:iso-31000",
      "vc:label": "ISO 31000"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-23894-2023",
      "vc:label": "ISO/IEC 23894:2023"
    },
    {
      "@id": "urn:visionflow:owl:class:aiethics-domain",
      "vc:label": "AIEthicsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:conceptual-layer",
      "vc:label": "ConceptualLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:eu-ai-act",
      "vc:label": "EU AI Act"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.95"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-6bfb15bd62cb"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2025-10-29T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "artificial-intelligence"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/artificial-intelligence#AiRiskRegister"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0394"
    },
    {
      "vc:key": "maturity",
      "vc:value": "mature"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "AI Risk Register"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:ai-risk-register"
    },
    {
      "vc:key": "status",
      "vc:value": "draft"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:ai-risk-register"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:31e94f647b29938388a199e0c7d7d647f86577da08b1f97065058713335cb4c6@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-risk-register",
  "@type": "Class",
  "label": "AI Risk Register",
  "definition": "AI Risk Register is a structured repository that systematically documents, tracks, and manages identified risks associated with AI systems throughout their lifecycle, recording risk descriptions, severity assessments, likelihood es, assigned ownership, mitigation strategies, and current status to...",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-risk-management",
      "label": "AI Risk Management"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:ai-risk-register:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:31e94f647b29938388a199e0c7d7d647f86577da08b1f97065058713335cb4c6"
  },
  "vc:resolutions": [
    {
      "raw": "[[ISO 31000]]",
      "resolved": "urn:visionflow:linked:iso-31000",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 23894:2023]]",
      "resolved": "urn:visionflow:linked:iso-iec-23894-2023",
      "kind": "StubLink"
    },
    {
      "raw": "[[AIEthicsDomain]]",
      "resolved": "urn:visionflow:owl:class:aiethics-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ConceptualLayer]]",
      "resolved": "urn:visionflow:owl:class:conceptual-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[EU AI Act]]",
      "resolved": "urn:visionflow:owl:class:eu-ai-act",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:owl:class:smart-contract",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:31e94f647b29938388a199e0c7d7d647f86577da08b1f97065058713335cb4c6@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - AI Risk Register is a structured repository that systematically documents, tracks, and manages identified risks associated with AI systems throughout their lifecycle, recording risk descriptions, severity assessments, likelihood evaluations, assigned ownership, mitigation strategies, and current status to support risk governance and decision-making. This register captures diverse risk categories including technical risks (model performance failures, robustness issues, adversarial vulnerabilities), ethical risks (fairness violations, discrimination, bias amplification), legal and compliance risks (regulatory violations, liability exposure, contractual breaches), operational risks (system availability, integration failures, resource constraints), security and privacy risks (data breaches, privacy violations, adversarial attacks), reputational risks (public backlash, stakeholder concerns, brand damage), and societal risks (unintended consequences, systemic impacts, dual-use concerns). Each risk entry typically documents risk identifier and title, detailed description of the risk scenario, affected systems and stakeholders, likelihood rating (rare, unlikely, possible, likely, almost certain), consequence or severity rating (insignificant, minor, moderate, major, catastrophic), overall risk level (likelihood × consequence), assigned risk owner responsible for mitigation, current mitigation measures and controls, residual risk after mitigation, risk status (open, in-progress, mitigated, accepted), review dates and audit trail. The register supports risk governance by enabling risk-based decision-making, prioritization of mitigation efforts, compliance demonstration, trend analysis, and continuous monitoring. Implementation aligns with enterprise risk management frameworks (ISO 31000), AI-specific risk standards (ISO/IEC 23894:2023 AI risk management), and regulatory requirements including EU AI Act Article 9 risk management systems and financial services operational risk frameworks.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AIRiskRegister
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - bridges-to:: [[Smart Contract]] (domain: bc)

- ### Content
  AI Risk Register — content pending enrichment.

- ### Provenance
  - sources:: [[ISO 31000]], [[ISO/IEC 23894:2023]], [[EU AI Act]]
  - migration-date:: 2026-04-26T00:00:00Z
