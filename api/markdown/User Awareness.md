schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#UserAwareness
legacy_uri:: urn:visionclaw:concept:spatial-computing:user-awareness
public:: true

# User Awareness
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5a9b766f1ce6a36ad52724fe2889fb18ca2d46f4a83b42680065b89d76e00694",
  "@type": "Page",
  "vc:slug": "user-awareness",
  "title": "User Awareness",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:user-education",
      "vc:label": "User Education"
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
      "vc:value": "sha256-12-c97f6aa49127"
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
      "vc:value": "http://narrativegoldmine.com/spatial-computing#UserAwareness"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10095"
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
      "vc:value": "User Awareness"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:user-awareness"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:user-awareness"
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
    "@id": "urn:visionflow:page:5a9b766f1ce6a36ad52724fe2889fb18ca2d46f4a83b42680065b89d76e00694@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:visionflow:owl:class:user-awareness",
  "@type": "OntologyClass",
  "label": "User Awareness",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:user-education",
      "vc:label": "User Education"
    }
  ],
  "vc:sourceDomain": "spatial-computing",
  "vc:status": "active",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:5a9b766f1ce6a36ad52724fe2889fb18ca2d46f4a83b42680065b89d76e00694"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:5a9b766f1ce6a36ad52724fe2889fb18ca2d46f4a83b42680065b89d76e00694@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "The understanding and knowledge that users possess about digital systems, privacy practices, security risks, and their rights when interacting with metaverse platforms and virtual environments.",
  "vc:qualityScore": {
    "@value": "0.50",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:user-awareness:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5a9b766f1ce6a36ad52724fe2889fb18ca2d46f4a83b42680065b89d76e00694"
  },
  "vc:resolutions": [
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[User Education]]",
      "resolved": "urn:visionflow:owl:class:user-education",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:5a9b766f1ce6a36ad52724fe2889fb18ca2d46f4a83b42680065b89d76e00694@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The understanding and knowledge that users possess about digital systems, privacy practices, security risks, and their rights when interacting with metaverse platforms and virtual environments.

- ### Semantic Classification
  - owl-class:: spatial-computing:UserAwareness
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[User Education]]

- ### Content

  - ## Overview
  - User awareness encompasses the knowledge users need to safely and effectively participate in digital environments. This includes understanding data collection practices, security risks, platform policies, and mechanisms for exercising their rights.
  - ## Technical Details
  - ### Awareness Categories
		- **Privacy Awareness**: Understanding data collection and usage
		- **Security Awareness**: Recognizing threats and protective measures
		- **Rights Awareness**: Knowledge of user rights and remedies
		- **Platform Literacy**: Understanding platform rules and features
  - ### Education Mechanisms
		- Onboarding tutorials and walkthroughs
		- Just-in-time contextual guidance
		- Interactive privacy dashboards
		- Risk visualization tools
  - ### Metaverse-Specific Concerns
		- Biometric data collection awareness
		- Virtual harassment and safety
		- Digital asset security
		- Cross-platform data sharing
  - ## Applications
  - Platform onboarding experiences
  - Security training for VR environments
  - Privacy preference management
  - Parental controls and child safety
  - Accessibility feature discovery

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
