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