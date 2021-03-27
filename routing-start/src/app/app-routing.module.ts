import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolver } from "./servers/server/server-resolver.service";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "users",
    component: UsersComponent,
    children: [{ path: ":id/:name", component: UserComponent }],
  }, // if path is localhost:4200/users, load UsersComponent
  //dynamic path segment that can be any val
  // can use it to dynamically load route with encoded data
  {
    path: "servers",
    // canActivate takes list of services acting as guards and applies it to whole route and child routes
    // canActivateChild just applies to the child routes
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      {
        path: ":id",
        component: ServerComponent,
        resolve: { server: ServerResolver },
      }, // maps data returned by resolver to server obj, doesnt use array like other guards
      {
        path: ":id/edit",
        canDeactivate: [CanDeactivateGuard],
        component: EditServerComponent,
      },
    ],
  },
  // { path: "not-found", component: PageNotFoundComponent },
  {
    path: "not-found",
    component: ErrorPageComponent,
    data: { message: "Page not found" },
  }, //pass static data in a reuseable way

  { path: "**", redirectTo: "/not-found" }, // redirect to not-found route, ** captures all paths
  // generic route must be last route because routes get parsed from top to bottom
  // angular matches paths by prefix, so for example, '' matches every path. if you dont want this,
  // use { path: '', redirectTo: 'somewhere-else', pathMatch: 'full'} - only captures full paths of ''
];

@NgModule({
  // useHash - all parts of route after hash are ignored by web server
  // part after can be parsed by angular - not preferred
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })], // configure router module with routess, do not re-declare modules from app.modules.ts
  exports: [RouterModule], // if i were to import this module, what should be accessible to the module importing this module
})
export class AppRoutingModule {}
