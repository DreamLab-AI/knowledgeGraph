public:: true

# Pseudonymisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8d8a2a456fc4bde65bbc137e25cab3c950d9342074f101b1e26ae7812e502edb",
  "@type": "Page",
  "vc:slug": "pseudonymisation",
  "title": "Pseudonymisation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:gdpr-article-25",
      "vc:label": "GDPR Article 25"
    },
    {
      "@id": "urn:visionflow:linked:gdpr-article-32",
      "vc:label": "GDPR Article 32"
    },
    {
      "@id": "urn:visionflow:linked:gdpr-article-4-5",
      "vc:label": "GDPR Article 4(5)"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "vc:label": "AIEthicsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:conceptual-layer",
      "vc:label": "ConceptualLayer"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0427"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Pseudonymisation"
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
  "@id": "urn:ngm:class:pseudonymisation",
  "@type": "Class",
  "label": "Pseudonymisation",
  "definition": "Pseudonymisation is a data de-identification technique, defined in GDPR Article 4(5), that processes personal data such that it can no longer be attributed to a specific data subject without additional information held separately under technical and organisational safeguards. It replaces direct identifiers—names, national identification numbers, email addresses—with pseudonyms such as tokens, encrypted identifiers, or keyed hashes, preserving data utility for analytics and machine learning while reducing but not eliminating re-identification risk. Unlike full anonymisation, pseudonymisation is reversible by an authorised party holding the supplementary mapping or key material.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:cryptographic-key-management", "label": "Cryptographic Key Management"},
      {"@id": "urn:ngm:class:cryptographic-hash-function", "label": "Cryptographic Hash Function"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:differential-privacy", "label": "Differential Privacy"},
      {"@id": "urn:ngm:class:k-anonymity-in-datasets", "label": "k-Anonymity in Datasets"},
      {"@id": "urn:ngm:class:gdpr-compliance", "label": "GDPR Compliance"},
      {"@id": "urn:ngm:class:data-protection", "label": "Data Protection"},
      {"@id": "urn:ngm:class:privacy-by-design", "label": "Privacy By Design"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:data-minimisation", "label": "Data Minimisation"},
      {"@id": "urn:ngm:class:privacy-preserving-data-mining", "label": "Privacy Preserving Data Mining"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:ai-governance-and-ethics", "label": "AI Governance and Ethics"},
      {"@id": "urn:ngm:class:ai-fairness", "label": "AI Fairness"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:pseudonymisation:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8d8a2a456fc4bde65bbc137e25cab3c950d9342074f101b1e26ae7812e502edb"
  },
  "vc:resolutions": [
    {
      "raw": "[[GDPR Article 25]]",
      "resolved": "urn:visionflow:linked:gdpr-article-25",
      "kind": "StubLink"
    },
    {
      "raw": "[[GDPR Article 32]]",
      "resolved": "urn:visionflow:linked:gdpr-article-32",
      "kind": "StubLink"
    },
    {
      "raw": "[[GDPR Article 4(5)]]",
      "resolved": "urn:visionflow:linked:gdpr-article-4-5",
      "kind": "StubLink"
    },
    {
      "raw": "[[AIEthicsDomain]]",
      "resolved": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ConceptualLayer]]",
      "resolved": "urn:visionflow:owl:class:conceptual-layer",
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
  - Pseudonymisation is a data protection technique defined in GDPR Article 4(5) as processing personal data such that it can no longer be attributed to a specific data subject without additional information, which is kept separately under technical and organizational measures preventing re-identification. This approach replaces direct identifiers (names, email addresses, national identification numbers) with pseudonyms (aliases, tokens, or encrypted identifiers) while maintaining data utility for analysis, creating reversible anonymization that reduces but does not eliminate re-identification risk unlike full anonymization which irreversibly severs links between data and individuals. Implementation techniques include cryptographic hashing applying one-way hash functions (SHA-256, HMAC) with secret keys converting identifiers to fixed-length pseudonyms deterministically enabling consistent linkage across datasets while preventing reverse lookup without keys, tokenization replacing sensitive identifiers with randomly generated tokens stored in secure mapping tables enabling authorized re-identification when necessary, encryption-based pseudonymisation using symmetric or asymmetric encryption with keys managed separately from pseudonymized data, and deterministic or format-preserving techniques maintaining data structure (preserving ZIP code format, date formats) for compatibility with legacy systems. GDPR recognition appears across multiple articles including Article 4(5) defining the technique, Article 25 recommending pseudonymisation as privacy-by-design measure, Article 32 listing it as appropriate security measure, and Recital 28 noting pseudonymisation reduces risks to data subjects allowing data controllers to meet protection obligations while permitting useful data processing. Benefits include reduced re-identification risk as pseudonymized data presents higher barriers to linking records with real identities, regulatory flexibility with GDPR treating pseudonymized data more favorably than identifiable personal data for certain processing activities, data utility preservation enabling meaningful analytics, reporting, and machine learning on protected datasets while maintaining referential integrity, and breach impact mitigation as stolen pseudonymized data has limited value without corresponding key material or mapping tables. Applications in AI systems span training data protection pseudonymizing subjects in training datasets preventing model memorization of real identities, cross-organizational collaboration enabling data sharing for collaborative ML without exposing participant identities, longitudinal analysis tracking individuals across time periods for behavior modeling while protecting identity, and audit trail privacy maintaining activity logs for security monitoring without storing plaintext user identifiers, though limitations include remaining personal data status under GDPR as pseudonymized data still constitutes personal data subject to regulatory requirements, linkability vulnerabilities where deterministic pseudonymisation enables tracking across contexts potentially revealing behavioral patterns, key management complexity requiring secure storage and access controls for re-identification keys, and potential re-identification through auxiliary information attacks combining pseudonymized data with external datasets to unm ask identities.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Pseudonymisation
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  Pseudonymisation requires Cryptographic Key Management to secure the mapping between pseudonyms and real identities, and typically uses a Cryptographic Hash Function with a secret key (HMAC) to produce deterministic pseudonyms. It is closely related to Differential Privacy and k-Anonymity in Datasets, which are complementary de-identification approaches targeting different threat models. It enables Data Minimisation by reducing the granularity of identifying information in downstream processing and supports Privacy Preserving Data Mining. Regulatory alignment with GDPR Compliance and Data Protection frameworks is central to its application, and it is an operationalisation of Privacy By Design principles.

- ### Content

  Pseudonymisation implementation takes several practical forms. Cryptographic hashing with a secret key (keyed HMAC) transforms direct identifiers into fixed-length pseudonyms deterministically, enabling consistent linkage across datasets without exposing the original identifiers. Tokenisation replaces identifiers with randomly generated tokens stored in a secure mapping table, enabling authorised re-identification on request. Encryption-based approaches apply reversible symmetric or asymmetric encryption, with keys held in a separate, access-controlled key management system. Format-preserving encryption maintains the structural properties of the original identifier—such as postal code format or date format—for compatibility with legacy schema constraints.

  Under GDPR, pseudonymised data remains personal data (Recital 26): it is still subject to data subject rights and processing restrictions, but the regulation offers processing flexibilities and reduced obligations where pseudonymisation is in place. Article 25 requires data controllers to implement pseudonymisation as a technical measure supporting data protection by design. Article 32 lists it as an appropriate security measure proportionate to risk. The combination of pseudonymisation with Data Minimisation—collecting only pseudonymised identifiers rather than full names—reduces the severity of data breach consequences, because stolen pseudonyms have limited value to an attacker without the corresponding key material.

  In AI systems, pseudonymisation is applied at dataset creation—replacing subject identifiers in training data—and at inference time—masking identifiers in inputs to model APIs. Both applications reduce the risk that trained models memorise and later reproduce personal information in their outputs. However, pseudonymisation is not a complete defence against model inversion or membership inference attacks, which can sometimes recover information about training data without needing the original identifiers.

- ### Provenance
  - sources:: [[GDPR Article 4(5)]], [[GDPR Article 25]], [[GDPR Article 32]]
  - migration-date:: 2026-04-26T00:00:00Z
