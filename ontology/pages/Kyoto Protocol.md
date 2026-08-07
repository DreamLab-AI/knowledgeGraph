public:: true

# Kyoto Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1d532aaa02c88ad73adb7a3c978c395c226f0ee72c64e171f9a9f357d677ec17",
  "@type": "Page",
  "vc:slug": "kyoto-protocol",
  "title": "Kyoto Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:climate-policy",
      "vc:label": "Climate Policy"
    },
    {
      "@id": "urn:visionflow:linked:paris-agreement",
      "vc:label": "Paris Agreement"
    },
    {
      "@id": "urn:visionflow:linked:compliance-carbon-market",
      "vc:label": "Compliance Carbon Market"
    },
    {
      "@id": "urn:visionflow:linked:emissions-trading-scheme",
      "vc:label": "Emissions Trading Scheme"
    },
    {
      "@id": "urn:visionflow:linked:carbon-credits",
      "vc:label": "Carbon Credits"
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
  "@id": "urn:ngm:class:kyoto-protocol",
  "@type": "Class",
  "label": "Kyoto Protocol",
  "definition": "The 1997 international treaty under the UN Framework Convention on Climate Change that, for the first time, set legally binding greenhouse gas emission reduction targets for industrialised (Annex B) countries, and created the flexible market mechanisms — International Emissions Trading, the Clean Development Mechanism, and Joint Implementation — that founded the compliance carbon market. In force from 2005 with commitment periods spanning 2008-2020, it was superseded as the primary climate treaty by the Paris Agreement.",
  "domain": "governance",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:climate-policy",
    "label": "Climate Policy"
  },
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:compliance-carbon-market",
        "label": "Compliance Carbon Market"
      },
      {
        "@id": "urn:ngm:class:emissions-trading-scheme",
        "label": "Emissions Trading Scheme"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:paris-agreement",
        "label": "Paris Agreement"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:carbon-credits",
        "label": "Carbon Credits"
      },
      {
        "@id": "urn:ngm:class:scope-1-emissions",
        "label": "Scope 1 Emissions"
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
  - "The 1997 international treaty under the UN Framework Convention on Climate Change that, for the first time, set legally binding greenhouse gas emission reduction targets for industrialised (Annex B) countries, and created the flexible market mechanisms — International Emissions Trading, the Clean Development Mechanism, and Joint Implementation — that founded the compliance carbon market. In force from 2005 with commitment periods spanning 2008-2020, it was superseded as the primary climate treaty by the Paris Agreement."

- ### Semantic Classification
  - owl-class:: governance:KyotoProtocol
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Climate Policy]]
  - enables:: [[Compliance Carbon Market]], [[Emissions Trading Scheme]]
  - contrasts-with:: [[Paris Agreement]]

- ### Content

  ## Definition

  The **Kyoto Protocol**, adopted in December 1997 at COP3 in Kyoto and in force from February 2005, operationalised the UNFCCC by committing industrialised countries and economies in transition (listed in Annex B) to quantified, legally binding emission limits — collectively about 5% below 1990 levels for the first commitment period, 2008-2012. It embodied the principle of "common but differentiated responsibilities": binding caps applied to developed countries only, on the reasoning that they were responsible for the bulk of historical emissions.

  Its lasting institutional legacy is market architecture. Three "flexible mechanisms" let parties meet targets at lowest cost: **International Emissions Trading** between states (trading Assigned Amount Units), the **Clean Development Mechanism** (CDM), which issued Certified Emission Reductions for verified projects in developing countries, and **Joint Implementation** between Annex B parties. The CDM in particular created the templates — baselines, additionality tests, monitoring and verification, registries — on which every subsequent [[Compliance Carbon Market]] and crediting programme, including the EU [[Emissions Trading Scheme]] and today's Article 6 mechanisms, was built.

  The protocol contrasts sharply with the [[Paris Agreement]] that succeeded it: Kyoto imposed top-down, legally binding targets on a fixed list of developed countries, whereas Paris relies on bottom-up, nationally determined contributions from all parties, binding in procedure rather than in outcome. The United States never ratified Kyoto, Canada withdrew in 2012, and the Doha Amendment extended a shrunken second commitment period (2013-2020) covering a modest share of global emissions — experience that directly shaped Paris's universal-participation design.

  ## Current Landscape

  - **Status**: the second commitment period ended in 2020; Kyoto's accounting and market infrastructure has been wound down or transitioned into the Paris framework. The CDM Executive Board continued provisional governance only until 31 December 2025, after which the Article 6.4 Supervisory Body took over eligible activities.
  - **CDM-to-Paris transition**: the Article 6.4 Supervisory Body adopted the CDM transition standard and procedure at its July 2023 meeting (effective 1 January 2024); by early 2025 around 1,478 activities had requested transition and undergone Global Stakeholder Consultation. Projects had to notify intent to transition by 31 December 2023, with host-Party approval due by 30 June 2026.
  - **Article 6.4 operationalised at COP29 (Baku, November 2024)**: after nearly nine years of negotiation, the rules governing both Article 6.2 cooperative approaches and the Article 6.4 mechanism (PACM) were finalised; the Baku decision also expanded the scope of transitionable CDM projects to include afforestation and reforestation (A/R) activities.
  - **Assessment**: parties bound in the first period broadly met their collective target, though analyses attribute part of the reduction to the post-1990 economic contraction in transition economies ("hot air") and to carbon leakage; global emissions kept rising because major emitters were outside the caps.
  - **Legacy for measurement and markets**: Kyoto's basket of gases, global warming potentials, national inventories and registry systems remain the backbone of emissions accounting today (feeding concepts such as [[Scope 1 Emissions]]), and the professional ecosystem of validators, verifiers, registries and [[Carbon Credits]] traders built for the CDM still underpins both compliance and voluntary markets.

  **Sources**:
  - https://unfccc.int/process-and-meetings/the-paris-agreement/article-6/article-64-pacm/CDM_transition/faqs
  - https://climatefocus.com/wp-content/uploads/2025/05/The-Paris-Agreement-Crediting-Mechanism-After-COP29_FINAL.pdf

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
