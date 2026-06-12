- ### Definition
  - Queries are structured Datalog or advanced query expressions embedded in Logseq pages using `#+BEGIN_QUERY` / `#+END_QUERY` syntax. They dynamically retrieve and display blocks or pages matching specified conditions without modifying underlying data. In the NarrativeGoldmine ontology, Queries represent the retrieval-layer mechanism that surfaces knowledge from the graph at read time.
- ### Semantic Classification
  - owl-class:: infrastructure:Queries
  - owl-role:: Concept
- ### Relationships
  - uses:: [[Knowledge Graph]], [[Data Management]]
  - enables:: [[Information Retrieval]], [[Semantic Search]]
  - relatedTo:: [[Database Query]], [[Semantic Web Linked Data Standard]], [[Linked Data]]
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