iri:: http://narrativegoldmine.com/infrastructure#Queries
uri:: urn:visionclaw:concept:infrastructure:queries
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:infrastructure:queries
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: infrastructure
preferred-term:: Queries
content-hash:: sha256-12-9accc526b3e0
status:: stub
maturity:: draft
quality-score:: 0.35
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - Queries is a concept within the ngm domain.
- ### Semantic Classification
  - owl-class:: infrastructure:Queries
  - owl-role:: Concept
- ### Relationships
  - <!-- No relationships defined -->
- ### Content
  - #+BEGIN_QUERY
  {
    :title "Private Pages"
    :query [:find (pull ?b [*])
            :where
            [?b :block/content ?content]
            (not [(clojure.string/includes? ?content "#Public")])]
  }
  #+END_QUERY
- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
