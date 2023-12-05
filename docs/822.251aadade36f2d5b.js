"use strict";(self.webpackChunkangular_15_example=self.webpackChunkangular_15_example||[]).push([[822],{3822:(_e,v,m)=>{m.r(v),m.d(v,{AccountModule:()=>ge});var n=m(433),u=m(6895),s=m(7784),e=m(8256),d=m(6820);let q=(()=>{class t{constructor(i,r){this.router=i,this.accountService=r,this.accountService.accountValue&&this.router.navigate(["/"])}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(s.F0),e.Y36(d.BR))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:5,vars:0,consts:[[1,"container"],[1,"row"],[1,"col-lg-8","offset-lg-2","mt-5"],[1,"card","m-3"]],template:function(i,r){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"router-outlet"),e.qZA()()()())},dependencies:[s.lC],encapsulation:2}),t})();var p=m(590);function C(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Email is required"),e.qZA())}function w(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Email is invalid"),e.qZA())}function A(t,o){if(1&t&&(e.TgZ(0,"div",15),e.YNc(1,C,2,0,"div",16),e.YNc(2,w,2,0,"div",16),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.f.email.errors.required),e.xp6(1),e.Q6J("ngIf",i.f.email.errors.email)}}function x(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Password is required"),e.qZA())}function I(t,o){if(1&t&&(e.TgZ(0,"div",15),e.YNc(1,x,2,0,"div",16),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.f.password.errors.required)}}function U(t,o){1&t&&e._UZ(0,"span",17)}const Z=function(t){return{"is-invalid":t}};let h=(()=>{class t{constructor(i,r,a,f,_){this.formBuilder=i,this.route=r,this.router=a,this.accountService=f,this.alertService=_,this.submitting=!1,this.submitted=!1}ngOnInit(){this.form=this.formBuilder.group({email:["",[n.kI.required,n.kI.email]],password:["",n.kI.required]})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.submitting=!0,this.accountService.login(this.f.email.value,this.f.password.value).pipe((0,p.P)()).subscribe({next:()=>{this.router.navigateByUrl(this.route.snapshot.queryParams.returnUrl||"/"),this.router.navigate([""],{relativeTo:this.route})},error:i=>{this.alertService.error(i),this.submitting=!1}}))}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(n.qu),e.Y36(s.gz),e.Y36(s.F0),e.Y36(d.BR),e.Y36(d.c9))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:24,vars:11,consts:[[1,"card-header"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"mb-3"],[1,"form-label"],["type","text","formControlName","email",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"row"],[1,"mb-3","col"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["routerLink","../register",1,"btn","btn-link"],[1,"mb-3","col","text-end"],["routerLink","../forgot-password",1,"btn","btn-link","pe-0"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(i,r){1&i&&(e.TgZ(0,"h3",0),e._uU(1,"Login"),e.qZA(),e.TgZ(2,"div",1)(3,"form",2),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e.TgZ(4,"div",3)(5,"label",4),e._uU(6,"Email"),e.qZA(),e._UZ(7,"input",5),e.YNc(8,A,3,2,"div",6),e.qZA(),e.TgZ(9,"div",3)(10,"label",4),e._uU(11,"Password"),e.qZA(),e._UZ(12,"input",7),e.YNc(13,I,2,1,"div",6),e.qZA(),e.TgZ(14,"div",8)(15,"div",9)(16,"button",10),e.YNc(17,U,1,0,"span",11),e._uU(18," Login "),e.qZA(),e.TgZ(19,"a",12),e._uU(20,"Register"),e.qZA()(),e.TgZ(21,"div",13)(22,"a",14),e._uU(23,"Forgot Password?"),e.qZA()()()()()),2&i&&(e.xp6(3),e.Q6J("formGroup",r.form),e.xp6(4),e.Q6J("ngClass",e.VKq(7,Z,r.submitted&&r.f.email.errors)),e.xp6(1),e.Q6J("ngIf",r.submitted&&r.f.email.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(9,Z,r.submitted&&r.f.password.errors)),e.xp6(1),e.Q6J("ngIf",r.submitted&&r.f.password.errors),e.xp6(3),e.Q6J("disabled",r.submitting),e.xp6(1),e.Q6J("ngIf",r.submitting))},dependencies:[u.mk,u.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,s.rH],encapsulation:2}),t})();var b=m(9599);function J(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Title is required"),e.qZA())}function N(t,o){if(1&t&&(e.TgZ(0,"div",27),e.YNc(1,J,2,0,"div",28),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.f.title.errors.required)}}function P(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"First Name is required"),e.qZA())}function Y(t,o){if(1&t&&(e.TgZ(0,"div",27),e.YNc(1,P,2,0,"div",28),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.f.firstName.errors.required)}}function y(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Last Name is required"),e.qZA())}function S(t,o){if(1&t&&(e.TgZ(0,"div",27),e.YNc(1,y,2,0,"div",28),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.f.lastName.errors.required)}}function k(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Email is required"),e.qZA())}function Q(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Email must be a valid email address"),e.qZA())}function R(t,o){if(1&t&&(e.TgZ(0,"div",27),e.YNc(1,k,2,0,"div",28),e.YNc(2,Q,2,0,"div",28),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.f.email.errors.required),e.xp6(1),e.Q6J("ngIf",i.f.email.errors.email)}}function V(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Password is required"),e.qZA())}function F(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Password must be at least 6 characters"),e.qZA())}function L(t,o){if(1&t&&(e.TgZ(0,"div",27),e.YNc(1,V,2,0,"div",28),e.YNc(2,F,2,0,"div",28),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.f.password.errors.required),e.xp6(1),e.Q6J("ngIf",i.f.password.errors.minlength)}}function E(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Confirm Password is required"),e.qZA())}function B(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Passwords must match"),e.qZA())}function M(t,o){if(1&t&&(e.TgZ(0,"div",27),e.YNc(1,E,2,0,"div",28),e.YNc(2,B,2,0,"div",28),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.f.confirmPassword.errors.required),e.xp6(1),e.Q6J("ngIf",i.f.confirmPassword.errors.mustMatch)}}function K(t,o){1&t&&(e.TgZ(0,"div",27),e._uU(1,"Accept Ts & Cs is required"),e.qZA())}function O(t,o){1&t&&e._UZ(0,"span",29)}const l=function(t){return{"is-invalid":t}};let G=(()=>{class t{constructor(i,r,a,f,_){this.formBuilder=i,this.route=r,this.router=a,this.accountService=f,this.alertService=_,this.submitting=!1,this.submitted=!1}ngOnInit(){this.form=this.formBuilder.group({title:["",n.kI.required],firstName:["",n.kI.required],lastName:["",n.kI.required],email:["",[n.kI.required,n.kI.email]],password:["",[n.kI.required,n.kI.minLength(6)]],confirmPassword:["",n.kI.required],acceptTerms:[!1,n.kI.requiredTrue]},{validator:(0,b.Yf)("password","confirmPassword")})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.submitting=!0,this.accountService.register(this.form.value).pipe((0,p.P)()).subscribe({next:()=>{localStorage.setItem("register",JSON.stringify(this.form.value)),this.alertService.success("Registration successful, please check your email for verification instructions",{keepAfterRouteChange:!0}),this.router.navigate(["../login"],{relativeTo:this.route})},error:i=>{this.alertService.error(i),this.submitting=!1}}))}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(n.qu),e.Y36(s.gz),e.Y36(s.F0),e.Y36(d.BR),e.Y36(d.c9))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:56,vars:31,consts:[[1,"card-header"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"mb-3","col-2"],[1,"form-label"],["formControlName","title",1,"form-select",3,"ngClass"],["value",""],["value","Mr"],["value","Mrs"],["value","Miss"],["value","Ms"],["class","invalid-feedback",4,"ngIf"],[1,"mb-3","col-5"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],[1,"mb-3"],["type","text","formControlName","email",1,"form-control",3,"ngClass"],[1,"mb-3","col"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],["type","password","formControlName","confirmPassword",1,"form-control",3,"ngClass"],[1,"mb-3","form-check"],["type","checkbox","formControlName","acceptTerms","id","acceptTerms",1,"form-check-input",3,"ngClass"],["for","acceptTerms",1,"form-check-label"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["routerLink","../login","href","",1,"btn","btn-link"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(i,r){1&i&&(e.TgZ(0,"h3",0),e._uU(1,"Register"),e.qZA(),e.TgZ(2,"div",1)(3,"form",2),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e.TgZ(4,"div",3)(5,"div",4)(6,"label",5),e._uU(7,"Title"),e.qZA(),e.TgZ(8,"select",6),e._UZ(9,"option",7),e.TgZ(10,"option",8),e._uU(11,"Mr"),e.qZA(),e.TgZ(12,"option",9),e._uU(13,"Mrs"),e.qZA(),e.TgZ(14,"option",10),e._uU(15,"Miss"),e.qZA(),e.TgZ(16,"option",11),e._uU(17,"Ms"),e.qZA()(),e.YNc(18,N,2,1,"div",12),e.qZA(),e.TgZ(19,"div",13)(20,"label",5),e._uU(21,"First Name"),e.qZA(),e._UZ(22,"input",14),e.YNc(23,Y,2,1,"div",12),e.qZA(),e.TgZ(24,"div",13)(25,"label",5),e._uU(26,"Last Name"),e.qZA(),e._UZ(27,"input",15),e.YNc(28,S,2,1,"div",12),e.qZA()(),e.TgZ(29,"div",16)(30,"label",5),e._uU(31,"Email"),e.qZA(),e._UZ(32,"input",17),e.YNc(33,R,3,2,"div",12),e.qZA(),e.TgZ(34,"div",3)(35,"div",18)(36,"label",5),e._uU(37,"Password"),e.qZA(),e._UZ(38,"input",19),e.YNc(39,L,3,2,"div",12),e.qZA(),e.TgZ(40,"div",18)(41,"label",5),e._uU(42,"Confirm Password"),e.qZA(),e._UZ(43,"input",20),e.YNc(44,M,3,2,"div",12),e.qZA()(),e.TgZ(45,"div",21),e._UZ(46,"input",22),e.TgZ(47,"label",23),e._uU(48,"Accept Terms & Conditions"),e.qZA(),e.YNc(49,K,2,0,"div",12),e.qZA(),e.TgZ(50,"div",16)(51,"button",24),e.YNc(52,O,1,0,"span",25),e._uU(53," Register "),e.qZA(),e.TgZ(54,"a",26),e._uU(55,"Cancel"),e.qZA()()()()),2&i&&(e.xp6(3),e.Q6J("formGroup",r.form),e.xp6(5),e.Q6J("ngClass",e.VKq(17,l,r.submitted&&r.f.title.errors)),e.xp6(10),e.Q6J("ngIf",r.submitted&&r.f.title.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(19,l,r.submitted&&r.f.firstName.errors)),e.xp6(1),e.Q6J("ngIf",r.submitted&&r.f.firstName.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(21,l,r.submitted&&r.f.lastName.errors)),e.xp6(1),e.Q6J("ngIf",r.submitted&&r.f.lastName.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(23,l,r.submitted&&r.f.email.errors)),e.xp6(1),e.Q6J("ngIf",r.submitted&&r.f.email.errors),e.xp6(5),e.Q6J("ngClass",e.VKq(25,l,r.submitted&&r.f.password.errors)),e.xp6(1),e.Q6J("ngIf",r.submitted&&r.f.password.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(27,l,r.submitted&&r.f.confirmPassword.errors)),e.xp6(1),e.Q6J("ngIf",r.submitted&&r.f.confirmPassword.errors),e.xp6(2),e.Q6J("ngClass",e.VKq(29,l,r.submitted&&r.f.acceptTerms.errors)),e.xp6(3),e.Q6J("ngIf",r.submitted&&r.f.acceptTerms.errors),e.xp6(2),e.Q6J("disabled",r.submitting),e.xp6(1),e.Q6J("ngIf",r.submitting))},dependencies:[u.mk,u.O5,n._Y,n.YN,n.Kr,n.Fj,n.Wl,n.EJ,n.JJ,n.JL,n.sg,n.u,s.rH],encapsulation:2}),t})();function z(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1," Verifying... "),e.qZA())}function X(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1," Verification failed, you can also verify your account using the "),e.TgZ(2,"a",3),e._uU(3,"forgot password"),e.qZA(),e._uU(4," page. "),e.qZA())}var g=(()=>{return(t=g||(g={}))[t.Verifying=0]="Verifying",t[t.Failed=1]="Failed",g;var t})();let j=(()=>{class t{constructor(i,r,a,f){this.route=i,this.router=r,this.accountService=a,this.alertService=f,this.EmailStatus=g,this.emailStatus=g.Verifying}ngOnInit(){const i=this.route.snapshot.queryParams.token;this.router.navigate([],{relativeTo:this.route,replaceUrl:!0}),this.accountService.verifyEmail(i).pipe((0,p.P)()).subscribe({next:()=>{this.alertService.success("Verification successful, you can now login",{keepAfterRouteChange:!0}),this.router.navigate(["../login"],{relativeTo:this.route})},error:()=>{this.emailStatus=g.Failed}})}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(s.gz),e.Y36(s.F0),e.Y36(d.BR),e.Y36(d.c9))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:5,vars:2,consts:[[1,"card-header"],[1,"card-body"],[4,"ngIf"],["routerLink","forgot-password"]],template:function(i,r){1&i&&(e.TgZ(0,"h3",0),e._uU(1,"Verify Email"),e.qZA(),e.TgZ(2,"div",1),e.YNc(3,z,2,0,"div",2),e.YNc(4,X,5,0,"div",2),e.qZA()),2&i&&(e.xp6(3),e.Q6J("ngIf",r.emailStatus==r.EmailStatus.Verifying),e.xp6(1),e.Q6J("ngIf",r.emailStatus==r.EmailStatus.Failed))},dependencies:[u.O5,s.rH],encapsulation:2}),t})();var H=m(8746);function W(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Email is required"),e.qZA())}function D(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Email is invalid"),e.qZA())}function $(t,o){if(1&t&&(e.TgZ(0,"div",10),e.YNc(1,W,2,0,"div",11),e.YNc(2,D,2,0,"div",11),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.f.email.errors.required),e.xp6(1),e.Q6J("ngIf",i.f.email.errors.email)}}function ee(t,o){1&t&&e._UZ(0,"span",12)}const te=function(t){return{"is-invalid":t}};let ie=(()=>{class t{constructor(i,r,a){this.formBuilder=i,this.accountService=r,this.alertService=a,this.loading=!1,this.submitted=!1}ngOnInit(){this.form=this.formBuilder.group({email:["",[n.kI.required,n.kI.email]]})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.loading=!0,this.accountService.forgotPassword(this.f.email.value).pipe((0,p.P)()).pipe((0,H.x)(()=>this.loading=!1)).subscribe({next:()=>this.alertService.success("Please check your email for password reset instructions"),error:i=>this.alertService.error(i)}))}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(n.qu),e.Y36(d.BR),e.Y36(d.c9))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:15,vars:7,consts:[[1,"card-header"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"mb-3"],[1,"form-label"],["type","text","formControlName","email",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["routerLink","../login",1,"btn","btn-link"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(i,r){1&i&&(e.TgZ(0,"h3",0),e._uU(1,"Forgot Password"),e.qZA(),e.TgZ(2,"div",1)(3,"form",2),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e.TgZ(4,"div",3)(5,"label",4),e._uU(6,"Email"),e.qZA(),e._UZ(7,"input",5),e.YNc(8,$,3,2,"div",6),e.qZA(),e.TgZ(9,"div",3)(10,"button",7),e.YNc(11,ee,1,0,"span",8),e._uU(12," Submit "),e.qZA(),e.TgZ(13,"a",9),e._uU(14,"Cancel"),e.qZA()()()()),2&i&&(e.xp6(3),e.Q6J("formGroup",r.form),e.xp6(4),e.Q6J("ngClass",e.VKq(5,te,r.submitted&&r.f.email.errors)),e.xp6(1),e.Q6J("ngIf",r.submitted&&r.f.email.errors),e.xp6(2),e.Q6J("disabled",r.loading),e.xp6(1),e.Q6J("ngIf",r.loading))},dependencies:[u.mk,u.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,s.rH],encapsulation:2}),t})();function re(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1," Validating token... "),e.qZA())}function oe(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1," Token validation failed, if the token has expired you can get a new one at the "),e.TgZ(2,"a",4),e._uU(3,"forgot password"),e.qZA(),e._uU(4," page. "),e.qZA())}function ne(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Password is required"),e.qZA())}function se(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Password must be at least 6 characters"),e.qZA())}function ae(t,o){if(1&t&&(e.TgZ(0,"div",14),e.YNc(1,ne,2,0,"div",2),e.YNc(2,se,2,0,"div",2),e.qZA()),2&t){const i=e.oxw(2);e.xp6(1),e.Q6J("ngIf",i.f.password.errors.required),e.xp6(1),e.Q6J("ngIf",i.f.password.errors.minlength)}}function de(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Confirm Password is required"),e.qZA())}function me(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"Passwords must match"),e.qZA())}function ue(t,o){if(1&t&&(e.TgZ(0,"div",14),e.YNc(1,de,2,0,"div",2),e.YNc(2,me,2,0,"div",2),e.qZA()),2&t){const i=e.oxw(2);e.xp6(1),e.Q6J("ngIf",i.f.confirmPassword.errors.required),e.xp6(1),e.Q6J("ngIf",i.f.confirmPassword.errors.mustMatch)}}function le(t,o){1&t&&e._UZ(0,"span",15)}const T=function(t){return{"is-invalid":t}};function ce(t,o){if(1&t){const i=e.EpF();e.TgZ(0,"form",5),e.NdJ("ngSubmit",function(){e.CHM(i);const a=e.oxw();return e.KtG(a.onSubmit())}),e.TgZ(1,"div",6)(2,"label",7),e._uU(3,"Password"),e.qZA(),e._UZ(4,"input",8),e.YNc(5,ae,3,2,"div",9),e.qZA(),e.TgZ(6,"div",6)(7,"label",7),e._uU(8,"Confirm Password"),e.qZA(),e._UZ(9,"input",10),e.YNc(10,ue,3,2,"div",9),e.qZA(),e.TgZ(11,"div",6)(12,"button",11),e.YNc(13,le,1,0,"span",12),e._uU(14," Reset Password "),e.qZA(),e.TgZ(15,"a",13),e._uU(16,"Cancel"),e.qZA()()()}if(2&t){const i=e.oxw();e.Q6J("formGroup",i.form),e.xp6(4),e.Q6J("ngClass",e.VKq(7,T,i.submitted&&i.f.password.errors)),e.xp6(1),e.Q6J("ngIf",i.submitted&&i.f.password.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(9,T,i.submitted&&i.f.confirmPassword.errors)),e.xp6(1),e.Q6J("ngIf",i.submitted&&i.f.confirmPassword.errors),e.xp6(2),e.Q6J("disabled",i.loading),e.xp6(1),e.Q6J("ngIf",i.loading)}}var c=(()=>{return(t=c||(c={}))[t.Validating=0]="Validating",t[t.Valid=1]="Valid",t[t.Invalid=2]="Invalid",c;var t})();const fe=[{path:"",component:q,children:[{path:"login",component:h},{path:"register",component:G},{path:"verify-email",component:j},{path:"forgot-password",component:ie},{path:"reset-password",component:(()=>{class t{constructor(i,r,a,f,_){this.formBuilder=i,this.route=r,this.router=a,this.accountService=f,this.alertService=_,this.TokenStatus=c,this.tokenStatus=c.Validating,this.loading=!1,this.submitted=!1}ngOnInit(){this.form=this.formBuilder.group({password:["",[n.kI.required,n.kI.minLength(6)]],confirmPassword:["",n.kI.required]},{validator:(0,b.Yf)("password","confirmPassword")});const i=this.route.snapshot.queryParams.token;this.router.navigate([],{relativeTo:this.route,replaceUrl:!0}),this.accountService.validateResetToken(i).pipe((0,p.P)()).subscribe({next:()=>{this.token=i,this.tokenStatus=c.Valid},error:()=>{this.tokenStatus=c.Invalid}})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.loading=!0,this.accountService.resetPassword(this.token,this.f.password.value,this.f.confirmPassword.value).pipe((0,p.P)()).subscribe({next:()=>{this.alertService.success("Password reset successful, you can now login",{keepAfterRouteChange:!0}),this.router.navigate(["../login"],{relativeTo:this.route})},error:i=>{this.alertService.error(i),this.loading=!1}}))}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(n.qu),e.Y36(s.gz),e.Y36(s.F0),e.Y36(d.BR),e.Y36(d.c9))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:6,vars:3,consts:[[1,"card-header"],[1,"card-body"],[4,"ngIf"],[3,"formGroup","ngSubmit",4,"ngIf"],["routerLink","../forgot-password"],[3,"formGroup","ngSubmit"],[1,"mb-3"],[1,"form-label"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","password","formControlName","confirmPassword",1,"form-control",3,"ngClass"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["routerLink","../login",1,"btn","btn-link"],[1,"invalid-feedback"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(i,r){1&i&&(e.TgZ(0,"h3",0),e._uU(1,"Reset Password"),e.qZA(),e.TgZ(2,"div",1),e.YNc(3,re,2,0,"div",2),e.YNc(4,oe,5,0,"div",2),e.YNc(5,ce,17,11,"form",3),e.qZA()),2&i&&(e.xp6(3),e.Q6J("ngIf",r.tokenStatus==r.TokenStatus.Validating),e.xp6(1),e.Q6J("ngIf",r.tokenStatus==r.TokenStatus.Invalid),e.xp6(1),e.Q6J("ngIf",r.tokenStatus==r.TokenStatus.Valid))},dependencies:[u.mk,u.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,s.rH],encapsulation:2}),t})()},{path:"**",component:h}]}];let pe=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.Bz.forChild(fe),s.Bz]}),t})(),ge=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,n.UX,pe]}),t})()}}]);