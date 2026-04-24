# Black Cat on a Hot Tin Roof

Black Bird and his gang captured Kitty.
Black Cat has only one minute left to save her.
The roof is full of dangers and getting hot.
Run till the end and catch Black Bird!

## TIPS

- Clear obstacles and earn points.
- You can clear the spikes from the side.
- Attack the birds from above.
- Unlock Black Cat's super power.

## CONTROLS

- CLICK or press SPACE to jump.
- Hold the button for bigger jumps.
- Press the button in mid air to double jump.

## Contributing

### Installing Dependencies

After cloning this repo, install dependencies:

```
pnpm i
```

### Testing the app in the browser

To test your work in your browser (with hot reloading!) while developing:

```
pnpm start
```

### Building

To package the WebXDC file:

```
pnpm build
```

To package the WebXDC with developer tools inside to debug in Delta Chat, set the `NODE_ENV`
environment variable to "debug":

```
NODE_ENV=debug pnpm build
```

The resulting optimized `.xdc` file is saved in `dist-xdc/` folder.

### Releasing

To automatically build and create a new GitHub release with the `.xdc` file:

```
git tag -a v1.0.1
git push origin v1.0.1
```

### Credits

This is a port to webxdc of the game https://github.com/tricsi/blackcat
