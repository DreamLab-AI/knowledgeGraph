iri:: http://narrativegoldmine.com/infrastructure#JupyterLikeBehaviourWithinAPage
uri:: urn:visionclaw:concept:infrastructure:jupyter-like-behaviour-within-a-page
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:infrastructure:jupyter-like-behaviour-within-a-page
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: infrastructure
preferred-term:: Jupyter like behaviour within a page
content-hash:: sha256-12-c30cead8ef87
status:: stub
maturity:: draft
quality-score:: 0.35
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - Jupyter like behaviour within a page is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:JupyterLikeBehaviourWithinAPage
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - Note use of global variables to pass values between functions
  - ```python
  def loadDatabase():
      global dbdict
      dbdict = {
          "Clients": {
              "ABC Co": {
                  "Address": "13 Harper St, London WC2",
                  "CEO": "Ralph Archer",
                  "Phone": "0732 12435"
              },
              "XYZ Co": {
                  "Address": "200 Finsbury Lane, London E3",
                  "CEO": "James Miller",
                  "Phone": "0726 85786"
              }
          }
      }
      return "Database Loaded"
  loadDatabase()  # remove print
  - {{evalparent}}

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
