schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/artificial-intelligence#Pseudonymisation
legacy_uri:: urn:visionclaw:concept:artificial-intelligence:pseudonymisation
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
      "@id": "urn:visionflow:owl:class:aiethics-domain",
      "vc:label": "AIEthicsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:conceptual-layer",
      "vc:label": "ConceptualLayer"
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
      "vc:value": "sha256-12-51b824268c91"
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
      "vc:value": "http://narrativegoldmine.com/artificial-intelligence#Pseudonymisation"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0427"
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
      "vc:value": "Pseudonymisation"
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
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:pseudonymisation"
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
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:pseudonymisation"
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
    "@id": "urn:visionflow:page:8d8a2a456fc4bde65bbc137e25cab3c950d9342074f101b1e26ae7812e502edb@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:pseudonymisation",
  "@type": "OntologyClass",
  "label": "Pseudonymisation",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "artificial-intelligence"
    }
  ],
  "vc:sourceDomain": "artificial-intelligence",
  "vc:status": "draft",
  "vc:maturity": "mature",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:8d8a2a456fc4bde65bbc137e25cab3c950d9342074f101b1e26ae7812e502edb"
  },
  "vc:inferenceRule": "R5DomainRootFallback",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:8d8a2a456fc4bde65bbc137e25cab3c950d9342074f101b1e26ae7812e502edb@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Pseudonymisation is a data protection technique defined in GDPR Article 4(5) as processing personal data such that it can no longer be attributed to a specific data subject without additional information, which is kept separately under technical and organizational measures preventing re-identification. This approach replaces direct identifiers (names, email addresses, national identification numbers) with pseudonyms (aliases, tokens, or encrypted identifiers) while maintaining data utility for analysis, creating reversible anonymization that reduces but does not eliminate re-identification risk unlike full anonymization which irreversibly severs links between data and individuals. Implementation techniques include cryptographic hashing applying one-way hash functions (SHA-256, HMAC) with secret keys converting identifiers to fixed-length pseudonyms deterministically enabling consistent linkage across datasets while preventing reverse lookup without keys, tokenization replacing sensitive identifiers with randomly generated tokens stored in secure mapping tables enabling authorized re-identification when necessary, encryption-based pseudonymisation using symmetric or asymmetric encry",
  "vc:qualityScore": {
    "@value": "0.35",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.95",
    "@type": "xsd:float"
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
      "resolved": "urn:visionflow:owl:class:aiethics-domain",
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:8d8a2a456fc4bde65bbc137e25cab3c950d9342074f101b1e26ae7812e502edb@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  - <!-- No relationships defined -->

- ### Content
  0427 Pseudonymisation — content pending enrichment.

- ### Provenance
  - sources:: [[GDPR Article 4(5)]], [[GDPR Article 25]], [[GDPR Article 32]]
  - migration-date:: 2026-04-26T00:00:00Z
