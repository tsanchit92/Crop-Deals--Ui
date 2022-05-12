import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { AddCropsComponent } from './add-crops/add-crops.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ContactComponent } from './contact/contact.component';
import { CropsComponent } from './crops/crops.component';
import { EditFarmProfileComponent } from './edit-farm-profile/edit-farm-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FarmDashboardComponent } from './farm-dashboard/farm-dashboard.component';
import { FarmLoginComponent } from './farm-login/farm-login.component';
import { FarmRegisterComponent } from './farm-register/farm-register.component';
import { FarmerDahboardComponent } from './farmer-dahboard/farmer-dahboard.component';
import { FarmerLoginComponent } from './farmer-login/farmer-login.component';
import { FarmerRegisterComponent } from './farmer-register/farmer-register.component';
import { GetCartComponent } from './get-cart/get-cart.component';
import { GetCropsComponent } from './get-crops/get-crops.component';
import { GetFarmOrdersComponent } from './get-farm-orders/get-farm-orders.component';
import { GetOrdersComponent } from './get-orders/get-orders.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { ShowDealersComponent } from './show-dealers/show-dealers.component';
import { ShowFarmerComponent } from './show-farmer/show-farmer.component';


const routes: Routes = [
  {
    path:"product",
    component:ProductComponent
  },
  {
    path:"",
    component:HomeComponent
  },
  {
    path: "adminLogin",
    component: AdminLoginComponent
  },
  {
    path: "adminDashboard",
    component: AdminDashboardComponent,
    children:
      [
        { path: "showFarmers", component: ShowFarmerComponent },
        { path: "showDealers", component: ShowDealersComponent },
        { path: "getOrders", component: GetOrdersComponent},
      ]
  },
  {
    path: "farmer-register",
    component: FarmerRegisterComponent
  },
  {
    path: "farmer-login",
    component: FarmerLoginComponent
    
  },

  {
    path: "farmer-dashboard",
    component: FarmerDahboardComponent,
    children:
      [
        { path: "crops", component: CropsComponent },
        { path: "editProfile", component: EditProfileComponent },
        { path: "addCrops", component: AddCropsComponent },
      ]
  },

  {
    path: "farm-Register",
    component: FarmRegisterComponent
  },
  {
    path: "farm-login",
    component: FarmLoginComponent
  },
  {
    path: "farmDashBoard",
    component: FarmDashboardComponent,
    children:
      [
        { path: "getCropsFarm", component: GetCropsComponent },
        { path: "editProfileFarm", component: EditFarmProfileComponent },
        { path: "getCart", component: GetCartComponent },
        {path:  "getOrders",component:GetFarmOrdersComponent}
      ]
  },
  {
    path: "farm-Register",
    component: FarmRegisterComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"payment",
    component:OrderComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AdminLoginComponent, AdminDashboardComponent, EditFarmProfileComponent,
  GetCartComponent, FarmDashboardComponent, CropsComponent,
  EditProfileComponent, AddCropsComponent, FarmerLoginComponent, FarmerRegisterComponent,
  FarmLoginComponent, FarmRegisterComponent, FarmerDahboardComponent, ShowDealersComponent,
  ShowFarmerComponent, GetOrdersComponent,ProductComponent,ContactComponent,OrderComponent]