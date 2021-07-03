# Simple React Internet Identity Provider

![](demo.gif)

Provides this context to your app:

```
interface InternetIdentityState {
    authenticate: () => void;
    isAuthed?: boolean;
    identity?: Identity;
};
```

Call `authenticate()` to open a window and authenticate via II.

Run it locally:

```
npm run dev
```

![](dfinity.png)
