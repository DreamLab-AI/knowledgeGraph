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