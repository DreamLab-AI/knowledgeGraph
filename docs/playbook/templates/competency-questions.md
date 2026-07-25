# Competency questions: Wind O&M

This document is written to be included in agent context verbatim. A competency
question is a query the built ontology MUST be able to answer. The set is the
acceptance test for the taxonomy: if a question cannot be expressed against the
graph, a domain, a category, a relation, or a bridge is missing. Keep this file
open while authoring; author a page the moment a question cannot be traversed.

INV-CQ1. A second orthogonal classification axis is added ONLY when a competency
question below cannot be answered with the single Domain axis plus bridging. No
question here requires one, so the corpus ships with one axis. A speculative
second axis in the reference corpus was authored and never consumed.

Each sketch is SPARQL against the built Turtle. The v3 context maps the bare terms
onto RDF: `subClassOf` to `rdfs:subClassOf`, `label` to `rdfs:label`, `definition`
to `rdfs:comment`, `domain` to `vc:sourceDomain`, and the twelve relation
predicates to `vc:*` (with `relatedTo` to `skos:related`). Grounding, alignment
and provenance map as shown inline. Class IRIs are `urn:owf:class/<slug>`,
individuals `urn:owf:individual/<slug>`. Prefixes assumed:

```sparql
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX owl:  <http://www.w3.org/2002/07/owl#>
PREFIX vc:   <https://owf.example/owf/ns/v3#>
```

Turbine, wave-height and campaign values below are illustrative; the shape of each
query is the point.

---

## CQ1: Which maintenance tasks are executable only inside a weather window?

Exercises the marine-operations x asset-engineering bridge (`Weather Window`).

```sparql
SELECT ?task WHERE {
  ?task rdfs:subClassOf* urn:owf:class/reliability-maintenance .
  ?task vc:requires urn:owf:class/weather-window .
}
```

## CQ2: When a turbine is curtailed, what is the revenue impact under its CfD?

Exercises the energy-markets x commercial-finance bridge (`Curtailment`).

```sparql
SELECT ?curtailment ?support WHERE {
  ?curtailment rdfs:subClassOf* urn:owf:class/dispatch-curtailment .
  ?curtailment vc:bridgesTo ?support .
  ?support rdfs:subClassOf* urn:owf:class/revenue-support .
}
```

## CQ3: Which turbines have an open cable-failure incident and an active insurance claim?

Exercises the asset-engineering x marine-operations x insurance bridge
(`Cable Failure`) over ABox individuals.

```sparql
SELECT ?turbine WHERE {
  ?turbine a owl:NamedIndividual ;
           vc:hasPart ?cable .
  ?failure skos:related ?cable ;
           rdfs:subClassOf* urn:owf:class/cable-failure .
  ?claim skos:related ?failure ;
         rdfs:subClassOf* urn:owf:class/insurance-claims .
}
```

## CQ4: Which jack-up campaigns are planned, and which components do they replace?

Exercises `Jack-up Campaign` (campaign-planning) linking to component classes.

```sparql
SELECT ?campaign ?component WHERE {
  ?campaign rdfs:subClassOf* urn:owf:class/campaign-planning .
  ?campaign vc:enables ?exchange .
  ?exchange vc:uses ?component .
  ?component rdfs:subClassOf* urn:owf:class/turbine-systems .
}
```

## CQ5: Which met-ocean parameters gate crew-transfer vessel access?

Exercises weather-metocean to access-transfer, and alignment to QUDT quantity kinds.

```sparql
SELECT ?param ?qudt WHERE {
  urn:owf:class/crew-transfer vc:requires ?window .
  ?window vc:dependsOn ?param .
  ?param rdfs:subClassOf* urn:owf:class/weather-metocean .
  OPTIONAL { ?param skos:closeMatch ?qudt . }
}
```

## CQ6: List every cross-domain bridge class and the domains it connects.

Exercises bridging as first-class data. A bridge is a class whose `subClassOf`
parents fall in more than one domain.

```sparql
SELECT ?bridge (COUNT(DISTINCT ?dom) AS ?domains) WHERE {
  ?bridge rdfs:subClassOf ?parent .
  ?parent vc:sourceDomain ?dom .
} GROUP BY ?bridge HAVING (COUNT(DISTINCT ?dom) > 1)
```

## CQ7: Which assets are grounded in the data lake, and which are authored only?

Exercises the grounding block. Separates evidenced entities from synthetic ones.

```sparql
SELECT ?entity ?method WHERE {
  ?entity vc:grounding ?g .
  ?g vc:method ?method .
  FILTER (?method IN ("extracted", "inferred", "authored"))
}
```

## CQ8: Which warranty claims are linked to a condition-monitoring alarm?

Exercises the asset-engineering x commercial-finance path (`Warranty Claim`).

```sparql
SELECT ?claim ?alarm WHERE {
  ?claim rdfs:subClassOf* urn:owf:class/warranty-liability .
  ?claim vc:dependsOn ?alarm .
  ?alarm rdfs:subClassOf* urn:owf:class/condition-monitoring .
}
```

## CQ9: Which classes align to an external standard, and to which term?

Exercises `sameAs` / `closeMatch` external alignment.

```sparql
SELECT ?class ?external WHERE {
  { ?class owl:sameAs ?external } UNION { ?class skos:closeMatch ?external }
  FILTER (!STRSTARTS(STR(?external), "urn:owf:"))
}
```

## CQ10: What is the confidence distribution across extracted, inferred and authored entities?

Exercises grounding as an auditable evidence signal, not a badge.

```sparql
SELECT ?method (COUNT(?entity) AS ?n) (AVG(?conf) AS ?meanConfidence) WHERE {
  ?entity vc:grounding ?g .
  ?g vc:method ?method ;
     vc:confidence ?conf .
} GROUP BY ?method
```

---

## Using these as a gate

A question that returns zero rows is either a real absence in the operator's world
or a missing page. Rank the empty ones by how central the concept is (inbound
wikilinks x sparse relations) and author from the top. CQ7 and CQ10 MUST never be
empty once any entity exists; if they are, the grounding gate in
[gate-config.md](gate-config.md) is misconfigured. If answering a new question
requires a distinction the Domain axis and bridging cannot express, that question,
and only that question, justifies a second axis (INV-CQ1).
