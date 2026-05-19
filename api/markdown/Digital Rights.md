schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#DigitalRights
legacy_uri:: urn:visionclaw:concept:spatial-computing:digital-rights
public:: true

# Digital Rights
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ed43f9be32cf7a4e5dcc00050d7148583a21534b550b1c6d96060c95892e4e9b",
  "@type": "Page",
  "vc:slug": "digital-rights",
  "title": "Digital Rights",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:data-sovereignty",
      "vc:label": "Data Sovereignty"
    },
    {
      "@id": "urn:visionflow:linked:digital-freedom",
      "vc:label": "Digital Freedom"
    },
    {
      "@id": "urn:visionflow:linked:e-idas",
      "vc:label": "eIDAS"
    },
    {
      "@id": "urn:visionflow:linked:enforcement-mechanisms",
      "vc:label": "Enforcement Mechanisms"
    },
    {
      "@id": "urn:visionflow:linked:gdpr",
      "vc:label": "GDPR"
    },
    {
      "@id": "urn:visionflow:linked:privacy-protection",
      "vc:label": "Privacy Protection"
    },
    {
      "@id": "urn:visionflow:linked:technical-safeguards",
      "vc:label": "Technical Safeguards"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-services-act",
      "vc:label": "Digital Services Act"
    },
    {
      "@id": "urn:visionflow:owl:class:eu-ai-act",
      "vc:label": "EU AI Act"
    },
    {
      "@id": "urn:visionflow:owl:class:human-rights",
      "vc:label": "Human Rights"
    },
    {
      "@id": "urn:visionflow:owl:class:legal-framework",
      "vc:label": "Legal Framework"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
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
      "vc:value": "sha256-12-c5b01153baf5"
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
      "vc:value": "http://narrativegoldmine.com/spatial-computing#DigitalRights"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9868"
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
      "vc:value": "Digital Rights"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:digital-rights"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:digital-rights"
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
    "@id": "urn:visionflow:page:ed43f9be32cf7a4e5dcc00050d7148583a21534b550b1c6d96060c95892e4e9b@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:digital-rights",
  "@type": "Class",
  "label": "Digital Rights",
  "definition": "The human rights and freedoms applicable to digital contexts including privacy, data protection, freedom of expression, access to information, and digital ownership within virtual environments, metaverse platforms, and online spaces, increasingly codified through international frameworks and nati...",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:human-rights",
      "label": "Human Rights"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:enforcement-mechanisms",
        "label": "Enforcement Mechanisms"
      },
      {
        "@id": "urn:ngm:class:technical-safeguards",
        "label": "Technical Safeguards"
      },
      {
        "@id": "urn:ngm:class:legal-framework",
        "label": "Legal Framework"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-sovereignty",
        "label": "Data Sovereignty"
      },
      {
        "@id": "urn:ngm:class:digital-freedom",
        "label": "Digital Freedom"
      },
      {
        "@id": "urn:ngm:class:privacy-protection",
        "label": "Privacy Protection"
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
  "@id": "urn:visionflow:annotation:link-resolutions:digital-rights:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ed43f9be32cf7a4e5dcc00050d7148583a21534b550b1c6d96060c95892e4e9b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Data Sovereignty]]",
      "resolved": "urn:visionflow:linked:data-sovereignty",
      "kind": "StubLink"
    },
    {
      "raw": "[[Digital Freedom]]",
      "resolved": "urn:visionflow:linked:digital-freedom",
      "kind": "StubLink"
    },
    {
      "raw": "[[eIDAS]]",
      "resolved": "urn:visionflow:linked:e-idas",
      "kind": "StubLink"
    },
    {
      "raw": "[[Enforcement Mechanisms]]",
      "resolved": "urn:visionflow:linked:enforcement-mechanisms",
      "kind": "StubLink"
    },
    {
      "raw": "[[GDPR]]",
      "resolved": "urn:visionflow:linked:gdpr",
      "kind": "StubLink"
    },
    {
      "raw": "[[Privacy Protection]]",
      "resolved": "urn:visionflow:linked:privacy-protection",
      "kind": "StubLink"
    },
    {
      "raw": "[[Technical Safeguards]]",
      "resolved": "urn:visionflow:linked:technical-safeguards",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Services Act]]",
      "resolved": "urn:visionflow:owl:class:digital-services-act",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[EU AI Act]]",
      "resolved": "urn:visionflow:owl:class:eu-ai-act",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Human Rights]]",
      "resolved": "urn:visionflow:owl:class:human-rights",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Legal Framework]]",
      "resolved": "urn:visionflow:owl:class:legal-framework",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:ed43f9be32cf7a4e5dcc00050d7148583a21534b550b1c6d96060c95892e4e9b@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The human rights and freedoms applicable to digital contexts including privacy, data protection, freedom of expression, access to information, and digital ownership within virtual environments, metaverse platforms, and online spaces, increasingly codified through international frameworks and national legislation.

bridges-to:: [[Blockchain]]

- ### Semantic Classification
  - owl-class:: spatial-computing:DigitalRights
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Human Rights]]
  - requires:: [[Legal Framework]], [[Technical Safeguards]], [[Enforcement Mechanisms]]
  - enables:: [[Privacy Protection]], [[Data Sovereignty]], [[Digital Freedom]]

- ### Content

  - ## Technical Details
  - **Core Digital Rights**:
		- Privacy and data protection
		- Freedom of expression online
		- Access to digital services
		- Digital identity ownership
		- Fair algorithmic treatment
  - **Regulatory Frameworks**:
		- EU GDPR: Personal data protection
		- Digital Services Act: Platform accountability
		- AI Act: Algorithmic transparency
		- eIDAS: Digital identity standards
  - **Metaverse Considerations**:
		- Avatar and identity rights
		- Virtual property ownership
		- Immersive content regulation
		- Cross-platform data portability
  - **Enforcement Challenges**: Jurisdictional complexity, anonymity, decentralized platforms
  - ## Applications
  - Privacy-preserving technologies
  - Content moderation policies
  - Digital identity protection
  - Algorithmic accountability
  - Metaverse governance frameworks

- ### Provenance
  - sources:: [[GDPR]], [[Digital Services Act]], [[EU AI Act]], [[eIDAS]]
  - migration-date:: 2026-04-26T00:00:00Z
