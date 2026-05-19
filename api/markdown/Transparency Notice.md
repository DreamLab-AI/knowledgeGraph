public:: true

# Transparency Notice
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6327e3399b203c1218da33c0ca4a1631ea14be21efe38ff6e6e95768b32860d3",
  "@type": "Page",
  "vc:slug": "transparency-notice",
  "title": "Transparency Notice",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:privacy-disclosure",
      "vc:label": "Privacy Disclosure"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10086"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Transparency Notice"
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
  "@id": "urn:ngm:class:transparency-notice",
  "@type": "Class",
  "label": "Transparency Notice",
  "definition": "A formal disclosure document or notification that informs users about data collection practices, processing purposes, privacy policies, and their rights regarding personal information handling in digital platforms and metaverse environments.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    },
    {
      "@id": "urn:ngm:class:privacy-disclosure",
      "label": "Privacy Disclosure"
    }
  ],
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:transparency-notice:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6327e3399b203c1218da33c0ca4a1631ea14be21efe38ff6e6e95768b32860d3"
  },
  "vc:resolutions": [
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Privacy Disclosure]]",
      "resolved": "urn:visionflow:owl:class:privacy-disclosure",
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
  - A formal disclosure document or notification that informs users about data collection practices, processing purposes, privacy policies, and their rights regarding personal information handling in digital platforms and metaverse environments.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:TransparencyNotice
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Privacy Disclosure]]

- ### Content

  - ## Overview
  - Transparency notices are required disclosures that inform users about how their data is collected, processed, and used. Under GDPR and similar regulations, organizations must provide clear, accessible information about data practices before processing personal data.
  - ## Technical Details
  - ### Required Elements (GDPR)
		- Identity of data controller
		- Purpose of data processing
		- Legal basis for processing
		- Data retention periods
		- User rights and how to exercise them
		- Third-party data sharing details
  - ### Delivery Methods
		- **Just-in-Time Notices**: Displayed at point of data collection
		- **Layered Notices**: Summary with links to detailed information
		- **Privacy Dashboards**: Interactive interfaces for viewing practices
		- **Machine-Readable Formats**: Structured data for automated processing
  - ### Metaverse-Specific Considerations
		- Biometric data collection disclosure
		- Behavioral tracking in virtual environments
		- Cross-platform data sharing
		- AI-driven profiling transparency
  - ## Applications
  - Metaverse platform onboarding flows
  - VR/AR app privacy disclosures
  - Smart contract interaction warnings
  - Cookie consent mechanisms
  - Third-party integration notifications

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
