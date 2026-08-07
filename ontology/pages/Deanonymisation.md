public:: true

# Deanonymisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:63e5ca6641c42a07648c331efdbaf0e2b942b3ebfa93b5118709a9cfdd7b6231",
  "@type": "Page",
  "vc:slug": "deanonymisation",
  "title": "Deanonymisation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:anonymisation",
      "vc:label": "Anonymisation"
    },
    {
      "@id": "urn:visionflow:linked:pseudonymity",
      "vc:label": "Pseudonymity"
    },
    {
      "@id": "urn:visionflow:linked:privacy",
      "vc:label": "Privacy"
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
  "@id": "urn:ngm:class:deanonymisation",
  "@type": "Class",
  "label": "Deanonymisation",
  "definition": "Deanonymisation is the adversarial process of re-identifying individuals within data that was intended to be anonymous or pseudonymous, reversing the protective transformation that anonymisation applied. It works by correlating a supposedly de-identified record against auxiliary information — public datasets, quasi-identifiers such as postcode, age, and gender, behavioural fingerprints, or linkage across leaked corpora — until a unique individual is singled out. Landmark demonstrations against released medical, mobility, and streaming datasets have shown that removing direct identifiers is rarely sufficient. As the antonym of anonymisation, deanonymisation is both a privacy threat to defend against and an analytical technique used to test whether a dataset's protection actually holds.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:adversarial-attack",
    "label": "Adversarial Attack"
  },
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:anonymisation",
        "label": "Anonymisation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:data-analysis",
        "label": "Data Analysis"
      },
      {
        "@id": "urn:ngm:class:open-source-intelligence",
        "label": "Open-Source Intelligence"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:pseudonymity",
        "label": "Pseudonymity"
      },
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "Deanonymisation is the adversarial process of re-identifying individuals within data that was intended to be anonymous or pseudonymous, reversing the protective transformation that anonymisation applied. It works by correlating a supposedly de-identified record against auxiliary information — public datasets, quasi-identifiers such as postcode, age, and gender, behavioural fingerprints, or linkage across leaked corpora — until a unique individual is singled out. Landmark demonstrations against released medical, mobility, and streaming datasets have shown that removing direct identifiers is rarely sufficient. As the antonym of anonymisation, deanonymisation is both a privacy threat to defend against and an analytical technique used to test whether a dataset's protection actually holds."

- ### Semantic Classification
  - owl-class:: security:Deanonymisation
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Adversarial Attack]]
  - contrasts-with:: [[Anonymisation]]
  - uses:: [[Open-Source Intelligence]]
  - related-to:: [[Pseudonymity]]

- ### Content

  ## Definition

  **Deanonymisation** is the reversal of anonymisation: the deliberate re-identification of people inside datasets that were released, published, or shared on the assumption that individuals could not be picked out. It is the adversarial counterpart to the protective transformation, and treating the two as the same concept obscures the fact that they pull in opposite directions — one severs the link between records and real identities, the other reconstructs it.

  The technique typically exploits the persistence of information after direct identifiers are stripped. Quasi-identifiers — combinations of attributes that are individually common but jointly rare — often suffice to isolate a single person, especially when the target dataset can be linked against an auxiliary source that includes both those attributes and a name. Behavioural traces such as mobility patterns, purchase histories, or writing style act as fingerprints that survive naive de-identification.

  Because deanonymisation reveals where anonymisation fails, it doubles as a red-team methodology: privacy engineers run re-identification attacks to measure residual risk before data is released, informing choices about generalisation, suppression, or formal guarantees like differential privacy.

  ## Technical Details

  Common deanonymisation strategies include linkage attacks, which join a de-identified release to an external identified dataset on shared quasi-identifiers; fingerprinting attacks, which build a unique signature from high-dimensional behavioural data; and membership-inference attacks, which determine whether a specific individual's record was present in a training set or aggregate. The effectiveness of each depends on the sparsity of the data — high-dimensional records are easier to isolate — and on the richness of available auxiliary information. Defences accordingly move beyond identifier removal towards k-anonymity, l-diversity, and provable differential-privacy mechanisms that bound how much any single record can influence a released output, alongside governance controls that restrict who can obtain and combine sensitive datasets.
