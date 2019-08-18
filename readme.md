# fished Readme

A text serialization format for Fish Shell's history file.

[Try it now](http://treenotation.org/designer/#grammar%0A%20fishedNode%0A%20%20description%20A%20text%20serialization%20format%20for%20Fish%20Shell's%20history%20file.%0A%20%20root%0A%20%20inScope%20commandNode%0A%20anyCell%0A%20%20highlightScope%20string%0A%20intCell%0A%20%20highlightScope%20constant.numeric.integer%0A%20keywordCell%0A%20%20highlightScope%20keyword%0A%20abstractKeywordNode%0A%20%20firstCellType%20keywordCell%0A%20%20abstract%0A%20commandNode%0A%20%20extends%20abstractKeywordNode%0A%20%20inScope%20whenNode%20pwdNode%20pathsNode%0A%20%20cells%20anyCell%20anyCell%20anyCell%0A%20whenNode%0A%20%20extends%20abstractKeywordNode%0A%20%20cells%20intCell%0A%20pwdNode%0A%20%20extends%20abstractKeywordNode%0A%20%20cells%20anyCell%0A%20pathsNode%0A%20%20extends%20abstractKeywordNode%0A%20%20cells%20anyCell%0Asample%0A%20command%20git%20checkout%20file.txt%0A%20%20when%201565133286%0A%20%20pwd%20%2Fhome%2Fme%2Fdir%2F%0A%20%20paths%20file.txt)

## Quick Example




    command git checkout file.txt
     when 1565133286
     pwd /home/me/dir/
     paths file.txt

## Quick facts about fished

- fished has 6 node types.
- fished has 3 cell types
- The source code for fished is 31 lines long.

## Installing

    npm install .

## Testing

    node test.js

## Node Types


    fishedNode
    abstractKeywordNode
     commandNode
     whenNode
     pwdNode
     pathsNode

## Cell Types


    anyCell
    intCell
    keywordCell

This readme was auto-generated using the [JTree library](https://github.com/treenotation/jtree).
