public:: true

# BC-0482-eu-mica-regulation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:652240e4af324d1a3a3ef9bbae761811179c68fafc176b2c727a1c9e46f26697",
  "@type": "Page",
  "vc:slug": "bc-0482-eu-mica-regulation",
  "title": "BC-0482-eu-mica-regulation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:securities-regulation",
      "vc:label": "Securities Regulation"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-compliance",
      "vc:label": "Regulatory Compliance"
    },
    {
      "@id": "urn:visionflow:linked:mi-ca-regulation",
      "vc:label": "MiCA Regulation"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "BC-0482-eu-mica-regulation"
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
  "@id": "urn:ngm:class:bc-0482-eu-mica-regulation",
  "@type": "Class",
  "label": "BC-0482-eu-mica-regulation",
  "definition": "The EU MiCA regulation is the European Union's Markets in Crypto-Assets framework, which establishes harmonised rules for the issuance, offering and provision of services relating to crypto-assets across member states.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:regulatory-compliance",
      "label": "Regulatory Compliance"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:securities-regulation",
        "label": "Securities Regulation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
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
  "@id": "urn:visionflow:annotation:link-resolutions:bc-0482-eu-mica-regulation:d8b57c171e04",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:652240e4af324d1a3a3ef9bbae761811179c68fafc176b2c727a1c9e46f26697"
  },
  "vc:resolutions": [
    {
      "raw": "[[Securities Regulation]]",
      "resolved": "urn:visionflow:linked:securities-regulation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulatory Compliance]]",
      "resolved": "urn:visionflow:linked:regulatory-compliance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MiCA Regulation]]",
      "resolved": "urn:visionflow:linked:mi-ca-regulation",
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
  - The EU MiCA regulation is the European Union's Markets in Crypto-Assets framework, which establishes harmonised rules for the issuance, offering and provision of services relating to crypto-assets across member states.

- ### Semantic Classification
  - owl-class:: blockchain:BC0482eumicaregulation
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Regulatory Compliance]]
  - bridges-to:: [[MiCA Regulation]]
  - requires:: [[Securities Regulation]]
  - enables:: [[Regulatory Compliance]]

- ### Content
  - The EU MiCA regulation, formally the Markets in Crypto-Assets Regulation, is European Union legislation that creates a single set of rules for crypto-assets that are not already covered by existing financial services law. It defines categories of crypto-assets, sets requirements for issuers and authorises crypto-asset service providers to operate across the EU.
  - MiCA introduces obligations on disclosure, governance, reserves for stablecoin-type tokens and consumer protection, and assigns supervision to national and European authorities. It is applied in phases, with provisions for asset-referenced and e-money tokens taking effect ahead of the broader service-provider regime.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
