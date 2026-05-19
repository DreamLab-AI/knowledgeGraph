public:: true

# Biometric Binding Mechanism
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:56d1b7db3ab197eb27be0e9a230745dd18b641567fcefd02b80503b23e89b373",
  "@type": "Page",
  "vc:slug": "biometric-binding-mechanism",
  "title": "Biometric Binding Mechanism",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:anti-spoofing-module",
      "vc:label": "Anti-Spoofing Module"
    },
    {
      "@id": "urn:visionflow:linked:authentication-server",
      "vc:label": "Authentication Server"
    },
    {
      "@id": "urn:visionflow:linked:biometric-template-database",
      "vc:label": "Biometric Template Database"
    },
    {
      "@id": "urn:visionflow:linked:edge-layer",
      "vc:label": "EdgeLayer"
    },
    {
      "@id": "urn:visionflow:linked:encrypted-storage",
      "vc:label": "Encrypted Storage"
    },
    {
      "@id": "urn:visionflow:linked:facial-recognition-sensor",
      "vc:label": "Facial Recognition Sensor"
    },
    {
      "@id": "urn:visionflow:linked:fido-alliance",
      "vc:label": "FIDO Alliance"
    },
    {
      "@id": "urn:visionflow:linked:fingerprint-scanner",
      "vc:label": "Fingerprint Scanner"
    },
    {
      "@id": "urn:visionflow:linked:iris-recognition-camera",
      "vc:label": "Iris Recognition Camera"
    },
    {
      "@id": "urn:visionflow:linked:iso-19794",
      "vc:label": "ISO 19794"
    },
    {
      "@id": "urn:visionflow:linked:multi-factor-authentication",
      "vc:label": "Multi-Factor Authentication"
    },
    {
      "@id": "urn:visionflow:linked:secure-element-chip",
      "vc:label": "Secure Element Chip"
    },
    {
      "@id": "urn:visionflow:linked:template-matching-processor",
      "vc:label": "Template Matching Processor"
    },
    {
      "@id": "urn:visionflow:linked:zero-trust-security-framework",
      "vc:label": "Zero Trust Security Framework"
    },
    {
      "@id": "urn:visionflow:owl:class:access-control",
      "vc:label": "Access Control"
    },
    {
      "@id": "urn:visionflow:owl:class:identity-management-system",
      "vc:label": "Identity Management System"
    },
    {
      "@id": "urn:visionflow:owl:class:identity-verification",
      "vc:label": "Identity Verification"
    },
    {
      "@id": "urn:visionflow:owl:class:infrared-illuminator",
      "vc:label": "Infrared Illuminator"
    },
    {
      "@id": "urn:visionflow:owl:class:non-repudiation",
      "vc:label": "Non-Repudiation"
    },
    {
      "@id": "urn:visionflow:owl:class:optical-sensor-array",
      "vc:label": "Optical Sensor Array"
    },
    {
      "@id": "urn:visionflow:owl:class:power-supply",
      "vc:label": "Power Supply"
    },
    {
      "@id": "urn:visionflow:owl:class:public-key-infrastructure",
      "vc:label": "Public Key Infrastructure"
    },
    {
      "@id": "urn:visionflow:owl:class:trust-and-governance-domain",
      "vc:label": "TrustAndGovernanceDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20151"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Biometric Binding Mechanism"
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
  "@id": "urn:ngm:class:biometric-binding-mechanism",
  "@type": "Class",
  "label": "Biometric Binding Mechanism",
  "definition": "Physical hardware device that captures and verifies biometric traits (fingerprints, iris patterns, facial geometry) to bind digital identities to authenticated users.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-governance-and-safety",
      "label": "Governance and Safety"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:facial-recognition-sensor",
        "label": "Facial Recognition Sensor"
      },
      {
        "@id": "urn:ngm:class:fingerprint-scanner",
        "label": "Fingerprint Scanner"
      },
      {
        "@id": "urn:ngm:class:iris-recognition-camera",
        "label": "Iris Recognition Camera"
      },
      {
        "@id": "urn:ngm:class:secure-element-chip",
        "label": "Secure Element Chip"
      },
      {
        "@id": "urn:ngm:class:template-matching-processor",
        "label": "Template Matching Processor"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:anti-spoofing-module",
        "label": "Anti-Spoofing Module"
      },
      {
        "@id": "urn:ngm:class:encrypted-storage",
        "label": "Encrypted Storage"
      },
      {
        "@id": "urn:ngm:class:infrared-illuminator",
        "label": "Infrared Illuminator"
      },
      {
        "@id": "urn:ngm:class:optical-sensor-array",
        "label": "Optical Sensor Array"
      },
      {
        "@id": "urn:ngm:class:power-supply",
        "label": "Power Supply"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:multi-factor-authentication",
        "label": "Multi-Factor Authentication"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      },
      {
        "@id": "urn:ngm:class:non-repudiation",
        "label": "Non-Repudiation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:zero-trust-security-framework",
        "label": "Zero Trust Security Framework"
      },
      {
        "@id": "urn:ngm:class:identity-management-system",
        "label": "Identity Management System"
      }
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:biometric-binding-mechanism:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:56d1b7db3ab197eb27be0e9a230745dd18b641567fcefd02b80503b23e89b373"
  },
  "vc:resolutions": [
    {
      "raw": "[[Anti-Spoofing Module]]",
      "resolved": "urn:visionflow:linked:anti-spoofing-module",
      "kind": "StubLink"
    },
    {
      "raw": "[[Authentication Server]]",
      "resolved": "urn:visionflow:linked:authentication-server",
      "kind": "StubLink"
    },
    {
      "raw": "[[Biometric Template Database]]",
      "resolved": "urn:visionflow:linked:biometric-template-database",
      "kind": "StubLink"
    },
    {
      "raw": "[[EdgeLayer]]",
      "resolved": "urn:visionflow:linked:edge-layer",
      "kind": "StubLink"
    },
    {
      "raw": "[[Encrypted Storage]]",
      "resolved": "urn:visionflow:linked:encrypted-storage",
      "kind": "StubLink"
    },
    {
      "raw": "[[Facial Recognition Sensor]]",
      "resolved": "urn:visionflow:linked:facial-recognition-sensor",
      "kind": "StubLink"
    },
    {
      "raw": "[[FIDO Alliance]]",
      "resolved": "urn:visionflow:linked:fido-alliance",
      "kind": "StubLink"
    },
    {
      "raw": "[[Fingerprint Scanner]]",
      "resolved": "urn:visionflow:linked:fingerprint-scanner",
      "kind": "StubLink"
    },
    {
      "raw": "[[Iris Recognition Camera]]",
      "resolved": "urn:visionflow:linked:iris-recognition-camera",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO 19794]]",
      "resolved": "urn:visionflow:linked:iso-19794",
      "kind": "StubLink"
    },
    {
      "raw": "[[Multi-Factor Authentication]]",
      "resolved": "urn:visionflow:linked:multi-factor-authentication",
      "kind": "StubLink"
    },
    {
      "raw": "[[Secure Element Chip]]",
      "resolved": "urn:visionflow:linked:secure-element-chip",
      "kind": "StubLink"
    },
    {
      "raw": "[[Template Matching Processor]]",
      "resolved": "urn:visionflow:linked:template-matching-processor",
      "kind": "StubLink"
    },
    {
      "raw": "[[Zero Trust Security Framework]]",
      "resolved": "urn:visionflow:linked:zero-trust-security-framework",
      "kind": "StubLink"
    },
    {
      "raw": "[[Access Control]]",
      "resolved": "urn:visionflow:owl:class:access-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Management System]]",
      "resolved": "urn:visionflow:owl:class:identity-management-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Verification]]",
      "resolved": "urn:visionflow:owl:class:identity-verification",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Infrared Illuminator]]",
      "resolved": "urn:visionflow:owl:class:infrared-illuminator",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Non-Repudiation]]",
      "resolved": "urn:visionflow:owl:class:non-repudiation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Optical Sensor Array]]",
      "resolved": "urn:visionflow:owl:class:optical-sensor-array",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Power Supply]]",
      "resolved": "urn:visionflow:owl:class:power-supply",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Public Key Infrastructure]]",
      "resolved": "urn:visionflow:owl:class:public-key-infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[TrustAndGovernanceDomain]]",
      "resolved": "urn:visionflow:owl:class:trust-and-governance-domain",
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
  - Physical hardware device that captures and verifies biometric traits (fingerprints, iris patterns, facial geometry) to bind digital identities to authenticated users.

- ### Semantic Classification
  - owl-class:: spatial-computing:BiometricBindingMechanism
  - owl-role:: Object
  - owl-inferred:: spatial-computing:PhysicalObject
  - belongs-to-domain:: [[TrustAndGovernanceDomain]]
  - implemented-in-layer:: [[EdgeLayer]]

- ### Relationships
  - has-part:: [[Fingerprint Scanner]], [[Iris Recognition Camera]], [[Facial Recognition Sensor]], [[Secure Element Chip]], [[Template Matching Processor]]
  - is-part-of:: [[Identity Management System]], [[Zero Trust Security Framework]]
  - requires:: [[Optical Sensor Array]], [[Infrared Illuminator]], [[Anti-Spoofing Module]], [[Encrypted Storage]], [[Power Supply]]
  - enables:: [[Multi-Factor Authentication]], [[Identity Verification]], [[Access Control]], [[Non-Repudiation]]
  - depends-on:: [[Biometric Template Database]], [[Public Key Infrastructure]], [[Authentication Server]]

- ### Content
  Biometric Binding Mechanism — content pending enrichment.

- ### Provenance
  - sources:: [[ISO 19794]], [[FIDO Alliance]]
  - migration-date:: 2026-04-26T00:00:00Z
