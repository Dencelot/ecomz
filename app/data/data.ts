import { title } from "process";

export const data = {
   top:{
      title:'Готовое мобильное приложение',
      subtitle:'для вашего бизнеса',
      arrdown:'Узнать больше',
      btn:{big:'Окей, давайте!',small:'Давайте!'},
      question:{title:'Есть проект?',subtitle:'Давайте обсудим'}
   },
   middle:{
      title:{white:'Быстрый запуск приложений',color:'для e-commerce и розницы'},
      texts:[
         {
         id:1,
         title:`До 10 раз 
         быстрее сайта
         `,
         descrMin:`Приложения используют кэширование и более эффективные алгоритмы загрузки данных, чем веб-сайты, что способствует их быстрой работе.<br/><br/>`,
         descr:`
         Приложения используют кэширование и более эффективные алгоритмы загрузки данных, чем веб-сайты, что способствует их быстрой работе.<br/><br/>
         Приложения используют кэширование и более эффективные алгоритмы загрузки данных, чем веб-сайты, что способствует их быстрой работе.`
         },
         {
            id:2,
            title:`Бесшовная интеграция
            с сайтом`,
            descrMin:`Бесшовная интеграция с сайтом означает, что приложение и сайт работают вместе, как единое целое.<br/><br/>`,
            descr:`
            Приложения используют кэширование и более эффективные алгоритмы загрузки данных, чем веб-сайты, что способствует их быстрой работе.<br/><br/>
            Приложения используют кэширование и более эффективные алгоритмы загрузки данных, чем веб-сайты, что способствует их быстрой работе.`
         },
         {
            id:3,
            title:`Интеграция
            с любыми сервисами`,
            descrMin:`Интеграция приложения с сервисами доставки, оплаты и пр. позволяет увеличить продажи и снизить затраты на доставку.<br/><br/>`,
            descr:`
            Приложения используют кэширование и более эффективные алгоритмы загрузки данных, чем веб-сайты, что способствует их быстрой работе.<br/><br/>
            Приложения используют кэширование и более эффективные алгоритмы загрузки данных, чем веб-сайты, что способствует их быстрой работе.`
         }
      ],
      blocks:[
         {
         id:1,
         title:`Работа с аудиторией
         `,
         descr:`QR коды, push уведомления и т.д.`,
         },
         {
            id:2,
            title:`Встроенная аналитика
         `,
         descr:`Google Analytics`,
         },
         {
            id:3,
            title:`Работает на iOS и Android
         `,
         descr:`Кроссплатформенное приложение`,
         }
      ],
      possibilities:{
         title:"Возможности приложения",
         first:{
            title:"Главная страница",
            img:"/img/middle/ecomz_space_invader.png",
            slider:
               [
                  {  
                  title:"Сторисы",
                  subtitle:"коммуникация с покупателями",
                  img:"/img/middle/fs1.png",
                  },
                  {  
                  title:"Выбор города",
                  subtitle:"определяет логистику и оплату",
                  img:"/img/middle/fs2.png",
                  },
                  {  
                  title:"Диплинки",
                  subtitle:"мгновенный переход из веба",
                  img:"/img/middle/fs3.png",
                  },
                  {  
                  title:"Управление баннерами",
                  subtitle:"настройка рекламного контента",
                  img:"/img/middle/fs4.png",
                  img2:"/img/middle/fs6.png",

                  }
               ]
            
         },
         second:{
            title:"Карточка товара",
            img:"/img/middle/ecomz_space_invader2.png",
            slider:
               [
                  {  
                  title:"Множество фото и видео",
                  subtitle:"удобное управление каталогом",
                  img:"/img/middle/ss1.png",
                  },
                  {  
                  title:"Отзывы",
                  subtitle:"рейтинг  товаров",
                  img:"/img/middle/ss2.png",
                  },
                  {  
                  title:"Список наличия",
                  subtitle:"по магазинам и складам",
                  img:"/img/middle/ss3.png",
                  },
                  {  
                  title:"Похожие товары",
                  subtitle:"дополнительные товарные предложения",
                  img:"/img/middle/ss4.png",
                  }
               ]
            
         },
         third:{
            title:"Список товаров",
            img:"/img/middle/ecomz_space_invader3.png",
            slider:
               [
                  {  
                  title:"Быстрый облачный поиск",
                  subtitle:"умный поиск по каталогу",
                  img:"/img/middle/ts1.png",
                  },
                  {  
                  title:"Фильтрация по параметрам",
                  subtitle:"простая навигация в каталоге",
                  img:"/img/middle/ts2.png",
                  },
                  {  
                  title:"Испытайте приложение  прямо тут!",
                  btn:"Настроить свое приложение",
                  img:"/img/middle/ts3.png",
                  }
               ]
            
         },
         btn:"Запросить демо"
      },
      rates:{
         title:"Выберите свой тариф",
         list:[
            {
               id:1,
               title:'START',
               subtitle:'Что входит в стоимость:',
               hit:false,
               img:'/img/middle/ninja.png',
               
            },
            {
               id:2,
               title:'PRO',
               subtitle:'Что входит в стоимость:',
               hit:true,
               img:'/img/middle/ninja2.png',
               
            },
            {
               id:3,
               title:'MAX',
               subtitle:'Что входит в стоимость:',
               hit:false,
               img:'/img/middle/ninja3.png',
               
            }
         ],
         links:[
            {
               id:1,
               text:'Интеграция с сайтом',
               active:[1,2,3]
            },
            {
               id:2,
               text:'Панель управления контентом',
               active:[1,2,3]
            },
            {
               id:3,
               text:'Интеграция с Mindbox',
               active:[2,3]
            },
            {
               id:4,
               text:'Умный поиск и рекомендации',
               active:[2,3]
            },
            {
               id:5,
               text:'Видео-отзывы',
               active:[3]
            },
         ],
         btn:'Узнать больше'
      }
   },
   bottom:{
      partners:{
         title:'Сотрудничаем с',
         subtitle:'лидерами рынка'
      },
      list:[
         {
            id:1,
            img:'/img/bottom/TVOE.png',
            imgmob:'/img/bottom/TVOEmob.png',

            title:'ТВОЕ',
            link:'https://tvoe.ru/'
         },
         {
            id:2,
            imgmob:'/img/bottom/maratorgmob.png',
            img:'/img/bottom/maratorg.png',
            title:'Мираторг',
            link:'https://shop.miratorg.ru'
         },
         {
            id:3,
            imgmob:'/img/bottom/instrumentmob.png',
            img:'/img/bottom/instrument.png',
            title:'Мир Инструмента',
            link:'https://instrument.ru/'
         },
         {
            id:4,
            imgmob:'/img/bottom/denzelmob.png',
            img:'/img/bottom/denzel.png',
            title:'Дензел',
            link:'https://denzel-power.com'
         },
         {
            id:5,
            imgmob:'/img/bottom/rowentamob.png',
            img:'/img/bottom/rowenta.png',
            title:'Ровента',
            link:'https://shop.rowenta.ru'
         },
         {
            id:6,
            imgmob:'/img/bottom/tefalmob.png',
            img:'/img/bottom/tefal.png',
            title:'Тефаль',
            link:'https://tefal.ru/'
         }
      ]

   },
   header:{
      hash:'О продукте',
      link:'Кастомизация приложения',
      popup:'Контакты'
   },
   footer:{
      email:{
         text:'ecomz777@mail.ru',
         link:'mailto:ecomz777@mail.ru'
      },
      tel:{
         text:'+7 977 948-34-67',
         link:'tel:+79779483467'
      },
      map:{
         text:'г. Санкт-Петербург, ул. Бухарестская 30, оф. 577',
         link:'https://yandex.ru/maps/-/CDbuEHIy'
      },
      copy:{
         text:'© 2023, ecomz – Готовое мобильное приложение для вашего бизнеса'
      }
      
   }
}