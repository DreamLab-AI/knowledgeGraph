schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#AuthenticationStandards
legacy_uri:: urn:visionclaw:concept:infrastructure:authentication-standards
public:: true

# Authentication Standards
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5586ce89f21bd9888d067adba2416cec3ae733ea252be0d977817fd0c5e19591",
  "@type": "Page",
  "vc:slug": "authentication-standards",
  "title": "Authentication Standards",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:client-implementation",
      "vc:label": "Client Implementation"
    },
    {
      "@id": "urn:visionflow:linked:hardware-authenticators",
      "vc:label": "Hardware Authenticators"
    },
    {
      "@id": "urn:visionflow:linked:passwordless-authentication",
      "vc:label": "Passwordless Authentication"
    },
    {
      "@id": "urn:visionflow:linked:phishing-resistance",
      "vc:label": "Phishing Resistance"
    },
    {
      "@id": "urn:visionflow:linked:secure-platform-access",
      "vc:label": "Secure Platform Access"
    },
    {
      "@id": "urn:visionflow:linked:security-standards",
      "vc:label": "Security Standards"
    },
    {
      "@id": "urn:visionflow:linked:w3-c",
      "vc:label": "W3C"
    },
    {
      "@id": "urn:visionflow:owl:class:did-nostr-identity",
      "vc:label": "DID Nostr Identity"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:public-key-cryptography",
      "vc:label": "Public Key Cryptography"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-7a072a5e037e"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "infrastructure"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/infrastructure#AuthenticationStandards"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9785"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T20:11:27Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Authentication Standards"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:authentication-standards"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:authentication-standards"
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
    "@id": "urn:visionflow:page:5586ce89f21bd9888d067adba2416cec3ae733ea252be0d977817fd0c5e19591@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:visionflow:owl:class:authentication-standards",
  "@type": "OntologyClass",
  "label": "Authentication Standards",
  "subClassOf": [
    {
      "@id": "urn:visionflow:linked:security-standards",
      "vc:label": "Security Standards"
    }
  ],
  "vc:sourceDomain": "infrastructure",
  "vc:status": "active",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:5586ce89f21bd9888d067adba2416cec3ae733ea252be0d977817fd0c5e19591"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:5586ce89f21bd9888d067adba2416cec3ae733ea252be0d977817fd0c5e19591@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Authentication Standards encompass protocols and specifications for verifying user identity in digital systems, particularly FIDO2 and WebAuthn standards that enable passwordless, phishing-resistant authentication using public key cryptography and hardware authenticators for secure access to metaverse platforms and blockchain applications.",
  "vc:qualityScore": {
    "@value": "0.35",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:requires": [
    {
      "@id": "urn:visionflow:linked:client-implementation",
      "vc:label": "Client Implementation"
    },
    {
      "@id": "urn:visionflow:linked:hardware-authenticators",
      "vc:label": "Hardware Authenticators"
    },
    {
      "@id": "urn:visionflow:owl:class:public-key-cryptography",
      "vc:label": "Public Key Cryptography"
    }
  ],
  "vc:enables": [
    {
      "@id": "urn:visionflow:linked:passwordless-authentication",
      "vc:label": "Passwordless Authentication"
    },
    {
      "@id": "urn:visionflow:linked:phishing-resistance",
      "vc:label": "Phishing Resistance"
    },
    {
      "@id": "urn:visionflow:linked:secure-platform-access",
      "vc:label": "Secure Platform Access"
    }
  ],
  "vc:bridgesTo": [
    {
      "@id": "urn:visionflow:owl:class:did-nostr-identity",
      "vc:label": "DID Nostr Identity"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:authentication-standards:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5586ce89f21bd9888d067adba2416cec3ae733ea252be0d977817fd0c5e19591"
  },
  "vc:resolutions": [
    {
      "raw": "[[Client Implementation]]",
      "resolved": "urn:visionflow:linked:client-implementation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Hardware Authenticators]]",
      "resolved": "urn:visionflow:linked:hardware-authenticators",
      "kind": "StubLink"
    },
    {
      "raw": "[[Passwordless Authentication]]",
      "resolved": "urn:visionflow:linked:passwordless-authentication",
      "kind": "StubLink"
    },
    {
      "raw": "[[Phishing Resistance]]",
      "resolved": "urn:visionflow:linked:phishing-resistance",
      "kind": "StubLink"
    },
    {
      "raw": "[[Secure Platform Access]]",
      "resolved": "urn:visionflow:linked:secure-platform-access",
      "kind": "StubLink"
    },
    {
      "raw": "[[Security Standards]]",
      "resolved": "urn:visionflow:linked:security-standards",
      "kind": "StubLink"
    },
    {
      "raw": "[[W3C]]",
      "resolved": "urn:visionflow:linked:w3-c",
      "kind": "StubLink"
    },
    {
      "raw": "[[DID Nostr Identity]]",
      "resolved": "urn:visionflow:owl:class:did-nostr-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Public Key Cryptography]]",
      "resolved": "urn:visionflow:owl:class:public-key-cryptography",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:5586ce89f21bd9888d067adba2416cec3ae733ea252be0d977817fd0c5e19591@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Authentication Standards encompass protocols and specifications for verifying user identity in digital systems, particularly FIDO2 and WebAuthn standards that enable passwordless, phishing-resistant authentication using public key cryptography and hardware authenticators for secure access to metaverse platforms and blockchain applications.

- ### Semantic Classification
  - owl-class:: infrastructure:AuthenticationStandards
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - bridges-to:: [[DID Nostr Identity]] (ngm)
  - is-subclass-of:: [[Security Standards]]
  - requires:: [[Hardware Authenticators]], [[Public Key Cryptography]], [[Client Implementation]]
  - enables:: [[Passwordless Authentication]], [[Phishing Resistance]], [[Secure Platform Access]]

- ### Content

  ### Technical Details
  Key standards include:
  - **FIDO2**: FIDO Alliance umbrella standard combining WebAuthn + CTAP (Client-to-Authenticator Protocols)
  - **WebAuthn**: W3C web standard API for browser-based passwordless authentication (Level 3 in development)
  - **Passkeys**: FIDO credentials using public key cryptography, unique and domain-bound

  ### Security Benefits
  FIDO standards provide phishing-resistant authentication where biometric data never leaves user device. Credentials are bound to specific domains, preventing replay attacks.

  ### Regulatory Recognition
  CISA recommends phishing-resistant MFA as gold standard. NIST SP 800-63B identifies FIDO2/WebAuthn as meeting AAL3 (highest assurance level) with hardware authenticators.

  ### Market Adoption
  85% of devices worldwide support FIDO2/WebAuthn. Passwordless authentication market projected to reach $61.45 billion by 2032.

- ### Provenance
  - sources:: [[W3C]]
  - migration-date:: 2026-04-26T00:00:00Z
