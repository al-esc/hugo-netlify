# Restaurant La Senna

Static site for [lasenna.ro](https://lasenna.ro), built with [Hugo](https://gohugo.io)
and deployed by Netlify. The daily menu and the full menu are edited by the
restaurant staff through Decap CMS at `/admin/`.

## Local development

Install Hugo (extended) with your package manager, matching the version pinned in
`netlify.toml`:

```sh
brew install hugo          # macOS
hugo version               # should print v0.166.x or newer
```

Run the dev server:

```sh
hugo server -D
```

Build the production site into `public/` (this folder is git-ignored):

```sh
hugo --gc --minify
```

## Project layout

| Path | Purpose |
| --- | --- |
| `hugo.toml` | Site configuration |
| `data/meniu/*.yml` | Menu data. `zilnic.yml` is today's menu; the others are the permanent menu categories |
| `layouts/partials/` | Site-specific templates (today's menu, one partial per menu category) |
| `themes/resto-hugo/` | Base theme (vendored copy of Resto Hugo, with local changes) |
| `static/admin/` | Decap CMS entry page and `config.yml` (collections map 1:1 to the data files) |
| `static/` | Images, manifest, service worker (the worker is currently not registered) |
| `netlify.toml` | Build command, Hugo version, headers |

## Deployment

Netlify builds every push to `master` with the command and Hugo version defined in
`netlify.toml`. That file takes precedence over the build settings in the Netlify UI,
so the site needs no Node, npm or yarn. Deploy previews and branch deploys use
`$DEPLOY_PRIME_URL` as the base URL.

## Content editing (CMS)

`/admin/` loads Decap CMS with the `git-gateway` backend. Editors log in with
Netlify Identity; each save becomes a commit on `master`, which triggers a deploy.
To add a menu category, add a data file under `data/meniu/`, a partial under
`layouts/partials/meniu/`, include it in `themes/resto-hugo/layouts/partials/menu.html`,
and describe it in `static/admin/config.yml`.
