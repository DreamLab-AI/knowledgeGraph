iri:: http://narrativegoldmine.com/infrastructure#PrivacyFilter
uri:: urn:visionclaw:concept:infrastructure:privacy-filter
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:infrastructure:privacy-filter
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: infrastructure
preferred-term:: Privacy Filter
content-hash:: sha256-12-dae0f1c2b3a4
status:: complete
maturity:: established
quality-score:: 0.87
authority-score:: 0.90
version:: 1.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T00:00:00Z
public:: true

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
