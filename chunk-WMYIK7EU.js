import{a as q,b as z}from"./chunk-WEQ2M5YD.js";import{U as D,W as N,Y as j,aa as H,ba as I,da as A,ha as B,ka as P,ma as V,qa as G}from"./chunk-7AUTWQVO.js";import{e as R,g as T}from"./chunk-HEHDJ4NV.js";import{Aa as p,Cc as F,Db as M,N as f,Nb as a,Ob as S,Qb as _,R as x,Sa as r,Vb as k,Wb as u,Xb as L,Yb as E,bb as c,hb as y,ka as g,lb as s,oa as h,qb as v,rb as b,sb as w,tb as C,ub as e,vb as o,wb as m,za as d}from"./chunk-VJKZDLWZ.js";var U=()=>["/moods/add"],$=()=>["/mood/add"];function J(t,n){t&1&&(e(0,"div",12),m(1,"mat-spinner",15),o()),t&2&&(r(),s("diameter",32))}function K(t,n){t&1&&(e(0,"div",13),d(),e(1,"svg",16),m(2,"path",17),o(),p(),e(3,"p",18),a(4,"Nothing to Show"),o(),e(5,"button",19),a(6,"Add Now"),o()()),t&2&&s("routerLink",u(1,$))}function W(t,n){if(t&1&&(e(0,"tr",20)(1,"td",21)(2,"p",22),a(3),L(4,"date"),o(),e(5,"p",23),a(6),o()()()),t&2){let i=n.$implicit;r(3),S(E(4,3,i.date)),r(3),_("",i.petName," - ",i.mood,"")}}function X(t,n){if(t&1&&(e(0,"table",14)(1,"tbody"),w(2,W,7,5,"tr",20,b),o()()),t&2){let i=M();r(2),C(i.moods())}}var O=class t{firestore=g(D);moods=c([]);searchControl=new P("");loading=c(!0);ngOnInit(){this.getMoods(),this.searchControl.valueChanges.pipe(f(300),x()).subscribe(n=>{this.getMoods(n)})}getMoods(n=""){this.loading.set(!0);let i=j(this.firestore,"moods"),l;n?l=H(i,I("search","array-contains",n.toLowerCase())):l=i,N(l,{idField:"id"}).subscribe(Q=>{this.moods.set(Q),this.loading.set(!1)})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=h({type:t,selectors:[["app-mood-list-route"]],standalone:!0,features:[k],decls:18,vars:4,consts:[[1,"h-[120px]","border-b","border-gray-300","flex","items-center","px-4"],[1,"max-w-[940px]","w-full","mx-auto","flex","items-center"],[1,"flex-1"],[1,"text-xl","font-semibold","text-gray-800"],[1,"text-sm","text-gray-500","mt-1"],[1,"bg-black","text-white","uppercase","py-1","px-3","rounded-full","text-[10px]","font-semibold",3,"routerLink"],[1,"max-w-[940px]","mx-auto","py-6"],[1,"relative","mt-10"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-5","w-5","text-gray-400","absolute","left-3","top-1/2","transform","-translate-y-1/2"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"],["type","text","placeholder","Search for straight matches...",1,"w-full","pl-10","pr-4","py-2","text-sm","border","border-gray-300","rounded-full","bg-transparent","focus:outline-none","focus:ring-2","focus:ring-gray-300","focus:border-transparent",3,"formControl"],[1,"mt-8"],[1,"w-full","flex","items-center","justify-center","h-[300px]"],[1,"mt-8","w-full","bg-gray-100","rounded-lg","p-6","flex","flex-col","items-center","justify-center",3,"routerLink"],[1,"w-full"],[3,"diameter"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-12","w-12","text-gray-400","mb-4"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"],[1,"text-base","font-medium","text-gray-900"],[1,"bg-black","text-white","uppercase","py-1","px-3","rounded-full","text-[10px]","font-semibold","mt-4"],[1,"border-b","border-gray-200"],[1,"py-4","pr-4","w-14"],[1,"font-semibold","text-sm"],[1,"text-xs","text-gray-500"]],template:function(i,l){i&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),a(4,"Moods"),o(),e(5,"p",4),a(6,"Track your pets mood"),o()(),e(7,"button",5),a(8,"Add"),o()()(),e(9,"div",6)(10,"div",7),d(),e(11,"svg",8),m(12,"path",9),o(),p(),m(13,"input",10),o(),e(14,"div",11),y(15,J,2,1,"div",12)(16,K,7,2,"div",13)(17,X,4,0,"table",14),o()()),i&2&&(r(7),s("routerLink",u(3,U)),r(6),s("formControl",l.searchControl),r(2),v(l.loading()?15:l.moods().length?17:16))},dependencies:[G,A,B,V,z,q,T,R,F]})};export{O as MoodListRouteComponent};
