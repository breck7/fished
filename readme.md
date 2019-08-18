# fished Readme

A text serialization format for Fish Shell's history file.

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