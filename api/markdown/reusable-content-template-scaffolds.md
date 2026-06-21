- ### Definition
  Templates are reusable structural scaffolds in software engineering and knowledge management that define a fixed format or pattern into which variable content is inserted. They reduce repetition, enforce consistency, and accelerate authoring across code generation, documentation, and prompt engineering workflows.

- ### Semantic Classification
  - owl-class:: infrastructure:Templates
  - owl-role:: Concept

- ### Relationships
  - enables:: [[Code Generation]], [[Documentation Generation]]
  - uses:: [[Prompt Engineering]]
  - relatedTo:: [[Knowledge Management]], [[Knowledge Management System]]

- ### Content
  - #### Evalparent template
    ```
    - {{evalparent}}
    ```
  - #### Basic Python code block
    ```python
    def sayhello():
      return "Hello World"
    sayhello()
    ```
  - #### Basic Javascript block
    ```javascript
    function sayHello() {
        return "Hello World"
    }
    return sayHello()
    ```

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z