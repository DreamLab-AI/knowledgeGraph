public:: true

# Marathon Digital
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:49fbe166511a2d4db54d1b5d17ab8f643b10a2c1f23ced5850a6b0e121af7ce6",
  "@type": "Page",
  "vc:slug": "marathon-digital",
  "title": "Marathon Digital",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bitcoin-mining",
      "vc:label": "Bitcoin Mining"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:linked:cryptocurrency",
      "vc:label": "Cryptocurrency"
    },
    {
      "@id": "urn:visionflow:linked:sustainability",
      "vc:label": "Sustainability Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Marathon Digital"
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
  "@id": "urn:ngm:class:marathon-digital",
  "@type": "Class",
  "label": "Marathon Digital",
  "definition": "Marathon Digital is a large publicly traded Bitcoin mining company operating data centres of specialised hardware to validate transactions and compete for block rewards.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-mining",
      "label": "Bitcoin Mining"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-mining",
        "label": "Bitcoin Mining"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol",
        "label": "Bitcoin Proof-of-Work Protocol"
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
  "@id": "urn:visionflow:annotation:link-resolutions:marathon-digital:2dced6bb01ad",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:49fbe166511a2d4db54d1b5d17ab8f643b10a2c1f23ced5850a6b0e121af7ce6"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bitcoin Mining]]",
      "resolved": "urn:visionflow:linked:bitcoin-mining",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Proof-of-Work Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptocurrency]]",
      "resolved": "urn:visionflow:linked:cryptocurrency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sustainability Domain]]",
      "resolved": "urn:visionflow:linked:sustainability",
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
  - Marathon Digital is a large publicly traded Bitcoin mining company operating data centres of specialised hardware to validate transactions and compete for block rewards.

- ### Semantic Classification
  - owl-class:: metaverse:MarathonDigital
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Bitcoin Mining]]
  - bridges-to:: [[Cryptocurrency]], [[Sustainability Domain]]
  - requires:: [[Bitcoin Mining]]
  - enables:: [[Bitcoin Proof-of-Work Protocol]]

- ### Content
  - Marathon Digital runs fleets of application-specific mining hardware to perform the hashing that secures the Bitcoin network, earning newly issued coins and transaction fees. Its economics turn on hardware efficiency and electricity cost.
  - As one of the larger listed miners it features in debates over the energy use and sourcing of proof-of-work, linking it to sustainability questions around cryptocurrency.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
