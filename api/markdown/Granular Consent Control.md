schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#GranularConsentControl
legacy_uri:: urn:visionclaw:concept:spatial-computing:granular-consent-control
public:: true

# Granular Consent Control
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ef82115f65d5e0801ccc9f35a037b6ff7ec839de1074aa6eb0387a26c7b9af4a",
  "@type": "Page",
  "vc:slug": "granular-consent-control",
  "title": "Granular Consent Control",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:user-data-autonomy",
      "vc:label": "User Data Autonomy"
    },
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:privacy-framework",
      "vc:label": "Privacy Framework"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-63bb0bbca9ff"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#GranularConsentControl"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9912"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Granular Consent Control"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:granular-consent-control"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:granular-consent-control"
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
    "@id": "urn:visionflow:page:ef82115f65d5e0801ccc9f35a037b6ff7ec839de1074aa6eb0387a26c7b9af4a@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:granular-consent-control",
  "@type": "Class",
  "label": "Granular Consent Control",
  "definition": "Privacy management mechanisms enabling users to selectively authorise specific types of data collection and processing within metaverse environments, allowing separate consent decisions for analytics, advertising, cross-device tracking, and data transfers while maintaining GDPR compliance and use...",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:privacy-framework",
      "label": "Privacy Framework"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:user-data-autonomy",
        "label": "User Data Autonomy"
      }
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:granular-consent-control:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ef82115f65d5e0801ccc9f35a037b6ff7ec839de1074aa6eb0387a26c7b9af4a"
  },
  "vc:resolutions": [
    {
      "raw": "[[User Data Autonomy]]",
      "resolved": "urn:visionflow:linked:user-data-autonomy",
      "kind": "StubLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Privacy Framework]]",
      "resolved": "urn:visionflow:owl:class:privacy-framework",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:ef82115f65d5e0801ccc9f35a037b6ff7ec839de1074aa6eb0387a26c7b9af4a@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Privacy management mechanisms enabling users to selectively authorise specific types of data collection and processing within metaverse environments, allowing separate consent decisions for analytics, advertising, cross-device tracking, and data transfers while maintaining GDPR compliance and user autonomy over personal information.

- ### Semantic Classification
  - owl-class:: spatial-computing:GranularConsentControl
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Privacy Framework]]
  - enables:: [[User Data Autonomy]]
  - bridges-to:: [[Computer Vision]]

- ### Content

  ## GDPR Requirements

  ### Consent Principles
  - Explicit, freely given consent
  - Specific and informed authorisation
  - Data minimisation compliance
  - Purpose limitation adherence
  - Fairness and transparency

  ### Metaverse Challenges
  - Unique platform characteristics complicate compliance
  - Continuous data collection requirements
  - Real-time sensor data processing
  - Cross-platform user tracking

  ## Category-Based Controls

  ### Consent Categories
  - Analytics tracking permissions
  - Advertising personalisation settings
  - Cross-device measurement authorisation
  - Third-party data sharing controls
  - International transfer consent

  ### User Control Features
  - Separate consent for each category
  - Precise data usage control
  - Partial consent capability
  - Withdrawal mechanisms

  ## Regional Requirements

  ### EEA and UK Users
  - Explicit opt-in consent required
  - Detailed processing explanations
  - Clear withdrawal mechanisms
  - Cross-border transfer controls
  - Advertising and analytics separation

  ### 2024 Enforcement
  - EUR 2.92 billion in GDPR fines (2024)
  - Meta Pixel implementation penalties
  - Advertising data collection focus
  - Stricter compliance requirements

  ## Technical Challenges

  ### Device Limitations
  - Screen-less device consent difficulties
  - Privacy policy display challenges
  - Sensor-based consent collection
  - Informed consent feasibility

  ### Data Collection Conflicts
  - Data minimisation vs platform requirements
  - Real-time analysis demands
  - Sensor data volume increase
  - Enhanced experience trade-offs

  ## Jurisdictional Complexity

  ### Multi-Law Compliance
  - Geo-specific privacy laws
  - Inconsistent global standards
  - Virtual world jurisdiction questions
  - Service provider matrix complexity

  ### Controller Relationships
  - Multiple data controllers
  - Joint controller arrangements
  - Processor relationships
  - Overlapping regulatory requirements

  ## Consent Management Platforms

  ### Technical Solutions
  - Consent mode implementations
  - Category filtering systems
  - Preference centres
  - Audit trail maintenance

  ### Platform Integration
  - Meta Consent Mode
  - Google Consent Mode V2
  - First-party data collection
  - Third-party cookie alternatives

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
