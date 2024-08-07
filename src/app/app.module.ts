import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateVisitorComponent } from './components/Visitor/template-visitor/template-visitor.component';
import { BodyVisitorComponent } from './components/Visitor/body-visitor/body-visitor.component';
import { FooterVisitorComponent } from './components/Visitor/footer-visitor/footer-visitor.component';
import { HeaderVisitorComponent } from './components/Visitor/header-visitor/header-visitor.component';
import { TestComponent } from './components/Visitor/test/test.component';
import { NotfoundComponent } from './components/Visitor/notfound/notfound.component';
import { AboutVisitorComponent } from './components/Visitor/about-visitor/about-visitor.component';
import { AccountCurrentVisitorComponent } from './components/Visitor/account-current-visitor/account-current-visitor.component';
import { AccountSavingsVisitorComponent } from './components/Visitor/account-savings-visitor/account-savings-visitor.component';
import { AccountsVisitorComponent } from './components/Visitor/accounts-visitor/accounts-visitor.component';
import { CardsVisitorComponent } from './components/Visitor/cards-visitor/cards-visitor.component';
import { CardsBusinessVisitorComponent } from './components/Visitor/cards-business-visitor/cards-business-visitor.component';
import { CardsCashbackVisitorComponent } from './components/Visitor/cards-cashback-visitor/cards-cashback-visitor.component';
import { CardsTravelHotelVisitorComponent } from './components/Visitor/cards-travel-hotel-visitor/cards-travel-hotel-visitor.component';
import { TestimonialsVisitorComponent } from './components/Visitor/testimonials-visitor/testimonials-visitor.component';
import { TeamVisitorComponent } from './components/Visitor/team-visitor/team-visitor.component';
import { LoanHomeVisitorComponent } from './components/Visitor/loan-home-visitor/loan-home-visitor.component';
import { LoanPersonalVisitorComponent } from './components/Visitor/loan-personal-visitor/loan-personal-visitor.component';
import { LoanVehiculeVisitorComponent } from './components/Visitor/loan-vehicule-visitor/loan-vehicule-visitor.component';
import { LoanEducationVisitorComponent } from './components/Visitor/loan-education-visitor/loan-education-visitor.component';
import { LoanProductVisitorComponent } from './components/Visitor/loan-product-visitor/loan-product-visitor.component';
import { CareersVisitorComponent } from './components/Visitor/careers-visitor/careers-visitor.component';
import { FaqVisitorComponent } from './components/Visitor/faq-visitor/faq-visitor.component';
import { ContactVisitorComponent } from './components/Visitor/contact-visitor/contact-visitor.component';
import { LoginClientComponent } from './components/Client/login-client/login-client.component';
import { SignupClientComponent } from './components/Client/signup-client/signup-client.component';
import { ForgetPasswordClientComponent } from './components/Client/forget-password-client/forget-password-client.component';
import { TemplateClientComponent } from './components/Client/template-client/template-client.component';
import { HeaderClientComponent } from './components/Client/header-client/header-client.component';
import { FooterClientComponent } from './components/Client/footer-client/footer-client.component';
import { DashboardClientComponent } from './components/Client/dashboard-client/dashboard-client.component';
import { SidebarClientComponent } from './components/Client/sidebar-client/sidebar-client.component';
import { TemplateAdminComponent } from './components/Admin/template-admin/template-admin.component';
import { HeaderAdminComponent } from './components/Admin/header-admin/header-admin.component';
import { SidebarAdminComponent } from './components/Admin/sidebar-admin/sidebar-admin.component';
import { DashboardAdminComponent } from './components/Admin/dashboard-admin/dashboard-admin.component';
import { LoginAdminComponent } from './components/Admin/login-admin/login-admin.component';
import { NotfoundAdminComponent } from './components/Admin/notfound-admin/notfound-admin.component';
import { ComplaintsAdminComponent } from './components/Admin/complaints-admin/complaints-admin.component';
import { ComplaintDetailsAdminComponent } from './components/Admin/complaint-details-admin/complaint-details-admin.component';
import { AccountDetailsAdminComponent } from './components/Admin/account-details-admin/account-details-admin.component';
import { FormsModule } from '@angular/forms';
import { ComplaintsClientComponent } from './components/Client/complaints-client/complaints-client.component';
import { ComplaintDetailsClientComponent } from './components/Client/complaint-details-client/complaint-details-client.component';
import { ComplaintAddClientComponent } from './components/Client/complaint-add-client/complaint-add-client.component';
import { AccountsAdminComponent } from './components/Admin/accounts-admin/accounts-admin.component';
import { TransactionsAdminComponent } from './components/Admin/transactions-admin/transactions-admin.component';
import { AccountClientComponent } from './components/Client/account-client/account-client.component';
import { AccountDetailsClientComponent } from './components/Client/account-details-client/account-details-client.component';
import { AccountAddAdminComponent } from './components/Admin/account-add-admin/account-add-admin.component';
import { TransactionClientComponent } from './components/Client/transaction-client/transaction-client.component';
import { TransactionAddClientComponent } from './components/Client/transaction-add-client/transaction-add-client.component';
import { TransactionApproveComponent } from './components/Client/transaction-approve/transaction-approve.component';
import { TransactionDetailsAdminComponent } from './components/Admin/transaction-details-admin/transaction-details-admin.component';
import { StatClientComponent } from './components/Client/stat-client/stat-client.component';
import { StatAdminComponent } from './components/Admin/stat-admin/stat-admin.component';
import { CreditAdminComponent } from './components/Admin/credit-admin/credit-admin.component';
import { CreditDetailsAdminComponent } from './components/Admin/credit-details-admin/credit-details-admin.component';
import { AnswerProposalAdminComponent } from './components/Admin/answer-proposal-admin/answer-proposal-admin.component';
import { PaymentHistoryAdminComponent } from './components/Admin/payment-history-admin/payment-history-admin.component';
import { CreditClientComponent } from './components/Client/credit-client/credit-client.component';
import { PaymentHistoryClientComponent } from './components/Client/payment-history-client/payment-history-client.component';
import { PublicNotificationAdminComponent } from './components/Admin/public-notification-admin/public-notification-admin.component';
import { PublicNotificationsClientComponent } from './components/Client/public-notifications-client/public-notifications-client.component';
import { RouterModule } from '@angular/router';
import { NotificationAdminComponent } from './components/Admin/notification-admin/notification-admin.component';
import { NotificationPickUserComponent } from './components/Admin/notification-pick-user/notification-pick-user.component';
import { NotificationsClientComponent } from './components/Client/notifications-client/notifications-client.component';
import { RetairementPlanVisitorComponent } from './components/Visitor/retairement-plan-visitor/retairement-plan-visitor.component';
import { ProjectsClientComponent } from './components/Client/projects-client/projects-client.component';
import { ProjectDetailsClientComponent } from './components/Client/project-details-client/project-details-client.component';
import { ProjectAddClientComponent } from './components/Client/project-add-client/project-add-client.component';
import { ProjectsAdminComponent } from './components/Admin/projects-admin/projects-admin.component';
import { ProjectDetailsAdminComponent } from './components/Admin/project-details-admin/project-details-admin.component';
import { InvestmenetsClientsComponent } from './components/Client/investmenets-clients/investmenets-clients.component';
import { InvestementDetailsClientComponent } from './components/Client/investement-details-client/investement-details-client.component';
import { ProductsAdminComponent } from './components/Admin/products-admin/products-admin.component';
import { ProductDetailsAdminComponent } from './components/Admin/product-details-admin/product-details-admin.component';
import { ProductAddAdminComponent } from './components/Admin/product-add-admin/product-add-admin.component';
import { ProductEditAdminComponent } from './components/Admin/product-edit-admin/product-edit-admin.component';
import { ProductsClientComponent } from './components/Client/products-client/products-client.component';
import { ProductDetailsClientComponent } from './components/Client/product-details-client/product-details-client.component';
import { ProductsVisitorComponent } from './components/Visitor/products-visitor/products-visitor.component';
import { PacksClientComponent } from './components/Client/packs-client/packs-client.component';
import { PacksDetailsClientComponent } from './components/Client/packs-details-client/packs-details-client.component';
import { PacksAdminComponent } from './components/Admin/packs-admin/packs-admin.component';
import { PacksDetailsAdminComponent } from './components/Admin/packs-details-admin/packs-details-admin.component';
import { PacksAddAdminComponent } from './components/Admin/packs-add-admin/packs-add-admin.component';
import { PacksEditAdminComponent } from './components/Admin/packs-edit-admin/packs-edit-admin.component';
import { LivechatComponent } from './components/Client/livechat/livechat.component';
import { PacksVisitorComponent } from './components/Visitor/packs-visitor/packs-visitor.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateVisitorComponent,
    BodyVisitorComponent,
    FooterVisitorComponent,
    HeaderVisitorComponent,
    TestComponent,
    NotfoundComponent,
    AboutVisitorComponent,
    AccountCurrentVisitorComponent,
    AccountSavingsVisitorComponent,
    AccountsVisitorComponent,
    CardsVisitorComponent,
    CardsBusinessVisitorComponent,
    CardsCashbackVisitorComponent,
    CardsTravelHotelVisitorComponent,
    TestimonialsVisitorComponent,
    TeamVisitorComponent,
    LoanHomeVisitorComponent,
    LoanPersonalVisitorComponent,
    LoanVehiculeVisitorComponent,
    LoanEducationVisitorComponent,
    LoanProductVisitorComponent,
    CareersVisitorComponent,
    FaqVisitorComponent,
    ContactVisitorComponent,
    LoginClientComponent,
    SignupClientComponent,
    ForgetPasswordClientComponent,
    TemplateClientComponent,
    HeaderClientComponent,
    FooterClientComponent,
    DashboardClientComponent,
    SidebarClientComponent,
    TemplateAdminComponent,
    HeaderAdminComponent,
    SidebarAdminComponent,
    DashboardAdminComponent,
    LoginAdminComponent,
    NotfoundAdminComponent,
    ComplaintsAdminComponent,
    ComplaintDetailsAdminComponent,
    ComplaintsClientComponent,
    ComplaintDetailsClientComponent,
    ComplaintAddClientComponent,
    TransactionsAdminComponent,
    AccountsAdminComponent,
    AccountClientComponent,
    AccountDetailsAdminComponent,
    AccountDetailsClientComponent,
    AccountAddAdminComponent,
    TransactionClientComponent,
    TransactionAddClientComponent,
    TransactionApproveComponent,
    TransactionDetailsAdminComponent,
    StatClientComponent,
    StatAdminComponent,


    ComplaintAddClientComponent,
    CreditAdminComponent,
    CreditDetailsAdminComponent,
    AnswerProposalAdminComponent,
    PaymentHistoryAdminComponent,
    CreditClientComponent,
    PaymentHistoryClientComponent,
    
    PublicNotificationAdminComponent,
    PublicNotificationsClientComponent,
    NotificationAdminComponent,
    NotificationPickUserComponent,
    NotificationsClientComponent,
    RetairementPlanVisitorComponent,
    ProjectsClientComponent,
    ProjectDetailsClientComponent,
    ProjectAddClientComponent,
    ProjectsAdminComponent,
    ProjectDetailsAdminComponent,
    InvestmenetsClientsComponent,
    InvestementDetailsClientComponent,
    ProductsAdminComponent,
    ProductDetailsAdminComponent,
    ProductAddAdminComponent,
    ProductEditAdminComponent,
    ProductsClientComponent,
    ProductDetailsClientComponent,
    ProductsVisitorComponent,
    PacksClientComponent,
    PacksDetailsClientComponent,
    PacksAdminComponent,
    PacksDetailsAdminComponent,
    PacksAddAdminComponent,
    PacksEditAdminComponent,
    LivechatComponent,
    PacksVisitorComponent
    ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    QRCodeModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
