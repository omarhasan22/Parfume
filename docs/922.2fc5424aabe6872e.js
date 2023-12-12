"use strict";(self.webpackChunkangular_15_example=self.webpackChunkangular_15_example||[]).push([[922],{8922:(D,_,d)=>{d.r(_),d.d(_,{AccountsModule:()=>G});var o=d(433),m=d(6895),a=d(7784),u=d(590),t=d(8256),l=d(9707);function Z(i,n){1&i&&t._UZ(0,"span",11)}function v(i,n){1&i&&(t.TgZ(0,"span"),t._uU(1,"Delete"),t.qZA())}function A(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td",6),t._uU(2),t.qZA(),t.TgZ(3,"td",6),t._uU(4),t.qZA(),t.TgZ(5,"td",6),t._uU(6),t.qZA(),t.TgZ(7,"td",7)(8,"a",8),t._uU(9,"Edit"),t.qZA(),t.TgZ(10,"button",9),t.NdJ("click",function(){const f=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.deleteAccount(f.id))}),t.YNc(11,Z,1,0,"span",10),t.YNc(12,v,2,0,"span",5),t.qZA()()()}if(2&i){const e=n.$implicit;t.xp6(2),t.lnq("",e.title," ",e.firstName," ",e.lastName,""),t.xp6(2),t.Oqu(e.email),t.xp6(2),t.Oqu(e.role),t.xp6(2),t.MGl("routerLink","edit/",e.id,""),t.xp6(2),t.Q6J("disabled",e.isDeleting),t.xp6(1),t.Q6J("ngIf",e.isDeleting),t.xp6(1),t.Q6J("ngIf",!e.isDeleting)}}function x(i,n){1&i&&(t.TgZ(0,"tr")(1,"td",12),t._UZ(2,"span",13),t.qZA()())}let b=(()=>{class i{constructor(e){this.accountService=e}ngOnInit(){this.accountService.getAll().pipe((0,u.P)()).subscribe(e=>this.accounts=e)}deleteAccount(e){this.accounts.find(s=>s.id===e).isDeleting=!0,this.accountService.delete(e).pipe((0,u.P)()).subscribe(()=>{this.accounts=this.accounts.filter(s=>s.id!==e)})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(l.BR))},i.\u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],decls:19,vars:2,consts:[["routerLink","add",1,"btn","btn-sm","btn-success","mb-2"],[1,"table","table-striped"],[2,"width","30%"],[2,"width","10%"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"align-middle"],[2,"white-space","nowrap"],[1,"btn","btn-sm","btn-primary","me-1",3,"routerLink"],[1,"btn","btn-sm","btn-danger","btn-delete-account",3,"disabled","click"],["class","spinner-border spinner-border-sm",4,"ngIf"],[1,"spinner-border","spinner-border-sm"],["colspan","4",1,"text-center"],[1,"spinner-border","spinner-border-lg","align-center"]],template:function(e,r){1&e&&(t.TgZ(0,"h1"),t._uU(1,"Accounts"),t.qZA(),t.TgZ(2,"p"),t._uU(3,"All accounts from secure (admin only) api end point:"),t.qZA(),t.TgZ(4,"a",0),t._uU(5,"Create Account"),t.qZA(),t.TgZ(6,"table",1)(7,"thead")(8,"tr")(9,"th",2),t._uU(10,"Name"),t.qZA(),t.TgZ(11,"th",2),t._uU(12,"Email"),t.qZA(),t.TgZ(13,"th",2),t._uU(14,"Role"),t.qZA(),t._UZ(15,"th",3),t.qZA()(),t.TgZ(16,"tbody"),t.YNc(17,A,13,9,"tr",4),t.YNc(18,x,3,0,"tr",5),t.qZA()()),2&e&&(t.xp6(17),t.Q6J("ngForOf",r.accounts),t.xp6(1),t.Q6J("ngIf",!r.accounts))},dependencies:[m.sg,m.O5,a.rH],encapsulation:2}),i})();var T=d(9599);function q(i,n){1&i&&(t.TgZ(0,"div"),t._uU(1,"Title is required"),t.qZA())}function h(i,n){if(1&i&&(t.TgZ(0,"div",29),t.YNc(1,q,2,0,"div",21),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.title.errors.required)}}function C(i,n){1&i&&(t.TgZ(0,"div"),t._uU(1,"First Name is required"),t.qZA())}function U(i,n){if(1&i&&(t.TgZ(0,"div",29),t.YNc(1,C,2,0,"div",21),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.firstName.errors.required)}}function N(i,n){1&i&&(t.TgZ(0,"div"),t._uU(1,"Last Name is required"),t.qZA())}function J(i,n){if(1&i&&(t.TgZ(0,"div",29),t.YNc(1,N,2,0,"div",21),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.lastName.errors.required)}}function I(i,n){1&i&&(t.TgZ(0,"div"),t._uU(1,"Email is required"),t.qZA())}function w(i,n){1&i&&(t.TgZ(0,"div"),t._uU(1,"Email must be a valid email address"),t.qZA())}function E(i,n){if(1&i&&(t.TgZ(0,"div",29),t.YNc(1,I,2,0,"div",21),t.YNc(2,w,2,0,"div",21),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.email.errors.required),t.xp6(1),t.Q6J("ngIf",e.f.email.errors.email)}}function Q(i,n){1&i&&(t.TgZ(0,"div"),t._uU(1,"Role is required"),t.qZA())}function Y(i,n){if(1&i&&(t.TgZ(0,"div",29),t.YNc(1,Q,2,0,"div",21),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.role.errors.required)}}function S(i,n){1&i&&(t.TgZ(0,"div")(1,"h3",30),t._uU(2,"Change Password"),t.qZA(),t.TgZ(3,"p"),t._uU(4,"Leave blank to keep the same password"),t.qZA()())}function y(i,n){1&i&&(t.TgZ(0,"div"),t._uU(1,"Password is required"),t.qZA())}function M(i,n){1&i&&(t.TgZ(0,"div"),t._uU(1,"Password must be at least 6 characters"),t.qZA())}function k(i,n){if(1&i&&(t.TgZ(0,"div",29),t.YNc(1,y,2,0,"div",21),t.YNc(2,M,2,0,"div",21),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.password.errors.required),t.xp6(1),t.Q6J("ngIf",e.f.password.errors.minlength)}}function L(i,n){1&i&&(t.TgZ(0,"div"),t._uU(1,"Confirm Password is required"),t.qZA())}function P(i,n){1&i&&(t.TgZ(0,"div"),t._uU(1,"Passwords must match"),t.qZA())}function F(i,n){if(1&i&&(t.TgZ(0,"div",29),t.YNc(1,L,2,0,"div",21),t.YNc(2,P,2,0,"div",21),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.confirmPassword.errors.required),t.xp6(1),t.Q6J("ngIf",e.f.confirmPassword.errors.mustMatch)}}function B(i,n){1&i&&t._UZ(0,"span",31)}const c=function(i){return{"is-invalid":i}};function K(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"form",2),t.NdJ("ngSubmit",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onSubmit())}),t.TgZ(1,"div",3)(2,"div",4)(3,"label",5),t._uU(4,"Title"),t.qZA(),t.TgZ(5,"select",6),t._UZ(6,"option",7),t.TgZ(7,"option",8),t._uU(8,"Mr"),t.qZA(),t.TgZ(9,"option",9),t._uU(10,"Mrs"),t.qZA(),t.TgZ(11,"option",10),t._uU(12,"Miss"),t.qZA(),t.TgZ(13,"option",11),t._uU(14,"Ms"),t.qZA()(),t.YNc(15,h,2,1,"div",12),t.qZA(),t.TgZ(16,"div",13)(17,"label",5),t._uU(18,"First Name"),t.qZA(),t._UZ(19,"input",14),t.YNc(20,U,2,1,"div",12),t.qZA(),t.TgZ(21,"div",13)(22,"label",5),t._uU(23,"Last Name"),t.qZA(),t._UZ(24,"input",15),t.YNc(25,J,2,1,"div",12),t.qZA()(),t.TgZ(26,"div",3)(27,"div",16)(28,"label",5),t._uU(29,"Email"),t.qZA(),t._UZ(30,"input",17),t.YNc(31,E,3,2,"div",12),t.qZA(),t.TgZ(32,"div",13)(33,"label",5),t._uU(34,"Role"),t.qZA(),t.TgZ(35,"select",18),t._UZ(36,"option",7),t.TgZ(37,"option",19),t._uU(38,"User"),t.qZA(),t.TgZ(39,"option",20),t._uU(40,"Admin"),t.qZA()(),t.YNc(41,Y,2,1,"div",12),t.qZA()(),t.YNc(42,S,5,0,"div",21),t.TgZ(43,"div",3)(44,"div",22)(45,"label",5),t._uU(46,"Password"),t.qZA(),t._UZ(47,"input",23),t.YNc(48,k,3,2,"div",12),t.qZA(),t.TgZ(49,"div",22)(50,"label",5),t._uU(51,"Confirm Password"),t.qZA(),t._UZ(52,"input",24),t.YNc(53,F,3,2,"div",12),t.qZA()(),t.TgZ(54,"div",25)(55,"button",26),t.YNc(56,B,1,0,"span",27),t._uU(57," Save "),t.qZA(),t.TgZ(58,"a",28),t._uU(59,"Cancel"),t.qZA()()()}if(2&i){const e=t.oxw();t.Q6J("formGroup",e.form),t.xp6(5),t.Q6J("ngClass",t.VKq(18,c,e.submitted&&e.f.title.errors)),t.xp6(10),t.Q6J("ngIf",e.submitted&&e.f.title.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(20,c,e.submitted&&e.f.firstName.errors)),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.f.firstName.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(22,c,e.submitted&&e.f.lastName.errors)),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.f.lastName.errors),t.xp6(5),t.Q6J("ngClass",t.VKq(24,c,e.submitted&&e.f.email.errors)),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.f.email.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(26,c,e.submitted&&e.f.role.errors)),t.xp6(6),t.Q6J("ngIf",e.submitted&&e.f.role.errors),t.xp6(1),t.Q6J("ngIf",e.id),t.xp6(5),t.Q6J("ngClass",t.VKq(28,c,e.submitted&&e.f.password.errors)),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.f.password.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(30,c,e.submitted&&e.f.confirmPassword.errors)),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.f.confirmPassword.errors),t.xp6(2),t.Q6J("disabled",e.submitting),t.xp6(1),t.Q6J("ngIf",e.submitting)}}function O(i,n){1&i&&(t.TgZ(0,"div",32),t._UZ(1,"span",33),t.qZA())}let g=(()=>{class i{constructor(e,r,s,f,p){this.formBuilder=e,this.route=r,this.router=s,this.accountService=f,this.alertService=p,this.loading=!1,this.submitting=!1,this.submitted=!1}ngOnInit(){this.id=this.route.snapshot.params.id,this.form=this.formBuilder.group({title:["",o.kI.required],firstName:["",o.kI.required],lastName:["",o.kI.required],email:["",[o.kI.required,o.kI.email]],role:["",o.kI.required],password:["",[o.kI.minLength(6),...this.id?[]:[o.kI.required]]],confirmPassword:[""]},{validator:(0,T.Yf)("password","confirmPassword")}),this.title="Create Account",this.id&&(this.title="Edit Account",this.loading=!0,this.accountService.getById(this.id).pipe((0,u.P)()).subscribe(e=>{this.form.patchValue(e),this.loading=!1}))}get f(){return this.form.controls}onSubmit(){if(this.submitted=!0,this.alertService.clear(),this.form.invalid)return;let e,r;this.submitting=!0,this.id?(e=()=>this.accountService.update(this.id,this.form.value),r="Account updated"):(e=()=>this.accountService.create(this.form.value),r="Account created"),e().pipe((0,u.P)()).subscribe({next:()=>{this.alertService.success(r,{keepAfterRouteChange:!0}),this.router.navigateByUrl("/admin/accounts")},error:s=>{this.alertService.error(s),this.submitting=!1}})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(o.qu),t.Y36(a.gz),t.Y36(a.F0),t.Y36(l.BR),t.Y36(l.c9))},i.\u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],decls:4,vars:3,consts:[[3,"formGroup","ngSubmit",4,"ngIf"],["class","text-center m-5",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"mb-3","col-2"],[1,"form-label"],["formControlName","title",1,"form-select",3,"ngClass"],["value",""],["value","Mr"],["value","Mrs"],["value","Miss"],["value","Ms"],["class","invalid-feedback",4,"ngIf"],[1,"mb-3","col-5"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],[1,"mb-3","col-7"],["type","text","formControlName","email",1,"form-control",3,"ngClass"],["formControlName","role",1,"form-select",3,"ngClass"],["value","User"],["value","Admin"],[4,"ngIf"],[1,"mb-3","col"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],["type","password","formControlName","confirmPassword",1,"form-control",3,"ngClass"],[1,"mb-3"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["routerLink","/admin/accounts",1,"btn","btn-link"],[1,"invalid-feedback"],[1,"pt-3"],[1,"spinner-border","spinner-border-sm","me-1"],[1,"text-center","m-5"],[1,"spinner-border","spinner-border-lg","align-center"]],template:function(e,r){1&e&&(t.TgZ(0,"h1"),t._uU(1),t.qZA(),t.YNc(2,K,60,32,"form",0),t.YNc(3,O,2,0,"div",1)),2&e&&(t.xp6(1),t.Oqu(r.title),t.xp6(1),t.Q6J("ngIf",!r.loading),t.xp6(1),t.Q6J("ngIf",r.loading))},dependencies:[m.mk,m.O5,o._Y,o.YN,o.Kr,o.Fj,o.EJ,o.JJ,o.JL,o.sg,o.u,a.rH],encapsulation:2}),i})();const R=[{path:"",component:b},{path:"add",component:g},{path:"edit/:id",component:g}];let V=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[a.Bz.forChild(R),a.Bz]}),i})(),G=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[m.ez,o.UX,V]}),i})()}}]);