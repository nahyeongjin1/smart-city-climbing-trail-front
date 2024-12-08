/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from "@tanstack/react-router";

// Import Routes

import { Route as rootRoute } from "./app/routes/__root";
import { Route as CommonRouteImport } from "./app/routes/_common/route";
import { Route as AuthRouteImport } from "./app/routes/_auth/route";
import { Route as CommonMyImport } from "./app/routes/_common/my";
import { Route as CommonTrackIndexImport } from "./app/routes/_common/track/index";

// Create Virtual Routes

const CommonIndexLazyImport = createFileRoute("/_common/")();
const CommonHomeIndexLazyImport = createFileRoute("/_common/home/")();
const AuthAuthIndexLazyImport = createFileRoute("/_auth/auth/")();
const CommonHomeNewTrackLazyImport = createFileRoute("/_common/home/new-track")();
const AuthAuthSignUpLazyImport = createFileRoute("/_auth/auth/sign-up")();

// Create/Update Routes

const CommonRouteRoute = CommonRouteImport.update({
	id: "/_common",
	getParentRoute: () => rootRoute,
} as any);

const AuthRouteRoute = AuthRouteImport.update({
	id: "/_auth",
	getParentRoute: () => rootRoute,
} as any);

const CommonIndexLazyRoute = CommonIndexLazyImport.update({
	id: "/",
	path: "/",
	getParentRoute: () => CommonRouteRoute,
} as any).lazy(() => import("./app/routes/_common/index.lazy").then((d) => d.Route));

const CommonMyRoute = CommonMyImport.update({
	id: "/my",
	path: "/my",
	getParentRoute: () => CommonRouteRoute,
} as any);

const CommonHomeIndexLazyRoute = CommonHomeIndexLazyImport.update({
	id: "/home/",
	path: "/home/",
	getParentRoute: () => CommonRouteRoute,
} as any).lazy(() => import("./app/routes/_common/home/index.lazy").then((d) => d.Route));

const AuthAuthIndexLazyRoute = AuthAuthIndexLazyImport.update({
	id: "/auth/",
	path: "/auth/",
	getParentRoute: () => AuthRouteRoute,
} as any).lazy(() => import("./app/routes/_auth/auth/index.lazy").then((d) => d.Route));

const CommonTrackIndexRoute = CommonTrackIndexImport.update({
	id: "/track/",
	path: "/track/",
	getParentRoute: () => CommonRouteRoute,
} as any);

const CommonHomeNewTrackLazyRoute = CommonHomeNewTrackLazyImport.update({
	id: "/home/new-track",
	path: "/home/new-track",
	getParentRoute: () => CommonRouteRoute,
} as any).lazy(() => import("./app/routes/_common/home/new-track.lazy").then((d) => d.Route));

const AuthAuthSignUpLazyRoute = AuthAuthSignUpLazyImport.update({
	id: "/auth/sign-up",
	path: "/auth/sign-up",
	getParentRoute: () => AuthRouteRoute,
} as any).lazy(() => import("./app/routes/_auth/auth/sign-up.lazy").then((d) => d.Route));

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
	interface FileRoutesByPath {
		"/_auth": {
			id: "/_auth";
			path: "";
			fullPath: "";
			preLoaderRoute: typeof AuthRouteImport;
			parentRoute: typeof rootRoute;
		};
		"/_common": {
			id: "/_common";
			path: "";
			fullPath: "";
			preLoaderRoute: typeof CommonRouteImport;
			parentRoute: typeof rootRoute;
		};
		"/_common/my": {
			id: "/_common/my";
			path: "/my";
			fullPath: "/my";
			preLoaderRoute: typeof CommonMyImport;
			parentRoute: typeof CommonRouteImport;
		};
		"/_common/": {
			id: "/_common/";
			path: "/";
			fullPath: "/";
			preLoaderRoute: typeof CommonIndexLazyImport;
			parentRoute: typeof CommonRouteImport;
		};
		"/_auth/auth/sign-up": {
			id: "/_auth/auth/sign-up";
			path: "/auth/sign-up";
			fullPath: "/auth/sign-up";
			preLoaderRoute: typeof AuthAuthSignUpLazyImport;
			parentRoute: typeof AuthRouteImport;
		};
		"/_common/home/new-track": {
			id: "/_common/home/new-track";
			path: "/home/new-track";
			fullPath: "/home/new-track";
			preLoaderRoute: typeof CommonHomeNewTrackLazyImport;
			parentRoute: typeof CommonRouteImport;
		};
		"/_common/track/": {
			id: "/_common/track/";
			path: "/track";
			fullPath: "/track";
			preLoaderRoute: typeof CommonTrackIndexImport;
			parentRoute: typeof CommonRouteImport;
		};
		"/_auth/auth/": {
			id: "/_auth/auth/";
			path: "/auth";
			fullPath: "/auth";
			preLoaderRoute: typeof AuthAuthIndexLazyImport;
			parentRoute: typeof AuthRouteImport;
		};
		"/_common/home/": {
			id: "/_common/home/";
			path: "/home";
			fullPath: "/home";
			preLoaderRoute: typeof CommonHomeIndexLazyImport;
			parentRoute: typeof CommonRouteImport;
		};
	}
}

// Create and export the route tree

interface AuthRouteRouteChildren {
	AuthAuthSignUpLazyRoute: typeof AuthAuthSignUpLazyRoute;
	AuthAuthIndexLazyRoute: typeof AuthAuthIndexLazyRoute;
}

const AuthRouteRouteChildren: AuthRouteRouteChildren = {
	AuthAuthSignUpLazyRoute: AuthAuthSignUpLazyRoute,
	AuthAuthIndexLazyRoute: AuthAuthIndexLazyRoute,
};

const AuthRouteRouteWithChildren = AuthRouteRoute._addFileChildren(AuthRouteRouteChildren);

interface CommonRouteRouteChildren {
	CommonMyRoute: typeof CommonMyRoute;
	CommonIndexLazyRoute: typeof CommonIndexLazyRoute;
	CommonHomeNewTrackLazyRoute: typeof CommonHomeNewTrackLazyRoute;
	CommonTrackIndexRoute: typeof CommonTrackIndexRoute;
	CommonHomeIndexLazyRoute: typeof CommonHomeIndexLazyRoute;
}

const CommonRouteRouteChildren: CommonRouteRouteChildren = {
	CommonMyRoute: CommonMyRoute,
	CommonIndexLazyRoute: CommonIndexLazyRoute,
	CommonHomeNewTrackLazyRoute: CommonHomeNewTrackLazyRoute,
	CommonTrackIndexRoute: CommonTrackIndexRoute,
	CommonHomeIndexLazyRoute: CommonHomeIndexLazyRoute,
};

const CommonRouteRouteWithChildren = CommonRouteRoute._addFileChildren(CommonRouteRouteChildren);

export interface FileRoutesByFullPath {
	"": typeof CommonRouteRouteWithChildren;
	"/my": typeof CommonMyRoute;
	"/": typeof CommonIndexLazyRoute;
	"/auth/sign-up": typeof AuthAuthSignUpLazyRoute;
	"/home/new-track": typeof CommonHomeNewTrackLazyRoute;
	"/track": typeof CommonTrackIndexRoute;
	"/auth": typeof AuthAuthIndexLazyRoute;
	"/home": typeof CommonHomeIndexLazyRoute;
}

export interface FileRoutesByTo {
	"": typeof AuthRouteRouteWithChildren;
	"/my": typeof CommonMyRoute;
	"/": typeof CommonIndexLazyRoute;
	"/auth/sign-up": typeof AuthAuthSignUpLazyRoute;
	"/home/new-track": typeof CommonHomeNewTrackLazyRoute;
	"/track": typeof CommonTrackIndexRoute;
	"/auth": typeof AuthAuthIndexLazyRoute;
	"/home": typeof CommonHomeIndexLazyRoute;
}

export interface FileRoutesById {
	__root__: typeof rootRoute;
	"/_auth": typeof AuthRouteRouteWithChildren;
	"/_common": typeof CommonRouteRouteWithChildren;
	"/_common/my": typeof CommonMyRoute;
	"/_common/": typeof CommonIndexLazyRoute;
	"/_auth/auth/sign-up": typeof AuthAuthSignUpLazyRoute;
	"/_common/home/new-track": typeof CommonHomeNewTrackLazyRoute;
	"/_common/track/": typeof CommonTrackIndexRoute;
	"/_auth/auth/": typeof AuthAuthIndexLazyRoute;
	"/_common/home/": typeof CommonHomeIndexLazyRoute;
}

export interface FileRouteTypes {
	fileRoutesByFullPath: FileRoutesByFullPath;
	fullPaths: "" | "/my" | "/" | "/auth/sign-up" | "/home/new-track" | "/track" | "/auth" | "/home";
	fileRoutesByTo: FileRoutesByTo;
	to: "" | "/my" | "/" | "/auth/sign-up" | "/home/new-track" | "/track" | "/auth" | "/home";
	id:
		| "__root__"
		| "/_auth"
		| "/_common"
		| "/_common/my"
		| "/_common/"
		| "/_auth/auth/sign-up"
		| "/_common/home/new-track"
		| "/_common/track/"
		| "/_auth/auth/"
		| "/_common/home/";
	fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
	AuthRouteRoute: typeof AuthRouteRouteWithChildren;
	CommonRouteRoute: typeof CommonRouteRouteWithChildren;
}

const rootRouteChildren: RootRouteChildren = {
	AuthRouteRoute: AuthRouteRouteWithChildren,
	CommonRouteRoute: CommonRouteRouteWithChildren,
};

export const routeTree = rootRoute._addFileChildren(rootRouteChildren)._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_auth",
        "/_common"
      ]
    },
    "/_auth": {
      "filePath": "_auth/route.tsx",
      "children": [
        "/_auth/auth/sign-up",
        "/_auth/auth/"
      ]
    },
    "/_common": {
      "filePath": "_common/route.tsx",
      "children": [
        "/_common/my",
        "/_common/",
        "/_common/home/new-track",
        "/_common/track/",
        "/_common/home/"
      ]
    },
    "/_common/my": {
      "filePath": "_common/my.tsx",
      "parent": "/_common"
    },
    "/_common/": {
      "filePath": "_common/index.lazy.tsx",
      "parent": "/_common"
    },
    "/_auth/auth/sign-up": {
      "filePath": "_auth/auth/sign-up.lazy.tsx",
      "parent": "/_auth"
    },
    "/_common/home/new-track": {
      "filePath": "_common/home/new-track.lazy.tsx",
      "parent": "/_common"
    },
    "/_common/track/": {
      "filePath": "_common/track/index.tsx",
      "parent": "/_common"
    },
    "/_auth/auth/": {
      "filePath": "_auth/auth/index.lazy.tsx",
      "parent": "/_auth"
    },
    "/_common/home/": {
      "filePath": "_common/home/index.lazy.tsx",
      "parent": "/_common"
    }
  }
}
ROUTE_MANIFEST_END */
