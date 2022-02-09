Demo of customizing rollup to provide additional paths in `includePath`.

**Note:** This is only for SASS/SCSS. A more generic option is using `postcss-import`.

The custom config is at `libs/ui-button/rollup.config.js`, which is set as `rollupConfig` in `libs/ui-button/project.json`.

You can try it by running:

```bash
nx build demo # this will also build the dependency ui-button lib
npx -y serve -s dist/apps/demo
```

Note that the variables are being loaded from the extra path `libs/shared-styles/lib`.