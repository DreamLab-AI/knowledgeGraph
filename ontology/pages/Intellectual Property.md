public:: true

# Intellectual Property
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c780ef2632926789cf641771876ba6c37f7ee5baab6a20000c3bfe28a88dd30d",
  "@type": "Page",
  "vc:slug": "intellectual-property",
  "title": "Intellectual Property",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:governance",
      "vc:label": "Governance"
    },
    {
      "@id": "urn:visionflow:linked:copyright",
      "vc:label": "Copyright"
    },
    {
      "@id": "urn:visionflow:linked:software-licence",
      "vc:label": "Software Licence"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:intellectual-property",
  "@type": "Class",
  "label": "Intellectual Property",
  "definition": "A category of legally protected intangible assets arising from creations of the mind, encompassing copyright over creative works, patents over inventions, trade marks over distinctive signs, and trade secrets over confidential know-how. Intellectual property law grants creators time-limited exclusive rights to exploit their creations commercially, balancing incentives for innovation against public access, and underpins licensing, technology transfer, and the contested attribution of AI-generated content.",
  "domain": "governance",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:governance",
    "label": "Governance"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:copyright",
        "label": "Copyright"
      },
      {
        "@id": "urn:ngm:class:patent",
        "label": "Patent"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:licensing",
        "label": "Licensing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:software-licence",
        "label": "Software Licence"
      },
      {
        "@id": "urn:ngm:class:ai-generated-content",
        "label": "AI Generated Content"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "A category of legally protected intangible assets arising from creations of the mind, encompassing copyright over creative works, patents over inventions, trade marks over distinctive signs, and trade secrets over confidential know-how. Intellectual property law grants creators time-limited exclusive rights to exploit their creations commercially, balancing incentives for innovation against public access, and underpins licensing, technology transfer, and the contested attribution of AI-generated content."

- ### Semantic Classification
  - owl-class:: governance:IntellectualProperty
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Governance]]
  - has-part:: [[Copyright]]
  - enables:: [[Licensing]]
  - related-to:: [[Software Licence]]

- ### Content

  ## Definition

  **Intellectual property** (IP) is the umbrella term for legal rights over intangible creations of the mind. The main regimes are copyright (literary, artistic, and software works), patents (novel, inventive, industrially applicable inventions), trade marks (distinctive commercial signs), registered designs, and trade secrets. Each regime grants the rights holder a bundle of exclusive rights — typically to copy, distribute, adapt, manufacture, or use — for a limited period, after which the creation passes into the public domain.

  The economic rationale is an exchange: society grants a temporary monopoly to incentivise disclosure and investment in creative and inventive work. Because the rights are property, they can be assigned, mortgaged, and — most importantly for the software and media industries — licensed. Every [[Software Licence]], from proprietary EULAs to the GPL and MIT licences, is an exercise of copyright: open-source licensing works precisely because copyright gives the author the leverage to attach conditions to reuse.

  Generative AI has made IP one of the most actively litigated areas of technology law. Disputes centre on two questions: whether training models on copyrighted corpora constitutes infringement or fair dealing, and whether [[Ai Generated Content]] can attract protection at all when no human author is identifiable. Jurisdictions diverge — the UK CDPA 1988 s.9(3) provides for computer-generated works, while the US Copyright Office requires human authorship — creating significant uncertainty for tools such as Adobe Firefly, which markets itself on commercially safe, licensed training data.

  ## Current Landscape

  - **Framework treaties**: the Berne Convention (copyright), the Paris Convention (industrial property), and the WTO TRIPS Agreement set international minimum standards, administered largely through WIPO.
  - **UK regime**: the Copyright, Designs and Patents Act 1988 and the Patents Act 1977, with the UK Intellectual Property Office handling registration; post-Brexit, UK and EU trade mark and design rights have diverged.
  - **AI flashpoints**: Getty Images v Stability AI (UK High Court), the New York Times v OpenAI litigation, and consultations on text-and-data-mining exceptions in the UK and EU.
  - **Industry practice**: provenance standards such as C2PA content credentials, model training on licensed datasets, and indemnification offers from major AI vendors are emerging as commercial responses to unresolved legal questions.
  - IP valuation increasingly dominates corporate balance sheets: intangible assets account for the large majority of S&P 500 market value, making IP governance a board-level concern rather than a purely legal one.
