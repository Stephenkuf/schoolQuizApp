// import index from '@/index.vue';
import user from '../components/appComponent/user_dashboard';
import teacher_dashboard from '../components/appComponent/teacher_dashboard';
import all_flashcards from '../components/appComponent/all_flashcards';
import create_flash from '../components/appComponent/create_flash';
import create_resource from '../components/appComponent/create_resource';
import edit_profile from '../components/appComponent/edit-profile';
import create_question from '../components/appComponent/create_question';
import error from '../components/appComponent/error_page';
import log_in from '../components/appComponent/log-in';
import my_resources from '../components/appComponent/my_resources';
import question1 from '../components/appComponent/question-group1';
import question2 from '../components/appComponent/question-group2';
import register from '../components/appComponent/register';
import flashboard from '../components/appComponent/flash_board';
import set_new_pass from '../components/appComponent/set-new-password';
import all_questions from '../components/appComponent/all_questions';
import single_question from '../components/appComponent/single_question';
import single_flashcard from '../components/appComponent/single_flashcard';
import start_quiz from '../components/appComponent/start_quiz';
import subject_select from '../components/appComponent/subject_select';
import success from '../components/appComponent/success-page';
import user_table from '../components/appComponent/user-table';
import view_events from '../components/appComponent/view-events';
import view_profile from '../components/appComponent/view-profile';
import confirm_reg from '../components/appComponent/confirm-registration';

export const routes = [
  
  // {
  //   path: '/index',
  //   name: 'index',
  //   component: index,
  //   meta: {}
  // }, 
  {
    path:'*',
    redirect:'/login'
  },
  {
    path:'/',
    redirect:'/login'
  },
  {
    path: '/login',
    name: 'login',
    component: log_in,
    meta: {}
  },
  {
    path: '/user',
    name: 'user',
    component: user,
    meta: {
      requiresAuth:true
    }
  },
  {
    path: '/create-flash',
    name: 'create-flash',
    component: create_flash,
    meta: {}
  },
  {
    path: '/create_resource',
    name: 'create-resource',
    component: create_resource,
    meta: {}
  },
  {
    path: '/create_question',
    name: 'create-question',
    component: create_question,
    meta: {}
  },
  {
    path: '/edit_profile',
    name: 'edit_profile',
    component: edit_profile,
    meta: {}
  },
 {
    path: '/error',
    name: 'error_page',
    component: error,
    meta: {}
  },
  {
    path: '/confirm_reg',
    name: 'confirm_reg',
    component:confirm_reg,
    meta: {}
  },  
  

  {
    path: '/subject_select',
    name: 'subject_select',
    component: subject_select,
    meta: {}
  },
  {
    path: '/myresources',
    name: 'myresources',
    component: my_resources,
    meta: {}
  },
 
  {
    path: '/question1',
    name: 'question1',
    component: question1,
    meta: {}
  },
  {
    path: '/questions',
    name: 'questions',
    component:all_questions,
    meta: {}
  },

  {
    path: '/question2',
    name: 'question2',
    component: question2,
    meta: {}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {}
  },
  {
    path: '/flashboard',
    name: 'flashboard',
    component: flashboard,
    meta: {}
  },
  
  {
    path: '/set_new_pass',
    name: 'setnewpass',
    component: set_new_pass,
    meta: {}
  },

   
  {
    path: '/single_flashcard',
    name: 'singleflash',
    component: single_flashcard,
    meta: {}
  },

   
  {
    path: '/single_question',
    name: 'singlequestion',
    component: single_question,
    meta: {}
  },
  
  {
    path: '/start_quiz',
    name: 'start_quiz',
    component: start_quiz,
    meta: {}
  },

  {
    path: '/success',
    name: 'success',
    component: success,
    meta: {}
  },
  
  {
    path: '/user_table',
    name: 'user_table',
    component: user_table,
    meta: {}
  },
  {
    path: '/view_events',
    name: 'view_events',
    component: view_events,
    meta: {}
  },
  {
    path: '/all_flashcards',
    name: '/all_flashcards',
    component: all_flashcards,
    meta: {}
  },
  {
    path: '/view_profile',
    name: 'view_profile',
    component: view_profile,
    meta: {}
  },
  {
    path: '/admin',
    name: 'admindashboard',
    component: teacher_dashboard,
    meta: {}
  }     
    
];

// routes.beforeEach((to, from, next) =>{
//   const currentUser = firebase.auth().currentUser;
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//   if ( requiresAuth && !currentUser) next('/login');
//   else if (!requiresAuth && currentUser) next('/user');
//   else next();
// });

