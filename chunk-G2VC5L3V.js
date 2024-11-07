import{a as U,b as J}from"./chunk-WEQ2M5YD.js";import{U as j,W as A,Y as H,Z as I,_ as N,aa as B,ba as G,da as $,ha as q,ka as z,ma as O,qa as Q}from"./chunk-7AUTWQVO.js";import{e as V,g as D}from"./chunk-HEHDJ4NV.js";import{Aa as c,Bb as M,Db as f,N as h,Nb as l,Ob as R,Qb as F,R as w,Sa as a,Vb as T,Wb as x,bb as u,h as g,hb as _,ka as v,lb as m,oa as y,qb as S,rb as k,sb as P,tb as L,ub as e,vb as i,wb as s,xa as b,ya as C,yb as E,za as p}from"./chunk-VJKZDLWZ.js";var W=()=>["/pets/add"];function Y(n,o){n&1&&(e(0,"div",12),s(1,"mat-spinner",15),i()),n&2&&(a(),m("diameter",32))}function Z(n,o){n&1&&(e(0,"div",13),p(),e(1,"svg",16),s(2,"path",17),i(),c(),e(3,"p",18),l(4,"Nothing to Show"),i(),e(5,"button",19),l(6,"Add Now"),i()()),n&2&&m("routerLink",x(1,W))}function ee(n,o){if(n&1){let t=E();e(0,"tr",20)(1,"td",21),s(2,"img",22),i(),e(3,"td",23)(4,"p",24),l(5),i(),e(6,"p",25),l(7),i()(),e(8,"td",26)(9,"button",27),M("click",function(){let d=b(t).$implicit,X=f(2);return C(X.deletePet(d.id))}),p(),e(10,"svg",28),s(11,"path",29),i()()()()}if(n&2){let t=o.$implicit;a(5),R(t.name),a(2),F("",t.animalType," - ",t.breed,"")}}function te(n,o){if(n&1&&(e(0,"table",14)(1,"tbody"),P(2,ee,12,3,"tr",20,k),i()()),n&2){let t=f();a(2),L(t.pets())}}var K=class n{firestore=v(j);pets=u([]);searchControl=new z("");loading=u(!0);ngOnInit(){this.getPets(),this.searchControl.valueChanges.pipe(h(300),w()).subscribe(o=>{this.getPets(o)})}getPets(o=""){this.loading.set(!0);let t=H(this.firestore,"pets"),r;o?r=B(t,G("search","array-contains",o.toLowerCase())):r=t,A(r,{idField:"id"}).subscribe(d=>{this.pets.set(d),this.loading.set(!1)})}deletePet(o){return g(this,null,function*(){let t=N(this.firestore,`pets/${o}`);yield I(t)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["app-pet-list-route"]],standalone:!0,features:[T],decls:18,vars:4,consts:[[1,"h-[120px]","border-b","border-gray-300","flex","items-center","px-4"],[1,"max-w-[940px]","w-full","mx-auto","flex","items-center"],[1,"flex-1"],[1,"text-xl","font-semibold","text-gray-800"],[1,"text-sm","text-gray-500","mt-1"],[1,"bg-black","text-white","uppercase","py-1","px-3","rounded-full","text-[10px]","font-semibold",3,"routerLink"],[1,"max-w-[940px]","mx-auto","py-6"],[1,"relative","mt-10"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-5","w-5","text-gray-400","absolute","left-3","top-1/2","transform","-translate-y-1/2"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"],["type","text","placeholder","Search for straight matches...",1,"w-full","pl-10","pr-4","py-2","text-sm","border","border-gray-300","rounded-full","bg-transparent","focus:outline-none","focus:ring-2","focus:ring-gray-300","focus:border-transparent",3,"formControl"],[1,"mt-8"],[1,"w-full","flex","items-center","justify-center","h-[300px]"],[1,"mt-8","w-full","bg-gray-100","rounded-lg","p-6","flex","flex-col","items-center","justify-center",3,"routerLink"],[1,"w-full"],[3,"diameter"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-12","w-12","text-gray-400","mb-4"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"],[1,"text-base","font-medium","text-gray-900"],[1,"bg-black","text-white","uppercase","py-1","px-3","rounded-full","text-[10px]","font-semibold","mt-4"],[1,"border-b","border-gray-200"],[1,"py-4","pr-4","w-14"],["src","https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y","alt","Pet Avatar",1,"w-8","h-8","rounded-full"],[1,"py-4"],[1,"font-semibold","text-sm"],[1,"text-xs","text-gray-500","opacity-70"],[1,"py-4","text-right"],[1,"p-2","rounded-full","ml-2",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-4","w-4","text-red-600"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"]],template:function(t,r){t&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),l(4,"Pets"),i(),e(5,"p",4),l(6,"Manage your pets here"),i()(),e(7,"button",5),l(8,"Add"),i()()(),e(9,"div",6)(10,"div",7),p(),e(11,"svg",8),s(12,"path",9),i(),c(),s(13,"input",10),i(),e(14,"div",11),_(15,Y,2,1,"div",12)(16,Z,7,2,"div",13)(17,te,4,0,"table",14),i()()),t&2&&(a(7),m("routerLink",x(3,W)),a(6),m("formControl",r.searchControl),a(2),S(r.loading()?15:r.pets().length?17:16))},dependencies:[Q,$,q,O,J,U,D,V]})};export{K as PetListRouteComponent};