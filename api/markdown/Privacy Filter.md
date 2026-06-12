public:: true

# Privacy Filter
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ceffb0b23fae2badbd2c6c03cfd7a893d8551b267c85e428a2c9f8734f1bb3b5",
  "@type": "Page",
  "vc:slug": "privacy-filter",
  "title": "Privacy Filter",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:adr-008",
      "vc:label": "ADR-008"
    },
    {
      "@id": "urn:visionflow:linked:agentic-systems-domain",
      "vc:label": "AgenticSystemsDomain"
    },
    {
      "@id": "urn:visionflow:linked:ccpa-regulation",
      "vc:label": "CCPA Regulation"
    },
    {
      "@id": "urn:visionflow:linked:classification-rules",
      "vc:label": "Classification Rules"
    },
    {
      "@id": "urn:visionflow:linked:compliance-with-ccpa",
      "vc:label": "Compliance with CCPA"
    },
    {
      "@id": "urn:visionflow:linked:compliance-with-gdpr",
      "vc:label": "Compliance with GDPR"
    },
    {
      "@id": "urn:visionflow:linked:data-anonymisation",
      "vc:label": "Data Anonymisation"
    },
    {
      "@id": "urn:visionflow:linked:data-governance-domain",
      "vc:label": "DataGovernanceDomain"
    },
    {
      "@id": "urn:visionflow:linked:filtering-layer",
      "vc:label": "FilteringLayer"
    },
    {
      "@id": "urn:visionflow:linked:gdpr-regulation",
      "vc:label": "GDPR Regulation"
    },
    {
      "@id": "urn:visionflow:linked:hipaa-regulation",
      "vc:label": "HIPAA Regulation"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning-optional",
      "vc:label": "Machine Learning (optional)"
    },
    {
      "@id": "urn:visionflow:linked:nostr-relay",
      "vc:label": "Nostr Relay"
    },
    {
      "@id": "urn:visionflow:linked:nostr-relay",
      "vc:label": "Nostr Relay"
    },
    {
      "@id": "urn:visionflow:linked:pattern-matching",
      "vc:label": "Pattern Matching"
    },
    {
      "@id": "urn:visionflow:linked:pii-detection",
      "vc:label": "PII Detection"
    },
    {
      "@id": "urn:visionflow:linked:pii-detection-best-practices",
      "vc:label": "PII Detection Best Practices"
    },
    {
      "@id": "urn:visionflow:linked:privacy-domain",
      "vc:label": "PrivacyDomain"
    },
    {
      "@id": "urn:visionflow:linked:privacy-policy",
      "vc:label": "Privacy Policy"
    },
    {
      "@id": "urn:visionflow:linked:privacy-preservation",
      "vc:label": "Privacy Preservation"
    },
    {
      "@id": "urn:visionflow:linked:privacy-preserving-data-emission",
      "vc:label": "Privacy-Preserving Data Emission"
    },
    {
      "@id": "urn:visionflow:linked:redaction-engine",
      "vc:label": "Redaction Engine"
    },
    {
      "@id": "urn:visionflow:linked:redaction-policies",
      "vc:label": "Redaction Policies"
    },
    {
      "@id": "urn:visionflow:linked:regular-expressions",
      "vc:label": "Regular Expressions"
    },
    {
      "@id": "urn:visionflow:linked:selective-disclosure",
      "vc:label": "Selective Disclosure"
    },
    {
      "@id": "urn:visionflow:linked:solid-pod-storage",
      "vc:label": "Solid Pod Storage"
    },
    {
      "@id": "urn:visionflow:owl:class:audit-trail",
      "vc:label": "Audit Trail"
    },
    {
      "@id": "urn:visionflow:owl:class:compliance-framework",
      "vc:label": "Compliance Framework"
    },
    {
      "@id": "urn:visionflow:owl:class:data-minimisation",
      "vc:label": "Data Minimisation"
    },
    {
      "@id": "urn:visionflow:owl:class:data-protection",
      "vc:label": "Data Protection"
    },
    {
      "@id": "urn:visionflow:owl:class:federation-surface",
      "vc:label": "Federation Surface"
    },
    {
      "@id": "urn:visionflow:owl:class:policy-enforcement",
      "vc:label": "Policy Enforcement"
    },
    {
      "@id": "urn:visionflow:owl:class:security-layer",
      "vc:label": "SecurityLayer"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Privacy Filter"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
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
  "@id": "urn:ngm:class:privacy-filter",
  "@type": "Class",
  "label": "Privacy Filter",
  "definition": "A sidecar service (ADR-008) that sanitises agent outputs before emission to Nostr Relay|Nostr relays or Federation Surface|federation surfaces, redacting personally identifiable information (PII), secrets, and regulated data, whilst maintaining data utility for downstream consumers and le...",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-security-and-identity",
      "label": "Security and Identity"
    },
    {
      "@id": "urn:ngm:class:security-layer",
      "label": "Security Layer"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:pattern-matching",
        "label": "Pattern Matching"
      },
      {
        "@id": "urn:ngm:class:pii-detection",
        "label": "PII Detection"
      },
      {
        "@id": "urn:ngm:class:redaction-engine",
        "label": "Redaction Engine"
      },
      {
        "@id": "urn:ngm:class:audit-trail",
        "label": "Audit Trail"
      },
      {
        "@id": "urn:ngm:class:policy-enforcement",
        "label": "Policy Enforcement"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:classification-rules",
        "label": "Classification Rules"
      },
      {
        "@id": "urn:ngm:class:machine-learning-discipline-optional",
        "label": "Machine Learning (optional)"
      },
      {
        "@id": "urn:ngm:class:privacy-policy",
        "label": "Privacy Policy"
      },
      {
        "@id": "urn:ngm:class:regular-expressions",
        "label": "Regular Expressions"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:compliance-with-ccpa",
        "label": "Compliance with CCPA"
      },
      {
        "@id": "urn:ngm:class:compliance-with-gdpr",
        "label": "Compliance with GDPR"
      },
      {
        "@id": "urn:ngm:class:privacy-preservation",
        "label": "Privacy Preservation"
      },
      {
        "@id": "urn:ngm:class:selective-disclosure",
        "label": "Selective Disclosure"
      },
      {
        "@id": "urn:ngm:class:data-minimisation",
        "label": "Data Minimisation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:data-anonymisation",
        "label": "Data Anonymisation"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-data-emission",
        "label": "Privacy-Preserving Data Emission"
      },
      {
        "@id": "urn:ngm:class:redaction-policies",
        "label": "Redaction Policies"
      }
    ]
  },
  "quality": 0.87,
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
  "@id": "urn:visionflow:annotation:link-resolutions:privacy-filter:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ceffb0b23fae2badbd2c6c03cfd7a893d8551b267c85e428a2c9f8734f1bb3b5"
  },
  "vc:resolutions": [
    {
      "raw": "[[ADR-008]]",
      "resolved": "urn:visionflow:linked:adr-008",
      "kind": "StubLink"
    },
    {
      "raw": "[[AgenticSystemsDomain]]",
      "resolved": "urn:visionflow:linked:agentic-systems-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[CCPA Regulation]]",
      "resolved": "urn:visionflow:linked:ccpa-regulation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Classification Rules]]",
      "resolved": "urn:visionflow:linked:classification-rules",
      "kind": "StubLink"
    },
    {
      "raw": "[[Compliance with CCPA]]",
      "resolved": "urn:visionflow:linked:compliance-with-ccpa",
      "kind": "StubLink"
    },
    {
      "raw": "[[Compliance with GDPR]]",
      "resolved": "urn:visionflow:linked:compliance-with-gdpr",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Anonymisation]]",
      "resolved": "urn:visionflow:linked:data-anonymisation",
      "kind": "StubLink"
    },
    {
      "raw": "[[DataGovernanceDomain]]",
      "resolved": "urn:visionflow:linked:data-governance-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[FilteringLayer]]",
      "resolved": "urn:visionflow:linked:filtering-layer",
      "kind": "StubLink"
    },
    {
      "raw": "[[GDPR Regulation]]",
      "resolved": "urn:visionflow:linked:gdpr-regulation",
      "kind": "StubLink"
    },
    {
      "raw": "[[HIPAA Regulation]]",
      "resolved": "urn:visionflow:linked:hipaa-regulation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Machine Learning (optional)]]",
      "resolved": "urn:visionflow:linked:machine-learning-optional",
      "kind": "StubLink"
    },
    {
      "raw": "[[Nostr Relay|Nostr relay]]",
      "resolved": "urn:visionflow:linked:nostr-relay",
      "kind": "StubLink"
    },
    {
      "raw": "[[Nostr Relay|Nostr relays]]",
      "resolved": "urn:visionflow:linked:nostr-relay",
      "kind": "StubLink"
    },
    {
      "raw": "[[Pattern Matching]]",
      "resolved": "urn:visionflow:linked:pattern-matching",
      "kind": "StubLink"
    },
    {
      "raw": "[[PII Detection]]",
      "resolved": "urn:visionflow:linked:pii-detection",
      "kind": "StubLink"
    },
    {
      "raw": "[[PII Detection Best Practices]]",
      "resolved": "urn:visionflow:linked:pii-detection-best-practices",
      "kind": "StubLink"
    },
    {
      "raw": "[[PrivacyDomain]]",
      "resolved": "urn:visionflow:linked:privacy-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Privacy Policy]]",
      "resolved": "urn:visionflow:linked:privacy-policy",
      "kind": "StubLink"
    },
    {
      "raw": "[[Privacy Preservation]]",
      "resolved": "urn:visionflow:linked:privacy-preservation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Privacy-Preserving Data Emission]]",
      "resolved": "urn:visionflow:linked:privacy-preserving-data-emission",
      "kind": "StubLink"
    },
    {
      "raw": "[[Redaction Engine]]",
      "resolved": "urn:visionflow:linked:redaction-engine",
      "kind": "StubLink"
    },
    {
      "raw": "[[Redaction Policies]]",
      "resolved": "urn:visionflow:linked:redaction-policies",
      "kind": "StubLink"
    },
    {
      "raw": "[[Regular Expressions]]",
      "resolved": "urn:visionflow:linked:regular-expressions",
      "kind": "StubLink"
    },
    {
      "raw": "[[Selective Disclosure]]",
      "resolved": "urn:visionflow:linked:selective-disclosure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Solid Pod Storage|Solid pod]]",
      "resolved": "urn:visionflow:linked:solid-pod-storage",
      "kind": "StubLink"
    },
    {
      "raw": "[[Audit Trail]]",
      "resolved": "urn:visionflow:owl:class:audit-trail",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Compliance Framework]]",
      "resolved": "urn:visionflow:owl:class:compliance-framework",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Minimisation]]",
      "resolved": "urn:visionflow:owl:class:data-minimisation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Protection]]",
      "resolved": "urn:visionflow:owl:class:data-protection",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Federation Surface|federation surfaces]]",
      "resolved": "urn:visionflow:owl:class:federation-surface",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Policy Enforcement]]",
      "resolved": "urn:visionflow:owl:class:policy-enforcement",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SecurityLayer]]",
      "resolved": "urn:visionflow:owl:class:security-layer",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A sidecar service (ADR-008) that sanitises agent outputs before emission to [[Nostr Relay|Nostr relays]] or [[Federation Surface|federation surfaces]], redacting personally identifiable information (PII), secrets, and regulated data, whilst maintaining data utility for downstream consumers and leaving a tamper-evident audit trail of redactions.

- ### Semantic Classification
  - owl-class:: infrastructure:PrivacyFilter
  - owl-role:: Process
  - belongs-to-domain:: [[AgenticSystemsDomain]], [[PrivacyDomain]], [[DataGovernanceDomain]]
  - implemented-in-layer:: [[SecurityLayer]], [[FilteringLayer]]

- ### Relationships
  - has-part:: [[PII Detection]], [[Redaction Engine]], [[Pattern Matching]], [[Audit Trail]], [[Policy Enforcement]]
  - requires:: [[Regular Expressions]], [[Machine Learning (optional)]], [[Privacy Policy]], [[Classification Rules]]
  - enables:: [[Privacy Preservation]], [[Compliance with GDPR]], [[Compliance with CCPA]], [[Data Minimisation]], [[Selective Disclosure]]
  - implements:: [[Privacy-Preserving Data Emission]], [[Data Anonymisation]], [[Redaction Policies]]
  - bridges-to:: [[Compliance Framework]] (domain: governance), [[GDPR Regulation]] (domain: governance), [[Data Protection]] (domain: governance)

- ### Content

  The Privacy Filter is a critical component that sits between agent logic and the [[Federation Surface|federation surfaces]] / [[Nostr Relay|Nostr relay]]. It intercepts all agent outputs (events, credentials, memory snapshots) and scrubs sensitive information before publishing.

  #### Privacy Threats in Agent Outputs

  Agents may inadvertently emit sensitive information:

  - **Personally Identifiable Information (PII)**: Names, email addresses, phone numbers, social security numbers, addresses.
  - **Secrets**: API keys, database passwords, cryptographic keys.
  - **Regulated Data**: Health information (HIPAA), financial information (PCI-DSS), government identifiers.
  - **Business Secrets**: Proprietary algorithms, confidential strategy, customer data.

  An agent processing customer support tickets might include customer names and contact details in its completion events. An agent fine-tuning a language model might expose training data samples. The Privacy Filter catches these before emission.

  #### Redaction Policies

  Each agent is configured with a **redaction policy** specifying what to filter and how:

  ```yaml
  privacy_filter:
    enabled: true
    policies:
      - name: email-addresses
        pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        action: redact
        replacement: '[EMAIL_REDACTED]'
      - name: ssn
        pattern: '^\d{3}-\d{2}-\d{4}$'
        action: redact
        replacement: '[SSN_REDACTED]'
      - name: api-keys
        pattern: 'sk_[a-zA-Z0-9]{32}'
        action: redact
        replacement: '[API_KEY_REDACTED]'
      - name: confidential-data
        classifier: ml-pii-detector
        confidence_threshold: 0.85
        action: redact
        replacement: '[CONFIDENTIAL_REDACTED]'
  ```

  #### Redaction Actions

  Different actions can be applied:

  - **Redact**: Replace with a placeholder (e.g., `[EMAIL_REDACTED]`).
  - **Hash**: Replace with a one-way hash of the value (preserves uniqueness for analytics without exposing the value).
  - **Truncate**: Keep only the first N characters.
  - **Remove**: Delete the field entirely.
  - **Encrypt**: Encrypt the value with a key held by an authorised party (asymmetric encryption).

  #### Detection Methods

  **1. Pattern-Based**
  Regular expressions match known PII patterns (email, phone, SSN, etc.). Fast and deterministic.

  **2. ML-Based**
  A pre-trained NER (Named Entity Recognition) or PII detection model identifies sensitive entities. More flexible but requires inference overhead and may have false positives.

  **3. Contextual**
  Rules based on field names, data sources, or data types. E.g., "anything from a healthcare data source should be considered sensitive".

  #### Audit Trail

  When a redaction occurs, the Privacy Filter logs:

  ```json
  {
    "timestamp": "2026-04-26T12:34:56Z",
    "agent": "did:nostr:0123...ab",
    "event_id": "urn:visionclaw:event:0123...ab:sha256-12-eeeeee",
    "field_redacted": "credentialSubject.customerName",
    "pattern_matched": "email-addresses",
    "original_hash": "sha256-12-fffffff",
    "replacement": "[EMAIL_REDACTED]"
  }
  ```

  This log is stored in the agent's [[Solid Pod Storage|Solid pod]] (in a private area, not exposed to relays). Later, auditors can review the log to verify that redactions were applied correctly.

  #### Data Minimisation and Selective Disclosure

  Privacy preservation is not just about redaction; it's about emitting only necessary information:

  - **Credential Minimisation**: A credential attests "task completed" without including the actual task output (which may contain sensitive data).
  - **Summary Instead of Details**: Emit "10 documents processed, 8 passed quality check" instead of individual document contents.
  - **Aggregate Statistics**: Emit aggregated metrics ("average latency 234ms") instead of per-task traces.

  The Privacy Filter can enforce minimisation rules:

  ```yaml
  privacy_filter:
    minimisation:
      - name: task-outputs
        source: agent-completion-events
        action: remove-field
        field: output  # Don't emit the full task output
      - name: memory-snapshots
        source: memory-snapshots
        action: sample
        sample_rate: 0.01  # Only emit 1% of memory snapshots
  ```

  #### Compliance Integration

  The Privacy Filter integrates with compliance frameworks:

  - **GDPR**: Redact personal data of EU residents; provide data deletion capabilities.
  - **CCPA**: Redact personal information; respect "do not sell" signals.
  - **HIPAA**: Redact health information for healthcare agents.
  - **PCI-DSS**: Redact payment card data for financial agents.

  Operators configure which regulations apply and the filter enforces them.

  #### Performance Considerations

  Filtering overhead should be minimal:

  - **Regex matching**: O(n) where n is output size; very fast.
  - **ML inference**: Slower; can be sampled (only filter 10% of events for cost savings) or run asynchronously (filter and re-emit later).

  By default, pattern-based filtering is applied to all outputs; ML-based filtering is optional and can be disabled or sampled.

  #### Transparent Redaction

  The Privacy Filter **maintains transparency**:

  - Users and auditors can see that redactions occurred (the logs are available).
  - The amount of redaction (number of fields redacted) is tracked.
  - If redactions are too aggressive (e.g., >50% of events are redacted), alerts are triggered for policy review.

  This is different from "silent" filtering, which hides that data was ever sensitive.

  #### Limitations and Tradeoffs

  - **False Positives**: Patterns may match innocuous text (e.g., a user typing "john@example.com" as a placeholder).
  - **False Negatives**: Sophisticated PII (e.g., reconstructed names from partial data) may not be caught.
  - **Context Loss**: Aggressive redaction reduces data utility for debugging and analytics.

  Operators must balance privacy and utility. The audit trail supports this tradeoff analysis.

- ### Provenance
  - sources:: [[ADR-008]], [[GDPR Regulation]], [[CCPA Regulation]], [[HIPAA Regulation]], [[PII Detection Best Practices]]
  - migration-date:: 2026-04-26T00:00:00Z
