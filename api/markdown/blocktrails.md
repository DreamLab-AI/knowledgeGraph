public:: true

# blocktrails
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7e179ca7caeaba8eefaf69746619a187fa9f009d719a11b4aa66edd03b04834c",
  "@type": "Page",
  "vc:slug": "blocktrails",
  "title": "blocktrails",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "blocktrails"
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
  "@id": "urn:ngm:class:blocktrails",
  "@type": "Class",
  "label": "blocktrails",
  "definition": "A concept node representing resource trails related to blockchain exploration tools and Nostr-based document sharing infrastructure. In the NarrativeGoldmine context, blocktrails links to split-screen markdown editing and decentralised document storage via NosDAV and the Nostr protocol.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-computing-and-cloud",
      "label": "Computing and Cloud"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:blockchain-core-concepts", "label": "blockchain core concepts"},
      {"@id": "urn:ngm:class:decentralised-identity", "label": "Decentralised Identity"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:knowledge-base", "label": "Knowledge Base"},
      {"@id": "urn:ngm:class:web-technology", "label": "Web Technology"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:blocktrails:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7e179ca7caeaba8eefaf69746619a187fa9f009d719a11b4aa66edd03b04834c"
  },
  "vc:resolutions": [],
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
  - A concept node representing resource trails related to blockchain exploration tools and Nostr-based document sharing infrastructure. In the NarrativeGoldmine context, blocktrails links to split-screen markdown editing and decentralised document storage via NosDAV and the Nostr protocol.

- ### Semantic Classification
  - owl-class:: infrastructure:Blocktrails
  - owl-role:: Concept

- ### Relationships
  - **Related-to**: [[blockchain core concepts]], [[Decentralised Identity]] (Nostr keypair-based)
  - **Uses**: [[Knowledge Base]] (document storage), [[Web Technology]] (NosDAV protocol)

- ### Content
  - [Split Screen Markdown Editor](https://nostr.app/doc.html?uri=https%3A%2F%2Fnosdav.net%2Fdeea5fc0740b6bf2ffcacde8bcd73f5b085057bfcea5e533a96a9700a736a382%2Fpublic%2Fmindmaps%2Fsethue.md)

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
