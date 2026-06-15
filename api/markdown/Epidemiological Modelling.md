public:: true

# Epidemiological Modelling

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:epidemiological-modelling",
  "@type": "Page",
  "title": "Epidemiological Modelling",
  "vc:slug": "epidemiological-modelling",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:epidemiological-modelling",
  "@type": "Class",
  "label": "Epidemiological Modelling",
  "definition": "Epidemiological modelling is the use of mathematical and computational models to describe how infectious diseases spread through populations over time. Compartmental models partition a population into states such as susceptible, infected, and recovered, and use differential equations to govern transitions between them, while network and agent-based models capture heterogeneous contact structures. These models inform forecasting, intervention design, and public-health policy.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:computational-modelling",
      "label": "Computational Modelling"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:differential-equation",
        "label": "Differential Equation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:computational-modelling",
        "label": "Computational Modelling"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:public-health",
        "label": "Public Health"
      },
      {
        "@id": "urn:ngm:class:network-analysis",
        "label": "Network Analysis"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:agent-based-modelling",
        "label": "Agent-Based Modelling"
      },
      {
        "@id": "urn:ngm:class:graph-theory",
        "label": "Graph Theory"
      },
      {
        "@id": "urn:ngm:class:time-series-forecasting",
        "label": "Time Series Forecasting"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:public-health",
        "label": "Public Health"
      },
      {
        "@id": "urn:ngm:class:time-series-forecasting",
        "label": "Time Series Forecasting"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:differential-equation",
        "label": "Differential Equation"
      },
      {
        "@id": "urn:ngm:class:simulation",
        "label": "Simulation"
      },
      {
        "@id": "urn:ngm:class:agent-based-modelling",
        "label": "Agent-Based Modelling"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:computational-modelling",
        "label": "Computational Modelling"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:public-health",
        "label": "Public Health"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Epidemiological modelling is the use of mathematical and computational models to describe how infectious diseases spread through populations over time. Compartmental models partition a population into states such as susceptible, infected, and recovered, and use differential equations to govern transitions between them, while network and agent-based models capture heterogeneous contact structures. These models inform forecasting, intervention design, and public-health policy.
  - Related: [[Computational Modelling]] [[Differential Equation]] [[Network Analysis]] [[Public Health]] [[Agent-Based Modelling]]
- ### Overview
  - The canonical compartmental approach is the SIR family of models, which tracks the flow of individuals between susceptible, infected, and recovered compartments using coupled differential equations parameterised by transmission and recovery rates. The basic reproduction number summarises whether an outbreak grows or declines. Network and agent-based extensions relax the assumption of homogeneous mixing, representing individuals and their contacts explicitly so that interventions such as vaccination, isolation, and contact tracing can be evaluated.
- ### Mechanisms
  - Compartmental models partition populations into disease states.
  - The basic reproduction number characterises outbreak growth.
  - Differential equations govern compartment transitions over time.
  - Network models encode heterogeneous contact structures.
  - Agent-based simulations represent individuals and their behaviours explicitly.
- ### Applications
  - Forecasting outbreak trajectories and healthcare demand.
  - Evaluating vaccination and intervention strategies.
  - Estimating transmission parameters from surveillance data.
  - Designing testing and contact-tracing policies.
  - Planning resource allocation during epidemics.
- ### Relationships
  - hasPart:: [[Differential Equation]]
  - partOf:: [[Computational Modelling]]
  - bridgesTo:: [[Public Health]]
  - bridgesTo:: [[Network Analysis]]
  - relatedTo:: [[Agent-Based Modelling]]
  - relatedTo:: [[Graph Theory]]
  - relatedTo:: [[Time Series Forecasting]]
  - enables:: [[Public Health]]
  - enables:: [[Time Series Forecasting]]
  - uses:: [[Differential Equation]]
  - uses:: [[Simulation]]
  - uses:: [[Agent-Based Modelling]]
  - dependsOn:: [[Computational Modelling]]
  - supports:: [[Public Health]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
