- ### Definition
  - Executing all code blocks in a page is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:ExecutingAllCodeBlocksInAPage
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - {{evalpage}}
  - ```javascript
	  return Math.random(); //da
	  ```
		- {{evalparent}}
  - ```python
	  # test if var1 still exists
	  global var1
	  def hello2():
	    if var1 == "VAR1":
	      return "var1 has been passed successfully from the previous code block"
	    else:
	      return "var1 did not get passed from the previous code block"
	  hello2()
	  ```
		- {{evalparent}}
  - ```python
	  # test if var1 still exists
	  global var1
	  def hello3():
	    if var1 == "VAR1":
	      return "var1 has been passed successfully from the previous code block"
	    else:
	      return "var1 did not get passed from the previous code block"
	  hello2()

  - ## Javascript code block execution
	  ```
		- {{evalparent}}
  - ## Python multiple code block execution with global variable passing between blocks
  - Note global variable var1 is passed successfully to all the following code blocks
  - ```python
	  from random import random
	  global var1
	  var1="VAR1"
	  def hello():
	    return "Hi " + var1
	  hello()
	  ```
		- {{evalparent}}
  - ```python
	  import sys
	  def run():
	  	return sys.version
	  run()
	  ```
		- {{evalparent}}

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z