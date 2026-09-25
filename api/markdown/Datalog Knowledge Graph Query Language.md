Queries, in the Logseq context, are structured Datalog or advanced query expressions embedded in pages using the `#+BEGIN_QUERY` / `#+END_QUERY` syntax. They dynamically retrieve and display blocks or pages matching specified conditions—such as filtering private pages by the absence of a `#Public` tag—without modifying underlying data. In the broader NarrativeGoldmine ontology, Queries represent the retrieval-layer mechanism that surfaces knowledge from the graph at read time.

### Semantic Classification

### Content

- #+BEGIN_QUERY
  {
  :title "Private Pages"
  :query [:find (pull ?b [*])
          :where
          [?b :block/content ?content]
          (not [(clojure.string/includes? ?content "#Public")])]
  }
  #+END_QUERY

### Provenance

