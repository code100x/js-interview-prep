<!-- ================================================================== -->

- - FOR PRE-REQUISTITE (FROM 1600 LINE)

- Next.js Project Structure

```bash
# Top-level folders
app      - App Router
pages    - Pages Router
public   - Static assets to be served
src      - Optional application source folder

# Top-level files
next.config.js	    - Configuration file for Next.js
package.json        - Project dependencies and scripts
instrumentation.ts	- OpenTelemetry and Instrumentation file
middleware.ts	      - Next.js request middleware
.env        	      - Environment variables
.env.local          - Local environment variables
.env.production	    - Production environment variables
.env.development	  - Development environment variables
.eslintrc.json	    - Configuration file for ESLint
.gitignore	        - Git files and folders to ignore
next-env.d.ts       - TypeScript declaration file for Next.js
tsconfig.json       - Configuration file for TypeScript
jsconfig.json       - Configuration file for JavaScript

# app Routing Conventions
layout	      - Shared UI for a segment and its children ( do not rerender.)
page	        - Unique UI of a route and make routes publicly accessible
loading	      - Loading UI for a segment and its children
not-found	    - Not found UI for a segment and its children
error	        - Error UI for a segment and its children
global-error	- Global Error UI
route	        - Server-side API endpoint
template	    - Specialized re-rendered Layout UI
default	      - Fallback UI for Parallel Routes

# Nested Routes
folder	        - Route segment
folder/folder	  - Nested route segment

# Dynamic Routes
[folder]	       - Dynamic route segment
[...folder]	     - Catch-all route segment
[[...folder]]	   - Optional catch-all route segment

# Route Groups and Private Folders
(folder)    - Group routes without affecting routing
_folder	    - Opt folder and all child segments out of routing

# Parallel and Intercepted Routes
@folder	          - Named slot
(.)folder	        - Intercept same level
(..)folder	      - Intercept one level above
(..)(..)folder    - Intercept two levels above
(...)folder	      - Intercept from root

# Component Hierarchy
layout.js
template.js
error.js (React error boundary)
loading.js (React suspense boundary)
not-found.js (React error boundary)
page.js or nested layout.js

```

- ROUTING

```bash
1. Defining Routes
# page.js file is used to make route segments publicly accessible.
# EG. if no page.js inside dashboard folder then you cannot access the file in web-browser by www.abc.com/dashboard

2. Pages and Layouts

i. page.js
  # The .js, .jsx, or .tsx file extensions can be used for Pages.
  # A page is always the leaf of the route subtree.
  # A page.js file is required to make a route segment publicly accessible.
  # Pages are Server Components by default, but can be set to a Client Component.
  # Pages can fetch data.

ii. layout.js
# A layout is UI that is shared between multiple routes. On navigation, layouts preserve state, remain interactive, and do not re-render.

  # .js, .jsx, or .tsx file extensions can be used for Layouts.
  # Only the root layout can contain <html> and <body> tags.
  # When a layout.js and page.js file are defined in the same folder, the layout will wrap the page.
  # Layouts are Server Components by default but can be set to a Client Component.
  # Layouts can also fetch data.
  # Passing data between a parent layout and its children is not possible. However, you can fetch the same data in a route more than once, and React will automatically dedupe the requests without affecting performance.
  # Layouts do not have access to the route segments below itself. To access all route segments, you can use useSelectedLayoutSegment or useSelectedLayoutSegments in a Client Component.
  # You can use Route Groups to opt specific route segments in and out of shared layouts.
  # You can use Route Groups to create multiple root layouts.

iii. template.js
# Templates are similar to layouts in that they wrap each child layout or page. Unlike layouts that persist across routes and maintain state, templates create a new instance for each of their children on navigation.
# This means that when a user navigates between routes that share a template, a new instance of the component is mounted, DOM elements are recreated, state is not preserved, and effects are re-synchronized.

iv. metadata
# Metadata can be defined by exporting a metadata object or generateMetadata function in a layout.js or page.js file.

```

3. Linking and Navigating

- There are four ways to navigate between routes in Next.js:
  - Using the < Link> Component
  - Using the useRouter hook (Client Components)
  - Using the redirect function (Server Components) + (client also for some part)
  - Using the native History API

```bash

i. <Link> Component
# <Link> is a built-in component that extends the HTML <a> tag to provide prefetching and client-side navigation between routes. It is the primary and recommended way to navigate between routes in Next.js.

# Linking to Dynamic Segments
<Link href={`/blog/${post.slug}`}>{post.title}</Link>

# Checking Active Links :: -> You can use usePathname() to determine if a link is active.
# WHAT ACTIVE MEANS
# Eg. In navbar if the page is home then make it active else if the page is about then make it
<li>
  <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
    Home
  </Link>
</li>
<li>
  <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about">
    About
  </Link>
</li>

# Scrolling to an id ::
<Link href="/dashboard#settings">Settings</Link>

# Disabling scroll restoration ::
# By default the page will scroll to top when visited to stop this and stay where it way, make scroll false
// next/link
<Link href="/dashboard" scroll={false}> Dashboard </Link>

# you can pass scroll={false} to the <Link> component, or scroll: false to router.push() or router.replace().
// useRouter
import { useRouter } from 'next/navigation'
const router = useRouter()
router.push('/dashboard', { scroll: false })

ii. useRouter() hook # Client Component

# The useRouter hook allows you to programmatically change routes from Client Components.
import { useRouter } from 'next/navigation'
const router = useRouter()
<button type="button" onClick={() => router.push('/dashboard')}> Dashboard </button>

iii. redirect function # Server Component

import { redirect } from 'next/navigation'
if (!team) {
  redirect('/login')
}

iv. native History API
# Next.js allows you to use the native window.history.pushState and window.history.replaceState methods to update the browser's history stack without reloading the page.
# pushState and replaceState calls integrate into the Next.js Router, allowing you to sync with usePathname and useSearchParams.

-----

## How Routing and Navigation Works
  # The App Router uses a hybrid approach for routing and navigation. On the server, your application code is automatically code-split by route segments. And on the client, Next.js prefetches and caches the route segments.
  # This means, when a user navigates to a new route, the browser doesn't reload the page, and only the route segments that change re-render - improving the navigation experience and performance.

# 1. Code Splitting

# 2. Prefetching
  # There are two ways routes are prefetched in Next.js:
    # <Link> component: Routes are automatically prefetched as they become visible in the user's viewport. Prefetching happens when the page first loads or when it comes into view through scrolling.
    # router.prefetch(): The useRouter hook can be used to prefetch routes programmatically.

# 3. Caching
  # Next.js has an in-memory client-side cache called the Router Cache. As users navigate around the app, the React Server Component Payload of prefetched route segments and visited routes are stored in the cache.

# 4. Partial Rendering
  # Partial rendering means only the route segments that change on navigation re-render on the client, and any shared segments are preserved.
    # For example, when navigating between two sibling routes, /dashboard/settings and /dashboard/analytics, the settings and analytics pages will be rendered, and the shared dashboard layout will be preserved.

# 5. Soft Navigation

# 6. Back and Forward Navigation
  # By default, Next.js will maintain the scroll position for backwards and forwards navigation, and re-use route segments in the Router Cache.


```

4. Loading UI and Streaming

- Use loading.js to create meaningful Loading UI
- Use < Suspense> for specific component/part that can take long time (eg.fetch)

- Streaming allows you to break down the page's HTML into smaller chunks and progressively send those chunks from the server to the client.
- Streaming is particularly beneficial when you want to prevent long data requests from blocking the page from rendering

```bash
import { Suspense } from 'react'
 <Suspense fallback={<p>Loading feed...</p>}>
   <PostFeed />
 </Suspense>
```

5. Error Handling
   - An error.js file will handle errors for all its nested child segments.
   - An error.js boundary will not handle errors thrown in a layout.js component in the same segment because the error boundary is nested inside that layout's component. (use global-error.js in root app segment with it's own html and body tag)

- Handling Errors in Layouts

  - To handle errors within a specific layout or template, place an error.js file in the layout's parent segment.
  - To handle errors within the root layout or template, use a variation of error.js called global-error.js.
    - it is important to note that global-error.js must define its own < html> and < body> tags.

- Handling Server Errors
  - If an error is thrown inside a Server Component, Next.js will forward an Error object (stripped of sensitive error information in production) to the nearest error.js file as the error prop.
  - During production, the Error object forwarded to the client only includes a generic message and digest property.
  - During development, the Error object forwarded to the client will be serialized and include the message of the original error for easier debugging.

```bash
# An error component can use the reset() function to prompt the user to attempt to recover from the error. When executed, the function will try to re-render the Error boundary's contents. If successful, the fallback error component is replaced with the result of the re-render.

# app/dashboard/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}

# The root app/error.js boundary does not catch errors thrown in the root app/layout.js or app/template.js component.
# To specifically handle errors in these root components, use a variation of error.js called app/global-error.js located in the root app directory.

# app/global-error.tsx
'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}
```

6. Redirecting (server component)
   - redirect can be called in Client Components during the rendering process but not in event handlers. You can use the useRouter hook instead.

```bash

redirect                      - Redirect user after a mutation or event(serverside)
permanentRedirect             - Redirect user after a mutation or event(serverside)
useRouter hook                - Perform a client-side navigation event handler in(clientside)
redirects in next.config.js   - Redirect user after a mutation or event(serverside)
NextResponse.redirect         - Redirect an incoming request based on a condition(Middleware)

i. redirect
# The redirect function allows you to redirect the user to another URL. You can call redirect in Server Components, Route Handlers, and Server Actions.

# redirect internally throws an error so it should be called outside of try/catch blocks.
# redirect can be called in Client Components during the rendering process but not in event handlers. You can use the useRouter hook instead.
# redirect also accepts absolute URLs and can be used to redirect to external links.
# If you'd like to redirect before the render process, use next.config.js or Middleware.

ii. permanentRedirect
# permanentRedirect is often used after a mutation or event that changes an entity's canonical URL, such as updating a user's profile URL after they change their username:

'use server'
import { permanentRedirect } from 'next/navigation'
import { revalidateTag } from 'next/cache'

export async function updateUsername(username: string, formData: FormData) {
  try {
    // Call database
  } catch (error) {
    // Handle errors
  }

  revalidateTag('username') // Update all references to the username
  permanentRedirect(`/profile/${username}`) // Navigate to the new user profile
}
# If you'd like to redirect before the render process, use next.config.js or Middleware.

iii. useRouter() hook
# If you need to redirect inside an event handler in a Client Component, you can use the push method from the useRouter hook.
'use client'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
  )
}
# If you don't need to programmatically navigate a user, you should use a <Link> component.

iv. redirects in next.config.js
# The redirects option in the next.config.js file allows you to redirect an incoming request path to a different destination path. This is useful when you change the URL structure of pages or have a list of redirects that are known ahead of time.

# next.config.js
module.exports = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
      // Wildcard path matching
      {
        source: '/blog/:slug',
        destination: '/news/:slug',
        permanent: true,
      },
    ]
  },
}

# redirects can return a 307 (Temporary Redirect) or 308 (Permanent Redirect) status code with the permanent option.
# redirects may have a limit on platforms. For example, on Vercel, there's a limit of 1,024 redirects. To manage a large number of redirects (1000+), consider creating a custom solution using Middleware.
# redirects runs before Middleware.

v. NextResponse.redirect in Middleware
  # Middleware allows you to run code before a request is completed. Then, based on the incoming request, redirect to a different URL using NextResponse.redirect.
  # This is useful if you want to redirect users based on a condition (e.g. authentication, session management, etc) or have a large number of redirects.

# For example, to redirect the user to a /login page if they are not authenticated:

# middleware.ts
import { NextResponse, NextRequest } from 'next/server'
import { authenticate } from 'auth-provider'

export function middleware(request: NextRequest) {
  const isAuthenticated = authenticate(request)
  # If the user is authenticated, continue as normal
  if (isAuthenticated) {
    return NextResponse.next()
  }
  # Redirect to login page if not authenticated
  return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
  matcher: '/dashboard/:path*',
}
# Middleware runs after redirects in next.config.js and before rendering.

```

7. Route Groups - "(folderName)"
   - To prevent the folder from being included in the route's URL path.
   - This allows you to organize your route segments and project files into logical groups without affecting the URL path structure.
   - Even though routes inside (marketing) and (shop) share the same URL hierarchy, you can create a different layout for each group by adding a layout.js file inside their folders.

```bash

# Opting specific segments into a layout --> [check website for visualization]
  # To opt specific routes into a layout, create a new route group (e.g. (shop)) and move the routes that share the same layout into the group (e.g. account and cart). The routes outside of the group will not share the layout (e.g. checkout).

# Creating multiple root layouts -->
  # To create multiple root layouts, remove the top-level layout.js file, and add a layout.js file inside each route groups. This is useful for partitioning an application into sections that have a completely different UI or experience. The <html> and <body> tags need to be added to each root layout.


# The naming of route groups has no special significance other than for organization. They do not affect the URL path.
# Routes that include a route group should not resolve to the same URL path as other routes. For example, since route groups don't affect URL structure, (marketing)/about/page.js and (shop)/about/page.js would both resolve to /about and cause an error.
# If you use multiple root layouts without a top-level layout.js file, your home page.js file should be defined in one of the route groups, For example: app/(marketing)/page.js.
# Navigating across multiple root layouts will cause a full page load (as opposed to a client-side navigation). For example, navigating from /cart that uses app/(shop)/layout.js to /blog that uses app/(marketing)/layout.js will cause a full page load. This only applies to multiple root layouts.
```

8. Project Organization and File Colocation
   - Safe colocation by default
   - Project organization features
   - Project organization strategies

```bash
1. Safe colocation by default
    - Even though route structure is defined through folders, a route is not publicly accessible until a page.js or route.js file is added to a route segment.
    - This means that project files can be safely colocated inside route segments in the app directory without accidentally being routable.
# This is different from the pages directory, where any file in pages is considered a route.
# While you can colocate your project files in app you don't have to. If you prefer, you can keep them outside the app directory.

2. Project organization features

i. Private Folders
  # Private folders can be created by prefixing a folder with an underscore: _folderName
  # This indicates the folder is a private implementation detail and should not be considered by the routing system, thereby opting the folder and all its subfolders out of routing.

ii. Route Groups
  # Route groups can be created by wrapping a folder in parenthesis: (folderName)
  # This indicates the folder is for organizational purposes and should not be included in the route's URL path.

iii. src Directory
  # Next.js supports storing application code (including app) inside an optional src directory.
  # This separates application code from project configuration files which mostly live in the root of a project.

iv. Module Path Aliases
  # Next.js supports Module Path Aliases which make it easier to read and maintain imports across deeply nested project files.

# EG.
// before
import { Button } from '../../../components/button'
// after
import { Button } from '@/components/button'

3. Project organization strategies

i. Store project files outside of app (CMS uses this strategy)
  # This strategy stores all application code in shared folders in the root of your project and keeps the app directory purely for routing purposes.

ii. Store project files in top-level folders inside of app
  # This strategy stores all application code in shared folders in the root of the app directory.
  # Everything inside app eg. component, lib, dashboard->page.js,

iii. Split project files by feature or route
  # This strategy stores globally shared application code in the root app directory and splits more specific application code into the route segments that use them.
  # EG. app/component that will be applicable by all and app/dashboard/component that will be used dashboard and it's child

```

9. Dynamic Routes
   - Use when you don't know the exact segment names ahead of time and want to create routes from dynamic data
   - A Dynamic Segment can be created by wrapping a folder's name in square brackets: [ folderName]. For example, [ id] or [ slug].
   - Dynamic Segments are passed as the params prop to layout, page, route, and generateMetadata functions.

```bash
# For example, a blog could include the following route app/blog/[slug]/page.js where [slug] is the Dynamic Segment for blog posts.

app/blog/[slug]/page.tsx

export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div> # here the slug is whatever after blog (blog/new)
}
# Route	                        - Example URL	            - params
# app/blog/[slug]/page.js	      - /blog/a	                - { slug: 'a' }
# app/blog/[slug]/page.js	      - /blog/b	                - { slug: 'b' }
# app/blog/[slug]/page.js	      - /blog/c	                - { slug: 'c' }


i. Generating Static Params - generate dynamic param on build time and cache it
  # The generateStaticParams function can be used in combination with dynamic route segments to statically generate routes at build time instead of on-demand at request time.

# app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

# The primary benefit of the generateStaticParams function is its smart retrieval of data. If content is fetched within the generateStaticParams function using a fetch request, the requests are automatically memoized.
# This means a fetch request with the same arguments across multiple generateStaticParams, Layouts, and Pages will only be made once, which decreases build times.

ii. Catch-all Segments - it will catch all after it (/../../..)
  # Dynamic Segments can be extended to catch-all subsequent segments by adding an ellipsis inside the brackets [...folderName].
  # For example, app/shop/[...slug]/page.js will match /shop/clothes, but also /shop/clothes/tops, /shop/clothes/tops/t-shirts, and so on.

Route                     	    - Example           - URL	params
app/shop/[...slug]/page.js	    - /shop/a	          - { slug: ['a'] }
app/shop/[...slug]/page.js	    - /shop/a/b	        - { slug: ['a', 'b'] }
app/shop/[...slug]/page.js	    - /shop/a/b/c	      - { slug: ['a', 'b', 'c'] }

iii. Optional Catch-all Segments - same as above but will also inclue shop(in above eg)
  # Catch-all Segments can be made optional by including the parameter in double square brackets: [[...folderName]].
  # For example, app/shop/[[...slug]]/page.js will also match /shop, in addition to /shop/clothes, /shop/clothes/tops, /shop/clothes/tops/t-shirts.

Route                       	   - Example URL	    - params
app/shop/[[...slug]]/page.js	   - /shop	          - {} # THIS IS ALSO INCLUDED
app/shop/[[...slug]]/page.js	   - /shop/a	        - { slug: ['a'] }
app/shop/[[...slug]]/page.js	   - /shop/a/b	      - { slug: ['a', 'b'] }
app/shop/[[...slug]]/page.js	   - /shop/a/b/c	    - { slug: ['a', 'b', 'c'] }


iv. TypeScript
# When using TypeScript, you can add types for params depending on your configured route segment.

# app/blog/[slug]/page.tsx
export default function Page({ params }: { params: { slug: string } }) {
  return <h1>My Page</h1>
}

Route               	                params Type Definition
app/blog/[slug]/page.js	              { slug: string }
app/shop/[...slug]/page.js	          { slug: string[] }
app/shop/[[...slug]]/page.js	        { slug?: string[] }
app/[categoryId]/[itemId]/page.js	    { categoryId: string, itemId: string }

```

10. Parallel Routes - (using @) - (TLDR- To add more than 1 segment in single page)
    - Parallel Routes allows you to simultaneously or conditionally render one or more pages within the same layout.
    - They are useful for highly dynamic sections of an app, such as dashboards and feeds on social sites.

- READ THIS CHAPTER FROM THE WEBSITE AS IMAGES ARE WELL ILLUSTRATED
- https://nextjs.org/docs/app/building-your-application/routing/parallel-routes

```bash
# Parallel routes are created using named slots. Slots are defined with the @folder convention. For example, the following file structure defines two slots: @analytics and @team:
# https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#slots -for img
# cms>app>(@analytics/page.js+@team/page.js)+layout.js+page.js
# cms>app>@analytics/page.js cms>app>@team/page.js cms>app>layout.js cms>app>page.js

# Slots are passed as props to the shared parent layout. For example above, the component in app/layout.js now accepts the @analytics and @team slots props, and can render them in parallel alongside the children prop:
app/layout.tsx

export default function Layout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode
  analytics: React.ReactNode
  team: React.ReactNode
}) {
  return (
    <>
      {children}
      {team}
      {analytics}
    </>
  )
}
# However, slots are not route segments and do not affect the URL structure. For example, for /@analytics/views, the URL will be /views since @analytics is a slot.
# The children prop is an implicit slot that does not need to be mapped to a folder. This means app/page.js is equivalent to app/@children/page.js.

> Active state and navigation
https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#active-state-and-navigation

@Examples
I. Conditional Routes
  # You can use Parallel Routes to conditionally render routes based on certain conditions, such as user role. In layout.tsx
  # For example, to render a different dashboard page for the /admin or /user roles:

# app/dashboard/layout.tsx
import { checkUserRole } from '@/lib/auth'

export default function Layout({
  user,
  admin,
}: {
  user: React.ReactNode
  admin: React.ReactNode
}) {
  const role = checkUserRole()
  return <>{role === 'admin' ? admin : user}</>
}

II. Tab Groups
# Like navbar navigate between two pages - create a layout.tsx and write logic to navigate

# For example, the @analytics slot has two subpages: /page-views and /visitors.
#app/@analytics/page-views/page.tsx app/@analytics/visitors/page.tsx app/@analytics/layout.tsx

# app/@analytics/layout.tsx
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <Link href="/page-views">Page Views</Link> # This navigates to www.abc.com/page-views
        <Link href="/visitors">Visitors</Link> # This navigates to www.abc.com/visitors
      </nav>
      <div>{children}</div>
    </>
  )
}

III. Modals ->> popups eg. alert box, razorpay payment
# use parallel routes(@) and intercepting routes(.) to achieve this

# Parallel Routes can be used together with Intercepting Routes to create modals. This allows you to solve common challenges when building modals, such as:
  # Making the modal content shareable through a URL.
  # Preserving context when the page is refreshed, instead of closing the modal.
  # Closing the modal on backwards navigation rather than going to the previous route.
  # Reopening the modal on forwards navigation.


# IT'S INCOMPLETE WATCH FROM THE DOC'S AND LEARN
```

11. Intercepting Routes
    - Intercepting routes allows you to load a route from another part of your application within the current layout.
    - This routing paradigm can be useful when you want to display the content of a route without the user switching to a different context.
    - Intercepting routes can be defined with the (..) convention, which is similar to relative path convention ../ but for segments.
      - (.) to match segments on the same level
      - (..) to match segments one level above
      - (..)(..) to match segments two levels above
      - (...) to match segments from the root app directory

```bash


```

12. Route Handlers
    - Route Handlers can be nested inside the app directory, similar to page.js and layout.js. But there cannot be a route.js file at the same route segment level as page.js.

```bash
I. Caching
  # Route Handlers are cached by default when using the GET method with the Response object.
export async function GET() {
  const res = await fetch('https://data.mongodb-api.com/...', {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
  })
  const data = await res.json()
  return Response.json({ data })
 } # data IS CACHED HERE AS ONLY GET()

II. Opting out of caching
  # Using the Request object with the GET method.
  # Using any of the other HTTP methods.
  # Using Dynamic Functions like cookies and headers.
  # The Segment Config Options manually specifies dynamic mode.

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY!,
    },
  })
  const product = await res.json()
  return Response.json({ product })
 } # product IS NOT CACHED AS request IS USED - SIMILARLY IF USES POST THEN ALSO IT WON'T CACHE

III. Route Resolution
# There cannot be a route.js file at the same route as page.js.
# Each route.js or page.js file takes over all HTTP verbs for that route.

Page      	          - Route	                - Result
app/page.js	          - app/route.js	        - Conflict
app/page.js	          - app/api/route.js	    - Valid
app/[user]/page.js	  - app/api/route.js	    - Valid

IV. Revalidating Cached Data

# You can revalidate cached data using the next.revalidate option:
export async function GET() {
  const res = await fetch('https://data.mongodb-api.com/...', {
    next: { revalidate: 60 }, # Revalidate every 60 seconds
  })
  const data = await res.json()

  return Response.json(data)
}

# Alternatively, you can use the revalidate segment config option:
export const revalidate = 60

- Dynamic Functions Like cookies and headers
V. Cookies

#1>> You can read or set cookies with cookies from next/headers.
#2>> Alternatively, you can return a new Response using the Set-Cookie header.
import { cookies } from 'next/headers'

export async function GET(request: Request) {
  const cookieStore = cookies()
  const token = cookieStore.get('token')

  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': `token=${token.value}` },
  })
}
#3>> You can also use the underlying Web APIs to read cookies from the request (NextRequest):
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const token = request.cookies.get('token')
}

VI. Headers

# You can read headers with headers from next/headers.
# This headers instance is read-only. To set headers, you need to return a new Response with new headers.
import { headers } from 'next/headers'

export async function GET(request: Request) {
  const headersList = headers()
  const referer = headersList.get('referer') # TO READ THE HEADER

  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { referer: referer }, # TO SET THE HEADER
  })
}

# You can also use the underlying Web APIs to read headers from the request (NextRequest):
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
}

VII. Redirects

import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  redirect('https://nextjs.org/')
}

VIII. Dynamic Route Segments
# Route Handlers can use Dynamic Segments to create request handlers from dynamic data.

# app/items/[slug]/route.ts
export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug # 'a', 'b', or 'c'
}

IX. URL Query Parameters

import { type NextRequest } from 'next/server'
export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query')
  // query is "hello" for /api/search?query=hello
}

X. Request Body
# You can read the Request body using the standard Web API methods:
export async function POST(request: Request) {
  const res = await request.json()
  return Response.json({ res })
}

XI. Request Body FormData
# You can read the FormData using the request.formData() function:
export async function POST(request: Request) {
  const formData = await request.formData()
  const name = formData.get('name')
  const email = formData.get('email')
  return Response.json({ name, email })
}

XII. Webhooks
# You can use a Route Handler to receive webhooks from third-party services:
export async function POST(request: Request) {
  try {
    const text = await request.text()
    // Process the webhook payload
  } catch (error) {
    return new Response(`Webhook error: ${error.message}`, {
      status: 400,
    })
  }
  return new Response('Success!', {
    status: 200,
  })
}

XIII. Edge and Node.js Runtimes
# You can use the runtime segment config option to specify the runtime:
export const runtime = 'edge' # 'nodejs' is the default

XIV. Segment Config Options - See the API reference for more details.
# Route Handlers use the same route segment configuration as pages and layouts.

export const dynamic = 'auto'
export const dynamicParams = true
export const revalidate = false
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'

```

13. Middleware
    - Middleware allows you to run code before a request is completed. Then, based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request or response headers, or responding directly.
    - Middleware runs before cached content and routes are matched.

- Where to use middleware

  1. Authentication and Authorization:
  2. Server-Side Redirects:
  3. Path Rewriting:
  4. Bot Detection:
  5. Logging and Analytics:
  6. Feature Flagging:

- Where not to use middleware - (if it slows the process)

  1. Complex Data Fetching and Manipulation:
  2. Heavy Computational Tasks:
  3. Extensive Session Management:
  4. Direct Database Operations:

- While only one middleware.ts file is supported per project, you can still organize your middleware logic modularly.

```bash

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
# This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url))
}
# See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}

# There are two ways to define which paths Middleware will run on:
  #1>> Custom matcher config
  #2>> Conditional statements

I. Matcher

# 1>> matcher allows you to filter Middleware to run on specific paths.
export const config = {
  matcher: '/about/:path*',
}

# 2>> You can match a single path or multiple paths with an array syntax
export const config = {
  matcher: ['/about/:path*', '/dashboard/:path*'],
}

# 3>> The matcher config allows full regex so matching like negative lookaheads or character matching is supported.
# An example of a negative lookahead to match all except specific paths can be seen here:
export const config = {
  matcher: [
     # Match all request paths except for the ones starting with:
     # - api (API routes)
     # - _next/static (static files)
     # - _next/image (image optimization files)
     # - favicon.ico (favicon file)
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

# THERE ARE MANY THINGS NOT RELEVENT TODAY: REVISE FROM DOC WHEN NEEDED

```

14. Data Fetching, Caching, and Revalidating
    - There are four ways you can fetch data:
      1. On the server, with fetch
      2. On the server, with third-party libraries
      3. On the client, via a Route Handler
      4. On the client, with third-party libraries.

```bash

1. >> On the server, with fetch

# You can use fetch with async/await in Server Components, in Route Handlers, and in Server Actions.

async function getData() {
  const res = await fetch('https://api.example.com/...')
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <main></main>
}

# I>> Caching Data

# By default, Next.js automatically caches the returned values of fetch in the Data Cache on the server.
# This means that the data can be fetched at build time or request time, cached, and reused on each data request.

// 'force-cache' is the default, and can be omitted
fetch('https://...', { cache: 'force-cache' })

# To opt out of caching for individual fetch requests, you can set the cache option in fetch to 'no-store'. This will fetch data dynamically, on every request.
# layout.js | page.js
fetch('https://...', { cache: 'no-store' })

# However, there are exceptions, fetch requests are not cached when:
  # Used inside a Server Action. (Async functions that are executed on server)
  # Used inside a Route Handler that uses the POST method.

# II>> Revalidating Data

# It means removing the cache and refetching the latest data
# Cached data can be revalidated in two ways:
# 1>> Time-based revalidation:
# 2>> On-demand revalidation:

# 1>> Time-based revalidation:
# one way is, next.revalidate option of fetch to set the cache lifetime of a resource (in seconds).
fetch('https://...', { next: { revalidate: 3600 } })

# Alternatively, to revalidate all fetch requests in a route segment, you can use the Segment Config Options. - FOR ALL THE REQUEST IN THE ROUTE SEGMENT
export const revalidate = 3600 // revalidate at most every hour

# 2>> On-demand revalidation: - IN SERVER ACTION OR ROUTE HANDLER (NOT ON CLIENT SIDE?)
# Data can be revalidated on-demand by path (revalidatePath) or by cache tag (revalidateTag) inside a Server Action or Route Handler.

# Use tag when fetching (both in server and client) and then use that tag to revalidate(server)

# Following fetch request adds the cache tag collection:
# app/page.tsx
export default async function Page() {
  const res = await fetch('https://...', { next: { tags: ['collection'] } })
  const data = await res.json()
  // ...
}

# You can then revalidate this fetch call tagged with collection by calling revalidateTag in a Server Action:
# app/actions.ts
'use server'
import { revalidateTag } from 'next/cache'

export default async function action() {
  revalidateTag('collection')
}

# If an error is thrown while attempting to revalidate data, the last successfully generated data will continue to be served from the cache. On the next subsequent request, Next.js will retry revalidating the data.

# fetch requests are not cached if:
    # The cache: 'no-store' is added to fetch requests.
    # The revalidate: 0 option is added to individual fetch requests.
    # The fetch request is inside a Router Handler that uses the POST method.
    # The fetch request comes after the usage of headers or cookies.
    # The const dynamic = 'force-dynamic' route segment option is used.
    # The fetchCache route segment option is configured to skip cache by default.
    # The fetch request uses Authorization or Cookie headers and there's an uncached request above it in the component tree.

2. >> Fetching data on the Server with third-party libraries

# In cases where you're using a third-party library that doesn't support or expose fetch (for example, a database, CMS, or ORM client)
# You can configure the caching and revalidating behavior of those requests using the
# 1> Route Segment Config Option and 2>React's cache function.

# If the segment is static (default), the output of the request will be cached and revalidated as part of the route segment.
# If the segment is dynamic, the output of the request will not be cached and will be re-fetched on every request when the segment is rendered.

# I>> Route Segment Config Option
# Default values check this for more info : https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
export const dynamic = 'auto'
export const dynamicParams = true
export const revalidate = false
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'
export const maxDuration = 5

export default function MyComponent() {}

# II>> React's cache function.

# The React cache function is used to memoize data requests.
# app/utils.ts
import { cache } from 'react'

export const getItem = cache(async (id: string) => {
  const item = await db.item.findUnique({ id })
  return item
})

#  Now the getItem function is called twice, only one query will be made to the database.
# app/item/[id]/layout.tsx - IN LAYOUT
import { getItem } from '@/utils/get-item'

export const revalidate = 3600 # revalidate the data at most every hour
export default async function Layout({
  params: { id },
}: {
  params: { id: string }
}) {
  const item = await getItem(id)
  // ...
}


# app/item/[id]/page.tsx
import { getItem } from '@/utils/get-item'

export const revalidate = 3600 # revalidate the data at most every hour
export default async function Page({
  params: { id },
}: {
  params: { id: string }
}) {
  const item = await getItem(id)
  // ...
}

3. >> Fetching Data on the Client with Route Handlers

# USE ROUTE HANDLER (API CALLS) TO FETCH DATA FROM THE CLIENT

# SERVER COMPONENT DON'T NEED

```

15. Server Actions and Mutations
    - Server Actions are asynchronous functions that are executed on the server.
    - They can be used in Server and Client Components to handle form submissions and data mutations in Next.js applications.

```bash

# You can place the directive at the top of an async function to mark the function as a Server Action,
"use server" # on top of the file # not callable by client (?)

# or at the top of a separate file to mark all exports of that file as Server Actions.
# app/page.tsx
// Server Component
export default function Page() {
  // Server Action
  async function create() {
    'use server' # on top of the async function

    // ...
  }

  return (
    // ...
  )
}

# To call a Server Action in a Client Component, create a new file and add the "use server" directive at the top of it.
# All functions within the file will be marked as Server Actions that can be reused in both Client and Server Components:

# app/actions.ts
'use server'
export async function create() {
  // ...
}

# app/ui/button.tsx
import { create } from '@/app/actions'
export function Button() {
  return (
    // ...
  )
}

# You can also pass a Server Action to a Client Component as a prop:

# app/client-component.jsx
'use client'
export default function ClientComponent({ updateItem }) {
  return <form action={updateItem}>{/* ... */}</form>
}

# From server action component
<ClientComponent updateItem={updateItem} />


#I>>>> Usage in form
export default function Page() {
  async function createInvoice(formData: FormData) {
    'use server'

    const rawFormData = {
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    }

    // mutate data
    // revalidate cache
  }

  return (
    <form action={updateUserWithId}>
      <input type="text" name="name" />
      <button type="submit">Update User Name</button>
    </form>
  )
}
# OR YOU CAN IMPORT FROM DIFFERENT FILE
# app/client-component.tsx
'use client'
import { updateUser } from './actions'

export function UserProfile({ userId }: { userId: string }) {
  const updateUserWithId = updateUser.bind(null, userId)

  return (
    <form action={updateUserWithId}> # It will be handle by async function
      <input type="text" name="name" />
      <button type="submit">Update User Name</button>
    </form>
  )
}

# The Server Action will receive the userId argument, in addition to the form data:
# app/actions.js
'use server'
export async function updateUser(userId, formData) {
  // ...
}

# Event Handlers
# II>>> ONCLICK
# app/like-button.tsx
'use client'

import { incrementLike } from './actions'
import { useState } from 'react'

export default function LikeButton({ initialLikes }: { initialLikes: number }) {
  const [likes, setLikes] = useState(initialLikes)

  return (
    <>
      <p>Total Likes: {likes}</p>
      <button
        onClick={async () => {
          const updatedLikes = await incrementLike()
          setLikes(updatedLikes)
        }}
      >
        Like
      </button>
    </>
  )
}

# To improve the user experience, we recommend using other React APIs like useOptimistic and useTransition to update the UI before the Server Action finishes executing on the server, or to show a pending state.

# III>>>  ONCHANGE
# app/ui/edit-post.tsx
'use client'
import { publishPost, saveDraft } from './actions'

export default function EditPost() {
  return (
    <form action={publishPost}>
      <textarea
        name="content"
        onChange={async (e) => {
          await saveDraft(e.target.value)
          # THE VALUE DIRECLY GOES TO SERVER ACTION (CAN BE USED FOR DEBOUNCING)
        }}
      />
      <button type="submit">Publish</button>
    </form>
  )
 } # Use debouncing to prevent unnecessary Server Action invocations.

# IV>>>  useEffect
# This is useful for mutations that depend on global events or need to be triggered automatically.
# For example, onKeyDown for app shortcuts, an intersection observer hook for infinite scrolling, or when the component mounts to update a view count:

# app/view-count.tsx
'use client'

import { incrementViews } from './actions'
import { useState, useEffect } from 'react'

export default function ViewCount({ initialViews }: { initialViews: number }) {
  const [views, setViews] = useState(initialViews)

  useEffect(() => {
    const updateViews = async () => {
      const updatedViews = await incrementViews()
      setViews(updatedViews)
    }

    updateViews()
  }, [])

  return <p>Total Views: {views}</p>
}

# V >>> Revalidating data

# You can revalidate the Next.js Cache inside your Server Actions with the revalidatePath API:
# app/actions.ts
'use server'
import { revalidatePath } from 'next/cache'

export async function createPost() {
  try {
    // ...
  } catch (error) {
    // ...
  }

  revalidatePath('/posts')
}

# Or invalidate a specific data fetch with a cache tag using revalidateTag:
# app/actions.ts
'use server'
import { revalidateTag } from 'next/cache'

export async function createPost() {
  try {
    // ...
  } catch (error) {
    // ...
  }

  revalidateTag('posts')
}

# VI >>> Redirecting
# If you would like to redirect the user to a different route after the completion of a Server Action, you can use redirect API.
# redirect needs to be called outside of the try/catch block:
# app/actions.ts
'use server'

import { redirect } from 'next/navigation'
import { revalidateTag } from 'next/cache'

export async function createPost(id: string) {
  try {
    // ...
  } catch (error) {
    // ...
  }

  revalidateTag('posts') // Update cached posts
  redirect(`/post/${id}`) // Navigate to the new post page
}

# VII >>> Cookies
# You can get, set, and delete cookies inside a Server Action using the cookies API:

# VIII >>> Authentication and authorization
# You should treat Server Actions as you would public-facing API endpoints, and ensure that the user is authorized to perform the action.

```

16. Data Fetching Patterns and Best Practices

```bash
1. Fetching data on the server
# Whenever possible, we recommend fetching data on the server with Server Components. This allows many benefits
# Then, you can mutate or update data with Server Actions.

2. Fetching data where its needed
# you can use fetch or React cache in the component that needs the data without worrying about the performance implications of making multiple requests for the same data.
# This is possible because fetch requests are automatically memoized

3. Parallel and sequential data fetching
# With sequential data fetching, requests in a route are dependent on each other and therefore create waterfalls.
# With parallel data fetching, requests in a route are eagerly initiated and will load data at the same time. This reduces client-server waterfalls and the total time it takes to load data.

```

17. Server and Client Composition Patterns

```bash

1. When to use Server and Client Components?

# Server Component
    # Fetch data
    # Access backend resources (directly)
    # Keep sensitive information on the server (access tokens, API keys, etc)
    # Keep large dependencies on the server / Reduce client-side JavaScript
# Client Component
    # Add interactivity and event listeners (onClick(), onChange(), etc)
    # Use State and Lifecycle Effects (useState(), useReducer(), useEffect(), etc)
    # Use browser-only APIs
    # Use custom hooks that depend on state, effects, or browser-only APIs

2. Sharing data between components
# Instead of using React Context (which is not available on the server) or passing data as props, you can use fetch or React's cache function to fetch the same data in the components that need it, without worrying about making duplicate requests for the same data.
# This is because React extends fetch to automatically memoize data requests, and the cache function can be used when fetch is not available.

3. Keeping Server-only Code out of the Client Environment
# To prevent your environment variables from being leaked to the client, Next.js replaces private environment variables with an empty string.
# As a result, even though getData() can be imported and executed on the client, it won't work as expected.
# If server-only code runs on client component then it will give build-time error

import 'server-only' # First install it npm install server-only
export async function getData() {
  const res = await fetch('https://external-service.com/data', {
    headers: {
      authorization: process.env.API_KEY,
    },
  })

  return res.json()
}

4. Using Third-party Packages and Providers
# EG. Old component libraries are using useState but are not writing "use client" on top.
# So this will give error if imported to server component, works well in client component.
# To fix this, wrap third-party components that rely on client-only features in your own Client Components:

# app/carousel.tsx
'use client'
import { Carousel } from 'acme-carousel' # IF THIS IS DIRECTLY IMPORTED TO SERVER THEN GIVES ERROR

export default Carousel
# Now, you can use <Carousel /> directly within a Server Component:

# app/page.tsx
import Carousel from './carousel'

export default function Page() {
  return (
    <div>
      <p>View pictures</p>

      # Works, since Carousel is a Client Component
      <Carousel />
    </div>
  )
}

5. Using Context Providers

# Since React context is not supported in Server Components, trying to create a context at the root of your application will cause an error
# To fix this, create your context and render its provider inside of a Client Component

# app/theme-provider.tsx
'use client'
import { createContext } from 'react' # YOU CAN'T IMPORT IT IN SERVER COMP(EG. MAIN LAYOUT.JS)

export const ThemeContext = createContext({})

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>
}

# Your Server Component will now be able to directly render your provider since it's been marked as a Client Component:

# app/layout.tsx
import ThemeProvider from './theme-provider'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

6. Moving Client Components Down the Tree

# To reduce the Client JavaScript bundle size, we recommend moving Client Components down your component tree.

7. Interleaving Server and Client Components

# Since Client Components are rendered after Server Components, you cannot import a Server Component into a Client Component module (since it would require a new request back to the server). Instead, you can pass a Server Component as props to a Client Component.

#1>> The following pattern is not supported. You cannot import a Server Component into a Client Component:

# app/client-component.tsx
'use client'
# You cannot import a Server Component into a Client Component.
import ServerComponent from './Server-Component' # WILL GIVE ERROR

export default function ClientComponent({
  children,
}: {
  children: React.ReactNode
}) {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <ServerComponent /> # WILL GIVE ERROR
    </>
  )
}

# 2>> The following pattern is supported. You can pass Server Components as a prop OR CHILD to a Client Component.
# A common pattern is to use the React children prop to create a "slot" in your Client Component.

# app/client-component.tsx
'use client'
import { useState } from 'react'

export default function ClientComponent({
  children,
}: {
  children: React.ReactNode
}) {
  const [count, setCount] = useState(0)
  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      {children}
    </>
  )
}

# You can pass a Server Component as a child or prop of a Client Component.

# app/page.tsx
import ClientComponent from './client-component'
import ServerComponent from './server-component'

# Pages in Next.js are Server Components by default
export default function Page() {
  return (
    <ClientComponent>
      <ServerComponent />
    </ClientComponent>
  )
}

```

- Caching in Next.js
  - Most of Next.js' caching heuristics are determined by your API usage and have defaults for the best performance with zero or minimal configuration.

```bash
1. Request Memoization	-- Re-use data in a React Component tree
2. Data Cache -- Store data across user requests and deployments	(revalidated)
3. Full Route Cache --	Reduce rendering cost and improve performance	Persistent (revalidated)
4. Router Cache --	Reduce server requests on navigation - THIS ON CLIENT ALL OTHER ON SERVER

1. Request Memoization
# React extends the fetch API to automatically memoize requests that have the same URL and options.
# You do not have to fetch data at the top of the tree, and forward props between components.
# Instead, you can fetch data in the components that need it without worrying about the performance implications of making multiple requests across the network for the same data.
async function getItem() {
  # The `fetch` function is automatically memoized and the result is cached
  const res = await fetch('https://.../item/1')
  return res.json()
}
# This function is called twice, but make db call for the first time only
const item = await getItem() # cache MISS
# The second call could be anywhere in your route
const item = await getItem() # cache HIT

# Request memoization is a React feature, not a Next.js feature. It's included here to show how it interacts with the other caching mechanisms.
# Memoization only applies to the GET method in fetch requests.
# Memoization only applies to the React Component tree, this means:
    # It applies to fetch requests in generateMetadata, generateStaticParams, Layouts, Pages, and other Server Components.
    # It doesn't apply to fetch requests in Route Handlers as they are not a part of the React component tree. - [api routes]
# For cases where fetch is not suitable (e.g. some database clients, CMS clients, or GraphQL clients), you can use the React cache function to memoize functions.

# Revalidating
  # Since the memoization is not shared across server requests and only applies during rendering, there is no need to revalidate it.

2. Data Cache
# Next.js has a built-in Data Cache that persists the result of data fetches across incoming server requests and deployments.
# Data Cache is currently only available in pages/routes, not middleware. Any fetches done inside of your middleware will be uncached by default.

# Differences between the Data Cache and Request Memoization
    # While both caching mechanisms help improve performance by re-using cached data, the Data Cache is persistent across incoming requests and deployments, whereas memoization only lasts the lifetime of a request.
    # With memoization, we reduce the number of duplicate requests in the same render pass that have to cross the network boundary from the rendering server to the Data Cache server (e.g. a CDN or Edge Network) or data source (e.g. a database or CMS). With the Data Cache, we reduce the number of requests made to our origin data source.

# >>> Revalidating
  #1 Time-based Revalidation:
  #2 On-demand Revalidation:

#-> 1 Time-based Revalidation:
# After the revalidation, the first request still provide old data and then nextjs will revalidate the data if it fetched successfully else returns old data
# To revalidate data at a timed interval, you can use the next.revalidate option of fetch to set the cache lifetime of a resource (in seconds).

# Revalidate at most every hour
fetch('https://...', { next: { revalidate: 3600 } })

#-> 1 On-demand Revalidation:
# Data can be revalidated on-demand by path (revalidatePath) or by cache tag (revalidateTag).
# when revalidated the cached data is deleted and after it, new data will be fetched and cached on first request

# Opting out
# 1. For individual data fetchs, use cache option to no-store
// Opt out of caching for an individual `fetch` request
fetch(`https://...`, { cache: 'no-store' })

# 2. For specific route segment. Use the Route Segment Config options to opt out of caching
// Opt out of caching for all data requests in the route segment
export const dynamic = 'force-dynamic'

3. Full Route Cache # Automatic Static Optimization, Static Site Generation, Static Rendering

# Next.js automatically renders and caches routes at build time. This is an optimization that allows you to serve the cached route instead of rendering on the server for every request, resulting in faster page loads.
# Static routes are cached by default, whereas dynamic routes are rendered at request time, and not cached.

# ---> Invalidation
# There are two ways you can invalidate the Full Route Cache:
    # 1. Revalidating Data: Revalidating the Data Cache, will in turn invalidate the Router Cache by re-rendering components on the server and caching the new render output.
    # 2. Redeploying: Unlike the Data Cache, which persists across deployments, the Full Route Cache is cleared on new deployments.

# ---> Opting out
# You can opt out of the Full Route Cache, ie. dynamically render components for every incoming request, by:
  # 1. Using a Dynamic Function: (The Data Cache can still be used)
  # 2. Using the dynamic = 'force-dynamic' or revalidate = 0 route segment config options:
  # 3. Opting out of the Data Cache:


3. Router Cache # Client-side Cache or Prefetch Cache.

# Next.js caches visited route segments and prefetches the routes the user is likely to navigate to (based on <Link> components in their viewport).

# This results in an improved navigation experience for the user:

  # Instant backward/forward navigation because visited routes are cached and fast navigation to new routes because of prefetching and partial rendering.
  # No full-page reload between navigations, and React state and browser state are preserved.

# Difference between the Router Cache and Full Route Cache:

  # The Router Cache temporarily stores the React Server Component Payload in the browser for the duration of a user session, whereas the Full Route Cache persistently stores the React Server Component Payload and HTML on the server across multiple user requests.
  # While the Full Route Cache only caches statically rendered routes, the Router Cache applies to both statically and dynamically rendered routes.

# Invalidation:: There are two ways you can invalidate the Router Cache:

  # In a Server Action:
    # Revalidating data on-demand by path with (revalidatePath) or by cache tag with (revalidateTag)
    # Using cookies.set or cookies.delete invalidates the Router Cache to prevent routes that use cookies from becoming stale (e.g. authentication).
  # Calling router.refresh will invalidate the Router Cache and make a new request to the server for the current route.


.......... Migrating Data Fetching Methods

1. getServerSideProps (old) - fetch(`https://...`, { cache: 'no-store' })

# It means that request should be refetched on every request.
# Now just add { cache: 'no-store } to fetch request for making it equivalent to getServerSideProps
const dynamicData = await fetch(`https://...`, { cache: 'no-store' })

# - To access request objects use cookies and headers from 'next/headers'
# It's new read-only functions to retrieve request data

import { cookies, headers } from 'next/headers'
  const authHeader = headers().get('authorization')
  const theme = cookies().get('theme')

2. getStaticProps (old) - fetch("") || fetch("",{ cache: 'force-cache' }) (as it is default)

# In the app directory, data fetching with fetch() will default to cache: 'force-cache', which will cache the request data until manually invalidated.
const res = await fetch(`https://...`)
const projects = await res.json()

3. getStaticPaths (old) - generateStaticParams (new)

# generateStaticParams behaves similarly to getStaticPaths, but has a simplified API for returning route parameters and can be used inside layouts.
# The return shape of generateStaticParams is an array of segments instead of an array of nested param objects or a string of resolved paths.

# --> Replacing fallback
# It is used to define the behavior of a page that isn't pre-rendered at build time.
# This property can be set to true to show a fallback page while the page is being generated, false to show a 404 page

export const dynamicParams = true; //false  # true is default value

---- params v/s useParams v/s usePathname v/s useSearchParams v/s searchParams

1. useParams: For accessing dynamic parameters in the URL.
app/shop/[slug]/page.js #useParams is { slug: '1' } --> value of slug
2. usePathname: It provides a convenient way to read the current URLs pathname.
/dashboard?v=2	# pathname is '/dashboard'
3. useSearchParams: For working specifically with query parameters in the URL.
/dashboard?v=2	# searchParams.get("v") gives '2'
4. searchParams:
same as useSearchParams() but searchParams is for server and it's dynamic (so can't use it with generateStaticParams)

```

<!-- ######################################################################## -->

- Pre-requisite

- Next.js is a flexible React framework that gives you building blocks to create fast, full-stack web applications.

  - You can use React to build your UI, then incrementally adopt Next.js features to solve common application requirements such as routing, data fetching, and caching

- Building blocks of a web application

  - User Interface - how users will consume and interact with your application.
  - Routing - how users navigate between different parts of your application.
  - Data Fetching - where your data lives and how to get it.
  - Rendering - when and where you render static or dynamic content.
  - Integrations - what third-party services you use (for CMS, auth, payments, etc.) and how you connect to them.
  - Infrastructure - where you deploy, store, and run your application code (serverless, CDN, edge, etc.).
  - Performance - how to optimize your application for end-users.
  - Scalability - how your application adapts as your team, data, and traffic grow.
  - Developer Experience - your team's experience building and maintaining your application.

- Server and Client Environments

  - The client refers to the browser on a user’s device that sends a request to a server for your application code. It then turns the response it receives from the server into an interface the user can interact with.
  - The server refers to the computer in a data center that stores your application code, receives requests from a client, does some computation, and sends back an appropriate response.

  - Each environment has its own set of capabilities and constraints. For example, by moving rendering and data fetching to the server, you can reduce the amount of code sent to the client, which can improve your application's performance. But to make your UI interactive, you need to update the DOM on the client

```bash

```

- Overview

  - Styling: The different ways to style your application in Next.js.
  - Optimizations: How to optimize images, links, and fonts.
  - Routing: How to create nested layouts and pages using file-system routing.
  - Data Fetching: How to set up a database on Vercel, and best practices for fetching and streaming.
  - Search and Pagination: How to implement search and pagination using URL Search Params.
  - Mutating Data: How to mutate data using React Server Actions, and revalidate the Next.js cache.
  - Error Handling: How to handle general and 404 not found errors.
  - Form Validation and Accessibility: How to do server-side form validation and tips for improving accessibility.
  - Authentication: How to add authentication to your application using NextAuth.js and Middleware.
  - Metadata: How to add metadata and prepare your application for social sharing.

- Automatic code-splitting and prefetching

  - To improve the navigation experience, Next.js automatically code splits your application by route segments. This is different from a traditional React SPA, where the browser loads all your application code on initial load.

  - Splitting code by routes means that pages become isolated. If a certain page throws an error, the rest of the application will still work.

  - Furthermore, in production, whenever < Link> components appear in the browser's viewport, Next.js automatically prefetches the code for the linked route in the background. By the time the user clicks the link, the code for the destination page will already be loaded in the background, and this is what makes the page transition near-instant!

- Using Server Components to fetch data

  - By default, Next.js applications use React Server Components. Fetching data with Server Components is a relatively new approach and there are a few benefits of using them:

    - Server Components support promises, providing a simpler solution for asynchronous tasks like data fetching. You can use async/await syntax without reaching out for useEffect, useState or data fetching libraries.
    - Server Components execute on the server, so you can keep expensive data fetches and logic on the server and only send the result to the client.
    - As mentioned before, since Server Components execute on the server, you can query the database directly without an additional API layer.

- What are request waterfalls?

  - A "waterfall" refers to a sequence of network requests that depend on the completion of previous requests. In the case of data fetching, each request can only begin once the previous request has returned data.

- Parallel data fetching

  - A common way to avoid waterfalls is to initiate all data requests at the same time - in parallel.
  - In JavaScript, you can use the Promise.all() or Promise.allSettled() functions to initiate all promises at the same time.

- What is Static Rendering?

  - By default, Next.js prerenders routes to improve performance, this is called Static Rendering. So if your data changes, it won't be reflected in your dashboard.
  - With static rendering, data fetching and rendering happens on the server at build time (when you deploy) or when revalidating data.

  - Whenever a user visits your application, the cached result is served. There are a couple of benefits of static rendering:

    - Faster Websites - Prerendered content can be cached and globally distributed. This ensures that users around the world can access your website's content more quickly and reliably.
    - Reduced Server Load - Because the content is cached, your server does not have to dynamically generate content for each user request.
    - SEO - Prerendered content is easier for search engine crawlers to index, as the content is already available when the page loads. This can lead to improved search engine rankings.

  - Static rendering is useful for UI with no data or data that is shared across users, such as a static blog post or a product page. It might not be a good fit for a dashboard that has personalized data which is regularly updated.

  - The opposite of static rendering is dynamic rendering.

- What is Dynamic Rendering?

  - With dynamic rendering, content is rendered on the server for each user at request time (when the user visits the page). There are a couple of benefits of dynamic rendering:

    - Real-Time Data - Dynamic rendering allows your application to display real-time or frequently updated data. This is ideal for applications where data changes often.
    - User-Specific Content - It's easier to serve personalized content, such as dashboards or user profiles, and update the data based on user interaction.
    - Request Time Information - Dynamic rendering allows you to access information that can only be known at request time, such as cookies or the URL search parameters.

- What is streaming?
  - Streaming is a data transfer technique that allows you to break down a route into smaller "chunks" and progressively stream them from the server to the client as they become ready.
  - By streaming, you can prevent slow data requests from blocking your whole page. This allows the user to see and interact with parts of the page without waiting for all the data to load before any UI can be shown to the user.
  - Streaming works well with React's component model, as each component can be considered a chunk.
  - There are two ways you implement streaming in Next.js:
    1. At the page level, with the loading.tsx file.
    2. For specific components, with < Suspense>.

```bash
00000:: STREAMING A COMPONENT 1. LOADING.TSX(FOR WHOLE PAGE) 2.SUSPENSE (FOR SOME PART OF THE PAGE)
1. loading.tsx
# In the /app/dashboard folder, create a new file called loading.tsx:
/app/dashboard/loading.tsx

export default function Loading() {
  return <div>Loading...</div>;
}
# BUT THIS WILL APPLY TO ALL THE ROUTES BELOW IT. TO AVOID IT USE "Route Groups"
# Create a new folder called /(overview) inside the dashboard folder. Then, move your loading.tsx and page.tsx files inside the folder:
# Now, the loading.tsx file will only apply to your dashboard overview page.
/app/dashboard/(overview)/page.tsx
# Route groups allow you to organize files into logical groups without affecting the URL path structure. When you create a new folder using parentheses (), the name won't be included in the URL path. So /dashboard/(overview)/page.tsx becomes /dashboard.
#  you can also use route groups to separate your application into sections (e.g. (marketing) routes and (shop) routes)

2. suspense
# So far, you're streaming a whole page. But you can also be more granular and stream specific components using React Suspense.

# Suspense allows you to defer rendering parts of your application until some condition is met (e.g. data is loaded). You can wrap your dynamic components in Suspense. Then, pass it a fallback component to show while the dynamic component loads.

import { Suspense } from 'react';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import { RevenueChartSkeleton } from '@/app/ui/skeletons';

# HERE UNTIL THE RevenueChart component LOADS IT WILL SHOW FALLBACK  COMPONENT (You can just write loading here)
 <Suspense fallback={<RevenueChartSkeleton />}>
    <RevenueChart />
 </Suspense>

# Grouping components ::
# Use the wrapper component and wrap all the same component that you want to load together and then instead of <RevenueChart /> use that <WrapCard /> to render all together

# TLDR:
    # You could stream the whole page like we did with loading.tsx... but that may lead to a longer loading time if one of the components has a slow data fetch.
    # You could stream every component individually... but that may lead to UI popping into the screen as it becomes ready.
    # You could also create a staggered effect by streaming page sections. But you'll need to create wrapper components.
```

- Partial Prerendering (PPR)

  - Next.js 14 introduced an experimental version of Partial Prerendering – a new rendering model that allows you to combine the benefits of static and dynamic rendering in the same route. For example: When a user visits a route:
    - A static route shell that includes the navbar and product information is served, ensuring a fast initial load.
    - The shell leaves holes where dynamic content like the cart and recommended products will load in asynchronously.
    - The async holes are streamed in parallel, reducing the overall load time of the page.
  - PPR uses React's Suspense to defer rendering parts of your application until some condition is met (e.g. data is loaded).
    - Wrapping a component in Suspense doesn't make the component itself dynamic, but rather Suspense is used as a boundary between your static and dynamic code.

```bash
#  Implementing Partial Prerendering
1. Enable PPR for your Next.js app by adding the ppr option to your next.config.mjs file:
const nextConfig = {
  experimental: {
    ppr: 'incremental', # The 'incremental' value allows you to adopt PPR for specific routes.
  },
};

2. Next, add the experimental_ppr segment config option to your dashboard layout:

export const experimental_ppr = true;

# Now in production site, Next.js will prerender the static parts of your route and defer the dynamic parts until the user requests them.
# you don't need to change your code to use PPR. As long as you're using Suspense to wrap the dynamic parts of your route, Next.js will know which parts of your route are static and which are dynamic.

```

- Adding the search functionality

  - These are the Next.js client hooks that you'll use to implement the search functionality:

    - useSearchParams - Allows you to access the parameters of the current URL. For example, the search params for this URL /dashboard/invoices?page=1&query=pending would look like this: {page: '1', query: 'pending'}.

    - usePathname - Lets you read the current URL's pathname. For example, for the route /dashboard/invoices, usePathname would return '/dashboard/invoices'.

    - useRouter - Enables navigation between routes within client components programmatically. There are multiple methods you can use.

```bash
# URLSearchParams
# Creating a new URLSearchParams object
const params = new URLSearchParams('?name=Alice&age=30');

# Accessing query parameters
console.log(params.get('name')); # Output: "Alice"
console.log(params.get('age'));  # Output: "30"

# Checking if a parameter exists
console.log(params.has('name')); # Output: true
console.log(params.has('gender')); # Output: false

# Iterating over all parameters
for (const [key, value] of params) {
  console.log(`${key}: ${value}`);
}
# Output:
# name: Bob
# gender: female

# Creating a URLSearchParams object from scratch
const newParams = new URLSearchParams();
newParams.append('country', 'USA');
newParams.append('state', 'California');
console.log( newParams.toString()); # Output: "country=USA&state=California"

# Using the constructed query string in a URL
const baseUrl = 'https:#example.com';
const urlWithParams = `${baseUrl}?${newParams.toString()}`;
console.log(urlWithParams); # Output: "https:#example.com?country=USA&state=California"

# IMPLEMENTING THE SEARCH AND PAGINATION WITH DEBOUNCING IN A PAGE

/app/ui/search.tsx (client component)
"use client";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Search() {
    const searchParams = useSearchParams(); # This will get the URL params
    const pathname = usePathname(); # This will used to get the URL path
    const { replace } = useRouter(); # This will used to replace the current URL(path+param)

    function handleSearch(term: string) {
      const params = new URLSearchParams(searchParams); # All the current params will be added
      if (term) {
        params.set('query', term); # update/add the "query" params
      } else {
        params.delete('query'); # If no value then delete the "query" params
      }
      replace(`${pathname}?${params.toString()}` );  # Replace the whole URL to this
    } # pathname=>"/dashboard/invoices" params=>"query=lee" => /dashboard/invoices?query=lee
  }

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
}
# defaultValue vs. value / Controlled vs. Uncontrolled
    # If you're using state to manage the value of an input, you'd use the value attribute to make it a controlled component. This means React would manage the input state.
    # However, since you're not using state, you can use defaultValue. This means the native input will manage its own state. This is okay since you're saving the search query to the URL instead of state.

/app/dashboard/invoices/page.tsx (server component)

import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';

# "searchParams" for server component and "useSearchParams()" for client component
export default async function Page({
  searchParams, # SAME AS "useSearchParams()" FOR SERVER COMPONENT
}: {
  searchParams?: { # THIS 2 THINGS WILL BE UPDATED
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
}
# By debouncing, you can reduce the number of requests sent to your database, thus saving resources.
let timer: any;
function input(x: number) {
  clearTimeout(timer);
  timer = setTimeout(() => {
    console.log("Timer No. " + x); # Timer No.  2
  }, 1000);
}
input(1); # This will be overridden by the next input(2)
setTimeout(( ) => input(2), 500) ;  # Only this will be printed
```

- mutate data using Server Actions without using api endpoint (get,post,put,delete)
- What are Server Actions?
  - React Server Actions allow you to run asynchronous code directly on the server. They eliminate the need to create API endpoints to mutate your data. Instead, you write asynchronous functions that execute on the server and can be invoked from your Client or Server Components.
  - Server Actions achieve security through techniques like POST requests, encrypted closures, strict input checks, error message hashing, and host restrictions, all working together to significantly enhance your app's safety.

```bash

 /app/lib/actions.ts

'use server';


import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  id: z.string(),
  # customerId: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.', # If no string then give this error
  }),
  amount: z.coerce.number() # coerce means convert the data to number
  .gt(0, { message: 'Please enter an amount greater than $0.' }), # If value is not greater than 0 then show this error
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }), # if status is empty then show them this msg
  date: z.string(),
});

# Created a new schema from "FormSchema" without id and data using omit
const CreateInvoice = FormSchema.omit({ id: true, date: true });

# To create a new invoice
export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `;

  revalidatePath('/dashboard/invoices'); # This will re-cache the value once it's updated
  redirect('/dashboard/invoices'); # This will redirect to this url
}

# To update a new invoice
export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  const amountInCents = amount * 100;

  await sql`
    UPDATE invoices
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
  `;

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

# You can create dynamic route segments by wrapping a folder's name in square brackets. For example, [id], [post] or [slug].
```

- Handling Errors
  1. try/catch
  2. Handling all errors with error.tsx
  3. Handling 404 errors with the notFound function
  - While error.tsx is useful for catching all errors, notFound can be used when you try to fetch a resource that doesn't exist.
  - notFound will take precedence over error.tsx, so you can reach out for it when you want to handle more specific errors! -[IF ERROR IS 404 THEN "notFound" WILL BE EXECUTED, ELSE "error.tsx"]

```bash
# ===> 1. try/catch

export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}
# Note how redirect is being called outside of the try/catch block. This is because redirect works by throwing an error, which would be caught by the catch block. To avoid this, you can call redirect after try/catch. redirect would only be reachable if try is successful.

# ===> 2. Handling all errors with error.tsx

/dashboard/invoices/error.tsx

'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}

#1> "use client" - error.tsx needs to be a Client Component.
#2> It accepts two props:
    # error: This object is an instance of JavaScript's native Error object.
    # reset: This is a function to reset the error boundary. When executed, the function will try to re-render the route segment.

# ===> 3. Handling 404 errors with the notFound function

    # Give fake UUID that doesn't exist in your database.
    # You'll immediately see error.tsx kicks in because this is a child route of /invoices where error.tsx is defined.
    # However, if you want to be more specific, you can show a 404 error to tell the user the resource they're trying to access hasn't been found.

/dashboard/invoices/[id]/edit/page.tsx

import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { updateInvoice } from '@/app/lib/actions';
import { notFound } from 'next/navigation'; # IMPORT THIS

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound(); # IF NO INVOICE THEN THIS WILL EXECUTE
  }
   // ...
}

# Now <Page> will throw an error if a specific invoice is not found. To show an error UI to the user. Create a not-found.tsx file inside the /edit folder.

/dashboard/invoices/[id]/edit/not-found.tsx
# THIS PAGE WILL BE SHOWN TO THE USER IF THE PAGE DOESN'T EXISTS
import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested invoice.</p>
      <Link
        href="/dashboard/invoices"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Go Back
      </Link>
    </main>
  );
}
```

<!-- /========================================================================================== -->
