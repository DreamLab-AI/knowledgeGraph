public:: true

# Multi-Chain Application
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:multi-chain-application",
  "@type": "Page",
  "title": "Multi-Chain Application",
  "vc:slug": "multi-chain-application",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:multi-chain-application",
  "@type": "Class",
  "label": "Multi-Chain Application",
  "definition": "A multi-chain application is a decentralised application that deploys and operates logic across more than one blockchain network simultaneously, rather than being confined to a single chain. It relies on cross-chain communication and interoperability mechanisms, such as bridges or messaging protocols, to synchronise state and move assets between the chains it spans. Multi-chain designs let applications draw on the liquidity, users or specialised capabilities of several ecosystems at once, at the cost of added complexity and cross-chain security risk.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cross-chain-interoperability",
      "label": "Cross-Chain Interoperability"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cross-chain-interoperability",
        "label": "Cross-Chain Interoperability"
      }
    ]
  },
  "quality": 0.65
}
```

- ### Definition
  - A multi-chain application is a decentralised application that deploys and operates logic across more than one blockchain network simultaneously, rather than being confined to a single chain.
  - It is a subclass of [[Cross-Chain Interoperability]].
- ### Content
  - A multi-chain application is a decentralised application that deploys and operates logic across more than one blockchain network simultaneously, rather than being confined to a single chain. It relies on cross-chain communication and interoperability mechanisms, such as bridges or messaging protocols, to synchronise state and move assets between the chains it spans. Multi-chain designs let applications draw on the liquidity, users or specialised capabilities of several ecosystems at once, at the cost of added complexity and cross-chain security risk.
