{
"use strict";



class fishedNode extends jtree.GrammarBackedRootNode {
      createParser() {
  return new jtree.TreeNode.Parser(this._getBlobNodeCatchAllNodeType(), Object.assign(Object.assign({}, super.createParser()._getFirstWordMap()), {"command" : commandNode}), undefined)
  }
getGrammarProgramRoot() {
        if (!this._cachedGrammarProgramRoot)
          this._cachedGrammarProgramRoot = new jtree.GrammarProgram(`fishedNode
 description A text serialization format for Fish Shell's history file.
 root
 inScope commandNode
 example
  command git checkout file.txt
   when 1565133286
   pwd /home/me/dir/
   paths file.txt
anyCell
 highlightScope string
intCell
 highlightScope constant.numeric.integer
keywordCell
 highlightScope keyword
abstractKeywordNode
 firstCellType keywordCell
 abstract
commandNode
 extends abstractKeywordNode
 inScope whenNode pwdNode pathsNode
 cells anyCell anyCell anyCell
whenNode
 extends abstractKeywordNode
 cells intCell
pwdNode
 extends abstractKeywordNode
 cells anyCell
pathsNode
 extends abstractKeywordNode
 cells anyCell`)
        return this._cachedGrammarProgramRoot
      }
static getNodeTypeMap() { return {"fishedNode": fishedNode,
"abstractKeywordNode": abstractKeywordNode,
"commandNode": commandNode,
"whenNode": whenNode,
"pwdNode": pwdNode,
"pathsNode": pathsNode }}
    }

class abstractKeywordNode extends jtree.GrammarBackedNonRootNode {
      
    }

class commandNode extends abstractKeywordNode {
      createParser() {
  return new jtree.TreeNode.Parser(undefined, Object.assign(Object.assign({}, super.createParser()._getFirstWordMap()), {"when" : whenNode,
"pwd" : pwdNode,
"paths" : pathsNode}), undefined)
  }
get anyCell() {
      return this.getWord(1)
    }
get anyCell() {
      return this.getWord(2)
    }
get anyCell() {
      return this.getWord(3)
    }
    }

class whenNode extends abstractKeywordNode {
      get intCell() {
      return parseInt(this.getWord(1))
    }
    }

class pwdNode extends abstractKeywordNode {
      get anyCell() {
      return this.getWord(1)
    }
    }

class pathsNode extends abstractKeywordNode {
      get anyCell() {
      return this.getWord(1)
    }
    }

window.fishedNode = fishedNode
}