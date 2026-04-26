iri:: http://narrativegoldmine.com/infrastructure#Filesmanagerlog
uri:: urn:visionclaw:concept:infrastructure:files-manager-log
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:infrastructure:files-manager-log
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: infrastructure
preferred-term:: files-manager-log
content-hash:: sha256-12-1ed083fd4111
status:: stub
maturity:: draft
quality-score:: 0.35
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - files-manager-log is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:Filesmanagerlog
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  #+BEGIN_QUERY
  {:title "All files operate log"
   :query [:find (pull ?b [*])
           :in $ ?current-page
           :where
           [?p :block/name ?current-page]
           [?b :block/page ?p]
           [?b :block/content ?content]
           [(!= ?content "")]
          ]
   :inputs ["files-manager"]}
  #+END_QUERY

- ### Provenance
  - sources:: [[files-manager]]
  - migration-date:: 2026-04-26T00:00:00Z
