import User from "@/components/user/User";
import UserForm from "@/components/form/UserForm";

export const routes = [
    {path: '/', name: 'user', component: User},
    {path: '/form', name: 'form', component: UserForm}
];

