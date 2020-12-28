# AML Website

> This repository contains the source code for the a.ml website developed in React, including the AML and AMF documentation

## Requirements
* Node >= 10.9.0 or Yarn >= 1.5

## Running locally
1. Pull the code locally:

    ```bash
    $ git clone https://github.com/aml-org/a-ml
    $ gh repo clone aml-org/a-ml #using github CLI
    ```

2. Go to `website` folder and run `npm start` or `yarn start`:

    ```bash
    $ cd website
    $ npm start
    ```

3. The server should be up and the website available in http://localhost:3000/:

    ```bash
    $ npm start 
    
    > @ start /Users/user/dev/a-ml/website
    > docusaurus-start
   
    Starting the development server...
    Docusaurus website is running at: http://localhost:3000/
    ```

## Contribution
AML's website is in fact an open source project and your contribution is very much appreciated. 
Before you start, you should check for open issues or open a fresh issue to start a discussion around an idea that 
you'd like to see on our website or a bug. If you want to support us fixing issues, please follow the steps below:

1. Fork the repository on Github and make your changes on the `develop` branch (or branch off of it).
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

1. Create the doc as a new markdown file in `/docs`, example `docs/newly-created-doc.md`:

```md
---
id: newly-created-doc
title: This Doc Needs To Be Edited
---

My new content here...
```

1. Refer to that doc's ID in an existing sidebar in `website/sidebars.json`:

``` javascript
// Add newly-created-doc to the Getting Started category of docs
{
  "docs": {
    "Getting Started": [
      "quick-start",
      "newly-created-doc" // new doc here
    ],
    ...
  },
  ...
}
```

For more information on how to create and/or edit this website, refer to the [Docusaurus documentation](https://v2.docusaurus.io/docs/).
