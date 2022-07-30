import { About, Home } from "../pages"
import { Admin, Messages } from "../pages/admin"

export const routes: RoutesModel[] = [
  {
    path: 'home/*',
    component: Home,
    children: [
      {
        path: 'about',
        component: About,
      }
    ]
  },
  {
    path: 'admin/*',
    component: Admin,
    children: [
      {
        path: 'messages',
        component: Messages,
      }
    ]
  }
]

export interface RoutesModel {
  path: string,
  component: any,
  children?: RoutesModel[]
}
