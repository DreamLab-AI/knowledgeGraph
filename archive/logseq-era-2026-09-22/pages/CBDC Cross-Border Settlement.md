public:: true

# CBDC Cross-Border Settlement
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fb4cfb97fb977cedbb79dfb8606cd31d9e653191f7a39a8bf6b4246466e2f56f",
  "@type": "Page",
  "vc:slug": "cbdc-cross-border-settlement",
  "title": "CBDC Cross-Border Settlement",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:settlement",
      "vc:label": "Settlement"
    },
    {
      "@id": "urn:visionflow:linked:payment-system",
      "vc:label": "Payment System"
    },
    {
      "@id": "urn:visionflow:linked:digital-pound",
      "vc:label": "Digital Pound"
    },
    {
      "@id": "urn:visionflow:linked:central-bank-digital-currency",
      "vc:label": "Central Bank Digital Currency"
    },
    {
      "@id": "urn:visionflow:linked:https-www-bis-org-about-bisih-topics-cbdc-htm",
      "vc:label": "https://www.bis.org/about/bisih/topics/cbdc.htm"
    },
    {
      "@id": "urn:visionflow:linked:https-www-bis-org-publ-othp-59-htm",
      "vc:label": "https://www.bis.org/publ/othp59.htm"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "CBDC Cross-Border Settlement"
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
  "@id": "urn:ngm:class:cbdc-cross-border-settlement",
  "@type": "Class",
  "label": "CBDC Cross-Border Settlement",
  "definition": "CBDC cross-border settlement refers to the use of central bank digital currencies to settle payments between parties in different jurisdictions. It aims to reduce cost and delay in international transfers.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:central-bank-digital-currency",
      "label": "Central Bank Digital Currency"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:settlement",
        "label": "Settlement"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:payment-system",
        "label": "Payment System"
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
  "@id": "urn:visionflow:annotation:link-resolutions:cbdc-cross-border-settlement:b704ed54f033",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:fb4cfb97fb977cedbb79dfb8606cd31d9e653191f7a39a8bf6b4246466e2f56f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Settlement]]",
      "resolved": "urn:visionflow:linked:settlement",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Payment System]]",
      "resolved": "urn:visionflow:linked:payment-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Pound]]",
      "resolved": "urn:visionflow:linked:digital-pound",
      "kind": "StubLink"
    },
    {
      "raw": "[[Central Bank Digital Currency]]",
      "resolved": "urn:visionflow:linked:central-bank-digital-currency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.bis.org/about/bisih/topics/cbdc.htm]]",
      "resolved": "urn:visionflow:linked:https-www-bis-org-about-bisih-topics-cbdc-htm",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.bis.org/publ/othp59.htm]]",
      "resolved": "urn:visionflow:linked:https-www-bis-org-publ-othp-59-htm",
      "kind": "StubLink"
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
  - CBDC cross-border settlement refers to the use of central bank digital currencies to settle payments between parties in different jurisdictions. It aims to reduce cost and delay in international transfers.

- ### Semantic Classification
  - owl-class:: blockchain:CBDCCrossBorderSettlement
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Central Bank Digital Currency]]
  - bridges-to:: [[Digital Pound]]
  - requires:: [[Settlement]]
  - enables:: [[Payment System]]

- ### Content
  - Cross-border settlement using central bank digital currencies involves connecting the digital currency systems of different countries so that value can move directly between them. Several central bank projects have tested interoperability arrangements and shared platforms.
  - Proponents argue that such settlement could shorten transaction chains that currently pass through correspondent banks. Design questions include foreign exchange handling, legal frameworks, and how to maintain monetary control across jurisdictions.

- ### Provenance
  - sources:: [[https://www.bis.org/about/bisih/topics/cbdc.htm]], [[https://www.bis.org/publ/othp59.htm]]
  - migration-date:: 2026-05-29T00:00:00Z
