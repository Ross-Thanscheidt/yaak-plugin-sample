# Yaak Plugin Sample

Describe what your plugin does.

# Generate a new Yaak Plugin

- Follow the [Yaak Plugins Quick Start](https://yaak.app/docs/plugin-development/plugins-quick-start) to install the Yaak CLI and generate a new plugin:

    ```js
    node --version
    npm list -g
    npm install -g npm@latest    
    npm install -g @yaakapp/cli
    yaak plugin generate
    cd <new-subdirectory>
    npm install
    ```

# Build the Yaak Plugin

- This is supposed to build the plugin and create the `build` subdirectory:

    ```js
    yaak plugin build
    ```

- However, I get this error when running `yaak plugin build` on Windows:

    ```
    INFO     Building plugin \\?\C:\Users\<username>\Code\Testing\Yaak\yielding-yoga...
    ERROR    Failed to generate plugin metadata: node:fs:2734
        const out = binding.lstat(base, false, undefined, true /* throwIfNoEntry */);
                            ^

    Error: EISDIR: illegal operation on a directory, lstat 'C:'
        at Object.realpathSync (node:fs:2734:25)
        at toRealPath (node:internal/modules/helpers:63:13)
        at Module._findPath (node:internal/modules/cjs/loader:768:24)
        at Module._resolveFilename (node:internal/modules/cjs/loader:1461:27)
        at wrapResolveFilename (node:internal/modules/cjs/loader:1049:27)
        at defaultResolveImplForCJSLoading (node:internal/modules/cjs/loader:1073:10)
        at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1094:12)
        at Module._load (node:internal/modules/cjs/loader:1262:25)
        at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
        at Module.require (node:internal/modules/cjs/loader:1576:12) {
      errno: -4068,
      code: 'EISDIR',
      syscall: 'lstat',
      path: 'C:'
    }

    Node.js v24.15.0
    ```

  Apparently this is a [known issue](https://github.com/nodejs/node/issues/61165) with Node.js v22 and higher.

## Using a Docker Container to Build the Yaak Plugin

- Use a Docker container to build the Yaak Plugin on Windows as a way to avoid the error mentioned above:
    - Copy these files from this sample repository to your new plugin subdirectory:
        - `Dockerfile`
        - the `*.ps1` scripts
    - Run `.\build-image.ps1` in PowerShell, then `.\yaak-plugin-build.ps1` to create the `build` subdirectory
    - In Yaak, go to **Settings** (`Ctrl`+`,`) **→ Plugins → Installed**
        - Click on the **Select Plugin** button
        - Go to the plugin directory that contains the `package.json` file
        - Click on the **Select Folder** button
        - Click on the **Add Plugin** button
        - Exit Settings
    - Right-click on an HTTP Request and click on your plugin's popup menu option
    - It should show you the Request ID as a temporary popup in the lower right corner of Yaak

- Whenever you make a change to your plugin's `src\*` files, run `.\yaak-plugin-build.ps1` again  
  (you may need to restart Yaak to see the changes)

- Whenever `package.json` changes, like when package versions are updated, run `.\build-image.ps1` again
