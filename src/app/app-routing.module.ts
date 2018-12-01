import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from "./welcome/welcome.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { PicksComponent} from "./picks-component/picks.component"

const routes: Routes = [
    { path: '', component: WelcomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'picks', component: PicksComponent},
    { path: 'signup', component: SignupComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}