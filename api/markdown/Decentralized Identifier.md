public:: true

# Decentralized Identifier
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:034040b2233a234685f3e943a26b9f34dbd7dff4aaa84008c34721e0421cd442",
  "@type": "Page",
  "vc:slug": "decentralized-identifier",
  "title": "Decentralized Identifier",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:did-resolution",
      "vc:label": "DID Resolution"
    },
    {
      "@id": "urn:visionflow:linked:identity-management",
      "vc:label": "Identity Management"
    },
    {
      "@id": "urn:visionflow:linked:centralized-identity-provider",
      "vc:label": "Centralized Identity Provider"
    },
    {
      "@id": "urn:visionflow:linked:digital-identity",
      "vc:label": "Digital Identity"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Decentralized Identifier"
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
  "@id": "urn:ngm:class:decentralized-identifier",
  "@type": "Class",
  "label": "Decentralized Identifier",
  "definition": "A decentralised identifier is a globally unique identifier that a subject can create and control without a central registry, defined by a W3C standard. It resolves to a document describing keys and service endpoints for verification.",
  "domain": "identity",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-identity",
      "label": "Digital Identity"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:did-resolution",
        "label": "DID Resolution"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:identity-management",
        "label": "Identity Management"
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
  "@id": "urn:visionflow:annotation:link-resolutions:decentralized-identifier:80ebcd1f14a4",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:034040b2233a234685f3e943a26b9f34dbd7dff4aaa84008c34721e0421cd442"
  },
  "vc:resolutions": [
    {
      "raw": "[[DID Resolution]]",
      "resolved": "urn:visionflow:linked:did-resolution",
      "kind": "StubLink"
    },
    {
      "raw": "[[Identity Management]]",
      "resolved": "urn:visionflow:linked:identity-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Centralized Identity Provider]]",
      "resolved": "urn:visionflow:linked:centralized-identity-provider",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Identity]]",
      "resolved": "urn:visionflow:linked:digital-identity",
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
  - A decentralised identifier is a globally unique identifier that a subject can create and control without a central registry, defined by a W3C standard. It resolves to a document describing keys and service endpoints for verification.

- ### Semantic Classification
  - owl-class:: identity:DecentralizedIdentifier
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Digital Identity]]
  - bridges-to:: [[Centralized Identity Provider]]
  - requires:: [[DID Resolution]]
  - enables:: [[Identity Management]]

- ### Content
  - A decentralised identifier, or DID, is a URI of the form did:method:identifier that a controller generates and manages independently of a central authority. It resolves to a DID document containing public keys, authentication methods and service endpoints used to prove control and interact with the subject.
  - DIDs underpin self-sovereign identity by letting individuals and organisations own identifiers and present verifiable credentials without depending on a single identity provider. The W3C standardised the data model, and many DID methods anchor identifiers on distributed ledgers or other verifiable registries.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
