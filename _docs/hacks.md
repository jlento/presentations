---
title: Ugly hacks
---

# Ugly hacks

## Symbolic links in slide-template submodule

Jekyll does not like symbolic links. if you get error like

```
** ERROR: directory is already being watched! **

        Directory: /Users/juha/github/jlento/presentations/_includes/slide-template/reveal/img

        is already being watched through: /Users/juha/github/jlento/presentations/_includes/slide-template/img

        MORE INFO: https://github.com/guard/listen/wiki/Duplicate-directory-errors
```

simply delete the symbolic links with

```bash
find _includes/slide-template -type l -delete_
```

