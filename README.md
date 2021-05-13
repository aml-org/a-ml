# AML Website

> This repository contains the source code for the a.ml website developed in React, including the AML and AMF documentation

## Requirements
* Yarn >= 1.2

## Running locally
1. Pull the code locally:

    ```bash
    $ git clone https://github.com/aml-org/a-ml
    ```

2. In the root folder run `yarn run preview` to preview the website live:

    ```bash
    $ yarn run preview
    ```

3. The server should be up and the website available in http://localhost:3000/.

4. If you want to build the static website and serve it, run `yarn run build-and-serve` instead.

## Contribution
AML's website is in fact an open source project, and your contribution is very much appreciated.
Before you start, you should check for open issues or open a fresh issue to start a discussion around an idea that
you'd like to see on our website or a bug. If you want to support us fixing issues, please follow the steps below:

1. Fork the repository on GitHub and make your changes on the `develop` branch (or branch off of it).
2. Run the website to see if you fixed the issue.
3. Send a pull request (with the develop branch as the target).

We will review your PR, comment if necessary, and merge it into our staging branch `stg`.

You can contribute to the following:

* Spelling mistakes
* Editing an existing documentation page
* Adding a new documentation page
* And others, after carefully reviewing the issue you created

### Editing an existing docs page

Edit docs by navigating to `docs/` and editing the corresponding document:

`docs/doc-to-be-edited.md`

```markdown
---
id: page-needs-edit
title: This Doc Needs To Be Edited
---

Edit me...
```

### Adding a new docs page

Create the doc as a new MDX file in `/docs`, example `docs/8-New Doc.mdx`:

```markdown
---
id: newly-created-doc
title: This Doc Needs To Be Edited
---

My new content here...
```

NOTE: The file name contains its position in the sidebar, and the `title` metadata is shown in the sidebar. 
If you want to customize these fields you can add the following fields to the doc metadata:
```markdown
---
sidebar_label: Title in the sidebar
sidebar_position: 2
---
```

For more information on how to create and/or edit this website, refer to the [Docusaurus documentation](https://v2.docusaurus.io/docs/).
