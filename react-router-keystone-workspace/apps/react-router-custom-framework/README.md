# React Router Custom Framework Implementation

This project implements a custom framework using React Router's data loading capabilities as described in the [React Router Custom Framework documentation](https://reactrouter.com/start/data/custom).

## Architecture Overview

Instead of using `@react-router/dev`, this implementation integrates React Router's framework features (loaders, actions, fetchers, etc.) directly into a custom bundler and server setup.

### Key Components

#### 1. Routes Definition (`app/routes.js`)
- Custom route configuration without React Router dev helpers
- Direct component imports and loader definitions
- Nested routing structure with AppLayout wrapper

#### 2. Client Entry (`app/entry.client.jsx`)
- Creates `createBrowserRouter` for client-side rendering
- Handles hydration with `window.__staticRouterHydrationData`
- Simplified loaders for client-side (would make API calls in real implementation)

#### 3. Server Entry (`app/entry.server.jsx`)
- Uses `createStaticHandler` for server-side rendering
- Handles loader execution with Keystone context
- Generates complete HTML document with hydration data
- Manages headers from loaders and actions

#### 4. Custom Server (`server/app.js`)
- Custom request handler instead of `createRequestHandler`
- Integrates Keystone context with React Router
- Converts Express requests to Web API Request objects
- Handles server-side rendering pipeline

#### 5. Development Server (`server.js`)
- Vite middleware integration for development
- Custom client entry serving
- Production static file serving

## Framework Features

### Data Loading
- **Server-side**: Loaders run with full Keystone context access
- **Client-side**: Loaders can be configured to make API calls
- **Hydration**: Server data is passed to client via `window.__staticRouterHydrationData`

### Route Structure
```javascript
[
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: AppLayout,
        children: [
          {
            index: true,
            Component: Home,
            loader: async ({ context }) => {
              const { db } = context;
              const posts = await db.Post.findMany();
              return { posts };
            },
          },
          {
            path: "about",
            Component: About,
          },
        ],
      },
    ],
  },
]
```

### Build System
- Custom Vite configuration without React Router plugin
- Separate client and server builds
- Custom build script (`scripts/build.js`)

## Development

```bash
npm run dev
```

This starts the development server with:
- Vite middleware for hot module replacement
- Server-side rendering with Keystone integration
- Client-side hydration

## Production

```bash
npm run build
npm start
```

The build process:
1. Builds client bundle with `entry.client.jsx`
2. Builds server bundle with `entry.server.jsx`
3. Production server serves static assets and handles SSR

## Key Differences from Standard React Router Setup

1. **No `@react-router/dev` plugin**: Uses custom Vite configuration
2. **Manual route configuration**: Direct component imports instead of file-based routing
3. **Custom request handling**: Direct integration with Keystone instead of `createRequestHandler`
4. **Manual hydration setup**: Custom HTML generation with hydration data
5. **Context injection**: Manual context passing to loaders

## Benefits

- **Full control**: Complete control over the build and rendering pipeline
- **Custom integration**: Seamless integration with existing backend systems (Keystone)
- **Flexibility**: Can be adapted to any server framework or hosting environment
- **Performance**: Optimized for specific use cases without framework overhead

## Considerations

- **Complexity**: More complex setup compared to standard React Router
- **Maintenance**: Requires manual updates when React Router APIs change
- **Features**: Some React Router dev features need manual implementation
- **Learning curve**: Requires understanding of React Router internals

This implementation provides a foundation for building a custom React Router framework that can be extended with additional features as needed.
