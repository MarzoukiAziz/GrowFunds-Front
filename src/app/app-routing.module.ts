import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintDetailsAdminComponent } from './components/Admin/complaint-details-admin/complaint-details-admin.component';
import { ComplaintsAdminComponent } from './components/Admin/complaints-admin/complaints-admin.component';
import { DashboardAdminComponent } from './components/Admin/dashboard-admin/dashboard-admin.component';
import { LoginAdminComponent } from './components/Admin/login-admin/login-admin.component';
import { NotfoundAdminComponent } from './components/Admin/notfound-admin/notfound-admin.component';
import { TemplateAdminComponent } from './components/Admin/template-admin/template-admin.component';
import { ComplaintAddClientComponent } from './components/Client/complaint-add-client/complaint-add-client.component';
import { ComplaintDetailsClientComponent } from './components/Client/complaint-details-client/complaint-details-client.component';
import { ComplaintsClientComponent } from './components/Client/complaints-client/complaints-client.component';
import { DashboardClientComponent } from './components/Client/dashboard-client/dashboard-client.component';
import { ForgetPasswordClientComponent } from './components/Client/forget-password-client/forget-password-client.component';
import { LoginClientComponent } from './components/Client/login-client/login-client.component';
import { SignupClientComponent } from './components/Client/signup-client/signup-client.component';
import { TemplateClientComponent } from './components/Client/template-client/template-client.component';
import { AboutVisitorComponent } from './components/Visitor/about-visitor/about-visitor.component';
import { AccountCurrentVisitorComponent } from './components/Visitor/account-current-visitor/account-current-visitor.component';
import { AccountSavingsVisitorComponent } from './components/Visitor/account-savings-visitor/account-savings-visitor.component';
import { AccountsVisitorComponent } from './components/Visitor/accounts-visitor/accounts-visitor.component';
import { BodyVisitorComponent } from './components/Visitor/body-visitor/body-visitor.component';
import { CardsBusinessVisitorComponent } from './components/Visitor/cards-business-visitor/cards-business-visitor.component';
import { CardsCashbackVisitorComponent } from './components/Visitor/cards-cashback-visitor/cards-cashback-visitor.component';
import { CardsTravelHotelVisitorComponent } from './components/Visitor/cards-travel-hotel-visitor/cards-travel-hotel-visitor.component';
import { CardsVisitorComponent } from './components/Visitor/cards-visitor/cards-visitor.component';
import { CareersVisitorComponent } from './components/Visitor/careers-visitor/careers-visitor.component';
import { ContactVisitorComponent } from './components/Visitor/contact-visitor/contact-visitor.component';
import { FaqVisitorComponent } from './components/Visitor/faq-visitor/faq-visitor.component';
import { LoanEducationVisitorComponent } from './components/Visitor/loan-education-visitor/loan-education-visitor.component';
import { LoanHomeVisitorComponent } from './components/Visitor/loan-home-visitor/loan-home-visitor.component';
import { LoanPersonalVisitorComponent } from './components/Visitor/loan-personal-visitor/loan-personal-visitor.component';
import { LoanProductVisitorComponent } from './components/Visitor/loan-product-visitor/loan-product-visitor.component';
import { LoanVehiculeVisitorComponent } from './components/Visitor/loan-vehicule-visitor/loan-vehicule-visitor.component';
import { NotfoundComponent } from './components/Visitor/notfound/notfound.component';
import { TeamVisitorComponent } from './components/Visitor/team-visitor/team-visitor.component';
import { TemplateVisitorComponent } from './components/Visitor/template-visitor/template-visitor.component';
import { TestimonialsVisitorComponent } from './components/Visitor/testimonials-visitor/testimonials-visitor.component';
import { CreditAdminComponent } from './components/Admin/credit-admin/credit-admin.component';
import { CreditDetailsAdminComponent } from './components/Admin/credit-details-admin/credit-details-admin.component';

const routes: Routes = [
  {
    path: 'admin',
    component: TemplateAdminComponent,
    children:[
      {
        path:"dashboard",
        component:DashboardAdminComponent
      },
      {
        path:"credits",
        component:CreditAdminComponent
      },
      {
        path:"creditDetails/:id",
        component:CreditDetailsAdminComponent
      },
      {
        path:"complaints",
        component:ComplaintsAdminComponent
      },
      {
        path:"complaints/c/:id",
        component:ComplaintDetailsAdminComponent
      },
  
  
      {
        path:"**",
        component:NotfoundAdminComponent
      },
    ]
  },
  {
    path: 'client',
    component: TemplateClientComponent,
    children:[
      {
        path:"dashboard",
        component:DashboardClientComponent
      },
      {
        path:"complaints",
        component:ComplaintsClientComponent
      },
      {
        path:"complaints/add",
        component:ComplaintAddClientComponent
      },
      {
        path:"complaints/c/:id",
        component:ComplaintDetailsClientComponent
      },
      {
        path:"**",
        component:NotfoundAdminComponent
      },
    ]
  },
  {
    path: 'login',
    component: LoginClientComponent
  },
  {
    path: 'signup',
    component: SignupClientComponent
  },
  {
    path: 'admin-login',
    component: LoginAdminComponent
  },
  {
    path: 'forget-password',
    component: ForgetPasswordClientComponent
  },

  {
    path: '',
    component: TemplateVisitorComponent,
    children: [
      {
        path: 'about',
        component: AboutVisitorComponent
      },
      {
        path: 'account-current',
        component: AccountCurrentVisitorComponent
      },
      {
        path: 'account-savings',
        component: AccountSavingsVisitorComponent
      },
      {
        path: 'accounts',
        component: AccountsVisitorComponent
      },
      {
        path: 'cards-business',
        component: CardsBusinessVisitorComponent
      },
      {
        path: 'cards-cashback',
        component: CardsCashbackVisitorComponent
      },
      {
        path: 'cards-travel-hotel',
        component: CardsTravelHotelVisitorComponent
      },
      {
        path: 'cards',
        component: CardsVisitorComponent
      },
      {
        path: 'testimonials',
        component: TestimonialsVisitorComponent
      },
      {
        path: 'team',
        component: TeamVisitorComponent
      },
      {
        path: 'loan-home',
        component: LoanHomeVisitorComponent
      },
      {
        path: 'loan-education',
        component: LoanEducationVisitorComponent
      },
      {
        path: 'loan-product',
        component: LoanProductVisitorComponent
      },
      {
        path: 'loan-vehicule',
        component: LoanVehiculeVisitorComponent
      },
      {
        path: 'loan-personal',
        component: LoanPersonalVisitorComponent
      },
      {
        path: 'careers',
        component: CareersVisitorComponent
      },
      {
        path: 'faq',
        component: FaqVisitorComponent
      },
      {
        path: 'contact',
        component: ContactVisitorComponent
      },

      {
        path: '',
        component: BodyVisitorComponent
      },
      {
        path: '**',
        component: NotfoundComponent
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
