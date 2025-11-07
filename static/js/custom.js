const AsyncFunction = async function(){}.constructor;
function Concept(_key){
    return {_key, __proto__: Concept.prototype};
}
Concept.prototype.setChild = Concept.setChild = function setChild(name){
    const child = Concept(name);
    this[name] = child;
    return child;
}
Concept.prototype.setStatic = function setStatic(func){
    this[func.name] = func;
    return this;
}

const Language = logseq.Language = Concept.setChild("Language");
const Module = logseq.Module = Concept.setChild("Module");

const Kits = Module.setChild("Kits")
.setStatic(function addClickEventToButton(handler, button){
    button.addEventListener("click", function onClicked(e){
        e.preventDefault();
        e.stopPropagation();
        handler(e);
    });
})
.setStatic(function createElementOfClass(tag, className, ...children){
    const elem = document.createElement(tag);
    elem.classList.add(className);
    elem.append(...children);
    return elem;
})
.setStatic(function evalDiv(div){
    const blockId = div && div.getAttribute("blockid");
    const block = logseq.api.get_block(blockId);
    const divRow = Kits.onParentEvalStarted(div);
    Kits.runRoot(block).then(Kits.onParentEvalFinished.bind(null, divRow));
})
.setStatic(function getKitByName(name){
    var handler = kits[name];
    if (typeof handler === "function") return Promise.resolve(handler);

    return Kits.runPageByName(name).then( ()=>kits[name] );
})
.setStatic(function loadDependencies(dependencies){
    const langs = Object.values(dependencies);
    if (langs.length < 1) return;

    return Promise.all(langs.map( (lang)=>lang.load() ))
        .then( ()=>(new Promise( (resolve)=>setTimeout(resolve, 1000) )) );
})
.setStatic(function onLoadFailed(module, er){
    Msg.ofStatus("could not load " + module, "error");
    throw(er);
})
.setStatic(function onObserverFinished(nofFound, missing){
    if (nofFound) Msg.info("handled " + nofFound + " macro(s)");
    if (missing.length > 1) Msg.warning(missing.join("\n"));
})
.setStatic(function onParentEvalFinished(divRow, res){
    if (typeof res === "string" && res.slice(0, 10) === "data:image") {
        const img = Kits.createElementOfClass("img", "out");
        img.setAttribute("src", res);
        res = img;
    }

    divRow.lastChild.remove();
    divRow.lastChild.after("=>", Kits.createElementOfClass("span", "out", res));
})
.setStatic(function onParentEvalStarted(container){
    const btnRemove = Kits.createElementOfClass("button", "out", "X");
    const divRow = Kits.createElementOfClass("div", "out", btnRemove, "...running...");

    const wrapper = container.getElementsByClassName("block-content-wrapper")[0];
    wrapper.append(divRow);

    Kits.addClickEventToButton(Kits.onRemoveClicked.bind(null, wrapper), btnRemove);
    return divRow;
})
.setStatic(function onRemoveClicked(wrapper, e){
    if (!e.ctrlKey) return e.target.parentElement.remove();
    if (!e.shiftKey) {
        return Kits.removeElems(wrapper.querySelectorAll("div.out"));
    }

    const divs = document.querySelectorAll("div.ls-block div[data-lang]");
    Array.prototype.forEach.call(divs, (div)=>{
        const container = div.closest("div.ls-block");
        Kits.removeElems(container.querySelectorAll("div.out"));
    });
})
.setStatic(function onRootRunFailed(er){
    Msg.error("run failed");
    throw(er);
})
.setStatic(function onRootRunFinished(nofCodeblocks, res){
    Msg.success("ran " + nofCodeblocks + " codeblock(s)");
    return res;
})
.setStatic(function removeElems(elems){
    Array.prototype.forEach.call(elems, (elem)=>elem.remove() );
})
.setStatic(function runRoot(root){
    var begin;
    const dependencies = {};
    var prom = new Promise( (resolve)=>begin=resolve )
        .then(Kits.loadDependencies.bind(null, dependencies));

    var nofCodeblocks = 0;
    const blocks = (root.children) ? [root] : logseq.api.get_page_blocks_tree(root.name);
    blocks.forEach(Kits.traverseBlocksTree, (block)=>{
        const content = block.content;
        const codeStart = content.indexOf("```") + 3;
        if (codeStart < 3) return;

        const langEnd = content.search(/\w\W/);
        const strLang = content.slice(codeStart, langEnd + 1);
        var lang = logseq.Language[strLang];
        if (!lang) return;

        if (!lang.eval) dependencies[lang._key] = lang;
        const lineEnd = content.indexOf("\n", codeStart);
        const codeEnd = content.indexOf("```", lineEnd);
        if (codeEnd < 0) return;

        nofCodeblocks += 1;
        const code = content.slice(lineEnd, codeEnd);
        prom = prom.then( ()=>lang.eval(code) );
    });

    begin();
    return prom
        .then(Kits.onRootRunFinished.bind(null, nofCodeblocks))
        .catch(Kits.onRootRunFailed);
})
.setStatic(function runPageByName(pageName){
    var page = logseq.api.get_page(pageName);
    if (page) return Kits.runRoot(page);

    Msg.warning("page not found");
    return Promise.resolve();
})
.setStatic(function traverseBlocksTree(block){
    if (Array.isArray(block)) return;

    this(block);
    block.children.forEach(traverseBlocksTree, this);
});

const Msg = Module.setChild("Msg")
.setStatic(function cond(status, msg){
    if (Msg.state === "on") Msg.ofStatus(msg, status);
});
Msg.error = Msg.cond.bind(null, "error");
Msg.info = Msg.cond.bind(null, "info");
Msg.success = Msg.cond.bind(null, "success");
Msg.warning = Msg.cond.bind(null, "warning");
Msg.ofStatus = logseq.api.show_msg;
Msg.state = "off";

const JS = Language.setChild("javascript")
.setStatic(function eval(code){
    return AsyncFunction(code)();
});

const Python = Language.setChild("python")
.setStatic(function load(uri){
    Msg.ofStatus("Preparing python...", "info");
    return import(uri || Python.pyodideUri)
        .then(Python.onLoaderFetched)
        .then(Python.onPyodideLoaded)
        .catch(Python.onFail);
})
.setStatic(function onLoaderFetched(loader){
    return loader.loadPyodide();
})
.setStatic(function onPyodideLoaded(Pyodide){
    Python.Pyodide = Pyodide;
    Python.eval = Pyodide.runPythonAsync.bind(Pyodide);
    Msg.ofStatus("Python ready", "success");
});
Python.onFail = Kits.onLoadFailed.bind(null, "pyodide");
Python.pyodideUri = "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.mjs";

const R = Language.setChild("r")
.setStatic(function load(uri){
    Msg.ofStatus("Preparing R...", "info");
    return import(uri || R.webrUri)
        .then(R.onModuleFetched)
        .then(R.onWebrLoaded)
        .catch(R.onFail);
})
.setStatic(function onModuleFetched(module){
    R.module = module;
    const webR = new module.WebR();
    return webR.init().then( ()=>webR );
})
.setStatic(function arrayFromRes(res){
    if (res.toArray) return res.toArray().then(arrayFromRes);
    if (!Array.isArray(res)) return Promise.resolve(res);
    return Promise.all(res.map(arrayFromRes));
})
.setStatic(function onWebrLoaded(Webr){
    R.Webr = Webr;
    R.eval = function(code){
        return Webr.evalR(code).then(R.arrayFromRes);
    }
    Msg.ofStatus("R ready", "success");
});
R.onFail = Kits.onLoadFailed.bind(null, "webr");
R.webrUri = "https://webr.r-wasm.org/latest/webr.mjs";

const kits = logseq.kits = Concept.setChild("kits")
kits.evalpage = Kits.addClickEventToButton.bind(null, function onEvalPageClicked(e){
    document.querySelectorAll("div.ls-block div[data-lang]").forEach( (div)=>{
        Kits.evalDiv(div.closest("div.ls-block"));
    });
});
kits.evalparent = Kits.addClickEventToButton.bind(null, function onEvalParentClicked(e){
    const child = e.target.closest("div.ls-block");
    Kits.evalDiv(child.parentElement.closest("div.ls-block"));
});
kits.runpage = Kits.addClickEventToButton.bind(null, function onRunPageClicked(e){
    var pageName = e.target.dataset.pageName || "";
    if (pageName === "current page") {
        const page = logseq.api.get_current_page();
        if (page) pageName = page.name;
    }
    Kits.runPageByName(pageName);
});
kits.togglemsg = Kits.addClickEventToButton.bind(null, function onToggleMsgClicked(e){
    Msg.state = (Msg.state === "on") ? "off" : "on";
    Msg.ofStatus("Messages " + Msg.state, "success");
});

const kitelems = document.getElementsByClassName("kit");
const kitsObserver = new MutationObserver(function onMutated(){
    var nofFound = 0;
    const missing = ["Missing kit(s): "];

    const proms = Array.prototype.map.call(kitelems, (elem)=>{
        const data = elem.dataset;
        const status = data.kitStatus;
        if (status === "handled") return;

        if (data.pageName === "$1") {
            data.pageName = "current page";
            elem.textContent = elem.textContent.replace("page $1", "current page");
        }

        data.kitStatus = "handled";
        const kitName = data.kit;
        return Kits.getKitByName(kitName).then( (handler)=>{
                if (typeof handler !== "function") {
                    missing.push(kitName);
                    return;
                }

                handler(elem);
                nofFound += 1;
            });
    });

    Promise.all(proms).then( ()=>{
        Kits.onObserverFinished(nofFound, missing);
    });
});
kitsObserver.observe(document.getElementById("app-container"), {
    attributes: true,
    subtree: true,
    attributeFilter: ["class"]
});
Msg.ofStatus("kits ok", "success");