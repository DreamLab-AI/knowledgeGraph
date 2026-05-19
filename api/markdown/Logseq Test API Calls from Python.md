schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#LogseqTestAPICallsFromPython
legacy_uri:: urn:visionclaw:concept:infrastructure:logseq-test-api-calls-from-python
public:: true

# Logseq Test API Calls from Python
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:90d7ef5997027469f7848a929c69600101f6997febeff053d2dafe589b008c73",
  "@type": "Page",
  "vc:slug": "logseq-test-api-calls-from-python",
  "title": "Logseq Test API Calls from Python",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-867bd810ee06"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "infrastructure"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/infrastructure#LogseqTestAPICallsFromPython"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Logseq Test API Calls from Python"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:infrastructure:logseq-test-api-calls-from-python"
    },
    {
      "vc:key": "status",
      "vc:value": "stub"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:infrastructure:logseq-test-api-calls-from-python"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:90d7ef5997027469f7848a929c69600101f6997febeff053d2dafe589b008c73@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```



```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:logseq-test-api-calls-from-python:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:90d7ef5997027469f7848a929c69600101f6997febeff053d2dafe589b008c73"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:90d7ef5997027469f7848a929c69600101f6997febeff053d2dafe589b008c73@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Logseq Test API Calls from Python is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:LogseqTestAPICallsFromPython
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - API Calls that can be used from python from the logseq code file ['logseq clojure api.cljs'](https://github.com/logseq/logseq/blob/088ca5e59228412b446cd704a6856b2b396fe941/src/main/logseq/api.cljs#L515)
  - #+BEGIN_IMPORTANT
	  Run helper scripts before any other scripts
	  #+END_IMPORTANT
  - ```python
	  def props(title,obj):
	    print("---------------------------\n")
	    try:
	      keys=obj.object_keys()
	      vals=obj.object_values()
	      output=title+" Objects\n"
	      for ctr in range(len(keys)):
	        output+=f"{str(keys[ctr]) : <12}  =>  {str(vals[ctr]) : <40}\n"
	    except:
	      output="Not an object"
	    print(output)
	    return output
	  ```
		- {{evalparent}}
		- ```python
		  import js
		  js.logseq.api.show_msg("Message 1 from python")
		  js.logseq.api.show_msg("Message 2 from python")
		  "Done"
		  ```
			- {{evalparent}}
		- ```python
		  import js
		  js.alert("Output from python")
		  "Done"
			  ```
				- {{evalparent}}
		- Step 2 send output to the end of page 'execution log' and open in right sidebar
		- ```python
		  import js
		  # log_output appends output to page 'Execution Log'
		  log_output("This is some output that is directed to the page 'Execution Log'",
		             clearlog=True)
		  log_output("and this is more output")
		  log_output(str(3*4))
		  output_page="Execution Log".lower() #API always uses lower case page names
		  page=js.logseq.api.get_page(output_page)
		  # for convenience open the execution log in the right panel
		  js.logseq.api.open_in_right_sidebar(page.uuid)
		  "Done"
			  ```
				- {{evalparent}}
		- get_current_graph() #apicall-ok
			- ```python
			  import js
			  js.alert(props("Current Graph",js.logseq.api.get_current_graph()))
			  "Done"
			  ```
				- {{evalparent}}
		- clear_right_sidebar_blocks() #apicall-ok
			- ```python
			  import js
			  js.logseq.api.clear_right_sidebar_blocks()
			  "Done"
			  ```
				- {{evalparent}}
		- quit() #apicall-ok
			- ```python
			  import js
			  js.logseq.api.quit()
			  ```
				- {{evalparent}}
		- set_left_sidebar_visible("toggle") #apicall-ok
			- ```python
			  import js
			  js.logseq.api.set_left_sidebar_visible("toggle")
			  "Done"
			  ```
				- {{evalparent}}
		- append_block_in_page(pageUUID/pagename,content) #apicall-ok
			- ```python
			  import js
			  import datetime
			  js.logseq.api.append_block_in_page("testpage","appended block content - "+str(datetime.datetime.now()))
			  "Done"
			  ```
				- {{evalparent}}
				- TODO what is the purpose of this function
		- create_page(pagename,properties,options) #apicall-ok
			- ```python
			  import js
			  js.logseq.api.create_page("New Page")
			  "Done"
			  ```
				- {{evalparent}}
		- TODO edit_block(blockUUID,options) can this be used to change a block? #apicall-not-ok
			- ```python
			  import js
			  block=js.logseq.api.get_current_block()
			  js.edit_block(block.UUID)
			  ```
				- {{evalparent}}
			- TODO repo = ?
		- get_block(blockUUID) #apicall-ok
			- I am the previous sibling
			- I am a block with a hidden fixed id of 000fc4bc-720e-4984-ab3a-300732c8900
			- ```python
			  import js
			  block=js.logseq.api.get_block("000fc4bc-720e-4984-ab3a-300732c89000")
			  js.alert(props("block",block))
			  "Done"
			  ```
				- {{evalparent}}
		- get_block_property(blockUUID,key) #apicall-ok
			  this is a test block with properties and a hidden fixed id 222fc4bc-720e-4984-ab3a-300732c89222
			- ```python
			   import js
			   blockproperty = js.logseq.api.get_block_property("222fc4bc-720e-4984-ab3a-300732c89222","prop2")
			   js.alert("Property prop1 has value => "+blockproperty)
			   "Done"
			  ```
				- {{evalparent}}
		- get_current_page() #apicall-ok
			- ```python
			  import js
			  page=js.logseq.api.get_current_page()
			  js.alert(props("Current Page",page))
			  ```
				- {{evalparent}}
		- get_editing_block_content() #apicall-ignore
			- TODO Not sure whether need to be in editing mode
			- ```python
			  import js
			  content=js.logseq.api.get_editing_block_content()
			  js.alert("Current Block Content => ",str(content))
			  "Done"
			  ```
				- {{evalparent}}
		- get_next_sibling_block(blockUUID) #apicall-ok
			- ```python
			  import js
			  block=js.logseq.api.get_block("000fc4bc-720e-4984-ab3a-300732c89000")
			  nextsiblingblock=js.logseq.api.get_next_sibling_block("000fc4bc-720e-4984-ab3a-300732c89000")
			  output=nextsiblingblock.content
			  output
			  ```
				- {{evalparent}}
		- get_page_blocks_tree(pagename/pageUUID) #apicall-ok
			- ```python
			  import js
			  pagerequested="PythonSample1"
			  page=js.logseq.api.get_page_blocks_tree(pagerequested.lower()) #note page name must be lower case 
			  js.alert(props("Page PythonSample1 Block Tree",page))
			  "Done"
			  ```
				- {{evalparent}}
		- get_pages_from_namespace(namespace) #apicall-ok
			- ```python
			  import js
			  output=""
			  pages=js.logseq.api.get_pages_from_namespace("namespace1")
			  pagenames=[]
			  for page in pages:
			    pagenames.append(page.originalName)
			  pagenames.sort()
			  for pagename in pagenames:
			    output+=f'page = > {pagename}\n'
			  output
			  ```
				- {{evalparent}}
		- get_previous_sibling_block(blockUUID) #apicall-ok
			- ```python
			  import js
			  block=js.logseq.api.get_block("000fc4bc-720e-4984-ab3a-300732c89000")
			  prevsiblingblock=js.logseq.api.get_previous_sibling_block("000fc4bc-720e-4984-ab3a-300732c89000")
			  output=prevsiblingblock.content
			  output
			  ```
				- {{evalparent}}
		- insert_at_editing_cursor(content) #apicall-ignore
		- insert_batch_block(blockUUID,batchblocks,options) #apicall-ignore
			- TODO batchblocks?
			- TODO options?
		- insert_block(blockUUID/pagename,content,options) #apicall-untested
		- move_block(srcblockUUID,targetblockUUID,options) #apicall-untested
			- TODO options?
		- new_block_uuid #apicall-untested
		- open_in_right_sidebar(blockUUID/PageUUID) #apicall-ok
			- ```python
			  import js
			  pagename="testpage"
			  page=js.logseq.api.get_page(pagename.lower())
			  js.logseq.api.open_in_right_sidebar(page.id)
			  "Done"
			  ```
				- {{evalparent}}
		- remove_block(blockUUID,options) #apicall-ok
			- please remove me!
			- ```python
			  import js
			  currentblock=js.logseq.api.get_current_block()
			  prevsiblingblock=js.logseq.api.get_previous_sibling_block(currentblock.uuid)
			  js.logseq.api.remove_block(prevsiblingblock.uuid)
			  js.alert("block has been removed..put it back manually before running this test again")
			  "Done"
			  ```
				- {{evalparent}}
		- rename_page() #apicall-not-ok
			- gets an arity error. Do not exercise on this page! test on a junk page
		- restore_editing_cursor() #apicall-ignore
		- select_block() #apicall-ignore
		- set_block_collapsed(blockUUID) #apicall-not-ok
			- ```python
			  import js
			  js.logseq.api.set_block_collapsed("000fc4bc-720e-4984-ab3a-300732c89000")
			  "Done"
			  ```
				- {{evalparent}}
			- TODO options?
		- upsert_block_property(blockUUID,key,value) #apicall-ok
			- ```python
			  import js
			  block=js.logseq.api.get_block("000fc4bc-720e-4984-ab3a-300732c89000")
			  propertykey="propA"
			  propertyvalue="value001"
			  js.logseq.api.upsert_block_property("000fc4bc-720e-4984-ab3a-300732c89000",propertykey,propertyvalue)
			  "Done"
			  ```
				- {{evalparent}}
		- datascript_query(query & inputs) #apicall-ok
			- ```python
			  import js
			  output=""
			  advancedquery= \
			  '[' + \
			  ':find (pull ?block [*]) ' + \
			  ':where ' + \
			  '[?block :block/original-name ?originalpagename] ' + \
			  '[?block :block/name ?pagename]' + \
			  '[(= ?pagename "contents")]' + \
			  ']'
			  blocks=js.logseq.api.datascript_query(advancedquery)
			  for block in blocks:
			    selectedblock=block[0]
			    output+="\npage name = > "+selectedblock.name+'\n'
			    output+="page uuid = >" +selectedblock.uuid+'\n'
			  output
			  ```
				- {{evalparent}}
		- download_graph_db() #apicall-ok
			- ```python
			  import js
			  js.logseq.api.download_graph_db()
			  "Done"
			  ```
				- {{evalparent}}
		- q(querystring) #apicall-ok
			- *query (task TODO)*
			- ```python
			  import js
			  output=""
			  blocks=js.logseq.api.q("(task TODO)")
			  for block in blocks:
			    output+=block.content+'\n'
			  output
			  ```
				- {{evalparent}}
		- show_msg(msg) #apicall-ok
			- ```python
			  import js
			  js.logseq.api.show_msg("This is a message using show_msg API call")
			  "Done"
			  ```
				- {{evalparent}}
		- ui_close_msg(msg) #apicall-untested
		- assets_list_files_of_current_graph sdk-assets/list_files_of_current_graph #apicall-ignore
		- assets_make_url sdk-assets/make_url #apicall-ignore
		- make_asset_url sdk-assets/make_url #apicall-ignore
		- exper_load_scripts #apicall-ignore
		- exper_register_fenced_code_renderer #apicall-ignore
		- exper_register_extensions_enhancer #apicall-ignore
		- exper_request #apicall-ignore
		- http_request_abort #apicall-ignore
		- get_template(templatename) #apicall-ignore
		- insert_template(targetUUID,templatename) #apicall-ignore
		- exist_template(templatename) #apicall-ignore
		- create_template(targetUUID,templatename) #apicall-ignore
		- remove_template(templatename) #apicall-ignore
		- query_element_by_id #apicall-ignore
		- query_element_rect #apicall-ignore
		- set_focused_settings #apicall-ignore
		- force_save_graph #apicall-ignore
		- set_blocks_id #apicall-ignore
  - append_block_in_page
  - assets_list_files_of_current_graph sdk-assets/list_files_of_current_graph
  - assets_make_url sdk-assets/make_url
  - check_editing
  - clear_right_sidebar_blocks
  - create_page
  - create_template
  - custom_query
  - datascript_query
  - delete_page
  - download_graph_db
  - download_graph_pages
  - edit_block
  - exec_git_command
  - exist_template
  - exit_editing_mode
  - exper_load_scripts
  - exper_register_extensions_enhancer
  - exper_register_fenced_code_renderer
  - exper_request
  - force_save_graph
  - get_all_pages
  - get_app_info
  - get_block api-block/get_block
  - get_block_properties
  - get_block_property
  - get_current_block
  - get_current_graph
  - get_current_page
  - get_current_page_blocks_tree
  - get_editing_block_content
  - get_editing_cursor_position
  - get_next_sibling_block
  - get_page
  - get_page_blocks_tree
  - get_page_linked_references
  - get_pages_from_namespace
  - get_pages_tree_from_namespace
  - get_previous_sibling_block
  - get_selected_blocks
  - get_template
  - git_exec_command sdk-git/exec_command
  - git_load_ignore_file sdk-git/load_ignore_file
  - git_save_ignore_file sdk-git/save_ignore_file
  - http_request_abort
  - insert_at_editing_cursor
  - insert_batch_block
  - insert_block
  - insert_template
  - invoke_external_command
  - make_asset_url sdk-assets/make_url
  - move_block
  - new_block_uuid
  - open_external_link
  - open_in_right_sidebar
  - prepend_block_in_page
  - q
  - query_element_by_id
  - query_element_rect
  - quit
  - register_plugin_simple_command
  - register_plugin_slash_command
  - relaunch
  - remove_block
  - remove_block_property
  - remove_template
  - rename_page
  - restore_editing_cursor
  - save_focused_code_editor_content
  - search
  - select_block
  - set_block_collapsed
  - set_blocks_id
  - set_focused_settings
  - set_left_sidebar_visible
  - set_right_sidebar_visible
  - show_msg sdk-ui/-show_msg
  - ui_close_msg sdk-ui/close_msg
  - ui_show_msg sdk-ui/show_msg
  - update_block
  - upsert_block_property
  - validate_external_plugins [urls]
  - write_plugin_storage_file
  - write_user_tmp_file

  - ## Helper python functions
	  ```
		- {{evalparent}}
  - ```python
	  def log_output(content,clearlog=False):
	    import datetime
	    output_page="Execution Log" #API always uses lower case page names
	    if clearlog:
	      logpage=js.logseq.api.get_page(output_page.lower())
	      blocks=js.logseq.api.get_page_blocks_tree(logpage.uuid)
	      for block in blocks:
	        js.logseq.api.remove_block(block.uuid)

	    js.logseq.api.append_block_in_page(
	      output_page,
	      str(datetime.datetime.now())[:19]+" => "+content)
	  "Done"
  - ## Python Output Tests
  - ### Display Logseq Popup Message
		  ```
			- {{evalparent}}
  - ### Display output on Developer Console
		- ```python
		  print("Output from python")
		  "Done"
  - ### Display a Javascript alert from python
		  ```
			- {{evalparent}}
  - ### Display to a page called 'execution log'
		- Step 1 create page 'Execution Log'
			- ```python
			  import js
			  js.logseq.api.create_page("Execution Log")
			  "Done"
		  ```
			- {{evalparent}}
  - ## API calls by Area
  - ### Core API Calls
		- get_app_info() #apicall-ok
			- ```python
			  import js
			  js.alert(props("App Info",js.logseq.api.get_app_info()))
			  "Done"
			  ```
				- {{evalparent}}
		- save_focused_code_editor_content() #apicall-ignore
		- write_user_tmp_file(content) #apicall-ok
			- ```python
			  import js
			  # write a file to tmp folder in the .logseq folder in the home directory
			  js.logseq.api.write_user_tmp_file("fred","user contents")
			  "Done"
  - ### App API Calls
			  ```
				- {{evalparent}}
		- invoke_external_command #apicall-untested
		- open_external_link(url) #apicall-ok
			- ```python
			  import js
			  js.logseq.api.open_external_link("https://www.google.com")
			  "Done"

			  ```
				- {{evalparent}}
		- relaunch() #apicall-ok
			- ```python
			  import js
			  js.logseq.api.relaunch()
			  ```
				- {{evalparent}}
		- set_right_sidebar_visible("toggle") #apicall-ok
			- ```python
			  import js
			  js.logseq.api.set_right_sidebar_visible("toggle")
			  "Done"
  - ### Editor API Calls
			  ```
				- {{evalparent}}
		- check_editing() #apicall-ok
			- ```python
			  import js
			  js.logseq.api.check_editing() #returns a UUID
			  ```
				- {{evalparent}}
			- TODO properties?
			- TODO options?
		- delete_page(pagename) #apicall-ok
			- ```python
			  import js
			  js.logseq.api.delete_page("New Page")
			  "Done"
			  ```
				- {{evalparent}}
			- This is a test block that can be edited
			- TODO options?
		- TODO exit_editing_mode(select?) #apicall-not-ok
		- get_all_pages(repo) #apicall-ok
			- ```python
			  import js
			  output=""
			  pages=js.logseq.api.get_all_pages()
			  pagenames=[]
			  for page in pages:
			    pagenames.append(page.originalName)
			  pagenames.sort()
			  for pagename in pagenames:
			    output+=f'page = > {pagename}\n'
			  output

			  ```
				- {{evalparent}}
			- I am the next sibling
		- get_block_properties(blockUUID) #apicall-ok
			- prop1:: blockproperty1
			  prop2:: blockproperty2
				- this is a test block with properties and also a hidden fixed UUID 111fc4bc-720e-4984-ab3a-300732c89111
			- ```python
			  import js
			  blockprops=js.logseq.api.get_block_properties("111fc4bc-720e-4984-ab3a-300732c89111")
			  js.alert(props("",blockprops))
			  "Done"
			  ```
				- {{evalparent}}
		- get_current_block(options) #apicall-ok
			- ```python
			  import js
			  block=js.logseq.api.get_current_block()
			  js.alert(props("block",block))
			  "Done"
			  ```
				- {{evalparent}}
		- get_current_page_blocks_tree() #apicall-ok
			- ```python
			  import js
			  blockstree=js.logseq.api.get_current_page_blocks_tree()
			  for block in blockstree:
			    print("---------\nblock "+str(block))
			    print("content = > "+block.content)
			  js.alert(props("Current Page Blocks Tree",blockstree))
			  ```
				- {{evalparent}}
		- get_editing_cursor_position() #apicall-ignore
			- TODO Not sure whether need to be in editing mode
			- ```python
			  import js
			  cursorpos=js.logseq.api.get_editing_cursor_position()
			  js.alert("Current Editing Cursor Position => ",str(cursorpos))
			  "Done"
			  ```
				- {{evalparent}}
		- get_page(pagename/UUID) #apicall-ok
			- ```python
			  import js
			  pagerequested="PythonSample1"
			  page=js.logseq.api.get_page(pagerequested.lower()) #note page name must be lower case 
			  if page == None:
			    js.alert(f"page '{pagerequested}' not found")
			  else:
			    js.alert(props("Page PythonSample1 Properties",page))
			  "Done"
			  ```
				- {{evalparent}}
		- get_page_linked_references(pagename/pageUUID) #apicall-ok
			- ```python
			  import js
			  pagerequested="PythonSample1"
			  pagelinkedrefs=js.logseq.api.get_page_linked_references(pagerequested.lower()) #note page name must be lower case 
			  output=""
			  for linkedrefobj in pagelinkedrefs:
			    print("linkedrefobj => ",linkedrefobj[0].originalName)
			    output+="link ref => "+linkedrefobj[0].originalName+"\n"
			  js.alert(output)
			  "Done"
			  ```
				- {{evalparent}}
		- get_pages_tree_from_namespace(namespace) #apicall-ok
			- ```python
			  import js
			  output=""
			  pages=js.logseq.api.get_pages_tree_from_namespace("namespace1")
			  pagenames=[]
			  for page in pages:
			    pagenames.append(page.originalName)
			  pagenames.sort()
			  for pagename in pagenames:
			    output+=f'page = > {pagename}\n'
			  output
			  ```
				- {{evalparent}}
		- get_selected_blocks() #apicall-ok
			- ```python
			  import js
			  output=""
			  blocks=js.logseq.api.get_selected_blocks()
			  try:
			    for block in blocks:
			      output+="block content =>"+block.content
			  except:
			    output="No blocks selected"
			  output
			  ```
				- {{evalparent}}
		- prepend_block_in_page(pageUUID/pagename,content) #apicall-not-ok
			- TODO prepend seems to append a block to the page rather than inserting the block as the first block of the page
			- ```python
			  import js
			  pagename="testpage"
			  page=js.logseq.api.get_page(pagename.lower())
			  js.logseq.api.prepend_block_in_page(page.uuid,"I am a prepended block I should be the first block on the page")
			  "Done"
			  ```
				- {{evalparent}}
		- remove_block_property(blockUUID),key #apicall-ok
			- ```python
			  import js
			  block=js.logseq.api.get_block("000fc4bc-720e-4984-ab3a-300732c89000")
			  propertykey="propA"
			  propertyvalue="value001"
			  js.logseq.api.remove_block_property("000fc4bc-720e-4984-ab3a-300732c89000",propertykey,propertyvalue)
			  "Done"
			  ```
				- {{evalparent}}
		- update_block(blockUUID,options) #apicall-ok
			- ```python
			  import js
			  block=js.logseq.api.get_block("000fc4bc-720e-4984-ab3a-300732c89000")
			  newcontent="I am a new first line\n"+block.content
			  js.logseq.api.update_block("000fc4bc-720e-4984-ab3a-300732c89000",newcontent)
			  "Done"
			  ```
				- {{evalparent}}
  - ### Database (db API Calls
		- custom_query(querystring) #apicall-ok
			- ```python
			  import js
			  output=""
			  blocks=js.logseq.api.custom_query("(task TODO)") #{{query (task TODO)}}
			  for block in blocks:
			    output+=block.content+'\n'
			  output
			  ## query - find a page called contents
			  ```
				- {{evalparent}}
			- ```python
			  import js
			  output=""
			  ## query - find all blocks with tag TODO
			  advancedquery = \
			  '[' + \
			  ':find (pull ?block [*]) ' + \
			  ':where ' + \
			  '[?block :block/content ?blockcontent] ' + \
			  '[?block :block/marker ?marker]' + \
			  '[(contains? #{"TODO"} ?marker)]' + \
			  ']'
			  blocks=js.logseq.api.datascript_query(advancedquery)
			  for block in blocks:
			    selectedblock=block[0]
			    output+="\nblock content = > "+selectedblock.content+'\n'
			    output+="page uuid = >" +selectedblock.uuid+'\n'
			  output
			  ```
				- {{evalparent}}
		- download_graph_pages() #apicall-ok
			- ```python
			  import js
			  js.logseq.api.download_graph_pages()
			  "Done"
			  ```
				- {{evalparent}}
  - ### Search API Calls
		- search(q) is q a string? #apicall-ok
			- ```python
			  import js
			  output=""
			  blocks = await js.logseq.api.search("TODO")
			  for block in blocks.blocks:
			    obj_map = block.as_object_map() #translate returned block for python usage
			    output+="-----------------------------------\n"
			    output+=f'block uuid = {obj_map["block/uuid"]} \n'
			    output+=f'block content = {obj_map["block/content"]} \n'
			    output+=f'block page = {obj_map["block/page"]} \n'
			  output
  - ### UI API Calls
			  ```
				- {{evalparent}}
		- ui_show_msg(msg) #apicall-ok
			- ```python
			  import js
			  js.logseq.api.ui_show_msg("This is a message using ui_show_msg API call")
			  "Done"
  - ### Assets API Calls
  - ### Experiments API Calls
  - ### Templates API
  - ### Helpers API Calls
  - ## Alphabetical API List

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
