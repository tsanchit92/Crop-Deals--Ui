import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FarmerRegisterComponent } from './farmer-register/farmer-register.component';
import { FarmerLoginComponent } from './farmer-login/farmer-login.component';
import { FarmLoginComponent } from './farm-login/farm-login.component';
import { FarmRegisterComponent } from './farm-register/farm-register.component';
import { FarmerDahboardComponent } from './farmer-dahboard/farmer-dahboard.component';
import { FarmDashboardComponent } from './farm-dashboard/farm-dashboard.component';
import { AddCropsComponent } from './add-crops/add-crops.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CropsComponent } from './crops/crops.component';
import { GetCropsComponent } from './get-crops/get-crops.component';
import { GetCartComponent } from './get-cart/get-cart.component';
import { EditFarmProfileComponent } from './edit-farm-profile/edit-farm-profile.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ShowFarmerComponent } from './show-farmer/show-farmer.component';
import { ShowDealersComponent } from './show-dealers/show-dealers.component';
import { GetOrdersComponent } from './get-orders/get-orders.component';
import { PaymentHomeComponent } from './payment-home/payment-home.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { OrderComponent } from './order/order.component';
import { GetFarmOrdersComponent } from './get-farm-orders/get-farm-orders.component';
import { SoldCropsComponent } from './sold-crops/sold-crops.component';
@NgModule({
  declarations: [
    AppComponent,
    FarmerRegisterComponent,
    FarmerLoginComponent,
    FarmLoginComponent,
    FarmRegisterComponent,
    FarmerDahboardComponent,
    FarmDashboardComponent,
    AddCropsComponent,
    EditProfileComponent,
    CropsComponent,
    GetCropsComponent,
    GetCartComponent,
    EditFarmProfileComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    ShowFarmerComponent,
    ShowDealersComponent,
    GetOrdersComponent,
    PaymentHomeComponent,
    HomeComponent,
    ProductComponent,
    ContactComponent,
    OrderComponent,
    GetFarmOrdersComponent,
    SoldCropsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
