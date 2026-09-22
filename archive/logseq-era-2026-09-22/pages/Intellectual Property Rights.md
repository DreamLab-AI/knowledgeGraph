public:: true

# Intellectual Property Rights
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:intellectual-property-rights", "@type":"Page", "title":"Intellectual Property Rights", "vc:slug":"intellectual-property-rights", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:intellectual-property-rights",
  "@type":"Class",
  "label":"Intellectual Property Rights",
  "definition":"Intellectual property rights are the legally recognised exclusive entitlements granted to creators and owners over the products of human intellect, such as inventions, literary and artistic works, designs, symbols and names. They include patents, copyright, trademarks and trade secrets, each conferring time-bounded or perpetual control over use, reproduction and commercial exploitation. In blockchain contexts these rights are increasingly represented, transferred and enforced through tokenisation and on-chain licensing.",
  "domain":"blockchain",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:governance","label":"Governance"}],
  "relations":{
    "dependsOn":[
      {"@id":"urn:ngm:class:regulation","label":"Regulation"},
      {"@id":"urn:ngm:class:licensing","label":"Licensing"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:tokenization","label":"Tokenization"},
      {"@id":"urn:ngm:class:non-fungible-token","label":"Non-Fungible Token"},
      {"@id":"urn:ngm:class:digital-rights-management","label":"Digital Rights Management"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:open-source","label":"Open Source"},
      {"@id":"urn:ngm:class:creative-commons","label":"Creative Commons"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:licensing","label":"Licensing"},
      {"@id":"urn:ngm:class:regulation","label":"Regulation"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:licensing","label":"Licensing"},
      {"@id":"urn:ngm:class:tokenization","label":"Tokenization"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:smart-contract","label":"Smart Contract"},
      {"@id":"urn:ngm:class:digital-rights-management","label":"Digital Rights Management"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:patent","label":"Patent"},
      {"@id":"urn:ngm:class:non-fungible-token","label":"Non-Fungible Token"},
      {"@id":"urn:ngm:class:tokenization","label":"Tokenization"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:smart-contract","label":"Smart Contract"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - Intellectual property rights are exclusive legal entitlements over creations of the mind, governed within frameworks of [[Governance]] and [[Regulation]].
  - They span [[Patent]] protection, copyright and trademarks, and are increasingly exercised through on-chain [[Licensing]] and [[Tokenization]].
  - They stand in tension with [[Open Source]] and [[Creative Commons]] models that deliberately broaden permitted use.

- ### Overview
  - The doctrine rewards creators with a limited monopoly so that the costs of invention and authorship can be recouped, while eventually returning works to the public domain.
  - Rights are territorial, arising under national law and harmonised by international treaties, and they differ in duration, formality requirements and scope.
  - Blockchain systems reframe these rights as transferable digital assets whose provenance, ownership and royalty terms can be recorded and automatically enforced.

- ### Key aspects
  - Patents protect novel, non-obvious inventions for a fixed term.
  - Copyright protects original expression in works the moment they are fixed.
  - Trademarks protect distinctive signs that identify commercial origin.
  - Trade secrets protect valuable confidential information without registration.
  - On-chain representations link a right to a token, enabling programmable transfer and royalty splits.

- ### Applications
  - Tokenised ownership of creative works through [[Non-Fungible Token]] standards.
  - Programmable royalty distribution encoded in a [[Smart Contract]].
  - Automated [[Digital Rights Management]] for licensed media and software.
  - Provenance tracking for art, music and patented designs.

- ### Relationships
  - subClassOf:: [[Governance]]
  - dependsOn:: [[Regulation]]
  - dependsOn:: [[Licensing]]
  - supports:: [[Tokenization]]
  - supports:: [[Non-Fungible Token]]
  - supports:: [[Digital Rights Management]]
  - contrastsWith:: [[Open Source]]
  - contrastsWith:: [[Creative Commons]]
  - requires:: [[Licensing]]
  - requires:: [[Regulation]]
  - enables:: [[Licensing]]
  - enables:: [[Tokenization]]
  - uses:: [[Smart Contract]]
  - uses:: [[Digital Rights Management]]
  - relatedTo:: [[Patent]]
  - relatedTo:: [[Non-Fungible Token]]
  - bridgesTo:: [[Smart Contract]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
