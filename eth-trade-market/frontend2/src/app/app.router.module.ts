import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {MainComponent} from './main/main.component';

const AppRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' }, // 첫 화면을 main 페이지로 설정
  { path: 'signup', component: SignupComponent, }, // url 경로가 /singup 일때 LoginComponent를 보여준다.
  { path: 'main', component: MainComponent, }, // url 경로가 /main 일때 MainComponent를 보여준다.
  { path: '**', redirectTo: '/main', pathMatch: 'full' }, // 잘못된 URL을 사용했을때 main페이지로 돌려보냄.
];

export const AppRouterModule = RouterModule.forRoot(AppRoutes, {useHash: true});