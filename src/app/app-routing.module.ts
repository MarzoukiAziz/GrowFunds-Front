import { StatAdminComponent } from './components/Admin/stat-admin/stat-admin.component';
import { StatClientComponent } from './components/Client/stat-client/stat-client.component';
import { TransactionDetailsAdminComponent } from './components/Admin/transaction-details-admin/transaction-details-admin.component';

import { TransactionApproveComponent } from './components/Client/transaction-approve/transaction-approve.component';
import { TransactionAddClientComponent } from './components/Client/transaction-add-client/transaction-add-client.component';
import { TransactionClientComponent } from './components/Client/transaction-client/transaction-client.component';
import { AccountAddAdminComponent } from './components/Admin/account-add-admin/account-add-admin.component';
import { AccountDetailsClientComponent } from './components/Client/account-details-client/account-details-client.component';
import { AccountDetailsAdminComponent } from './components/Admin/account-details-admin/account-details-admin.component';
import { AccountClientComponent } from './components/Client/account-client/account-client.component';
import { TransactionsAdminComponent } from './components/Admin/transactions-admin/transactions-admin.component';
import { AccountsAdminComponent } from './components/Admin/accounts-admin/accounts-admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintDetailsAdminComponent } from './components/Admin/complaint-details-admin/complaint-details-admin.component';
import { ComplaintsAdminComponent } from './components/Admin/complaints-admin/complaints-admin.component';
import { DashboardAdminComponent } from './components/Admin/dashboard-admin/dashboard-admin.component';
import { LoginAdminComponent } from './components/Admin/login-admin/login-admin.component';
import { NotfoundAdminComponent } from './components/Admin/notfound-admin/notfound-admin.component';
import { NotificationAdminComponent } from './components/Admin/notification-admin/notification-admin.component';
import { NotificationPickUserComponent } from './components/Admin/notification-pick-user/notification-pick-user.component';
import { PacksAddAdminComponent } from './components/Admin/packs-add-admin/packs-add-admin.component';
import { PacksAdminComponent } from './components/Admin/packs-admin/packs-admin.component';
import { PacksDetailsAdminComponent } from './components/Admin/packs-details-admin/packs-details-admin.component';
import { PacksEditAdminComponent } from './components/Admin/packs-edit-admin/packs-edit-admin.component';
import { ProductAddAdminComponent } from './components/Admin/product-add-admin/product-add-admin.component';
import { ProductDetailsAdminComponent } from './components/Admin/product-details-admin/product-details-admin.component';
import { ProductEditAdminComponent } from './components/Admin/product-edit-admin/product-edit-admin.component';
import { ProductsAdminComponent } from './components/Admin/products-admin/products-admin.component';
import { ProjectDetailsAdminComponent } from './components/Admin/project-details-admin/project-details-admin.component';
import { ProjectsAdminComponent } from './components/Admin/projects-admin/projects-admin.component';
import { PublicNotificationAdminComponent } from './components/Admin/public-notification-admin/public-notification-admin.component';
import { TemplateAdminComponent } from './components/Admin/template-admin/template-admin.component';
import { ComplaintAddClientComponent } from './components/Client/complaint-add-client/complaint-add-client.component';
import { ComplaintDetailsClientComponent } from './components/Client/complaint-details-client/complaint-details-client.component';
import { ComplaintsClientComponent } from './components/Client/complaints-client/complaints-client.component';
import { DashboardClientComponent } from './components/Client/dashboard-client/dashboard-client.component';
import { ForgetPasswordClientComponent } from './components/Client/forget-password-client/forget-password-client.component';
import { InvestementDetailsClientComponent } from './components/Client/investement-details-client/investement-details-client.component';
import { InvestmenetsClientsComponent } from './components/Client/investmenets-clients/investmenets-clients.component';
import { LivechatComponent } from './components/Client/livechat/livechat.component';
import { LoginClientComponent } from './components/Client/login-client/login-client.component';
import { NotificationsClientComponent } from './components/Client/notifications-client/notifications-client.component';
import { PacksClientComponent } from './components/Client/packs-client/packs-client.component';
import { PacksDetailsClientComponent } from './components/Client/packs-details-client/packs-details-client.component';
import { ProductDetailsClientComponent } from './components/Client/product-details-client/product-details-client.component';
import { ProductsClientComponent } from './components/Client/products-client/products-client.component';
import { ProjectAddClientComponent } from './components/Client/project-add-client/project-add-client.component';
import { ProjectDetailsClientComponent } from './components/Client/project-details-client/project-details-client.component';
import { ProjectsClientComponent } from './components/Client/projects-client/projects-client.component';
import { PublicNotificationsClientComponent } from './components/Client/public-notifications-client/public-notifications-client.component';
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
import { PacksVisitorComponent } from './components/Visitor/packs-visitor/packs-visitor.component';
import { ProductsVisitorComponent } from './components/Visitor/products-visitor/products-visitor.component';
import { RetairementPlanVisitorComponent } from './components/Visitor/retairement-plan-visitor/retairement-plan-visitor.component';
import { TeamVisitorComponent } from './components/Visitor/team-visitor/team-visitor.component';
import { TemplateVisitorComponent } from './components/Visitor/template-visitor/template-visitor.component';
import { TestimonialsVisitorComponent } from './components/Visitor/testimonials-visitor/testimonials-visitor.component';
import { UserDetailsAdminComponent } from './components/Admin/user-details-admin/user-details-admin.component';
import { UpdateUserAdminComponent } from './components/Admin/update-user-admin/update-user-admin.component';
import { UsersClientsAdminComponent } from './components/Admin/users-clients-admin/users-clients-admin.component';
import { UsersAgentsAdminComponent } from './components/Admin/users-agents-admin/users-agents-admin.component';
import { UsersAdminsAdminComponent } from './components/Admin/users-admins-admin/users-admins-admin.component';
import { UserAdminComponent } from './components/Admin/user-admin/user-admin.component';
import { CurrencyConverterClientComponent } from './components/Client/currency-converter-client/currency-converter-client.component';

const routes: Routes = [
  {
    path: 'admin',
    component: TemplateAdminComponent,
    children:[
      {
        path:"",
        component:DashboardAdminComponent
      },
      {
        path:"dashboard",
        component:DashboardAdminComponent
      },
      {
        path:"projects",
        component:ProjectsAdminComponent
      },
      {
        path:"projects/p/:id",
        component:ProjectDetailsAdminComponent
      },
      {
        path:"products",
        component:ProductsAdminComponent
      },
      {
        path:"products/add",
        component:ProductAddAdminComponent
      },
      {
        path:"product/:id/edit",
        component:ProductEditAdminComponent
      },
      {
        path:"product/:id",
        component:ProductDetailsAdminComponent
      },
      {
        path:"packs",
        component:PacksAdminComponent
      },
      {
        path:"packs/add",
        component:PacksAddAdminComponent
      },
      {
        path:"packs/:id",
        component:PacksDetailsAdminComponent
      },


      {
        path:"packs/:id/edit",
        component:PacksEditAdminComponent
      },
      {
        path:"complaints",
        component:ComplaintsAdminComponent
      },
      {
        path:"users",
        component:UserAdminComponent
      },
      {
        path:"users/clients",
        component:UsersClientsAdminComponent
      },
      {
        path:"users/agents",
        component:UsersAgentsAdminComponent
      },
      {
        path:"users/admins",
        component:UsersAdminsAdminComponent
      },
      {
        path:"complaints/c/:id",
        component:ComplaintDetailsAdminComponent
      },

      {
        path:"public-notifications",
        component:PublicNotificationAdminComponent
      },
      {
        path:"notifications-pick-user",
        component:NotificationPickUserComponent
      },
      {
        path:"private-notification/:id",
        component:NotificationAdminComponent
      },
      {
        path:"accounts",
        component:AccountsAdminComponent
      },
      {
        path:"transactions",
        component:TransactionsAdminComponent
      },
      {
        path:"transactions/c/:id",
        component:TransactionDetailsAdminComponent
      },
      {
        path:"accounts/c/:id",
        component:AccountDetailsAdminComponent
      },
      {
        path:"accounts/add",
        component:AccountAddAdminComponent
      },
      {
        path:"month",
        component:StatAdminComponent
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
        path:"",
        component:DashboardClientComponent
      },
      {
        path:"livechat",
        component:LivechatComponent
      },
      {
        path:"dashboard",
        component:DashboardClientComponent
      },
      {
        path:"investments",
        component:InvestmenetsClientsComponent
      },
      {
        path:"investments/p/:id",
        component:InvestementDetailsClientComponent
      },
      {
        path:"projects",
        component:ProjectsClientComponent
      },
      {
        path:"projects/p/:id",
        component:ProjectDetailsClientComponent
      },
      {
        path:"projects/add",
        component:ProjectAddClientComponent
      },
      {
        path:"products",
        component:ProductsClientComponent
      },

      {
        path:"product/:id",
        component:ProductDetailsClientComponent
      },

      {
        path:"packs",
        component:PacksClientComponent
      },


      {
        path:"packs/:id",
        component:PacksDetailsClientComponent
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
        path:"public-notif",
        component:PublicNotificationsClientComponent
      },
      {
        path:"notifications",
        component:NotificationsClientComponent
      },
      {
        path:"currency-converter",
        component:CurrencyConverterClientComponent
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
        path:"account",
        component:AccountClientComponent
      },
      {
        path:"accounts/c/:id",
        component:AccountDetailsClientComponent
      },
      {
        path:"transaction",
        component:TransactionClientComponent
      },
      {
        path:"transactions/add",
        component:TransactionAddClientComponent
      },

      {
        path:"transactions/approve",
        component:TransactionApproveComponent
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
        path: 'products',
        component: ProductsVisitorComponent
      },
      {
        path: 'packs',
        component: PacksVisitorComponent
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
        path: 'retirement-plan',
        component: RetairementPlanVisitorComponent
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
