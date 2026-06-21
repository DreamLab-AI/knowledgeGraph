- ### Definition
  - A knowledge-management pattern that embeds executable code cells with shared global state within a page or document, mimicking the interactive notebook paradigm of Jupyter. Code blocks execute in sequence against a common variable scope, enabling data loading, transformation, and display without leaving the note-taking environment.

- ### Semantic Classification
  - owl-class:: infrastructure:JupyterLikeBehaviourWithinAPage
  - owl-role:: Concept

- ### Relationships
  - uses:: [[Python]], [[Script]]
  - partOf:: [[Knowledge Management]]
  - relatedTo:: [[Knowledge Graph]]

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
    ```
  - {{evalparent}}

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z