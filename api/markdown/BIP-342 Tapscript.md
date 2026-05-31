public:: true

# BIP-342 Tapscript
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d39f6ecdaf79b1f78024616055ac376da435216e9595cc3be337b53b31ea3187",
  "@type": "Page",
  "vc:slug": "bip-342-tapscript",
  "title": "BIP-342 Tapscript",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:linked:technical-standard",
      "vc:label": "Technical Standard"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "BIP-342 Tapscript"
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
  "@id": "urn:ngm:class:bip-342-tapscript",
  "@type": "Class",
  "label": "BIP-342 Tapscript",
  "definition": "A Bitcoin Improvement Proposal defining Tapscript, the scripting semantics used within Taproot spends. It specifies the validation rules for scripts committed under the Taproot output type.",
  "domain": "standards",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:technical-standard",
      "label": "Technical Standard"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
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
  "@id": "urn:visionflow:annotation:link-resolutions:bip-342-tapscript:89660e229f4a",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d39f6ecdaf79b1f78024616055ac376da435216e9595cc3be337b53b31ea3187"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bitcoin]]",
      "resolved": "urn:visionflow:linked:bitcoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Technical Standard]]",
      "resolved": "urn:visionflow:linked:technical-standard",
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
  - A Bitcoin Improvement Proposal defining Tapscript, the scripting semantics used within Taproot spends. It specifies the validation rules for scripts committed under the Taproot output type.

- ### Semantic Classification
  - owl-class:: standards:BIP342Tapscript
  - owl-role:: Standard

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[Bitcoin]]

- ### Content
  - A Bitcoin Improvement Proposal defining Tapscript, the scripting semantics used within Taproot spends. It specifies the validation rules for scripts committed under the Taproot output type.
  - Topic area: Bitcoin Tapscript.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
