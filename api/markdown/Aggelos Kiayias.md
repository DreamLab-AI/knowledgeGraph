public:: true

# Aggelos Kiayias
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5e6cd988376cb60351611a14a0f1a4fa96595d3febc0de9a2aa9374165512f62",
  "@type": "Page",
  "vc:slug": "aggelos-kiayias",
  "title": "Aggelos Kiayias",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cryptography",
      "vc:label": "Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:proof-of-stake",
      "vc:label": "Proof of Stake"
    },
    {
      "@id": "urn:visionflow:linked:consensus-mechanisms",
      "vc:label": "Consensus Mechanisms"
    },
    {
      "@id": "urn:visionflow:linked:cardano",
      "vc:label": "Cardano"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Aggelos Kiayias"
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
  "@id": "urn:ngm:class:aggelos-kiayias",
  "@type": "Class",
  "label": "Aggelos Kiayias",
  "definition": "A computer scientist and cryptographer known for research in cryptography and blockchain protocols, including provably secure proof-of-stake consensus.",
  "domain": "cryptographic",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptography",
      "label": "Cryptography"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
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
  "@id": "urn:visionflow:annotation:link-resolutions:aggelos-kiayias:c979ab8ade5f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5e6cd988376cb60351611a14a0f1a4fa96595d3febc0de9a2aa9374165512f62"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:linked:cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Proof of Stake]]",
      "resolved": "urn:visionflow:linked:proof-of-stake",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Consensus Mechanisms]]",
      "resolved": "urn:visionflow:linked:consensus-mechanisms",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cardano]]",
      "resolved": "urn:visionflow:linked:cardano",
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
  - A computer scientist and cryptographer known for research in cryptography and blockchain protocols, including provably secure proof-of-stake consensus.

- ### Semantic Classification
  - owl-class:: cryptographic:AggelosKiayias
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cryptography]]
  - bridges-to:: [[Consensus Mechanisms]], [[Cardano]]
  - requires:: [[Cryptography]]
  - enables:: [[Proof of Stake]]

- ### Content
  - Aggelos Kiayias is an academic working in cryptography and information security, with research spanning secure protocols, electronic voting and the security analysis of distributed ledgers. He holds a university chair and has advised industry blockchain work.
  - He is associated with the design of provably secure proof-of-stake consensus, including the Ouroboros family of protocols used by the Cardano blockchain, contributing formal security arguments to consensus mechanism design.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
