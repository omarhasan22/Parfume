"use strict";(self.webpackChunkangular_15_example=self.webpackChunkangular_15_example||[]).push([[822],{3822:(_t,v,d)=>{d.r(v),d.d(v,{AccountModule:()=>ut});var i=d(433),m=d(6895),s=d(7784),t=d(8256),c=d(9707);let Z=(()=>{class n{constructor(e,o){this.router=e,this.accountService=o,this.accountService.accountValue&&this.router.navigate(["/"])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(s.F0),t.Y36(c.BR))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:5,vars:0,consts:[[1,"container"],[1,"row"],[1,"col-lg-8","offset-lg-2","mt-5"],[1,"card","m-3"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"router-outlet"),t.qZA()()()())},dependencies:[s.lC],encapsulation:2}),n})();var p=d(590);function M(n,r){1&n&&(t.TgZ(0,"div"),t._uU(1,"Email is required"),t.qZA())}function x(n,r){1&n&&(t.TgZ(0,"div"),t._uU(1,"Email is invalid"),t.qZA())}function w(n,r){if(1&n&&(t.TgZ(0,"div",15),t.YNc(1,M,2,0,"div",16),t.YNc(2,x,2,0,"div",16),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.email.errors.required),t.xp6(1),t.Q6J("ngIf",e.f.email.errors.email)}}function O(n,r){1&n&&(t.TgZ(0,"div"),t._uU(1,"Password is required"),t.qZA())}function T(n,r){if(1&n&&(t.TgZ(0,"div",15),t.YNc(1,O,2,0,"div",16),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.password.errors.required)}}function q(n,r){1&n&&t._UZ(0,"span",17)}const C=function(n){return{"is-invalid":n}};let b=(()=>{class n{constructor(e,o,a,g,_){this.formBuilder=e,this.route=o,this.router=a,this.accountService=g,this.alertService=_,this.submitting=!1,this.submitted=!1}ngOnInit(){this.form=this.formBuilder.group({email:["",[i.kI.required,i.kI.email]],password:["",i.kI.required]})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.submitting=!0,this.accountService.login(this.f.email.value,this.f.password.value).pipe((0,p.P)()).subscribe({next:()=>{this.submitting=!1,this.router.navigateByUrl(this.route.snapshot.queryParams.returnUrl||"/")},error:e=>{this.alertService.error(e),this.submitting=!1}}))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.qu),t.Y36(s.gz),t.Y36(s.F0),t.Y36(c.BR),t.Y36(c.c9))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:24,vars:11,consts:[[1,"card-header"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"mb-3"],[1,"form-label"],["type","text","formControlName","email",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"row"],[1,"mb-3","col"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["routerLink","../register",1,"btn","btn-link"],[1,"mb-3","col","text-end"],["routerLink","../forgot-password",1,"btn","btn-link","pe-0"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(e,o){1&e&&(t.TgZ(0,"h3",0),t._uU(1,"Login"),t.qZA(),t.TgZ(2,"div",1)(3,"form",2),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(4,"div",3)(5,"label",4),t._uU(6,"Email"),t.qZA(),t._UZ(7,"input",5),t.YNc(8,w,3,2,"div",6),t.qZA(),t.TgZ(9,"div",3)(10,"label",4),t._uU(11,"Password"),t.qZA(),t._UZ(12,"input",7),t.YNc(13,T,2,1,"div",6),t.qZA(),t.TgZ(14,"div",8)(15,"div",9)(16,"button",10),t.YNc(17,q,1,0,"span",11),t._uU(18," Login "),t.qZA(),t.TgZ(19,"a",12),t._uU(20,"Register"),t.qZA()(),t.TgZ(21,"div",13)(22,"a",14),t._uU(23,"Forgot Password?"),t.qZA()()()()()),2&e&&(t.xp6(3),t.Q6J("formGroup",o.form),t.xp6(4),t.Q6J("ngClass",t.VKq(7,C,o.submitted&&o.f.email.errors)),t.xp6(1),t.Q6J("ngIf",o.submitted&&o.f.email.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(9,C,o.submitted&&o.f.password.errors)),t.xp6(1),t.Q6J("ngIf",o.submitted&&o.f.password.errors),t.xp6(3),t.Q6J("disabled",o.submitting),t.xp6(1),t.Q6J("ngIf",o.submitting))},dependencies:[m.mk,m.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,s.rH],styles:['body[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;background:#f7edd5}.container[_ngcontent-%COMP%]{max-width:900px}a[_ngcontent-%COMP%]{display:inline-block;text-decoration:none}input[_ngcontent-%COMP%]{outline:none!important}h1[_ngcontent-%COMP%]{text-align:center;text-transform:uppercase;margin-bottom:40px;font-weight:700}section#formHolder[_ngcontent-%COMP%]{padding:50px 0}.brand[_ngcontent-%COMP%]{padding:20px;background:url(https://goo.gl/A0ynht);background-size:cover;background-position:center center;color:#fff;min-height:540px;position:relative;box-shadow:3px 3px 10px #0000004d;transition:all .6s cubic-bezier(1,-.375,.285,.995);z-index:9999}.brand.active[_ngcontent-%COMP%]{width:100%}.brand[_ngcontent-%COMP%]:before{content:"";display:block;width:100%;height:100%;position:absolute;top:0;left:0;background:rgba(0,0,0,.85);z-index:-1}.brand[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%]{color:#f95959;font-size:20px;font-weight:700;text-decoration:none;line-height:1em}.brand[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:30px;color:#fff;transform:translate(-5px);display:inline-block}.brand[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;transition:all .6s}.brand[_ngcontent-%COMP%]   .heading.active[_ngcontent-%COMP%]{top:100px;left:100px;transform:translate(0)}.brand[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:70px;font-weight:700;text-transform:uppercase;margin-bottom:0}.brand[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;font-weight:300;text-transform:uppercase;letter-spacing:2px;white-space:4px;font-family:Raleway,sans-serif}.brand[_ngcontent-%COMP%]   .success-msg[_ngcontent-%COMP%]{width:100%;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);margin-top:60px}.brand[_ngcontent-%COMP%]   .success-msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:25px;font-weight:400;font-family:Raleway,sans-serif}.brand[_ngcontent-%COMP%]   .success-msg[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:12px;text-transform:uppercase;padding:8px 30px;background:#f95959;text-decoration:none;color:#fff;border-radius:30px}.brand[_ngcontent-%COMP%]   .success-msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .brand[_ngcontent-%COMP%]   .success-msg[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{transition:all .9s;transform:translateY(20px);opacity:0}.brand[_ngcontent-%COMP%]   .success-msg[_ngcontent-%COMP%]   p.active[_ngcontent-%COMP%], .brand[_ngcontent-%COMP%]   .success-msg[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{transform:translateY(0);opacity:1}.form[_ngcontent-%COMP%]{position:relative}.form[_ngcontent-%COMP%]   .form-peice[_ngcontent-%COMP%]{background:#fff;min-height:480px;margin-top:30px;box-shadow:3px 3px 10px #0003;color:#bbb;padding:30px 0 60px;transition:all .9s cubic-bezier(1,-.375,.285,.995);position:absolute;top:0;left:-30%;width:130%;overflow:hidden}.form[_ngcontent-%COMP%]   .form-peice.switched[_ngcontent-%COMP%]{transform:translate(-100%);width:100%;left:0}.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{padding:0 40px;margin:0;width:70%;position:absolute;top:50%;left:60%;transform:translate(-50%,-50%)}.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:5px;position:relative}.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group.hasError[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-color:#f95959!important}.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group.hasError[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#f95959!important}.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:12px;font-weight:400;text-transform:uppercase;font-family:Montserrat,sans-serif;transform:translateY(40px);transition:all .4s;cursor:text;z-index:-1}.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label.active[_ngcontent-%COMP%]{transform:translateY(10px);font-size:10px}.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label.fontSwitch[_ngcontent-%COMP%]{font-family:Raleway,sans-serif!important;font-weight:600}.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=submit]){background:none;outline:none;border:none;display:block;padding:10px 0;width:100%;border-bottom:1px solid #eee;color:#444;font-size:15px;font-family:Montserrat,sans-serif;z-index:1}.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=submit]).hasError{border-color:#f95959}.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   span.error[_ngcontent-%COMP%]{color:#f95959;font-family:Montserrat,sans-serif;font-size:12px;position:absolute;bottom:-20px;right:0;display:none}.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]{color:#f95959}.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .CTA[_ngcontent-%COMP%]{margin-top:30px}.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .CTA[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:12px;text-transform:uppercase;padding:5px 30px;background:#f95959;color:#fff;border-radius:30px;margin-right:20px;border:none;font-family:Montserrat,sans-serif}.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .CTA[_ngcontent-%COMP%]   a.switch[_ngcontent-%COMP%]{font-size:13px;font-weight:400;font-family:Montserrat,sans-serif;color:#bbb;text-decoration:underline;transition:all .3s}.form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .CTA[_ngcontent-%COMP%]   a.switch[_ngcontent-%COMP%]:hover{color:#f95959}footer[_ngcontent-%COMP%]{text-align:center}footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#777}footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus{color:#b8b09f;transition:all .3s;text-decoration:none!important}footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus:hover{color:#f95959}@media (max-width: 768px){.container[_ngcontent-%COMP%]{overflow:hidden}section#formHolder[_ngcontent-%COMP%]{padding:0}section#formHolder[_ngcontent-%COMP%]   div.brand[_ngcontent-%COMP%]{min-height:200px!important}section#formHolder[_ngcontent-%COMP%]   div.brand.active[_ngcontent-%COMP%]{min-height:100vh!important}section#formHolder[_ngcontent-%COMP%]   div.brand[_ngcontent-%COMP%]   .heading.active[_ngcontent-%COMP%]{top:200px;left:50%;transform:translate(-50%,-50%)}section#formHolder[_ngcontent-%COMP%]   div.brand[_ngcontent-%COMP%]   .success-msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}section#formHolder[_ngcontent-%COMP%]   div.brand[_ngcontent-%COMP%]   .success-msg[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:5px 30px;font-size:10px}section#formHolder[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{width:80vw;min-height:500px;margin-left:10vw}section#formHolder[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-peice[_ngcontent-%COMP%]{margin:0;top:0;left:0;width:100%!important;transition:all .5s ease-in-out}section#formHolder[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-peice.switched[_ngcontent-%COMP%]{transform:translateY(-100%);width:100%;left:0}section#formHolder[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-peice[_ngcontent-%COMP%] > form[_ngcontent-%COMP%]{width:100%!important;padding:60px;left:50%}}@media (max-width: 480px){section#formHolder[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{width:100vw;margin-left:0}h2[_ngcontent-%COMP%]{font-size:50px!important}}']}),n})();var h=d(9599);function A(n,r){1&n&&(t.TgZ(0,"div"),t._uU(1,"Title is required"),t.qZA())}function y(n,r){if(1&n&&(t.TgZ(0,"div",27),t.YNc(1,A,2,0,"div",28),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.title.errors.required)}}function U(n,r){1&n&&(t.TgZ(0,"div"),t._uU(1,"First Name is required"),t.qZA())}function I(n,r){if(1&n&&(t.TgZ(0,"div",27),t.YNc(1,U,2,0,"div",28),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.firstName.errors.required)}}function J(n,r){1&n&&(t.TgZ(0,"div"),t._uU(1,"Last Name is required"),t.qZA())}function Y(n,r){if(1&n&&(t.TgZ(0,"div",27),t.YNc(1,J,2,0,"div",28),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.lastName.errors.required)}}function k(n,r){1&n&&(t.TgZ(0,"div"),t._uU(1,"Email is required"),t.qZA())}function N(n,r){1&n&&(t.TgZ(0,"div"),t._uU(1,"Email must be a valid email address"),t.qZA())}function S(n,r){if(1&n&&(t.TgZ(0,"div",27),t.YNc(1,k,2,0,"div",28),t.YNc(2,N,2,0,"div",28),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.email.errors.required),t.xp6(1),t.Q6J("ngIf",e.f.email.errors.email)}}function R(n,r){1&n&&(t.TgZ(0,"div"),t._uU(1,"Password is required"),t.qZA())}function Q(n,r){1&n&&(t.TgZ(0,"div"),t._uU(1,"Password must be at least 6 characters"),t.qZA())}function V(n,r){if(1&n&&(t.TgZ(0,"div",27),t.YNc(1,R,2,0,"div",28),t.YNc(2,Q,2,0,"div",28),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.password.errors.required),t.xp6(1),t.Q6J("ngIf",e.f.password.errors.minlength)}}function F(n,r){1&n&&(t.TgZ(0,"div"),t._uU(1,"Confirm Password is required"),t.qZA())}function L(n,r){1&n&&(t.TgZ(0,"div"),t._uU(1,"Passwords must match"),t.qZA())}function z(n,r){if(1&n&&(t.TgZ(0,"div",27),t.YNc(1,F,2,0,"div",28),t.YNc(2,L,2,0,"div",28),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.confirmPassword.errors.required),t.xp6(1),t.Q6J("ngIf",e.f.confirmPassword.errors.mustMatch)}}function E(n,r){1&n&&(t.TgZ(0,"div",27),t._uU(1,"Accept Ts & Cs is required"),t.qZA())}function B(n,r){1&n&&t._UZ(0,"span",29)}const f=function(n){return{"is-invalid":n}};let H=(()=>{class n{constructor(e,o,a,g,_){this.formBuilder=e,this.route=o,this.router=a,this.accountService=g,this.alertService=_,this.submitting=!1,this.submitted=!1}ngOnInit(){this.form=this.formBuilder.group({title:["",i.kI.required],firstName:["",i.kI.required],lastName:["",i.kI.required],email:["",[i.kI.required,i.kI.email]],password:["",[i.kI.required,i.kI.minLength(6)]],confirmPassword:["",i.kI.required],acceptTerms:[!1,i.kI.requiredTrue]},{validator:(0,h.Yf)("password","confirmPassword")})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.submitting=!0,this.accountService.register(this.form.value).pipe((0,p.P)()).subscribe({next:()=>{this.alertService.success("Registration successful, please check your email for verification instructions",{keepAfterRouteChange:!0}),this.router.navigate(["../login"],{relativeTo:this.route})},error:e=>{this.alertService.error(e),this.submitting=!1}}))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.qu),t.Y36(s.gz),t.Y36(s.F0),t.Y36(c.BR),t.Y36(c.c9))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:56,vars:31,consts:[[1,"card-header"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"mb-3","col-2"],[1,"form-label"],["formControlName","title",1,"form-select",3,"ngClass"],["value",""],["value","Mr"],["value","Mrs"],["value","Miss"],["value","Ms"],["class","invalid-feedback",4,"ngIf"],[1,"mb-3","col-5"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],[1,"mb-3"],["type","text","formControlName","email",1,"form-control",3,"ngClass"],[1,"mb-3","col"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],["type","password","formControlName","confirmPassword",1,"form-control",3,"ngClass"],[1,"mb-3","form-check"],["type","checkbox","formControlName","acceptTerms","id","acceptTerms",1,"form-check-input",3,"ngClass"],["for","acceptTerms",1,"form-check-label"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["routerLink","../login","href","",1,"btn","btn-link"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(e,o){1&e&&(t.TgZ(0,"h3",0),t._uU(1,"Register"),t.qZA(),t.TgZ(2,"div",1)(3,"form",2),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(4,"div",3)(5,"div",4)(6,"label",5),t._uU(7,"Title"),t.qZA(),t.TgZ(8,"select",6),t._UZ(9,"option",7),t.TgZ(10,"option",8),t._uU(11,"Mr"),t.qZA(),t.TgZ(12,"option",9),t._uU(13,"Mrs"),t.qZA(),t.TgZ(14,"option",10),t._uU(15,"Miss"),t.qZA(),t.TgZ(16,"option",11),t._uU(17,"Ms"),t.qZA()(),t.YNc(18,y,2,1,"div",12),t.qZA(),t.TgZ(19,"div",13)(20,"label",5),t._uU(21,"First Name"),t.qZA(),t._UZ(22,"input",14),t.YNc(23,I,2,1,"div",12),t.qZA(),t.TgZ(24,"div",13)(25,"label",5),t._uU(26,"Last Name"),t.qZA(),t._UZ(27,"input",15),t.YNc(28,Y,2,1,"div",12),t.qZA()(),t.TgZ(29,"div",16)(30,"label",5),t._uU(31,"Email"),t.qZA(),t._UZ(32,"input",17),t.YNc(33,S,3,2,"div",12),t.qZA(),t.TgZ(34,"div",3)(35,"div",18)(36,"label",5),t._uU(37,"Password"),t.qZA(),t._UZ(38,"input",19),t.YNc(39,V,3,2,"div",12),t.qZA(),t.TgZ(40,"div",18)(41,"label",5),t._uU(42,"Confirm Password"),t.qZA(),t._UZ(43,"input",20),t.YNc(44,z,3,2,"div",12),t.qZA()(),t.TgZ(45,"div",21),t._UZ(46,"input",22),t.TgZ(47,"label",23),t._uU(48,"Accept Terms & Conditions"),t.qZA(),t.YNc(49,E,2,0,"div",12),t.qZA(),t.TgZ(50,"div",16)(51,"button",24),t.YNc(52,B,1,0,"span",25),t._uU(53," Register "),t.qZA(),t.TgZ(54,"a",26),t._uU(55,"Cancel"),t.qZA()()()()),2&e&&(t.xp6(3),t.Q6J("formGroup",o.form),t.xp6(5),t.Q6J("ngClass",t.VKq(17,f,o.submitted&&o.f.title.errors)),t.xp6(10),t.Q6J("ngIf",o.submitted&&o.f.title.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(19,f,o.submitted&&o.f.firstName.errors)),t.xp6(1),t.Q6J("ngIf",o.submitted&&o.f.firstName.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(21,f,o.submitted&&o.f.lastName.errors)),t.xp6(1),t.Q6J("ngIf",o.submitted&&o.f.lastName.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(23,f,o.submitted&&o.f.email.errors)),t.xp6(1),t.Q6J("ngIf",o.submitted&&o.f.email.errors),t.xp6(5),t.Q6J("ngClass",t.VKq(25,f,o.submitted&&o.f.password.errors)),t.xp6(1),t.Q6J("ngIf",o.submitted&&o.f.password.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(27,f,o.submitted&&o.f.confirmPassword.errors)),t.xp6(1),t.Q6J("ngIf",o.submitted&&o.f.confirmPassword.errors),t.xp6(2),t.Q6J("ngClass",t.VKq(29,f,o.submitted&&o.f.acceptTerms.errors)),t.xp6(3),t.Q6J("ngIf",o.submitted&&o.f.acceptTerms.errors),t.xp6(2),t.Q6J("disabled",o.submitting),t.xp6(1),t.Q6J("ngIf",o.submitting))},dependencies:[m.mk,m.O5,i._Y,i.YN,i.Kr,i.Fj,i.Wl,i.EJ,i.JJ,i.JL,i.sg,i.u,s.rH],encapsulation:2}),n})();function K(n,r){1&n&&(t.TgZ(0,"div"),t._uU(1," Verifying... "),t.qZA())}function G(n,r){1&n&&(t.TgZ(0,"div"),t._uU(1," Verification failed, you can also verify your account using the "),t.TgZ(2,"a",3),t._uU(3,"forgot password"),t.qZA(),t._uU(4," page. "),t.qZA())}var u=(()=>{return(n=u||(u={}))[n.Verifying=0]="Verifying",n[n.Failed=1]="Failed",u;var n})();let X=(()=>{class n{constructor(e,o,a,g){this.route=e,this.router=o,this.accountService=a,this.alertService=g,this.EmailStatus=u,this.emailStatus=u.Verifying}ngOnInit(){const e=this.route.snapshot.queryParams.token;this.router.navigate([],{relativeTo:this.route,replaceUrl:!0}),this.accountService.verifyEmail(e).pipe((0,p.P)()).subscribe({next:()=>{this.alertService.success("Verification successful, you can now login",{keepAfterRouteChange:!0}),this.router.navigate(["../login"],{relativeTo:this.route})},error:()=>{this.emailStatus=u.Failed}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(s.gz),t.Y36(s.F0),t.Y36(c.BR),t.Y36(c.c9))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:5,vars:2,consts:[[1,"card-header"],[1,"card-body"],[4,"ngIf"],["routerLink","forgot-password"]],template:function(e,o){1&e&&(t.TgZ(0,"h3",0),t._uU(1,"Verify Email"),t.qZA(),t.TgZ(2,"div",1),t.YNc(3,K,2,0,"div",2),t.YNc(4,G,5,0,"div",2),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngIf",o.emailStatus==o.EmailStatus.Verifying),t.xp6(1),t.Q6J("ngIf",o.emailStatus==o.EmailStatus.Failed))},dependencies:[m.O5,s.rH],encapsulation:2}),n})();var j=d(8746);function W(n,r){1&n&&(t.TgZ(0,"div"),t._uU(1,"Email is required"),t.qZA())}function D(n,r){1&n&&(t.TgZ(0,"div"),t._uU(1,"Email is invalid"),t.qZA())}function $(n,r){if(1&n&&(t.TgZ(0,"div",10),t.YNc(1,W,2,0,"div",11),t.YNc(2,D,2,0,"div",11),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.email.errors.required),t.xp6(1),t.Q6J("ngIf",e.f.email.errors.email)}}function tt(n,r){1&n&&t._UZ(0,"span",12)}const nt=function(n){return{"is-invalid":n}};let et=(()=>{class n{constructor(e,o,a){this.formBuilder=e,this.accountService=o,this.alertService=a,this.loading=!1,this.submitted=!1}ngOnInit(){this.form=this.formBuilder.group({email:["",[i.kI.required,i.kI.email]]})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.loading=!0,this.accountService.forgotPassword(this.f.email.value).pipe((0,p.P)()).pipe((0,j.x)(()=>this.loading=!1)).subscribe({next:()=>this.alertService.success("Please check your email for password reset instructions"),error:e=>this.alertService.error(e)}))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.qu),t.Y36(c.BR),t.Y36(c.c9))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:15,vars:7,consts:[[1,"card-header"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"mb-3"],[1,"form-label"],["type","text","formControlName","email",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["routerLink","../login",1,"btn","btn-link"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(e,o){1&e&&(t.TgZ(0,"h3",0),t._uU(1,"Forgot Password"),t.qZA(),t.TgZ(2,"div",1)(3,"form",2),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(4,"div",3)(5,"label",4),t._uU(6,"Email"),t.qZA(),t._UZ(7,"input",5),t.YNc(8,$,3,2,"div",6),t.qZA(),t.TgZ(9,"div",3)(10,"button",7),t.YNc(11,tt,1,0,"span",8),t._uU(12," Submit "),t.qZA(),t.TgZ(13,"a",9),t._uU(14,"Cancel"),t.qZA()()()()),2&e&&(t.xp6(3),t.Q6J("formGroup",o.form),t.xp6(4),t.Q6J("ngClass",t.VKq(5,nt,o.submitted&&o.f.email.errors)),t.xp6(1),t.Q6J("ngIf",o.submitted&&o.f.email.errors),t.xp6(2),t.Q6J("disabled",o.loading),t.xp6(1),t.Q6J("ngIf",o.loading))},dependencies:[m.mk,m.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,s.rH],encapsulation:2}),n})();function ot(n,r){1&n&&(t.TgZ(0,"div"),t._uU(1," Validating token... "),t.qZA())}function rt(n,r){1&n&&(t.TgZ(0,"div"),t._uU(1," Token validation failed, if the token has expired you can get a new one at the "),t.TgZ(2,"a",4),t._uU(3,"forgot password"),t.qZA(),t._uU(4," page. "),t.qZA())}function it(n,r){1&n&&(t.TgZ(0,"div"),t._uU(1,"Password is required"),t.qZA())}function st(n,r){1&n&&(t.TgZ(0,"div"),t._uU(1,"Password must be at least 6 characters"),t.qZA())}function at(n,r){if(1&n&&(t.TgZ(0,"div",14),t.YNc(1,it,2,0,"div",2),t.YNc(2,st,2,0,"div",2),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.password.errors.required),t.xp6(1),t.Q6J("ngIf",e.f.password.errors.minlength)}}function ct(n,r){1&n&&(t.TgZ(0,"div"),t._uU(1,"Confirm Password is required"),t.qZA())}function dt(n,r){1&n&&(t.TgZ(0,"div"),t._uU(1,"Passwords must match"),t.qZA())}function mt(n,r){if(1&n&&(t.TgZ(0,"div",14),t.YNc(1,ct,2,0,"div",2),t.YNc(2,dt,2,0,"div",2),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.confirmPassword.errors.required),t.xp6(1),t.Q6J("ngIf",e.f.confirmPassword.errors.mustMatch)}}function ft(n,r){1&n&&t._UZ(0,"span",15)}const P=function(n){return{"is-invalid":n}};function lt(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"form",5),t.NdJ("ngSubmit",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.onSubmit())}),t.TgZ(1,"div",6)(2,"label",7),t._uU(3,"Password"),t.qZA(),t._UZ(4,"input",8),t.YNc(5,at,3,2,"div",9),t.qZA(),t.TgZ(6,"div",6)(7,"label",7),t._uU(8,"Confirm Password"),t.qZA(),t._UZ(9,"input",10),t.YNc(10,mt,3,2,"div",9),t.qZA(),t.TgZ(11,"div",6)(12,"button",11),t.YNc(13,ft,1,0,"span",12),t._uU(14," Reset Password "),t.qZA(),t.TgZ(15,"a",13),t._uU(16,"Cancel"),t.qZA()()()}if(2&n){const e=t.oxw();t.Q6J("formGroup",e.form),t.xp6(4),t.Q6J("ngClass",t.VKq(7,P,e.submitted&&e.f.password.errors)),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.f.password.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(9,P,e.submitted&&e.f.confirmPassword.errors)),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.f.confirmPassword.errors),t.xp6(2),t.Q6J("disabled",e.loading),t.xp6(1),t.Q6J("ngIf",e.loading)}}var l=(()=>{return(n=l||(l={}))[n.Validating=0]="Validating",n[n.Valid=1]="Valid",n[n.Invalid=2]="Invalid",l;var n})();const gt=[{path:"",component:Z,children:[{path:"login",component:b},{path:"register",component:H},{path:"verify-email",component:X},{path:"forgot-password",component:et},{path:"reset-password",component:(()=>{class n{constructor(e,o,a,g,_){this.formBuilder=e,this.route=o,this.router=a,this.accountService=g,this.alertService=_,this.TokenStatus=l,this.tokenStatus=l.Validating,this.loading=!1,this.submitted=!1}ngOnInit(){this.form=this.formBuilder.group({password:["",[i.kI.required,i.kI.minLength(6)]],confirmPassword:["",i.kI.required]},{validator:(0,h.Yf)("password","confirmPassword")});const e=this.route.snapshot.queryParams.token;this.router.navigate([],{relativeTo:this.route,replaceUrl:!0}),this.accountService.validateResetToken(e).pipe((0,p.P)()).subscribe({next:()=>{this.token=e,this.tokenStatus=l.Valid},error:()=>{this.tokenStatus=l.Invalid}})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.loading=!0,this.accountService.resetPassword(this.token,this.f.password.value,this.f.confirmPassword.value).pipe((0,p.P)()).subscribe({next:()=>{this.alertService.success("Password reset successful, you can now login",{keepAfterRouteChange:!0}),this.router.navigate(["../login"],{relativeTo:this.route})},error:e=>{this.alertService.error(e),this.loading=!1}}))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.qu),t.Y36(s.gz),t.Y36(s.F0),t.Y36(c.BR),t.Y36(c.c9))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:6,vars:3,consts:[[1,"card-header"],[1,"card-body"],[4,"ngIf"],[3,"formGroup","ngSubmit",4,"ngIf"],["routerLink","../forgot-password"],[3,"formGroup","ngSubmit"],[1,"mb-3"],[1,"form-label"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","password","formControlName","confirmPassword",1,"form-control",3,"ngClass"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["routerLink","../login",1,"btn","btn-link"],[1,"invalid-feedback"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(e,o){1&e&&(t.TgZ(0,"h3",0),t._uU(1,"Reset Password"),t.qZA(),t.TgZ(2,"div",1),t.YNc(3,ot,2,0,"div",2),t.YNc(4,rt,5,0,"div",2),t.YNc(5,lt,17,11,"form",3),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngIf",o.tokenStatus==o.TokenStatus.Validating),t.xp6(1),t.Q6J("ngIf",o.tokenStatus==o.TokenStatus.Invalid),t.xp6(1),t.Q6J("ngIf",o.tokenStatus==o.TokenStatus.Valid))},dependencies:[m.mk,m.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,s.rH],encapsulation:2}),n})()},{path:"**",component:b}]}];let pt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.Bz.forChild(gt),s.Bz]}),n})(),ut=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[m.ez,i.UX,pt]}),n})()}}]);