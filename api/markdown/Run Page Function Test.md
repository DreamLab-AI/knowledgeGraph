iri:: http://narrativegoldmine.com/infrastructure#RunPageFunctionTest
uri:: urn:visionclaw:concept:infrastructure:run-page-function-test
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:infrastructure:run-page-function-test
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: infrastructure
preferred-term:: Run Page Function Test
content-hash:: sha256-12-c708429ed82b
status:: stub
maturity:: draft
quality-score:: 0.50
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - Run Page Function Test is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:RunPageFunctionTest
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - {{runpage}}
  - Note
  - use of global variables to pass values between functions
  - function output accumulated into *output* variable which is displayed in the last code block to show the results of all functions executing
  - ```python
  import js
  global msgno
  msgno=0
  def msg(text):
    global msgno
    global output
    msgno+=1
    output+=str(msgno)+' ' +text+'\n'
  def loadDatabase():
      global dbdict
      global output
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
  loadDatabase()

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
