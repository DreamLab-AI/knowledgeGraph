public:: true

# FIDO Alliance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ecb81096bdd736a2917259e3de160bf08eedc5cb508cfbc48b4b97660798f9ae",
  "@type": "Page",
  "vc:slug": "fido-alliance",
  "title": "FIDO Alliance",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:asymmetric-cryptography",
      "vc:label": "Asymmetric Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:passwordless-authentication",
      "vc:label": "Passwordless Authentication"
    },
    {
      "@id": "urn:visionflow:linked:multi-factor-authentication",
      "vc:label": "Multi-Factor Authentication"
    },
    {
      "@id": "urn:visionflow:linked:authentication",
      "vc:label": "Authentication"
    },
    {
      "@id": "urn:visionflow:linked:standards-body",
      "vc:label": "Standards Body"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "FIDO Alliance"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fido-alliance",
  "@type": "Class",
  "label": "FIDO Alliance",
  "definition": "An industry association that develops open authentication standards intended to reduce reliance on passwords through public key cryptography.",
  "domain": "security",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:standards-body",
      "label": "Standards Body"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:asymmetric-cryptography",
        "label": "Asymmetric Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:passwordless-authentication",
        "label": "Passwordless Authentication"
      },
      {
        "@id": "urn:ngm:class:multi-factor-authentication",
        "label": "Multi-Factor Authentication"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:fido-alliance:7322671b7093",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ecb81096bdd736a2917259e3de160bf08eedc5cb508cfbc48b4b97660798f9ae"
  },
  "vc:resolutions": [
    {
      "raw": "[[Asymmetric Cryptography]]",
      "resolved": "urn:visionflow:linked:asymmetric-cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Passwordless Authentication]]",
      "resolved": "urn:visionflow:linked:passwordless-authentication",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Multi-Factor Authentication]]",
      "resolved": "urn:visionflow:linked:multi-factor-authentication",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Authentication]]",
      "resolved": "urn:visionflow:linked:authentication",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Standards Body]]",
      "resolved": "urn:visionflow:linked:standards-body",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - An industry association that develops open authentication standards intended to reduce reliance on passwords through public key cryptography.

- ### Semantic Classification
  - owl-class:: cryptographic:FIDOAlliance
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Standards Body]]
  - bridges-to:: [[Authentication]]
  - requires:: [[Asymmetric Cryptography]]
  - enables:: [[Passwordless Authentication]], [[Multi-Factor Authentication]]

- ### Content
  - The FIDO Alliance is a consortium of technology firms and other organisations that develops open specifications for strong, phishing-resistant authentication. Its standards use public key cryptography so that secret credentials are not transmitted or stored on servers.
  - The alliance's specifications underpin passwordless and multi-factor authentication schemes adopted across browsers, operating systems and online services. They are designed to interoperate across devices and platforms.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
